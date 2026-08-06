//
// Aster Communications Inc.
//
// Copyright (c) 2026 Aster Communications Inc.
//
// This file is part of this project.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the AGPLv3 as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// AGPLv3 for more details.
//
// You should have received a copy of the AGPLv3
// along with this program. If not, see <https://www.gnu.org/licenses/>.
//
import * as openpgp from "openpgp";

import { secure_zero_memory } from "./crypto_core";

export async function wrap_vault_key(
  vault_key: Uint8Array,
  recipient_pubkeys: string[],
): Promise<string> {
  if (recipient_pubkeys.length === 0) {
    throw new Error("family_vault_no_recipients");
  }

  const parsed_keys: openpgp.Key[] = [];

  for (const armored of recipient_pubkeys) {
    const key = await openpgp.readKey({ armoredKey: armored });

    parsed_keys.push(key);
  }

  const message = await openpgp.createMessage({ binary: vault_key });
  const encrypted = await openpgp.encrypt({
    message,
    encryptionKeys: parsed_keys,
    format: "armored",
  });

  return typeof encrypted === "string" ? encrypted : encrypted.toString();
}

export async function unwrap_vault_key(
  blob: string,
  my_privkey: string,
  passphrase: string,
): Promise<Uint8Array> {
  const private_key = await openpgp.decryptKey({
    privateKey: await openpgp.readPrivateKey({ armoredKey: my_privkey }),
    passphrase,
  });

  const message = await openpgp.readMessage({ armoredMessage: blob });
  const result = await openpgp.decrypt({
    message,
    decryptionKeys: private_key,
    format: "binary",
  });

  const data = result.data as unknown as Uint8Array;

  return data instanceof Uint8Array ? data : new Uint8Array(data);
}

export async function rewrap_vault_key(
  blob: string,
  my_privkey: string,
  passphrase: string,
  new_recipient_pubkeys: string[],
): Promise<string> {
  const vault_key = await unwrap_vault_key(blob, my_privkey, passphrase);

  try {
    return await wrap_vault_key(vault_key, new_recipient_pubkeys);
  } finally {
    secure_zero_memory(vault_key);
  }
}

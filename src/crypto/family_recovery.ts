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
import {
  array_to_base64,
  base64_to_array,
  generate_key_id,
  generate_random_bytes,
  secure_zero_memory,
} from "./crypto_core";
import { reconstruct, split } from "./family_shamir";
import { unwrap_vault_key, wrap_vault_key } from "./family_vault";

const FAMILY_RECOVERY_KEY_BYTES = 32;

export interface family_encrypted_share {
  guardian_pubkey: string;
  encrypted_share: string;
  share_index: number;
}

export interface family_recovery_setup_result {
  family_recovery_key_id: string;
  encrypted_shares: family_encrypted_share[];
  second_wrapped_backup: string;
  threshold: number;
  total_guardians: number;
}

export async function setup_family_recovery(
  guardian_pubkeys: string[],
  threshold: number,
  user_recovery_backup: Uint8Array,
): Promise<family_recovery_setup_result> {
  if (guardian_pubkeys.length === 0) {
    throw new Error("family_recovery_no_guardians");
  }
  if (threshold < 2) {
    throw new Error("family_recovery_threshold_too_low");
  }
  if (guardian_pubkeys.length < threshold) {
    throw new Error("family_recovery_not_enough_guardians");
  }

  const family_recovery_key = generate_random_bytes(FAMILY_RECOVERY_KEY_BYTES);
  const shares = split(family_recovery_key, threshold, guardian_pubkeys.length);

  const encrypted_shares: family_encrypted_share[] = [];

  try {
    for (let i = 0; i < guardian_pubkeys.length; i++) {
      const share_payload = array_to_base64(shares[i]);
      const encrypted = await wrap_recipient_blob(
        share_payload,
        guardian_pubkeys[i],
      );

      encrypted_shares.push({
        guardian_pubkey: guardian_pubkeys[i],
        encrypted_share: encrypted,
        share_index: shares[i][0],
      });
      secure_zero_memory(shares[i]);
    }

    const wrapped = await wrap_symmetric(
      user_recovery_backup,
      family_recovery_key,
    );

    return {
      family_recovery_key_id: generate_key_id(),
      encrypted_shares,
      second_wrapped_backup: wrapped,
      threshold,
      total_guardians: guardian_pubkeys.length,
    };
  } finally {
    secure_zero_memory(family_recovery_key);
  }
}

export async function reconstruct_recovery(
  decrypted_shares: Uint8Array[],
  second_wrapped_backup: Uint8Array,
): Promise<Uint8Array> {
  if (decrypted_shares.length < 2) {
    throw new Error("family_recovery_not_enough_shares");
  }

  const family_recovery_key = reconstruct(decrypted_shares);

  try {
    return await unwrap_symmetric(second_wrapped_backup, family_recovery_key);
  } finally {
    secure_zero_memory(family_recovery_key);
  }
}

export async function decrypt_recovery_share(
  encrypted_share_blob: string,
  guardian_privkey: string,
  guardian_passphrase: string,
): Promise<Uint8Array> {
  const payload_b64 = await unwrap_recipient_blob(
    encrypted_share_blob,
    guardian_privkey,
    guardian_passphrase,
  );

  return base64_to_array(payload_b64);
}

async function wrap_recipient_blob(
  payload: string,
  recipient_pubkey: string,
): Promise<string> {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(payload);

  return wrap_vault_key(bytes, [recipient_pubkey]);
}

async function unwrap_recipient_blob(
  blob: string,
  privkey: string,
  passphrase: string,
): Promise<string> {
  const bytes = await unwrap_vault_key(blob, privkey, passphrase);
  const decoder = new TextDecoder();
  const text = decoder.decode(bytes);

  secure_zero_memory(bytes);

  return text;
}

async function wrap_symmetric(
  plaintext: Uint8Array,
  key: Uint8Array,
): Promise<string> {
  const nonce = generate_random_bytes(12);
  const aes_key = await crypto.subtle.importKey(
    "raw",
    key as BufferSource,
    { name: "AES-GCM" },
    false,
    ["encrypt"],
  );
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv: nonce as BufferSource },
    aes_key,
    plaintext as BufferSource,
  );
  const combined = new Uint8Array(nonce.length + ciphertext.byteLength);

  combined.set(nonce, 0);
  combined.set(new Uint8Array(ciphertext), nonce.length);

  return array_to_base64(combined);
}

async function unwrap_symmetric(
  wrapped: Uint8Array,
  key: Uint8Array,
): Promise<Uint8Array> {
  const nonce = wrapped.slice(0, 12);
  const ciphertext = wrapped.slice(12);
  const aes_key = await crypto.subtle.importKey(
    "raw",
    key as BufferSource,
    { name: "AES-GCM" },
    false,
    ["decrypt"],
  );
  const plaintext = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: nonce as BufferSource },
    aes_key,
    ciphertext as BufferSource,
  );

  return new Uint8Array(plaintext);
}

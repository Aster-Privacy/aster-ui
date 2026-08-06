"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/crypto/index.ts
var crypto_exports = {};
__export(crypto_exports, {
  array_to_base64: () => array_to_base64,
  base64_to_array: () => base64_to_array,
  decrypt_recovery_share: () => decrypt_recovery_share,
  generate_key_id: () => generate_key_id,
  generate_random_bytes: () => generate_random_bytes,
  reconstruct: () => reconstruct,
  reconstruct_recovery: () => reconstruct_recovery,
  rewrap_vault_key: () => rewrap_vault_key,
  secure_zero_memory: () => secure_zero_memory,
  setup_family_recovery: () => setup_family_recovery,
  split: () => split,
  unwrap_vault_key: () => unwrap_vault_key,
  wrap_vault_key: () => wrap_vault_key
});
module.exports = __toCommonJS(crypto_exports);

// src/crypto/crypto_core.ts
function secure_zero_memory(buffer) {
  crypto.getRandomValues(buffer);
  buffer.fill(0);
}
function array_to_base64(array) {
  let binary = "";
  for (let i = 0; i < array.length; i++) {
    binary += String.fromCharCode(array[i]);
  }
  return btoa(binary);
}
function base64_to_array(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
function generate_random_bytes(length) {
  return crypto.getRandomValues(new Uint8Array(length));
}
function generate_key_id() {
  const bytes = generate_random_bytes(16);
  const hex = Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
  secure_zero_memory(bytes);
  return hex;
}

// src/crypto/family_shamir.ts
var MAX_SHARES = 16;
var MIN_THRESHOLD = 2;
var GF_EXP = new Uint8Array(512);
var GF_LOG = new Uint8Array(256);
function init_gf_tables() {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    GF_EXP[i] = x;
    GF_LOG[x] = i;
    x <<= 1;
    if (x & 256) {
      x ^= 285;
    }
  }
  for (let i = 255; i < 512; i++) {
    GF_EXP[i] = GF_EXP[i - 255];
  }
  GF_LOG[0] = 0;
}
init_gf_tables();
function gf_mul(a, b) {
  if (a === 0 || b === 0) return 0;
  return GF_EXP[GF_LOG[a] + GF_LOG[b]];
}
function gf_div(a, b) {
  if (b === 0) throw new Error("shamir_division_by_zero");
  if (a === 0) return 0;
  return GF_EXP[(GF_LOG[a] + 255 - GF_LOG[b]) % 255];
}
function eval_polynomial(coefficients, x) {
  let result = 0;
  for (let i = coefficients.length - 1; i >= 0; i--) {
    result = gf_mul(result, x) ^ coefficients[i];
  }
  return result;
}
function split(secret, threshold, total) {
  if (!Number.isInteger(threshold) || !Number.isInteger(total)) {
    throw new Error("shamir_invalid_arguments");
  }
  if (threshold < MIN_THRESHOLD) {
    throw new Error("shamir_threshold_too_low");
  }
  if (total < threshold) {
    throw new Error("shamir_total_less_than_threshold");
  }
  if (total > MAX_SHARES) {
    throw new Error("shamir_too_many_shares");
  }
  if (secret.length === 0) {
    throw new Error("shamir_empty_secret");
  }
  const shares = [];
  for (let i = 1; i <= total; i++) {
    const share = new Uint8Array(1 + secret.length);
    share[0] = i;
    shares.push(share);
  }
  const coefficients = new Uint8Array(threshold);
  for (let byte_index = 0; byte_index < secret.length; byte_index++) {
    coefficients[0] = secret[byte_index];
    if (threshold > 1) {
      const random_coeffs = generate_random_bytes(threshold - 1);
      for (let k = 0; k < threshold - 1; k++) {
        coefficients[k + 1] = random_coeffs[k];
      }
      secure_zero_memory(random_coeffs);
    }
    for (let s = 0; s < total; s++) {
      const x = s + 1;
      shares[s][1 + byte_index] = eval_polynomial(coefficients, x);
    }
  }
  secure_zero_memory(coefficients);
  return shares;
}
function reconstruct(shares) {
  if (shares.length < MIN_THRESHOLD) {
    throw new Error("shamir_not_enough_shares");
  }
  const share_length = shares[0].length;
  if (share_length < 2) {
    throw new Error("shamir_share_too_short");
  }
  const xs = [];
  for (const share of shares) {
    if (share.length !== share_length) {
      throw new Error("shamir_share_length_mismatch");
    }
    if (share[0] === 0) {
      throw new Error("shamir_invalid_share_index");
    }
    if (xs.includes(share[0])) {
      throw new Error("shamir_duplicate_share_index");
    }
    xs.push(share[0]);
  }
  const secret_length = share_length - 1;
  const secret = new Uint8Array(secret_length);
  for (let byte_index = 0; byte_index < secret_length; byte_index++) {
    let result = 0;
    for (let i = 0; i < shares.length; i++) {
      let numerator = 1;
      let denominator = 1;
      for (let j = 0; j < shares.length; j++) {
        if (i === j) continue;
        numerator = gf_mul(numerator, xs[j]);
        denominator = gf_mul(denominator, xs[i] ^ xs[j]);
      }
      const lagrange = gf_div(numerator, denominator);
      result ^= gf_mul(shares[i][1 + byte_index], lagrange);
    }
    secret[byte_index] = result;
  }
  return secret;
}
function self_test() {
  const secret = new Uint8Array([
    0,
    1,
    127,
    128,
    255,
    165,
    90,
    222,
    173,
    190,
    239
  ]);
  const shares = split(secret, 3, 5);
  const subset = [shares[0], shares[2], shares[4]];
  const recovered = reconstruct(subset);
  if (recovered.length !== secret.length) {
    throw new Error("shamir_self_test_length_mismatch");
  }
  for (let i = 0; i < secret.length; i++) {
    if (recovered[i] !== secret[i]) {
      throw new Error("shamir_self_test_value_mismatch");
    }
  }
}
self_test();

// src/crypto/family_vault.ts
var openpgp = __toESM(require("openpgp"), 1);
async function wrap_vault_key(vault_key, recipient_pubkeys) {
  if (recipient_pubkeys.length === 0) {
    throw new Error("family_vault_no_recipients");
  }
  const parsed_keys = [];
  for (const armored of recipient_pubkeys) {
    const key = await openpgp.readKey({ armoredKey: armored });
    parsed_keys.push(key);
  }
  const message = await openpgp.createMessage({ binary: vault_key });
  const encrypted = await openpgp.encrypt({
    message,
    encryptionKeys: parsed_keys,
    format: "armored"
  });
  return typeof encrypted === "string" ? encrypted : encrypted.toString();
}
async function unwrap_vault_key(blob, my_privkey, passphrase) {
  const private_key = await openpgp.decryptKey({
    privateKey: await openpgp.readPrivateKey({ armoredKey: my_privkey }),
    passphrase
  });
  const message = await openpgp.readMessage({ armoredMessage: blob });
  const result = await openpgp.decrypt({
    message,
    decryptionKeys: private_key,
    format: "binary"
  });
  const data = result.data;
  return data instanceof Uint8Array ? data : new Uint8Array(data);
}
async function rewrap_vault_key(blob, my_privkey, passphrase, new_recipient_pubkeys) {
  const vault_key = await unwrap_vault_key(blob, my_privkey, passphrase);
  try {
    return await wrap_vault_key(vault_key, new_recipient_pubkeys);
  } finally {
    secure_zero_memory(vault_key);
  }
}

// src/crypto/family_recovery.ts
var FAMILY_RECOVERY_KEY_BYTES = 32;
async function setup_family_recovery(guardian_pubkeys, threshold, user_recovery_backup) {
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
  const encrypted_shares = [];
  try {
    for (let i = 0; i < guardian_pubkeys.length; i++) {
      const share_payload = array_to_base64(shares[i]);
      const encrypted = await wrap_recipient_blob(
        share_payload,
        guardian_pubkeys[i]
      );
      encrypted_shares.push({
        guardian_pubkey: guardian_pubkeys[i],
        encrypted_share: encrypted,
        share_index: shares[i][0]
      });
      secure_zero_memory(shares[i]);
    }
    const wrapped = await wrap_symmetric(
      user_recovery_backup,
      family_recovery_key
    );
    return {
      family_recovery_key_id: generate_key_id(),
      encrypted_shares,
      second_wrapped_backup: wrapped,
      threshold,
      total_guardians: guardian_pubkeys.length
    };
  } finally {
    secure_zero_memory(family_recovery_key);
  }
}
async function reconstruct_recovery(decrypted_shares, second_wrapped_backup) {
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
async function decrypt_recovery_share(encrypted_share_blob, guardian_privkey, guardian_passphrase) {
  const payload_b64 = await unwrap_recipient_blob(
    encrypted_share_blob,
    guardian_privkey,
    guardian_passphrase
  );
  return base64_to_array(payload_b64);
}
async function wrap_recipient_blob(payload, recipient_pubkey) {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(payload);
  return wrap_vault_key(bytes, [recipient_pubkey]);
}
async function unwrap_recipient_blob(blob, privkey, passphrase) {
  const bytes = await unwrap_vault_key(blob, privkey, passphrase);
  const decoder = new TextDecoder();
  const text = decoder.decode(bytes);
  secure_zero_memory(bytes);
  return text;
}
async function wrap_symmetric(plaintext, key) {
  const nonce = generate_random_bytes(12);
  const aes_key = await crypto.subtle.importKey(
    "raw",
    key,
    { name: "AES-GCM" },
    false,
    ["encrypt"]
  );
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv: nonce },
    aes_key,
    plaintext
  );
  const combined = new Uint8Array(nonce.length + ciphertext.byteLength);
  combined.set(nonce, 0);
  combined.set(new Uint8Array(ciphertext), nonce.length);
  return array_to_base64(combined);
}
async function unwrap_symmetric(wrapped, key) {
  const nonce = wrapped.slice(0, 12);
  const ciphertext = wrapped.slice(12);
  const aes_key = await crypto.subtle.importKey(
    "raw",
    key,
    { name: "AES-GCM" },
    false,
    ["decrypt"]
  );
  const plaintext = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: nonce },
    aes_key,
    ciphertext
  );
  return new Uint8Array(plaintext);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  array_to_base64,
  base64_to_array,
  decrypt_recovery_share,
  generate_key_id,
  generate_random_bytes,
  reconstruct,
  reconstruct_recovery,
  rewrap_vault_key,
  secure_zero_memory,
  setup_family_recovery,
  split,
  unwrap_vault_key,
  wrap_vault_key
});

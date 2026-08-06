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
import { generate_random_bytes, secure_zero_memory } from "./crypto_core";

const MAX_SHARES = 16;
const MIN_THRESHOLD = 2;

const GF_EXP = new Uint8Array(512);
const GF_LOG = new Uint8Array(256);

function init_gf_tables(): void {
  let x = 1;

  for (let i = 0; i < 255; i++) {
    GF_EXP[i] = x;
    GF_LOG[x] = i;
    x <<= 1;
    if (x & 0x100) {
      x ^= 0x11d;
    }
  }
  for (let i = 255; i < 512; i++) {
    GF_EXP[i] = GF_EXP[i - 255];
  }
  GF_LOG[0] = 0;
}

init_gf_tables();

function gf_mul(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;

  return GF_EXP[GF_LOG[a] + GF_LOG[b]];
}

function gf_div(a: number, b: number): number {
  if (b === 0) throw new Error("shamir_division_by_zero");
  if (a === 0) return 0;

  return GF_EXP[(GF_LOG[a] + 255 - GF_LOG[b]) % 255];
}

function eval_polynomial(coefficients: Uint8Array, x: number): number {
  let result = 0;

  for (let i = coefficients.length - 1; i >= 0; i--) {
    result = gf_mul(result, x) ^ coefficients[i];
  }

  return result;
}

export function split(
  secret: Uint8Array,
  threshold: number,
  total: number,
): Uint8Array[] {
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

  const shares: Uint8Array[] = [];

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

export function reconstruct(shares: Uint8Array[]): Uint8Array {
  if (shares.length < MIN_THRESHOLD) {
    throw new Error("shamir_not_enough_shares");
  }

  const share_length = shares[0].length;

  if (share_length < 2) {
    throw new Error("shamir_share_too_short");
  }

  const xs: number[] = [];

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

function self_test(): void {
  const secret = new Uint8Array([
    0x00, 0x01, 0x7f, 0x80, 0xff, 0xa5, 0x5a, 0xde, 0xad, 0xbe, 0xef,
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

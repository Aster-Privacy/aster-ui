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
export {
  array_to_base64,
  base64_to_array,
  generate_key_id,
  generate_random_bytes,
  secure_zero_memory,
} from "./crypto_core";

export { reconstruct, split } from "./family_shamir";

export {
  rewrap_vault_key,
  unwrap_vault_key,
  wrap_vault_key,
} from "./family_vault";

export {
  decrypt_recovery_share,
  reconstruct_recovery,
  setup_family_recovery,
} from "./family_recovery";
export type {
  family_encrypted_share,
  family_recovery_setup_result,
} from "./family_recovery";

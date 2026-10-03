//
// Aster Communications Inc.
//
// Copyright (c) 2026 Aster Communications Inc.
//
// This file is part of this project.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.
//

export {
  SimpleToast,
  show_toast,
  dismiss_toast,
  set_toast_min_duration,
  TOAST_DURATION_DEFAULT_MS,
  TOAST_DURATION_BILLING_MS,
} from "./simple_toast";
export type {
  SimpleToastProps,
  ToastKind,
  ToastPayload,
  ToastAction,
} from "./simple_toast";
export {
  TOAST_POSITION_LAYOUT,
  TOAST_BOTTOM_ISLAND_STYLE,
  DEFAULT_TOAST_POSITION,
  is_top_position,
  resolve_toast_position,
  resolve_toast_layout,
} from "./toast_position";
export type {
  ToastPosition,
  ToastPositionLayout,
  ResolvedToastPosition,
} from "./toast_position";

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
  Avatar,
  AvatarWithStatus,
  AvatarGroup,
  AvatarNamed,
  avatar_variants,
} from "./avatar";
export type {
  AvatarProps,
  AvatarVariantProps,
  AvatarWithStatusProps,
  AvatarGroupProps,
  AvatarNamedProps,
  StatusType,
} from "./avatar";
export {
  AVATAR_COLORS,
  get_active_locale,
  get_avatar_color,
  get_avatar_color_index,
  get_avatar_key,
  get_contrast_text,
  get_initials,
  hash_utf16,
} from "./identity";

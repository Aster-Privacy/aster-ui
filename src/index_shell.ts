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
  InboxIcon,
  AllMailIcon,
  ArchiveIcon,
  SpamIcon,
  TrashIcon,
  TagIcon,
  ThreeDotsHorizontal,
  Logo,
  SearchIcon,
  ArrowLeftIcon,
  ClockIcon,
  StarIcon,
  CloseIcon,
  PinIcon,
  AttachmentIcon,
  LinkIcon,
  FileIcon,
  LockIcon,
  CheckIcon,
  WarningIcon,
  SnoozeIcon,
  FilterIcon,
  OpenFullIcon,
  AsterSecurityMark,
} from "./icons";
export type {
  IconSvgProps,
  OpenFullIconProps,
  AsterSecurityMarkProps,
} from "./icons";

export {
  set_toast_min_duration,
  TOAST_DURATION_DEFAULT_MS,
  TOAST_DURATION_BILLING_MS,
  TOAST_POSITION_LAYOUT,
  TOAST_BOTTOM_ISLAND_STYLE,
  DEFAULT_TOAST_POSITION,
  is_top_position,
  resolve_toast_position,
  resolve_toast_layout,
} from "./toast";
export type {
  ToastAction,
  ToastPosition,
  ToastPositionLayout,
  ResolvedToastPosition,
} from "./toast";

export {
  StatusBanner,
  STATUS_BANNER_TONE_COLORS,
  STATUS_BANNER_DARK_TEXT,
} from "./status_banner";
export type {
  StatusBannerProps,
  StatusBannerAction,
  StatusBannerActionEmphasis,
  StatusBannerContrast,
  StatusBannerTone,
  StatusBannerVariant,
} from "./status_banner";

export { OfflineIndicatorView } from "./offline_indicator";
export type {
  OfflineIndicatorViewProps,
  OfflineIndicatorPosition,
} from "./offline_indicator";

export { SaveStatusIndicatorView } from "./save_status_indicator";
export type {
  SaveStatus,
  SaveStatusIndicatorViewProps,
} from "./save_status_indicator";

export {
  BlockingDialogView,
  BLOCKING_DIALOG_ICON_PATHS,
  PendingDeletionDialogView,
  Family2faDialogView,
} from "./blocking_dialog";
export type {
  BlockingDialogIcon,
  BlockingDialogViewProps,
  PendingDeletionDialogViewProps,
  Family2faDialogViewProps,
} from "./blocking_dialog";

export { SuspensionBannerView } from "./suspension_banner";
export type { SuspensionBannerViewProps } from "./suspension_banner";

export {
  EncryptionInfoDropdownView,
  ENCRYPTED_LOCK_COLOR,
} from "./encryption_info_dropdown";
export type {
  EncryptionInfoDropdownViewProps,
  EncryptionSenderVerification,
} from "./encryption_info_dropdown";

export {
  ContactAvatarView,
  get_contact_avatar_font_size,
} from "./contact_avatar";
export type { ContactAvatarViewProps } from "./contact_avatar";

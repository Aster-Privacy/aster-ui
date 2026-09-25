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
  MobileDrawerHeaderView,
  MobileDrawerScrollArea,
  MobileDrawerNavIndicator,
  use_drawer_nav_indicator,
} from "./mobile_drawer/mobile_drawer_view";
export type {
  MobileDrawerHeaderViewProps,
  MobileDrawerScrollAreaProps,
  MobileDrawerNavIndicatorProps,
  MobileDrawerIndicatorStyle,
} from "./mobile_drawer/mobile_drawer_view";

export {
  MobileDrawerSectionHeader,
  MobileDrawerBackButton,
  MobileDrawerSectionPlaceholder,
  MobileDrawerFolderRow,
  MobileDrawerTagIcon,
} from "./mobile_drawer/mobile_drawer_nav_view";
export type {
  MobileDrawerSectionHeaderProps,
  MobileDrawerBackButtonProps,
  MobileDrawerSectionPlaceholderProps,
  MobileDrawerFolderRowProps,
  MobileDrawerTagIconProps,
} from "./mobile_drawer/mobile_drawer_nav_view";

export {
  DrawerColorSwatches,
  AccountMenuSheetView,
  CreateFolderSheetView,
  CreateLabelSheetView,
  EditFolderSheetView,
  EditTagSheetView,
  CreateAliasSheetView,
} from "./mobile_drawer/mobile_drawer_sheets_view";
export type {
  DrawerColorOption,
  DrawerColorSwatchesProps,
  AccountMenuSheetViewProps,
  CreateFolderSheetViewProps,
  CreateLabelSheetViewProps,
  EditFolderSheetViewProps,
  EditTagSheetViewProps,
  CreateAliasSheetViewProps,
} from "./mobile_drawer/mobile_drawer_sheets_view";

export {
  PinDots,
  PinPad,
  PinLockOverlayView,
  PinLockDuressView,
} from "./app_lock/pin_lock";
export type {
  PinDotsProps,
  PinPadProps,
  PinLockOverlayViewProps,
  PinLockDuressViewProps,
} from "./app_lock/pin_lock";

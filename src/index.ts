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

export { Button, button_variants } from "./button";
export type { ButtonProps, ButtonVariantProps } from "./button";

export { Badge, BadgeDot, badge_variants } from "./badge";
export type { BadgeProps, BadgeVariantProps, BadgeDotProps } from "./badge";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardIcon,
  card_variants,
} from "./card";
export type { CardProps, CardVariantProps, CardIconProps } from "./card";

export { FeatureCard } from "./card";
export type { FeatureCardProps } from "./card";

export { PricingCard } from "./card";
export type { PricingCardProps } from "./card";

export { TestimonialCard } from "./card";
export type { TestimonialCardProps } from "./card";

export { StatCard } from "./card";
export type { StatCardProps, StatTrend } from "./card";

export { Banner } from "./banner";
export type { BannerProps } from "./banner";

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
  Modal,
  ModalHeader,
  ModalBody,
  ModalActions,
  ModalTitle,
  ModalDescription,
  ModalFooter,
} from "./modal";
export type {
  ModalProps,
  ModalSize,
  ModalHeaderProps,
  ModalBodyProps,
  ModalActionsProps,
  ModalTitleProps,
  ModalDescriptionProps,
  ModalFooterProps,
} from "./modal";

export {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./select";
export type {
  SelectProps,
  SelectGroupProps,
  SelectTriggerProps,
  SelectValueProps,
  SelectContentProps,
  SelectItemProps,
} from "./select";

export { Skeleton, SkeletonText } from "./skeleton";
export type { SkeletonProps, SkeletonTextProps, SkeletonVariant } from "./skeleton";

export { Spinner } from "./spinner";
export type { SpinnerProps, SpinnerSize } from "./spinner";

export { SimpleToast, show_toast, dismiss_toast } from "./toast";
export type { SimpleToastProps, ToastKind, ToastPayload } from "./toast";

export { NotFoundPage } from "./not_found";
export type { NotFoundPageProps } from "./not_found";

export { SidebarAccountMenu } from "./sidebar_account_menu";
export type {
  SidebarAccountMenuProps,
  SidebarAccountMenuItem,
} from "./sidebar_account_menu";

export { Tooltip, TooltipDotted, TooltipRich } from "./tooltip";
export type {
  TooltipProps,
  TooltipDottedProps,
  TooltipRichProps,
  TooltipPosition,
} from "./tooltip";

export {
  Switch,
  Checkbox,
  Radio,
  SegmentedToggle,
  switch_variants,
} from "./toggle";
export type {
  SwitchProps,
  SwitchVariantProps,
  CheckboxProps,
  RadioProps,
  SegmentedToggleProps,
  SegOption,
} from "./toggle";

export {
  Navbar,
  NavbarInner,
  NavbarLogo,
  NavbarLinks,
  NavbarLink,
  NavbarTrigger,
  NavbarActions,
  NavbarCta,
  NavbarSearch,
  NavbarMega,
  NavbarMegaPanel,
  NavbarMegaCols,
  NavbarMegaCol,
  NavbarMegaItem,
  NavbarMegaItemSimple,
  NavbarHamburger,
  NavbarMobileMenu,
  NavbarMobileLink,
  NavbarMobileDivider,
} from "./navbar";
export type {
  NavbarProps,
  NavbarVariant,
  NavbarInnerProps,
  NavbarLogoProps,
  NavbarLinksProps,
  NavbarLinkProps,
  NavbarTriggerProps,
  NavbarActionsProps,
  NavbarCtaProps,
  NavbarSearchProps,
  NavbarMegaProps,
  NavbarMegaPanelProps,
  NavbarMegaColsProps,
  NavbarMegaColProps,
  NavbarMegaItemProps,
  NavbarMegaItemSimpleProps,
  NavbarHamburgerProps,
  NavbarMobileMenuProps,
  NavbarMobileLinkProps,
} from "./navbar";

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordion_variants,
} from "./accordion";
export type {
  AccordionProps,
  AccordionVariantProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
} from "./accordion";

export { Kbd, kbd_variants } from "./kbd";
export type { KbdProps, KbdVariantProps } from "./kbd";

export { Marquee, MarqueeTrack, MarqueeLogo, marquee_variants } from "./marquee";
export type {
  MarqueeProps,
  MarqueeVariantProps,
  MarqueeTrackProps,
  MarqueeLogoProps,
} from "./marquee";

export { TextRoller } from "./text_roller";
export type { TextRollerProps, TextRollerItem } from "./text_roller";

export {
  SidebarHeader,
  SidebarSectionHeader,
  SidebarSectionToggle,
  SidebarMoreToggle,
  SidebarNavRow,
  SidebarTagRow,
  SidebarActionButton,
} from "./sidebar";
export type {
  SidebarHeaderProps,
  SidebarSectionHeaderProps,
  SidebarSectionToggleProps,
  SidebarMoreToggleProps,
  SidebarNavRowProps,
  SidebarTagRowProps,
  SidebarActionButtonProps,
} from "./sidebar";

export { DashboardSidebar } from "./sidebar";
export type {
  DashboardSidebarProps,
  DashboardSidebarFilter,
  DashboardSidebarAccountLike,
  DashboardSidebarTStrings,
} from "./sidebar";

export {
  SettingsModalShell,
  SettingsNavGroup,
  SettingsNavItemButton,
  SettingsSectionHeader,
  SettingsRow,
  SettingsSaveIndicator,
} from "./settings";
export type {
  SettingsModalShellProps,
  SettingsNavGroupProps,
  SettingsNavItemButtonProps,
  SettingsNavItem,
  SettingsNavGroupData,
  SettingsSectionHeaderProps,
  SettingsRowProps,
  SettingsSaveIndicatorProps,
  SettingsSaveStatus,
} from "./settings";

export { ThemeCard } from "./theme_card";
export type { ThemeCardProps, ThemeMode } from "./theme_card";

export { StorageIndicator } from "./storage_indicator/storage_indicator";
export type { StorageIndicatorProps } from "./storage_indicator/storage_indicator";

export { UpgradeBtn } from "./upgrade_btn/upgrade_btn";
export type { UpgradeBtnProps } from "./upgrade_btn/upgrade_btn";

export { UpgradeOverlay } from "./upgrade_overlay/upgrade_overlay";
export type { UpgradeOverlayProps } from "./upgrade_overlay/upgrade_overlay";
export { EmptyState } from "./empty_state";
export type { EmptyStateProps } from "./empty_state";

export { SearchBar } from "./search_bar";
export type { SearchBarProps } from "./search_bar";

export { AppSwitcher } from "./app_switcher";
export type { AppSwitcherProps, AppEntry } from "./app_switcher";

export {
  AuthLogo,
  AuthEyeIcon,
  AuthEyeSlashIcon,
  AuthInputWrapper,
  AuthCheckIcon,
  AuthCheckbox,
  AuthCard,
  AuthCardBody,
  AuthFormLabel,
  AuthFourPointStar,
  AuthSparkleDecoration,
  AuthShieldCheckIcon,
  AuthLockIcon,
  AuthWarningIcon,
  AuthDocumentIcon,
  AuthDownloadIcon,
  AuthUserCircleIcon,
  AuthLockClosedIcon,
  AuthEnvelopeIcon,
  get_auth_alert_styles,
  get_auth_primary_button_style,
} from "./auth";
export type {
  AuthLogoProps,
  AuthInputWrapperProps,
  AuthCheckboxProps,
  AuthCardProps,
  AuthCardBodyProps,
  AuthAlertKind,
} from "./auth";

export { FieldLabel, FieldHint, ErrorBanner } from "./form";
export type { FieldLabelProps, FieldHintProps, ErrorBannerProps } from "./form";

export { Input } from "./input";
export type { InputProps } from "./input";

export { RadioGroup, RadioGroupItem } from "./radio_group";

export {
  MotionModal,
  MotionModalHeader,
  MotionModalTitle,
  MotionModalDescription,
  MotionModalBody,
  MotionModalFooter,
  MotionModalActions,
} from "./motion_modal";
export type {
  MotionModalProps,
  MotionModalSize,
  MotionModalHeaderProps,
  MotionModalTitleProps,
  MotionModalDescriptionProps,
  MotionModalBodyProps,
  MotionModalFooterProps,
  MotionModalActionsProps,
} from "./motion_modal";

export { ConfirmationModal } from "./confirmation_modal";
export type {
  ConfirmationModalProps,
  ConfirmationVariant,
} from "./confirmation_modal";

export { KeyboardShortcutsModal } from "./keyboard_shortcuts";
export type {
  KeyboardShortcutsModalProps,
  KeyboardShortcutEntry,
  KeyboardShortcutSection,
  KeyboardShortcutsTStrings,
} from "./keyboard_shortcuts";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "./dropdown_menu";

export { ContextMenu } from "./context_menu";
export type {
  ContextMenuProps,
  ContextMenuItem,
  ContextMenuPosition,
} from "./context_menu";

export { FullPageLoader } from "./full_page_loader";

export { CountBadge } from "./count_badge";

export { SettingRow } from "./setting_row";

export { RadioRowWithDescription } from "./radio_row_with_description";

export {
  ViewMockupSplit,
  ViewMockupPopup,
  ViewMockupFullpage,
} from "./view_mode_mockups";

export { ThemeMockupLight, ThemeMockupDark } from "./theme_mockups";

export { ViewModeCard } from "./view_mode_card";

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "./alert_dialog";
export type { AlertDialogContentProps } from "./alert_dialog";

export { ExternalLinkWarningModal } from "./external_link_warning_modal";
export type { ExternalLinkWarningModalProps } from "./external_link_warning_modal";

export {
  use_should_reduce_motion,
  stagger_container,
  fade_up_item,
  page_slide_transition,
  button_tap,
  motion_ease_standard,
  motion_duration_fast,
  motion_duration_base,
  motion_duration_slow,
  ColorVisionFilters,
} from "./motion";
export type { ColorVisionMode, ColorVisionFiltersProps } from "./motion";

export {
  MobileHeader,
  MobileHeaderIconButton,
  MobileDrawerShell,
  MobileActionSheetShell,
} from "./mobile";
export type {
  MobileHeaderProps,
  MobileHeaderIconButtonProps,
  MobileDrawerShellProps,
  MobileActionSheetShellProps,
} from "./mobile";

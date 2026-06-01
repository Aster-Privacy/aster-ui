import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const button_variants: (props?: ({
    variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "depth" | "depth_destructive" | "upgrade" | null | undefined;
    size?: "xl" | "lg" | "md" | "sm" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ButtonVariantProps = VariantProps<typeof button_variants>;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {
    as_child?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const badge_variants: (props?: ({
    color?: "blue" | "green" | "purple" | "amber" | "gray" | "red" | null | undefined;
    size?: "lg" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type BadgeVariantProps = VariantProps<typeof badge_variants>;
interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">, BadgeVariantProps {
}
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
interface BadgeDotProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> {
    color?: "blue" | "green" | "amber" | "red" | "gray";
}
declare const BadgeDot: React.ForwardRefExoticComponent<BadgeDotProps & React.RefAttributes<HTMLSpanElement>>;

declare const card_variants: (props?: ({
    variant?: "ghost" | "default" | "elevated" | "outlined" | "glass" | "featured" | null | undefined;
    padding?: "lg" | "md" | "sm" | "none" | null | undefined;
    interactive?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type CardVariantProps = VariantProps<typeof card_variants>;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, CardVariantProps {
    as_child?: boolean;
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface CardIconProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
    color?: "blue" | "green" | "purple" | "amber" | "red" | "gray";
}
declare const CardIcon: React.ForwardRefExoticComponent<CardIconProps & React.RefAttributes<HTMLDivElement>>;

interface FeatureCardProps extends Omit<CardProps, "children"> {
    icon?: React.ReactNode;
    icon_color?: "blue" | "green" | "purple" | "amber" | "red" | "gray";
    title: string;
    description: string;
}
declare const FeatureCard: React.ForwardRefExoticComponent<FeatureCardProps & React.RefAttributes<HTMLDivElement>>;

interface PricingCardProps extends Omit<CardProps, "children"> {
    plan: string;
    price: string;
    period?: string;
    description?: string;
    features: string[];
    badge?: React.ReactNode;
    children?: React.ReactNode;
}
declare const PricingCard: React.ForwardRefExoticComponent<PricingCardProps & React.RefAttributes<HTMLDivElement>>;

interface TestimonialCardProps extends Omit<CardProps, "children"> {
    quote: string;
    author: string;
    role?: string;
    company?: string;
    avatar?: React.ReactNode;
}
declare const TestimonialCard: React.ForwardRefExoticComponent<TestimonialCardProps & React.RefAttributes<HTMLDivElement>>;

interface StatTrend {
    direction: "up" | "down" | "neutral";
    value: string;
}
interface StatCardProps extends Omit<CardProps, "children"> {
    value: string;
    label: string;
    trend?: StatTrend;
}
declare const StatCard: React.ForwardRefExoticComponent<StatCardProps & React.RefAttributes<HTMLDivElement>>;

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
    badge?: React.ReactNode;
    text: string;
    action_label?: string;
    action_href?: string;
    on_action?: () => void;
    on_dismiss?: () => void;
    show_close?: boolean;
}
declare const Banner: React.ForwardRefExoticComponent<BannerProps & React.RefAttributes<HTMLDivElement>>;

declare const avatar_variants: (props?: ({
    size?: "xl" | "lg" | "md" | "sm" | "xs" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type AvatarVariantProps = VariantProps<typeof avatar_variants>;
interface AvatarProps extends Omit<React.HTMLAttributes<HTMLElement>, "children">, AvatarVariantProps {
    src?: string;
    alt?: string;
    initials?: string;
    bordered?: boolean;
}
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLElement>>;
type StatusType = "online" | "away" | "busy" | "offline";
interface AvatarWithStatusProps extends AvatarProps {
    status: StatusType;
}
declare const AvatarWithStatus: React.ForwardRefExoticComponent<AvatarWithStatusProps & React.RefAttributes<HTMLDivElement>>;
interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare const AvatarGroup: React.ForwardRefExoticComponent<AvatarGroupProps & React.RefAttributes<HTMLDivElement>>;
interface AvatarNamedProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    children: React.ReactNode;
}
declare const AvatarNamed: React.ForwardRefExoticComponent<AvatarNamedProps & React.RefAttributes<HTMLDivElement>>;

type ModalSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";
interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    open?: boolean;
    is_open?: boolean;
    on_close: () => void;
    size?: ModalSize;
    show_close_button?: boolean;
    close_on_overlay?: boolean;
    z_index?: number;
    children: React.ReactNode;
}
declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
interface ModalHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    title?: string;
    icon?: React.ReactNode;
    on_close?: () => void;
    children?: React.ReactNode;
}
declare const ModalHeader: React.ForwardRefExoticComponent<ModalHeaderProps & React.RefAttributes<HTMLDivElement>>;
type ModalBodyProps = React.HTMLAttributes<HTMLParagraphElement>;
declare const ModalBody: React.ForwardRefExoticComponent<ModalBodyProps & React.RefAttributes<HTMLParagraphElement>>;
type ModalActionsProps = React.HTMLAttributes<HTMLDivElement>;
declare const ModalActions: React.ForwardRefExoticComponent<ModalActionsProps & React.RefAttributes<HTMLDivElement>>;
type ModalTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
declare const ModalTitle: React.ForwardRefExoticComponent<ModalTitleProps & React.RefAttributes<HTMLHeadingElement>>;
type ModalDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
declare const ModalDescription: React.ForwardRefExoticComponent<ModalDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
type ModalFooterProps = React.HTMLAttributes<HTMLDivElement>;
declare const ModalFooter: React.ForwardRefExoticComponent<ModalFooterProps & React.RefAttributes<HTMLDivElement>>;

interface SelectProps {
    value?: string;
    default_value?: string;
    defaultValue?: string;
    on_value_change?: (next: string) => void;
    onValueChange?: (next: string) => void;
    disabled?: boolean;
    children: React.ReactNode;
}
declare function Select({ value, default_value, defaultValue, on_value_change, onValueChange, disabled, children, }: SelectProps): react_jsx_runtime.JSX.Element;
interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
declare const SelectTrigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface SelectValueProps {
    placeholder?: string;
    className?: string;
    children?: React.ReactNode;
}
declare function SelectValue({ placeholder, className, children, }: SelectValueProps): react_jsx_runtime.JSX.Element;
interface SelectContentProps {
    children: React.ReactNode;
    className?: string;
}
declare function SelectContent({ children, className }: SelectContentProps): react_jsx_runtime.JSX.Element;
interface SelectItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
    value: string;
    disabled?: boolean;
    children: React.ReactNode;
}
declare const SelectItem: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLDivElement>>;

type SkeletonVariant = "text" | "circular" | "rectangular";
interface SkeletonProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    variant?: SkeletonVariant;
    width?: number | string;
    height?: number | string;
}
declare const Skeleton: React.ForwardRefExoticComponent<SkeletonProps & React.RefAttributes<HTMLDivElement>>;
interface SkeletonTextProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    lines?: number;
    line_height?: number | string;
    last_line_width?: number | string;
    gap?: number | string;
}
declare const SkeletonText: React.ForwardRefExoticComponent<SkeletonTextProps & React.RefAttributes<HTMLDivElement>>;

type ToastKind = "success" | "error" | "info" | "warning";
interface ToastPayload {
    id: number;
    message: string;
    kind: ToastKind;
    duration_ms: number;
}
declare function show_toast(message: string, kind?: ToastKind, duration_ms?: number): void;
declare function dismiss_toast(): void;
interface SimpleToastProps {
    position?: "top" | "bottom";
    dismiss_label?: string;
    className?: string;
}
declare function SimpleToast({ position, dismiss_label, className, }: SimpleToastProps): react_jsx_runtime.JSX.Element | null;

interface NotFoundPageProps {
    title?: string;
    message?: string;
    cta_label?: string;
    on_navigate_home?: () => void;
    className?: string;
    children?: React.ReactNode;
}
declare function NotFoundPage({ title, message, cta_label, on_navigate_home, className, children, }: NotFoundPageProps): react_jsx_runtime.JSX.Element;

interface SidebarAccountMenuItem {
    id: string;
    label: string;
    icon: React.ElementType;
    on_click: () => void;
}
interface SidebarAccountMenuProps {
    is_open: boolean;
    on_close: () => void;
    trigger: React.ReactNode;
    identity_label: string;
    active_label: string;
    display_name?: string;
    email?: string;
    items: SidebarAccountMenuItem[];
    footer?: React.ReactNode;
}
declare function SidebarAccountMenu({ is_open, on_close, trigger, identity_label, active_label, display_name, email, items, footer, }: SidebarAccountMenuProps): react_jsx_runtime.JSX.Element;

type TooltipPosition = "top" | "bottom" | "left" | "right";
interface TooltipProps {
    tip: string;
    position?: TooltipPosition;
    dark?: boolean;
    delay?: number;
    children: React.ReactNode;
}
declare function Tooltip({ tip, position, dark, delay, children }: TooltipProps): react_jsx_runtime.JSX.Element;
declare namespace Tooltip {
    var displayName: string;
}
interface TooltipDottedProps extends React.HTMLAttributes<HTMLSpanElement> {
    tip: string;
    children: React.ReactNode;
}
declare const TooltipDotted: React.ForwardRefExoticComponent<TooltipDottedProps & React.RefAttributes<HTMLSpanElement>>;
interface TooltipRichProps extends React.HTMLAttributes<HTMLSpanElement> {
    title: string;
    description: string;
    children: React.ReactNode;
}
declare const TooltipRich: React.ForwardRefExoticComponent<TooltipRichProps & React.RefAttributes<HTMLSpanElement>>;

declare const switch_variants: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    color?: "blue" | "green" | "purple" | "amber" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type SwitchVariantProps = VariantProps<typeof switch_variants>;
interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color" | "type">, SwitchVariantProps {
    label_title?: string;
    label_desc?: string;
    onCheckedChange?: (checked: boolean) => void;
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    indeterminate?: boolean;
    onCheckedChange?: (checked: boolean | "indeterminate") => void;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
}
declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
interface SegOption {
    value: string;
    label: React.ReactNode;
}
interface SegmentedToggleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    name: string;
    options: SegOption[];
    value?: string;
    on_change?: (value: string) => void;
}
declare const SegmentedToggle: React.ForwardRefExoticComponent<SegmentedToggleProps & React.RefAttributes<HTMLDivElement>>;

type NavbarVariant = "default" | "dark";
interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    variant?: NavbarVariant;
}
declare const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>>;
type NavbarInnerProps = React.HTMLAttributes<HTMLDivElement>;
declare const NavbarInner: React.ForwardRefExoticComponent<NavbarInnerProps & React.RefAttributes<HTMLDivElement>>;
type NavbarLogoProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
declare const NavbarLogo: React.ForwardRefExoticComponent<NavbarLogoProps & React.RefAttributes<HTMLAnchorElement>>;
type NavbarLinksProps = React.HTMLAttributes<HTMLDivElement>;
declare const NavbarLinks: React.ForwardRefExoticComponent<NavbarLinksProps & React.RefAttributes<HTMLDivElement>>;
type NavbarLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
declare const NavbarLink: React.ForwardRefExoticComponent<NavbarLinkProps & React.RefAttributes<HTMLAnchorElement>>;
interface NavbarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    panel_id: string;
}
declare const NavbarTrigger: React.ForwardRefExoticComponent<NavbarTriggerProps & React.RefAttributes<HTMLButtonElement>>;
type NavbarActionsProps = React.HTMLAttributes<HTMLDivElement>;
declare const NavbarActions: React.ForwardRefExoticComponent<NavbarActionsProps & React.RefAttributes<HTMLDivElement>>;
interface NavbarCtaProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    light?: boolean;
}
declare const NavbarCta: React.ForwardRefExoticComponent<NavbarCtaProps & React.RefAttributes<HTMLAnchorElement>>;
interface NavbarSearchProps extends React.HTMLAttributes<HTMLDivElement> {
    placeholder?: string;
    shortcut?: string;
}
declare const NavbarSearch: React.ForwardRefExoticComponent<NavbarSearchProps & React.RefAttributes<HTMLDivElement>>;
interface NavbarMegaProps extends React.HTMLAttributes<HTMLDivElement> {
    dark?: boolean;
}
declare const NavbarMega: React.ForwardRefExoticComponent<NavbarMegaProps & React.RefAttributes<HTMLDivElement>>;
interface NavbarMegaPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    panel_id: string;
}
declare const NavbarMegaPanel: React.ForwardRefExoticComponent<NavbarMegaPanelProps & React.RefAttributes<HTMLDivElement>>;
type NavbarMegaColsProps = React.HTMLAttributes<HTMLDivElement>;
declare const NavbarMegaCols: React.ForwardRefExoticComponent<NavbarMegaColsProps & React.RefAttributes<HTMLDivElement>>;
interface NavbarMegaColProps extends React.HTMLAttributes<HTMLDivElement> {
    heading?: string;
}
declare const NavbarMegaCol: React.ForwardRefExoticComponent<NavbarMegaColProps & React.RefAttributes<HTMLDivElement>>;
interface NavbarMegaItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon?: React.ReactNode;
    title: string;
    description?: string;
}
declare const NavbarMegaItem: React.ForwardRefExoticComponent<NavbarMegaItemProps & React.RefAttributes<HTMLAnchorElement>>;
type NavbarMegaItemSimpleProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
declare const NavbarMegaItemSimple: React.ForwardRefExoticComponent<NavbarMegaItemSimpleProps & React.RefAttributes<HTMLAnchorElement>>;
type NavbarHamburgerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const NavbarHamburger: React.ForwardRefExoticComponent<NavbarHamburgerProps & React.RefAttributes<HTMLButtonElement>>;
type NavbarMobileMenuProps = React.HTMLAttributes<HTMLDivElement>;
declare const NavbarMobileMenu: React.ForwardRefExoticComponent<NavbarMobileMenuProps & React.RefAttributes<HTMLDivElement>>;
type NavbarMobileLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
declare const NavbarMobileLink: React.ForwardRefExoticComponent<NavbarMobileLinkProps & React.RefAttributes<HTMLAnchorElement>>;
declare const NavbarMobileDivider: {
    (): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const accordion_variants: (props?: ({
    variant?: "default" | "bordered" | "separated" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type AccordionVariantProps = VariantProps<typeof accordion_variants>;
interface AccordionProps extends React.HTMLAttributes<HTMLDivElement>, AccordionVariantProps {
    multiple?: boolean;
    default_open?: string[];
}
interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}
interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
}
type AccordionContentProps = React.HTMLAttributes<HTMLDivElement>;
declare const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<AccordionItemProps & React.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React.ForwardRefExoticComponent<AccordionContentProps & React.RefAttributes<HTMLDivElement>>;

declare const kbd_variants: (props?: ({
    size?: "lg" | "md" | "sm" | "xs" | null | undefined;
    variant?: "outline" | "ghost" | "default" | "inlay" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type KbdVariantProps = VariantProps<typeof kbd_variants>;
interface KbdProps extends Omit<React.HTMLAttributes<HTMLElement>, "children">, KbdVariantProps {
    keys: string | string[];
}
declare const Kbd: React.ForwardRefExoticComponent<KbdProps & React.RefAttributes<HTMLElement>>;

declare const marquee_variants: (props?: ({
    variant?: "default" | "dark" | null | undefined;
    fade?: boolean | null | undefined;
    pause_on_hover?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type MarqueeVariantProps = VariantProps<typeof marquee_variants>;
type MarqueeProps = React.HTMLAttributes<HTMLDivElement> & MarqueeVariantProps;
interface MarqueeTrackProps extends React.HTMLAttributes<HTMLDivElement> {
    reverse?: boolean;
    speed?: "slow" | "default" | "fast";
}
interface MarqueeLogoProps extends React.HTMLAttributes<HTMLSpanElement> {
    icon?: React.ReactNode;
}
declare const Marquee: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & MarqueeVariantProps & React.RefAttributes<HTMLDivElement>>;
declare const MarqueeTrack: React.ForwardRefExoticComponent<MarqueeTrackProps & React.RefAttributes<HTMLDivElement>>;
declare const MarqueeLogo: React.ForwardRefExoticComponent<MarqueeLogoProps & React.RefAttributes<HTMLSpanElement>>;

interface TextRollerItem {
    text: string;
    class_name?: string;
}
interface TextRollerProps extends React.HTMLAttributes<HTMLDivElement> {
    items: (string | TextRollerItem)[];
    interval?: number;
    item_height?: string;
}
declare const TextRoller: React.ForwardRefExoticComponent<TextRollerProps & React.RefAttributes<HTMLDivElement>>;

interface SidebarHeaderProps {
    is_collapsed: boolean;
    title: string;
    subtitle?: string;
    logo_src: string;
    logo_alt: string;
    on_trigger_click?: () => void;
    show_chevron?: boolean;
    right_slot?: React.ReactNode;
}
declare function SidebarHeader({ is_collapsed, title, subtitle, logo_src, logo_alt, on_trigger_click, show_chevron, right_slot, }: SidebarHeaderProps): react_jsx_runtime.JSX.Element;
interface SidebarSectionHeaderProps {
    label: string;
    is_collapsed: boolean;
}
declare function SidebarSectionHeader({ label, is_collapsed, }: SidebarSectionHeaderProps): react_jsx_runtime.JSX.Element;
interface SidebarSectionToggleProps {
    label: string;
    is_collapsed: boolean;
    section_collapsed: boolean;
    on_toggle: () => void;
    right_slot?: React.ReactNode;
    margin_top?: boolean;
}
declare function SidebarSectionToggle({ label, is_collapsed, section_collapsed, on_toggle, right_slot, margin_top, }: SidebarSectionToggleProps): react_jsx_runtime.JSX.Element;
interface SidebarMoreToggleProps {
    more_label: string;
    less_label: string;
    expanded: boolean;
    hidden_count: number;
    on_toggle: () => void;
}
declare function SidebarMoreToggle({ more_label, less_label, expanded, on_toggle, }: SidebarMoreToggleProps): react_jsx_runtime.JSX.Element;
interface SidebarNavRowProps {
    icon?: React.ElementType;
    label: string;
    selected?: boolean;
    is_collapsed?: boolean;
    count?: number;
    show_count?: boolean;
    is_loading?: boolean;
    on_click?: () => void;
    trailing?: React.ReactNode;
    leading?: React.ReactNode;
    title?: string;
}
declare const SidebarNavRow: React.ForwardRefExoticComponent<SidebarNavRowProps & React.RefAttributes<HTMLButtonElement>>;
interface SidebarTagRowProps {
    label: string;
    count?: number;
    selected?: boolean;
    is_collapsed?: boolean;
    on_click?: () => void;
    color?: string;
    show_count?: boolean;
    button_ref?: React.Ref<HTMLButtonElement>;
    drag_over?: boolean;
    on_drag_enter?: (e: React.DragEvent<HTMLButtonElement>) => void;
    on_drag_leave?: (e: React.DragEvent<HTMLButtonElement>) => void;
    on_drag_over?: (e: React.DragEvent<HTMLButtonElement>) => void;
    on_drop?: (e: React.DragEvent<HTMLButtonElement>) => void;
    tag_icon?: React.ComponentType<{
        className?: string;
    }> | null;
}
declare function SidebarTagRow({ label, count, selected, is_collapsed, on_click, color, show_count, button_ref, drag_over, on_drag_enter, on_drag_leave, on_drag_over, on_drop, tag_icon: TagIcon, }: SidebarTagRowProps): react_jsx_runtime.JSX.Element;
interface SidebarActionButtonProps {
    icon: React.ElementType;
    label: string;
    on_click: () => void;
    is_collapsed?: boolean;
    shortcut_key?: string;
    data_attr?: Record<string, string>;
    extra_class?: string;
}
declare function SidebarActionButton({ icon: Icon, label, on_click, is_collapsed, shortcut_key, data_attr, extra_class, }: SidebarActionButtonProps): react_jsx_runtime.JSX.Element;

type SettingsSaveStatus = "idle" | "saving" | "saved" | "error";
interface SettingsSaveIndicatorProps {
    status: SettingsSaveStatus;
}
declare function SettingsSaveIndicator({ status }: SettingsSaveIndicatorProps): react_jsx_runtime.JSX.Element | null;
interface SettingsSectionHeaderProps {
    icon?: React.ElementType;
    title: string;
    description?: string;
    trailing?: React.ReactNode;
}
declare function SettingsSectionHeader({ icon: Icon, title, description, trailing, }: SettingsSectionHeaderProps): react_jsx_runtime.JSX.Element;
interface SettingsRowProps {
    label: string;
    description?: string;
    children: React.ReactNode;
}
declare function SettingsRow({ label, description, children }: SettingsRowProps): react_jsx_runtime.JSX.Element;
interface SettingsNavItem {
    id: string;
    label: string;
    icon: React.ElementType;
}
interface SettingsNavGroupData {
    id?: string;
    label?: string;
    items: SettingsNavItem[];
}
interface SettingsNavItemButtonProps {
    item: SettingsNavItem;
    is_selected: boolean;
    on_select: (id: string) => void;
    data_nav_id?: string;
}
declare function SettingsNavItemButton({ item, is_selected, on_select, data_nav_id, }: SettingsNavItemButtonProps): react_jsx_runtime.JSX.Element;
interface SettingsNavGroupProps {
    group: SettingsNavGroupData;
    selected_id: string;
    on_select: (id: string) => void;
}
declare function SettingsNavGroup({ group, selected_id, on_select, }: SettingsNavGroupProps): react_jsx_runtime.JSX.Element;
interface SettingsModalShellProps {
    is_open: boolean;
    on_close: () => void;
    title: string;
    groups: SettingsNavGroupData[];
    selected_id: string;
    on_select: (id: string) => void;
    active_label?: string;
    save_status?: SettingsSaveStatus;
    close_label?: string;
    reduce_motion?: boolean;
    header_extra?: React.ReactNode;
    overlay_content?: React.ReactNode;
    content_dimmed?: boolean;
    children: React.ReactNode;
}
declare function SettingsModalShell({ is_open, on_close, title, groups, selected_id, on_select, active_label, save_status, close_label, reduce_motion: reduce_motion_prop, header_extra, overlay_content, content_dimmed, children, }: SettingsModalShellProps): react_jsx_runtime.JSX.Element;

type ThemeMode = "light" | "dark" | "system";
interface ThemeCardProps {
    mode: ThemeMode;
    label: string;
    is_selected: boolean;
    on_select: () => void;
}
declare function ThemeCard({ mode, label, is_selected, on_select, }: ThemeCardProps): react_jsx_runtime.JSX.Element;

interface StorageIndicatorProps {
    is_collapsed: boolean;
    logo_src: string;
    logo_alt: string;
    on_logo_click?: () => void;
    percentage?: number;
    storage_used_label?: string;
    usage_text?: string;
    actions_slot?: React.ReactNode;
    footer_slot?: React.ReactNode;
    collapsed_footer_slot?: React.ReactNode;
}
declare function StorageIndicator({ is_collapsed, logo_src, logo_alt, on_logo_click, percentage, storage_used_label, usage_text, actions_slot, footer_slot, collapsed_footer_slot, }: StorageIndicatorProps): react_jsx_runtime.JSX.Element;

type UpgradeBtnProps = Omit<ButtonProps, "variant"> & {
    label?: string;
};
declare const UpgradeBtn: React.ForwardRefExoticComponent<Omit<ButtonProps, "variant"> & {
    label?: string;
} & React.RefAttributes<HTMLButtonElement>>;

interface UpgradeOverlayProps {
    badge_label?: string;
    message: string;
    cta_label?: string;
    on_upgrade: () => void;
    className?: string;
}
declare function UpgradeOverlay({ badge_label, message, cta_label, on_upgrade, className, }: UpgradeOverlayProps): react_jsx_runtime.JSX.Element;

export { Accordion, AccordionContent, type AccordionContentProps, AccordionItem, type AccordionItemProps, type AccordionProps, AccordionTrigger, type AccordionTriggerProps, type AccordionVariantProps, Avatar, AvatarGroup, type AvatarGroupProps, AvatarNamed, type AvatarNamedProps, type AvatarProps, type AvatarVariantProps, AvatarWithStatus, type AvatarWithStatusProps, Badge, BadgeDot, type BadgeDotProps, type BadgeProps, type BadgeVariantProps, Banner, type BannerProps, Button, type ButtonProps, type ButtonVariantProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardIcon, type CardIconProps, type CardProps, CardTitle, type CardVariantProps, Checkbox, type CheckboxProps, FeatureCard, type FeatureCardProps, Kbd, type KbdProps, type KbdVariantProps, Marquee, MarqueeLogo, type MarqueeLogoProps, type MarqueeProps, MarqueeTrack, type MarqueeTrackProps, type MarqueeVariantProps, Modal, ModalActions, type ModalActionsProps, ModalBody, type ModalBodyProps, ModalDescription, type ModalDescriptionProps, ModalFooter, type ModalFooterProps, ModalHeader, type ModalHeaderProps, type ModalProps, type ModalSize, ModalTitle, type ModalTitleProps, Navbar, NavbarActions, type NavbarActionsProps, NavbarCta, type NavbarCtaProps, NavbarHamburger, type NavbarHamburgerProps, NavbarInner, type NavbarInnerProps, NavbarLink, type NavbarLinkProps, NavbarLinks, type NavbarLinksProps, NavbarLogo, type NavbarLogoProps, NavbarMega, NavbarMegaCol, type NavbarMegaColProps, NavbarMegaCols, type NavbarMegaColsProps, NavbarMegaItem, type NavbarMegaItemProps, NavbarMegaItemSimple, type NavbarMegaItemSimpleProps, NavbarMegaPanel, type NavbarMegaPanelProps, type NavbarMegaProps, NavbarMobileDivider, NavbarMobileLink, type NavbarMobileLinkProps, NavbarMobileMenu, type NavbarMobileMenuProps, type NavbarProps, NavbarSearch, type NavbarSearchProps, NavbarTrigger, type NavbarTriggerProps, type NavbarVariant, NotFoundPage, type NotFoundPageProps, PricingCard, type PricingCardProps, Radio, type RadioProps, type SegOption, SegmentedToggle, type SegmentedToggleProps, Select, SelectContent, type SelectContentProps, SelectItem, type SelectItemProps, type SelectProps, SelectTrigger, type SelectTriggerProps, SelectValue, type SelectValueProps, SettingsModalShell, type SettingsModalShellProps, SettingsNavGroup, type SettingsNavGroupData, type SettingsNavGroupProps, type SettingsNavItem, SettingsNavItemButton, type SettingsNavItemButtonProps, SettingsRow, type SettingsRowProps, SettingsSaveIndicator, type SettingsSaveIndicatorProps, type SettingsSaveStatus, SettingsSectionHeader, type SettingsSectionHeaderProps, SidebarAccountMenu, type SidebarAccountMenuItem, type SidebarAccountMenuProps, SidebarActionButton, type SidebarActionButtonProps, SidebarHeader, type SidebarHeaderProps, SidebarMoreToggle, type SidebarMoreToggleProps, SidebarNavRow, type SidebarNavRowProps, SidebarSectionHeader, type SidebarSectionHeaderProps, SidebarSectionToggle, type SidebarSectionToggleProps, SidebarTagRow, type SidebarTagRowProps, SimpleToast, type SimpleToastProps, Skeleton, type SkeletonProps, SkeletonText, type SkeletonTextProps, type SkeletonVariant, StatCard, type StatCardProps, type StatTrend, type StatusType, StorageIndicator, type StorageIndicatorProps, Switch, type SwitchProps, type SwitchVariantProps, TestimonialCard, type TestimonialCardProps, TextRoller, type TextRollerItem, type TextRollerProps, ThemeCard, type ThemeCardProps, type ThemeMode, type ToastKind, type ToastPayload, Tooltip, TooltipDotted, type TooltipDottedProps, type TooltipPosition, type TooltipProps, TooltipRich, type TooltipRichProps, UpgradeBtn, type UpgradeBtnProps, UpgradeOverlay, type UpgradeOverlayProps, accordion_variants, avatar_variants, badge_variants, button_variants, card_variants, dismiss_toast, kbd_variants, marquee_variants, show_toast, switch_variants };

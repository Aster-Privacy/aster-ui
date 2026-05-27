import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React$1 from 'react';
import { CSSProperties, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { Variants, Transition } from 'framer-motion';

declare const button_variants: (props?: ({
    variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "depth" | "depth_destructive" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ButtonVariantProps = VariantProps<typeof button_variants>;
type LoadingPosition = "replace" | "before" | "after";
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {
    as_child?: boolean;
    is_loading?: boolean;
    loading_position?: LoadingPosition;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const badge_variants: (props?: ({
    color?: "blue" | "green" | "purple" | "amber" | "gray" | "red" | null | undefined;
    size?: "lg" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type BadgeVariantProps = VariantProps<typeof badge_variants>;
interface BadgeProps extends Omit<React$1.HTMLAttributes<HTMLSpanElement>, "color">, BadgeVariantProps {
}
declare const Badge: React$1.ForwardRefExoticComponent<BadgeProps & React$1.RefAttributes<HTMLSpanElement>>;
interface BadgeDotProps extends Omit<React$1.HTMLAttributes<HTMLSpanElement>, "color"> {
    color?: "blue" | "green" | "amber" | "red" | "gray";
}
declare const BadgeDot: React$1.ForwardRefExoticComponent<BadgeDotProps & React$1.RefAttributes<HTMLSpanElement>>;

declare const card_variants: (props?: ({
    variant?: "ghost" | "default" | "elevated" | "outlined" | "glass" | "featured" | null | undefined;
    padding?: "sm" | "md" | "lg" | "none" | null | undefined;
    interactive?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type CardVariantProps = VariantProps<typeof card_variants>;
interface CardProps extends React$1.HTMLAttributes<HTMLDivElement>, CardVariantProps {
    as_child?: boolean;
}
declare const Card: React$1.ForwardRefExoticComponent<CardProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
interface CardIconProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "color"> {
    color?: "blue" | "green" | "purple" | "amber" | "red" | "gray";
}
declare const CardIcon: React$1.ForwardRefExoticComponent<CardIconProps & React$1.RefAttributes<HTMLDivElement>>;

interface FeatureCardProps extends Omit<CardProps, "children"> {
    icon?: React$1.ReactNode;
    icon_color?: "blue" | "green" | "purple" | "amber" | "red" | "gray";
    title: string;
    description: string;
}
declare const FeatureCard: React$1.ForwardRefExoticComponent<FeatureCardProps & React$1.RefAttributes<HTMLDivElement>>;

interface PricingCardProps extends Omit<CardProps, "children"> {
    plan: string;
    price: string;
    period?: string;
    description?: string;
    features: string[];
    badge?: React$1.ReactNode;
    children?: React$1.ReactNode;
}
declare const PricingCard: React$1.ForwardRefExoticComponent<PricingCardProps & React$1.RefAttributes<HTMLDivElement>>;

interface TestimonialCardProps extends Omit<CardProps, "children"> {
    quote: string;
    author: string;
    role?: string;
    company?: string;
    avatar?: React$1.ReactNode;
}
declare const TestimonialCard: React$1.ForwardRefExoticComponent<TestimonialCardProps & React$1.RefAttributes<HTMLDivElement>>;

interface StatTrend {
    direction: "up" | "down" | "neutral";
    value: string;
}
interface StatCardProps extends Omit<CardProps, "children"> {
    value: string;
    label: string;
    trend?: StatTrend;
}
declare const StatCard: React$1.ForwardRefExoticComponent<StatCardProps & React$1.RefAttributes<HTMLDivElement>>;

interface BannerProps extends React$1.HTMLAttributes<HTMLDivElement> {
    badge?: React$1.ReactNode;
    text: string;
    action_label?: string;
    action_href?: string;
    on_action?: () => void;
    on_dismiss?: () => void;
    show_close?: boolean;
}
declare const Banner: React$1.ForwardRefExoticComponent<BannerProps & React$1.RefAttributes<HTMLDivElement>>;

declare const avatar_variants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type AvatarVariantProps = VariantProps<typeof avatar_variants>;
interface AvatarProps extends Omit<React$1.HTMLAttributes<HTMLElement>, "children">, AvatarVariantProps {
    src?: string;
    alt?: string;
    initials?: string;
    bordered?: boolean;
}
declare const Avatar: React$1.ForwardRefExoticComponent<AvatarProps & React$1.RefAttributes<HTMLElement>>;
type StatusType = "online" | "away" | "busy" | "offline";
interface AvatarWithStatusProps extends AvatarProps {
    status: StatusType;
}
declare const AvatarWithStatus: React$1.ForwardRefExoticComponent<AvatarWithStatusProps & React$1.RefAttributes<HTMLDivElement>>;
interface AvatarGroupProps extends React$1.HTMLAttributes<HTMLDivElement> {
    children: React$1.ReactNode;
}
declare const AvatarGroup: React$1.ForwardRefExoticComponent<AvatarGroupProps & React$1.RefAttributes<HTMLDivElement>>;
interface AvatarNamedProps extends React$1.HTMLAttributes<HTMLDivElement> {
    name: string;
    children: React$1.ReactNode;
}
declare const AvatarNamed: React$1.ForwardRefExoticComponent<AvatarNamedProps & React$1.RefAttributes<HTMLDivElement>>;

type ModalSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";
interface ModalProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "title"> {
    open?: boolean;
    is_open?: boolean;
    on_close: () => void;
    size?: ModalSize;
    show_close_button?: boolean;
    close_on_overlay?: boolean;
    z_index?: number;
    children: React$1.ReactNode;
}
declare const Modal: React$1.ForwardRefExoticComponent<ModalProps & React$1.RefAttributes<HTMLDivElement>>;
interface ModalHeaderProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "title"> {
    title?: string;
    icon?: React$1.ReactNode;
    on_close?: () => void;
    children?: React$1.ReactNode;
}
declare const ModalHeader: React$1.ForwardRefExoticComponent<ModalHeaderProps & React$1.RefAttributes<HTMLDivElement>>;
type ModalBodyProps = React$1.HTMLAttributes<HTMLParagraphElement>;
declare const ModalBody: React$1.ForwardRefExoticComponent<ModalBodyProps & React$1.RefAttributes<HTMLParagraphElement>>;
type ModalActionsProps = React$1.HTMLAttributes<HTMLDivElement>;
declare const ModalActions: React$1.ForwardRefExoticComponent<ModalActionsProps & React$1.RefAttributes<HTMLDivElement>>;
type ModalTitleProps = React$1.HTMLAttributes<HTMLHeadingElement>;
declare const ModalTitle: React$1.ForwardRefExoticComponent<ModalTitleProps & React$1.RefAttributes<HTMLHeadingElement>>;
type ModalDescriptionProps = React$1.HTMLAttributes<HTMLParagraphElement>;
declare const ModalDescription: React$1.ForwardRefExoticComponent<ModalDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>>;
type ModalFooterProps = React$1.HTMLAttributes<HTMLDivElement>;
declare const ModalFooter: React$1.ForwardRefExoticComponent<ModalFooterProps & React$1.RefAttributes<HTMLDivElement>>;

declare const Select: React$1.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SelectContent: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
type SelectProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>;
type SelectGroupProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>;
type SelectValueProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>;
type SelectTriggerProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;
type SelectContentProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;
type SelectItemProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;

type SkeletonVariant = "text" | "circular" | "rectangular";
interface SkeletonProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "children"> {
    variant?: SkeletonVariant;
    width?: number | string;
    height?: number | string;
}
declare const Skeleton: React$1.ForwardRefExoticComponent<SkeletonProps & React$1.RefAttributes<HTMLDivElement>>;
interface SkeletonTextProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "children"> {
    lines?: number;
    line_height?: number | string;
    last_line_width?: number | string;
    gap?: number | string;
}
declare const SkeletonText: React$1.ForwardRefExoticComponent<SkeletonTextProps & React$1.RefAttributes<HTMLDivElement>>;

type SpinnerSize = "xs" | "sm" | "md" | "lg";
interface SpinnerProps extends React$1.SVGAttributes<SVGSVGElement> {
    size?: SpinnerSize;
}
declare const Spinner: React$1.ForwardRefExoticComponent<SpinnerProps & React$1.RefAttributes<SVGSVGElement>>;

type ToastKind = "success" | "warning" | "error" | "info";
interface ToastPayload {
    id: string;
    message: string;
    icon_type?: ToastKind;
}
declare function dismiss_toast(id: string): void;
declare function show_toast(message: string, icon_type?: ToastKind): string;
interface SimpleToastProps {
    position?: "top" | "bottom";
    dismiss_label?: string;
}
declare function SimpleToast({ position, dismiss_label, }: SimpleToastProps): react_jsx_runtime.JSX.Element;

interface NotFoundPageProps {
    title?: string;
    message?: string;
    cta_label?: string;
    on_navigate_home?: () => void;
    className?: string;
    children?: React$1.ReactNode;
}
declare function NotFoundPage({ title, message, cta_label, on_navigate_home, className, children, }: NotFoundPageProps): react_jsx_runtime.JSX.Element;

interface SidebarAccountMenuItem {
    id: string;
    label: string;
    icon: React$1.ElementType;
    on_click: () => void;
}
interface SidebarAccountMenuProps {
    is_open: boolean;
    on_close: () => void;
    trigger: React$1.ReactNode;
    identity_label: string;
    active_label: string;
    display_name?: string;
    email?: string;
    profile_color?: string | null;
    profile_picture?: string | null;
    aster_fallback_src?: string;
    items: SidebarAccountMenuItem[];
    footer?: React$1.ReactNode;
}
declare function SidebarAccountMenu({ is_open, on_close, trigger, identity_label, active_label, display_name, email, profile_color, profile_picture, aster_fallback_src, items, footer, }: SidebarAccountMenuProps): react_jsx_runtime.JSX.Element;

type TooltipPosition = "top" | "bottom" | "left" | "right";
interface TooltipProps {
    tip: string;
    position?: TooltipPosition;
    dark?: boolean;
    delay?: number;
    children: React$1.ReactNode;
}
declare function Tooltip({ tip, position, dark, delay, children }: TooltipProps): react_jsx_runtime.JSX.Element;
declare namespace Tooltip {
    var displayName: string;
}
interface TooltipDottedProps extends React$1.HTMLAttributes<HTMLSpanElement> {
    tip: string;
    children: React$1.ReactNode;
}
declare const TooltipDotted: React$1.ForwardRefExoticComponent<TooltipDottedProps & React$1.RefAttributes<HTMLSpanElement>>;
interface TooltipRichProps extends React$1.HTMLAttributes<HTMLSpanElement> {
    title: string;
    description: string;
    children: React$1.ReactNode;
}
declare const TooltipRich: React$1.ForwardRefExoticComponent<TooltipRichProps & React$1.RefAttributes<HTMLSpanElement>>;

declare const switch_variants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    color?: "blue" | "green" | "purple" | "amber" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type SwitchVariantProps = VariantProps<typeof switch_variants>;
interface SwitchProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "size" | "color" | "type">, SwitchVariantProps {
    label_title?: string;
    label_desc?: string;
    onCheckedChange?: (checked: boolean) => void;
}
declare const Switch: React$1.ForwardRefExoticComponent<SwitchProps & React$1.RefAttributes<HTMLInputElement>>;
interface CheckboxProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    indeterminate?: boolean;
    onCheckedChange?: (checked: boolean | "indeterminate") => void;
}
declare const Checkbox: React$1.ForwardRefExoticComponent<CheckboxProps & React$1.RefAttributes<HTMLInputElement>>;
interface RadioProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
}
declare const Radio: React$1.ForwardRefExoticComponent<RadioProps & React$1.RefAttributes<HTMLInputElement>>;
interface SegOption {
    value: string;
    label: React$1.ReactNode;
}
interface SegmentedToggleProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "onChange"> {
    name: string;
    options: SegOption[];
    value?: string;
    on_change?: (value: string) => void;
}
declare const SegmentedToggle: React$1.ForwardRefExoticComponent<SegmentedToggleProps & React$1.RefAttributes<HTMLDivElement>>;

type NavbarVariant = "default" | "dark";
interface NavbarProps extends React$1.HTMLAttributes<HTMLElement> {
    variant?: NavbarVariant;
}
declare const Navbar: React$1.ForwardRefExoticComponent<NavbarProps & React$1.RefAttributes<HTMLElement>>;
type NavbarInnerProps = React$1.HTMLAttributes<HTMLDivElement>;
declare const NavbarInner: React$1.ForwardRefExoticComponent<NavbarInnerProps & React$1.RefAttributes<HTMLDivElement>>;
type NavbarLogoProps = React$1.AnchorHTMLAttributes<HTMLAnchorElement>;
declare const NavbarLogo: React$1.ForwardRefExoticComponent<NavbarLogoProps & React$1.RefAttributes<HTMLAnchorElement>>;
type NavbarLinksProps = React$1.HTMLAttributes<HTMLDivElement>;
declare const NavbarLinks: React$1.ForwardRefExoticComponent<NavbarLinksProps & React$1.RefAttributes<HTMLDivElement>>;
type NavbarLinkProps = React$1.AnchorHTMLAttributes<HTMLAnchorElement>;
declare const NavbarLink: React$1.ForwardRefExoticComponent<NavbarLinkProps & React$1.RefAttributes<HTMLAnchorElement>>;
interface NavbarTriggerProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    panel_id: string;
}
declare const NavbarTrigger: React$1.ForwardRefExoticComponent<NavbarTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
type NavbarActionsProps = React$1.HTMLAttributes<HTMLDivElement>;
declare const NavbarActions: React$1.ForwardRefExoticComponent<NavbarActionsProps & React$1.RefAttributes<HTMLDivElement>>;
interface NavbarCtaProps extends React$1.AnchorHTMLAttributes<HTMLAnchorElement> {
    light?: boolean;
}
declare const NavbarCta: React$1.ForwardRefExoticComponent<NavbarCtaProps & React$1.RefAttributes<HTMLAnchorElement>>;
interface NavbarSearchProps extends React$1.HTMLAttributes<HTMLDivElement> {
    placeholder?: string;
    shortcut?: string;
}
declare const NavbarSearch: React$1.ForwardRefExoticComponent<NavbarSearchProps & React$1.RefAttributes<HTMLDivElement>>;
interface NavbarMegaProps extends React$1.HTMLAttributes<HTMLDivElement> {
    dark?: boolean;
}
declare const NavbarMega: React$1.ForwardRefExoticComponent<NavbarMegaProps & React$1.RefAttributes<HTMLDivElement>>;
interface NavbarMegaPanelProps extends React$1.HTMLAttributes<HTMLDivElement> {
    panel_id: string;
}
declare const NavbarMegaPanel: React$1.ForwardRefExoticComponent<NavbarMegaPanelProps & React$1.RefAttributes<HTMLDivElement>>;
type NavbarMegaColsProps = React$1.HTMLAttributes<HTMLDivElement>;
declare const NavbarMegaCols: React$1.ForwardRefExoticComponent<NavbarMegaColsProps & React$1.RefAttributes<HTMLDivElement>>;
interface NavbarMegaColProps extends React$1.HTMLAttributes<HTMLDivElement> {
    heading?: string;
}
declare const NavbarMegaCol: React$1.ForwardRefExoticComponent<NavbarMegaColProps & React$1.RefAttributes<HTMLDivElement>>;
interface NavbarMegaItemProps extends React$1.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon?: React$1.ReactNode;
    title: string;
    description?: string;
}
declare const NavbarMegaItem: React$1.ForwardRefExoticComponent<NavbarMegaItemProps & React$1.RefAttributes<HTMLAnchorElement>>;
type NavbarMegaItemSimpleProps = React$1.AnchorHTMLAttributes<HTMLAnchorElement>;
declare const NavbarMegaItemSimple: React$1.ForwardRefExoticComponent<NavbarMegaItemSimpleProps & React$1.RefAttributes<HTMLAnchorElement>>;
type NavbarHamburgerProps = React$1.ButtonHTMLAttributes<HTMLButtonElement>;
declare const NavbarHamburger: React$1.ForwardRefExoticComponent<NavbarHamburgerProps & React$1.RefAttributes<HTMLButtonElement>>;
type NavbarMobileMenuProps = React$1.HTMLAttributes<HTMLDivElement>;
declare const NavbarMobileMenu: React$1.ForwardRefExoticComponent<NavbarMobileMenuProps & React$1.RefAttributes<HTMLDivElement>>;
type NavbarMobileLinkProps = React$1.AnchorHTMLAttributes<HTMLAnchorElement>;
declare const NavbarMobileLink: React$1.ForwardRefExoticComponent<NavbarMobileLinkProps & React$1.RefAttributes<HTMLAnchorElement>>;
declare const NavbarMobileDivider: {
    (): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const accordion_variants: (props?: ({
    variant?: "default" | "bordered" | "separated" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type AccordionVariantProps = VariantProps<typeof accordion_variants>;
interface AccordionProps extends React$1.HTMLAttributes<HTMLDivElement>, AccordionVariantProps {
    multiple?: boolean;
    default_open?: string[];
}
interface AccordionItemProps extends React$1.HTMLAttributes<HTMLDivElement> {
    value: string;
}
interface AccordionTriggerProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React$1.ReactNode;
}
type AccordionContentProps = React$1.HTMLAttributes<HTMLDivElement>;
declare const Accordion: React$1.ForwardRefExoticComponent<AccordionProps & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React$1.ForwardRefExoticComponent<AccordionItemProps & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React$1.ForwardRefExoticComponent<AccordionTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React$1.ForwardRefExoticComponent<AccordionContentProps & React$1.RefAttributes<HTMLDivElement>>;

declare const kbd_variants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
    variant?: "outline" | "ghost" | "default" | "inlay" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type KbdVariantProps = VariantProps<typeof kbd_variants>;
interface KbdProps extends Omit<React$1.HTMLAttributes<HTMLElement>, "children">, KbdVariantProps {
    keys: string | string[];
}
declare const Kbd: React$1.ForwardRefExoticComponent<KbdProps & React$1.RefAttributes<HTMLElement>>;

declare const marquee_variants: (props?: ({
    variant?: "default" | "dark" | null | undefined;
    fade?: boolean | null | undefined;
    pause_on_hover?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type MarqueeVariantProps = VariantProps<typeof marquee_variants>;
type MarqueeProps = React$1.HTMLAttributes<HTMLDivElement> & MarqueeVariantProps;
interface MarqueeTrackProps extends React$1.HTMLAttributes<HTMLDivElement> {
    reverse?: boolean;
    speed?: "slow" | "default" | "fast";
}
interface MarqueeLogoProps extends React$1.HTMLAttributes<HTMLSpanElement> {
    icon?: React$1.ReactNode;
}
declare const Marquee: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & MarqueeVariantProps & React$1.RefAttributes<HTMLDivElement>>;
declare const MarqueeTrack: React$1.ForwardRefExoticComponent<MarqueeTrackProps & React$1.RefAttributes<HTMLDivElement>>;
declare const MarqueeLogo: React$1.ForwardRefExoticComponent<MarqueeLogoProps & React$1.RefAttributes<HTMLSpanElement>>;

interface TextRollerItem {
    text: string;
    class_name?: string;
}
interface TextRollerProps extends React$1.HTMLAttributes<HTMLDivElement> {
    items: (string | TextRollerItem)[];
    interval?: number;
    item_height?: string;
}
declare const TextRoller: React$1.ForwardRefExoticComponent<TextRollerProps & React$1.RefAttributes<HTMLDivElement>>;

interface SidebarHeaderProps {
    is_collapsed: boolean;
    title: string;
    subtitle?: string;
    logo_src: string;
    logo_alt: string;
    on_trigger_click?: () => void;
    show_chevron?: boolean;
    right_slot?: React$1.ReactNode;
}
declare function SidebarHeader({ is_collapsed, title, subtitle, logo_src, logo_alt, on_trigger_click, show_chevron, right_slot, }: SidebarHeaderProps): react_jsx_runtime.JSX.Element;
interface SidebarSectionHeaderProps {
    label: string;
    is_collapsed: boolean;
}
declare function SidebarSectionHeader({ label, is_collapsed, }: SidebarSectionHeaderProps): react_jsx_runtime.JSX.Element | null;
interface SidebarSectionToggleProps {
    label: string;
    is_collapsed: boolean;
    section_collapsed: boolean;
    on_toggle: () => void;
    right_slot?: React$1.ReactNode;
    margin_top?: boolean;
}
declare function SidebarSectionToggle({ label, is_collapsed, section_collapsed, on_toggle, right_slot, }: SidebarSectionToggleProps): react_jsx_runtime.JSX.Element | null;
interface SidebarMoreToggleProps {
    more_label: string;
    less_label: string;
    expanded: boolean;
    hidden_count: number;
    on_toggle: () => void;
}
declare function SidebarMoreToggle({ more_label, less_label, expanded, on_toggle, }: SidebarMoreToggleProps): react_jsx_runtime.JSX.Element;
interface SidebarNavRowProps {
    icon?: React$1.ElementType;
    label: string;
    selected?: boolean;
    is_collapsed?: boolean;
    count?: number;
    show_count?: boolean;
    is_loading?: boolean;
    on_click?: () => void;
    trailing?: React$1.ReactNode;
    leading?: React$1.ReactNode;
    title?: string;
}
declare const SidebarNavRow: React$1.ForwardRefExoticComponent<SidebarNavRowProps & React$1.RefAttributes<HTMLButtonElement>>;
interface SidebarTagRowProps {
    label: string;
    count?: number;
    selected?: boolean;
    is_collapsed?: boolean;
    on_click?: () => void;
    color?: string;
    show_count?: boolean;
    button_ref?: React$1.Ref<HTMLButtonElement>;
    drag_over?: boolean;
    on_drag_enter?: (e: React$1.DragEvent<HTMLButtonElement>) => void;
    on_drag_leave?: (e: React$1.DragEvent<HTMLButtonElement>) => void;
    on_drag_over?: (e: React$1.DragEvent<HTMLButtonElement>) => void;
    on_drop?: (e: React$1.DragEvent<HTMLButtonElement>) => void;
    tag_icon?: React$1.ComponentType<{
        className?: string;
        style?: React$1.CSSProperties;
    }> | null;
}
declare function SidebarTagRow({ label, count, selected, is_collapsed, on_click, color, show_count, button_ref, drag_over, on_drag_enter, on_drag_leave, on_drag_over, on_drop, tag_icon: TagIcon, }: SidebarTagRowProps): react_jsx_runtime.JSX.Element;
interface SidebarActionButtonProps {
    icon: React$1.ElementType;
    label: string;
    on_click: () => void;
    is_collapsed?: boolean;
    shortcut_key?: string;
    data_attr?: Record<string, string>;
    extra_class?: string;
}
declare function SidebarActionButton({ icon: Icon, label, on_click, is_collapsed, shortcut_key, data_attr, extra_class, }: SidebarActionButtonProps): react_jsx_runtime.JSX.Element;

type DashboardSidebarFilter = {
    kind: "all";
} | {
    kind: "favorites";
} | {
    kind: "recent";
} | {
    kind: "archived";
} | {
    kind: "tag";
    tag: string;
};
interface DashboardSidebarAccountLike {
    id: string;
    tags?: string[] | null;
    is_pinned?: boolean;
    created_at?: string | null;
}
interface DashboardSidebarTStrings {
    add_account: string;
    accounts_section: string;
    all_accounts: string;
    favorites: string;
    recently_used: string;
    archived: string;
    tags_section: string;
    no_tags_yet: string;
    create_tag: string;
    show_less: string;
    more_tags: (count: number) => string;
    settings: string;
    sign_out: string;
    app_name: string;
    deck_subtitle?: string;
    your_account: string;
    active: string;
    close_menu: string;
}
interface DashboardSidebarProps {
    active_filter: DashboardSidebarFilter;
    on_filter_change: (filter: DashboardSidebarFilter) => void;
    on_add_account: () => void;
    on_settings_click: () => void;
    on_sign_out: () => void;
    on_toggle_collapsed?: () => void;
    is_collapsed: boolean;
    is_mobile_open: boolean;
    on_close_mobile: () => void;
    accounts: DashboardSidebarAccountLike[];
    brand_logo_src: string;
    brand_text_logo_src: string;
    account_display_name?: string;
    account_email?: string;
    account_profile_color?: string | null;
    account_profile_picture?: string | null;
    account_aster_fallback_src?: string;
    t_strings: DashboardSidebarTStrings;
    storage_key_prefix?: string;
    add_shortcut_key?: string;
    extra_account_menu_items?: Array<{
        id: string;
        label: string;
        icon: React.ElementType;
        on_click: () => void;
    }>;
}
declare function DashboardSidebar({ active_filter, on_filter_change, on_add_account, on_settings_click, on_sign_out, is_collapsed, is_mobile_open, on_close_mobile, accounts, brand_logo_src, brand_text_logo_src, account_display_name, account_email, account_profile_color, account_profile_picture, account_aster_fallback_src, t_strings, storage_key_prefix, add_shortcut_key, extra_account_menu_items, }: DashboardSidebarProps): react_jsx_runtime.JSX.Element;

type SettingsSaveStatus = "idle" | "saving" | "saved" | "error";
interface SettingsSaveIndicatorProps {
    status: SettingsSaveStatus;
}
declare function SettingsSaveIndicator({ status }: SettingsSaveIndicatorProps): react_jsx_runtime.JSX.Element | null;
interface SettingsSectionHeaderProps {
    icon?: React$1.ElementType;
    title: string;
    description?: string;
    trailing?: React$1.ReactNode;
}
declare function SettingsSectionHeader({ icon: Icon, title, description, trailing, }: SettingsSectionHeaderProps): react_jsx_runtime.JSX.Element;
interface SettingsRowProps {
    label: string;
    description?: string;
    children: React$1.ReactNode;
}
declare function SettingsRow({ label, description, children }: SettingsRowProps): react_jsx_runtime.JSX.Element;
interface SettingsNavItem {
    id: string;
    label: string;
    icon: React$1.ElementType;
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
    header_extra?: React$1.ReactNode;
    header_slot?: React$1.ReactNode;
    overlay_content?: React$1.ReactNode;
    content_dimmed?: boolean;
    enable_mobile_drilldown?: boolean;
    back_label?: string;
    content_key?: string;
    close_button?: React$1.ReactNode;
    mobile_back_button?: React$1.ReactNode;
    mobile_item_full_border?: boolean;
    mobile_group_spacing?: boolean;
    stable_scrollbar_gutter?: boolean;
    children: React$1.ReactNode;
}
declare function SettingsModalShell({ is_open, on_close, title, groups, selected_id, on_select, active_label, save_status, close_label, reduce_motion: reduce_motion_prop, header_extra, header_slot, overlay_content, content_dimmed, enable_mobile_drilldown, back_label, content_key, close_button, mobile_back_button, mobile_item_full_border, mobile_group_spacing, stable_scrollbar_gutter, children, }: SettingsModalShellProps): react_jsx_runtime.JSX.Element;

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
    actions_slot?: React$1.ReactNode;
    footer_slot?: React$1.ReactNode;
    collapsed_footer_slot?: React$1.ReactNode;
}
declare function StorageIndicator({ is_collapsed, logo_src, logo_alt, on_logo_click, percentage, storage_used_label, usage_text, actions_slot, footer_slot, collapsed_footer_slot, }: StorageIndicatorProps): react_jsx_runtime.JSX.Element;

interface EmptyStateProps {
    icon?: React$1.ReactNode;
    title: string;
    description?: string;
    action?: React$1.ReactNode;
    className?: string;
    min_height?: string;
}
declare function EmptyState({ icon, title, description, action, className, min_height, }: EmptyStateProps): react_jsx_runtime.JSX.Element;

interface SearchBarProps {
    value: string;
    on_change: (next: string) => void;
    placeholder?: string;
    clear_label?: string;
    className?: string;
    search_icon?: React$1.ReactNode;
    clear_icon?: React$1.ReactNode;
}
declare function SearchBar({ value, on_change, placeholder, clear_label, className, search_icon, clear_icon, }: SearchBarProps): react_jsx_runtime.JSX.Element;

interface AppEntry {
    id: string;
    name: string;
    description?: string;
    url: string;
    logo_src: string;
}
interface AppSwitcherProps {
    apps: AppEntry[];
    current_app_id: string;
    title: string;
}
declare function AppSwitcher({ apps, current_app_id, title }: AppSwitcherProps): react_jsx_runtime.JSX.Element;

interface AuthLogoProps {
    src?: string;
    alt?: string;
    className?: string;
}
declare const AuthLogo: ({ src, alt, className, }: AuthLogoProps) => react_jsx_runtime.JSX.Element;
declare const AuthEyeIcon: () => react_jsx_runtime.JSX.Element;
declare const AuthEyeSlashIcon: () => react_jsx_runtime.JSX.Element;
interface AuthInputWrapperProps {
    end_content?: React$1.ReactNode;
    wrapper_class?: string;
    children: React$1.ReactNode;
}
declare const AuthInputWrapper: ({ end_content, wrapper_class, children, }: AuthInputWrapperProps) => react_jsx_runtime.JSX.Element;
declare const AuthCheckIcon: ({ className, }: {
    className?: string;
}) => react_jsx_runtime.JSX.Element;
interface AuthCheckboxProps {
    checked: boolean;
    disabled?: boolean;
    onChange: (checked: boolean) => void;
}
declare const AuthCheckbox: ({ checked, disabled, onChange, }: AuthCheckboxProps) => react_jsx_runtime.JSX.Element;
interface AuthCardProps {
    children: React$1.ReactNode;
    className?: string;
}
declare const AuthCard: ({ children, className, }: AuthCardProps) => react_jsx_runtime.JSX.Element;
interface AuthCardBodyProps {
    children: React$1.ReactNode;
    padding?: string;
}
declare const AuthCardBody: ({ children, padding, }: AuthCardBodyProps) => react_jsx_runtime.JSX.Element;
declare const AuthFormLabel: ({ children, }: {
    children: React$1.ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const AuthFourPointStar: ({ className, }: {
    className?: string;
}) => react_jsx_runtime.JSX.Element;
declare const AuthSparkleDecoration: () => react_jsx_runtime.JSX.Element;
declare const AuthShieldCheckIcon: ({ color }: {
    color: string;
}) => react_jsx_runtime.JSX.Element;
declare const AuthLockIcon: ({ color }: {
    color: string;
}) => react_jsx_runtime.JSX.Element;
declare const AuthWarningIcon: ({ color }: {
    color: string;
}) => react_jsx_runtime.JSX.Element;
declare const AuthDocumentIcon: () => react_jsx_runtime.JSX.Element;
declare const AuthDownloadIcon: () => react_jsx_runtime.JSX.Element;
declare const AuthUserCircleIcon: () => react_jsx_runtime.JSX.Element;
declare const AuthLockClosedIcon: () => react_jsx_runtime.JSX.Element;
declare const AuthEnvelopeIcon: () => react_jsx_runtime.JSX.Element;
type AuthAlertKind = "error" | "info" | "warning" | "success";
declare const get_auth_alert_styles: (type: AuthAlertKind, _is_dark: boolean) => CSSProperties;
declare const get_auth_primary_button_style: (is_dark: boolean, is_disabled?: boolean) => CSSProperties;

interface FieldLabelProps {
    children: React$1.ReactNode;
    className?: string;
    htmlFor?: string;
}
declare function FieldLabel({ children, className, htmlFor }: FieldLabelProps): react_jsx_runtime.JSX.Element;
interface FieldHintProps {
    children: React$1.ReactNode;
    className?: string;
}
declare function FieldHint({ children, className }: FieldHintProps): react_jsx_runtime.JSX.Element;
interface ErrorBannerProps {
    message: string;
    className?: string;
}
declare function ErrorBanner({ message, className }: ErrorBannerProps): react_jsx_runtime.JSX.Element;

type InputSize = "sm" | "md" | "lg" | "xl";
type InputStatus = "default" | "success" | "error";
interface InputProps extends Omit<React$1.ComponentProps<"input">, "size"> {
    size?: InputSize;
    status?: InputStatus;
}
declare const Input: React$1.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React$1.RefAttributes<HTMLInputElement>>;

declare const RadioGroup: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

type MotionModalSize = "sm" | "md" | "lg" | "xl" | "2xl";
interface MotionModalProps {
    is_open: boolean;
    on_close: () => void;
    size?: MotionModalSize;
    show_close_button?: boolean;
    close_on_overlay?: boolean;
    z_index?: number;
    className?: string;
    children: React$1.ReactNode;
}
declare function MotionModal({ is_open, on_close, size, show_close_button, close_on_overlay, z_index, className, children, }: MotionModalProps): react_jsx_runtime.JSX.Element;
interface MotionModalHeaderProps extends React$1.HTMLAttributes<HTMLDivElement> {
}
declare function MotionModalHeader({ className, children, ...props }: MotionModalHeaderProps): react_jsx_runtime.JSX.Element;
interface MotionModalTitleProps extends React$1.HTMLAttributes<HTMLHeadingElement> {
}
declare function MotionModalTitle({ className, children, ...props }: MotionModalTitleProps): react_jsx_runtime.JSX.Element;
interface MotionModalDescriptionProps extends React$1.HTMLAttributes<HTMLParagraphElement> {
}
declare function MotionModalDescription({ className, children, ...props }: MotionModalDescriptionProps): react_jsx_runtime.JSX.Element;
interface MotionModalBodyProps extends React$1.HTMLAttributes<HTMLDivElement> {
}
declare function MotionModalBody({ className, children, ...props }: MotionModalBodyProps): react_jsx_runtime.JSX.Element;
interface MotionModalFooterProps extends React$1.HTMLAttributes<HTMLDivElement> {
}
declare function MotionModalFooter({ className, children, ...props }: MotionModalFooterProps): react_jsx_runtime.JSX.Element;
interface MotionModalActionsProps extends React$1.HTMLAttributes<HTMLDivElement> {
}
declare function MotionModalActions({ className, children, ...props }: MotionModalActionsProps): react_jsx_runtime.JSX.Element;

type ConfirmationVariant = "danger" | "warning" | "info";
interface ConfirmationModalProps {
    is_open: boolean;
    on_confirm: () => void;
    on_cancel: () => void;
    title: string;
    message: string;
    confirm_text: string;
    cancel_text: string;
    variant?: ConfirmationVariant;
    show_dont_ask_again?: boolean;
    dont_ask_again_label?: string;
    on_dont_ask_again?: () => void | Promise<void>;
    saving_text?: string;
}
declare function ConfirmationModal({ is_open, on_confirm, on_cancel, title, message, confirm_text, cancel_text, variant, show_dont_ask_again, dont_ask_again_label, on_dont_ask_again, saving_text, }: ConfirmationModalProps): react_jsx_runtime.JSX.Element;

interface KeyboardShortcutEntry {
    keys: string[];
    label: string;
}
interface KeyboardShortcutSection {
    title: string;
    shortcuts: KeyboardShortcutEntry[];
}
interface KeyboardShortcutsTStrings {
    title: string;
    close: string;
    press_label?: string;
    anywhere_to_open?: string;
    platform_label?: string;
    platform_prefix?: string;
}
interface KeyboardShortcutsModalProps {
    is_open: boolean;
    on_close: () => void;
    shortcuts: KeyboardShortcutEntry[] | KeyboardShortcutSection[];
    t_strings: KeyboardShortcutsTStrings;
    reduce_motion?: boolean;
    header_right_slot?: React$1.ReactNode;
    disabled_overlay?: React$1.ReactNode;
    use_two_column_grid?: boolean;
    render_entry_extra?: (entry: KeyboardShortcutEntry) => React$1.ReactNode;
}
declare function KeyboardShortcutsModal({ is_open, on_close, shortcuts, t_strings, reduce_motion: reduce_motion_prop, header_right_slot, disabled_overlay, use_two_column_grid, render_entry_extra, }: KeyboardShortcutsModalProps): react_jsx_runtime.JSX.Element;

declare const DropdownMenu: React$1.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React$1.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React$1.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface ContextMenuItem {
    id: string;
    label: string;
    icon?: React$1.ReactNode;
    danger?: boolean;
    disabled?: boolean;
    trailing?: React$1.ReactNode;
    on_select: () => void;
}
interface ContextMenuPosition {
    x: number;
    y: number;
}
interface ContextMenuProps {
    items: ContextMenuItem[];
    position: ContextMenuPosition;
    on_close: () => void;
    min_width?: number;
    origin?: "top-left" | "top-right";
}
declare function ContextMenu({ items, position, on_close, min_width, origin, }: ContextMenuProps): react_jsx_runtime.JSX.Element;

declare function FullPageLoader(): react_jsx_runtime.JSX.Element | null;

interface CountBadgeProps {
    count: number;
    show_zero?: boolean;
    is_active?: boolean;
    is_loading?: boolean;
    className?: string;
}
declare function CountBadge({ count, show_zero, is_active, is_loading, className, }: CountBadgeProps): react_jsx_runtime.JSX.Element | null;

interface SettingRowProps {
    label: string;
    description: string;
    children: React.ReactNode;
}
declare function SettingRow({ label, description, children }: SettingRowProps): react_jsx_runtime.JSX.Element;

interface RadioRowWithDescriptionProps {
    label: string;
    description: string;
    is_selected: boolean;
    on_select: () => void;
}
declare function RadioRowWithDescription({ label, description, is_selected, on_select, }: RadioRowWithDescriptionProps): react_jsx_runtime.JSX.Element;

interface ViewMockupProps {
    theme: "light" | "dark";
}
declare function ViewMockupSplit({ theme }: ViewMockupProps): react_jsx_runtime.JSX.Element;
declare function ViewMockupPopup({ theme }: ViewMockupProps): react_jsx_runtime.JSX.Element;
declare function ViewMockupFullpage({ theme }: ViewMockupProps): react_jsx_runtime.JSX.Element;

declare function ThemeMockupLight(): react_jsx_runtime.JSX.Element;
declare function ThemeMockupDark(): react_jsx_runtime.JSX.Element;

interface ViewModeCardProps {
    mode: "popup" | "split" | "fullpage";
    label: string;
    is_selected: boolean;
    on_select: () => void;
    theme: "light" | "dark";
}
declare function ViewModeCard({ mode, label, is_selected, on_select, theme, }: ViewModeCardProps): react_jsx_runtime.JSX.Element;

declare const AlertDialog: React$1.FC<AlertDialogPrimitive.AlertDialogProps>;
declare const AlertDialogTrigger: React$1.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogPortal: React$1.FC<AlertDialogPrimitive.AlertDialogPortalProps>;
interface AlertDialogContentProps extends React$1.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> {
    on_overlay_click?: () => void;
}
declare const AlertDialogContent: React$1.ForwardRefExoticComponent<AlertDialogContentProps & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogTitle: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const AlertDialogDescription: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const AlertDialogAction: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogCancel: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

interface ExternalLinkWarningModalProps {
    is_open: boolean;
    url: string;
    on_close: () => void;
    on_confirm: () => void;
    on_dismiss_permanently: () => void;
    title?: string;
    description?: string;
    continue_label?: string;
    cancel_label?: string;
    dont_ask_again_label?: string;
}
declare function ExternalLinkWarningModal({ is_open, url, on_close, on_confirm, on_dismiss_permanently, title, description, continue_label, cancel_label, dont_ask_again_label, }: ExternalLinkWarningModalProps): react_jsx_runtime.JSX.Element;

declare function use_should_reduce_motion(): boolean;

declare const motion_ease_standard: [number, number, number, number];
declare const motion_duration_fast = 0.1;
declare const motion_duration_base = 0.15;
declare const motion_duration_slow = 0.25;
declare const stagger_container: Variants;
declare const fade_up_item: Variants;
declare const page_slide_transition: Transition;
declare const button_tap: {
    scale: number;
    transition: {
        duration: number;
    };
};

type ColorVisionMode = "none" | "protanopia" | "deuteranopia" | "tritanopia" | "achromatopsia";
interface ColorVisionFiltersProps {
    mode?: ColorVisionMode;
}
declare function ColorVisionFilters({ mode }: ColorVisionFiltersProps): react_jsx_runtime.JSX.Element;

interface MobileHeaderProps {
    title?: ReactNode;
    left_action?: ReactNode;
    right_actions?: ReactNode;
    safe_area_top?: number | string;
    height?: number;
    on_title_click?: () => void;
    center_content?: ReactNode;
}
declare const MobileHeader: React$1.NamedExoticComponent<MobileHeaderProps>;
interface MobileHeaderIconButtonProps {
    on_click: () => void;
    children: ReactNode;
    "aria-label"?: string;
}
declare const MobileHeaderIconButton: React$1.NamedExoticComponent<MobileHeaderIconButtonProps>;

interface MobileDrawerShellProps {
    is_open: boolean;
    on_close: () => void;
    children: ReactNode;
    width?: number;
    max_width_vw?: number;
    safe_area_top?: number | string;
    safe_area_bottom?: number | string;
    reduce_motion?: boolean;
    lock_body_scroll?: boolean;
    side?: "left" | "right";
    background_color?: string;
}
declare function MobileDrawerShell({ is_open, on_close, children, width, max_width_vw, safe_area_top, safe_area_bottom, reduce_motion, lock_body_scroll, side, background_color, }: MobileDrawerShellProps): react_jsx_runtime.JSX.Element;

interface MobileActionSheetShellProps {
    is_open: boolean;
    on_close: () => void;
    children: ReactNode;
    safe_area_bottom?: number | string;
    reduce_motion?: boolean;
    lock_body_scroll?: boolean;
    background_color?: string;
    max_height_vh?: number;
    z_index_backdrop?: number;
    z_index_panel?: number;
    show_handle?: boolean;
}
declare const MobileActionSheetShell: React$1.NamedExoticComponent<MobileActionSheetShellProps>;

export { Accordion, AccordionContent, type AccordionContentProps, AccordionItem, type AccordionItemProps, type AccordionProps, AccordionTrigger, type AccordionTriggerProps, type AccordionVariantProps, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, type AlertDialogContentProps, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, type AppEntry, AppSwitcher, type AppSwitcherProps, type AuthAlertKind, AuthCard, AuthCardBody, type AuthCardBodyProps, type AuthCardProps, AuthCheckIcon, AuthCheckbox, type AuthCheckboxProps, AuthDocumentIcon, AuthDownloadIcon, AuthEnvelopeIcon, AuthEyeIcon, AuthEyeSlashIcon, AuthFormLabel, AuthFourPointStar, AuthInputWrapper, type AuthInputWrapperProps, AuthLockClosedIcon, AuthLockIcon, AuthLogo, type AuthLogoProps, AuthShieldCheckIcon, AuthSparkleDecoration, AuthUserCircleIcon, AuthWarningIcon, Avatar, AvatarGroup, type AvatarGroupProps, AvatarNamed, type AvatarNamedProps, type AvatarProps, type AvatarVariantProps, AvatarWithStatus, type AvatarWithStatusProps, Badge, BadgeDot, type BadgeDotProps, type BadgeProps, type BadgeVariantProps, Banner, type BannerProps, Button, type ButtonProps, type ButtonVariantProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardIcon, type CardIconProps, type CardProps, CardTitle, type CardVariantProps, Checkbox, type CheckboxProps, ColorVisionFilters, type ColorVisionFiltersProps, type ColorVisionMode, ConfirmationModal, type ConfirmationModalProps, type ConfirmationVariant, ContextMenu, type ContextMenuItem, type ContextMenuPosition, type ContextMenuProps, CountBadge, DashboardSidebar, type DashboardSidebarAccountLike, type DashboardSidebarFilter, type DashboardSidebarProps, type DashboardSidebarTStrings, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, EmptyState, type EmptyStateProps, ErrorBanner, type ErrorBannerProps, ExternalLinkWarningModal, type ExternalLinkWarningModalProps, FeatureCard, type FeatureCardProps, FieldHint, type FieldHintProps, FieldLabel, type FieldLabelProps, FullPageLoader, Input, type InputProps, Kbd, type KbdProps, type KbdVariantProps, type KeyboardShortcutEntry, type KeyboardShortcutSection, KeyboardShortcutsModal, type KeyboardShortcutsModalProps, type KeyboardShortcutsTStrings, Marquee, MarqueeLogo, type MarqueeLogoProps, type MarqueeProps, MarqueeTrack, type MarqueeTrackProps, type MarqueeVariantProps, MobileActionSheetShell, type MobileActionSheetShellProps, MobileDrawerShell, type MobileDrawerShellProps, MobileHeader, MobileHeaderIconButton, type MobileHeaderIconButtonProps, type MobileHeaderProps, Modal, ModalActions, type ModalActionsProps, ModalBody, type ModalBodyProps, ModalDescription, type ModalDescriptionProps, ModalFooter, type ModalFooterProps, ModalHeader, type ModalHeaderProps, type ModalProps, type ModalSize, ModalTitle, type ModalTitleProps, MotionModal, MotionModalActions, type MotionModalActionsProps, MotionModalBody, type MotionModalBodyProps, MotionModalDescription, type MotionModalDescriptionProps, MotionModalFooter, type MotionModalFooterProps, MotionModalHeader, type MotionModalHeaderProps, type MotionModalProps, type MotionModalSize, MotionModalTitle, type MotionModalTitleProps, Navbar, NavbarActions, type NavbarActionsProps, NavbarCta, type NavbarCtaProps, NavbarHamburger, type NavbarHamburgerProps, NavbarInner, type NavbarInnerProps, NavbarLink, type NavbarLinkProps, NavbarLinks, type NavbarLinksProps, NavbarLogo, type NavbarLogoProps, NavbarMega, NavbarMegaCol, type NavbarMegaColProps, NavbarMegaCols, type NavbarMegaColsProps, NavbarMegaItem, type NavbarMegaItemProps, NavbarMegaItemSimple, type NavbarMegaItemSimpleProps, NavbarMegaPanel, type NavbarMegaPanelProps, type NavbarMegaProps, NavbarMobileDivider, NavbarMobileLink, type NavbarMobileLinkProps, NavbarMobileMenu, type NavbarMobileMenuProps, type NavbarProps, NavbarSearch, type NavbarSearchProps, NavbarTrigger, type NavbarTriggerProps, type NavbarVariant, NotFoundPage, type NotFoundPageProps, PricingCard, type PricingCardProps, Radio, RadioGroup, RadioGroupItem, type RadioProps, RadioRowWithDescription, SearchBar, type SearchBarProps, type SegOption, SegmentedToggle, type SegmentedToggleProps, Select, SelectContent, type SelectContentProps, SelectGroup, type SelectGroupProps, SelectItem, type SelectItemProps, type SelectProps, SelectTrigger, type SelectTriggerProps, SelectValue, type SelectValueProps, SettingRow, SettingsModalShell, type SettingsModalShellProps, SettingsNavGroup, type SettingsNavGroupData, type SettingsNavGroupProps, type SettingsNavItem, SettingsNavItemButton, type SettingsNavItemButtonProps, SettingsRow, type SettingsRowProps, SettingsSaveIndicator, type SettingsSaveIndicatorProps, type SettingsSaveStatus, SettingsSectionHeader, type SettingsSectionHeaderProps, SidebarAccountMenu, type SidebarAccountMenuItem, type SidebarAccountMenuProps, SidebarActionButton, type SidebarActionButtonProps, SidebarHeader, type SidebarHeaderProps, SidebarMoreToggle, type SidebarMoreToggleProps, SidebarNavRow, type SidebarNavRowProps, SidebarSectionHeader, type SidebarSectionHeaderProps, SidebarSectionToggle, type SidebarSectionToggleProps, SidebarTagRow, type SidebarTagRowProps, SimpleToast, type SimpleToastProps, Skeleton, type SkeletonProps, SkeletonText, type SkeletonTextProps, type SkeletonVariant, Spinner, type SpinnerProps, type SpinnerSize, StatCard, type StatCardProps, type StatTrend, type StatusType, StorageIndicator, type StorageIndicatorProps, Switch, type SwitchProps, type SwitchVariantProps, TestimonialCard, type TestimonialCardProps, TextRoller, type TextRollerItem, type TextRollerProps, ThemeCard, type ThemeCardProps, ThemeMockupDark, ThemeMockupLight, type ThemeMode, type ToastKind, type ToastPayload, Tooltip, TooltipDotted, type TooltipDottedProps, type TooltipPosition, type TooltipProps, TooltipRich, type TooltipRichProps, ViewMockupFullpage, ViewMockupPopup, ViewMockupSplit, ViewModeCard, accordion_variants, avatar_variants, badge_variants, button_tap, button_variants, card_variants, dismiss_toast, fade_up_item, get_auth_alert_styles, get_auth_primary_button_style, kbd_variants, marquee_variants, motion_duration_base, motion_duration_fast, motion_duration_slow, motion_ease_standard, page_slide_transition, show_toast, stagger_container, switch_variants, use_should_reduce_motion };

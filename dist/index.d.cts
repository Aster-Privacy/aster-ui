import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React$1 from 'react';
import { CSSProperties, ReactNode, SVGProps, ReactElement, PointerEvent, ComponentType } from 'react';
import { VariantProps } from 'class-variance-authority';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { Variants, Transition } from 'framer-motion';
import { ClassValue } from 'clsx';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as PopoverPrimitive from '@radix-ui/react-popover';

declare const button_variants: (props?: ({
    variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "depth" | "depth_destructive" | "upgrade" | null | undefined;
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
    dismiss_label?: string;
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
    close_on_escape?: boolean;
    close_label?: string;
    z_index?: number;
    children: React$1.ReactNode;
}
declare const Modal: React$1.ForwardRefExoticComponent<ModalProps & React$1.RefAttributes<HTMLDivElement>>;
interface ModalHeaderProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "title"> {
    title?: string;
    icon?: React$1.ReactNode;
    on_close?: () => void;
    close_label?: string;
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
declare const SelectLabel: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectScrollUpButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectTrigger: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SelectContent: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
type SelectProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>;
type SelectGroupProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>;
type SelectValueProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>;
type SelectTriggerProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;
type SelectContentProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;
type SelectItemProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;
type SelectLabelProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>;
type SelectSeparatorProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>;
type SelectScrollUpButtonProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>;
type SelectScrollDownButtonProps = React$1.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>;

type SkeletonVariant = "text" | "circular" | "rectangular";
interface SkeletonProps extends React$1.HTMLAttributes<HTMLDivElement> {
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
interface ButtonSpinnerProps {
    size?: SpinnerSize;
    centered?: boolean;
    className?: string;
}
declare function ButtonSpinner({ size, centered, className, }: ButtonSpinnerProps): react_jsx_runtime.JSX.Element;

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

type UpgradeBtnProps = Omit<ButtonProps, "variant"> & {
    label?: string;
};
declare const UpgradeBtn: React$1.ForwardRefExoticComponent<Omit<ButtonProps, "variant"> & {
    label?: string;
} & React$1.RefAttributes<HTMLButtonElement>>;

interface UpgradeOverlayProps {
    badge_label?: string;
    message: string;
    cta_label?: string;
    on_upgrade: () => void;
    className?: string;
}
declare function UpgradeOverlay({ badge_label, message, cta_label, on_upgrade, className, }: UpgradeOverlayProps): react_jsx_runtime.JSX.Element;

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

type MotionModalSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";
interface MotionModalProps {
    is_open: boolean;
    on_close: () => void;
    size?: MotionModalSize;
    show_close_button?: boolean;
    close_on_overlay?: boolean;
    close_on_escape?: boolean;
    z_index?: number;
    className?: string;
    panel_class_name?: string;
    overlay_class_name?: string;
    reduce_motion?: boolean;
    close_label?: string;
    children: React$1.ReactNode;
}
declare function MotionModal({ is_open, on_close, size, show_close_button, close_on_overlay, close_on_escape, z_index, className, panel_class_name, overlay_class_name, reduce_motion, close_label, children, }: MotionModalProps): react_jsx_runtime.JSX.Element;
interface MotionModalHeaderProps extends React$1.HTMLAttributes<HTMLDivElement> {
}
declare function MotionModalHeader({ className, children, ...props }: MotionModalHeaderProps): react_jsx_runtime.JSX.Element;
interface MotionModalTitleProps extends React$1.HTMLAttributes<HTMLHeadingElement> {
}
declare function MotionModalTitle({ className, children, id, style, ...props }: MotionModalTitleProps): react_jsx_runtime.JSX.Element;
interface MotionModalDescriptionProps extends React$1.HTMLAttributes<HTMLParagraphElement> {
}
declare function MotionModalDescription({ className, children, id, style, ...props }: MotionModalDescriptionProps): react_jsx_runtime.JSX.Element;
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

declare const RadixContextMenu: React$1.FC<ContextMenuPrimitive.ContextMenuProps>;
declare const RadixContextMenuTrigger: React$1.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuTriggerProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const RadixContextMenuGroup: React$1.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const RadixContextMenuPortal: React$1.FC<ContextMenuPrimitive.ContextMenuPortalProps>;
declare const RadixContextMenuSub: React$1.FC<ContextMenuPrimitive.ContextMenuSubProps>;
declare const RadixContextMenuRadioGroup: React$1.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const RadixContextMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const RadixContextMenuSubContent: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const RadixContextMenuContent: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const RadixContextMenuItem: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const RadixContextMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const RadixContextMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const RadixContextMenuLabel: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const RadixContextMenuSeparator: React$1.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

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
    description?: string;
    children?: React$1.ReactNode;
    className?: string;
}
declare function SettingRow({ label, description, children, className }: SettingRowProps): react_jsx_runtime.JSX.Element;

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

type IslandPadding = "none" | "sm" | "md" | "lg";
type IslandTone = "default" | "danger" | "accent" | "warning" | "success";
interface IslandProps extends React$1.HTMLAttributes<HTMLDivElement> {
    padding?: IslandPadding;
    tone?: IslandTone;
    divided?: boolean;
    interactive?: boolean;
    selected?: boolean;
    as?: "div" | "section" | "article" | "li" | "ul" | "ol" | "form";
}
declare const Island: React$1.ForwardRefExoticComponent<IslandProps & React$1.RefAttributes<HTMLDivElement>>;
interface IslandLinkProps extends React$1.AnchorHTMLAttributes<HTMLAnchorElement> {
    padding?: IslandPadding;
    tone?: IslandTone;
    selected?: boolean;
}
declare const IslandLink: React$1.ForwardRefExoticComponent<IslandLinkProps & React$1.RefAttributes<HTMLAnchorElement>>;
type IslandBlockSize = "sm" | "md" | "lg";
interface IslandBlockProps extends React$1.HTMLAttributes<HTMLDivElement> {
    size?: IslandBlockSize;
}
declare const IslandBlock: React$1.ForwardRefExoticComponent<IslandBlockProps & React$1.RefAttributes<HTMLDivElement>>;
interface IslandEmptyProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "title"> {
    icon?: React$1.ReactNode;
    title: React$1.ReactNode;
    description?: React$1.ReactNode;
    action?: React$1.ReactNode;
    tone?: IslandTone;
}
declare const IslandEmpty: React$1.ForwardRefExoticComponent<IslandEmptyProps & React$1.RefAttributes<HTMLDivElement>>;
interface IslandSectionProps extends Omit<React$1.HTMLAttributes<HTMLElement>, "title"> {
    title?: React$1.ReactNode;
    title_info?: React$1.ReactNode;
    icon?: React$1.ReactNode;
    description?: React$1.ReactNode;
    trailing?: React$1.ReactNode;
    footer?: React$1.ReactNode;
    divided?: boolean;
    padding?: IslandPadding;
    tone?: IslandTone;
    bare?: boolean;
    island_class_name?: string;
}
declare const IslandSection: React$1.ForwardRefExoticComponent<IslandSectionProps & React$1.RefAttributes<HTMLElement>>;
type IslandSectionsProps = React$1.HTMLAttributes<HTMLDivElement>;
declare const IslandSections: React$1.ForwardRefExoticComponent<IslandSectionsProps & React$1.RefAttributes<HTMLDivElement>>;
interface IslandRowToggle {
    checked: boolean;
    on_change: (checked: boolean) => void;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    aria_label?: string;
}
interface IslandRowProps extends Omit<React$1.HTMLAttributes<HTMLElement>, "title" | "onChange"> {
    label: React$1.ReactNode;
    description?: React$1.ReactNode;
    icon?: React$1.ReactNode;
    value?: React$1.ReactNode;
    trailing?: React$1.ReactNode;
    chevron?: boolean;
    destructive?: boolean;
    disabled?: boolean;
    on_press?: () => void;
    href?: string;
    target?: string;
    rel?: string;
    toggle?: IslandRowToggle;
    layout?: "inline" | "stacked" | "block";
}
declare const IslandRow: React$1.ForwardRefExoticComponent<IslandRowProps & React$1.RefAttributes<HTMLElement>>;
interface IslandDividerProps extends React$1.HTMLAttributes<HTMLHRElement> {
    inset?: number;
}
declare function IslandDivider({ inset, className, style, ...props }: IslandDividerProps): react_jsx_runtime.JSX.Element;
interface IslandStackProps extends React$1.HTMLAttributes<HTMLDivElement> {
    grouped?: boolean;
    as?: "div" | "ul" | "ol";
}
declare const IslandStack: React$1.ForwardRefExoticComponent<IslandStackProps & React$1.RefAttributes<HTMLDivElement>>;
interface IslandGridProps extends React$1.HTMLAttributes<HTMLDivElement> {
    min_column_width?: number;
}
declare function IslandGrid({ min_column_width, className, style, ...props }: IslandGridProps): react_jsx_runtime.JSX.Element;
type IslandPageWidth = "narrow" | "default" | "wide" | "full";
interface IslandPageProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "title"> {
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    breadcrumb?: React$1.ReactNode;
    actions?: React$1.ReactNode;
    width?: IslandPageWidth;
}
declare const IslandPage: React$1.ForwardRefExoticComponent<IslandPageProps & React$1.RefAttributes<HTMLDivElement>>;

type PillVariant = "filled" | "outline" | "tonal" | "neutral" | "ghost" | "danger";
type PillSize = "sm" | "md" | "lg";
interface PillButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: PillVariant;
    size?: PillSize;
    block?: boolean;
    leading?: React$1.ReactNode;
    trailing?: React$1.ReactNode;
}
declare const PillButton: React$1.ForwardRefExoticComponent<PillButtonProps & React$1.RefAttributes<HTMLButtonElement>>;
interface IslandIconButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    size?: PillSize;
    active?: boolean;
}
declare const IslandIconButton: React$1.ForwardRefExoticComponent<IslandIconButtonProps & React$1.RefAttributes<HTMLButtonElement>>;
interface IslandChipProps extends Omit<React$1.HTMLAttributes<HTMLElement>, "title"> {
    name: React$1.ReactNode;
    meta?: React$1.ReactNode;
    leading?: React$1.ReactNode;
    trailing?: React$1.ReactNode;
    on_press?: () => void;
    title?: string;
}
declare const IslandChip: React$1.ForwardRefExoticComponent<IslandChipProps & React$1.RefAttributes<HTMLElement>>;
interface IslandCountPillProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    count: number;
    label: string;
}
declare const IslandCountPill: React$1.ForwardRefExoticComponent<IslandCountPillProps & React$1.RefAttributes<HTMLButtonElement>>;

type SettingNoteTone = "muted" | "warning";
interface SettingNoteProps {
    tone?: SettingNoteTone;
    icon?: React$1.ReactNode;
    children: React$1.ReactNode;
}
declare function SettingNote({ tone, icon, children }: SettingNoteProps): react_jsx_runtime.JSX.Element;
interface SettingToggleRowProps {
    label: string;
    description?: React$1.ReactNode;
    info?: React$1.ReactNode;
    note?: React$1.ReactNode;
    icon?: React$1.ReactNode;
    trailing?: React$1.ReactNode;
    checked: boolean;
    on_change: (checked: boolean) => void;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
}
declare function SettingToggleRow({ label, description, info, note, icon, trailing, checked, on_change, disabled, size, className, }: SettingToggleRowProps): react_jsx_runtime.JSX.Element;
interface SettingControlRowProps {
    label: React$1.ReactNode;
    description?: React$1.ReactNode;
    info?: React$1.ReactNode;
    note?: React$1.ReactNode;
    icon?: React$1.ReactNode;
    control?: React$1.ReactNode;
    layout?: "inline" | "stacked" | "block";
    control_width?: number | "auto";
    disabled?: boolean;
    className?: string;
}
declare function SettingControlRow({ label, description, info, note, icon, control, layout, control_width, disabled, className, }: SettingControlRowProps): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

interface AsterUiStrings {
    close: string;
    cancel: string;
    confirm: string;
    loading: string;
    more_info: string;
    copy: string;
    copied: string;
    retry: string;
    show_password: string;
    hide_password: string;
    previous_month: string;
    next_month: string;
    verification_code_digit: string;
    qr_code: string;
    learn_more: string;
}
declare const default_ui_strings: AsterUiStrings;
interface UiStringsProviderProps {
    strings: Partial<AsterUiStrings>;
    children: React$1.ReactNode;
}
declare function UiStringsProvider({ strings, children }: UiStringsProviderProps): react_jsx_runtime.JSX.Element;
declare function use_ui_strings(): AsterUiStrings;
declare function format_ui_string(template: string, values: Record<string, string | number>): string;

declare const Separator: React$1.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Progress: React$1.ForwardRefExoticComponent<Omit<ProgressPrimitive.ProgressProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare function CrownIcon(props: SVGProps<SVGSVGElement>): react_jsx_runtime.JSX.Element;

interface CoinIconProps {
    currency: string;
    chain: string;
    size?: number;
    class_name?: string;
    show_chain?: boolean;
}
declare function CoinIcon({ currency, chain, size, class_name, show_chain, }: CoinIconProps): ReactElement;

interface FaviconOrInitialProps {
    src: string;
    initial: string;
    image_class_name?: string;
    initial_class_name?: string;
    initial_style?: CSSProperties;
}
declare function FaviconOrInitial({ src, initial, image_class_name, initial_class_name, initial_style, }: FaviconOrInitialProps): react_jsx_runtime.JSX.Element;

interface SparkleOverlayProps {
    is_active: boolean;
}
declare function SparkleOverlay({ is_active }: SparkleOverlayProps): react_jsx_runtime.JSX.Element;

interface OtpInputProps {
    length?: number;
    value: string;
    disabled?: boolean;
    status?: "default" | "error";
    autofocus?: boolean;
    align?: "center" | "left";
    onChange: (value: string) => void;
    onComplete?: (value: string) => void;
}
declare function OtpInput({ length, value, disabled, status, autofocus, align, onChange, onComplete, }: OtpInputProps): react_jsx_runtime.JSX.Element;

interface SliderProps {
    value: number;
    min: number;
    max: number;
    step?: number;
    ariaLabel?: string;
    format_tooltip?: (value: number) => string;
    className?: string;
    onChange: (value: number) => void;
}
declare function Slider({ value, min, max, step, ariaLabel, format_tooltip, className, onChange, }: SliderProps): react_jsx_runtime.JSX.Element;

declare const Popover: React$1.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React$1.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const PopoverAnchor: React$1.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React$1.RefAttributes<HTMLDivElement>>;
declare const PopoverContent: React$1.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface InfoPopoverProps {
    title: string;
    description: string;
    learn_more_url?: string;
    learn_more_label?: string;
    icon_class?: string;
}
declare function InfoPopover({ title, description, learn_more_url, learn_more_label, icon_class, }: InfoPopoverProps): react_jsx_runtime.JSX.Element;

declare function push_overlay_layer(id: symbol, blocking?: boolean): void;
declare function remove_overlay_layer(id: symbol): void;
declare function is_top_overlay_layer(id: symbol): boolean;
declare function has_open_overlay_layer(): boolean;
declare function use_overlay_layer(is_open: boolean, label?: string, blocking?: boolean): symbol;
declare function use_escape_layer(is_open: boolean, on_close: () => void, label?: string, blocking?: boolean): symbol;

declare function lock_body_scroll(): void;
declare function unlock_body_scroll(): void;
declare function use_body_scroll_lock(is_locked: boolean): void;

declare function use_focus_trap<T extends HTMLElement>(is_open: boolean, layer_id: symbol): React$1.RefObject<T>;
declare function use_backdrop_dismiss(on_dismiss: () => void): (e: PointerEvent<HTMLElement>) => void;
declare function use_dialog_shell<T extends HTMLElement>(is_open: boolean, on_close: () => void, label?: string, close_on_escape?: boolean): {
    layer_id: symbol;
    dialog_ref: React$1.RefObject<T>;
    handle_backdrop_pointer_down: (e: PointerEvent<HTMLElement>) => void;
};

type ProfileAvatarSize = "xs" | "sm_compact" | "sm" | "md" | "lg" | "xl";
declare const PROFILE_AVATAR_SIZE_MAP: Record<ProfileAvatarSize, number>;
interface ProfileAvatarViewProps {
    name: string;
    email?: string;
    size?: ProfileAvatarSize;
    className?: string;
    src?: string | null;
    pending?: boolean;
    initials?: string;
    background_color?: string;
    text_color?: string;
    is_favicon_source?: boolean;
    is_local_logo_source?: boolean;
    show_placeholder?: boolean;
    image_attributes?: Record<string, string>;
    on_image_error?: React$1.ReactEventHandler<HTMLImageElement>;
    on_image_load?: React$1.ReactEventHandler<HTMLImageElement>;
}
declare const ProfileAvatarView: React$1.NamedExoticComponent<ProfileAvatarViewProps>;

type AccountAvatarButtonSize = "sm" | "md" | "lg" | "xl";
interface AccountAvatarButtonViewProps {
    avatar: React$1.ReactNode;
    label: string;
    size?: AccountAvatarButtonSize;
    is_paid_plan?: boolean;
    ring_offset_color?: string;
    className?: string;
    uploading?: boolean;
    accept?: string;
    file_input_ref?: React$1.Ref<HTMLInputElement>;
    on_file_change?: React$1.ChangeEventHandler<HTMLInputElement>;
    on_open_picker?: () => void;
}
declare function AccountAvatarButtonView({ avatar, label, size, is_paid_plan, ring_offset_color, className, uploading, accept, file_input_ref, on_file_change, on_open_picker, }: AccountAvatarButtonViewProps): react_jsx_runtime.JSX.Element;

interface BadgeChipData {
    slug: string;
    display_name: string;
    find_order?: number | null;
}
type BadgeChipSize = "xs" | "sm" | "md";
interface BadgeChipProps {
    badge: BadgeChipData;
    size?: BadgeChipSize;
    show_find_order?: boolean;
    show_label?: boolean;
    className?: string;
    title?: string;
    locale?: string;
}
declare const BadgeChip: React$1.NamedExoticComponent<BadgeChipProps>;

type BadgeIconComponent = ComponentType<SVGProps<SVGSVGElement>>;
interface BadgeVisual {
    icon: BadgeIconComponent;
    gradient_from: string;
    gradient_to: string;
    text_class: string;
    bg_class: string;
    border_class: string;
}
declare const BADGE_VISUALS: Record<string, BadgeVisual>;
declare function get_badge_visual(slug: string): BadgeVisual;
declare function format_find_order(find_order: number | null | undefined, locale?: string): string | null;

declare const tag_icon_map: Record<string, React$1.ComponentType<{
    className?: string;
    style?: React$1.CSSProperties;
}>>;
type TagIconName = keyof typeof tag_icon_map;
interface TagIconGroup {
    key: string;
    label_key: string;
    icons: TagIconName[];
}
declare const TAG_ICON_GROUPS: TagIconGroup[];
declare const email_tag_variants: (props?: ({
    variant?: "blue" | "green" | "purple" | "amber" | "red" | "neutral" | "cyan" | "fuchsia" | "indigo" | "lime" | "orange" | "pink" | "teal" | "violet" | "yellow" | "custom" | "archived" | "draft" | "scheduled" | "sent" | "trashed" | "spam" | "snoozed" | "starred" | "important" | "unread" | "encrypted" | "emerald" | "sky" | "rose" | "slate" | null | undefined;
    size?: "xs" | "sm" | "lg" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface EmailTagProps extends React$1.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof email_tag_variants> {
    icon?: TagIconName | React$1.ReactNode;
    label: string;
    custom_color?: string;
    show_icon?: boolean;
    muted?: boolean;
}
declare const EmailTag: React$1.ForwardRefExoticComponent<EmailTagProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const TAG_COLOR_PRESETS: readonly [{
    readonly name: "Red";
    readonly variant: "red";
    readonly hex: "#ef4444";
}, {
    readonly name: "Orange";
    readonly variant: "orange";
    readonly hex: "#f97316";
}, {
    readonly name: "Amber";
    readonly variant: "amber";
    readonly hex: "#f59e0b";
}, {
    readonly name: "Yellow";
    readonly variant: "yellow";
    readonly hex: "#eab308";
}, {
    readonly name: "Lime";
    readonly variant: "lime";
    readonly hex: "#84cc16";
}, {
    readonly name: "Green";
    readonly variant: "green";
    readonly hex: "#22c55e";
}, {
    readonly name: "Emerald";
    readonly variant: "emerald";
    readonly hex: "#10b981";
}, {
    readonly name: "Teal";
    readonly variant: "teal";
    readonly hex: "#14b8a6";
}, {
    readonly name: "Cyan";
    readonly variant: "cyan";
    readonly hex: "#06b6d4";
}, {
    readonly name: "Sky";
    readonly variant: "sky";
    readonly hex: "#0ea5e9";
}, {
    readonly name: "Blue";
    readonly variant: "blue";
    readonly hex: "#3b82f6";
}, {
    readonly name: "Indigo";
    readonly variant: "indigo";
    readonly hex: "#6366f1";
}, {
    readonly name: "Violet";
    readonly variant: "violet";
    readonly hex: "#8b5cf6";
}, {
    readonly name: "Purple";
    readonly variant: "purple";
    readonly hex: "#a855f7";
}, {
    readonly name: "Fuchsia";
    readonly variant: "fuchsia";
    readonly hex: "#d946ef";
}, {
    readonly name: "Pink";
    readonly variant: "pink";
    readonly hex: "#ec4899";
}, {
    readonly name: "Rose";
    readonly variant: "rose";
    readonly hex: "#f43f5e";
}];
declare const TAG_ICONS: TagIconName[];
type TagColorVariant = (typeof TAG_COLOR_PRESETS)[number]["variant"];
declare function tag_color_label_key(variant: TagColorVariant): `common.color_${TagColorVariant}`;
declare function tag_icon_label_key(icon: TagIconName): string;
type TagVariant = NonNullable<VariantProps<typeof email_tag_variants>["variant"]>;
declare function hex_to_variant(hex: string): TagVariant;

interface SnoozeTimeUnits {
    now: string;
    days_short: string;
    hours_short: string;
    minutes_short: string;
}
declare const default_snooze_time_units: SnoozeTimeUnits;
interface SnoozeBadgeProps {
    snoozed_until: string;
    muted?: boolean;
    size?: "xs" | "sm" | "default" | "lg";
    className?: string;
    units?: SnoozeTimeUnits;
}
declare function format_snooze_time_remaining(target: Date, units?: SnoozeTimeUnits): string;
declare function SnoozeBadge({ snoozed_until, muted, size, className, units, }: SnoozeBadgeProps): react_jsx_runtime.JSX.Element;

interface ErrorDetailsViewProps {
    error: Error;
    title: string;
    copy_label: string;
    on_copy?: (error_text: string) => void;
}
declare function format_error_text(error: Error): string;
declare function ErrorDetailsView({ error, title, copy_label, on_copy, }: ErrorDetailsViewProps): react_jsx_runtime.JSX.Element;
interface ErrorBoundaryViewProps {
    error: Error | null;
    title: string;
    description: string;
    retry_label: string;
    status_label: string;
    details_title: string;
    copy_label: string;
    logo_src?: string;
    logo_alt?: string;
    on_retry: () => void;
    on_view_status?: () => void;
    on_copy_error?: (error_text: string) => void;
}
declare function ErrorBoundaryView({ error, title, description, retry_label, status_label, details_title, copy_label, logo_src, logo_alt, on_retry, on_view_status, on_copy_error, }: ErrorBoundaryViewProps): react_jsx_runtime.JSX.Element;
interface EmailErrorFallbackViewProps {
    title: string;
    description: string;
    retry_label: string;
    on_retry?: () => void;
}
declare function EmailErrorFallbackView({ title, description, retry_label, on_retry, }: EmailErrorFallbackViewProps): react_jsx_runtime.JSX.Element;
interface ComposeErrorFallbackViewProps {
    title: string;
    description: string;
}
declare function ComposeErrorFallbackView({ title, description, }: ComposeErrorFallbackViewProps): react_jsx_runtime.JSX.Element;
interface ChunkRecoveryFallbackViewProps {
    label: string;
}
declare function ChunkRecoveryFallbackView({ label, }: ChunkRecoveryFallbackViewProps): react_jsx_runtime.JSX.Element;

interface ProfileDropdownLabels {
    copy: string;
    add_to_contacts: string;
    remove_from_contacts: string;
    notes: string;
    hide_notes: string;
    messages_from_sender: string;
    block_sender: string;
}
interface ProfileDropdownViewProps {
    email: string;
    display_name: string;
    domain?: string | null;
    children: React$1.ReactNode;
    avatar: React$1.ReactNode;
    notes?: React$1.ReactNode;
    labels: ProfileDropdownLabels;
    open: boolean;
    on_open_change: (open: boolean) => void;
    is_contact: boolean;
    is_contact_loading?: boolean;
    is_blocking?: boolean;
    show_notes: boolean;
    on_prewarm?: () => void;
    on_copy_email: () => void;
    on_contact_action: () => void;
    on_toggle_notes: () => void;
    on_messages_from_sender: () => void;
    on_block_sender: () => void;
}
declare function ProfileDropdownView({ email, display_name, domain, children, avatar, notes, labels, open, on_open_change, is_contact, is_contact_loading, is_blocking, show_notes, on_prewarm, on_copy_email, on_contact_action, on_toggle_notes, on_messages_from_sender, on_block_sender, }: ProfileDropdownViewProps): react_jsx_runtime.JSX.Element;

declare function PanelToggleIcon({ direction, className, }: {
    direction: "collapse" | "expand";
    className?: string;
}): react_jsx_runtime.JSX.Element;
interface AccountSwitcherLabels {
    invite: string;
    expand_sidebar: string;
    collapse_sidebar: string;
}
interface AccountSwitcherViewProps {
    is_collapsed: boolean;
    storage?: React$1.ReactNode;
    labels: AccountSwitcherLabels;
    on_invite: () => void;
    on_toggle_collapse?: () => void;
}
declare const AccountSwitcherView: React$1.NamedExoticComponent<AccountSwitcherViewProps>;

interface WorkspaceAccountBadge {
    label: string;
    muted?: boolean;
}
interface WorkspaceAccountRow {
    id: string;
    name: string;
    email: string;
    avatar: React$1.ReactNode;
    href: string;
    has_plan_ring?: boolean;
    badge?: WorkspaceAccountBadge | null;
}
interface WorkspaceHubAccountRow {
    id: string;
    name: string;
    email: string;
    avatar: React$1.ReactNode;
    badge?: WorkspaceAccountBadge | null;
}
interface WorkspaceSwitcherLabels {
    official_sender: string;
    manage_account: string;
    storage_used: string;
    resubscribe: string;
    add_account: string;
    sign_out: string;
    sign_out_all: string;
}
interface WorkspaceSwitcherViewProps {
    align?: "start" | "center" | "end";
    trigger: React$1.ReactNode;
    is_open: boolean;
    on_open_change: (open: boolean) => void;
    labels: WorkspaceSwitcherLabels;
    header_avatar: React$1.ReactNode;
    greeting?: string;
    display_name: string;
    email: string;
    is_official?: boolean;
    official_badge_src?: string;
    plan_badge?: React$1.ReactNode;
    storage_used_text?: string | null;
    storage_percent: number;
    accounts: WorkspaceAccountRow[];
    hub_accounts?: WorkspaceHubAccountRow[];
    show_resubscribe?: boolean;
    add_account_dimmed?: boolean;
    add_account_meta?: string | null;
    show_sign_out_all?: boolean;
    on_copy_email: () => void;
    on_manage_account: () => void;
    on_switch_account: (account_id: string) => void;
    on_hub_account?: (account_id: string) => void;
    on_resubscribe?: () => void;
    on_add_account: () => void;
    on_sign_out: () => void;
    on_sign_out_all?: () => void;
}
declare function WorkspaceSwitcherView({ align, trigger, is_open, on_open_change, labels, header_avatar, greeting, display_name, email, is_official, official_badge_src, plan_badge, storage_used_text, storage_percent, accounts, hub_accounts, show_resubscribe, add_account_dimmed, add_account_meta, show_sign_out_all, on_copy_email, on_manage_account, on_switch_account, on_hub_account, on_resubscribe, on_add_account, on_sign_out, on_sign_out_all, }: WorkspaceSwitcherViewProps): react_jsx_runtime.JSX.Element;

interface StorageMeterLabels {
    storage_used: string;
    under_one_percent: string;
    of: string;
    open?: string;
    buy_more?: string;
}
interface StorageMeterViewProps {
    storage_percentage: number;
    used_text: string;
    total_text: string;
    percent_text: string;
    is_loading?: boolean;
    labels: StorageMeterLabels;
    on_buy_more?: () => void;
    on_open?: () => void;
    className?: string;
}
declare const StorageMeterView: React$1.NamedExoticComponent<StorageMeterViewProps>;

interface AppRailItem {
    key: string;
    label: string;
    selected: boolean;
    icon_src?: string;
    icon_src_set?: string;
    fallback_icon: React$1.ReactNode;
    on_click: () => void;
}
interface AppRailLabels {
    expand: string;
    collapse: string;
}
interface AppRailViewProps {
    panel?: React$1.ReactNode;
    is_panel_visible: boolean;
    is_settings_view?: boolean;
    is_hidden: boolean;
    items: AppRailItem[];
    labels: AppRailLabels;
    on_toggle_hidden: () => void;
}
declare function AppRailViewComponent({ panel, is_panel_visible, is_settings_view, is_hidden, items, labels, on_toggle_hidden, }: AppRailViewProps): react_jsx_runtime.JSX.Element;
declare const AppRailView: React$1.MemoExoticComponent<typeof AppRailViewComponent>;

export { Accordion, AccordionContent, type AccordionContentProps, AccordionItem, type AccordionItemProps, type AccordionProps, AccordionTrigger, type AccordionTriggerProps, type AccordionVariantProps, type AccountAvatarButtonSize, AccountAvatarButtonView, type AccountAvatarButtonViewProps, type AccountSwitcherLabels, AccountSwitcherView, type AccountSwitcherViewProps, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, type AlertDialogContentProps, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, type AppEntry, type AppRailItem, type AppRailLabels, AppRailView, type AppRailViewProps, AppSwitcher, type AppSwitcherProps, type AsterUiStrings, type AuthAlertKind, AuthCard, AuthCardBody, type AuthCardBodyProps, type AuthCardProps, AuthCheckIcon, AuthCheckbox, type AuthCheckboxProps, AuthDocumentIcon, AuthDownloadIcon, AuthEnvelopeIcon, AuthEyeIcon, AuthEyeSlashIcon, AuthFormLabel, AuthFourPointStar, AuthInputWrapper, type AuthInputWrapperProps, AuthLockClosedIcon, AuthLockIcon, AuthLogo, type AuthLogoProps, AuthShieldCheckIcon, AuthSparkleDecoration, AuthUserCircleIcon, AuthWarningIcon, Avatar, AvatarGroup, type AvatarGroupProps, AvatarNamed, type AvatarNamedProps, type AvatarProps, type AvatarVariantProps, AvatarWithStatus, type AvatarWithStatusProps, BADGE_VISUALS, Badge, BadgeChip, type BadgeChipData, type BadgeChipProps, type BadgeChipSize, BadgeDot, type BadgeDotProps, type BadgeIconComponent, type BadgeProps, type BadgeVariantProps, type BadgeVisual, Banner, type BannerProps, Button, type ButtonProps, ButtonSpinner, type ButtonSpinnerProps, type ButtonVariantProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardIcon, type CardIconProps, type CardProps, CardTitle, type CardVariantProps, Checkbox, type CheckboxProps, ChunkRecoveryFallbackView, type ChunkRecoveryFallbackViewProps, CoinIcon, type CoinIconProps, ColorVisionFilters, type ColorVisionFiltersProps, type ColorVisionMode, ComposeErrorFallbackView, type ComposeErrorFallbackViewProps, ConfirmationModal, type ConfirmationModalProps, type ConfirmationVariant, ContextMenu, type ContextMenuItem, type ContextMenuPosition, type ContextMenuProps, CountBadge, CrownIcon, DashboardSidebar, type DashboardSidebarAccountLike, type DashboardSidebarFilter, type DashboardSidebarProps, type DashboardSidebarTStrings, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, EmailErrorFallbackView, type EmailErrorFallbackViewProps, EmailTag, type EmailTagProps, EmptyState, type EmptyStateProps, ErrorBanner, type ErrorBannerProps, ErrorBoundaryView, type ErrorBoundaryViewProps, ErrorDetailsView, type ErrorDetailsViewProps, ExternalLinkWarningModal, type ExternalLinkWarningModalProps, FaviconOrInitial, type FaviconOrInitialProps, FeatureCard, type FeatureCardProps, FieldHint, type FieldHintProps, FieldLabel, type FieldLabelProps, FullPageLoader, InfoPopover, type InfoPopoverProps, Input, type InputProps, Island, IslandBlock, type IslandBlockProps, type IslandBlockSize, IslandChip, type IslandChipProps, IslandCountPill, type IslandCountPillProps, IslandDivider, type IslandDividerProps, IslandEmpty, type IslandEmptyProps, IslandGrid, type IslandGridProps, IslandIconButton, type IslandIconButtonProps, IslandLink, type IslandLinkProps, type IslandPadding, IslandPage, type IslandPageProps, type IslandPageWidth, type IslandProps, IslandRow, type IslandRowProps, type IslandRowToggle, IslandSection, type IslandSectionProps, IslandSections, type IslandSectionsProps, IslandStack, type IslandStackProps, type IslandTone, Kbd, type KbdProps, type KbdVariantProps, type KeyboardShortcutEntry, type KeyboardShortcutSection, KeyboardShortcutsModal, type KeyboardShortcutsModalProps, type KeyboardShortcutsTStrings, Marquee, MarqueeLogo, type MarqueeLogoProps, type MarqueeProps, MarqueeTrack, type MarqueeTrackProps, type MarqueeVariantProps, MobileActionSheetShell, type MobileActionSheetShellProps, MobileDrawerShell, type MobileDrawerShellProps, MobileHeader, MobileHeaderIconButton, type MobileHeaderIconButtonProps, type MobileHeaderProps, Modal, ModalActions, type ModalActionsProps, ModalBody, type ModalBodyProps, ModalDescription, type ModalDescriptionProps, ModalFooter, type ModalFooterProps, ModalHeader, type ModalHeaderProps, type ModalProps, type ModalSize, ModalTitle, type ModalTitleProps, MotionModal, MotionModalActions, type MotionModalActionsProps, MotionModalBody, type MotionModalBodyProps, MotionModalDescription, type MotionModalDescriptionProps, MotionModalFooter, type MotionModalFooterProps, MotionModalHeader, type MotionModalHeaderProps, type MotionModalProps, type MotionModalSize, MotionModalTitle, type MotionModalTitleProps, Navbar, NavbarActions, type NavbarActionsProps, NavbarCta, type NavbarCtaProps, NavbarHamburger, type NavbarHamburgerProps, NavbarInner, type NavbarInnerProps, NavbarLink, type NavbarLinkProps, NavbarLinks, type NavbarLinksProps, NavbarLogo, type NavbarLogoProps, NavbarMega, NavbarMegaCol, type NavbarMegaColProps, NavbarMegaCols, type NavbarMegaColsProps, NavbarMegaItem, type NavbarMegaItemProps, NavbarMegaItemSimple, type NavbarMegaItemSimpleProps, NavbarMegaPanel, type NavbarMegaPanelProps, type NavbarMegaProps, NavbarMobileDivider, NavbarMobileLink, type NavbarMobileLinkProps, NavbarMobileMenu, type NavbarMobileMenuProps, type NavbarProps, NavbarSearch, type NavbarSearchProps, NavbarTrigger, type NavbarTriggerProps, type NavbarVariant, NotFoundPage, type NotFoundPageProps, OtpInput, type OtpInputProps, PROFILE_AVATAR_SIZE_MAP, PanelToggleIcon, PillButton, type PillButtonProps, type PillSize, type PillVariant, Popover, PopoverAnchor, PopoverContent, PopoverTrigger, PricingCard, type PricingCardProps, type ProfileAvatarSize, ProfileAvatarView, type ProfileAvatarViewProps, type ProfileDropdownLabels, ProfileDropdownView, type ProfileDropdownViewProps, Progress, Radio, RadioGroup, RadioGroupItem, type RadioProps, RadioRowWithDescription, RadixContextMenu, RadixContextMenuCheckboxItem, RadixContextMenuContent, RadixContextMenuGroup, RadixContextMenuItem, RadixContextMenuLabel, RadixContextMenuPortal, RadixContextMenuRadioGroup, RadixContextMenuRadioItem, RadixContextMenuSeparator, RadixContextMenuSub, RadixContextMenuSubContent, RadixContextMenuSubTrigger, RadixContextMenuTrigger, SearchBar, type SearchBarProps, type SegOption, SegmentedToggle, type SegmentedToggleProps, Select, SelectContent, type SelectContentProps, SelectGroup, type SelectGroupProps, SelectItem, type SelectItemProps, SelectLabel, type SelectLabelProps, type SelectProps, SelectScrollDownButton, type SelectScrollDownButtonProps, SelectScrollUpButton, type SelectScrollUpButtonProps, SelectSeparator, type SelectSeparatorProps, SelectTrigger, type SelectTriggerProps, SelectValue, type SelectValueProps, Separator, SettingControlRow, type SettingControlRowProps, SettingNote, type SettingNoteProps, type SettingNoteTone, SettingRow, SettingToggleRow, type SettingToggleRowProps, SettingsModalShell, type SettingsModalShellProps, SettingsNavGroup, type SettingsNavGroupData, type SettingsNavGroupProps, type SettingsNavItem, SettingsNavItemButton, type SettingsNavItemButtonProps, SettingsRow, type SettingsRowProps, SettingsSaveIndicator, type SettingsSaveIndicatorProps, type SettingsSaveStatus, SettingsSectionHeader, type SettingsSectionHeaderProps, SidebarAccountMenu, type SidebarAccountMenuItem, type SidebarAccountMenuProps, SidebarActionButton, type SidebarActionButtonProps, SidebarHeader, type SidebarHeaderProps, SidebarMoreToggle, type SidebarMoreToggleProps, SidebarNavRow, type SidebarNavRowProps, SidebarSectionHeader, type SidebarSectionHeaderProps, SidebarSectionToggle, type SidebarSectionToggleProps, SidebarTagRow, type SidebarTagRowProps, SimpleToast, type SimpleToastProps, Skeleton, type SkeletonProps, SkeletonText, type SkeletonTextProps, type SkeletonVariant, Slider, type SliderProps, SnoozeBadge, type SnoozeBadgeProps, type SnoozeTimeUnits, SparkleOverlay, type SparkleOverlayProps, Spinner, type SpinnerProps, type SpinnerSize, StatCard, type StatCardProps, type StatTrend, type StatusType, StorageIndicator, type StorageIndicatorProps, type StorageMeterLabels, StorageMeterView, type StorageMeterViewProps, Switch, type SwitchProps, type SwitchVariantProps, TAG_COLOR_PRESETS, TAG_ICONS, TAG_ICON_GROUPS, type TagColorVariant, type TagIconGroup, type TagIconName, type TagVariant, TestimonialCard, type TestimonialCardProps, TextRoller, type TextRollerItem, type TextRollerProps, ThemeCard, type ThemeCardProps, ThemeMockupDark, ThemeMockupLight, type ThemeMode, type ToastKind, type ToastPayload, Tooltip, TooltipDotted, type TooltipDottedProps, type TooltipPosition, type TooltipProps, TooltipRich, type TooltipRichProps, UiStringsProvider, type UiStringsProviderProps, UpgradeBtn, type UpgradeBtnProps, UpgradeOverlay, type UpgradeOverlayProps, ViewMockupFullpage, ViewMockupPopup, ViewMockupSplit, ViewModeCard, type WorkspaceAccountBadge, type WorkspaceAccountRow, type WorkspaceHubAccountRow, type WorkspaceSwitcherLabels, WorkspaceSwitcherView, type WorkspaceSwitcherViewProps, accordion_variants, avatar_variants, badge_variants, button_tap, button_variants, card_variants, cn, default_snooze_time_units, default_ui_strings, dismiss_toast, email_tag_variants, fade_up_item, format_error_text, format_find_order, format_snooze_time_remaining, format_ui_string, get_auth_alert_styles, get_auth_primary_button_style, get_badge_visual, has_open_overlay_layer, hex_to_variant, is_top_overlay_layer, kbd_variants, lock_body_scroll, marquee_variants, motion_duration_base, motion_duration_fast, motion_duration_slow, motion_ease_standard, page_slide_transition, push_overlay_layer, remove_overlay_layer, show_toast, stagger_container, switch_variants, tag_color_label_key, tag_icon_label_key, tag_icon_map, unlock_body_scroll, use_backdrop_dismiss, use_body_scroll_lock, use_dialog_shell, use_escape_layer, use_focus_trap, use_overlay_layer, use_should_reduce_motion, use_ui_strings };

import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const button_variants: (props?: ({
    variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "depth" | null | undefined;
    size?: "xl" | "lg" | "md" | "sm" | null | undefined;
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

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    on_close: () => void;
    children: React.ReactNode;
}
declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    icon?: React.ReactNode;
    on_close: () => void;
}
declare const ModalHeader: React.ForwardRefExoticComponent<ModalHeaderProps & React.RefAttributes<HTMLDivElement>>;
type ModalBodyProps = React.HTMLAttributes<HTMLParagraphElement>;
declare const ModalBody: React.ForwardRefExoticComponent<ModalBodyProps & React.RefAttributes<HTMLParagraphElement>>;
type ModalActionsProps = React.HTMLAttributes<HTMLDivElement>;
declare const ModalActions: React.ForwardRefExoticComponent<ModalActionsProps & React.RefAttributes<HTMLDivElement>>;

type TooltipPosition = "top" | "bottom" | "left" | "right";
interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
    tip: string;
    position?: TooltipPosition;
    dark?: boolean;
    children: React.ReactNode;
}
declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLSpanElement>>;
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
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
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

export { Accordion, AccordionContent, type AccordionContentProps, AccordionItem, type AccordionItemProps, type AccordionProps, AccordionTrigger, type AccordionTriggerProps, type AccordionVariantProps, Avatar, AvatarGroup, type AvatarGroupProps, AvatarNamed, type AvatarNamedProps, type AvatarProps, type AvatarVariantProps, AvatarWithStatus, type AvatarWithStatusProps, Badge, BadgeDot, type BadgeDotProps, type BadgeProps, type BadgeVariantProps, Banner, type BannerProps, Button, type ButtonProps, type ButtonVariantProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardIcon, type CardIconProps, type CardProps, CardTitle, type CardVariantProps, Checkbox, type CheckboxProps, FeatureCard, type FeatureCardProps, Marquee, MarqueeLogo, type MarqueeLogoProps, type MarqueeProps, MarqueeTrack, type MarqueeTrackProps, type MarqueeVariantProps, Modal, ModalActions, type ModalActionsProps, ModalBody, type ModalBodyProps, ModalHeader, type ModalHeaderProps, type ModalProps, Navbar, NavbarActions, type NavbarActionsProps, NavbarCta, type NavbarCtaProps, NavbarHamburger, type NavbarHamburgerProps, NavbarInner, type NavbarInnerProps, NavbarLink, type NavbarLinkProps, NavbarLinks, type NavbarLinksProps, NavbarLogo, type NavbarLogoProps, NavbarMega, NavbarMegaCol, type NavbarMegaColProps, NavbarMegaCols, type NavbarMegaColsProps, NavbarMegaItem, type NavbarMegaItemProps, NavbarMegaItemSimple, type NavbarMegaItemSimpleProps, NavbarMegaPanel, type NavbarMegaPanelProps, type NavbarMegaProps, NavbarMobileDivider, NavbarMobileLink, type NavbarMobileLinkProps, NavbarMobileMenu, type NavbarMobileMenuProps, type NavbarProps, NavbarSearch, type NavbarSearchProps, NavbarTrigger, type NavbarTriggerProps, type NavbarVariant, PricingCard, type PricingCardProps, Radio, type RadioProps, type SegOption, SegmentedToggle, type SegmentedToggleProps, StatCard, type StatCardProps, type StatTrend, type StatusType, Switch, type SwitchProps, type SwitchVariantProps, TestimonialCard, type TestimonialCardProps, Tooltip, TooltipDotted, type TooltipDottedProps, type TooltipPosition, type TooltipProps, TooltipRich, type TooltipRichProps, accordion_variants, avatar_variants, badge_variants, button_variants, card_variants, marquee_variants, switch_variants };

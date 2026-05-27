"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  AlertDialog: () => AlertDialog,
  AlertDialogAction: () => AlertDialogAction,
  AlertDialogCancel: () => AlertDialogCancel,
  AlertDialogContent: () => AlertDialogContent,
  AlertDialogDescription: () => AlertDialogDescription,
  AlertDialogFooter: () => AlertDialogFooter,
  AlertDialogHeader: () => AlertDialogHeader,
  AlertDialogPortal: () => AlertDialogPortal,
  AlertDialogTitle: () => AlertDialogTitle,
  AlertDialogTrigger: () => AlertDialogTrigger,
  AppSwitcher: () => AppSwitcher,
  AuthCard: () => AuthCard,
  AuthCardBody: () => AuthCardBody,
  AuthCheckIcon: () => AuthCheckIcon,
  AuthCheckbox: () => AuthCheckbox,
  AuthDocumentIcon: () => AuthDocumentIcon,
  AuthDownloadIcon: () => AuthDownloadIcon,
  AuthEnvelopeIcon: () => AuthEnvelopeIcon,
  AuthEyeIcon: () => AuthEyeIcon,
  AuthEyeSlashIcon: () => AuthEyeSlashIcon,
  AuthFormLabel: () => AuthFormLabel,
  AuthFourPointStar: () => AuthFourPointStar,
  AuthInputWrapper: () => AuthInputWrapper,
  AuthLockClosedIcon: () => AuthLockClosedIcon,
  AuthLockIcon: () => AuthLockIcon,
  AuthLogo: () => AuthLogo,
  AuthShieldCheckIcon: () => AuthShieldCheckIcon,
  AuthSparkleDecoration: () => AuthSparkleDecoration,
  AuthUserCircleIcon: () => AuthUserCircleIcon,
  AuthWarningIcon: () => AuthWarningIcon,
  Avatar: () => Avatar,
  AvatarGroup: () => AvatarGroup,
  AvatarNamed: () => AvatarNamed,
  AvatarWithStatus: () => AvatarWithStatus,
  Badge: () => Badge,
  BadgeDot: () => BadgeDot,
  Banner: () => Banner,
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardIcon: () => CardIcon,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  ColorVisionFilters: () => ColorVisionFilters,
  ConfirmationModal: () => ConfirmationModal,
  ContextMenu: () => ContextMenu,
  CountBadge: () => CountBadge,
  DashboardSidebar: () => DashboardSidebar,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  EmptyState: () => EmptyState,
  ErrorBanner: () => ErrorBanner,
  ExternalLinkWarningModal: () => ExternalLinkWarningModal,
  FeatureCard: () => FeatureCard,
  FieldHint: () => FieldHint,
  FieldLabel: () => FieldLabel,
  FullPageLoader: () => FullPageLoader,
  Input: () => Input,
  Kbd: () => Kbd,
  KeyboardShortcutsModal: () => KeyboardShortcutsModal,
  Marquee: () => Marquee,
  MarqueeLogo: () => MarqueeLogo,
  MarqueeTrack: () => MarqueeTrack,
  MobileActionSheetShell: () => MobileActionSheetShell,
  MobileDrawerShell: () => MobileDrawerShell,
  MobileHeader: () => MobileHeader,
  MobileHeaderIconButton: () => MobileHeaderIconButton,
  Modal: () => Modal,
  ModalActions: () => ModalActions,
  ModalBody: () => ModalBody,
  ModalDescription: () => ModalDescription,
  ModalFooter: () => ModalFooter,
  ModalHeader: () => ModalHeader,
  ModalTitle: () => ModalTitle,
  MotionModal: () => MotionModal,
  MotionModalActions: () => MotionModalActions,
  MotionModalBody: () => MotionModalBody,
  MotionModalDescription: () => MotionModalDescription,
  MotionModalFooter: () => MotionModalFooter,
  MotionModalHeader: () => MotionModalHeader,
  MotionModalTitle: () => MotionModalTitle,
  Navbar: () => Navbar,
  NavbarActions: () => NavbarActions,
  NavbarCta: () => NavbarCta,
  NavbarHamburger: () => NavbarHamburger,
  NavbarInner: () => NavbarInner,
  NavbarLink: () => NavbarLink,
  NavbarLinks: () => NavbarLinks,
  NavbarLogo: () => NavbarLogo,
  NavbarMega: () => NavbarMega,
  NavbarMegaCol: () => NavbarMegaCol,
  NavbarMegaCols: () => NavbarMegaCols,
  NavbarMegaItem: () => NavbarMegaItem,
  NavbarMegaItemSimple: () => NavbarMegaItemSimple,
  NavbarMegaPanel: () => NavbarMegaPanel,
  NavbarMobileDivider: () => NavbarMobileDivider,
  NavbarMobileLink: () => NavbarMobileLink,
  NavbarMobileMenu: () => NavbarMobileMenu,
  NavbarSearch: () => NavbarSearch,
  NavbarTrigger: () => NavbarTrigger,
  NotFoundPage: () => NotFoundPage,
  PricingCard: () => PricingCard,
  Radio: () => Radio,
  RadioGroup: () => RadioGroup,
  RadioGroupItem: () => RadioGroupItem,
  RadioRowWithDescription: () => RadioRowWithDescription,
  SearchBar: () => SearchBar,
  SegmentedToggle: () => SegmentedToggle,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  SettingRow: () => SettingRow,
  SettingsModalShell: () => SettingsModalShell,
  SettingsNavGroup: () => SettingsNavGroup,
  SettingsNavItemButton: () => SettingsNavItemButton,
  SettingsRow: () => SettingsRow,
  SettingsSaveIndicator: () => SettingsSaveIndicator,
  SettingsSectionHeader: () => SettingsSectionHeader,
  SidebarAccountMenu: () => SidebarAccountMenu,
  SidebarActionButton: () => SidebarActionButton,
  SidebarHeader: () => SidebarHeader,
  SidebarMoreToggle: () => SidebarMoreToggle,
  SidebarNavRow: () => SidebarNavRow,
  SidebarSectionHeader: () => SidebarSectionHeader,
  SidebarSectionToggle: () => SidebarSectionToggle,
  SidebarTagRow: () => SidebarTagRow,
  SimpleToast: () => SimpleToast,
  Skeleton: () => Skeleton,
  SkeletonText: () => SkeletonText,
  Spinner: () => Spinner,
  StatCard: () => StatCard,
  StorageIndicator: () => StorageIndicator,
  Switch: () => Switch,
  TestimonialCard: () => TestimonialCard,
  TextRoller: () => TextRoller,
  ThemeCard: () => ThemeCard,
  ThemeMockupDark: () => ThemeMockupDark,
  ThemeMockupLight: () => ThemeMockupLight,
  Tooltip: () => Tooltip,
  TooltipDotted: () => TooltipDotted,
  TooltipRich: () => TooltipRich,
  ViewMockupFullpage: () => ViewMockupFullpage,
  ViewMockupPopup: () => ViewMockupPopup,
  ViewMockupSplit: () => ViewMockupSplit,
  ViewModeCard: () => ViewModeCard,
  accordion_variants: () => accordion_variants,
  avatar_variants: () => avatar_variants,
  badge_variants: () => badge_variants,
  button_tap: () => button_tap,
  button_variants: () => button_variants,
  card_variants: () => card_variants,
  dismiss_toast: () => dismiss_toast,
  fade_up_item: () => fade_up_item,
  get_auth_alert_styles: () => get_auth_alert_styles,
  get_auth_primary_button_style: () => get_auth_primary_button_style,
  kbd_variants: () => kbd_variants,
  marquee_variants: () => marquee_variants,
  motion_duration_base: () => motion_duration_base,
  motion_duration_fast: () => motion_duration_fast,
  motion_duration_slow: () => motion_duration_slow,
  motion_ease_standard: () => motion_ease_standard,
  page_slide_transition: () => page_slide_transition,
  show_toast: () => show_toast,
  stagger_container: () => stagger_container,
  switch_variants: () => switch_variants,
  use_should_reduce_motion: () => use_should_reduce_motion
});
module.exports = __toCommonJS(index_exports);

// src/button/button.tsx
var React2 = __toESM(require("react"), 1);
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// src/spinner/spinner.tsx
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function join_classes(...parts) {
  return parts.filter(Boolean).join(" ");
}
var size_classes = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6"
};
var Spinner = React.forwardRef(
  ({ size = "md", className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "svg",
      {
        ref,
        className: join_classes("animate-spin", size_classes[size], className),
        fill: "none",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "circle",
            {
              className: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "path",
            {
              className: "opacity-75",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
              fill: "currentColor"
            }
          )
        ]
      }
    );
  }
);
Spinner.displayName = "Spinner";

// src/button/button.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var button_variants = (0, import_class_variance_authority.cva)("aster_btn", {
  variants: {
    variant: {
      primary: "aster_btn_primary",
      secondary: "aster_btn_secondary",
      outline: "aster_btn_outline",
      ghost: "aster_btn_ghost",
      destructive: "aster_btn_destructive",
      depth: "aster_btn_depth",
      depth_destructive: "aster_btn_depth_destructive"
    },
    size: {
      xl: "aster_btn_xl",
      lg: "aster_btn_lg",
      md: "aster_btn_md",
      sm: "aster_btn_sm",
      icon: "aster_btn_icon"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "lg"
  }
});
var Button = React2.forwardRef(
  ({
    className,
    variant,
    size,
    as_child = false,
    is_loading = false,
    loading_position = "replace",
    disabled,
    onClick,
    children,
    ...props
  }, ref) => {
    const Comp = as_child ? import_react_slot.Slot : "button";
    const effective_disabled = disabled || is_loading;
    const handle_click = is_loading ? (event) => {
      event.preventDefault();
      event.stopPropagation();
    } : onClick;
    let content = children;
    if (is_loading && !as_child) {
      if (loading_position === "replace") {
        content = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Spinner, { size: "sm" });
      } else if (loading_position === "before") {
        content = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Spinner, { size: "sm" }),
          children
        ] });
      } else {
        content = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Spinner, { size: "sm" })
        ] });
      }
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Comp,
      {
        className: button_variants({ variant, size, className }),
        ref,
        disabled: effective_disabled,
        "aria-busy": is_loading || void 0,
        "data-loading": is_loading || void 0,
        onClick: handle_click,
        ...props,
        children: content
      }
    );
  }
);
Button.displayName = "Button";

// src/badge/badge.tsx
var React3 = __toESM(require("react"), 1);
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime3 = require("react/jsx-runtime");
var badge_variants = (0, import_class_variance_authority2.cva)("aster_badge", {
  variants: {
    color: {
      blue: "aster_badge_blue",
      green: "aster_badge_green",
      purple: "aster_badge_purple",
      amber: "aster_badge_amber",
      gray: "aster_badge_gray",
      red: "aster_badge_red"
    },
    size: {
      default: "",
      lg: "aster_badge_lg"
    }
  },
  defaultVariants: {
    color: "blue",
    size: "default"
  }
});
var Badge = React3.forwardRef(
  ({ className, color, size, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "span",
      {
        className: badge_variants({ color, size, className }),
        ref,
        ...props
      }
    );
  }
);
Badge.displayName = "Badge";
var dot_color_map = {
  blue: "aster_badge_dot aster_badge_dot_blue",
  green: "aster_badge_dot aster_badge_dot_green",
  amber: "aster_badge_dot aster_badge_dot_amber",
  red: "aster_badge_dot aster_badge_dot_red",
  gray: "aster_badge_dot aster_badge_dot_gray"
};
var BadgeDot = React3.forwardRef(
  ({ color = "gray", className, ...props }, ref) => {
    const classes = [dot_color_map[color], className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: classes, ref, ...props });
  }
);
BadgeDot.displayName = "BadgeDot";

// src/card/card.tsx
var React4 = __toESM(require("react"), 1);
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime4 = require("react/jsx-runtime");
var card_variants = (0, import_class_variance_authority3.cva)("aster_card", {
  variants: {
    variant: {
      default: "aster_card_default",
      elevated: "aster_card_elevated",
      outlined: "aster_card_outlined",
      ghost: "aster_card_ghost",
      glass: "aster_card_glass",
      featured: "aster_card_featured"
    },
    padding: {
      none: "",
      sm: "aster_card_pad_sm",
      md: "aster_card_pad_md",
      lg: "aster_card_pad_lg"
    },
    interactive: {
      true: "aster_card_interactive",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
    interactive: false
  }
});
var Card = React4.forwardRef(
  ({ className, variant, padding, interactive, as_child = false, ...props }, ref) => {
    const Comp = as_child ? import_react_slot2.Slot : "div";
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      Comp,
      {
        className: card_variants({ variant, padding, interactive, className }),
        ref,
        ...props
      }
    );
  }
);
Card.displayName = "Card";
var CardHeader = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  "div",
  {
    ref,
    className: ["aster_card_header", className].filter(Boolean).join(" "),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  "h3",
  {
    ref,
    className: ["aster_card_title", className].filter(Boolean).join(" "),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  "p",
  {
    ref,
    className: ["aster_card_description", className].filter(Boolean).join(" "),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  "div",
  {
    ref,
    className: ["aster_card_content", className].filter(Boolean).join(" "),
    ...props
  }
));
CardContent.displayName = "CardContent";
var CardFooter = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  "div",
  {
    ref,
    className: ["aster_card_footer", className].filter(Boolean).join(" "),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var icon_color_map = {
  blue: "aster_card_icon aster_card_icon_blue",
  green: "aster_card_icon aster_card_icon_green",
  purple: "aster_card_icon aster_card_icon_purple",
  amber: "aster_card_icon aster_card_icon_amber",
  red: "aster_card_icon aster_card_icon_red",
  gray: "aster_card_icon aster_card_icon_gray"
};
var CardIcon = React4.forwardRef(
  ({ color = "blue", className, ...props }, ref) => {
    const classes = [icon_color_map[color], className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { ref, className: classes, ...props });
  }
);
CardIcon.displayName = "CardIcon";

// src/card/feature_card.tsx
var React5 = __toESM(require("react"), 1);
var import_jsx_runtime5 = require("react/jsx-runtime");
var FeatureCard = React5.forwardRef(
  ({ icon, icon_color = "blue", title, description, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      Card,
      {
        ref,
        className: ["aster_feature_card", className].filter(Boolean).join(" "),
        ...props,
        children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CardIcon, { color: icon_color, children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "aster_feature_card_title", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "aster_feature_card_description", children: description })
        ]
      }
    );
  }
);
FeatureCard.displayName = "FeatureCard";

// src/card/pricing_card.tsx
var React6 = __toESM(require("react"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var CheckIcon = () => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }
) });
var PricingCard = React6.forwardRef(
  ({ plan, price, period, description, features, badge, children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      Card,
      {
        ref,
        className: ["aster_pricing_card", className].filter(Boolean).join(" "),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "aster_pricing_card_header", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "aster_pricing_card_plan", children: plan }),
            badge
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "aster_pricing_card_price_row", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "aster_pricing_card_price", children: price }),
            period && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "aster_pricing_card_period", children: period })
          ] }),
          description && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "aster_pricing_card_description", children: description }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("hr", { className: "aster_pricing_card_divider" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "aster_pricing_card_features", children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("li", { className: "aster_pricing_card_feature", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "aster_pricing_card_check", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CheckIcon, {}) }),
            feature
          ] }, feature)) }),
          children && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "aster_pricing_card_cta", children })
        ]
      }
    );
  }
);
PricingCard.displayName = "PricingCard";

// src/card/testimonial_card.tsx
var React7 = __toESM(require("react"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
var TestimonialCard = React7.forwardRef(
  ({ quote, author, role, company, avatar, className, ...props }, ref) => {
    const role_text = [role, company].filter(Boolean).join(" at ");
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      Card,
      {
        ref,
        className: ["aster_testimonial_card", className].filter(Boolean).join(" "),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "aster_testimonial_card_quote", children: quote }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "aster_testimonial_card_author", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "aster_testimonial_card_avatar", children: avatar || author.charAt(0).toUpperCase() }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "aster_testimonial_card_info", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "aster_testimonial_card_name", children: author }),
              role_text && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "aster_testimonial_card_role", children: role_text })
            ] })
          ] })
        ]
      }
    );
  }
);
TestimonialCard.displayName = "TestimonialCard";

// src/card/stat_card.tsx
var React8 = __toESM(require("react"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
var TrendArrowUp = () => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M6 2.5L9.5 6H7.5V9.5H4.5V6H2.5L6 2.5Z", fill: "currentColor" }) });
var TrendArrowDown = () => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M6 9.5L2.5 6H4.5V2.5H7.5V6H9.5L6 9.5Z", fill: "currentColor" }) });
var trend_class_map = {
  up: "aster_stat_card_trend aster_stat_card_trend_up",
  down: "aster_stat_card_trend aster_stat_card_trend_down",
  neutral: "aster_stat_card_trend aster_stat_card_trend_neutral"
};
var StatCard = React8.forwardRef(
  ({ value, label, trend, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      Card,
      {
        ref,
        className: ["aster_stat_card", className].filter(Boolean).join(" "),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "aster_stat_card_value", children: value }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "aster_stat_card_label", children: label }),
          trend && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: trend_class_map[trend.direction], children: [
            trend.direction === "up" && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(TrendArrowUp, {}),
            trend.direction === "down" && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(TrendArrowDown, {}),
            trend.value
          ] })
        ]
      }
    );
  }
);
StatCard.displayName = "StatCard";

// src/banner/banner.tsx
var React9 = __toESM(require("react"), 1);
var import_jsx_runtime9 = require("react/jsx-runtime");
var Banner = React9.forwardRef(
  ({
    className,
    badge,
    text,
    action_label,
    action_href,
    on_action,
    on_dismiss,
    show_close = true,
    ...props
  }, ref) => {
    const classes = ["aster_banner", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: classes, ref, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "aster_banner_content", children: [
        badge,
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "aster_banner_text", children: text }),
        action_label && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "a",
          {
            href: action_href || "#",
            className: "aster_banner_action",
            onClick: on_action,
            children: [
              action_label,
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "svg",
                {
                  className: "aster_banner_arrow",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    }
                  )
                }
              )
            ]
          }
        )
      ] }),
      show_close && on_dismiss && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "button",
        {
          className: "aster_banner_close",
          "aria-label": "Dismiss",
          onClick: on_dismiss,
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "svg",
            {
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "2",
              stroke: "currentColor",
              children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M6 18 18 6M6 6l12 12"
                }
              )
            }
          )
        }
      )
    ] });
  }
);
Banner.displayName = "Banner";

// src/avatar/avatar.tsx
var React10 = __toESM(require("react"), 1);
var import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime10 = require("react/jsx-runtime");
var avatar_variants = (0, import_class_variance_authority4.cva)("aster_avatar", {
  variants: {
    size: {
      xs: "aster_avatar_xs",
      sm: "aster_avatar_sm",
      md: "aster_avatar_md",
      lg: "aster_avatar_lg",
      xl: "aster_avatar_xl"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var Avatar = React10.forwardRef(
  ({ className, size, src, alt, initials, bordered, ...props }, ref) => {
    const base_classes2 = avatar_variants({ size });
    const extra = [
      base_classes2,
      initials && !src && "aster_avatar_initials",
      bordered && "aster_avatar_bordered",
      className
    ].filter(Boolean).join(" ");
    if (src) {
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "img",
        {
          className: extra,
          src,
          alt: alt || "",
          ref,
          ...props
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "span",
      {
        className: extra,
        ref,
        ...props,
        children: initials
      }
    );
  }
);
Avatar.displayName = "Avatar";
var status_class_map = {
  online: "aster_avatar_status aster_avatar_status_online",
  away: "aster_avatar_status aster_avatar_status_away",
  busy: "aster_avatar_status aster_avatar_status_busy",
  offline: "aster_avatar_status aster_avatar_status_offline"
};
var AvatarWithStatus = React10.forwardRef(
  ({ status, className, ...avatar_props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "aster_avatar_wrap", ref, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Avatar, { ...avatar_props }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: status_class_map[status] })
    ] });
  }
);
AvatarWithStatus.displayName = "AvatarWithStatus";
var AvatarGroup = React10.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_avatar_group", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: classes, ref, ...props, children });
  }
);
AvatarGroup.displayName = "AvatarGroup";
var AvatarNamed = React10.forwardRef(
  ({ className, name, children, ...props }, ref) => {
    const classes = ["aster_avatar_named", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: classes, ref, ...props, children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "aster_avatar_named_text", children: name })
    ] });
  }
);
AvatarNamed.displayName = "AvatarNamed";

// src/modal/modal.tsx
var React11 = __toESM(require("react"), 1);
var import_jsx_runtime11 = require("react/jsx-runtime");
var size_class = {
  sm: "aster_modal_sm",
  md: "aster_modal_md",
  lg: "aster_modal_lg",
  xl: "aster_modal_xl",
  "2xl": "aster_modal_2xl",
  full: "aster_modal_full"
};
var Modal = React11.forwardRef(
  ({
    open,
    is_open,
    on_close,
    size,
    show_close_button,
    close_on_overlay = true,
    z_index,
    children,
    className,
    style,
    ...props
  }, ref) => {
    const resolved_open = open ?? is_open ?? false;
    const overlay_classes = [
      "aster_modal_overlay",
      resolved_open && "aster_modal_open"
    ].filter(Boolean).join(" ");
    const modal_classes = [
      "aster_modal",
      size && size_class[size],
      className
    ].filter(Boolean).join(" ");
    const overlay_style = z_index !== void 0 ? { zIndex: z_index } : void 0;
    const handle_overlay_click = (e) => {
      if (!close_on_overlay) return;
      if (e.target === e.currentTarget) {
        on_close();
      }
    };
    React11.useEffect(() => {
      const handle_escape = (e) => {
        if (e.key === "Escape" && resolved_open) {
          on_close();
        }
      };
      document.addEventListener("keydown", handle_escape);
      return () => document.removeEventListener("keydown", handle_escape);
    }, [resolved_open, on_close]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: overlay_classes, onClick: handle_overlay_click, style: overlay_style, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: modal_classes, ref, style, ...props, children: [
      show_close_button && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "button",
        {
          type: "button",
          "aria-label": "Close",
          className: "aster_modal_close absolute right-5 top-4 z-10 flex items-center justify-center rounded-[14px] transition-colors hover:bg-black/5 dark:hover:bg-white/10",
          style: { width: 28, height: 28, padding: 0 },
          onClick: on_close,
          children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "svg",
            {
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "2",
              stroke: "currentColor",
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M6 18 18 6M6 6l12 12"
                }
              )
            }
          )
        }
      ),
      children
    ] }) });
  }
);
Modal.displayName = "Modal";
var ModalHeader = React11.forwardRef(
  ({ title, icon, on_close, className, children, ...props }, ref) => {
    const classes = ["aster_modal_header", className].filter(Boolean).join(" ");
    if (children !== void 0 && !title && !on_close && !icon) {
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: classes, ref, ...props, children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: classes, ref, ...props, children: [
      icon,
      title && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "aster_modal_title", children: title }),
      children,
      on_close && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "button",
        {
          type: "button",
          className: "aster_modal_close",
          onClick: on_close,
          children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "svg",
            {
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "2",
              stroke: "currentColor",
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M6 18 18 6M6 6l12 12"
                }
              )
            }
          )
        }
      )
    ] });
  }
);
ModalHeader.displayName = "ModalHeader";
var ModalBody = React11.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_modal_body", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: classes, ref, ...props, children });
  }
);
ModalBody.displayName = "ModalBody";
var ModalActions = React11.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_modal_actions", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: classes, ref, ...props, children });
  }
);
ModalActions.displayName = "ModalActions";
var ModalTitle = React11.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_modal_title", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: classes, ref, ...props, children });
  }
);
ModalTitle.displayName = "ModalTitle";
var ModalDescription = React11.forwardRef(({ className, children, ...props }, ref) => {
  const classes = ["aster_modal_description", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: classes, ref, ...props, children });
});
ModalDescription.displayName = "ModalDescription";
var ModalFooter = React11.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_modal_footer", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: classes, ref, ...props, children });
  }
);
ModalFooter.displayName = "ModalFooter";

// src/select/select.tsx
var React12 = __toESM(require("react"), 1);
var SelectPrimitive = __toESM(require("@radix-ui/react-select"), 1);
var import_outline = require("@heroicons/react/24/outline");
var import_jsx_runtime12 = require("react/jsx-runtime");
function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React12.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-8 w-full items-center justify-between gap-2 rounded-md border border-[var(--border-secondary)] bg-[var(--input-bg)] px-2.5 py-1.5 text-xs text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-secondary)] active:bg-[var(--bg-secondary)] data-[state=open]:bg-[var(--bg-secondary)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_outline.ChevronDownIcon, { className: "h-3.5 w-3.5 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectContent = React12.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-[70] max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-[var(--border-secondary)] bg-[var(--dropdown-bg)] shadow-md animate-in fade-in-80",
      position === "popper" && "translate-y-1",
      className
    ),
    position,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      SelectPrimitive.Viewport,
      {
        className: cn(
          "p-1",
          position === "popper" && "w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children
      }
    )
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectItem = React12.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-xs text-[var(--text-secondary)] outline-none transition-colors hover:bg-black/5 dark:hover:bg-white/5 focus:bg-black/5 dark:focus:bg-white/5 data-[highlighted]:bg-black/5 dark:data-[highlighted]:bg-white/5 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:text-blue-500 data-[state=checked]:font-medium",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_outline.CheckIcon, { className: "h-3.5 w-3.5" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

// src/skeleton/skeleton.tsx
var React13 = __toESM(require("react"), 1);
var import_jsx_runtime13 = require("react/jsx-runtime");
function join_classes2(...parts) {
  return parts.filter(Boolean).join(" ");
}
var base_classes = "animate-pulse bg-black/[0.06] dark:bg-white/[0.08] inline-block align-middle";
var Skeleton = React13.forwardRef(
  ({ variant = "rectangular", width, height, className, style, ...props }, ref) => {
    const radius = variant === "circular" ? "rounded-full" : variant === "text" ? "rounded-[4px]" : "rounded-md";
    const resolved_style = {
      width: width ?? (variant === "text" ? "100%" : void 0),
      height: height ?? (variant === "text" ? "0.85em" : variant === "circular" ? width : void 0),
      ...style
    };
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "div",
      {
        ref,
        "aria-hidden": "true",
        className: join_classes2(base_classes, radius, className),
        style: resolved_style,
        ...props
      }
    );
  }
);
Skeleton.displayName = "Skeleton";
var SkeletonText = React13.forwardRef(
  ({
    lines = 3,
    line_height = "0.85em",
    last_line_width = "60%",
    gap = "0.5em",
    className,
    style,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "div",
      {
        ref,
        className: join_classes2("flex flex-col", className),
        style: { gap, ...style },
        ...props,
        children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          Skeleton,
          {
            variant: "text",
            width: i === lines - 1 ? last_line_width : "100%",
            height: line_height
          },
          i
        ))
      }
    );
  }
);
SkeletonText.displayName = "SkeletonText";

// src/toast/simple_toast.tsx
var import_react = require("react");
var import_framer_motion = require("framer-motion");
var import_jsx_runtime14 = require("react/jsx-runtime");
function CheckIcon3({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "path",
        {
          d: "M4.5 12.75l6 6 9-13.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function ExclamationTriangleIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "path",
        {
          d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function XMarkIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "path",
        {
          d: "M6 18L18 6M6 6l12 12",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function InformationCircleIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "path",
        {
          d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
var MAX_TOASTS = 5;
var toast_listeners = [];
var toast_stack = [];
var toast_timeouts = /* @__PURE__ */ new Map();
function dismiss_toast(id) {
  const existing_timeout = toast_timeouts.get(id);
  if (existing_timeout) {
    clearTimeout(existing_timeout);
    toast_timeouts.delete(id);
  }
  toast_stack = toast_stack.filter((t) => t.id !== id);
  toast_listeners.forEach((listener) => listener([...toast_stack]));
}
function show_toast(message, icon_type) {
  const new_toast = {
    message,
    icon_type,
    id: crypto.randomUUID()
  };
  toast_stack = [new_toast, ...toast_stack];
  if (toast_stack.length > MAX_TOASTS) {
    const overflow = toast_stack.slice(MAX_TOASTS);
    for (const old_toast of overflow) {
      const existing_timeout = toast_timeouts.get(old_toast.id);
      if (existing_timeout) {
        clearTimeout(existing_timeout);
        toast_timeouts.delete(old_toast.id);
      }
    }
    toast_stack = toast_stack.slice(0, MAX_TOASTS);
  }
  toast_listeners.forEach((listener) => listener([...toast_stack]));
  const timeout = setTimeout(() => {
    toast_timeouts.delete(new_toast.id);
    toast_stack = toast_stack.filter((t) => t.id !== new_toast.id);
    toast_listeners.forEach((listener) => listener([...toast_stack]));
  }, 2e3);
  toast_timeouts.set(new_toast.id, timeout);
  return new_toast.id;
}
function get_toast_icon(icon_type) {
  const icon_class = "w-4 h-4";
  switch (icon_type) {
    case "success":
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CheckIcon3, { className: icon_class });
    case "warning":
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ExclamationTriangleIcon, { className: icon_class });
    case "error":
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(XMarkIcon, { className: icon_class });
    case "info":
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(InformationCircleIcon, { className: icon_class });
    default:
      return null;
  }
}
function SimpleToast({
  position = "bottom",
  dismiss_label = "Dismiss"
}) {
  const reduce_motion = (0, import_framer_motion.useReducedMotion)() ?? false;
  const [toasts, set_toasts] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    const listener = (new_toasts) => {
      set_toasts(new_toasts);
    };
    toast_listeners.push(listener);
    return () => {
      toast_listeners = toast_listeners.filter((l) => l !== listener);
    };
  }, []);
  const is_top = position === "top";
  const y_offset = is_top ? -20 : 20;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "div",
    {
      className: `fixed left-1/2 -translate-x-1/2 z-[100] flex ${is_top ? "flex-col" : "flex-col-reverse"} gap-2 pointer-events-none`,
      style: is_top ? { top: `calc(env(safe-area-inset-top, 0px) + 12px)` } : { bottom: "24px" },
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_framer_motion.AnimatePresence, { children: toasts.map((toast) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        import_framer_motion.motion.div,
        {
          animate: { opacity: 1, y: 0, scale: 1 },
          className: "pointer-events-auto",
          exit: { opacity: 0, scale: 0.95 },
          initial: reduce_motion ? false : { opacity: 0, y: y_offset, scale: 0.95 },
          layout: !reduce_motion,
          transition: { duration: reduce_motion ? 0 : 0.15 },
          children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 bg-modal-bg border border-edge-secondary", children: [
            get_toast_icon(toast.icon_type) && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "flex-shrink-0 text-txt-primary", children: get_toast_icon(toast.icon_type) }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-[13px] font-medium text-txt-primary whitespace-nowrap", children: toast.message }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              "button",
              {
                "aria-label": dismiss_label,
                className: "ml-1 flex-shrink-0 text-txt-muted hover:text-txt-primary transition-colors",
                onClick: () => dismiss_toast(toast.id),
                children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(XMarkIcon, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        },
        toast.id
      )) })
    }
  );
}

// src/not_found/not_found_page.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function join_classes3(...parts) {
  return parts.filter(Boolean).join(" ");
}
function NotFoundPage({
  title = "404",
  message,
  cta_label,
  on_navigate_home,
  className,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "main",
    {
      className: join_classes3(
        "flex flex-col items-center justify-center min-h-[60vh] w-full px-6 text-center",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-[64px] leading-none font-semibold tracking-tight text-[var(--text-primary,#111)]", children: title }),
        message && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mt-3 max-w-md text-[14px] text-[var(--text-muted,#666)]", children: message }),
        cta_label && on_navigate_home && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "button",
          {
            type: "button",
            onClick: on_navigate_home,
            className: "mt-6 inline-flex items-center gap-2 rounded-[12px] px-4 py-2 text-[13px] font-medium bg-[var(--text-primary,#111)] text-[var(--bg-primary,#fff)] hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info,#3b82f6)]",
            children: cta_label
          }
        ),
        children
      ]
    }
  );
}

// src/sidebar_account_menu/sidebar_account_menu.tsx
var React14 = __toESM(require("react"), 1);
var import_framer_motion2 = require("framer-motion");
var import_jsx_runtime16 = require("react/jsx-runtime");
function initials_for(name, email) {
  const source = (name || email || "?").trim();
  if (!source) return "?";
  const parts = source.split(/\s+/).slice(0, 2);
  const letters = parts.map((p) => p.charAt(0).toUpperCase()).join("");
  return letters || "?";
}
function SidebarAccountMenu({
  is_open,
  on_close,
  trigger,
  identity_label,
  active_label,
  display_name,
  email,
  profile_color,
  profile_picture,
  aster_fallback_src,
  items,
  footer
}) {
  const [image_failed, set_image_failed] = React14.useState(false);
  React14.useEffect(() => {
    set_image_failed(false);
  }, [profile_picture]);
  const show_image = !!profile_picture && !image_failed;
  const avatar_color = profile_color || "#7c3aed";
  const avatar_gradient = `linear-gradient(135deg, ${avatar_color} 0%, ${avatar_color}cc 100%)`;
  const wrapper_ref = React14.useRef(null);
  React14.useEffect(() => {
    if (!is_open) return;
    const handle_click = (e) => {
      if (!wrapper_ref.current?.contains(e.target)) {
        on_close();
      }
    };
    const handle_key = (e) => {
      if (e.key === "Escape") on_close();
    };
    document.addEventListener("mousedown", handle_click);
    document.addEventListener("keydown", handle_key);
    return () => {
      document.removeEventListener("mousedown", handle_click);
      document.removeEventListener("keydown", handle_key);
    };
  }, [is_open, on_close]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { ref: wrapper_ref, className: "relative", children: [
    trigger,
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_framer_motion2.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      import_framer_motion2.motion.div,
      {
        animate: { opacity: 1, y: 0 },
        className: "absolute left-0 top-full mt-2 z-30 w-[290px] rounded-2xl overflow-hidden",
        exit: { opacity: 0, y: -4 },
        initial: { opacity: 0, y: -4 },
        style: {
          backgroundColor: "var(--dropdown-bg)",
          border: "1px solid var(--border-secondary)",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        },
        transition: { duration: 0.12 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "px-3 pt-2.5 pb-1", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "span",
            {
              className: "text-[10px] uppercase tracking-wide font-medium",
              style: { color: "var(--text-muted)" },
              children: identity_label
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "px-1.5 pb-1.5", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
            "div",
            {
              className: "w-full px-2.5 py-2 rounded-[14px] flex items-center gap-2.5",
              style: { backgroundColor: "var(--surf-tertiary, transparent)" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "relative", children: [
                  show_image ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                    "img",
                    {
                      alt: "",
                      className: "w-7 h-7 rounded-full object-cover flex-shrink-0 ring-1 ring-black/5 dark:ring-white/10",
                      decoding: "async",
                      draggable: false,
                      onError: () => set_image_failed(true),
                      src: profile_picture
                    }
                  ) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                    "div",
                    {
                      "aria-hidden": "true",
                      className: "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden",
                      style: {
                        background: avatar_gradient,
                        boxShadow: "inset 0 -2px 4px rgba(0,0,0,0.25), inset 0 1px 2px rgba(255,255,255,0.2)"
                      },
                      children: aster_fallback_src ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                        "img",
                        {
                          alt: "",
                          draggable: false,
                          src: aster_fallback_src,
                          style: {
                            width: 16,
                            height: 16,
                            filter: "brightness(0) invert(1)",
                            objectFit: "contain",
                            pointerEvents: "none"
                          }
                        }
                      ) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "text-[10px] font-semibold text-white", children: initials_for(display_name, email) })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                    "div",
                    {
                      className: "absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2",
                      style: {
                        backgroundColor: "var(--color-success)",
                        borderColor: "var(--dropdown-bg)"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col min-w-0 flex-1", children: [
                  display_name && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                    "span",
                    {
                      className: "text-[12px] font-medium truncate",
                      style: { color: "var(--text-primary)" },
                      children: display_name
                    }
                  ),
                  email && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                    "span",
                    {
                      className: "text-[11px] truncate",
                      style: { color: "var(--text-muted)" },
                      children: email
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "inline-flex items-center text-[9px] font-medium px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/30", children: active_label })
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "div",
            {
              className: "h-px mx-2",
              style: { backgroundColor: "var(--border-secondary)" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "p-1.5", children: items.map((item) => {
            const Icon2 = item.icon;
            return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
              "button",
              {
                className: "w-full px-2.5 py-2 rounded-[12px] flex items-center gap-2.5 text-left transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
                type: "button",
                onClick: () => {
                  item.on_click();
                  on_close();
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                    Icon2,
                    {
                      className: "w-4 h-4 flex-shrink-0",
                      style: { color: "var(--text-secondary)" }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                    "span",
                    {
                      className: "text-[12px] font-medium",
                      style: { color: "var(--text-primary)" },
                      children: item.label
                    }
                  )
                ]
              },
              item.id
            );
          }) }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              "div",
              {
                className: "h-px mx-2",
                style: { backgroundColor: "var(--border-secondary)" }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "p-1.5", children: footer })
          ] })
        ]
      }
    ) })
  ] });
}

// src/tooltip/tooltip.tsx
var React15 = __toESM(require("react"), 1);
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);
var import_jsx_runtime17 = require("react/jsx-runtime");
function Tooltip({ tip, position = "bottom", dark, delay = 400, children }) {
  const [open, set_open] = React15.useState(false);
  const pointer_inside_ref = React15.useRef(false);
  React15.useEffect(() => {
    if (!open) return;
    const force_close = () => set_open(false);
    const on_visibility = () => {
      if (document.hidden) force_close();
    };
    window.addEventListener("blur", force_close);
    document.addEventListener("visibilitychange", on_visibility);
    window.addEventListener("wheel", force_close, { passive: true });
    return () => {
      window.removeEventListener("blur", force_close);
      document.removeEventListener("visibilitychange", on_visibility);
      window.removeEventListener("wheel", force_close);
    };
  }, [open]);
  const handle_open_change = (next) => {
    if (next && document.hidden) return;
    if (next && !pointer_inside_ref.current) return;
    set_open(next);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(TooltipPrimitive.Provider, { delayDuration: delay, skipDelayDuration: 0, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(TooltipPrimitive.Root, { open, onOpenChange: handle_open_change, children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      TooltipPrimitive.Trigger,
      {
        asChild: true,
        onPointerEnter: () => {
          pointer_inside_ref.current = true;
        },
        onPointerLeave: () => {
          pointer_inside_ref.current = false;
          set_open(false);
        },
        onPointerDown: () => set_open(false),
        onClick: () => set_open(false),
        onBlur: () => set_open(false),
        children
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(TooltipPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      TooltipPrimitive.Content,
      {
        className: dark ? "aster_tip_portal aster_tip_portal_dark" : "aster_tip_portal",
        side: position,
        sideOffset: 6,
        onPointerDownOutside: () => set_open(false),
        children: tip
      }
    ) })
  ] }) });
}
Tooltip.displayName = "Tooltip";
var TooltipDotted = React15.forwardRef(
  ({ tip, className, children, ...props }, ref) => {
    const classes = ["aster_tip_dotted", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: classes, "data-tip": tip, ref, ...props, children });
  }
);
TooltipDotted.displayName = "TooltipDotted";
var TooltipRich = React15.forwardRef(
  ({ title, description, className, children, ...props }, ref) => {
    const classes = ["aster_tip_rich_wrap", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: classes, ref, ...props, children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "aster_tip_rich", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "aster_tip_rich_title", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "aster_tip_rich_desc", children: description })
      ] })
    ] });
  }
);
TooltipRich.displayName = "TooltipRich";

// src/toggle/toggle.tsx
var React16 = __toESM(require("react"), 1);
var import_class_variance_authority5 = require("class-variance-authority");
var import_jsx_runtime18 = require("react/jsx-runtime");
var switch_variants = (0, import_class_variance_authority5.cva)("aster_switch", {
  variants: {
    size: {
      sm: "aster_switch_sm",
      md: "aster_switch_md",
      lg: "aster_switch_lg"
    },
    color: {
      blue: "",
      green: "aster_switch_green",
      purple: "aster_switch_purple",
      amber: "aster_switch_amber"
    }
  },
  defaultVariants: {
    size: "md",
    color: "blue"
  }
});
var Switch = React16.forwardRef(
  ({ className, size, color, label_title, label_desc, onChange, onCheckedChange, ...props }, ref) => {
    const switch_classes = switch_variants({ size, color });
    const handle_change = React16.useCallback(
      (e) => {
        onChange?.(e);
        onCheckedChange?.(e.target.checked);
      },
      [onChange, onCheckedChange]
    );
    const switch_el = /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("label", { className: [switch_classes, className].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { type: "checkbox", className: "aster_switch_input", ref, onChange: handle_change, ...props }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "aster_switch_track", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "aster_switch_thumb" }) })
    ] });
    if (label_title) {
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("label", { className: "aster_switch_labeled", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "aster_switch_labeled_text", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "aster_switch_labeled_title", children: label_title }),
          label_desc && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "aster_switch_labeled_desc", children: label_desc })
        ] }),
        switch_el
      ] });
    }
    return switch_el;
  }
);
Switch.displayName = "Switch";
var Checkbox = React16.forwardRef(
  ({ className, label, indeterminate, onChange, onCheckedChange, ...props }, ref) => {
    const classes = ["aster_checkbox", className].filter(Boolean).join(" ");
    const internal_ref = React16.useRef(null);
    React16.useEffect(() => {
      const el = typeof ref === "function" ? internal_ref.current : ref?.current ?? internal_ref.current;
      if (el) {
        el.indeterminate = !!indeterminate;
      }
    }, [indeterminate, ref]);
    const combined_ref = React16.useCallback(
      (node) => {
        internal_ref.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );
    const handle_change = React16.useCallback(
      (e) => {
        onChange?.(e);
        onCheckedChange?.(e.target.checked);
      },
      [onChange, onCheckedChange]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("label", { className: classes, children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { type: "checkbox", className: "aster_checkbox_input", ref: combined_ref, onChange: handle_change, ...props }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "aster_checkbox_box", children: indeterminate ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "svg",
        {
          className: "aster_checkbox_check",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: "3",
          stroke: "currentColor",
          children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12h14" })
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "svg",
        {
          className: "aster_checkbox_check",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: "3",
          stroke: "currentColor",
          children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m4.5 12.75 6 6 9-13.5"
            }
          )
        }
      ) }),
      label && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "aster_checkbox_text", children: label })
    ] });
  }
);
Checkbox.displayName = "Checkbox";
var Radio = React16.forwardRef(
  ({ className, label, ...props }, ref) => {
    const classes = ["aster_radio", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("label", { className: classes, children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { type: "radio", className: "aster_radio_input", ref, ...props }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "aster_radio_circle" }),
      label && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "aster_radio_text", children: label })
    ] });
  }
);
Radio.displayName = "Radio";
var SegmentedToggle = React16.forwardRef(
  ({ className, name, options, value, on_change, ...props }, ref) => {
    const classes = ["aster_seg", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: classes, ref, ...props, children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(React16.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "input",
        {
          type: "radio",
          name,
          id: `${name}_${opt.value}`,
          className: "aster_seg_input",
          checked: value === opt.value,
          onChange: () => on_change?.(opt.value)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { htmlFor: `${name}_${opt.value}`, className: "aster_seg_label", children: opt.label })
    ] }, opt.value)) });
  }
);
SegmentedToggle.displayName = "SegmentedToggle";

// src/navbar/navbar.tsx
var React17 = __toESM(require("react"), 1);
var import_jsx_runtime19 = require("react/jsx-runtime");
var NavbarContext = React17.createContext({
  active_panel: null,
  open_panel: () => {
  },
  schedule_close: () => {
  },
  cancel_close: () => {
  }
});
var Navbar = React17.forwardRef(
  ({ className, variant = "default", children, ...props }, ref) => {
    const [active_panel, set_active_panel] = React17.useState(null);
    const close_timer = React17.useRef(null);
    const open_panel = React17.useCallback((panel_id) => {
      if (close_timer.current) {
        clearTimeout(close_timer.current);
        close_timer.current = null;
      }
      set_active_panel(panel_id);
    }, []);
    const schedule_close = React17.useCallback(() => {
      close_timer.current = setTimeout(() => set_active_panel(null), 150);
    }, []);
    const cancel_close = React17.useCallback(() => {
      if (close_timer.current) {
        clearTimeout(close_timer.current);
        close_timer.current = null;
      }
    }, []);
    const classes = [
      "aster_navbar",
      variant === "dark" && "aster_navbar_dark",
      active_panel && "aster_navbar_mega_open",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(NavbarContext.Provider, { value: { active_panel, open_panel, schedule_close, cancel_close }, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("nav", { className: classes, ref, onMouseLeave: schedule_close, ...props, children }) });
  }
);
Navbar.displayName = "Navbar";
var NavbarInner = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_inner", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarInner.displayName = "NavbarInner";
var NavbarLogo = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_logo", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: classes, ref, ...props, children });
  }
);
NavbarLogo.displayName = "NavbarLogo";
var NavbarLinks = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_links", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarLinks.displayName = "NavbarLinks";
var NavbarLink = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_link", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: classes, ref, ...props, children });
  }
);
NavbarLink.displayName = "NavbarLink";
var NavbarTrigger = React17.forwardRef(
  ({ className, panel_id, children, ...props }, ref) => {
    const { active_panel, open_panel, schedule_close } = React17.useContext(NavbarContext);
    const classes = ["aster_navbar_link", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
      "button",
      {
        className: classes,
        ref,
        "data-active": String(active_panel === panel_id),
        onMouseEnter: () => open_panel(panel_id),
        onMouseLeave: schedule_close,
        ...props,
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "svg",
            {
              className: "aster_navbar_chevron",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m19.5 8.25-7.5 7.5-7.5-7.5" })
            }
          )
        ]
      }
    );
  }
);
NavbarTrigger.displayName = "NavbarTrigger";
var NavbarActions = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_actions", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarActions.displayName = "NavbarActions";
var NavbarCta = React17.forwardRef(
  ({ className, light, children, ...props }, ref) => {
    const classes = [
      "aster_navbar_cta",
      light && "aster_navbar_cta_light",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: classes, ref, ...props, children });
  }
);
NavbarCta.displayName = "NavbarCta";
var NavbarSearch = React17.forwardRef(
  ({ className, placeholder = "Search...", shortcut = "/", ...props }, ref) => {
    const classes = ["aster_navbar_search", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: classes, ref, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "svg",
        {
          className: "aster_navbar_search_icon",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", { type: "text", className: "aster_navbar_search_input", placeholder }),
      shortcut && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("kbd", { className: "aster_navbar_search_kbd", children: shortcut })
    ] });
  }
);
NavbarSearch.displayName = "NavbarSearch";
var NavbarMega = React17.forwardRef(
  ({ className, dark, children, ...props }, ref) => {
    const { cancel_close, schedule_close } = React17.useContext(NavbarContext);
    const outer_classes = ["aster_navbar_mega", className].filter(Boolean).join(" ");
    const container_classes = [
      "aster_navbar_mega_container",
      dark && "aster_navbar_mega_container_dark"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "div",
      {
        className: outer_classes,
        ref,
        onMouseEnter: cancel_close,
        onMouseLeave: schedule_close,
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: container_classes, children })
      }
    );
  }
);
NavbarMega.displayName = "NavbarMega";
var NavbarMegaPanel = React17.forwardRef(
  ({ className, panel_id, children, ...props }, ref) => {
    const { active_panel } = React17.useContext(NavbarContext);
    const classes = [
      "aster_navbar_mega_panel",
      active_panel === panel_id && "aster_navbar_mega_panel_active",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarMegaPanel.displayName = "NavbarMegaPanel";
var NavbarMegaCols = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mega_cols", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarMegaCols.displayName = "NavbarMegaCols";
var NavbarMegaCol = React17.forwardRef(
  ({ className, heading, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className, ref, ...props, children: [
      heading && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "aster_navbar_mega_heading", children: heading }),
      children
    ] });
  }
);
NavbarMegaCol.displayName = "NavbarMegaCol";
var NavbarMegaItem = React17.forwardRef(
  ({ className, icon, title, description, ...props }, ref) => {
    const classes = ["aster_navbar_mega_item", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("a", { className: classes, ref, ...props, children: [
      icon && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "aster_navbar_mega_icon", children: icon }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "aster_navbar_mega_title", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "aster_navbar_mega_desc", children: description })
      ] })
    ] });
  }
);
NavbarMegaItem.displayName = "NavbarMegaItem";
var NavbarMegaItemSimple = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mega_item_simple", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: classes, ref, ...props, children });
  }
);
NavbarMegaItemSimple.displayName = "NavbarMegaItemSimple";
var NavbarHamburger = React17.forwardRef(
  ({ className, onClick, ...props }, ref) => {
    const classes = ["aster_navbar_hamburger", className].filter(Boolean).join(" ");
    const handle_click = (e) => {
      const nav = e.currentTarget.closest(".aster_navbar");
      if (nav) nav.classList.toggle("aster_navbar_mobile_open");
      onClick?.(e);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { className: classes, ref, onClick: handle_click, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "svg",
        {
          className: "aster_navbar_hamburger_open",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "svg",
        {
          className: "aster_navbar_hamburger_close",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" })
        }
      )
    ] });
  }
);
NavbarHamburger.displayName = "NavbarHamburger";
var NavbarMobileMenu = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mobile_menu", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarMobileMenu.displayName = "NavbarMobileMenu";
var NavbarMobileLink = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mobile_link", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: classes, ref, ...props, children });
  }
);
NavbarMobileLink.displayName = "NavbarMobileLink";
var NavbarMobileDivider = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "aster_navbar_mobile_divider" });
NavbarMobileDivider.displayName = "NavbarMobileDivider";

// src/accordion/accordion.tsx
var React18 = __toESM(require("react"), 1);
var import_class_variance_authority6 = require("class-variance-authority");
var import_jsx_runtime20 = require("react/jsx-runtime");
var accordion_variants = (0, import_class_variance_authority6.cva)("aster_accordion", {
  variants: {
    variant: {
      default: "",
      bordered: "aster_accordion_bordered",
      separated: "aster_accordion_separated"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var AccordionContext = React18.createContext({
  open_items: [],
  toggle: () => {
  }
});
var AccordionItemContext = React18.createContext("");
var Accordion = React18.forwardRef(
  ({
    className,
    variant,
    multiple = false,
    default_open = [],
    children,
    ...props
  }, ref) => {
    const [open_items, set_open_items] = React18.useState(default_open);
    const toggle = React18.useCallback(
      (value) => {
        set_open_items((prev) => {
          if (prev.includes(value)) {
            return prev.filter((v) => v !== value);
          }
          return multiple ? [...prev, value] : [value];
        });
      },
      [multiple]
    );
    const context = React18.useMemo(
      () => ({ open_items, toggle }),
      [open_items, toggle]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(AccordionContext.Provider, { value: context, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "div",
      {
        ref,
        className: accordion_variants({ variant, className }),
        ...props,
        children
      }
    ) });
  }
);
Accordion.displayName = "Accordion";
var AccordionItem = React18.forwardRef(
  ({ className, value, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(AccordionItemContext.Provider, { value, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "div",
      {
        ref,
        className: ["aster_accordion_item", className].filter(Boolean).join(" "),
        ...props,
        children
      }
    ) });
  }
);
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React18.forwardRef(({ className, icon, children, ...props }, ref) => {
  const { open_items, toggle } = React18.useContext(AccordionContext);
  const value = React18.useContext(AccordionItemContext);
  const is_open = open_items.includes(value);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "button",
    {
      ref,
      type: "button",
      className: ["aster_accordion_trigger", className].filter(Boolean).join(" "),
      onClick: () => toggle(value),
      "aria-expanded": is_open,
      ...props,
      children: [
        icon ? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "aster_accordion_trigger_icon_wrap", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "aster_accordion_trigger_icon", children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "svg",
          {
            className: [
              "aster_accordion_chevron",
              is_open && "aster_accordion_chevron_open"
            ].filter(Boolean).join(" "),
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 2,
            stroke: "currentColor",
            children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "m19.5 8.25-7.5 7.5-7.5-7.5"
              }
            )
          }
        )
      ]
    }
  );
});
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = React18.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { open_items } = React18.useContext(AccordionContext);
    const value = React18.useContext(AccordionItemContext);
    const is_open = open_items.includes(value);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "div",
      {
        ref,
        className: [
          "aster_accordion_content",
          is_open && "aster_accordion_content_open",
          className
        ].filter(Boolean).join(" "),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "div",
          {
            className: [
              "aster_accordion_content_inner",
              is_open && "aster_accordion_content_inner_open"
            ].filter(Boolean).join(" "),
            children
          }
        )
      }
    );
  }
);
AccordionContent.displayName = "AccordionContent";

// src/kbd/kbd.tsx
var React19 = __toESM(require("react"), 1);
var import_class_variance_authority7 = require("class-variance-authority");
var import_jsx_runtime21 = require("react/jsx-runtime");
var kbd_variants = (0, import_class_variance_authority7.cva)("aster_kbd", {
  variants: {
    size: {
      xs: "aster_kbd_xs",
      sm: "aster_kbd_sm",
      md: "aster_kbd_md",
      lg: "aster_kbd_lg"
    },
    variant: {
      default: "aster_kbd_default",
      outline: "aster_kbd_outline",
      ghost: "aster_kbd_ghost",
      inlay: "aster_kbd_inlay"
    }
  },
  defaultVariants: {
    size: "sm",
    variant: "default"
  }
});
var MODIFIER_MAP_MAC = {
  cmd: "\u2318",
  ctrl: "\u2318",
  shift: "\u21E7",
  alt: "\u2325",
  option: "\u2325",
  meta: "\u2318"
};
var MODIFIER_MAP_OTHER = {
  cmd: "Ctrl",
  ctrl: "Ctrl",
  shift: "Shift",
  alt: "Alt",
  option: "Alt",
  meta: "Win"
};
var KEY_DISPLAY = {
  enter: "\u21B5",
  return: "\u21B5",
  escape: "Esc",
  esc: "Esc",
  backspace: "\u232B",
  delete: "\u2326",
  tab: "\u21E5",
  arrowup: "\u2191",
  arrowdown: "\u2193",
  arrowleft: "\u2190",
  arrowright: "\u2192",
  space: "Space",
  " ": "Space"
};
function is_mac() {
  if (typeof navigator === "undefined") return false;
  return /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
}
function format_key(key) {
  const lower = key.toLowerCase();
  const mac = is_mac();
  const mod_map = mac ? MODIFIER_MAP_MAC : MODIFIER_MAP_OTHER;
  if (mod_map[lower]) return mod_map[lower];
  if (KEY_DISPLAY[lower]) return KEY_DISPLAY[lower];
  return key.length === 1 ? key.toUpperCase() : key;
}
var Kbd = React19.forwardRef(
  ({ className, size, variant, keys, ...props }, ref) => {
    const key_list = Array.isArray(keys) ? keys : [keys];
    const formatted = key_list.map(format_key);
    const label = key_list.join(" + ");
    const classes = [kbd_variants({ size, variant }), className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("kbd", { "aria-label": `Keyboard shortcut: ${label}`, className: classes, ref, ...props, children: formatted.map((k, i) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(React19.Fragment, { children: [
      i > 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { "aria-hidden": "true", className: "aster_kbd_sep" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { "aria-hidden": "true", children: k })
    ] }, i)) });
  }
);
Kbd.displayName = "Kbd";

// src/marquee/marquee.tsx
var React20 = __toESM(require("react"), 1);
var import_class_variance_authority8 = require("class-variance-authority");
var import_jsx_runtime22 = require("react/jsx-runtime");
var marquee_variants = (0, import_class_variance_authority8.cva)("aster_marquee", {
  variants: {
    variant: {
      default: "",
      dark: "aster_marquee_dark"
    },
    fade: {
      true: "aster_marquee_fade",
      false: ""
    },
    pause_on_hover: {
      true: "aster_marquee_hover_pause",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    fade: false,
    pause_on_hover: false
  }
});
var speed_class_map = {
  fast: "aster_marquee_fast",
  slow: "aster_marquee_slow"
};
var Marquee = React20.forwardRef(
  ({ className, variant, fade, pause_on_hover, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "div",
      {
        ref,
        className: marquee_variants({
          variant,
          fade,
          pause_on_hover,
          className
        }),
        ...props,
        children
      }
    );
  }
);
Marquee.displayName = "Marquee";
var MarqueeTrack = React20.forwardRef(
  ({ className, reverse = false, speed = "default", children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
      "div",
      {
        ref,
        className: [
          "aster_marquee_track",
          reverse && "aster_marquee_reverse",
          speed_class_map[speed],
          className
        ].filter(Boolean).join(" "),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "aster_marquee_slide", children }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "aster_marquee_slide", "aria-hidden": "true", children })
        ]
      }
    );
  }
);
MarqueeTrack.displayName = "MarqueeTrack";
var MarqueeLogo = React20.forwardRef(
  ({ className, icon, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
      "span",
      {
        ref,
        className: ["aster_marquee_logo", className].filter(Boolean).join(" "),
        ...props,
        children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "aster_marquee_logo_icon", children: icon }),
          children
        ]
      }
    );
  }
);
MarqueeLogo.displayName = "MarqueeLogo";

// src/text_roller/text_roller.tsx
var React21 = __toESM(require("react"), 1);
var import_jsx_runtime23 = require("react/jsx-runtime");
var TextRoller = React21.forwardRef(
  ({ className, items, interval = 2e3, item_height = "1.2em", ...props }, ref) => {
    const [index, set_index] = React21.useState(0);
    React21.useEffect(() => {
      if (items.length <= 1) return;
      const timer = setInterval(() => {
        set_index((prev) => (prev + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }, [items.length, interval]);
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "span",
      {
        ref,
        className: ["aster_text_roller", className].filter(Boolean).join(" "),
        style: { height: item_height },
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "span",
          {
            className: "aster_text_roller_track",
            style: { transform: `translateY(calc(-${index} * ${item_height}))` },
            "aria-live": "polite",
            children: items.map((item, i) => {
              const text = typeof item === "string" ? item : item.text;
              const item_class = typeof item === "string" ? void 0 : item.class_name;
              return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                "span",
                {
                  className: ["aster_text_roller_item", item_class].filter(Boolean).join(" "),
                  style: { height: item_height },
                  "aria-hidden": i !== index,
                  children: text
                },
                i
              );
            })
          }
        )
      }
    );
  }
);
TextRoller.displayName = "TextRoller";

// src/sidebar/sidebar.tsx
var React22 = __toESM(require("react"), 1);
var import_jsx_runtime24 = require("react/jsx-runtime");
function join_classes4(...parts) {
  return parts.filter(Boolean).join(" ");
}
function ChevronDown({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M6 9l6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function SidebarHeader({
  is_collapsed,
  title,
  subtitle,
  logo_src,
  logo_alt,
  on_trigger_click,
  show_chevron = true,
  right_slot
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "button",
    {
      className: join_classes4(
        "w-full flex items-center rounded-[12px] px-1 py-1 -mx-1 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)]",
        is_collapsed ? "justify-center" : "gap-3"
      ),
      type: "button",
      onClick: on_trigger_click,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          "div",
          {
            className: join_classes4(
              "flex-shrink-0 relative",
              is_collapsed ? "w-10 h-10" : "w-11 h-11"
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
              "img",
              {
                alt: logo_alt,
                className: "w-full h-full select-none rounded-lg",
                decoding: "async",
                draggable: false,
                src: logo_src
              }
            )
          }
        ),
        !is_collapsed && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex flex-col items-start min-w-0 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "text-[15px] font-semibold text-txt-primary truncate w-full text-left", children: title }),
            subtitle && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "text-[11px] truncate w-full text-left text-txt-muted", children: subtitle })
          ] }),
          right_slot,
          show_chevron && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ChevronDown, { className: "w-4 h-4 flex-shrink-0 text-txt-muted" })
        ] })
      ]
    }
  );
}
function SidebarSectionHeader({
  label,
  is_collapsed
}) {
  if (is_collapsed) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mb-1 px-2.5", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "text-[10px] font-semibold uppercase tracking-[0.05em] text-txt-muted opacity-70", children: label }) });
}
function SidebarSectionToggle({
  label,
  is_collapsed,
  section_collapsed,
  on_toggle,
  right_slot
}) {
  if (is_collapsed) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mt-5 mb-1 px-2.5", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "w-full flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
      "button",
      {
        className: "flex-1 flex items-center gap-1 py-1 text-txt-muted opacity-70 hover:opacity-100",
        type: "button",
        onClick: on_toggle,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            ChevronDown,
            {
              className: join_classes4(
                "w-3 h-3",
                section_collapsed ? "-rotate-90" : "rotate-0"
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "text-[10px] font-semibold uppercase tracking-[0.05em]", children: label })
        ]
      }
    ),
    right_slot
  ] }) });
}
function SidebarMoreToggle({
  more_label,
  less_label,
  expanded,
  on_toggle
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "button",
    {
      className: "w-full flex items-center gap-2 px-2.5 h-7 text-[12px] rounded-[12px] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] text-txt-muted",
      type: "button",
      onClick: on_toggle,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          ChevronDown,
          {
            className: join_classes4(
              "w-3.5 h-3.5",
              expanded ? "rotate-180" : "rotate-0"
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: expanded ? less_label : more_label })
      ]
    }
  );
}
var SidebarNavRow = React22.forwardRef(
  ({
    icon: Icon2,
    label,
    selected = false,
    is_collapsed = false,
    count,
    show_count = false,
    is_loading = false,
    on_click,
    trailing,
    leading,
    title
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
      "button",
      {
        ref,
        className: join_classes4(
          "sidebar-nav-btn group relative w-full flex items-center rounded-[12px] h-8 text-[14px]",
          is_collapsed ? "justify-center px-0" : "gap-2.5 px-2.5",
          selected && "sidebar-active",
          is_collapsed && selected && "sidebar-selected"
        ),
        style: {
          zIndex: 1,
          color: selected ? "var(--text-primary)" : "var(--text-secondary)",
          backgroundColor: is_collapsed && selected ? "var(--indicator-bg)" : void 0
        },
        title: title ?? (is_collapsed ? label : void 0),
        type: "button",
        onClick: on_click,
        children: [
          leading,
          Icon2 && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            Icon2,
            {
              className: is_collapsed ? "w-5 h-5" : "w-4 h-4",
              style: {
                color: selected ? "var(--text-primary)" : "var(--text-muted)"
              }
            }
          ),
          !is_collapsed && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "flex-1 text-left", children: label }),
          !is_collapsed && trailing,
          !is_collapsed && show_count && !is_loading && count !== void 0 && count > 0 && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "ml-auto text-[11px] tabular-nums text-txt-muted", children: count })
        ]
      }
    );
  }
);
SidebarNavRow.displayName = "SidebarNavRow";
function SidebarTagRow({
  label,
  count,
  selected = false,
  is_collapsed = false,
  on_click,
  color,
  show_count = false,
  button_ref,
  drag_over = false,
  on_drag_enter,
  on_drag_leave,
  on_drag_over,
  on_drop,
  tag_icon: TagIcon2
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "button",
    {
      ref: button_ref,
      className: join_classes4(
        "sidebar-nav-btn group relative w-full flex items-center rounded-[12px] h-8 text-[14px]",
        is_collapsed ? "justify-center px-0" : "gap-2.5 px-2.5",
        selected && "sidebar-active",
        is_collapsed && selected && "sidebar-selected",
        drag_over && "ring-2 ring-blue-500/60 bg-blue-500/10"
      ),
      style: {
        zIndex: 1,
        color: selected ? "var(--text-primary)" : "var(--text-secondary)",
        backgroundColor: drag_over ? void 0 : is_collapsed && selected ? "var(--indicator-bg)" : void 0
      },
      title: is_collapsed ? label : void 0,
      type: "button",
      onClick: on_click,
      onDragEnter: on_drag_enter,
      onDragLeave: on_drag_leave,
      onDragOver: on_drag_over,
      onDrop: on_drop,
      children: [
        TagIcon2 ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          TagIcon2,
          {
            className: join_classes4(
              "flex-shrink-0",
              is_collapsed ? "w-5 h-5" : "w-4 h-4"
            ),
            style: { color: color ?? "var(--accent-color)" }
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          "span",
          {
            className: join_classes4(
              "flex-shrink-0 rounded-full",
              is_collapsed ? "w-3 h-3" : "w-2.5 h-2.5"
            ),
            style: { backgroundColor: color ?? "var(--accent-color)" }
          }
        ),
        !is_collapsed && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "flex-1 text-left truncate leading-4", children: label }),
          show_count && count !== void 0 && count > 0 && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "ml-auto text-[11px] tabular-nums text-txt-muted", children: count })
        ] })
      ]
    }
  );
}
function SidebarActionButton({
  icon: Icon2,
  label,
  on_click,
  is_collapsed = false,
  shortcut_key,
  data_attr,
  extra_class
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "button",
    {
      className: join_classes4(
        "w-full flex items-center gap-2 rounded-[12px] text-[13px] font-medium transition-colors hover:opacity-90",
        is_collapsed ? "justify-center w-10 h-10 mx-auto p-0" : "px-3 py-2",
        extra_class
      ),
      style: {
        backgroundColor: "var(--color-info)",
        color: "#ffffff"
      },
      title: label,
      type: "button",
      onClick: on_click,
      ...data_attr || {},
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Icon2, { className: "w-4 h-4 flex-shrink-0" }),
        !is_collapsed && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "flex-1 text-left", children: label }),
          shortcut_key && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            "span",
            {
              className: "ml-auto inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-[4px] text-[10px] font-semibold uppercase tabular-nums",
              style: {
                backgroundColor: "rgba(0,0,0,0.08)",
                color: "var(--bg-primary)"
              },
              children: shortcut_key
            }
          )
        ] })
      ]
    }
  );
}

// src/sidebar/dashboard_sidebar.tsx
var import_react3 = require("react");
var import_framer_motion3 = require("framer-motion");

// src/motion/use_should_reduce_motion.ts
var import_react2 = require("react");
function use_should_reduce_motion() {
  const [reduced, set_reduced] = (0, import_react2.useState)(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  (0, import_react2.useEffect)(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => set_reduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// src/sidebar/dashboard_sidebar.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var SIDEBAR_EXPANDED_WIDTH = 256;
function ChevronDownIcon2({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M6 9l6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function PlusIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M12 4v16m8-8H4", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function XMarkIcon2({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M6 18L18 6M6 6l12 12", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function Cog6ToothIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "path",
          {
            d: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "path",
          {
            d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function ArrowRightOnRectangleIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "path",
        {
          d: "M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function KeyIcon({ className, style }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      style,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "path",
        {
          d: "M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function StarIcon({ className, style }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      style,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "path",
        {
          d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function ClockIcon({ className, style }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      style,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "path",
        {
          d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function ArchiveBoxIcon({ className, style }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      style,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "path",
        {
          d: "m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function TagIcon({ className, style }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      style,
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "path",
          {
            d: "M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M6 6h.008v.008H6V6Z", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  );
}
var TAG_PALETTE = [
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#ef4444",
  "#f59e0b",
  "#10b981",
  "#14b8a6",
  "#6366f1"
];
function color_for_tag(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = hash * 31 + name.charCodeAt(i) >>> 0;
  }
  return TAG_PALETTE[hash % TAG_PALETTE.length];
}
var NAV_ITEMS = [
  { id: "all", icon: KeyIcon },
  { id: "favorites", icon: StarIcon },
  { id: "recent", icon: ClockIcon },
  { id: "archived", icon: ArchiveBoxIcon }
];
function DashboardSidebar({
  active_filter,
  on_filter_change,
  on_add_account,
  on_settings_click,
  on_sign_out,
  is_collapsed,
  is_mobile_open,
  on_close_mobile,
  accounts,
  brand_logo_src,
  brand_text_logo_src,
  account_display_name,
  account_email,
  account_profile_color,
  account_profile_picture,
  account_aster_fallback_src,
  t_strings,
  storage_key_prefix = "aster_authenticator_sidebar",
  add_shortcut_key = "a",
  extra_account_menu_items
}) {
  const accounts_collapsed_key = `${storage_key_prefix}_accounts_collapsed`;
  const tags_collapsed_key = `${storage_key_prefix}_tags_collapsed`;
  const reduce_motion = use_should_reduce_motion();
  const dur = (n) => reduce_motion ? 0 : n;
  const [is_mobile, set_is_mobile] = (0, import_react3.useState)(false);
  const [is_tablet, set_is_tablet] = (0, import_react3.useState)(false);
  const [is_account_menu_open, set_is_account_menu_open] = (0, import_react3.useState)(false);
  const [labels_expanded, set_labels_expanded] = (0, import_react3.useState)(false);
  const [accounts_section_collapsed, set_accounts_section_collapsed] = (0, import_react3.useState)(
    () => {
      if (typeof window === "undefined") return false;
      return localStorage.getItem(accounts_collapsed_key) === "1";
    }
  );
  const [tags_section_collapsed, set_tags_section_collapsed] = (0, import_react3.useState)(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(tags_collapsed_key) === "1";
  });
  const [indicator_style, set_indicator_style] = (0, import_react3.useState)({ opacity: 0 });
  const nav_container_ref = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    const check_breakpoints = () => {
      const width = window.innerWidth;
      set_is_mobile(width < 768);
      set_is_tablet(width >= 768 && width < 1024);
    };
    check_breakpoints();
    window.addEventListener("resize", check_breakpoints);
    return () => window.removeEventListener("resize", check_breakpoints);
  }, []);
  (0, import_react3.useEffect)(() => {
    const handle_keydown = (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target;
      if (target) {
        const tag = target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable) {
          return;
        }
      }
      if (event.key === add_shortcut_key || event.key === add_shortcut_key.toUpperCase()) {
        event.preventDefault();
        on_add_account();
      }
    };
    window.addEventListener("keydown", handle_keydown);
    return () => window.removeEventListener("keydown", handle_keydown);
  }, [add_shortcut_key, on_add_account]);
  const collapsed = is_tablet || !is_mobile && is_collapsed;
  const tag_data = (0, import_react3.useMemo)(() => {
    const counts = {};
    for (const account of accounts) {
      for (const tag of account.tags || []) {
        const trimmed = tag.trim();
        if (!trimmed) continue;
        counts[trimmed] = (counts[trimmed] || 0) + 1;
      }
    }
    const sorted = Object.keys(counts).sort(
      (a, b) => a.localeCompare(b, void 0, { sensitivity: "base" })
    );
    return { tags: sorted, counts };
  }, [accounts]);
  const nav_counts = (0, import_react3.useMemo)(() => {
    return {
      all: accounts.length,
      favorites: accounts.filter((a) => a.is_pinned).length,
      recent: accounts.length,
      archived: 0
    };
  }, [accounts]);
  const toggle_accounts_section = (0, import_react3.useCallback)(() => {
    set_accounts_section_collapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(accounts_collapsed_key, next ? "1" : "0");
      } catch {
      }
      return next;
    });
  }, [accounts_collapsed_key]);
  const toggle_tags_section = (0, import_react3.useCallback)(() => {
    set_tags_section_collapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(tags_collapsed_key, next ? "1" : "0");
      } catch {
      }
      return next;
    });
  }, [tags_collapsed_key]);
  const recalculate_indicator = (0, import_react3.useCallback)(() => {
    const container = nav_container_ref.current;
    if (!container) return;
    const target = container.querySelector(".sidebar-active");
    if (!target) {
      set_indicator_style((s) => ({ ...s, opacity: 0 }));
      return;
    }
    const container_rect = container.getBoundingClientRect();
    const target_rect = target.getBoundingClientRect();
    set_indicator_style({
      transform: `translateY(${Math.round(target_rect.top - container_rect.top)}px)`,
      height: Math.round(target_rect.height),
      opacity: 1
    });
  }, []);
  (0, import_react3.useLayoutEffect)(() => {
    recalculate_indicator();
  }, [
    recalculate_indicator,
    active_filter,
    collapsed,
    tag_data.tags,
    labels_expanded,
    accounts_section_collapsed,
    tags_section_collapsed
  ]);
  (0, import_react3.useEffect)(() => {
    if (!nav_container_ref.current) return;
    let raf_id = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(raf_id);
      raf_id = requestAnimationFrame(recalculate_indicator);
    });
    observer.observe(nav_container_ref.current);
    return () => {
      cancelAnimationFrame(raf_id);
      observer.disconnect();
    };
  }, [recalculate_indicator]);
  const handle_nav_click = (0, import_react3.useCallback)(
    (callback) => {
      callback();
      if (is_mobile) on_close_mobile();
    },
    [is_mobile, on_close_mobile]
  );
  const labels_for_kind = (kind) => {
    switch (kind) {
      case "all":
        return t_strings.all_accounts;
      case "favorites":
        return t_strings.favorites;
      case "recent":
        return t_strings.recently_used;
      case "archived":
        return t_strings.archived;
    }
  };
  const is_kind_selected = (kind) => {
    return active_filter.kind !== "tag" && active_filter.kind === kind;
  };
  const account_menu_items = (0, import_react3.useMemo)(() => {
    const settings_item = {
      id: "settings",
      label: t_strings.settings,
      icon: Cog6ToothIcon,
      on_click: on_settings_click
    };
    return extra_account_menu_items ? [settings_item, ...extra_account_menu_items] : [settings_item];
  }, [t_strings.settings, on_settings_click, extra_account_menu_items]);
  const account_menu_footer = /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    Button,
    {
      className: "w-full text-[12px]",
      size: "sm",
      variant: "destructive",
      onClick: on_sign_out,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ArrowRightOnRectangleIcon, { className: "w-3.5 h-3.5" }),
        t_strings.sign_out
      ]
    }
  );
  const footer_expanded_slot = /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "button",
    {
      className: "flex-1 flex items-center gap-2 px-2 py-1.5 rounded-[12px] text-[12px] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] text-txt-muted",
      type: "button",
      onClick: on_settings_click,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Cog6ToothIcon, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { children: t_strings.settings })
      ]
    }
  ) });
  const footer_collapsed_slot = /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "button",
    {
      className: "p-2 rounded-[14px] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] text-txt-muted",
      title: t_strings.settings,
      type: "button",
      onClick: on_settings_click,
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Cog6ToothIcon, { className: "w-4 h-4" })
    }
  );
  const max_visible_tags = collapsed ? 3 : 5;
  const visible_tags = labels_expanded ? tag_data.tags : tag_data.tags.slice(0, max_visible_tags);
  const has_more_tags = tag_data.tags.length > max_visible_tags;
  const hidden_tag_count = tag_data.tags.length - max_visible_tags;
  const content = /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "aside",
    {
      className: `flex h-full flex-col flex-shrink-0 transition-all duration-150 bg-sidebar-bg-custom ${collapsed ? "w-16 min-w-16 max-w-16" : ""}`,
      style: collapsed ? void 0 : {
        width: SIDEBAR_EXPANDED_WIDTH,
        minWidth: SIDEBAR_EXPANDED_WIDTH,
        maxWidth: SIDEBAR_EXPANDED_WIDTH
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
          "div",
          {
            className: `${collapsed ? "px-2" : "px-3"} ${is_mobile ? "pr-12" : ""} pt-4 pb-3 relative`,
            children: [
              is_mobile && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                "button",
                {
                  "aria-label": t_strings.close_menu,
                  className: "absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-[8px] transition-colors hover:bg-black/[0.06] dark:hover:bg-white/[0.08] z-10 text-txt-muted",
                  type: "button",
                  onClick: on_close_mobile,
                  children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(XMarkIcon2, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                SidebarAccountMenu,
                {
                  active_label: t_strings.active,
                  display_name: account_display_name || void 0,
                  email: account_email || void 0,
                  profile_color: account_profile_color || void 0,
                  profile_picture: account_profile_picture || void 0,
                  aster_fallback_src: account_aster_fallback_src,
                  footer: account_menu_footer,
                  identity_label: t_strings.your_account,
                  is_open: is_account_menu_open,
                  items: account_menu_items,
                  on_close: () => set_is_account_menu_open(false),
                  trigger: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
                    "button",
                    {
                      className: `w-full flex items-center ${collapsed ? "justify-center" : "gap-3"} rounded-[12px] px-1 py-1 -mx-1 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04] focus:outline-none`,
                      type: "button",
                      onClick: (e) => {
                        set_is_account_menu_open((v) => !v);
                        e.currentTarget.blur();
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                          "div",
                          {
                            className: `${collapsed ? "w-10 h-10" : "w-11 h-11"} flex-shrink-0 relative`,
                            children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                              "img",
                              {
                                alt: t_strings.app_name,
                                className: "w-full h-full select-none rounded-lg",
                                decoding: "async",
                                draggable: false,
                                src: brand_logo_src
                              }
                            )
                          }
                        ),
                        !collapsed && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex flex-col items-start min-w-0 flex-1", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "text-[15px] font-semibold text-txt-primary truncate w-full text-left", children: t_strings.app_name }),
                            t_strings.deck_subtitle && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "text-[11px] truncate w-full text-left text-txt-muted", children: t_strings.deck_subtitle })
                          ] }),
                          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ChevronDownIcon2, { className: "w-4 h-4 flex-shrink-0 text-txt-muted" })
                        ] })
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: `${collapsed ? "px-2" : "px-2.5"} pb-3`, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
          Button,
          {
            className: `w-full !rounded-[14px] ${collapsed ? "" : "gap-2"}`,
            variant: "depth",
            onClick: () => {
              on_add_account();
              if (is_mobile) on_close_mobile();
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(PlusIcon, { className: "w-[15px] h-[15px]" }),
              !collapsed && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { children: t_strings.add_account }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Kbd, { keys: add_shortcut_key, size: "sm", variant: "inlay" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "div",
          {
            className: `flex-1 overflow-y-auto ${collapsed ? "px-2" : "px-2.5"} pt-0.5 pb-2`,
            children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { ref: nav_container_ref, className: "relative", children: [
              !collapsed && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                "div",
                {
                  className: "pointer-events-none absolute left-0 w-full rounded-md border-edge-primary",
                  style: {
                    ...indicator_style,
                    top: 0,
                    backgroundColor: "var(--indicator-bg)",
                    border: "1px solid var(--border-primary)",
                    zIndex: 0,
                    willChange: "transform, opacity",
                    transition: indicator_style.opacity === 0 ? "opacity 100ms ease" : "transform 200ms ease, height 200ms ease, opacity 200ms ease"
                  }
                }
              ),
              collapsed ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                SidebarSectionHeader,
                {
                  is_collapsed: true,
                  label: t_strings.accounts_section
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                SidebarSectionToggle,
                {
                  is_collapsed: false,
                  label: t_strings.accounts_section,
                  on_toggle: toggle_accounts_section,
                  section_collapsed: accounts_section_collapsed
                }
              ),
              !accounts_section_collapsed && NAV_ITEMS.map((item) => {
                const Icon2 = item.icon;
                const selected = is_kind_selected(item.id);
                const label = labels_for_kind(item.id);
                const count = nav_counts[item.id];
                return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
                  "button",
                  {
                    className: `sidebar-nav-btn group relative w-full flex items-center ${collapsed ? "justify-center" : "gap-2.5"} rounded-[12px] ${collapsed ? "px-0" : "px-2.5"} h-8 text-[14px]  ${selected ? "sidebar-active" : ""} ${collapsed && selected ? "sidebar-selected" : ""}`,
                    style: {
                      zIndex: 1,
                      color: selected ? "var(--text-primary)" : "var(--text-secondary)",
                      backgroundColor: collapsed && selected ? "var(--indicator-bg)" : void 0
                    },
                    title: collapsed ? label : void 0,
                    type: "button",
                    onClick: () => handle_nav_click(
                      () => on_filter_change({ kind: item.id })
                    ),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                        Icon2,
                        {
                          className: `${collapsed ? "w-5 h-5" : "w-4 h-4"} `,
                          style: {
                            color: selected ? "var(--text-primary)" : "var(--text-muted)"
                          }
                        }
                      ),
                      !collapsed && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "flex-1 text-left", children: label }),
                        count > 0 && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "ml-auto text-[11px] tabular-nums text-txt-muted", children: count })
                      ] })
                    ]
                  },
                  item.id
                );
              }),
              !collapsed && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                SidebarSectionToggle,
                {
                  is_collapsed: false,
                  label: t_strings.tags_section,
                  on_toggle: toggle_tags_section,
                  right_slot: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                    "button",
                    {
                      className: "p-1 rounded-[14px] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-txt-muted",
                      title: t_strings.create_tag,
                      type: "button",
                      onClick: () => {
                        on_add_account();
                        if (is_mobile) on_close_mobile();
                      },
                      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(PlusIcon, { className: "w-4 h-4" })
                    }
                  ),
                  section_collapsed: tags_section_collapsed
                }
              ),
              collapsed && tag_data.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "mt-3 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "p-1.5 text-txt-muted", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(TagIcon, { className: "w-4 h-4" }) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { children: [
                !tags_section_collapsed && visible_tags.map((tag_name) => {
                  const color = color_for_tag(tag_name);
                  const selected = active_filter.kind === "tag" && active_filter.tag === tag_name;
                  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                    SidebarTagRow,
                    {
                      color,
                      count: tag_data.counts[tag_name] ?? 0,
                      is_collapsed: collapsed,
                      label: tag_name,
                      on_click: () => handle_nav_click(
                        () => on_filter_change({ kind: "tag", tag: tag_name })
                      ),
                      selected,
                      show_count: true
                    },
                    tag_name
                  );
                }),
                has_more_tags && !collapsed && !tags_section_collapsed && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                  SidebarMoreToggle,
                  {
                    expanded: labels_expanded,
                    hidden_count: hidden_tag_count,
                    less_label: t_strings.show_less,
                    more_label: t_strings.more_tags(hidden_tag_count),
                    on_toggle: () => set_labels_expanded(!labels_expanded)
                  }
                ),
                tag_data.tags.length === 0 && !collapsed && !tags_section_collapsed && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-[11px] px-2.5 py-2 text-txt-muted", children: t_strings.no_tags_yet })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "mt-auto flex-shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            "div",
            {
              className: `${collapsed ? "mx-2" : "mx-3"} mb-3 h-px bg-edge-primary`
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
            "div",
            {
              className: `${collapsed ? "px-2" : "px-3"} pb-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]`,
              children: [
                !collapsed && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "mb-2", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                  "img",
                  {
                    alt: "Aster",
                    className: "h-[18px] select-none",
                    decoding: "async",
                    draggable: false,
                    src: brand_text_logo_src
                  }
                ) }),
                collapsed ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "flex flex-col items-center gap-1", children: footer_collapsed_slot }) : footer_expanded_slot
              ]
            }
          )
        ] })
      ]
    }
  );
  if (is_mobile) {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_framer_motion3.AnimatePresence, { children: is_mobile_open && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        import_framer_motion3.motion.div,
        {
          animate: { opacity: 1 },
          className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-md",
          exit: { opacity: 0 },
          initial: { opacity: 0 },
          transition: { duration: dur(0.2) },
          onClick: on_close_mobile
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        import_framer_motion3.motion.div,
        {
          animate: { x: 0 },
          className: "fixed top-0 left-0 bottom-0 z-50",
          exit: { x: -SIDEBAR_EXPANDED_WIDTH },
          initial: { x: -SIDEBAR_EXPANDED_WIDTH },
          transition: { type: "tween", duration: dur(0.25), ease: "easeOut" },
          children: content
        }
      )
    ] }) });
  }
  return content;
}

// src/settings/settings_shell.tsx
var React23 = __toESM(require("react"), 1);
var import_framer_motion4 = require("framer-motion");
var import_jsx_runtime26 = require("react/jsx-runtime");
function join_classes5(...parts) {
  return parts.filter(Boolean).join(" ");
}
function get_reduce_motion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function XIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("path", { d: "M6 6l12 12M18 6l-12 12", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function CheckIcon4({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("path", { d: "M5 12l5 5L20 7", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function SpinnerIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("path", { d: "M4 12a8 8 0 018-8M20 12a8 8 0 01-8 8", strokeLinecap: "round" })
    }
  );
}
function WarningIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "path",
        {
          d: "M12 3l10 18H2L12 3zM12 10v4M12 17h.01",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function SettingsSaveIndicator({ status }) {
  if (status === "idle") return null;
  const map = {
    saving: { Icon: SpinnerIcon, color: "var(--text-muted)", spin: true },
    saved: { Icon: CheckIcon4, color: "var(--color-success)" },
    error: { Icon: WarningIcon, color: "var(--color-danger)" }
  };
  const entry = map[status];
  const Icon2 = entry.Icon;
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "div",
    {
      className: "flex items-center gap-1.5 text-[12px]",
      style: { color: entry.color },
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        Icon2,
        {
          className: join_classes5("w-3.5 h-3.5", entry.spin && "animate-spin")
        }
      )
    }
  );
}
function SettingsSectionHeader({
  icon: Icon2,
  title,
  description,
  trailing
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("h3", { className: "text-base font-semibold text-txt-primary flex items-center gap-2 min-w-0", children: [
        Icon2 && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Icon2, { className: "w-[18px] h-[18px] text-txt-primary flex-shrink-0" }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "truncate", children: title })
      ] }),
      trailing && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "flex-shrink-0", children: trailing })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mt-2 h-px bg-edge-secondary" }),
    description && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "text-sm mt-2 text-txt-muted", children: description })
  ] });
}
function SettingsRow({ label, description, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex items-center justify-between py-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex-1 pr-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "text-sm font-medium text-txt-primary", children: label }),
      description && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "text-sm mt-0.5 text-txt-muted", children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "flex-shrink-0", children })
  ] });
}
function SettingsNavItemButton({
  item,
  is_selected,
  on_select,
  data_nav_id
}) {
  const Icon2 = item.icon;
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    "button",
    {
      className: "w-full flex items-center gap-2.5 px-2.5 h-8 rounded-[12px] text-[13px] transition-colors duration-150 relative z-[1]",
      style: {
        color: is_selected ? "var(--text-primary)" : "var(--text-secondary)"
      },
      "data-nav-id": data_nav_id ?? item.id,
      type: "button",
      onClick: () => on_select(item.id),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Icon2, { className: "w-5 h-5 flex-shrink-0" }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "truncate text-left", children: item.label })
      ]
    }
  );
}
function SettingsNavGroup({
  group,
  selected_id,
  on_select
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "mb-4 last:mb-0", children: [
    group.label && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "text-[10px] font-semibold uppercase tracking-wider px-2.5 mb-2 text-txt-muted select-none", children: group.label }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "space-y-0.5", children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      SettingsNavItemButton,
      {
        is_selected: selected_id === item.id,
        item,
        on_select
      },
      item.id
    )) })
  ] });
}
function SettingsModalShell({
  is_open,
  on_close,
  title,
  groups,
  selected_id,
  on_select,
  active_label,
  save_status = "idle",
  close_label = "Close",
  reduce_motion: reduce_motion_prop,
  header_extra,
  header_slot,
  overlay_content,
  content_dimmed,
  enable_mobile_drilldown,
  back_label = "Back",
  content_key,
  close_button,
  mobile_back_button,
  mobile_item_full_border,
  mobile_group_spacing,
  stable_scrollbar_gutter,
  children
}) {
  void header_extra;
  const [show_mobile_nav, set_show_mobile_nav] = React23.useState(true);
  const content_scroll_ref = React23.useRef(null);
  React23.useEffect(() => {
    content_scroll_ref.current?.scrollTo(0, 0);
  }, [selected_id, content_key]);
  React23.useEffect(() => {
    if (is_open) set_show_mobile_nav(true);
  }, [is_open]);
  const active_section_label = React23.useMemo(() => {
    for (const g of groups) {
      for (const it of g.items) {
        if (it.id === selected_id) return it.label;
      }
    }
    return title;
  }, [groups, selected_id, title]);
  const handle_select_internal = React23.useCallback(
    (id) => {
      on_select(id);
      if (enable_mobile_drilldown) set_show_mobile_nav(false);
    },
    [on_select, enable_mobile_drilldown]
  );
  const [reduce_motion_state, set_reduce_motion] = React23.useState(get_reduce_motion);
  const reduce_motion = reduce_motion_prop ?? reduce_motion_state;
  const nav_container_ref = React23.useRef(null);
  const [indicator_style, set_indicator_style] = React23.useState({ top: 0, height: 0, opacity: 0 });
  React23.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => set_reduce_motion(mq.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);
  React23.useEffect(() => {
    if (!is_open) return;
    const handle = (e) => {
      if (e.key === "Escape") on_close();
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [is_open, on_close]);
  const recalculate_indicator = React23.useCallback(() => {
    const container = nav_container_ref.current;
    if (!container) return;
    const target = container.querySelector(
      `[data-nav-id="${selected_id}"]`
    );
    if (!target) {
      set_indicator_style((s) => ({ ...s, opacity: 0 }));
      return;
    }
    set_indicator_style({
      top: target.offsetTop,
      height: target.offsetHeight,
      opacity: 1
    });
  }, [selected_id]);
  React23.useLayoutEffect(() => {
    recalculate_indicator();
  }, [recalculate_indicator, groups, is_open]);
  React23.useEffect(() => {
    if (!nav_container_ref.current) return;
    let raf_id = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(raf_id);
      raf_id = requestAnimationFrame(recalculate_indicator);
    });
    observer.observe(nav_container_ref.current);
    return () => {
      cancelAnimationFrame(raf_id);
      observer.disconnect();
    };
  }, [recalculate_indicator]);
  void active_label;
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_framer_motion4.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      import_framer_motion4.motion.div,
      {
        animate: { opacity: 1 },
        className: "absolute inset-0",
        exit: { opacity: 0 },
        initial: reduce_motion ? false : { opacity: 0 },
        style: { backgroundColor: "var(--modal-overlay)" },
        transition: { duration: reduce_motion ? 0 : 0.15 },
        onClick: on_close
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
      import_framer_motion4.motion.div,
      {
        animate: { scale: 1, opacity: 1, y: 0 },
        className: "relative flex flex-col md:flex-row w-full h-full md:w-[80vw] md:max-w-[1200px] md:h-[80vh] md:max-h-[900px] md:rounded-2xl overflow-hidden bg-surf-primary",
        exit: { scale: 0.95, opacity: 0, y: 8 },
        initial: reduce_motion ? false : { scale: 0.95, opacity: 0, y: 8 },
        style: {
          border: "1px solid var(--border-secondary)"
        },
        transition: {
          duration: reduce_motion ? 0 : 0.2,
          ease: [0.16, 1, 0.3, 1]
        },
        onClick: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
            "nav",
            {
              className: "hidden md:flex w-52 px-3 py-4 flex-col overflow-y-auto flex-shrink-0",
              style: {
                backgroundColor: "var(--sidebar-bg)",
                borderRight: "1px solid var(--border-primary)"
              },
              children: [
                header_slot && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mb-3 px-1", children: header_slot }),
                /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { ref: nav_container_ref, className: "relative", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                    "div",
                    {
                      className: "pointer-events-none absolute left-0 w-full rounded-md",
                      style: {
                        top: indicator_style.top,
                        height: indicator_style.height,
                        opacity: indicator_style.opacity,
                        backgroundColor: "var(--indicator-bg)",
                        border: "1px solid var(--border-primary)",
                        zIndex: 0,
                        transition: "top 200ms ease, height 200ms ease, opacity 200ms ease"
                      }
                    }
                  ),
                  groups.map((group, idx) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                    SettingsNavGroup,
                    {
                      group,
                      on_select: handle_select_internal,
                      selected_id
                    },
                    group.id ?? group.label ?? idx
                  ))
                ] })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex-1 overflow-y-auto flex flex-col min-h-0 bg-surf-primary", children: [
            /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("header", { className: "flex items-center justify-between px-4 md:px-6 py-4 flex-shrink-0 border-b border-b-edge-secondary", children: [
              /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex items-center gap-3 min-w-0", children: [
                enable_mobile_drilldown && !show_mobile_nav && (mobile_back_button ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                  "span",
                  {
                    className: "md:hidden -ml-1.5",
                    onClick: () => set_show_mobile_nav(true),
                    children: mobile_back_button
                  }
                ) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                  "button",
                  {
                    "aria-label": back_label,
                    className: "md:hidden -ml-1.5 flex items-center justify-center w-8 h-8 rounded-[10px] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-txt-muted",
                    type: "button",
                    onClick: () => set_show_mobile_nav(true),
                    children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                      "svg",
                      {
                        "aria-hidden": "true",
                        className: "w-5 h-5",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                          "path",
                          {
                            d: "M15 18l-6-6 6-6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          }
                        )
                      }
                    )
                  }
                )),
                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h2", { className: "text-[17px] font-semibold text-txt-primary truncate", children: enable_mobile_drilldown ? /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "hidden md:inline", children: title }),
                  /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "md:hidden", children: show_mobile_nav ? title : active_section_label })
                ] }) : title }),
                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(SettingsSaveIndicator, { status: save_status })
              ] }),
              close_button ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { onClick: on_close, children: close_button }) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                "button",
                {
                  "aria-label": close_label,
                  className: "flex items-center justify-center w-8 h-8 rounded-[10px] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-txt-muted",
                  type: "button",
                  onClick: on_close,
                  children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(XIcon, { className: "w-5 h-5" })
                }
              )
            ] }),
            enable_mobile_drilldown && show_mobile_nav && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "md:hidden flex-1 overflow-y-auto", children: groups.map((group, idx) => /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { children: [
              group.label && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                "div",
                {
                  className: join_classes5(
                    "text-[11px] font-semibold uppercase tracking-wider px-4 py-3 text-txt-muted",
                    mobile_group_spacing && idx > 0 && "mt-2"
                  ),
                  children: group.label
                }
              ),
              group.items.map((item) => {
                const Icon2 = item.icon;
                return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
                  "button",
                  {
                    className: join_classes5(
                      "w-full flex items-center gap-3 px-4 py-3 text-[15px] transition-colors duration-150 text-txt-primary border-b border-b-edge-primary",
                      mobile_item_full_border && "border border-edge-primary"
                    ),
                    type: "button",
                    onClick: () => handle_select_internal(item.id),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Icon2, { className: "w-5 h-5 flex-shrink-0 text-txt-secondary" }),
                      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: item.label })
                    ]
                  },
                  item.id
                );
              })
            ] }, group.id ?? group.label ?? idx)) }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
              "div",
              {
                ref: content_scroll_ref,
                className: join_classes5(
                  "flex-1 overflow-y-auto p-4 md:p-6 relative",
                  enable_mobile_drilldown && show_mobile_nav && "hidden md:block"
                ),
                style: stable_scrollbar_gutter ? { scrollbarGutter: "stable" } : void 0,
                children: [
                  overlay_content,
                  /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                    "div",
                    {
                      style: content_dimmed ? { opacity: 0.4, pointerEvents: "none" } : void 0,
                      children
                    },
                    content_key ?? selected_id
                  )
                ]
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}

// src/view_mode_mockups/view_mode_mockups.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
function get_colors(theme) {
  if (theme === "light") {
    return {
      bg: "#ffffff",
      sidebar_bg: "#f5f5f5",
      sidebar_border: "#e8e8e8",
      brand: "#3b82f6",
      compose_gradient: "linear-gradient(to bottom, #6b8aff 0%, #4f6ef7 50%, #3b5ae8 100%)",
      compose_border_top: "rgba(255,255,255,0.15)",
      compose_border_bottom: "rgba(0,0,0,0.15)",
      text_primary: "#111827",
      text_secondary: "#374151",
      text_tertiary: "#6b7280",
      text_muted: "#9ca3af",
      selected_bg: "#eff6ff",
      indicator_bg: "#ffffff",
      indicator_border: "#e8e8e8",
      border: "#e8e8e8",
      border_secondary: "#e5e7eb",
      body_line: "#e5e7eb",
      avatar_read: "#d1d5db",
      storage_track: "#0000000d",
      modal_overlay: "rgba(0,0,0,0.5)",
      card_shadow: "0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)"
    };
  }
  return {
    bg: "#121212",
    sidebar_bg: "#0a0a0a",
    sidebar_border: "#2a2a2a",
    brand: "#3b82f6",
    compose_gradient: "linear-gradient(to bottom, #6b8aff 0%, #4f6ef7 50%, #3b5ae8 100%)",
    compose_border_top: "rgba(255,255,255,0.15)",
    compose_border_bottom: "rgba(0,0,0,0.15)",
    text_primary: "#ffffff",
    text_secondary: "#e5e5e5",
    text_tertiary: "#888888",
    text_muted: "#666666",
    selected_bg: "#142744",
    indicator_bg: "#121212",
    indicator_border: "#333333",
    border: "#333333",
    border_secondary: "#2a2a2a",
    body_line: "#2a2a2a",
    avatar_read: "#3a3a3a",
    storage_track: "#ffffff0f",
    modal_overlay: "rgba(0,0,0,0.85)",
    card_shadow: "0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)"
  };
}
function MockupSidebar({ c }) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    "div",
    {
      className: "w-[52px] h-full flex flex-col p-1.5 gap-1.5 flex-shrink-0",
      style: {
        backgroundColor: c.sidebar_bg,
        borderRight: `1px solid ${c.sidebar_border}`
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex items-center gap-1.5 px-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "w-4 h-4 rounded", style: { backgroundColor: c.brand } }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
            "div",
            {
              className: "flex-1 h-1.5 rounded-sm",
              style: { backgroundColor: c.text_secondary }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          "div",
          {
            className: "h-5 rounded flex items-center justify-center",
            style: {
              background: c.compose_gradient,
              borderTop: `1px solid ${c.compose_border_top}`,
              borderBottom: `1px solid ${c.compose_border_bottom}`
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "w-2.5 h-2.5 rounded-sm bg-white/80" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex-1 flex flex-col mt-0.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "px-1 mb-0.5", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
            "div",
            {
              className: "w-3.5 h-0.5 rounded-sm",
              style: { backgroundColor: c.text_muted, opacity: 0.5 }
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "space-y-px", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
              "div",
              {
                className: "h-4 rounded px-1.5 flex items-center gap-1",
                style: {
                  backgroundColor: c.indicator_bg,
                  border: `1px solid ${c.indicator_border}`
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "div",
                    {
                      className: "w-2 h-2 rounded-sm",
                      style: { backgroundColor: c.text_primary }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "div",
                    {
                      className: "flex-1 h-1 rounded-sm",
                      style: { backgroundColor: c.text_primary }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "div",
                    {
                      className: "w-1 h-1 rounded-full",
                      style: { backgroundColor: c.brand }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "h-4 rounded px-1.5 flex items-center gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                "div",
                {
                  className: "w-2 h-2 rounded-sm",
                  style: { backgroundColor: c.text_muted }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                "div",
                {
                  className: "flex-1 h-1 rounded-sm",
                  style: { backgroundColor: c.text_muted }
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "h-4 rounded px-1.5 flex items-center gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                "div",
                {
                  className: "w-2 h-2 rounded-sm",
                  style: { backgroundColor: c.text_muted }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                "div",
                {
                  className: "flex-1 h-1 rounded-sm",
                  style: { backgroundColor: c.text_muted }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "px-1 mt-1.5 mb-0.5", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
            "div",
            {
              className: "w-3 h-0.5 rounded-sm",
              style: { backgroundColor: c.text_muted, opacity: 0.5 }
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "h-4 rounded px-1.5 flex items-center gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
              "div",
              {
                className: "w-2 h-2 rounded-sm",
                style: { backgroundColor: c.text_muted }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
              "div",
              {
                className: "flex-1 h-1 rounded-sm",
                style: { backgroundColor: c.text_muted }
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "flex-1" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "px-0.5", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
            "div",
            {
              className: "w-full h-1 rounded-full overflow-hidden",
              style: { backgroundColor: c.storage_track },
              children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                "div",
                {
                  className: "h-full rounded-full",
                  style: { width: "35%", backgroundColor: c.brand }
                }
              )
            }
          ) })
        ] })
      ]
    }
  );
}
function MockupEmailList({
  c,
  full_width = false
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    "div",
    {
      className: full_width ? "flex-1 flex flex-col" : "w-[55%] flex flex-col",
      style: full_width ? void 0 : { borderRight: `1px solid ${c.border}` },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
          "div",
          {
            className: "h-4 flex items-center justify-between px-1.5 flex-shrink-0",
            style: { borderBottom: `1px solid ${c.border_secondary}` },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-2 h-2 rounded-sm",
                    style: { border: `1.5px solid ${c.text_muted}` }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "h-1.5 rounded-sm w-5",
                    style: { backgroundColor: c.text_primary }
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex items-center gap-0.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-1.5 h-1.5 rounded-full",
                    style: { backgroundColor: c.text_muted }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "h-0.5 rounded-sm w-4",
                    style: { backgroundColor: c.text_muted }
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
            "div",
            {
              className: "h-6 flex items-center gap-1 px-1.5",
              style: {
                backgroundColor: c.selected_bg,
                borderBottom: `1px solid ${c.border_secondary}`
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-3 h-3 rounded-full flex-shrink-0",
                    style: { backgroundColor: c.brand }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "h-1 rounded-sm flex-shrink-0",
                    style: { width: "28%", backgroundColor: c.text_primary }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "flex-1 h-1 rounded-sm",
                    style: { backgroundColor: c.text_secondary }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-2 h-0.5 rounded-sm flex-shrink-0",
                    style: { backgroundColor: c.text_muted }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                    style: { backgroundColor: c.brand }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
            "div",
            {
              className: "h-6 flex items-center gap-1 px-1.5",
              style: { borderBottom: `1px solid ${c.border_secondary}` },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-3 h-3 rounded-full flex-shrink-0",
                    style: { backgroundColor: c.avatar_read }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "h-1 rounded-sm flex-shrink-0",
                    style: { width: "24%", backgroundColor: c.text_secondary }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "flex-1 h-1 rounded-sm",
                    style: { backgroundColor: c.text_tertiary }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-2 h-0.5 rounded-sm flex-shrink-0",
                    style: { backgroundColor: c.text_muted }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
            "div",
            {
              className: "h-6 flex items-center gap-1 px-1.5",
              style: { borderBottom: `1px solid ${c.border_secondary}` },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-3 h-3 rounded-full flex-shrink-0",
                    style: { backgroundColor: c.avatar_read }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "h-1 rounded-sm flex-shrink-0",
                    style: { width: "32%", backgroundColor: c.text_secondary }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "flex-1 h-1 rounded-sm",
                    style: { backgroundColor: c.text_tertiary }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-2 h-0.5 rounded-sm flex-shrink-0",
                    style: { backgroundColor: c.text_muted }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
            "div",
            {
              className: "h-6 flex items-center gap-1 px-1.5",
              style: { borderBottom: `1px solid ${c.border_secondary}` },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-3 h-3 rounded-full flex-shrink-0",
                    style: { backgroundColor: c.avatar_read }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "h-1 rounded-sm flex-shrink-0",
                    style: { width: "26%", backgroundColor: c.text_secondary }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "flex-1 h-1 rounded-sm",
                    style: { backgroundColor: c.text_tertiary }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-2 h-0.5 rounded-sm flex-shrink-0",
                    style: { backgroundColor: c.text_muted }
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ViewMockupSplit({ theme }) {
  const c = get_colors(theme);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    "div",
    {
      className: "w-full h-full rounded-md overflow-hidden flex",
      style: { backgroundColor: c.bg },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(MockupSidebar, { c }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex-1 flex", style: { backgroundColor: c.bg }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(MockupEmailList, { c }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex-1 flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
              "div",
              {
                className: "h-3.5 flex items-center gap-0.5 px-1.5 flex-shrink-0",
                style: { borderBottom: `1px solid ${c.border_secondary}` },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "div",
                    {
                      className: "w-1.5 h-1.5 rounded-sm",
                      style: { backgroundColor: c.text_muted }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "div",
                    {
                      className: "w-1.5 h-1.5 rounded-sm",
                      style: { backgroundColor: c.text_muted }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "div",
                    {
                      className: "w-1.5 h-1.5 rounded-sm",
                      style: { backgroundColor: c.text_muted }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "flex-1" }),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "div",
                    {
                      className: "w-1.5 h-1.5 rounded-sm",
                      style: { backgroundColor: c.text_muted }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex-1 p-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                "div",
                {
                  className: "w-[75%] h-1.5 rounded-sm mb-1",
                  style: { backgroundColor: c.text_primary }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex items-center gap-1 mb-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-2.5 h-2.5 rounded-full flex-shrink-0",
                    style: { backgroundColor: c.brand }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "div",
                    {
                      className: "w-6 h-0.5 rounded-sm mb-0.5",
                      style: { backgroundColor: c.text_secondary }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "div",
                    {
                      className: "w-10 h-0.5 rounded-sm",
                      style: { backgroundColor: c.text_muted }
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                "div",
                {
                  className: "w-full mb-1.5",
                  style: { height: "1px", backgroundColor: c.border_secondary }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-full h-1 rounded-sm",
                    style: { backgroundColor: c.body_line }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-[92%] h-1 rounded-sm",
                    style: { backgroundColor: c.body_line }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-[85%] h-1 rounded-sm",
                    style: { backgroundColor: c.body_line }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-[78%] h-1 rounded-sm",
                    style: { backgroundColor: c.body_line }
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function ViewMockupPopup({ theme }) {
  const c = get_colors(theme);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    "div",
    {
      className: "w-full h-full rounded-md overflow-hidden flex relative",
      style: { backgroundColor: c.bg },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(MockupSidebar, { c }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "flex-1 flex", style: { backgroundColor: c.bg }, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(MockupEmailList, { full_width: true, c }) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          "div",
          {
            className: "absolute inset-0 flex items-center justify-center",
            style: { backgroundColor: c.modal_overlay },
            children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
              "div",
              {
                className: "w-[56%] rounded-lg flex flex-col overflow-hidden",
                style: {
                  backgroundColor: c.bg,
                  boxShadow: c.card_shadow,
                  border: `1px solid ${c.border}`,
                  height: "70%"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
                    "div",
                    {
                      className: "h-3.5 flex items-center px-1.5 flex-shrink-0 gap-0.5",
                      style: { borderBottom: `1px solid ${c.border_secondary}` },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                          "div",
                          {
                            className: "w-1.5 h-1.5 rounded-sm",
                            style: { backgroundColor: c.text_muted }
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                          "div",
                          {
                            className: "w-1.5 h-1.5 rounded-sm",
                            style: { backgroundColor: c.text_muted }
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "flex-1" }),
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                          "div",
                          {
                            className: "w-1.5 h-1.5 rounded-sm",
                            style: { backgroundColor: c.text_muted }
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                          "div",
                          {
                            className: "w-1.5 h-1.5 rounded-sm",
                            style: { backgroundColor: c.text_muted }
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                          "div",
                          {
                            className: "w-1.5 h-1.5 rounded-sm",
                            style: { backgroundColor: c.text_muted }
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex-1 p-2 overflow-hidden", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                      "div",
                      {
                        className: "w-[75%] h-1.5 rounded-sm mb-1",
                        style: { backgroundColor: c.text_primary }
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex items-center gap-1 mb-1.5", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                        "div",
                        {
                          className: "w-2.5 h-2.5 rounded-full flex-shrink-0",
                          style: { backgroundColor: c.brand }
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                          "div",
                          {
                            className: "w-6 h-0.5 rounded-sm mb-0.5",
                            style: { backgroundColor: c.text_secondary }
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                          "div",
                          {
                            className: "w-10 h-0.5 rounded-sm",
                            style: { backgroundColor: c.text_muted }
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                      "div",
                      {
                        className: "w-full mb-1.5",
                        style: { height: "1px", backgroundColor: c.border_secondary }
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                        "div",
                        {
                          className: "w-full h-1 rounded-sm",
                          style: { backgroundColor: c.body_line }
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                        "div",
                        {
                          className: "w-[90%] h-1 rounded-sm",
                          style: { backgroundColor: c.body_line }
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                        "div",
                        {
                          className: "w-[75%] h-1 rounded-sm",
                          style: { backgroundColor: c.body_line }
                        }
                      )
                    ] })
                  ] })
                ]
              }
            )
          }
        )
      ]
    }
  );
}
function ViewMockupFullpage({ theme }) {
  const c = get_colors(theme);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    "div",
    {
      className: "w-full h-full rounded-md overflow-hidden flex",
      style: { backgroundColor: c.bg },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(MockupSidebar, { c }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex-1 flex flex-col", style: { backgroundColor: c.bg }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
            "div",
            {
              className: "h-4 flex items-center justify-between px-2 flex-shrink-0",
              style: { borderBottom: `1px solid ${c.border_secondary}` },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "svg",
                    {
                      className: "w-2 h-2",
                      fill: "none",
                      stroke: c.brand,
                      strokeLinecap: "round",
                      strokeWidth: 2.5,
                      viewBox: "0 0 8 8",
                      children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("path", { d: "M5 1L2 4L5 7" })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "div",
                    {
                      className: "w-3.5 h-1 rounded-sm",
                      style: { backgroundColor: c.brand }
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "div",
                    {
                      className: "h-0.5 w-3 rounded-sm",
                      style: { backgroundColor: c.text_muted }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "div",
                    {
                      className: "w-1.5 h-1.5 rounded-sm",
                      style: { backgroundColor: c.text_muted }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                    "div",
                    {
                      className: "w-1.5 h-1.5 rounded-sm",
                      style: { backgroundColor: c.text_muted }
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex-1 p-2.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
              "div",
              {
                className: "w-[65%] h-2 rounded-sm mb-1.5",
                style: { backgroundColor: c.text_primary }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex items-center gap-1.5 mb-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                "div",
                {
                  className: "w-3.5 h-3.5 rounded-full flex-shrink-0",
                  style: { backgroundColor: c.brand }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-8 h-1 rounded-sm mb-0.5",
                    style: { backgroundColor: c.text_secondary }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                  "div",
                  {
                    className: "w-14 h-0.5 rounded-sm",
                    style: { backgroundColor: c.text_muted }
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
              "div",
              {
                className: "w-full mb-2",
                style: { height: "1px", backgroundColor: c.border_secondary }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                "div",
                {
                  className: "w-full h-1 rounded-sm",
                  style: { backgroundColor: c.body_line }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                "div",
                {
                  className: "w-[94%] h-1 rounded-sm",
                  style: { backgroundColor: c.body_line }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                "div",
                {
                  className: "w-[88%] h-1 rounded-sm",
                  style: { backgroundColor: c.body_line }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                "div",
                {
                  className: "w-[82%] h-1 rounded-sm",
                  style: { backgroundColor: c.body_line }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                "div",
                {
                  className: "w-[75%] h-1 rounded-sm",
                  style: { backgroundColor: c.body_line }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                "div",
                {
                  className: "w-[90%] h-1 rounded-sm",
                  style: { backgroundColor: c.body_line }
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}

// src/theme_mockups/theme_mockups.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
function ThemeMockupLight() {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ViewMockupSplit, { theme: "light" });
}
function ThemeMockupDark() {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ViewMockupSplit, { theme: "dark" });
}

// src/theme_card/theme_card.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
function ThemeMockupSystem() {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "w-full h-full flex overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "w-1/2 h-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ThemeMockupLight, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "w-1/2 h-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ThemeMockupDark, {}) })
  ] });
}
function ThemeCard({
  mode,
  label,
  is_selected,
  on_select
}) {
  const get_mockup = () => {
    if (mode === "light") return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ThemeMockupLight, {});
    if (mode === "dark") return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ThemeMockupDark, {});
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ThemeMockupSystem, {});
  };
  const get_border_color = () => {
    if (mode === "light") return "1px solid #e5e5e5";
    if (mode === "dark") return "1px solid #1a1a1a";
    return "1px solid #1a1a1a";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
    "button",
    {
      className: `flex-1 p-3 rounded-[14px] border-2 transition-all cursor-pointer ${is_selected ? "border-brand bg-surf-selected" : "border-edge-secondary bg-transparent"}`,
      type: "button",
      onClick: on_select,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          "div",
          {
            className: "w-full aspect-[4/3] rounded-lg overflow-hidden mb-3",
            style: { border: get_border_color() },
            children: get_mockup()
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "text-sm font-medium text-txt-primary", children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "pointer-events-none flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Radio, { readOnly: true, checked: is_selected }) })
        ] })
      ]
    }
  );
}

// src/storage_indicator/storage_indicator.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
function join_classes6(...parts) {
  return parts.filter(Boolean).join(" ");
}
function StorageIndicator({
  is_collapsed,
  logo_src,
  logo_alt,
  on_logo_click,
  percentage,
  storage_used_label,
  usage_text,
  actions_slot,
  footer_slot,
  collapsed_footer_slot
}) {
  const show_metric = typeof percentage === "number" && !!usage_text;
  const clamped = Math.min(100, Math.max(0, percentage ?? 0));
  if (is_collapsed) {
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "px-2 pt-2 pb-3 border-t border-edge-primary flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        "button",
        {
          "aria-label": logo_alt,
          className: "w-8 h-8 flex items-center justify-center rounded-[10px] hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
          type: "button",
          onClick: on_logo_click,
          children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            "img",
            {
              alt: logo_alt,
              className: "w-6 h-auto select-none",
              decoding: "async",
              draggable: false,
              src: logo_src
            }
          )
        }
      ),
      collapsed_footer_slot
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "px-3 pt-3 pb-3 border-t border-edge-primary", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex items-center justify-between gap-2 mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        "button",
        {
          "aria-label": logo_alt,
          className: "flex items-center rounded-[8px] px-1 py-1 -mx-1 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
          type: "button",
          onClick: on_logo_click,
          children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            "img",
            {
              alt: logo_alt,
              className: "h-4 w-auto select-none",
              decoding: "async",
              draggable: false,
              src: logo_src
            }
          )
        }
      ),
      actions_slot
    ] }),
    show_metric && /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_jsx_runtime30.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex items-center justify-between text-[10px] text-txt-muted mb-1", children: [
        storage_used_label && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { children: storage_used_label }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("span", { className: "tabular-nums", children: [
          Math.round(clamped),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        "div",
        {
          className: join_classes6(
            "h-1 w-full rounded-full overflow-hidden",
            "bg-black/[0.06] dark:bg-white/[0.06]"
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            "div",
            {
              className: "h-full rounded-full",
              style: {
                width: `${clamped}%`,
                backgroundColor: "var(--text-primary)"
              }
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "text-[10px] text-txt-muted mt-1 tabular-nums", children: usage_text })
    ] }),
    footer_slot && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "mt-2", children: footer_slot })
  ] });
}

// src/empty_state/empty_state.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  min_height
}) {
  const base = "relative flex flex-col items-center justify-center h-full px-4";
  const merged = [base, min_height ? min_height : "", className || ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: merged, children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "mb-4", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: "text-sm sm:text-base font-medium text-txt-primary mb-1", children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: "text-xs sm:text-sm text-txt-muted max-w-[260px] mx-auto", children: description }),
      action && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "mt-6 flex justify-center", children: action })
    ] })
  ] });
}

// src/search_bar/search_bar.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
function SearchBar({
  value,
  on_change,
  placeholder,
  clear_label,
  className,
  search_icon,
  clear_icon
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: className ?? "mb-5", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex items-center gap-3 px-4 h-11 rounded-xl bg-surf-secondary border border-edge-secondary transition-colors duration-150", children: [
    search_icon && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "shrink-0 text-txt-muted", children: search_icon }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      "input",
      {
        type: "text",
        placeholder,
        value,
        onChange: (e) => on_change(e.target.value),
        className: "flex-1 bg-transparent outline-none text-sm text-txt-primary placeholder:text-txt-muted"
      }
    ),
    value && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      "button",
      {
        type: "button",
        "aria-label": clear_label,
        onClick: () => on_change(""),
        className: "p-1 rounded-md transition-colors hover:bg-surf-hover text-txt-muted hover:text-txt-primary",
        children: clear_icon
      }
    )
  ] }) });
}

// src/app_switcher/app_switcher.tsx
var import_react4 = require("react");
var import_framer_motion5 = require("framer-motion");
var import_jsx_runtime33 = require("react/jsx-runtime");
var GridIcon = () => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
  "svg",
  {
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      }
    )
  }
);
var CheckIcon5 = () => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
  "svg",
  {
    className: "w-3.5 h-3.5 text-txt-muted flex-shrink-0",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.5 12.75l6 6 9-13.5"
      }
    )
  }
);
function AppSwitcher({ apps, current_app_id, title }) {
  const [is_open, set_is_open] = (0, import_react4.useState)(false);
  const wrapper_ref = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    if (!is_open) return;
    const handle = (e) => {
      if (!wrapper_ref.current?.contains(e.target)) {
        set_is_open(false);
      }
    };
    const handle_key = (e) => {
      if (e.key === "Escape") set_is_open(false);
    };
    document.addEventListener("mousedown", handle);
    document.addEventListener("keydown", handle_key);
    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("keydown", handle_key);
    };
  }, [is_open]);
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { ref: wrapper_ref, className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      "button",
      {
        type: "button",
        "aria-label": title,
        title,
        onClick: () => set_is_open((v) => !v),
        className: "flex items-center justify-center w-9 h-9 rounded-[10px] text-txt-muted hover:bg-black/[0.06] dark:hover:bg-white/[0.08]",
        children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(GridIcon, {})
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_framer_motion5.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
      import_framer_motion5.motion.div,
      {
        initial: { opacity: 0, y: -4 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -4 },
        transition: { duration: 0.12 },
        className: "absolute right-0 top-full mt-2 z-30 w-72 rounded-[14px] shadow-lg overflow-hidden",
        style: {
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border-primary)"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "px-3 py-2 border-b border-edge-primary", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-[11px] uppercase tracking-wider text-txt-muted", children: title }) }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "py-1", children: apps.map((app) => {
            const is_current = app.id === current_app_id;
            return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
              "a",
              {
                href: app.url,
                target: is_current ? void 0 : "_blank",
                rel: is_current ? void 0 : "noopener noreferrer",
                className: "flex items-start gap-3 px-3 py-2 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                    "img",
                    {
                      alt: "",
                      src: app.logo_src,
                      className: "w-8 h-8 rounded-lg flex-shrink-0",
                      decoding: "async",
                      draggable: false
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-[13px] font-medium text-txt-primary truncate", children: app.name }),
                      is_current && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(CheckIcon5, {})
                    ] }),
                    app.description && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-[11px] text-txt-muted truncate", children: app.description })
                  ] })
                ]
              },
              app.id
            );
          }) })
        ]
      }
    ) })
  ] });
}

// src/auth/auth.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
var AuthLogo = ({
  src = "/text_logo.png",
  alt = "Aster",
  className = "h-12"
}) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("img", { alt, className, decoding: "async", src });
var AuthEyeIcon = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
  "svg",
  {
    className: "h-5 w-5 text-txt-muted",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        "path",
        {
          d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        "path",
        {
          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var AuthEyeSlashIcon = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  "svg",
  {
    className: "h-5 w-5 text-txt-muted",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      "path",
      {
        d: "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthInputWrapper = ({
  end_content,
  wrapper_class,
  children
}) => /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: `relative ${wrapper_class ?? ""}`, children: [
  children,
  end_content && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: end_content })
] });
var AuthCheckIcon = ({
  className = "h-3 w-3"
}) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  "svg",
  {
    className: `${className} text-white`,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 3,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { d: "M5 13l4 4L19 7", strokeLinecap: "round", strokeLinejoin: "round" })
  }
);
var AuthCheckbox = ({
  checked,
  disabled,
  onChange
}) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  "button",
  {
    "aria-checked": checked,
    className: `flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border transition-colors ${checked ? "border-brand bg-brand" : "border-edge-secondary bg-surf-card"}`,
    disabled,
    role: "checkbox",
    type: "button",
    onClick: () => onChange(!checked),
    children: checked && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(AuthCheckIcon, {})
  }
);
var AuthCard = ({
  children,
  className = "max-w-md"
}) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: `flex w-full ${className} flex-col items-center gap-6`, children });
var AuthCardBody = ({
  children,
  padding = "px-10 py-10"
}) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  "div",
  {
    className: `w-full rounded-xl border ${padding} transition-colors duration-200 bg-surf-card border-edge-primary`,
    children
  }
);
var AuthFormLabel = ({
  children
}) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("label", { className: "mb-2 block text-sm font-medium text-txt-primary", children });
var AuthFourPointStar = ({
  className = "h-7 w-7"
}) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { d: "M12 0L13.2 10.8L24 12L13.2 13.2L12 24L10.8 13.2L0 12L10.8 10.8Z" }) });
var AuthSparkleDecoration = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
  "svg",
  {
    className: "ml-1 -mt-0.5 inline-block h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        "path",
        {
          d: "M9.5 2L10.9 8.1L17 9.5L10.9 10.9L9.5 17L8.1 10.9L2 9.5L8.1 8.1L9.5 2Z",
          fill: "#FBBF24"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        "path",
        {
          d: "M18.5 11L19.3 14.2L22.5 15L19.3 15.8L18.5 19L17.7 15.8L14.5 15L17.7 14.2L18.5 11Z",
          fill: "#FBBF24",
          opacity: "0.6"
        }
      )
    ]
  }
);
var AuthShieldCheckIcon = ({ color }) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  "svg",
  {
    className: "h-5 w-5 flex-shrink-0 mt-0.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    style: { color },
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      "path",
      {
        d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthLockIcon = ({ color }) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  "svg",
  {
    className: "h-5 w-5 flex-shrink-0",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    style: { color },
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      "path",
      {
        d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthWarningIcon = ({ color }) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  "svg",
  {
    className: "h-5 w-5 flex-shrink-0 mt-0.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    style: { color },
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      "path",
      {
        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthDocumentIcon = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  "svg",
  {
    className: "h-4 w-4 mr-2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      "path",
      {
        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthDownloadIcon = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  "svg",
  {
    className: "h-4 w-4 mr-2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      "path",
      {
        d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthUserCircleIcon = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  "svg",
  {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      "path",
      {
        d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthLockClosedIcon = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  "svg",
  {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      "path",
      {
        d: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthEnvelopeIcon = () => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
  "svg",
  {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      "path",
      {
        d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var get_auth_alert_styles = (type, _is_dark) => {
  const styles = {
    error: { backgroundColor: "#dc2626", color: "#fff" },
    info: { backgroundColor: "#2563eb", color: "#fff" },
    warning: { backgroundColor: "#d97706", color: "#fff" },
    success: { backgroundColor: "#16a34a", color: "#fff" }
  };
  return styles[type];
};
var get_auth_primary_button_style = (is_dark, is_disabled) => ({
  background: is_disabled ? "var(--text-muted)" : "linear-gradient(rgb(82, 110, 249), rgb(55, 79, 235))",
  border: is_disabled ? "none" : is_dark ? "none" : "1px solid #6c6d71"
});

// src/form/form.tsx
var import_jsx_runtime35 = require("react/jsx-runtime");
function FieldLabel({ children, className, htmlFor }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "label",
    {
      htmlFor,
      className: `block text-sm font-medium mb-1.5 text-txt-primary ${className ?? ""}`,
      children
    }
  );
}
function FieldHint({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: `text-xs mt-1.5 text-txt-muted ${className ?? ""}`, children });
}
function ErrorBanner({ message, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "div",
    {
      className: `p-3 rounded-[10px] text-sm border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 ${className ?? ""}`,
      children: message
    }
  );
}

// src/input/input.tsx
var React24 = __toESM(require("react"), 1);
var import_jsx_runtime36 = require("react/jsx-runtime");
var SIZE_CLASSES = {
  sm: "aster_input_sm",
  md: "aster_input_md",
  lg: "aster_input_lg",
  xl: "aster_input_xl"
};
var STATUS_CLASSES = {
  default: "",
  success: "aster_input_success",
  error: "aster_input_error"
};
function join_classes7(...parts) {
  return parts.filter(Boolean).join(" ");
}
var Input = React24.forwardRef(
  ({ className, type, size = "lg", status = "default", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "input",
      {
        ref,
        className: join_classes7(
          "aster_input",
          SIZE_CLASSES[size],
          STATUS_CLASSES[status],
          className
        ),
        type,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/radio_group/radio_group.tsx
var React25 = __toESM(require("react"), 1);
var RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"), 1);
var import_jsx_runtime37 = require("react/jsx-runtime");
function join_classes8(...parts) {
  return parts.filter(Boolean).join(" ");
}
var RadioGroup = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
  RadioGroupPrimitive.Root,
  {
    ref,
    className: join_classes8("flex gap-3", className),
    ...props
  }
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
  RadioGroupPrimitive.Item,
  {
    ref,
    className: join_classes8(
      "flex items-center justify-center h-5 w-5 shrink-0 rounded-full border-2 transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 border-edge-secondary bg-transparent data-[state=checked]:border-brand data-[state=checked]:bg-brand",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "h-2 w-2 rounded-full bg-white" }) })
  }
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/motion_modal/motion_modal.tsx
var React26 = __toESM(require("react"), 1);
var import_framer_motion6 = require("framer-motion");
var import_jsx_runtime38 = require("react/jsx-runtime");
var cn2 = (...classes) => classes.filter(Boolean).join(" ");
var SIZE_MAX_WIDTH = {
  sm: "max-w-[360px]",
  md: "max-w-[440px]",
  lg: "max-w-[520px]",
  xl: "max-w-[640px]",
  "2xl": "max-w-[860px]"
};
function get_reduce_motion2() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function XMarkIcon3({ className, style }) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    "svg",
    {
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      style,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        "path",
        {
          d: "M6 18 18 6M6 6l12 12",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function MotionModal({
  is_open,
  on_close,
  size = "md",
  show_close_button = true,
  close_on_overlay = true,
  z_index,
  className,
  children
}) {
  const [reduce_motion, set_reduce_motion] = React26.useState(get_reduce_motion2);
  React26.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => set_reduce_motion(mq.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);
  React26.useEffect(() => {
    if (!is_open) return;
    const handle = (e) => {
      if (e.key === "Escape") on_close();
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [is_open, on_close]);
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_framer_motion6.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
    "div",
    {
      className: "fixed inset-0 flex items-center justify-center",
      style: { zIndex: z_index ?? 60 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          import_framer_motion6.motion.div,
          {
            animate: { opacity: 1 },
            className: "absolute inset-0 backdrop-blur-md",
            exit: { opacity: 0 },
            initial: reduce_motion ? false : { opacity: 0 },
            style: { backgroundColor: "var(--modal-overlay)" },
            transition: { duration: reduce_motion ? 0 : 0.2 },
            onClick: close_on_overlay ? on_close : void 0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
          import_framer_motion6.motion.div,
          {
            animate: { opacity: 1, scale: 1, y: 0 },
            className: cn2(
              "relative w-full mx-4 my-4 rounded-xl border flex flex-col max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain",
              SIZE_MAX_WIDTH[size],
              className
            ),
            exit: { opacity: 0, scale: 0.97, y: 4 },
            initial: reduce_motion ? false : { opacity: 0, scale: 0.97, y: 4 },
            style: {
              backgroundColor: "var(--modal-bg)",
              borderColor: "var(--border-primary)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)"
            },
            transition: {
              duration: reduce_motion ? 0 : 0.2,
              ease: [0.16, 1, 0.3, 1]
            },
            onClick: (e) => e.stopPropagation(),
            children: [
              show_close_button && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                "button",
                {
                  "aria-label": "Close",
                  className: "aster_modal_close absolute right-5 top-4 z-10 flex items-center justify-center rounded-[14px] transition-colors hover:bg-black/5 dark:hover:bg-white/10",
                  style: { width: 28, height: 28, padding: 0 },
                  type: "button",
                  onClick: on_close,
                  children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                    XMarkIcon3,
                    {
                      className: "text-txt-secondary",
                      style: { width: 18, height: 18, flexShrink: 0 }
                    }
                  )
                }
              ),
              children
            ]
          }
        )
      ]
    }
  ) });
}
function MotionModalHeader({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    "div",
    {
      className: cn2(
        "aster_modal_header flex flex-col px-6 pt-6 pb-5 pr-12",
        className
      ),
      ...props,
      children
    }
  );
}
function MotionModalTitle({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    "h3",
    {
      className: cn2(
        "aster_modal_title w-full text-base font-semibold leading-tight text-txt-primary",
        className
      ),
      ...props,
      children
    }
  );
}
function MotionModalDescription({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    "p",
    {
      className: cn2(
        "text-[13px] w-full mt-2.5 leading-relaxed text-txt-tertiary",
        className
      ),
      ...props,
      children
    }
  );
}
function MotionModalBody({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    "div",
    {
      className: cn2("aster_modal_body px-5 pb-5", className),
      ...props,
      children
    }
  );
}
function MotionModalFooter({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    "div",
    {
      className: cn2(
        "aster_modal_actions px-6 pb-6 pt-2 flex items-center justify-end gap-3",
        className
      ),
      ...props,
      children
    }
  );
}
function MotionModalActions({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    "div",
    {
      className: cn2(
        "aster_modal_actions px-6 pb-6 pt-2 flex items-center justify-end gap-3",
        className
      ),
      ...props,
      children
    }
  );
}

// src/confirmation_modal/confirmation_modal.tsx
var React27 = __toESM(require("react"), 1);
var import_jsx_runtime39 = require("react/jsx-runtime");
var VARIANT_MAP = {
  danger: "destructive",
  warning: "destructive",
  info: "primary"
};
function ConfirmationModal({
  is_open,
  on_confirm,
  on_cancel,
  title,
  message,
  confirm_text,
  cancel_text,
  variant = "info",
  show_dont_ask_again = false,
  dont_ask_again_label,
  on_dont_ask_again,
  saving_text
}) {
  const button_variant = VARIANT_MAP[variant];
  const [dont_ask, set_dont_ask] = React27.useState(false);
  const [is_saving, set_is_saving] = React27.useState(false);
  React27.useEffect(() => {
    if (!is_open) {
      set_dont_ask(false);
      set_is_saving(false);
    }
  }, [is_open]);
  const handle_confirm = async () => {
    if (dont_ask && on_dont_ask_again) {
      set_is_saving(true);
      try {
        await on_dont_ask_again();
      } finally {
        set_is_saving(false);
      }
    }
    on_confirm();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    Modal,
    {
      is_open,
      on_close: on_cancel,
      show_close_button: false,
      size: "sm",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(ModalHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(ModalTitle, { children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(ModalDescription, { children: message })
        ] }),
        show_dont_ask_again && dont_ask_again_label && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "px-6 pb-2", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
          "label",
          {
            className: "inline-flex items-center gap-2 cursor-pointer select-none",
            htmlFor: "aster-ui-dont-ask-again",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                Checkbox,
                {
                  checked: dont_ask,
                  id: "aster-ui-dont-ask-again",
                  onCheckedChange: (checked) => set_dont_ask(checked === true)
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                "span",
                {
                  className: "text-[13px]",
                  style: { color: "var(--text-muted)" },
                  children: dont_ask_again_label
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(ModalFooter, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
            Button,
            {
              className: "max-sm:flex-1",
              disabled: is_saving,
              variant: "outline",
              onClick: on_cancel,
              children: cancel_text
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
            Button,
            {
              className: "max-sm:flex-1",
              disabled: is_saving,
              variant: button_variant,
              onClick: handle_confirm,
              children: is_saving && saving_text ? saving_text : confirm_text
            }
          )
        ] })
      ]
    }
  );
}

// src/keyboard_shortcuts/keyboard_shortcuts_modal.tsx
var React28 = __toESM(require("react"), 1);
var import_framer_motion7 = require("framer-motion");
var import_jsx_runtime40 = require("react/jsx-runtime");
function get_reduce_motion3() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function CloseIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("path", { d: "M6 6l12 12M18 6l-12 12", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function is_section_list(value) {
  return value.length > 0 && typeof value[0].title === "string";
}
function KeyboardShortcutsModal({
  is_open,
  on_close,
  shortcuts,
  t_strings,
  reduce_motion: reduce_motion_prop,
  header_right_slot,
  disabled_overlay,
  use_two_column_grid,
  render_entry_extra
}) {
  const [reduce_motion_state, set_reduce_motion] = React28.useState(get_reduce_motion3);
  const reduce_motion = reduce_motion_prop ?? reduce_motion_state;
  const modal_ref = React28.useRef(null);
  const close_button_ref = React28.useRef(null);
  const previous_active_element = React28.useRef(null);
  React28.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => set_reduce_motion(mq.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);
  React28.useEffect(() => {
    if (is_open) {
      previous_active_element.current = document.activeElement;
      close_button_ref.current?.focus();
    } else if (previous_active_element.current instanceof HTMLElement) {
      previous_active_element.current.focus();
    }
  }, [is_open]);
  React28.useEffect(() => {
    if (!is_open) return;
    const handle_keydown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        on_close();
        return;
      }
      if (e.key === "Tab" && modal_ref.current) {
        const focusable = modal_ref.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handle_keydown, { capture: true });
    return () => {
      document.removeEventListener("keydown", handle_keydown, { capture: true });
    };
  }, [is_open, on_close]);
  const sections = React28.useMemo(() => {
    if (is_section_list(shortcuts)) return shortcuts;
    return [{ title: "", shortcuts }];
  }, [shortcuts]);
  const has_section_titles = sections.some((s) => s.title);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_framer_motion7.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
    import_framer_motion7.motion.div,
    {
      animate: { opacity: 1 },
      "aria-labelledby": "aster-keyboard-shortcuts-title",
      "aria-modal": "true",
      className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
      exit: { opacity: 0 },
      initial: reduce_motion ? false : { opacity: 0 },
      role: "dialog",
      transition: { duration: reduce_motion ? 0 : 0.15 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          import_framer_motion7.motion.div,
          {
            "aria-hidden": "true",
            className: "absolute inset-0 backdrop-blur-md",
            style: { backgroundColor: "var(--modal-overlay)" },
            onClick: on_close
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
          import_framer_motion7.motion.div,
          {
            ref: modal_ref,
            animate: { opacity: 1, scale: 1, y: 0 },
            className: "relative w-full max-w-4xl max-h-[85vh] rounded-xl border overflow-hidden",
            exit: { opacity: 0, scale: 0.96, y: 0 },
            initial: reduce_motion ? false : { opacity: 0, scale: 0.96, y: 0 },
            style: {
              backgroundColor: "var(--modal-bg)",
              borderColor: "var(--border-primary)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)"
            },
            transition: { duration: reduce_motion ? 0 : 0.15, ease: "easeOut" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
                "div",
                {
                  className: "flex items-center justify-between px-6 py-4",
                  style: { borderBottom: "1px solid var(--border-secondary)" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                      "h2",
                      {
                        className: "text-[16px] font-semibold",
                        id: "aster-keyboard-shortcuts-title",
                        style: { color: "var(--text-primary)" },
                        children: t_strings.title
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "flex items-center gap-4", children: [
                      header_right_slot,
                      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                        "button",
                        {
                          ref: close_button_ref,
                          "aria-label": t_strings.close,
                          className: "p-1.5 rounded-[14px] transition-colors hover:bg-black/[0.05] dark:hover:bg-white/[0.05]",
                          style: { color: "var(--text-muted)" },
                          onClick: on_close,
                          type: "button",
                          children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(CloseIcon, { className: "w-5 h-5" })
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
                "div",
                {
                  className: "relative overflow-y-auto px-6 py-5",
                  style: {
                    maxHeight: "calc(85vh - 130px)",
                    scrollbarWidth: "thin"
                  },
                  children: [
                    disabled_overlay,
                    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                      "div",
                      {
                        className: use_two_column_grid ?? has_section_titles ? "grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6" : "space-y-1",
                        children: sections.map((section, idx) => /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { children: [
                          section.title && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                            "h3",
                            {
                              className: "text-[11px] font-semibold uppercase tracking-wider mb-3 pb-2",
                              style: {
                                color: "var(--text-muted)",
                                borderBottom: "1px solid var(--border-secondary)"
                              },
                              children: section.title
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "space-y-1", children: section.shortcuts.map((entry, eidx) => /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
                            "div",
                            {
                              className: "flex items-center justify-between py-1.5",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                                  "span",
                                  {
                                    className: "text-[13px]",
                                    style: { color: "var(--text-secondary)" },
                                    children: entry.label
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "flex items-center gap-2 ml-4", children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "flex items-center gap-0.5", children: entry.keys.map((key, kidx) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                                    "kbd",
                                    {
                                      className: "min-w-[22px] h-[22px] px-1.5 rounded flex items-center justify-center text-[11px] font-medium",
                                      style: {
                                        backgroundColor: "var(--bg-tertiary)",
                                        color: "var(--text-secondary)",
                                        border: "1px solid var(--border-secondary)",
                                        boxShadow: "0 1px 0 var(--border-secondary)"
                                      },
                                      children: key
                                    },
                                    kidx
                                  )) }),
                                  render_entry_extra?.(entry)
                                ] })
                              ]
                            },
                            `${idx}-${eidx}`
                          )) })
                        ] }, section.title || idx))
                      }
                    )
                  ]
                }
              ),
              (t_strings.press_label || t_strings.platform_label) && /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
                "div",
                {
                  className: "px-6 py-3 flex items-center justify-between text-[12px]",
                  style: {
                    color: "var(--text-muted)",
                    borderTop: "1px solid var(--border-secondary)",
                    backgroundColor: "var(--bg-secondary)"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "flex items-center gap-4", children: t_strings.press_label && t_strings.anywhere_to_open && /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("span", { className: "flex items-center gap-2", children: [
                      t_strings.press_label,
                      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                        "kbd",
                        {
                          className: "min-w-[20px] h-[18px] px-1.5 rounded flex items-center justify-center text-[10px] font-medium",
                          style: {
                            backgroundColor: "var(--bg-tertiary)",
                            color: "var(--text-secondary)",
                            border: "1px solid var(--border-secondary)"
                          },
                          children: "?"
                        }
                      ),
                      t_strings.anywhere_to_open
                    ] }) }),
                    t_strings.platform_label && /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "flex items-center gap-2", children: [
                      t_strings.platform_prefix && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { children: t_strings.platform_prefix }),
                      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                        "span",
                        {
                          className: "px-2 py-0.5 rounded font-medium",
                          style: { backgroundColor: "var(--bg-tertiary)" },
                          children: t_strings.platform_label
                        }
                      )
                    ] })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  ) });
}

// src/dropdown_menu/dropdown_menu.tsx
var React29 = __toESM(require("react"), 1);
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"), 1);
var import_outline2 = require("@heroicons/react/24/outline");
var import_jsx_runtime41 = require("react/jsx-runtime");
function cn3(...parts) {
  return parts.filter(Boolean).join(" ");
}
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React29.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn3(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-[var(--dropdown-hover)] data-[state=open]:bg-[var(--dropdown-hover)] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_outline2.ChevronRightIcon, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React29.forwardRef(({ className, style, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn3(
      "z-[200] min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
      className
    ),
    style: {
      backgroundColor: "var(--dropdown-bg)",
      borderColor: "var(--border-secondary)",
      color: "var(--text-primary)",
      ...style
    },
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React29.forwardRef(({ className, sideOffset = 4, style, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
  DropdownMenuPrimitive.Content,
  {
    ref,
    className: cn3(
      "z-[200] max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border p-1 shadow-md",
      className
    ),
    sideOffset,
    style: {
      backgroundColor: "var(--dropdown-bg)",
      borderColor: "var(--border-secondary)",
      color: "var(--text-primary)",
      ...style
    },
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React29.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn3(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-[var(--dropdown-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React29.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    checked,
    className: cn3(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[var(--dropdown-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_outline2.CheckIcon, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React29.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn3(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[var(--dropdown-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "h-2 w-2 rounded-full bg-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React29.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn3(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React29.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn3("-mx-1 my-1 h-px", className),
    style: { backgroundColor: "var(--border-secondary)" },
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    "span",
    {
      className: cn3("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/context_menu/context_menu.tsx
var React30 = __toESM(require("react"), 1);
var import_framer_motion8 = require("framer-motion");
var import_jsx_runtime42 = require("react/jsx-runtime");
function ContextMenu({
  items,
  position,
  on_close,
  min_width = 180,
  origin = "top-left"
}) {
  const menu_ref = React30.useRef(null);
  const [focused_index, set_focused_index] = React30.useState(-1);
  const [resolved, set_resolved] = React30.useState({
    left: position.x,
    top: position.y
  });
  React30.useEffect(() => {
    if (typeof window === "undefined") return;
    const el = menu_ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let left = position.x;
    let top = position.y;
    if (origin === "top-right") {
      left = position.x - rect.width;
    }
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (left + rect.width > vw - 8) left = vw - rect.width - 8;
    if (left < 8) left = 8;
    if (top + rect.height > vh - 8) top = vh - rect.height - 8;
    if (top < 8) top = 8;
    set_resolved({ left, top });
  }, [position.x, position.y, origin]);
  React30.useEffect(() => {
    const handle_mousedown = (e) => {
      if (menu_ref.current && !menu_ref.current.contains(e.target)) {
        on_close();
      }
    };
    const handle_contextmenu = (e) => {
      if (menu_ref.current && !menu_ref.current.contains(e.target)) {
        on_close();
      }
    };
    const handle_keydown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        on_close();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        set_focused_index((i) => {
          const total = items.length;
          let next = i;
          for (let step = 0; step < total; step++) {
            next = (next + 1) % total;
            if (!items[next].disabled) return next;
          }
          return i;
        });
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        set_focused_index((i) => {
          const total = items.length;
          let next = i < 0 ? 0 : i;
          for (let step = 0; step < total; step++) {
            next = (next - 1 + total) % total;
            if (!items[next].disabled) return next;
          }
          return i;
        });
        return;
      }
      if (e.key === "Enter" || e.key === " ") {
        if (focused_index >= 0 && focused_index < items.length) {
          const item = items[focused_index];
          if (!item.disabled) {
            e.preventDefault();
            item.on_select();
            on_close();
          }
        }
      }
    };
    document.addEventListener("mousedown", handle_mousedown);
    document.addEventListener("contextmenu", handle_contextmenu, true);
    document.addEventListener("keydown", handle_keydown);
    return () => {
      document.removeEventListener("mousedown", handle_mousedown);
      document.removeEventListener("contextmenu", handle_contextmenu, true);
      document.removeEventListener("keydown", handle_keydown);
    };
  }, [items, focused_index, on_close]);
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_framer_motion8.AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    import_framer_motion8.motion.div,
    {
      ref: menu_ref,
      animate: { opacity: 1, scale: 1, y: 0 },
      className: "fixed z-[9999] py-1 rounded-xl overflow-hidden bg-modal-bg border border-edge-secondary shadow-lg",
      exit: { opacity: 0, scale: 0.95, y: -4 },
      initial: { opacity: 0, scale: 0.95, y: -8 },
      role: "menu",
      style: {
        top: resolved.top,
        left: resolved.left,
        minWidth: min_width,
        transformOrigin: origin === "top-right" ? "top right" : "top left"
      },
      transition: { duration: 0.12, ease: "easeOut" },
      onContextMenu: (e) => e.preventDefault(),
      children: items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
        "button",
        {
          className: "w-full px-3 py-2 text-left text-sm flex items-center gap-2 hover:bg-[var(--bg-hover)] disabled:opacity-50 disabled:cursor-not-allowed",
          disabled: item.disabled,
          role: "menuitem",
          style: {
            color: item.danger ? "#ef4444" : "var(--text-primary)",
            backgroundColor: focused_index === idx ? "var(--bg-hover)" : void 0
          },
          tabIndex: -1,
          type: "button",
          onClick: (e) => {
            e.stopPropagation();
            if (item.disabled) return;
            item.on_select();
            on_close();
          },
          onMouseEnter: () => set_focused_index(idx),
          children: [
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "flex items-center justify-center w-4 h-4 flex-shrink-0", children: item.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "flex-1 truncate", children: item.label }),
            item.trailing && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "ml-auto", children: item.trailing })
          ]
        },
        item.id
      ))
    }
  ) });
}

// src/full_page_loader/full_page_loader.tsx
var import_react5 = require("react");
var import_jsx_runtime43 = require("react/jsx-runtime");
var active_count = 0;
function dismiss_loader() {
  const el = document.getElementById("initial-loader");
  if (!el) return;
  el.style.transition = "opacity 0.15s ease-out";
  el.style.opacity = "0";
  setTimeout(() => el.remove(), 150);
}
function FullPageLoader() {
  const [has_static] = (0, import_react5.useState)(
    () => !!document.getElementById("initial-loader")
  );
  (0, import_react5.useEffect)(() => {
    active_count++;
    return () => {
      active_count--;
      requestAnimationFrame(() => {
        if (active_count === 0) {
          dismiss_loader();
        }
      });
    };
  }, []);
  if (has_static) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "full-page-loader bg-surf-secondary", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "full-page-loader-content", children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
      "img",
      {
        alt: "Aster",
        className: "h-7",
        draggable: false,
        src: "/text_logo.png"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "loader-spinner" })
  ] }) });
}

// src/count_badge/count_badge.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");
function CountBadge({
  count,
  show_zero = false,
  is_active = false,
  is_loading = false,
  className = ""
}) {
  if (is_loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      "span",
      {
        className: `inline-block w-5 h-3 rounded-sm animate-pulse bg-current opacity-10 ${className}`
      }
    );
  }
  if (count === 0 && !show_zero) {
    return null;
  }
  const display_value = count.toLocaleString();
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    "span",
    {
      className: `text-[12px] font-medium tabular-nums ${is_active ? "text-txt-secondary" : "text-txt-muted"} ${className}`,
      children: display_value
    }
  );
}

// src/setting_row/setting_row.tsx
var import_jsx_runtime45 = require("react/jsx-runtime");
function SettingRow({ label, description, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex items-center justify-between py-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "flex-1 pr-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-sm font-medium text-txt-primary", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-sm mt-0.5 text-txt-muted", children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "flex-shrink-0", children })
  ] });
}

// src/radio_row_with_description/radio_row_with_description.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
function RadioRowWithDescription({
  label,
  description,
  is_selected,
  on_select
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
    "button",
    {
      className: `w-full flex items-center justify-between px-4 py-3 rounded-[16px] border transition-colors ${is_selected ? "border-brand bg-surf-selected" : "border-edge-secondary bg-transparent"}`,
      type: "button",
      onClick: on_select,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "text-left", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-sm font-medium block text-txt-primary", children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "text-xs mt-0.5 block text-txt-muted", children: description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "pointer-events-none flex-shrink-0 ml-3", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Radio, { readOnly: true, checked: is_selected }) })
      ]
    }
  );
}

// src/view_mode_card/view_mode_card.tsx
var import_jsx_runtime47 = require("react/jsx-runtime");
function ViewModeCard({
  mode,
  label,
  is_selected,
  on_select,
  theme
}) {
  const get_mockup = () => {
    if (mode === "popup") return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(ViewMockupPopup, { theme });
    if (mode === "split") return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(ViewMockupSplit, { theme });
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(ViewMockupFullpage, { theme });
  };
  const get_border_color = () => {
    if (theme === "light") return "1px solid #e5e5e5";
    return "1px solid #1a1a1a";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
    "button",
    {
      className: `flex-1 p-3 rounded-[14px] border-2 transition-all cursor-pointer ${is_selected ? "border-brand bg-surf-selected" : "border-edge-secondary bg-transparent"}`,
      type: "button",
      onClick: on_select,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          "div",
          {
            className: "w-full aspect-[4/3] rounded-lg overflow-hidden mb-3",
            style: { border: get_border_color() },
            children: get_mockup()
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { className: "text-sm font-medium text-txt-primary", children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { className: "pointer-events-none flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Radio, { readOnly: true, checked: is_selected }) })
        ] })
      ]
    }
  );
}

// src/alert_dialog/alert_dialog.tsx
var React31 = __toESM(require("react"), 1);
var AlertDialogPrimitive = __toESM(require("@radix-ui/react-alert-dialog"), 1);
var import_jsx_runtime48 = require("react/jsx-runtime");
var cn4 = (...classes) => classes.filter(Boolean).join(" ");
var AlertDialog = AlertDialogPrimitive.Root;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
var AlertDialogContent = React31.forwardRef(({ className, on_overlay_click, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(AlertDialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    AlertDialogPrimitive.Overlay,
    {
      className: "fixed inset-0 z-[60] backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-150",
      style: { backgroundColor: "var(--modal-overlay)" },
      onClick: on_overlay_click
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn4(
        "fixed left-[50%] top-[50%] z-[60] grid w-full max-w-[400px] translate-x-[-50%] translate-y-[-50%] gap-4 p-6 border rounded-xl",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      ),
      style: {
        backgroundColor: "var(--modal-bg)",
        borderColor: "var(--border-primary)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)"
      },
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
  "div",
  {
    className: cn4("flex flex-col gap-3 text-center sm:text-left", className),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
  "div",
  {
    className: cn4(
      "flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React31.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn4("text-lg font-semibold", className),
    style: { color: "var(--text-primary)" },
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React31.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn4("text-sm", className),
    style: { color: "var(--text-tertiary)" },
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React31.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn4(button_variants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React31.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn4(button_variants({ variant: "outline" }), className),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

// src/external_link_warning_modal/external_link_warning_modal.tsx
var import_react6 = require("react");
var import_jsx_runtime49 = require("react/jsx-runtime");
var ANIMATION_DURATION = 150;
function ExternalLinkWarningModal({
  is_open,
  url,
  on_close,
  on_confirm,
  on_dismiss_permanently,
  title = "Leaving Aster Mail",
  description = "You're about to open an external link. Make sure you trust the destination before continuing.",
  continue_label = "Open link",
  cancel_label = "Cancel",
  dont_ask_again_label = "Don't show this warning again"
}) {
  const [dont_show_again, set_dont_show_again] = (0, import_react6.useState)(false);
  const [internal_open, set_internal_open] = (0, import_react6.useState)(false);
  const closing_ref = (0, import_react6.useRef)(false);
  (0, import_react6.useEffect)(() => {
    if (is_open) {
      closing_ref.current = false;
      set_internal_open(true);
    } else {
      closing_ref.current = false;
      set_internal_open(false);
      set_dont_show_again(false);
    }
  }, [is_open]);
  const close_with_animation = (action) => {
    if (closing_ref.current) return;
    closing_ref.current = true;
    set_internal_open(false);
    setTimeout(action, ANIMATION_DURATION);
  };
  const handle_confirm = () => {
    if (dont_show_again) {
      on_dismiss_permanently();
    }
    close_with_animation(on_confirm);
  };
  const handle_cancel = () => {
    close_with_animation(on_close);
  };
  const get_display_hostname = () => {
    if (!url) return "";
    try {
      const parsed = new URL(url);
      return parsed.hostname;
    } catch {
      return url.length > 50 ? url.slice(0, 50) + "..." : url;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    AlertDialog,
    {
      open: internal_open,
      onOpenChange: (open) => {
        if (!open) handle_cancel();
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        AlertDialogContent,
        {
          className: "gap-0 p-0 overflow-hidden max-w-[420px] max-sm:max-w-none max-sm:w-full max-sm:h-full max-sm:rounded-none max-sm:left-0 max-sm:top-0 max-sm:translate-x-0 max-sm:translate-y-0",
          on_overlay_click: handle_cancel,
          children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex h-full flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "flex-1 px-6 pt-6 pb-5 max-sm:pt-[env(safe-area-inset-top,0px)]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(AlertDialogHeader, { className: "space-y-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(AlertDialogTitle, { className: "text-[16px] font-semibold flex items-center gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: 1.5,
                      stroke: "currentColor",
                      className: "w-5 h-5",
                      style: { color: "var(--text-muted)" },
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        }
                      )
                    }
                  ),
                  title
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(AlertDialogDescription, { className: "text-[14px] leading-normal", children: description })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                "div",
                {
                  className: "mt-4 p-3 rounded-lg",
                  style: {
                    backgroundColor: "var(--bg-tertiary)",
                    border: "1px solid var(--border-secondary)"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                      "p",
                      {
                        className: "text-[13px] font-medium",
                        style: { color: "var(--text-primary)" },
                        children: get_display_hostname()
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                      "p",
                      {
                        className: "text-[12px] break-all mt-1.5 max-h-[30vh] overflow-y-auto",
                        style: { color: "var(--color-info)" },
                        children: url
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                "label",
                {
                  className: "inline-flex items-center gap-2 cursor-pointer select-none mt-5",
                  htmlFor: "external-link-dont-show-checkbox",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                      Checkbox,
                      {
                        checked: dont_show_again,
                        id: "external-link-dont-show-checkbox",
                        onCheckedChange: (checked) => set_dont_show_again(checked === true)
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                      "span",
                      {
                        className: "text-[13px]",
                        style: { color: "var(--text-muted)" },
                        children: dont_ask_again_label
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(AlertDialogFooter, { className: "flex-row gap-3 px-6 pb-6 pt-2 sm:justify-end max-sm:pb-[calc(env(safe-area-inset-bottom,0px)+1.5rem)]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                Button,
                {
                  className: "mt-0 max-sm:flex-1",
                  size: "xl",
                  variant: "outline",
                  onClick: handle_cancel,
                  children: cancel_label
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                Button,
                {
                  className: "max-sm:flex-1",
                  size: "xl",
                  variant: "depth",
                  onClick: handle_confirm,
                  children: continue_label
                }
              )
            ] })
          ] })
        }
      )
    }
  );
}

// src/motion/variants.ts
var motion_ease_standard = [
  0.25,
  0.46,
  0.45,
  0.94
];
var motion_duration_fast = 0.1;
var motion_duration_base = 0.15;
var motion_duration_slow = 0.25;
var stagger_container = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0
    }
  }
};
var fade_up_item = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: motion_duration_base,
      ease: motion_ease_standard
    }
  }
};
var page_slide_transition = {
  duration: motion_duration_base,
  ease: motion_ease_standard
};
var button_tap = {
  scale: 0.98,
  transition: { duration: motion_duration_fast }
};

// src/motion/color_vision_filters.tsx
var import_react7 = require("react");
var import_jsx_runtime50 = require("react/jsx-runtime");
function ColorVisionFilters({ mode = "none" }) {
  (0, import_react7.useEffect)(() => {
    if (typeof document === "undefined") return;
    if (mode !== "none") {
      document.body.style.filter = `url(#cv-${mode})`;
    } else {
      document.body.style.filter = "";
    }
    return () => {
      document.body.style.filter = "";
    };
  }, [mode]);
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        width: 0,
        height: 0,
        overflow: "hidden",
        pointerEvents: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("filter", { colorInterpolationFilters: "linearRGB", id: "cv-protanopia", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          "feColorMatrix",
          {
            in: "SourceGraphic",
            type: "matrix",
            values: "0.567, 0.433, 0,     0, 0\n                    0.558, 0.442, 0,     0, 0\n                    0,     0.242, 0.758, 0, 0\n                    0,     0,     0,     1, 0"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("filter", { colorInterpolationFilters: "linearRGB", id: "cv-deuteranopia", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          "feColorMatrix",
          {
            in: "SourceGraphic",
            type: "matrix",
            values: "0.625, 0.375, 0,   0, 0\n                    0.7,   0.3,   0,   0, 0\n                    0,     0.3,   0.7, 0, 0\n                    0,     0,     0,   1, 0"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("filter", { colorInterpolationFilters: "linearRGB", id: "cv-tritanopia", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          "feColorMatrix",
          {
            in: "SourceGraphic",
            type: "matrix",
            values: "0.95, 0.05,  0,     0, 0\n                    0,    0.433, 0.567, 0, 0\n                    0,    0.475, 0.525, 0, 0\n                    0,    0,     0,     1, 0"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("filter", { colorInterpolationFilters: "linearRGB", id: "cv-achromatopsia", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          "feColorMatrix",
          {
            in: "SourceGraphic",
            type: "matrix",
            values: "0.299, 0.587, 0.114, 0, 0\n                    0.299, 0.587, 0.114, 0, 0\n                    0.299, 0.587, 0.114, 0, 0\n                    0,     0,     0,     1, 0"
          }
        ) })
      ] })
    }
  );
}

// src/mobile/mobile_header.tsx
var import_react8 = require("react");
var import_jsx_runtime51 = require("react/jsx-runtime");
var MobileHeader = (0, import_react8.memo)(function MobileHeader2({
  title,
  left_action,
  right_actions,
  safe_area_top = 0,
  height = 56,
  on_title_click,
  center_content
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
    "header",
    {
      className: "sticky top-0 z-40 shrink-0 bg-[var(--bg-primary)] px-3 relative flex items-center isolate",
      style: {
        paddingTop: safe_area_top,
        height: typeof safe_area_top === "number" ? height + safe_area_top : `calc(${height}px + ${safe_area_top})`
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "flex items-center gap-1", children: left_action }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "flex-1 min-w-0 flex items-center justify-center px-2", children: center_content ? center_content : on_title_click ? /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          "button",
          {
            className: "max-w-full truncate text-lg font-semibold text-[var(--text-primary)]",
            type: "button",
            onClick: on_title_click,
            children: title
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("h1", { className: "max-w-full truncate text-lg font-semibold text-[var(--text-primary)]", children: title }) }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "flex shrink-0 items-center gap-1", children: right_actions })
      ]
    }
  );
});
var MobileHeaderIconButton = (0, import_react8.memo)(function MobileHeaderIconButton2({
  on_click,
  children,
  "aria-label": aria_label
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    "button",
    {
      "aria-label": aria_label,
      className: "flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-secondary)] active:bg-[var(--bg-tertiary)]",
      type: "button",
      onClick: on_click,
      children
    }
  );
});

// src/mobile/mobile_drawer_shell.tsx
var import_react9 = require("react");
var import_framer_motion9 = require("framer-motion");
var import_jsx_runtime52 = require("react/jsx-runtime");
function MobileDrawerShell({
  is_open,
  on_close,
  children,
  width = 320,
  max_width_vw = 85,
  safe_area_top = 0,
  safe_area_bottom = 0,
  reduce_motion = false,
  lock_body_scroll = true,
  side = "left",
  background_color = "var(--mobile-sidebar-bg, var(--bg-primary))"
}) {
  (0, import_react9.useEffect)(() => {
    if (!lock_body_scroll) return;
    if (is_open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [is_open, lock_body_scroll]);
  const closed_x = side === "left" ? -width : width;
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_jsx_runtime52.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_framer_motion9.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
      import_framer_motion9.motion.div,
      {
        animate: { opacity: 1 },
        className: "fixed inset-0 z-50 bg-black/50",
        exit: { opacity: 0 },
        initial: reduce_motion ? false : { opacity: 0 },
        transition: { duration: reduce_motion ? 0 : 0.2 },
        onClick: on_close
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
      import_framer_motion9.motion.nav,
      {
        animate: { x: is_open ? 0 : closed_x },
        className: "fixed inset-y-0 z-50 flex flex-col",
        initial: false,
        style: {
          [side]: 0,
          width,
          maxWidth: `${max_width_vw}vw`,
          paddingTop: safe_area_top,
          paddingBottom: safe_area_bottom,
          backgroundColor: background_color,
          willChange: "transform",
          pointerEvents: is_open ? "auto" : "none"
        },
        transition: reduce_motion ? { duration: 0 } : { type: "tween", duration: 0.25, ease: "easeOut" },
        children
      }
    )
  ] });
}

// src/mobile/action_sheet.tsx
var import_react10 = require("react");
var import_framer_motion10 = require("framer-motion");
var import_jsx_runtime53 = require("react/jsx-runtime");
var MobileActionSheetShell = (0, import_react10.memo)(function MobileActionSheetShell2({
  is_open,
  on_close,
  children,
  safe_area_bottom = 0,
  reduce_motion = false,
  lock_body_scroll = true,
  background_color = "var(--bg-primary)",
  max_height_vh = 85,
  z_index_backdrop = 60,
  z_index_panel = 61,
  show_handle = true
}) {
  const drag_controls = (0, import_framer_motion10.useDragControls)();
  (0, import_react10.useEffect)(() => {
    if (!lock_body_scroll) return;
    if (is_open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [is_open, lock_body_scroll]);
  const handle_drag_end = (_, info) => {
    if (info.offset.y > 100 || info.velocity.y > 300) {
      on_close();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_framer_motion10.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_jsx_runtime53.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
      import_framer_motion10.motion.div,
      {
        animate: { opacity: 1 },
        className: "fixed inset-0 bg-black/40",
        style: { zIndex: z_index_backdrop },
        exit: { opacity: 0 },
        initial: reduce_motion ? false : { opacity: 0 },
        transition: { duration: reduce_motion ? 0 : 0.2 },
        onClick: on_close
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(
      import_framer_motion10.motion.div,
      {
        animate: { y: 0 },
        className: "fixed inset-x-0 bottom-0 flex flex-col rounded-t-2xl",
        drag: "y",
        dragConstraints: { top: 0 },
        dragControls: drag_controls,
        dragElastic: 0.2,
        dragListener: false,
        exit: { y: "100%" },
        initial: reduce_motion ? false : { y: "100%" },
        style: {
          zIndex: z_index_panel,
          maxHeight: `${max_height_vh}vh`,
          backgroundColor: background_color,
          paddingBottom: safe_area_bottom
        },
        transition: reduce_motion ? { duration: 0 } : { type: "tween", duration: 0.25, ease: "easeOut" },
        onDragEnd: handle_drag_end,
        children: [
          show_handle && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
            "div",
            {
              className: "flex shrink-0 cursor-grab justify-center py-2 active:cursor-grabbing",
              style: { touchAction: "none" },
              onPointerDown: (e) => drag_controls.start(e),
              children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "h-1 w-10 rounded-full bg-[var(--text-muted)] opacity-30" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
            "div",
            {
              className: "flex-1 overflow-y-auto overscroll-contain",
              style: { WebkitOverflowScrolling: "touch" },
              children
            }
          )
        ]
      }
    )
  ] }) });
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AppSwitcher,
  AuthCard,
  AuthCardBody,
  AuthCheckIcon,
  AuthCheckbox,
  AuthDocumentIcon,
  AuthDownloadIcon,
  AuthEnvelopeIcon,
  AuthEyeIcon,
  AuthEyeSlashIcon,
  AuthFormLabel,
  AuthFourPointStar,
  AuthInputWrapper,
  AuthLockClosedIcon,
  AuthLockIcon,
  AuthLogo,
  AuthShieldCheckIcon,
  AuthSparkleDecoration,
  AuthUserCircleIcon,
  AuthWarningIcon,
  Avatar,
  AvatarGroup,
  AvatarNamed,
  AvatarWithStatus,
  Badge,
  BadgeDot,
  Banner,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
  Checkbox,
  ColorVisionFilters,
  ConfirmationModal,
  ContextMenu,
  CountBadge,
  DashboardSidebar,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  EmptyState,
  ErrorBanner,
  ExternalLinkWarningModal,
  FeatureCard,
  FieldHint,
  FieldLabel,
  FullPageLoader,
  Input,
  Kbd,
  KeyboardShortcutsModal,
  Marquee,
  MarqueeLogo,
  MarqueeTrack,
  MobileActionSheetShell,
  MobileDrawerShell,
  MobileHeader,
  MobileHeaderIconButton,
  Modal,
  ModalActions,
  ModalBody,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  MotionModal,
  MotionModalActions,
  MotionModalBody,
  MotionModalDescription,
  MotionModalFooter,
  MotionModalHeader,
  MotionModalTitle,
  Navbar,
  NavbarActions,
  NavbarCta,
  NavbarHamburger,
  NavbarInner,
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarMega,
  NavbarMegaCol,
  NavbarMegaCols,
  NavbarMegaItem,
  NavbarMegaItemSimple,
  NavbarMegaPanel,
  NavbarMobileDivider,
  NavbarMobileLink,
  NavbarMobileMenu,
  NavbarSearch,
  NavbarTrigger,
  NotFoundPage,
  PricingCard,
  Radio,
  RadioGroup,
  RadioGroupItem,
  RadioRowWithDescription,
  SearchBar,
  SegmentedToggle,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SettingRow,
  SettingsModalShell,
  SettingsNavGroup,
  SettingsNavItemButton,
  SettingsRow,
  SettingsSaveIndicator,
  SettingsSectionHeader,
  SidebarAccountMenu,
  SidebarActionButton,
  SidebarHeader,
  SidebarMoreToggle,
  SidebarNavRow,
  SidebarSectionHeader,
  SidebarSectionToggle,
  SidebarTagRow,
  SimpleToast,
  Skeleton,
  SkeletonText,
  Spinner,
  StatCard,
  StorageIndicator,
  Switch,
  TestimonialCard,
  TextRoller,
  ThemeCard,
  ThemeMockupDark,
  ThemeMockupLight,
  Tooltip,
  TooltipDotted,
  TooltipRich,
  ViewMockupFullpage,
  ViewMockupPopup,
  ViewMockupSplit,
  ViewModeCard,
  accordion_variants,
  avatar_variants,
  badge_variants,
  button_tap,
  button_variants,
  card_variants,
  dismiss_toast,
  fade_up_item,
  get_auth_alert_styles,
  get_auth_primary_button_style,
  kbd_variants,
  marquee_variants,
  motion_duration_base,
  motion_duration_fast,
  motion_duration_slow,
  motion_ease_standard,
  page_slide_transition,
  show_toast,
  stagger_container,
  switch_variants,
  use_should_reduce_motion
});

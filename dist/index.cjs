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
  AVATAR_COLORS: () => AVATAR_COLORS,
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
  ButtonSpinner: () => ButtonSpinner,
  COMPOSE_ICON_PATHS: () => COMPOSE_ICON_PATHS,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardIcon: () => CardIcon,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  ColorVisionFilters: () => ColorVisionFilters,
  ComposeIcon: () => ComposeIcon,
  ComposeToolbarLayout: () => ComposeToolbarLayout,
  ConfirmationModal: () => ConfirmationModal,
  ContextMenu: () => ContextMenu,
  CountBadge: () => CountBadge,
  DashboardSidebar: () => DashboardSidebar,
  DraftStatusIndicator: () => DraftStatusIndicator,
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
  EMOJI_PICKER_MAX_HEIGHT: () => EMOJI_PICKER_MAX_HEIGHT,
  EMOJI_PICKER_WIDTH: () => EMOJI_PICKER_WIDTH,
  EmojiPicker: () => EmojiPicker,
  EmojiPopover: () => EmojiPopover,
  EmptyState: () => EmptyState,
  ErrorBanner: () => ErrorBanner,
  ExternalLinkWarningModal: () => ExternalLinkWarningModal,
  FORMAT_BAR_STORAGE_KEY: () => FORMAT_BAR_STORAGE_KEY,
  FeatureCard: () => FeatureCard,
  FieldHint: () => FieldHint,
  FieldLabel: () => FieldLabel,
  FullPageLoader: () => FullPageLoader,
  Input: () => Input,
  Kbd: () => Kbd,
  KeyboardShortcutsModal: () => KeyboardShortcutsModal,
  LinkPopover: () => LinkPopover,
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
  ToolbarButton: () => ToolbarButton,
  ToolbarDivider: () => ToolbarDivider,
  Tooltip: () => Tooltip,
  TooltipDotted: () => TooltipDotted,
  TooltipRich: () => TooltipRich,
  UnderlineTabs: () => UnderlineTabs,
  UpgradeBtn: () => UpgradeBtn,
  UpgradeOverlay: () => UpgradeOverlay,
  ViewMockupFullpage: () => ViewMockupFullpage,
  ViewMockupPopup: () => ViewMockupPopup,
  ViewMockupSplit: () => ViewMockupSplit,
  ViewModeCard: () => ViewModeCard,
  accordion_variants: () => accordion_variants,
  apply_skin_tone: () => apply_skin_tone,
  avatar_variants: () => avatar_variants,
  badge_variants: () => badge_variants,
  button_tap: () => button_tap,
  button_variants: () => button_variants,
  card_variants: () => card_variants,
  clamp_emoji_picker_position: () => clamp_emoji_picker_position,
  dismiss_toast: () => dismiss_toast,
  emoji_categories: () => emoji_categories,
  fade_up_item: () => fade_up_item,
  get_active_locale: () => get_active_locale,
  get_all_emojis: () => get_all_emojis,
  get_auth_alert_styles: () => get_auth_alert_styles,
  get_auth_primary_button_style: () => get_auth_primary_button_style,
  get_avatar_color: () => get_avatar_color,
  get_avatar_color_index: () => get_avatar_color_index,
  get_avatar_key: () => get_avatar_key,
  get_contrast_text: () => get_contrast_text,
  get_initials: () => get_initials,
  has_open_overlay_layer: () => has_open_overlay_layer,
  hash_utf16: () => hash_utf16,
  is_composing: () => is_composing,
  is_emoji_renderable: () => is_emoji_renderable,
  is_tone_capable: () => is_tone_capable,
  is_top_overlay_layer: () => is_top_overlay_layer,
  kbd_variants: () => kbd_variants,
  marquee_variants: () => marquee_variants,
  motion_duration_base: () => motion_duration_base,
  motion_duration_fast: () => motion_duration_fast,
  motion_duration_slow: () => motion_duration_slow,
  motion_ease_standard: () => motion_ease_standard,
  normalize_link_url: () => normalize_link_url,
  page_slide_transition: () => page_slide_transition,
  push_overlay_layer: () => push_overlay_layer,
  read_format_bar_preference: () => read_format_bar_preference,
  remove_overlay_layer: () => remove_overlay_layer,
  search_emojis: () => search_emojis,
  show_toast: () => show_toast,
  skin_tone_modifiers: () => skin_tone_modifiers,
  skin_tone_swatches: () => skin_tone_swatches,
  skin_tones: () => skin_tones,
  stagger_container: () => stagger_container,
  store_format_bar_preference: () => store_format_bar_preference,
  switch_variants: () => switch_variants,
  tone_capable_emoji: () => tone_capable_emoji,
  use_anchored_layer: () => use_anchored_layer,
  use_escape_layer: () => use_escape_layer,
  use_overlay_layer: () => use_overlay_layer,
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
        className: join_classes(
          "aster_spinner",
          "animate-spin",
          size_classes[size],
          className
        ),
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
var ButtonSpinner = React.forwardRef(({ size = "sm", centered = false, className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      ref,
      className: join_classes(
        "aster_btn_spinner",
        centered && "aster_btn_spinner_centered",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, { size })
    }
  );
});
ButtonSpinner.displayName = "ButtonSpinner";

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
      depth_destructive: "aster_btn_depth_destructive",
      upgrade: "aster_btn_upgrade"
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
    loading_position = "edge",
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
    const has_label = React2.Children.toArray(children).length > 0;
    const spinner_size = size === "sm" ? "xs" : "sm";
    const centered_spinner = !has_label || size === "icon" || loading_position === "replace";
    let content = children;
    if (is_loading && !as_child) {
      content = centered_spinner ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Spinner, { size: spinner_size }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ButtonSpinner, { size: spinner_size })
      ] });
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
    dismiss_label = "Dismiss",
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
          "aria-label": dismiss_label,
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

// src/avatar/identity.ts
var AVATAR_COLORS = [
  "#1e88e5",
  "#e53935",
  "#43a047",
  "#fb8c00",
  "#8e24aa",
  "#d81b60",
  "#00acc1",
  "#5e35b1",
  "#f4511e",
  "#00897b",
  "#3949ab",
  "#c0ca33",
  "#6d4c41",
  "#039be5",
  "#7cb342",
  "#ff6f00"
];
function hash_utf16(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i) | 0;
  }
  return hash;
}
function get_avatar_key(email, name) {
  return email || name || "?";
}
function get_avatar_color_index(identifier) {
  return Math.abs(hash_utf16(identifier)) % AVATAR_COLORS.length;
}
function get_avatar_color(identifier) {
  return AVATAR_COLORS[get_avatar_color_index(identifier)];
}
function to_linear(channel) {
  return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
}
var AVATAR_LUMINANCE_CROSSOVER = 0.55;
function get_relative_luminance(hex) {
  const normalized = hex.replace("#", "");
  const full = normalized.length === 3 ? normalized.split("").map((c) => c + c).join("") : normalized;
  if (full.length !== 6 || /[^0-9a-fA-F]/.test(full)) return null;
  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;
  return 0.2126 * to_linear(r) + 0.7152 * to_linear(g) + 0.0722 * to_linear(b);
}
function get_contrast_text(hex) {
  const luminance = get_relative_luminance(hex);
  if (luminance === null) return "#ffffff";
  return luminance > AVATAR_LUMINANCE_CROSSOVER ? "#111827" : "#ffffff";
}
function get_active_locale() {
  if (typeof document === "undefined") return void 0;
  return document.documentElement.lang || void 0;
}
function to_graphemes(value, locale) {
  const segmenter_ctor = Intl.Segmenter;
  if (typeof segmenter_ctor === "function") {
    const segmenter = new segmenter_ctor(locale, { granularity: "grapheme" });
    const out = [];
    for (const part of segmenter.segment(value)) {
      out.push(part.segment);
    }
    return out;
  }
  return Array.from(value);
}
function first_grapheme(value, locale) {
  const graphemes = to_graphemes(value, locale);
  return graphemes.length > 0 ? graphemes[0] : "";
}
function get_initials(name, email, locale) {
  const from_name = (name || "").trim();
  if (from_name) {
    const words = from_name.split(/\s+/).filter(Boolean);
    if (words.length >= 2) {
      const first = first_grapheme(words[0], locale);
      const last = first_grapheme(words[words.length - 1], locale);
      return (first + last).toLocaleUpperCase(locale);
    }
    return first_grapheme(words[0], locale).toLocaleUpperCase(locale);
  }
  const local_part = (email || "").trim().split("@")[0];
  if (local_part) {
    return first_grapheme(local_part, locale).toLocaleUpperCase(locale);
  }
  return "?";
}

// src/modal/modal.tsx
var React11 = __toESM(require("react"), 1);
var import_jsx_runtime11 = require("react/jsx-runtime");
var DEFAULT_MODAL_Z_INDEX = 100;
var open_modal_stack = [];
var topmost_modal_token = (stack) => {
  let top = null;
  for (const entry of stack) {
    if (top === null || entry.z_index >= top.z_index) {
      top = entry;
    }
  }
  return top === null ? null : top.token;
};
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
    close_on_escape = true,
    close_label = "Close",
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
    const stack_token = React11.useRef(null);
    if (stack_token.current === null) {
      stack_token.current = /* @__PURE__ */ Symbol("aster_modal");
    }
    const resolved_z_index = z_index ?? DEFAULT_MODAL_Z_INDEX;
    React11.useEffect(() => {
      if (!resolved_open) return;
      const token = stack_token.current;
      open_modal_stack.push({ token, z_index: resolved_z_index });
      return () => {
        const index = open_modal_stack.findIndex(
          (entry) => entry.token === token
        );
        if (index !== -1) {
          open_modal_stack.splice(index, 1);
        }
      };
    }, [resolved_open, resolved_z_index]);
    React11.useEffect(() => {
      if (!resolved_open || !close_on_escape) return;
      const token = stack_token.current;
      const handle_escape = (e) => {
        if (e.key !== "Escape") return;
        if (topmost_modal_token(open_modal_stack) !== token) return;
        on_close();
      };
      document.addEventListener("keydown", handle_escape);
      return () => document.removeEventListener("keydown", handle_escape);
    }, [resolved_open, close_on_escape, on_close]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: overlay_classes, onClick: handle_overlay_click, style: overlay_style, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: modal_classes, ref, style, ...props, children: [
      show_close_button && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "button",
        {
          type: "button",
          "aria-label": close_label,
          className: "aster_modal_close aster_modal_close_floating",
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
  ({ title, icon, on_close, close_label = "Close", className, children, ...props }, ref) => {
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
          "aria-label": close_label,
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

// src/upgrade_btn/upgrade_btn.tsx
var React24 = __toESM(require("react"), 1);
var import_jsx_runtime31 = require("react/jsx-runtime");
function SparkleIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    "svg",
    {
      width: "13",
      height: "13",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("path", { d: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("path", { d: "M5 17l.75 2.25L8 20l-2.25.75L5 23l-.75-2.25L2 20l2.25-.75L5 17z" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("path", { d: "M19 3l.5 1.5L21 5l-1.5.5L19 7l-.5-1.5L17 5l1.5-.5L19 3z" })
      ]
    }
  );
}
var UpgradeBtn = React24.forwardRef(
  ({ label, children, size = "md", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(Button, { ref, variant: "upgrade", size, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(SparkleIcon, {}),
      children ?? label ?? "Upgrade"
    ] });
  }
);
UpgradeBtn.displayName = "UpgradeBtn";

// src/upgrade_overlay/upgrade_overlay.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
function UpgradeOverlay({
  badge_label = "Upgrade plan",
  message,
  cta_label = "Upgrade",
  on_upgrade,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: ["aster_upgrade_overlay", className].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Badge, { color: "blue", children: badge_label }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "aster_upgrade_overlay_message", children: message }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(UpgradeBtn, { size: "sm", onClick: on_upgrade, children: cta_label })
  ] });
}

// src/empty_state/empty_state.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: merged, children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "mb-4", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-sm sm:text-base font-medium text-txt-primary mb-1", children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "text-xs sm:text-sm text-txt-muted max-w-[260px] mx-auto", children: description }),
      action && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "mt-6 flex justify-center", children: action })
    ] })
  ] });
}

// src/search_bar/search_bar.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
function SearchBar({
  value,
  on_change,
  placeholder,
  clear_label,
  className,
  search_icon,
  clear_icon
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: className ?? "mb-5", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex items-center gap-3 px-4 h-11 rounded-xl bg-surf-secondary border border-edge-secondary transition-colors duration-150", children: [
    search_icon && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "shrink-0 text-txt-muted", children: search_icon }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      "input",
      {
        type: "text",
        placeholder,
        value,
        onChange: (e) => on_change(e.target.value),
        className: "flex-1 bg-transparent outline-none text-sm text-txt-primary placeholder:text-txt-muted"
      }
    ),
    value && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
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
var import_jsx_runtime35 = require("react/jsx-runtime");
var GridIcon = () => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
  "svg",
  {
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      }
    )
  }
);
var CheckIcon5 = () => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
  "svg",
  {
    className: "w-3.5 h-3.5 text-txt-muted flex-shrink-0",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { ref: wrapper_ref, className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      "button",
      {
        type: "button",
        "aria-label": title,
        title,
        onClick: () => set_is_open((v) => !v),
        className: "flex items-center justify-center w-9 h-9 rounded-[10px] text-txt-muted hover:bg-black/[0.06] dark:hover:bg-white/[0.08]",
        children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(GridIcon, {})
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_framer_motion5.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "px-3 py-2 border-b border-edge-primary", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "text-[11px] uppercase tracking-wider text-txt-muted", children: title }) }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "py-1", children: apps.map((app) => {
            const is_current = app.id === current_app_id;
            return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
              "a",
              {
                href: app.url,
                target: is_current ? void 0 : "_blank",
                rel: is_current ? void 0 : "noopener noreferrer",
                className: "flex items-start gap-3 px-3 py-2 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
                    "img",
                    {
                      alt: "",
                      src: app.logo_src,
                      className: "w-8 h-8 rounded-lg flex-shrink-0",
                      decoding: "async",
                      draggable: false
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-[13px] font-medium text-txt-primary truncate", children: app.name }),
                      is_current && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(CheckIcon5, {})
                    ] }),
                    app.description && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "text-[11px] text-txt-muted truncate", children: app.description })
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
var import_jsx_runtime36 = require("react/jsx-runtime");
var AuthLogo = ({
  src = "/text_logo.png",
  alt = "Aster",
  className = "h-12"
}) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { alt, className, decoding: "async", src });
var AuthEyeIcon = () => /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
  "svg",
  {
    className: "h-5 w-5 text-txt-muted",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        "path",
        {
          d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
var AuthEyeSlashIcon = () => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  "svg",
  {
    className: "h-5 w-5 text-txt-muted",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
}) => /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: `relative ${wrapper_class ?? ""}`, children: [
  children,
  end_content && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: end_content })
] });
var AuthCheckIcon = ({
  className = "h-3 w-3"
}) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  "svg",
  {
    className: `${className} text-white`,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 3,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("path", { d: "M5 13l4 4L19 7", strokeLinecap: "round", strokeLinejoin: "round" })
  }
);
var AuthCheckbox = ({
  checked,
  disabled,
  onChange
}) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  "button",
  {
    "aria-checked": checked,
    className: `flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border transition-colors ${checked ? "border-brand bg-brand" : "border-edge-secondary bg-surf-card"}`,
    disabled,
    role: "checkbox",
    type: "button",
    onClick: () => onChange(!checked),
    children: checked && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(AuthCheckIcon, {})
  }
);
var AuthCard = ({
  children,
  className = "max-w-md"
}) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: `flex w-full ${className} flex-col items-center gap-6`, children });
var AuthCardBody = ({
  children,
  padding = "px-10 py-10"
}) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  "div",
  {
    className: `w-full rounded-xl border ${padding} transition-colors duration-200 bg-surf-card border-edge-primary`,
    children
  }
);
var AuthFormLabel = ({
  children
}) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("label", { className: "mb-2 block text-sm font-medium text-txt-primary", children });
var AuthFourPointStar = ({
  className = "h-7 w-7"
}) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("path", { d: "M12 0L13.2 10.8L24 12L13.2 13.2L12 24L10.8 13.2L0 12L10.8 10.8Z" }) });
var AuthSparkleDecoration = () => /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
  "svg",
  {
    className: "ml-1 -mt-0.5 inline-block h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        "path",
        {
          d: "M9.5 2L10.9 8.1L17 9.5L10.9 10.9L9.5 17L8.1 10.9L2 9.5L8.1 8.1L9.5 2Z",
          fill: "#FBBF24"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
var AuthShieldCheckIcon = ({ color }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  "svg",
  {
    className: "h-5 w-5 flex-shrink-0 mt-0.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    style: { color },
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "path",
      {
        d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthLockIcon = ({ color }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  "svg",
  {
    className: "h-5 w-5 flex-shrink-0",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    style: { color },
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "path",
      {
        d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthWarningIcon = ({ color }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  "svg",
  {
    className: "h-5 w-5 flex-shrink-0 mt-0.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    style: { color },
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "path",
      {
        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthDocumentIcon = () => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  "svg",
  {
    className: "h-4 w-4 mr-2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "path",
      {
        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthDownloadIcon = () => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  "svg",
  {
    className: "h-4 w-4 mr-2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "path",
      {
        d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthUserCircleIcon = () => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  "svg",
  {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "path",
      {
        d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthLockClosedIcon = () => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  "svg",
  {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "path",
      {
        d: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthEnvelopeIcon = () => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
  "svg",
  {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
var import_jsx_runtime37 = require("react/jsx-runtime");
function FieldLabel({ children, className, htmlFor }) {
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    "label",
    {
      htmlFor,
      className: `block text-sm font-medium mb-1.5 text-txt-primary ${className ?? ""}`,
      children
    }
  );
}
function FieldHint({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { className: `text-xs mt-1.5 text-txt-muted ${className ?? ""}`, children });
}
function ErrorBanner({ message, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    "div",
    {
      className: `p-3 rounded-[10px] text-sm border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 ${className ?? ""}`,
      children: message
    }
  );
}

// src/input/input.tsx
var React25 = __toESM(require("react"), 1);
var import_jsx_runtime38 = require("react/jsx-runtime");
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
var Input = React25.forwardRef(
  ({ className, type, size = "lg", status = "default", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
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
var React26 = __toESM(require("react"), 1);
var RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"), 1);
var import_jsx_runtime39 = require("react/jsx-runtime");
function join_classes8(...parts) {
  return parts.filter(Boolean).join(" ");
}
var RadioGroup = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
  RadioGroupPrimitive.Root,
  {
    ref,
    className: join_classes8("flex gap-3", className),
    ...props
  }
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
  RadioGroupPrimitive.Item,
  {
    ref,
    className: join_classes8(
      "flex items-center justify-center h-5 w-5 shrink-0 rounded-full border-2 transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 border-edge-secondary bg-transparent data-[state=checked]:border-brand data-[state=checked]:bg-brand",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "h-2 w-2 rounded-full bg-white" }) })
  }
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/motion_modal/motion_modal.tsx
var React27 = __toESM(require("react"), 1);
var import_framer_motion6 = require("framer-motion");
var import_jsx_runtime40 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "svg",
    {
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      style,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
  const [reduce_motion, set_reduce_motion] = React27.useState(get_reduce_motion2);
  React27.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => set_reduce_motion(mq.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);
  React27.useEffect(() => {
    if (!is_open) return;
    const handle = (e) => {
      if (e.key === "Escape") on_close();
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [is_open, on_close]);
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_framer_motion6.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
    "div",
    {
      className: "fixed inset-0 flex items-center justify-center",
      style: { zIndex: z_index ?? 60 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
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
              show_close_button && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                "button",
                {
                  "aria-label": "Close",
                  className: "aster_modal_close absolute right-5 top-4 z-10 flex items-center justify-center rounded-[14px] transition-colors hover:bg-black/5 dark:hover:bg-white/10",
                  style: { width: 28, height: 28, padding: 0 },
                  type: "button",
                  onClick: on_close,
                  children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
var React28 = __toESM(require("react"), 1);
var import_jsx_runtime41 = require("react/jsx-runtime");
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
  const [dont_ask, set_dont_ask] = React28.useState(false);
  const [is_saving, set_is_saving] = React28.useState(false);
  React28.useEffect(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
    Modal,
    {
      is_open,
      on_close: on_cancel,
      show_close_button: false,
      size: "sm",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(ModalHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(ModalTitle, { children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(ModalDescription, { children: message })
        ] }),
        show_dont_ask_again && dont_ask_again_label && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "px-6 pb-2", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
          "label",
          {
            className: "inline-flex items-center gap-2 cursor-pointer select-none",
            htmlFor: "aster-ui-dont-ask-again",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                Checkbox,
                {
                  checked: dont_ask,
                  id: "aster-ui-dont-ask-again",
                  onCheckedChange: (checked) => set_dont_ask(checked === true)
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(ModalFooter, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
            Button,
            {
              className: "max-sm:flex-1",
              disabled: is_saving,
              variant: "outline",
              onClick: on_cancel,
              children: cancel_text
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
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
var React29 = __toESM(require("react"), 1);
var import_framer_motion7 = require("framer-motion");
var import_jsx_runtime42 = require("react/jsx-runtime");
function get_reduce_motion3() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function CloseIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", { d: "M6 6l12 12M18 6l-12 12", strokeLinecap: "round", strokeLinejoin: "round" })
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
  const [reduce_motion_state, set_reduce_motion] = React29.useState(get_reduce_motion3);
  const reduce_motion = reduce_motion_prop ?? reduce_motion_state;
  const modal_ref = React29.useRef(null);
  const close_button_ref = React29.useRef(null);
  const previous_active_element = React29.useRef(null);
  React29.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => set_reduce_motion(mq.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);
  React29.useEffect(() => {
    if (is_open) {
      previous_active_element.current = document.activeElement;
      close_button_ref.current?.focus();
    } else if (previous_active_element.current instanceof HTMLElement) {
      previous_active_element.current.focus();
    }
  }, [is_open]);
  React29.useEffect(() => {
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
  const sections = React29.useMemo(() => {
    if (is_section_list(shortcuts)) return shortcuts;
    return [{ title: "", shortcuts }];
  }, [shortcuts]);
  const has_section_titles = sections.some((s) => s.title);
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_framer_motion7.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          import_framer_motion7.motion.div,
          {
            "aria-hidden": "true",
            className: "absolute inset-0 backdrop-blur-md",
            style: { backgroundColor: "var(--modal-overlay)" },
            onClick: on_close
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
                "div",
                {
                  className: "flex items-center justify-between px-6 py-4",
                  style: { borderBottom: "1px solid var(--border-secondary)" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                      "h2",
                      {
                        className: "text-[16px] font-semibold",
                        id: "aster-keyboard-shortcuts-title",
                        style: { color: "var(--text-primary)" },
                        children: t_strings.title
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex items-center gap-4", children: [
                      header_right_slot,
                      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                        "button",
                        {
                          ref: close_button_ref,
                          "aria-label": t_strings.close,
                          className: "p-1.5 rounded-[14px] transition-colors hover:bg-black/[0.05] dark:hover:bg-white/[0.05]",
                          style: { color: "var(--text-muted)" },
                          onClick: on_close,
                          type: "button",
                          children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CloseIcon, { className: "w-5 h-5" })
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
                "div",
                {
                  className: "relative overflow-y-auto px-6 py-5",
                  style: {
                    maxHeight: "calc(85vh - 130px)",
                    scrollbarWidth: "thin"
                  },
                  children: [
                    disabled_overlay,
                    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                      "div",
                      {
                        className: use_two_column_grid ?? has_section_titles ? "grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6" : "space-y-1",
                        children: sections.map((section, idx) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { children: [
                          section.title && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
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
                          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "space-y-1", children: section.shortcuts.map((entry, eidx) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
                            "div",
                            {
                              className: "flex items-center justify-between py-1.5",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
                                  "span",
                                  {
                                    className: "text-[13px]",
                                    style: { color: "var(--text-secondary)" },
                                    children: entry.label
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex items-center gap-2 ml-4", children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "flex items-center gap-0.5", children: entry.keys.map((key, kidx) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
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
              (t_strings.press_label || t_strings.platform_label) && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
                "div",
                {
                  className: "px-6 py-3 flex items-center justify-between text-[12px]",
                  style: {
                    color: "var(--text-muted)",
                    borderTop: "1px solid var(--border-secondary)",
                    backgroundColor: "var(--bg-secondary)"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "flex items-center gap-4", children: t_strings.press_label && t_strings.anywhere_to_open && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("span", { className: "flex items-center gap-2", children: [
                      t_strings.press_label,
                      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
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
                    t_strings.platform_label && /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex items-center gap-2", children: [
                      t_strings.platform_prefix && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: t_strings.platform_prefix }),
                      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
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
var React30 = __toESM(require("react"), 1);
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"), 1);
var import_outline2 = require("@heroicons/react/24/outline");
var import_jsx_runtime43 = require("react/jsx-runtime");
function cn3(...parts) {
  return parts.filter(Boolean).join(" ");
}
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React30.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_outline2.ChevronRightIcon, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React30.forwardRef(({ className, style, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
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
var DropdownMenuContent = React30.forwardRef(({ className, sideOffset = 4, style, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
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
var DropdownMenuItem = React30.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
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
var DropdownMenuCheckboxItem = React30.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_outline2.CheckIcon, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React30.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn3(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[var(--dropdown-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "h-2 w-2 rounded-full bg-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React30.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
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
var DropdownMenuSeparator = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    "span",
    {
      className: cn3("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/context_menu/context_menu.tsx
var React31 = __toESM(require("react"), 1);
var import_framer_motion8 = require("framer-motion");
var import_jsx_runtime44 = require("react/jsx-runtime");
function ContextMenu({
  items,
  position,
  on_close,
  min_width = 180,
  origin = "top-left"
}) {
  const menu_ref = React31.useRef(null);
  const [focused_index, set_focused_index] = React31.useState(-1);
  const [resolved, set_resolved] = React31.useState({
    left: position.x,
    top: position.y
  });
  React31.useEffect(() => {
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
  React31.useEffect(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_framer_motion8.AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
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
      children: items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
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
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "flex items-center justify-center w-4 h-4 flex-shrink-0", children: item.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "flex-1 truncate", children: item.label }),
            item.trailing && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "ml-auto", children: item.trailing })
          ]
        },
        item.id
      ))
    }
  ) });
}

// src/full_page_loader/full_page_loader.tsx
var import_react5 = require("react");
var import_jsx_runtime45 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "full-page-loader bg-surf-secondary", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "full-page-loader-content", children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      "img",
      {
        alt: "Aster",
        className: "h-7",
        draggable: false,
        src: "/text_logo.png"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "loader-spinner" })
  ] }) });
}

// src/count_badge/count_badge.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
function CountBadge({
  count,
  show_zero = false,
  is_active = false,
  is_loading = false,
  className = ""
}) {
  if (is_loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    "span",
    {
      className: `text-[12px] font-medium tabular-nums ${is_active ? "text-txt-secondary" : "text-txt-muted"} ${className}`,
      children: display_value
    }
  );
}

// src/tabs/underline_tabs.tsx
var import_jsx_runtime47 = require("react/jsx-runtime");
function UnderlineTabs({
  items,
  active,
  on_change,
  label,
  className = "",
  format_count = (value) => value.toLocaleString()
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    "div",
    {
      "aria-label": label,
      className: `aster_tabs ${className}`.trim(),
      role: "group",
      children: items.map((item) => {
        const is_active = item.key === active;
        return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
          "button",
          {
            "aria-pressed": is_active,
            className: "aster_tab",
            "data-active": is_active ? "" : void 0,
            type: "button",
            onClick: () => on_change(item.key),
            onMouseDown: (event) => event.preventDefault(),
            children: [
              item.icon ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { "aria-hidden": "true", className: "aster_tab_icon", children: item.icon }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { className: "aster_tab_label", children: item.label }),
              typeof item.count === "number" ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { className: "aster_tab_count", children: format_count(item.count) }) : null,
              is_active ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { "aria-hidden": "true", className: "aster_tab_bar" }) : null
            ]
          },
          item.key
        );
      })
    }
  );
}

// src/setting_row/setting_row.tsx
var import_jsx_runtime48 = require("react/jsx-runtime");
function SettingRow({ label, description, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex items-center justify-between py-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", { className: "flex-1 pr-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm font-medium text-txt-primary", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("p", { className: "text-sm mt-0.5 text-txt-muted", children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "flex-shrink-0", children })
  ] });
}

// src/radio_row_with_description/radio_row_with_description.tsx
var import_jsx_runtime49 = require("react/jsx-runtime");
function RadioRowWithDescription({
  label,
  description,
  is_selected,
  on_select
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
    "button",
    {
      className: `w-full flex items-center justify-between px-4 py-3 rounded-[16px] border transition-colors ${is_selected ? "border-brand bg-surf-selected" : "border-edge-secondary bg-transparent"}`,
      type: "button",
      onClick: on_select,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", { className: "text-left", children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "text-sm font-medium block text-txt-primary", children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "text-xs mt-0.5 block text-txt-muted", children: description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "pointer-events-none flex-shrink-0 ml-3", children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Radio, { readOnly: true, checked: is_selected }) })
      ]
    }
  );
}

// src/view_mode_card/view_mode_card.tsx
var import_jsx_runtime50 = require("react/jsx-runtime");
function ViewModeCard({
  mode,
  label,
  is_selected,
  on_select,
  theme
}) {
  const get_mockup = () => {
    if (mode === "popup") return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ViewMockupPopup, { theme });
    if (mode === "split") return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ViewMockupSplit, { theme });
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ViewMockupFullpage, { theme });
  };
  const get_border_color = () => {
    if (theme === "light") return "1px solid #e5e5e5";
    return "1px solid #1a1a1a";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
    "button",
    {
      className: `flex-1 p-3 rounded-[14px] border-2 transition-all cursor-pointer ${is_selected ? "border-brand bg-surf-selected" : "border-edge-secondary bg-transparent"}`,
      type: "button",
      onClick: on_select,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          "div",
          {
            className: "w-full aspect-[4/3] rounded-lg overflow-hidden mb-3",
            style: { border: get_border_color() },
            children: get_mockup()
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "text-sm font-medium text-txt-primary", children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "pointer-events-none flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Radio, { readOnly: true, checked: is_selected }) })
        ] })
      ]
    }
  );
}

// src/alert_dialog/alert_dialog.tsx
var React32 = __toESM(require("react"), 1);
var AlertDialogPrimitive = __toESM(require("@radix-ui/react-alert-dialog"), 1);
var import_jsx_runtime51 = require("react/jsx-runtime");
var cn4 = (...classes) => classes.filter(Boolean).join(" ");
var AlertDialog = AlertDialogPrimitive.Root;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
var AlertDialogContent = React32.forwardRef(({ className, on_overlay_click, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(AlertDialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    AlertDialogPrimitive.Overlay,
    {
      className: "fixed inset-0 z-[60] backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-150",
      style: { backgroundColor: "var(--modal-overlay)" },
      onClick: on_overlay_click
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
}) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
}) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
var AlertDialogTitle = React32.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn4("text-lg font-semibold", className),
    style: { color: "var(--text-primary)" },
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React32.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn4("text-sm", className),
    style: { color: "var(--text-tertiary)" },
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React32.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn4(button_variants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React32.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
var import_jsx_runtime52 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
    AlertDialog,
    {
      open: internal_open,
      onOpenChange: (open) => {
        if (!open) handle_cancel();
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
        AlertDialogContent,
        {
          className: "gap-0 p-0 overflow-hidden max-w-[420px] max-sm:max-w-none max-sm:w-full max-sm:h-full max-sm:rounded-none max-sm:left-0 max-sm:top-0 max-sm:translate-x-0 max-sm:translate-y-0",
          on_overlay_click: handle_cancel,
          children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex h-full flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "flex-1 px-6 pt-6 pb-5 max-sm:pt-[env(safe-area-inset-top,0px)]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(AlertDialogHeader, { className: "space-y-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(AlertDialogTitle, { className: "text-[16px] font-semibold flex items-center gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
                      children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(AlertDialogDescription, { className: "text-[14px] leading-normal", children: description })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
                "div",
                {
                  className: "mt-4 p-3 rounded-lg",
                  style: {
                    backgroundColor: "var(--bg-tertiary)",
                    border: "1px solid var(--border-secondary)"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                      "p",
                      {
                        className: "text-[13px] font-medium",
                        style: { color: "var(--text-primary)" },
                        children: get_display_hostname()
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
                "label",
                {
                  className: "inline-flex items-center gap-2 cursor-pointer select-none mt-5",
                  htmlFor: "external-link-dont-show-checkbox",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                      Checkbox,
                      {
                        checked: dont_show_again,
                        id: "external-link-dont-show-checkbox",
                        onCheckedChange: (checked) => set_dont_show_again(checked === true)
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(AlertDialogFooter, { className: "flex-row gap-3 px-6 pb-6 pt-2 sm:justify-end max-sm:pb-[calc(env(safe-area-inset-bottom,0px)+1.5rem)]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                Button,
                {
                  className: "mt-0 max-sm:flex-1",
                  size: "xl",
                  variant: "outline",
                  onClick: handle_cancel,
                  children: cancel_label
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
var import_jsx_runtime53 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("filter", { colorInterpolationFilters: "linearRGB", id: "cv-protanopia", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
          "feColorMatrix",
          {
            in: "SourceGraphic",
            type: "matrix",
            values: "0.567, 0.433, 0,     0, 0\r\n                    0.558, 0.442, 0,     0, 0\r\n                    0,     0.242, 0.758, 0, 0\r\n                    0,     0,     0,     1, 0"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("filter", { colorInterpolationFilters: "linearRGB", id: "cv-deuteranopia", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
          "feColorMatrix",
          {
            in: "SourceGraphic",
            type: "matrix",
            values: "0.625, 0.375, 0,   0, 0\r\n                    0.7,   0.3,   0,   0, 0\r\n                    0,     0.3,   0.7, 0, 0\r\n                    0,     0,     0,   1, 0"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("filter", { colorInterpolationFilters: "linearRGB", id: "cv-tritanopia", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
          "feColorMatrix",
          {
            in: "SourceGraphic",
            type: "matrix",
            values: "0.95, 0.05,  0,     0, 0\r\n                    0,    0.433, 0.567, 0, 0\r\n                    0,    0.475, 0.525, 0, 0\r\n                    0,    0,     0,     1, 0"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("filter", { colorInterpolationFilters: "linearRGB", id: "cv-achromatopsia", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
          "feColorMatrix",
          {
            in: "SourceGraphic",
            type: "matrix",
            values: "0.299, 0.587, 0.114, 0, 0\r\n                    0.299, 0.587, 0.114, 0, 0\r\n                    0.299, 0.587, 0.114, 0, 0\r\n                    0,     0,     0,     1, 0"
          }
        ) })
      ] })
    }
  );
}

// src/mobile/mobile_header.tsx
var import_react8 = require("react");
var import_jsx_runtime54 = require("react/jsx-runtime");
var MobileHeader = (0, import_react8.memo)(function MobileHeader2({
  title,
  left_action,
  right_actions,
  safe_area_top = 0,
  height = 56,
  on_title_click,
  center_content
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(
    "header",
    {
      className: "sticky top-0 z-40 shrink-0 bg-[var(--bg-primary)] px-3 relative flex items-center isolate",
      style: {
        paddingTop: safe_area_top,
        height: typeof safe_area_top === "number" ? height + safe_area_top : `calc(${height}px + ${safe_area_top})`
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "flex items-center gap-1", children: left_action }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "flex-1 min-w-0 flex items-center justify-center px-2", children: center_content ? center_content : on_title_click ? /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
          "button",
          {
            className: "max-w-full truncate text-lg font-semibold text-[var(--text-primary)]",
            type: "button",
            onClick: on_title_click,
            children: title
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("h1", { className: "max-w-full truncate text-lg font-semibold text-[var(--text-primary)]", children: title }) }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "flex shrink-0 items-center gap-1", children: right_actions })
      ]
    }
  );
});
var MobileHeaderIconButton = (0, import_react8.memo)(function MobileHeaderIconButton2({
  on_click,
  children,
  "aria-label": aria_label
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
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
var import_jsx_runtime55 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(import_jsx_runtime55.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_framer_motion9.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
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
var import_jsx_runtime56 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_framer_motion10.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(import_jsx_runtime56.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
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
          show_handle && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
            "div",
            {
              className: "flex shrink-0 cursor-grab justify-center py-2 active:cursor-grabbing",
              style: { touchAction: "none" },
              onPointerDown: (e) => drag_controls.start(e),
              children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "h-1 w-10 rounded-full bg-[var(--text-muted)] opacity-30" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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

// src/compose/toolbar.tsx
var React33 = __toESM(require("react"), 1);
var import_jsx_runtime57 = require("react/jsx-runtime");
var COMPOSE_ICON_PATHS = {
  formatting: "M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zm2.5-6.13L13.87 11h-3.74L12 6.67z",
  plain_text: "M4 5h16v2H4V5zm0 4h16v2H4V9zm0 4h10v2H4v-2zm0 4h10v2H4v-2z",
  attach: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z",
  link: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z",
  emoji: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z",
  trash: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
  bold: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z",
  italic: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z",
  underline: "M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z",
  strikethrough: "M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z",
  bullet_list: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z",
  numbered_list: "M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z",
  quote: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z",
  remove_formatting: "M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z",
  saved: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
};
function ComposeIcon({ name, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className: className ? `aster_compose_icon ${className}` : "aster_compose_icon",
      fill: "currentColor",
      focusable: "false",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("path", { d: COMPOSE_ICON_PATHS[name] })
    }
  );
}
var ToolbarButton = React33.forwardRef(
  ({ onClick, children, disabled, active, title, tooltip_position = "top", className, ...props }, ref) => {
    const button = /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
      "button",
      {
        ref,
        className: className ? `aster_compose_tool ${className}` : "aster_compose_tool",
        "data-active": active || void 0,
        disabled,
        type: "button",
        onClick,
        onMouseDown: (e) => e.preventDefault(),
        ...props,
        children
      }
    );
    if (!title) return button;
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Tooltip, { position: tooltip_position, tip: title, children: button });
  }
);
ToolbarButton.displayName = "ToolbarButton";
function ToolbarDivider() {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "aster_compose_divider" });
}
function ComposeToolbarLayout({
  format_bar,
  format_bar_label,
  primary,
  tools,
  end,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: className ? `aster_compose_toolbar ${className}` : "aster_compose_toolbar", children: [
    format_bar ? /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { "aria-label": format_bar_label, className: "aster_compose_format_row", role: "toolbar", children: format_bar }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { className: "aster_compose_bar", children: [
      primary,
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "aster_compose_tools", children: tools }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", { className: "aster_compose_end", children: end })
    ] })
  ] });
}

// src/compose/anchored_layer.ts
var import_react11 = require("react");
var FORMAT_BAR_STORAGE_KEY = "aster_compose_format_bar_open";
function use_anchored_layer(open, anchor_ref, reposition, on_dismiss) {
  const reposition_ref = (0, import_react11.useRef)(reposition);
  const dismiss_ref = (0, import_react11.useRef)(on_dismiss);
  (0, import_react11.useEffect)(() => {
    reposition_ref.current = reposition;
    dismiss_ref.current = on_dismiss;
  });
  (0, import_react11.useLayoutEffect)(() => {
    if (!open) return;
    const update = () => {
      const node = anchor_ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const off_screen = rect.bottom <= 0 || rect.top >= window.innerHeight || rect.right <= 0 || rect.left >= window.innerWidth;
      if (off_screen) {
        dismiss_ref.current();
        return;
      }
      reposition_ref.current(rect);
    };
    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, true);
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule, true);
      window.removeEventListener("resize", schedule);
    };
  }, [open, anchor_ref]);
}
function read_format_bar_preference() {
  try {
    return localStorage.getItem(FORMAT_BAR_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}
function store_format_bar_preference(open) {
  try {
    localStorage.setItem(FORMAT_BAR_STORAGE_KEY, open ? "1" : "0");
  } catch {
    return;
  }
}

// src/compose/overlay_layer.ts
var import_react12 = require("react");
var REGISTRY_KEY = /* @__PURE__ */ Symbol.for("aster.ui.overlay_layer_registry");
function get_registry() {
  const scope = globalThis;
  if (!scope[REGISTRY_KEY]) {
    scope[REGISTRY_KEY] = { stack: [], blocking: /* @__PURE__ */ new Set() };
  }
  return scope[REGISTRY_KEY];
}
var overlay_layer_stack = get_registry().stack;
var blocking_overlay_layers = get_registry().blocking;
function push_overlay_layer(id, blocking = true) {
  const index = overlay_layer_stack.indexOf(id);
  if (index !== -1) overlay_layer_stack.splice(index, 1);
  overlay_layer_stack.push(id);
  if (blocking) blocking_overlay_layers.add(id);
}
function remove_overlay_layer(id) {
  const index = overlay_layer_stack.indexOf(id);
  if (index !== -1) overlay_layer_stack.splice(index, 1);
  blocking_overlay_layers.delete(id);
}
function is_top_overlay_layer(id) {
  return overlay_layer_stack[overlay_layer_stack.length - 1] === id;
}
function has_open_overlay_layer() {
  return blocking_overlay_layers.size > 0;
}
function use_overlay_layer(is_open, label = "overlay", blocking = true) {
  const id_ref = (0, import_react12.useRef)(null);
  if (id_ref.current === null) id_ref.current = Symbol(label);
  (0, import_react12.useEffect)(() => {
    if (!is_open) return;
    const id = id_ref.current;
    push_overlay_layer(id, blocking);
    return () => remove_overlay_layer(id);
  }, [is_open, blocking]);
  return id_ref.current;
}
function use_escape_layer(is_open, on_close, label = "overlay", blocking = true) {
  const id = use_overlay_layer(is_open, label, blocking);
  const close_ref = (0, import_react12.useRef)(on_close);
  (0, import_react12.useEffect)(() => {
    close_ref.current = on_close;
  }, [on_close]);
  (0, import_react12.useEffect)(() => {
    if (!is_open) return;
    const handle_escape = (e) => {
      if (e.key !== "Escape") return;
      if (!is_top_overlay_layer(id)) return;
      e.preventDefault();
      close_ref.current();
    };
    document.addEventListener("keydown", handle_escape);
    return () => document.removeEventListener("keydown", handle_escape);
  }, [is_open, id]);
  return id;
}

// src/compose/link_url.ts
var SCHEME_PREFIX = /^[a-z][a-z0-9+.-]*:/i;
var ALLOWED_PROTOCOLS = ["http:", "https:", "mailto:"];
function parse_allowed(candidate) {
  try {
    const parsed = new URL(candidate);
    return ALLOWED_PROTOCOLS.includes(parsed.protocol) ? parsed : null;
  } catch {
    return null;
  }
}
function normalize_link_url(raw) {
  const value = raw.trim();
  if (!value) return null;
  if (SCHEME_PREFIX.test(value)) {
    return parse_allowed(value) ? value : null;
  }
  if (value.includes("@") && !value.includes("/") && !value.includes(" ")) {
    return parse_allowed(`mailto:${value}`) ? `mailto:${value}` : null;
  }
  return parse_allowed(`https://${value}`) ? `https://${value}` : null;
}
function is_composing(event) {
  const native = event.nativeEvent ?? event;
  return native.isComposing === true || native.keyCode === 229;
}

// src/compose/emoji_picker.tsx
var import_react13 = require("react");
var import_framer_motion11 = require("framer-motion");

// src/compose/emoji/smileys.ts
var smileys = {
  label: "Smileys & People",
  icon: "\u{1F60A}",
  entries: [
    { emoji: "\u{1F600}", keywords: ["grinning", "happy", "smile"] },
    { emoji: "\u{1F603}", keywords: ["grinning", "big eyes", "happy"] },
    { emoji: "\u{1F604}", keywords: ["grinning", "squinting", "happy", "laugh"] },
    { emoji: "\u{1F601}", keywords: ["beaming", "grin", "happy"] },
    { emoji: "\u{1F606}", keywords: ["squinting", "laugh", "happy"] },
    { emoji: "\u{1F605}", keywords: ["sweat", "grinning", "nervous"] },
    { emoji: "\u{1F923}", keywords: ["rofl", "rolling", "laughing", "lol"] },
    { emoji: "\u{1F602}", keywords: ["joy", "crying", "laughing", "tears", "lol"] },
    { emoji: "\u{1F642}", keywords: ["slightly smiling", "ok"] },
    { emoji: "\u{1F643}", keywords: ["upside down", "sarcasm"] },
    { emoji: "\u{1F609}", keywords: ["wink", "winking"] },
    { emoji: "\u{1F60A}", keywords: ["blush", "smiling", "happy", "warm"] },
    { emoji: "\u{1F607}", keywords: ["angel", "halo", "innocent"] },
    { emoji: "\u{1F970}", keywords: ["love", "hearts", "adore", "smiling"] },
    { emoji: "\u{1F60D}", keywords: ["heart eyes", "love", "crush"] },
    { emoji: "\u{1F929}", keywords: ["star struck", "excited", "wow"] },
    { emoji: "\u{1F618}", keywords: ["kiss", "blowing kiss", "love"] },
    { emoji: "\u{1F617}", keywords: ["kissing", "pucker"] },
    { emoji: "\u263A\uFE0F", keywords: ["smiling", "relaxed", "happy"] },
    { emoji: "\u{1F61A}", keywords: ["kissing", "closed eyes"] },
    { emoji: "\u{1F619}", keywords: ["kissing", "smiling eyes"] },
    { emoji: "\u{1F972}", keywords: ["smiling", "tear", "sad", "proud"] },
    { emoji: "\u{1F60B}", keywords: ["yummy", "delicious", "tongue"] },
    { emoji: "\u{1F61B}", keywords: ["tongue", "playful"] },
    { emoji: "\u{1F61C}", keywords: ["wink", "tongue", "crazy", "zany"] },
    { emoji: "\u{1F92A}", keywords: ["zany", "crazy", "wild", "goofy"] },
    { emoji: "\u{1F61D}", keywords: ["squinting", "tongue"] },
    { emoji: "\u{1F911}", keywords: ["money", "rich", "dollar"] },
    { emoji: "\u{1F917}", keywords: ["hug", "hugging", "open hands"] },
    { emoji: "\u{1F92D}", keywords: ["hand over mouth", "oops", "giggle"] },
    { emoji: "\u{1FAE2}", keywords: ["open eyes", "hand over mouth", "surprise"] },
    { emoji: "\u{1FAE3}", keywords: ["peeking", "shy", "hiding"] },
    { emoji: "\u{1F92B}", keywords: ["shh", "quiet", "secret", "shush"] },
    { emoji: "\u{1F914}", keywords: ["thinking", "hmm", "consider"] },
    { emoji: "\u{1FAE1}", keywords: ["salute", "respect"] },
    { emoji: "\u{1F910}", keywords: ["zipper mouth", "quiet", "secret"] },
    { emoji: "\u{1F928}", keywords: ["raised eyebrow", "skeptical", "suspicious"] },
    { emoji: "\u{1F610}", keywords: ["neutral", "blank", "indifferent"] },
    { emoji: "\u{1F611}", keywords: ["expressionless", "blank"] },
    { emoji: "\u{1F636}", keywords: ["no mouth", "silent", "speechless"] },
    { emoji: "\u{1FAE5}", keywords: ["dotted line", "invisible", "hidden"] },
    { emoji: "\u{1F60F}", keywords: ["smirk", "smug", "sly"] },
    { emoji: "\u{1F612}", keywords: ["unamused", "annoyed", "meh"] },
    { emoji: "\u{1F644}", keywords: ["eye roll", "annoyed", "whatever"] },
    { emoji: "\u{1F62C}", keywords: ["grimace", "awkward", "nervous"] },
    { emoji: "\u{1FAE8}", keywords: ["shaking", "shock"] },
    { emoji: "\u{1F62E}\u200D\u{1F4A8}", keywords: ["exhale", "sigh", "relief"] },
    { emoji: "\u{1F925}", keywords: ["lying", "pinocchio", "liar"] },
    { emoji: "\u{1FAE0}", keywords: ["melting", "dissolving", "hot"] },
    { emoji: "\u{1F60C}", keywords: ["relieved", "peaceful", "calm"] },
    { emoji: "\u{1F614}", keywords: ["pensive", "sad", "thoughtful"] },
    { emoji: "\u{1F62A}", keywords: ["sleepy", "tired", "tear"] },
    { emoji: "\u{1F924}", keywords: ["drooling", "hungry", "want"] },
    { emoji: "\u{1F634}", keywords: ["sleeping", "zzz", "tired"] },
    { emoji: "\u{1F637}", keywords: ["mask", "sick", "medical"] },
    { emoji: "\u{1F912}", keywords: ["thermometer", "sick", "fever"] },
    { emoji: "\u{1F915}", keywords: ["bandage", "hurt", "injured"] },
    { emoji: "\u{1F922}", keywords: ["nauseated", "sick", "green"] },
    { emoji: "\u{1F92E}", keywords: ["vomiting", "sick", "puke"] },
    { emoji: "\u{1F975}", keywords: ["hot", "sweating", "heat"] },
    { emoji: "\u{1F976}", keywords: ["cold", "freezing", "ice"] },
    { emoji: "\u{1F974}", keywords: ["woozy", "dizzy", "drunk"] },
    { emoji: "\u{1F635}", keywords: ["dizzy", "knocked out"] },
    { emoji: "\u{1F635}\u200D\u{1F4AB}", keywords: ["dizzy", "spiral", "confused"] },
    { emoji: "\u{1F92F}", keywords: ["exploding head", "mind blown", "shocked"] },
    { emoji: "\u{1F920}", keywords: ["cowboy", "hat", "yeehaw"] },
    { emoji: "\u{1F973}", keywords: ["party", "celebrate", "birthday", "hat"] },
    { emoji: "\u{1F978}", keywords: ["disguise", "glasses", "nose"] },
    { emoji: "\u{1F60E}", keywords: ["sunglasses", "cool", "confident"] },
    { emoji: "\u{1F913}", keywords: ["nerd", "glasses", "geek"] },
    { emoji: "\u{1F9D0}", keywords: ["monocle", "inspect", "curious"] },
    { emoji: "\u{1F615}", keywords: ["confused", "puzzled"] },
    { emoji: "\u{1FAE4}", keywords: ["diagonal mouth", "unsure", "meh"] },
    { emoji: "\u{1F61F}", keywords: ["worried", "concerned"] },
    { emoji: "\u{1F641}", keywords: ["slightly frowning", "sad"] },
    { emoji: "\u2639\uFE0F", keywords: ["frowning", "sad"] },
    { emoji: "\u{1F62E}", keywords: ["open mouth", "surprised"] },
    { emoji: "\u{1F62F}", keywords: ["hushed", "surprised", "stunned"] },
    { emoji: "\u{1F632}", keywords: ["astonished", "shocked", "wow"] },
    { emoji: "\u{1F633}", keywords: ["flushed", "embarrassed", "surprised"] },
    { emoji: "\u{1F97A}", keywords: ["pleading", "puppy eyes", "please"] },
    { emoji: "\u{1F979}", keywords: ["holding back tears", "touched", "grateful"] },
    { emoji: "\u{1F626}", keywords: ["frowning", "open mouth"] },
    { emoji: "\u{1F627}", keywords: ["anguished", "shocked"] },
    { emoji: "\u{1F628}", keywords: ["fearful", "scared", "afraid"] },
    { emoji: "\u{1F630}", keywords: ["anxious", "sweat", "worried"] },
    { emoji: "\u{1F625}", keywords: ["sad", "relieved", "disappointed"] },
    { emoji: "\u{1F622}", keywords: ["crying", "sad", "tear"] },
    { emoji: "\u{1F62D}", keywords: ["sobbing", "crying", "wailing", "sad"] },
    { emoji: "\u{1F631}", keywords: ["screaming", "fear", "horror", "scared"] },
    { emoji: "\u{1F616}", keywords: ["confounded", "frustrated"] },
    { emoji: "\u{1F623}", keywords: ["persevering", "struggling"] },
    { emoji: "\u{1F61E}", keywords: ["disappointed", "sad"] },
    { emoji: "\u{1F613}", keywords: ["downcast", "sweat", "sad"] },
    { emoji: "\u{1F629}", keywords: ["weary", "tired", "exhausted"] },
    { emoji: "\u{1F62B}", keywords: ["tired", "frustrated"] },
    { emoji: "\u{1F971}", keywords: ["yawning", "bored", "tired"] },
    { emoji: "\u{1F624}", keywords: ["huffing", "angry", "frustrated", "triumph"] },
    { emoji: "\u{1F621}", keywords: ["angry", "pouting", "mad", "rage"] },
    { emoji: "\u{1F620}", keywords: ["angry", "mad", "grumpy"] },
    { emoji: "\u{1F92C}", keywords: ["swearing", "cursing", "angry", "symbols"] },
    { emoji: "\u{1F608}", keywords: ["devil", "evil", "smiling", "horns"] },
    { emoji: "\u{1F47F}", keywords: ["angry devil", "imp", "evil"] },
    { emoji: "\u{1F480}", keywords: ["skull", "dead", "death", "skeleton"] },
    { emoji: "\u2620\uFE0F", keywords: ["skull crossbones", "death", "danger"] },
    { emoji: "\u{1F4A9}", keywords: ["poop", "poo", "pile"] },
    { emoji: "\u{1F921}", keywords: ["clown", "joker", "funny"] },
    { emoji: "\u{1F479}", keywords: ["ogre", "monster", "demon"] },
    { emoji: "\u{1F47A}", keywords: ["goblin", "tengu", "mask"] },
    { emoji: "\u{1F47B}", keywords: ["ghost", "halloween", "spooky"] },
    { emoji: "\u{1F47D}", keywords: ["alien", "ufo", "extraterrestrial"] },
    { emoji: "\u{1F47E}", keywords: ["alien monster", "space invader", "game"] },
    { emoji: "\u{1F916}", keywords: ["robot", "machine", "bot"] },
    { emoji: "\u{1F63A}", keywords: ["cat", "smiling", "happy"] },
    { emoji: "\u{1F638}", keywords: ["cat", "grinning", "happy"] },
    { emoji: "\u{1F639}", keywords: ["cat", "tears", "joy", "laugh"] },
    { emoji: "\u{1F63B}", keywords: ["cat", "heart eyes", "love"] },
    { emoji: "\u{1F63C}", keywords: ["cat", "smirk", "wry"] },
    { emoji: "\u{1F63D}", keywords: ["cat", "kiss"] },
    { emoji: "\u{1F640}", keywords: ["cat", "weary", "surprised"] },
    { emoji: "\u{1F63F}", keywords: ["cat", "crying", "sad"] },
    { emoji: "\u{1F63E}", keywords: ["cat", "pouting", "angry"] },
    { emoji: "\u{1F648}", keywords: ["monkey", "see no evil"] },
    { emoji: "\u{1F649}", keywords: ["monkey", "hear no evil"] },
    { emoji: "\u{1F64A}", keywords: ["monkey", "speak no evil"] }
  ]
};

// src/compose/emoji/gestures.ts
var gestures = {
  label: "Hands & Body",
  icon: "\u{1F44B}",
  entries: [
    { emoji: "\u{1F44B}", keywords: ["wave", "hello", "bye", "hand"] },
    { emoji: "\u{1F91A}", keywords: ["raised back", "hand", "stop"] },
    { emoji: "\u{1F590}\uFE0F", keywords: ["hand", "fingers", "splayed"] },
    { emoji: "\u270B", keywords: ["raised hand", "high five", "stop"] },
    { emoji: "\u{1F596}", keywords: ["vulcan", "spock", "star trek"] },
    { emoji: "\u{1FAF1}", keywords: ["rightward hand"] },
    { emoji: "\u{1FAF2}", keywords: ["leftward hand"] },
    { emoji: "\u{1FAF3}", keywords: ["palm down hand"] },
    { emoji: "\u{1FAF4}", keywords: ["palm up hand"] },
    { emoji: "\u{1FAF7}", keywords: ["leftward pushing hand"] },
    { emoji: "\u{1FAF8}", keywords: ["rightward pushing hand"] },
    { emoji: "\u{1F44C}", keywords: ["ok", "perfect", "fine"] },
    { emoji: "\u{1F90C}", keywords: ["pinched fingers", "italian"] },
    { emoji: "\u{1F90F}", keywords: ["pinching", "small", "tiny", "little"] },
    { emoji: "\u270C\uFE0F", keywords: ["victory", "peace", "two"] },
    { emoji: "\u{1F91E}", keywords: ["crossed fingers", "luck", "hope"] },
    { emoji: "\u{1FAF0}", keywords: ["hand with index finger and thumb crossed"] },
    { emoji: "\u{1F91F}", keywords: ["love you", "ily", "hand"] },
    { emoji: "\u{1F918}", keywords: ["rock on", "metal", "horns"] },
    { emoji: "\u{1F919}", keywords: ["call me", "shaka", "hang loose"] },
    { emoji: "\u{1F448}", keywords: ["point left", "direction"] },
    { emoji: "\u{1F449}", keywords: ["point right", "direction"] },
    { emoji: "\u{1F446}", keywords: ["point up", "direction"] },
    { emoji: "\u{1F595}", keywords: ["middle finger"] },
    { emoji: "\u{1F447}", keywords: ["point down", "direction"] },
    { emoji: "\u261D\uFE0F", keywords: ["index", "point up"] },
    { emoji: "\u{1FAF5}", keywords: ["index pointing at viewer", "you"] },
    { emoji: "\u{1F44D}", keywords: ["thumbs up", "like", "approve", "yes"] },
    { emoji: "\u{1F44E}", keywords: ["thumbs down", "dislike", "no"] },
    { emoji: "\u270A", keywords: ["raised fist", "power"] },
    { emoji: "\u{1F44A}", keywords: ["fist bump", "punch"] },
    { emoji: "\u{1F91B}", keywords: ["left fist bump"] },
    { emoji: "\u{1F91C}", keywords: ["right fist bump"] },
    { emoji: "\u{1F44F}", keywords: ["clap", "applause", "bravo"] },
    { emoji: "\u{1F64C}", keywords: ["raising hands", "hooray", "celebrate"] },
    { emoji: "\u{1FAF6}", keywords: ["heart hands", "love"] },
    { emoji: "\u{1F450}", keywords: ["open hands", "jazz hands"] },
    { emoji: "\u{1F932}", keywords: ["palms up", "prayer", "cupped"] },
    { emoji: "\u{1F91D}", keywords: ["handshake", "deal", "agreement"] },
    { emoji: "\u{1F64F}", keywords: ["pray", "please", "thank you", "namaste"] },
    { emoji: "\u270D\uFE0F", keywords: ["writing", "hand"] },
    { emoji: "\u{1F485}", keywords: ["nail polish", "beauty", "nails"] },
    { emoji: "\u{1F933}", keywords: ["selfie", "phone", "photo"] },
    { emoji: "\u{1F4AA}", keywords: ["muscle", "strong", "flex", "bicep"] },
    { emoji: "\u{1F9BE}", keywords: ["mechanical arm", "prosthetic", "robot"] },
    { emoji: "\u{1F9BF}", keywords: ["mechanical leg", "prosthetic"] },
    { emoji: "\u{1F9B5}", keywords: ["leg", "kick"] },
    { emoji: "\u{1F9B6}", keywords: ["foot", "kick"] },
    { emoji: "\u{1F442}", keywords: ["ear", "listen", "hear"] },
    { emoji: "\u{1F9BB}", keywords: ["ear with hearing aid"] },
    { emoji: "\u{1F443}", keywords: ["nose", "smell"] },
    { emoji: "\u{1F9E0}", keywords: ["brain", "smart", "think", "intelligent"] },
    { emoji: "\u{1FAC0}", keywords: ["anatomical heart", "organ"] },
    { emoji: "\u{1FAC1}", keywords: ["lungs", "breathe"] },
    { emoji: "\u{1F9B7}", keywords: ["tooth", "dentist"] },
    { emoji: "\u{1F9B4}", keywords: ["bone", "skeleton"] },
    { emoji: "\u{1F440}", keywords: ["eyes", "look", "see", "watching"] },
    { emoji: "\u{1F441}\uFE0F", keywords: ["eye", "see", "look"] },
    { emoji: "\u{1F445}", keywords: ["tongue", "taste", "lick"] },
    { emoji: "\u{1F444}", keywords: ["mouth", "lips", "kiss"] },
    { emoji: "\u{1FAE6}", keywords: ["biting lip", "nervous", "flirt"] },
    { emoji: "\u{1F476}", keywords: ["baby", "infant", "child"] },
    { emoji: "\u{1F9D2}", keywords: ["child", "kid"] },
    { emoji: "\u{1F466}", keywords: ["boy", "male", "child"] },
    { emoji: "\u{1F467}", keywords: ["girl", "female", "child"] },
    { emoji: "\u{1F9D1}", keywords: ["person", "adult"] },
    { emoji: "\u{1F471}", keywords: ["blond", "blonde", "person"] },
    { emoji: "\u{1F468}", keywords: ["man", "male", "guy"] },
    { emoji: "\u{1F9D4}", keywords: ["beard", "man"] },
    { emoji: "\u{1F469}", keywords: ["woman", "female", "lady"] },
    { emoji: "\u{1F9D3}", keywords: ["older person", "elder"] },
    { emoji: "\u{1F474}", keywords: ["old man", "grandfather"] },
    { emoji: "\u{1F475}", keywords: ["old woman", "grandmother"] },
    { emoji: "\u{1F64D}", keywords: ["person frowning", "sad"] },
    { emoji: "\u{1F64E}", keywords: ["person pouting", "annoyed"] },
    { emoji: "\u{1F645}", keywords: ["person gesturing no", "stop"] },
    { emoji: "\u{1F646}", keywords: ["person gesturing ok"] },
    { emoji: "\u{1F481}", keywords: ["person tipping hand", "info"] },
    { emoji: "\u{1F64B}", keywords: ["person raising hand", "question"] },
    { emoji: "\u{1F9CF}", keywords: ["deaf person"] },
    { emoji: "\u{1F647}", keywords: ["person bowing", "sorry"] },
    { emoji: "\u{1F926}", keywords: ["facepalm", "smh", "disbelief"] },
    { emoji: "\u{1F937}", keywords: ["shrug", "idk", "dunno", "whatever"] },
    { emoji: "\u{1F9D1}\u200D\u2695\uFE0F", keywords: ["health worker", "doctor", "nurse"] },
    { emoji: "\u{1F9D1}\u200D\u{1F393}", keywords: ["student", "graduate"] },
    { emoji: "\u{1F9D1}\u200D\u{1F3EB}", keywords: ["teacher", "professor"] },
    {
      emoji: "\u{1F9D1}\u200D\u{1F4BB}",
      keywords: ["technologist", "programmer", "coder", "developer"]
    },
    { emoji: "\u{1F9D1}\u200D\u{1F52C}", keywords: ["scientist", "researcher"] },
    { emoji: "\u{1F9D1}\u200D\u{1F3A8}", keywords: ["artist", "painter"] },
    { emoji: "\u{1F9D1}\u200D\u{1F680}", keywords: ["astronaut", "space"] },
    { emoji: "\u{1F9D1}\u200D\u{1F692}", keywords: ["firefighter"] },
    { emoji: "\u{1F46E}", keywords: ["police", "officer", "cop"] },
    { emoji: "\u{1F575}\uFE0F", keywords: ["detective", "spy"] },
    { emoji: "\u{1F482}", keywords: ["guard", "royal"] },
    { emoji: "\u{1F977}", keywords: ["ninja", "stealth"] },
    { emoji: "\u{1F477}", keywords: ["construction worker", "builder"] },
    { emoji: "\u{1FAC5}", keywords: ["person with crown", "royalty"] },
    { emoji: "\u{1F934}", keywords: ["prince", "royalty"] },
    { emoji: "\u{1F478}", keywords: ["princess", "royalty"] },
    { emoji: "\u{1F9D9}", keywords: ["mage", "wizard", "magic"] },
    { emoji: "\u{1F9DA}", keywords: ["fairy", "magic"] },
    { emoji: "\u{1F9DB}", keywords: ["vampire", "dracula"] },
    { emoji: "\u{1F9DC}", keywords: ["merperson", "mermaid"] },
    { emoji: "\u{1F9DD}", keywords: ["elf", "fantasy"] },
    { emoji: "\u{1F9DE}", keywords: ["genie", "magic", "lamp"] },
    { emoji: "\u{1F9DF}", keywords: ["zombie", "undead"] },
    { emoji: "\u{1F9CC}", keywords: ["troll"] },
    { emoji: "\u{1F486}", keywords: ["person getting massage", "relax"] },
    { emoji: "\u{1F487}", keywords: ["person getting haircut", "salon"] },
    { emoji: "\u{1F6B6}", keywords: ["person walking"] },
    { emoji: "\u{1F9CD}", keywords: ["person standing"] },
    { emoji: "\u{1F9CE}", keywords: ["person kneeling"] },
    { emoji: "\u{1F3C3}", keywords: ["person running", "exercise"] },
    { emoji: "\u{1F483}", keywords: ["woman dancing", "dance"] },
    { emoji: "\u{1F57A}", keywords: ["man dancing", "dance", "disco"] },
    { emoji: "\u{1F46F}", keywords: ["people with bunny ears", "dancers"] },
    { emoji: "\u{1F9D6}", keywords: ["person in steamy room", "sauna"] },
    { emoji: "\u{1F9D7}", keywords: ["person climbing", "rock"] },
    { emoji: "\u{1F938}", keywords: ["person cartwheeling", "gymnastics"] },
    { emoji: "\u{1F3CC}\uFE0F", keywords: ["person golfing", "golf"] },
    { emoji: "\u{1F3C7}", keywords: ["horse racing", "jockey"] },
    { emoji: "\u26F7\uFE0F", keywords: ["skier", "skiing", "snow"] },
    { emoji: "\u{1F3C2}", keywords: ["snowboarder", "snow", "winter"] },
    { emoji: "\u{1F3CB}\uFE0F", keywords: ["person lifting weights", "gym"] },
    { emoji: "\u{1F93C}", keywords: ["people wrestling"] },
    { emoji: "\u{1F93D}", keywords: ["person playing water polo"] },
    { emoji: "\u{1F93E}", keywords: ["person playing handball"] },
    { emoji: "\u{1F93A}", keywords: ["person fencing", "sword"] },
    { emoji: "\u26F9\uFE0F", keywords: ["person bouncing ball", "basketball"] },
    { emoji: "\u{1F3CA}", keywords: ["person swimming", "pool"] },
    { emoji: "\u{1F6A3}", keywords: ["person rowing boat"] },
    {
      emoji: "\u{1F9D8}",
      keywords: ["person in lotus position", "yoga", "meditate"]
    },
    { emoji: "\u{1F6C0}", keywords: ["person taking bath", "bathtub"] },
    { emoji: "\u{1F6CC}", keywords: ["person in bed", "sleeping"] },
    { emoji: "\u{1F46D}", keywords: ["women holding hands"] },
    { emoji: "\u{1F46B}", keywords: ["woman and man holding hands", "couple"] },
    { emoji: "\u{1F46C}", keywords: ["men holding hands"] },
    { emoji: "\u{1F48F}", keywords: ["kiss", "couple"] },
    { emoji: "\u{1F491}", keywords: ["couple with heart", "love"] },
    { emoji: "\u{1F46A}", keywords: ["family"] },
    { emoji: "\u{1F5E3}\uFE0F", keywords: ["speaking head", "talking"] },
    { emoji: "\u{1F464}", keywords: ["bust", "silhouette", "person"] },
    { emoji: "\u{1F465}", keywords: ["busts", "silhouettes", "people", "group"] },
    { emoji: "\u{1FAC2}", keywords: ["people hugging", "hug", "embrace"] },
    { emoji: "\u{1F463}", keywords: ["footprints", "feet", "tracks"] }
  ]
};

// src/compose/emoji/animals.ts
var animals = {
  label: "Animals & Nature",
  icon: "\u{1F43E}",
  entries: [
    { emoji: "\u{1F436}", keywords: ["dog", "puppy", "pet"] },
    { emoji: "\u{1F431}", keywords: ["cat", "kitten", "pet"] },
    { emoji: "\u{1F42D}", keywords: ["mouse", "rat"] },
    { emoji: "\u{1F439}", keywords: ["hamster", "pet"] },
    { emoji: "\u{1F430}", keywords: ["rabbit", "bunny"] },
    { emoji: "\u{1F98A}", keywords: ["fox", "cunning"] },
    { emoji: "\u{1F43B}", keywords: ["bear", "teddy"] },
    { emoji: "\u{1F43C}", keywords: ["panda", "bear"] },
    { emoji: "\u{1F43B}\u200D\u2744\uFE0F", keywords: ["polar bear", "arctic"] },
    { emoji: "\u{1F428}", keywords: ["koala", "australia"] },
    { emoji: "\u{1F42F}", keywords: ["tiger", "cat"] },
    { emoji: "\u{1F981}", keywords: ["lion", "king", "mane"] },
    { emoji: "\u{1F42E}", keywords: ["cow", "moo"] },
    { emoji: "\u{1F437}", keywords: ["pig", "oink"] },
    { emoji: "\u{1F438}", keywords: ["frog", "toad"] },
    { emoji: "\u{1F435}", keywords: ["monkey", "ape"] },
    { emoji: "\u{1F648}", keywords: ["see no evil", "monkey"] },
    { emoji: "\u{1F649}", keywords: ["hear no evil", "monkey"] },
    { emoji: "\u{1F64A}", keywords: ["speak no evil", "monkey"] },
    { emoji: "\u{1F412}", keywords: ["monkey", "primate"] },
    { emoji: "\u{1F414}", keywords: ["chicken", "hen", "poultry"] },
    { emoji: "\u{1F427}", keywords: ["penguin", "arctic", "cold"] },
    { emoji: "\u{1F426}", keywords: ["bird", "tweet"] },
    { emoji: "\u{1F424}", keywords: ["chick", "baby", "bird"] },
    { emoji: "\u{1F423}", keywords: ["hatching", "chick", "egg"] },
    { emoji: "\u{1F425}", keywords: ["chick", "bird", "baby"] },
    { emoji: "\u{1F986}", keywords: ["duck", "quack"] },
    { emoji: "\u{1F985}", keywords: ["eagle", "bird", "freedom"] },
    { emoji: "\u{1F989}", keywords: ["owl", "wise", "night"] },
    { emoji: "\u{1F987}", keywords: ["bat", "vampire", "night"] },
    { emoji: "\u{1F43A}", keywords: ["wolf", "howl"] },
    { emoji: "\u{1F417}", keywords: ["boar", "wild pig"] },
    { emoji: "\u{1F434}", keywords: ["horse", "pony"] },
    { emoji: "\u{1F984}", keywords: ["unicorn", "magic", "fantasy"] },
    { emoji: "\u{1FACE}", keywords: ["moose", "elk"] },
    { emoji: "\u{1F41D}", keywords: ["bee", "honeybee", "buzz"] },
    { emoji: "\u{1FAB1}", keywords: ["worm"] },
    { emoji: "\u{1F41B}", keywords: ["bug", "caterpillar", "insect"] },
    { emoji: "\u{1F98B}", keywords: ["butterfly", "insect", "beautiful"] },
    { emoji: "\u{1F40C}", keywords: ["snail", "slow"] },
    { emoji: "\u{1F41E}", keywords: ["ladybug", "ladybird", "insect"] },
    { emoji: "\u{1F41C}", keywords: ["ant", "insect"] },
    { emoji: "\u{1FAB0}", keywords: ["fly", "insect"] },
    { emoji: "\u{1FAB2}", keywords: ["beetle", "insect"] },
    { emoji: "\u{1FAB3}", keywords: ["cockroach", "bug"] },
    { emoji: "\u{1F99F}", keywords: ["mosquito", "insect"] },
    { emoji: "\u{1F997}", keywords: ["cricket", "insect"] },
    { emoji: "\u{1F577}\uFE0F", keywords: ["spider", "arachnid"] },
    { emoji: "\u{1F578}\uFE0F", keywords: ["spider web", "cobweb"] },
    { emoji: "\u{1F982}", keywords: ["scorpion"] },
    { emoji: "\u{1F422}", keywords: ["turtle", "tortoise", "slow"] },
    { emoji: "\u{1F40D}", keywords: ["snake", "reptile"] },
    { emoji: "\u{1F98E}", keywords: ["lizard", "reptile"] },
    { emoji: "\u{1F996}", keywords: ["dinosaur", "t-rex", "trex"] },
    { emoji: "\u{1F995}", keywords: ["dinosaur", "sauropod", "brontosaurus"] },
    { emoji: "\u{1F419}", keywords: ["octopus", "sea"] },
    { emoji: "\u{1F991}", keywords: ["squid", "sea"] },
    { emoji: "\u{1F990}", keywords: ["shrimp", "prawn", "sea"] },
    { emoji: "\u{1F99E}", keywords: ["lobster", "sea"] },
    { emoji: "\u{1F980}", keywords: ["crab", "sea"] },
    { emoji: "\u{1FAB8}", keywords: ["coral", "reef", "sea"] },
    { emoji: "\u{1F421}", keywords: ["blowfish", "puffer", "sea"] },
    { emoji: "\u{1F420}", keywords: ["tropical fish", "sea"] },
    { emoji: "\u{1F41F}", keywords: ["fish", "sea"] },
    { emoji: "\u{1F42C}", keywords: ["dolphin", "sea", "ocean"] },
    { emoji: "\u{1F433}", keywords: ["whale", "spout", "ocean"] },
    { emoji: "\u{1F40B}", keywords: ["whale", "ocean"] },
    { emoji: "\u{1F988}", keywords: ["shark", "ocean", "jaws"] },
    { emoji: "\u{1F40A}", keywords: ["crocodile", "alligator"] },
    { emoji: "\u{1F405}", keywords: ["tiger", "big cat"] },
    { emoji: "\u{1F406}", keywords: ["leopard", "cheetah"] },
    { emoji: "\u{1F993}", keywords: ["zebra", "stripes"] },
    { emoji: "\u{1FACF}", keywords: ["donkey"] },
    { emoji: "\u{1F98D}", keywords: ["gorilla", "ape"] },
    { emoji: "\u{1F9A7}", keywords: ["orangutan", "ape"] },
    { emoji: "\u{1F418}", keywords: ["elephant", "big"] },
    { emoji: "\u{1F9A3}", keywords: ["mammoth", "prehistoric"] },
    { emoji: "\u{1F99B}", keywords: ["hippopotamus", "hippo"] },
    { emoji: "\u{1F98F}", keywords: ["rhinoceros", "rhino"] },
    { emoji: "\u{1F42A}", keywords: ["camel", "desert"] },
    { emoji: "\u{1F42B}", keywords: ["camel", "two humps"] },
    { emoji: "\u{1F992}", keywords: ["giraffe", "tall"] },
    { emoji: "\u{1F998}", keywords: ["kangaroo", "australia"] },
    { emoji: "\u{1F9AC}", keywords: ["bison", "buffalo"] },
    { emoji: "\u{1F403}", keywords: ["water buffalo"] },
    { emoji: "\u{1F402}", keywords: ["ox", "bull"] },
    { emoji: "\u{1F404}", keywords: ["cow", "dairy"] },
    { emoji: "\u{1F40E}", keywords: ["horse", "racing"] },
    { emoji: "\u{1F416}", keywords: ["pig", "hog"] },
    { emoji: "\u{1F40F}", keywords: ["ram", "sheep"] },
    { emoji: "\u{1F411}", keywords: ["sheep", "lamb", "ewe"] },
    { emoji: "\u{1F999}", keywords: ["llama", "alpaca"] },
    { emoji: "\u{1F410}", keywords: ["goat"] },
    { emoji: "\u{1F98C}", keywords: ["deer", "stag"] },
    { emoji: "\u{1F415}", keywords: ["dog", "pet"] },
    { emoji: "\u{1F429}", keywords: ["poodle", "dog"] },
    { emoji: "\u{1F9AE}", keywords: ["guide dog"] },
    { emoji: "\u{1F415}\u200D\u{1F9BA}", keywords: ["service dog"] },
    { emoji: "\u{1F408}", keywords: ["cat", "pet"] },
    { emoji: "\u{1F408}\u200D\u2B1B", keywords: ["black cat"] },
    { emoji: "\u{1FAB6}", keywords: ["feather", "bird"] },
    { emoji: "\u{1F413}", keywords: ["rooster", "chicken"] },
    { emoji: "\u{1F983}", keywords: ["turkey", "thanksgiving"] },
    { emoji: "\u{1F99A}", keywords: ["peacock", "bird"] },
    { emoji: "\u{1F99C}", keywords: ["parrot", "bird", "tropical"] },
    { emoji: "\u{1F9A2}", keywords: ["swan", "bird", "elegant"] },
    { emoji: "\u{1F9A9}", keywords: ["flamingo", "pink"] },
    { emoji: "\u{1F54A}\uFE0F", keywords: ["dove", "peace", "bird"] },
    { emoji: "\u{1F407}", keywords: ["rabbit", "bunny"] },
    { emoji: "\u{1F99D}", keywords: ["raccoon", "trash panda"] },
    { emoji: "\u{1F9A8}", keywords: ["skunk", "stink"] },
    { emoji: "\u{1F9A1}", keywords: ["badger"] },
    { emoji: "\u{1F9AB}", keywords: ["beaver", "dam"] },
    { emoji: "\u{1F9A6}", keywords: ["otter", "sea", "cute"] },
    { emoji: "\u{1F9A5}", keywords: ["sloth", "lazy", "slow"] },
    { emoji: "\u{1F401}", keywords: ["mouse", "rodent"] },
    { emoji: "\u{1F400}", keywords: ["rat", "rodent"] },
    { emoji: "\u{1F43F}\uFE0F", keywords: ["chipmunk", "squirrel"] },
    { emoji: "\u{1F994}", keywords: ["hedgehog", "prickly"] },
    { emoji: "\u{1F43E}", keywords: ["paw prints", "pet", "animal"] },
    { emoji: "\u{1F409}", keywords: ["dragon", "fantasy"] },
    { emoji: "\u{1F432}", keywords: ["dragon face", "chinese"] },
    { emoji: "\u{1F335}", keywords: ["cactus", "desert"] },
    { emoji: "\u{1F384}", keywords: ["christmas tree", "holiday"] },
    { emoji: "\u{1F332}", keywords: ["evergreen", "tree", "pine"] },
    { emoji: "\u{1F333}", keywords: ["deciduous tree", "tree"] },
    { emoji: "\u{1F334}", keywords: ["palm tree", "tropical", "beach"] },
    { emoji: "\u{1FAB5}", keywords: ["wood", "log"] },
    { emoji: "\u{1F331}", keywords: ["seedling", "grow", "plant"] },
    { emoji: "\u{1F33F}", keywords: ["herb", "plant", "green"] },
    { emoji: "\u2618\uFE0F", keywords: ["shamrock", "clover", "irish"] },
    { emoji: "\u{1F340}", keywords: ["four leaf clover", "lucky", "luck"] },
    { emoji: "\u{1F38D}", keywords: ["bamboo", "decoration"] },
    { emoji: "\u{1FAB4}", keywords: ["potted plant", "houseplant"] },
    { emoji: "\u{1F38B}", keywords: ["tanabata tree"] },
    { emoji: "\u{1F343}", keywords: ["leaf", "wind", "nature"] },
    { emoji: "\u{1F342}", keywords: ["fallen leaf", "autumn", "fall"] },
    { emoji: "\u{1F341}", keywords: ["maple leaf", "canada", "fall"] },
    { emoji: "\u{1FABA}", keywords: ["nest with eggs", "bird"] },
    { emoji: "\u{1FAB9}", keywords: ["empty nest"] },
    { emoji: "\u{1F344}", keywords: ["mushroom", "fungi"] },
    { emoji: "\u{1F33E}", keywords: ["rice", "grain", "plant"] },
    { emoji: "\u{1F490}", keywords: ["bouquet", "flowers"] },
    { emoji: "\u{1F337}", keywords: ["tulip", "flower", "spring"] },
    { emoji: "\u{1F339}", keywords: ["rose", "flower", "love"] },
    { emoji: "\u{1F940}", keywords: ["wilted flower", "dead"] },
    { emoji: "\u{1FABB}", keywords: ["hyacinth", "flower"] },
    { emoji: "\u{1F33A}", keywords: ["hibiscus", "flower", "tropical"] },
    { emoji: "\u{1F338}", keywords: ["cherry blossom", "flower", "spring"] },
    { emoji: "\u{1F33C}", keywords: ["blossom", "flower"] },
    { emoji: "\u{1F33B}", keywords: ["sunflower", "flower"] },
    { emoji: "\u{1F31E}", keywords: ["sun with face", "sunny"] },
    { emoji: "\u{1F31D}", keywords: ["moon with face", "night"] },
    { emoji: "\u{1F31B}", keywords: ["first quarter moon face"] },
    { emoji: "\u{1F31C}", keywords: ["last quarter moon face"] },
    { emoji: "\u{1F31A}", keywords: ["new moon face", "creepy"] },
    { emoji: "\u{1F315}", keywords: ["full moon"] },
    { emoji: "\u{1F316}", keywords: ["waning gibbous moon"] },
    { emoji: "\u{1F317}", keywords: ["last quarter moon"] },
    { emoji: "\u{1F318}", keywords: ["waning crescent moon"] },
    { emoji: "\u{1F311}", keywords: ["new moon"] },
    { emoji: "\u{1F312}", keywords: ["waxing crescent moon"] },
    { emoji: "\u{1F313}", keywords: ["first quarter moon"] },
    { emoji: "\u{1F314}", keywords: ["waxing gibbous moon"] },
    { emoji: "\u{1F319}", keywords: ["crescent moon", "night"] },
    {
      emoji: "\u{1F30D}",
      keywords: ["globe", "earth", "europe", "africa", "world"]
    },
    { emoji: "\u{1F30E}", keywords: ["globe", "earth", "americas", "world"] },
    { emoji: "\u{1F30F}", keywords: ["globe", "earth", "asia", "world"] },
    { emoji: "\u{1FA90}", keywords: ["planet", "saturn", "ring", "space"] },
    { emoji: "\u{1F4AB}", keywords: ["dizzy", "star", "shooting"] },
    { emoji: "\u2B50", keywords: ["star", "yellow"] },
    { emoji: "\u{1F31F}", keywords: ["glowing star", "sparkle"] },
    { emoji: "\u2728", keywords: ["sparkles", "magic", "clean"] },
    { emoji: "\u26A1", keywords: ["lightning", "bolt", "electricity", "zap"] },
    { emoji: "\u2604\uFE0F", keywords: ["comet", "meteor"] },
    { emoji: "\u{1F4A5}", keywords: ["boom", "collision", "explosion"] },
    { emoji: "\u{1F525}", keywords: ["fire", "hot", "lit"] },
    { emoji: "\u{1F32A}\uFE0F", keywords: ["tornado", "twister"] },
    { emoji: "\u{1F308}", keywords: ["rainbow", "colorful"] },
    { emoji: "\u2600\uFE0F", keywords: ["sun", "sunny", "bright"] },
    { emoji: "\u{1F324}\uFE0F", keywords: ["sun behind small cloud"] },
    { emoji: "\u26C5", keywords: ["sun behind cloud"] },
    { emoji: "\u{1F325}\uFE0F", keywords: ["sun behind large cloud"] },
    { emoji: "\u2601\uFE0F", keywords: ["cloud", "overcast"] },
    { emoji: "\u{1F326}\uFE0F", keywords: ["sun behind rain cloud"] },
    { emoji: "\u{1F327}\uFE0F", keywords: ["rain", "cloud with rain"] },
    { emoji: "\u26C8\uFE0F", keywords: ["thunder", "storm", "lightning"] },
    { emoji: "\u{1F329}\uFE0F", keywords: ["cloud with lightning"] },
    { emoji: "\u{1F328}\uFE0F", keywords: ["cloud with snow"] },
    { emoji: "\u2744\uFE0F", keywords: ["snowflake", "cold", "winter"] },
    { emoji: "\u2603\uFE0F", keywords: ["snowman", "winter", "cold"] },
    { emoji: "\u26C4", keywords: ["snowman", "winter"] },
    { emoji: "\u{1F32C}\uFE0F", keywords: ["wind", "blow", "face"] },
    { emoji: "\u{1F4A8}", keywords: ["dash", "wind", "fast"] },
    { emoji: "\u{1F4A7}", keywords: ["droplet", "water", "sweat"] },
    { emoji: "\u{1F4A6}", keywords: ["sweat droplets", "water", "splash"] },
    { emoji: "\u{1F30A}", keywords: ["wave", "ocean", "water", "sea"] },
    { emoji: "\u{1FAE7}", keywords: ["bubbles", "soap"] }
  ]
};

// src/compose/emoji/food.ts
var food = {
  label: "Food & Drink",
  icon: "\u{1F354}",
  entries: [
    { emoji: "\u{1F34F}", keywords: ["green apple", "fruit"] },
    { emoji: "\u{1F34E}", keywords: ["red apple", "fruit"] },
    { emoji: "\u{1F350}", keywords: ["pear", "fruit"] },
    { emoji: "\u{1F34A}", keywords: ["orange", "tangerine", "fruit"] },
    { emoji: "\u{1F34B}", keywords: ["lemon", "citrus", "fruit"] },
    { emoji: "\u{1F34C}", keywords: ["banana", "fruit"] },
    { emoji: "\u{1F349}", keywords: ["watermelon", "fruit", "summer"] },
    { emoji: "\u{1F347}", keywords: ["grapes", "fruit", "wine"] },
    { emoji: "\u{1F353}", keywords: ["strawberry", "fruit", "berry"] },
    { emoji: "\u{1FAD0}", keywords: ["blueberries", "fruit", "berry"] },
    { emoji: "\u{1F348}", keywords: ["melon", "fruit"] },
    { emoji: "\u{1F352}", keywords: ["cherries", "fruit"] },
    { emoji: "\u{1F351}", keywords: ["peach", "fruit"] },
    { emoji: "\u{1F96D}", keywords: ["mango", "fruit", "tropical"] },
    { emoji: "\u{1F34D}", keywords: ["pineapple", "fruit", "tropical"] },
    { emoji: "\u{1F965}", keywords: ["coconut", "tropical"] },
    { emoji: "\u{1F95D}", keywords: ["kiwi", "fruit"] },
    { emoji: "\u{1F345}", keywords: ["tomato", "vegetable"] },
    { emoji: "\u{1F346}", keywords: ["eggplant", "aubergine"] },
    { emoji: "\u{1F951}", keywords: ["avocado", "guacamole"] },
    { emoji: "\u{1FADB}", keywords: ["pea pod", "vegetable"] },
    { emoji: "\u{1F966}", keywords: ["broccoli", "vegetable"] },
    { emoji: "\u{1F96C}", keywords: ["leafy green", "lettuce", "vegetable"] },
    { emoji: "\u{1F952}", keywords: ["cucumber", "pickle"] },
    { emoji: "\u{1F336}\uFE0F", keywords: ["hot pepper", "spicy", "chili"] },
    { emoji: "\u{1FAD1}", keywords: ["bell pepper", "capsicum"] },
    { emoji: "\u{1F33D}", keywords: ["corn", "maize"] },
    { emoji: "\u{1F955}", keywords: ["carrot", "vegetable"] },
    { emoji: "\u{1FAD2}", keywords: ["olive", "oil"] },
    { emoji: "\u{1F9C4}", keywords: ["garlic"] },
    { emoji: "\u{1F9C5}", keywords: ["onion"] },
    { emoji: "\u{1F954}", keywords: ["potato", "vegetable"] },
    { emoji: "\u{1F360}", keywords: ["sweet potato", "yam"] },
    { emoji: "\u{1FAD8}", keywords: ["beans"] },
    { emoji: "\u{1F950}", keywords: ["croissant", "bread", "french"] },
    { emoji: "\u{1F35E}", keywords: ["bread", "toast", "loaf"] },
    { emoji: "\u{1F956}", keywords: ["baguette", "french bread"] },
    { emoji: "\u{1FAD3}", keywords: ["flatbread", "naan", "pita"] },
    { emoji: "\u{1F968}", keywords: ["pretzel", "snack"] },
    { emoji: "\u{1F96F}", keywords: ["bagel", "bread"] },
    { emoji: "\u{1F95E}", keywords: ["pancakes", "breakfast"] },
    { emoji: "\u{1F9C7}", keywords: ["waffle", "breakfast"] },
    { emoji: "\u{1F9C0}", keywords: ["cheese", "wedge"] },
    { emoji: "\u{1F356}", keywords: ["meat", "bone", "drumstick"] },
    { emoji: "\u{1F357}", keywords: ["poultry", "chicken leg"] },
    { emoji: "\u{1F969}", keywords: ["steak", "meat", "beef"] },
    { emoji: "\u{1F953}", keywords: ["bacon", "meat", "breakfast"] },
    { emoji: "\u{1F354}", keywords: ["hamburger", "burger", "fast food"] },
    { emoji: "\u{1F35F}", keywords: ["french fries", "fries", "fast food"] },
    { emoji: "\u{1F355}", keywords: ["pizza", "slice"] },
    { emoji: "\u{1F32D}", keywords: ["hot dog", "sausage"] },
    { emoji: "\u{1F96A}", keywords: ["sandwich", "sub"] },
    { emoji: "\u{1F32E}", keywords: ["taco", "mexican"] },
    { emoji: "\u{1F32F}", keywords: ["burrito", "wrap", "mexican"] },
    { emoji: "\u{1FAD4}", keywords: ["tamale", "mexican"] },
    { emoji: "\u{1F959}", keywords: ["pita", "falafel", "kebab"] },
    { emoji: "\u{1F9C6}", keywords: ["falafel"] },
    { emoji: "\u{1F95A}", keywords: ["egg"] },
    { emoji: "\u{1F373}", keywords: ["cooking", "fried egg", "breakfast"] },
    { emoji: "\u{1F958}", keywords: ["shallow pan", "paella", "cooking"] },
    { emoji: "\u{1F372}", keywords: ["pot", "stew", "soup"] },
    { emoji: "\u{1FAD5}", keywords: ["fondue", "cheese", "chocolate"] },
    { emoji: "\u{1F963}", keywords: ["bowl with spoon", "cereal"] },
    { emoji: "\u{1F957}", keywords: ["salad", "green", "healthy"] },
    { emoji: "\u{1F37F}", keywords: ["popcorn", "movie", "snack"] },
    { emoji: "\u{1F9C8}", keywords: ["butter"] },
    { emoji: "\u{1F9C2}", keywords: ["salt", "seasoning"] },
    { emoji: "\u{1F96B}", keywords: ["canned food", "tin"] },
    { emoji: "\u{1F371}", keywords: ["bento box", "japanese", "lunch"] },
    { emoji: "\u{1F358}", keywords: ["rice cracker", "japanese"] },
    { emoji: "\u{1F359}", keywords: ["rice ball", "onigiri", "japanese"] },
    { emoji: "\u{1F35A}", keywords: ["cooked rice"] },
    { emoji: "\u{1F35B}", keywords: ["curry rice", "indian"] },
    { emoji: "\u{1F35C}", keywords: ["steaming bowl", "noodles", "ramen"] },
    { emoji: "\u{1F35D}", keywords: ["spaghetti", "pasta", "italian"] },
    { emoji: "\u{1F360}", keywords: ["roasted sweet potato"] },
    { emoji: "\u{1F362}", keywords: ["oden", "skewer", "japanese"] },
    { emoji: "\u{1F363}", keywords: ["sushi", "japanese", "fish"] },
    { emoji: "\u{1F364}", keywords: ["fried shrimp", "tempura"] },
    { emoji: "\u{1F365}", keywords: ["fish cake", "narutomaki"] },
    { emoji: "\u{1F96E}", keywords: ["moon cake", "chinese"] },
    { emoji: "\u{1F361}", keywords: ["dango", "japanese", "sweet"] },
    { emoji: "\u{1F95F}", keywords: ["dumpling", "gyoza", "pierogi"] },
    { emoji: "\u{1F960}", keywords: ["fortune cookie"] },
    { emoji: "\u{1F961}", keywords: ["takeout box", "chinese food"] },
    { emoji: "\u{1F980}", keywords: ["crab", "seafood"] },
    { emoji: "\u{1F99E}", keywords: ["lobster", "seafood"] },
    { emoji: "\u{1F990}", keywords: ["shrimp", "prawn", "seafood"] },
    { emoji: "\u{1F991}", keywords: ["squid", "calamari"] },
    { emoji: "\u{1F366}", keywords: ["ice cream", "soft serve", "dessert"] },
    { emoji: "\u{1F367}", keywords: ["shaved ice", "dessert"] },
    { emoji: "\u{1F368}", keywords: ["ice cream", "dessert", "sundae"] },
    { emoji: "\u{1F369}", keywords: ["doughnut", "donut", "dessert"] },
    { emoji: "\u{1F36A}", keywords: ["cookie", "biscuit", "dessert"] },
    { emoji: "\u{1F382}", keywords: ["birthday cake", "celebration"] },
    { emoji: "\u{1F370}", keywords: ["cake", "shortcake", "dessert"] },
    { emoji: "\u{1F9C1}", keywords: ["cupcake", "muffin", "dessert"] },
    { emoji: "\u{1F967}", keywords: ["pie", "dessert"] },
    { emoji: "\u{1F36B}", keywords: ["chocolate", "candy", "dessert"] },
    { emoji: "\u{1F36C}", keywords: ["candy", "sweet"] },
    { emoji: "\u{1F36D}", keywords: ["lollipop", "candy", "sweet"] },
    { emoji: "\u{1F36E}", keywords: ["custard", "pudding", "flan"] },
    { emoji: "\u{1F36F}", keywords: ["honey", "pot", "sweet"] },
    { emoji: "\u{1F37C}", keywords: ["baby bottle", "milk"] },
    { emoji: "\u{1F95B}", keywords: ["glass of milk", "dairy"] },
    { emoji: "\u2615", keywords: ["coffee", "hot", "tea", "drink"] },
    { emoji: "\u{1FAD6}", keywords: ["teapot", "tea"] },
    { emoji: "\u{1F375}", keywords: ["tea", "green tea", "drink"] },
    { emoji: "\u{1F9CB}", keywords: ["bubble tea", "boba", "drink"] },
    { emoji: "\u{1F376}", keywords: ["sake", "japanese", "drink"] },
    { emoji: "\u{1F37E}", keywords: ["champagne", "bottle", "celebrate"] },
    { emoji: "\u{1F377}", keywords: ["wine", "glass", "drink"] },
    { emoji: "\u{1F378}", keywords: ["cocktail", "martini", "drink"] },
    { emoji: "\u{1F379}", keywords: ["tropical drink", "cocktail"] },
    { emoji: "\u{1F37A}", keywords: ["beer", "mug", "drink"] },
    { emoji: "\u{1F37B}", keywords: ["clinking beer mugs", "cheers"] },
    {
      emoji: "\u{1F942}",
      keywords: ["clinking glasses", "champagne", "cheers", "toast"]
    },
    { emoji: "\u{1F943}", keywords: ["tumbler", "whiskey", "drink"] },
    { emoji: "\u{1FAD7}", keywords: ["pouring liquid", "water"] },
    { emoji: "\u{1F964}", keywords: ["cup with straw", "soda", "drink"] },
    { emoji: "\u{1F9CA}", keywords: ["ice", "cube", "cold"] },
    { emoji: "\u{1F9C3}", keywords: ["juice box", "drink"] },
    { emoji: "\u{1F964}", keywords: ["cup with straw", "soda"] }
  ]
};

// src/compose/emoji/travel.ts
var travel = {
  label: "Travel & Places",
  icon: "\u2708\uFE0F",
  entries: [
    { emoji: "\u{1F697}", keywords: ["car", "automobile", "vehicle"] },
    { emoji: "\u{1F695}", keywords: ["taxi", "cab"] },
    { emoji: "\u{1F699}", keywords: ["suv", "car", "vehicle"] },
    { emoji: "\u{1F68C}", keywords: ["bus", "transit"] },
    { emoji: "\u{1F68E}", keywords: ["trolleybus", "transit"] },
    { emoji: "\u{1F3CE}\uFE0F", keywords: ["racing car", "formula", "fast"] },
    { emoji: "\u{1F693}", keywords: ["police car"] },
    { emoji: "\u{1F691}", keywords: ["ambulance", "emergency"] },
    { emoji: "\u{1F692}", keywords: ["fire truck", "engine"] },
    { emoji: "\u{1F690}", keywords: ["minibus", "van"] },
    { emoji: "\u{1F6FB}", keywords: ["pickup truck"] },
    { emoji: "\u{1F69A}", keywords: ["delivery truck", "moving"] },
    { emoji: "\u{1F69B}", keywords: ["articulated lorry", "truck"] },
    { emoji: "\u{1F69C}", keywords: ["tractor", "farm"] },
    { emoji: "\u{1F6F5}", keywords: ["motor scooter", "vespa"] },
    { emoji: "\u{1F3CD}\uFE0F", keywords: ["motorcycle", "motorbike"] },
    { emoji: "\u{1F6FA}", keywords: ["auto rickshaw", "tuk tuk"] },
    { emoji: "\u{1F6B2}", keywords: ["bicycle", "bike", "cycling"] },
    { emoji: "\u{1F6F4}", keywords: ["kick scooter"] },
    { emoji: "\u{1F68F}", keywords: ["bus stop", "transit"] },
    { emoji: "\u{1F6E4}\uFE0F", keywords: ["railway track", "train"] },
    { emoji: "\u{1F683}", keywords: ["railway car", "train"] },
    { emoji: "\u{1F68B}", keywords: ["tram car", "trolley"] },
    { emoji: "\u{1F69E}", keywords: ["mountain railway"] },
    { emoji: "\u{1F69D}", keywords: ["monorail", "train"] },
    { emoji: "\u{1F684}", keywords: ["bullet train", "high speed", "fast"] },
    { emoji: "\u{1F685}", keywords: ["bullet train", "shinkansen"] },
    { emoji: "\u{1F686}", keywords: ["train"] },
    { emoji: "\u{1F687}", keywords: ["metro", "subway"] },
    { emoji: "\u{1F688}", keywords: ["light rail"] },
    { emoji: "\u{1F689}", keywords: ["station", "train"] },
    { emoji: "\u2708\uFE0F", keywords: ["airplane", "plane", "flight", "travel"] },
    { emoji: "\u{1F6E9}\uFE0F", keywords: ["small airplane"] },
    { emoji: "\u{1F6EB}", keywords: ["departure", "takeoff", "airplane"] },
    { emoji: "\u{1F6EC}", keywords: ["arrival", "landing", "airplane"] },
    { emoji: "\u{1FA82}", keywords: ["parachute", "skydiving"] },
    { emoji: "\u{1F4BA}", keywords: ["seat", "airplane", "chair"] },
    { emoji: "\u{1F681}", keywords: ["helicopter", "chopper"] },
    { emoji: "\u{1F680}", keywords: ["rocket", "launch", "space"] },
    { emoji: "\u{1F6F8}", keywords: ["ufo", "flying saucer", "alien"] },
    { emoji: "\u{1F6F6}", keywords: ["canoe", "boat", "paddle"] },
    { emoji: "\u26F5", keywords: ["sailboat", "sailing"] },
    { emoji: "\u{1F6A4}", keywords: ["speedboat", "motorboat"] },
    { emoji: "\u{1F6E5}\uFE0F", keywords: ["motor boat"] },
    { emoji: "\u{1F6F3}\uFE0F", keywords: ["passenger ship", "cruise"] },
    { emoji: "\u26F4\uFE0F", keywords: ["ferry", "boat"] },
    { emoji: "\u{1F6A2}", keywords: ["ship", "boat", "cruise"] },
    { emoji: "\u2693", keywords: ["anchor", "ship", "port"] },
    { emoji: "\u{1FA9D}", keywords: ["hook", "fishing"] },
    { emoji: "\u26FD", keywords: ["fuel pump", "gas", "petrol"] },
    { emoji: "\u{1F6A7}", keywords: ["construction", "barrier"] },
    { emoji: "\u{1F6A6}", keywords: ["traffic light", "signal"] },
    { emoji: "\u{1F6A5}", keywords: ["horizontal traffic light"] },
    { emoji: "\u{1F5FA}\uFE0F", keywords: ["world map", "travel"] },
    { emoji: "\u{1F5FF}", keywords: ["moai", "easter island", "statue"] },
    { emoji: "\u{1F5FD}", keywords: ["statue of liberty", "new york"] },
    { emoji: "\u{1F5FC}", keywords: ["tokyo tower", "japan"] },
    { emoji: "\u{1F3F0}", keywords: ["castle", "european"] },
    { emoji: "\u{1F3EF}", keywords: ["japanese castle"] },
    { emoji: "\u{1F3DF}\uFE0F", keywords: ["stadium", "arena"] },
    { emoji: "\u{1F3A1}", keywords: ["ferris wheel", "amusement"] },
    { emoji: "\u{1F3A2}", keywords: ["roller coaster", "amusement"] },
    { emoji: "\u{1F3A0}", keywords: ["carousel", "merry go round"] },
    { emoji: "\u26F2", keywords: ["fountain", "park"] },
    { emoji: "\u26F1\uFE0F", keywords: ["umbrella", "beach", "sun"] },
    { emoji: "\u{1F3D6}\uFE0F", keywords: ["beach", "sand", "sun"] },
    { emoji: "\u{1F3DD}\uFE0F", keywords: ["desert island", "tropical"] },
    { emoji: "\u{1F3DC}\uFE0F", keywords: ["desert", "sand"] },
    { emoji: "\u{1F30B}", keywords: ["volcano", "eruption"] },
    { emoji: "\u26F0\uFE0F", keywords: ["mountain"] },
    { emoji: "\u{1F3D4}\uFE0F", keywords: ["snow capped mountain"] },
    { emoji: "\u{1F5FB}", keywords: ["mount fuji", "japan"] },
    { emoji: "\u{1F3D5}\uFE0F", keywords: ["camping", "tent"] },
    { emoji: "\u26FA", keywords: ["tent", "camping"] },
    { emoji: "\u{1F3E0}", keywords: ["house", "home"] },
    { emoji: "\u{1F3E1}", keywords: ["house with garden"] },
    { emoji: "\u{1F3D8}\uFE0F", keywords: ["houses", "neighborhood"] },
    { emoji: "\u{1F3DA}\uFE0F", keywords: ["derelict house", "abandoned"] },
    { emoji: "\u{1F3D7}\uFE0F", keywords: ["building construction", "crane"] },
    { emoji: "\u{1F3ED}", keywords: ["factory", "industrial"] },
    { emoji: "\u{1F3E2}", keywords: ["office building"] },
    { emoji: "\u{1F3EC}", keywords: ["department store", "shopping"] },
    { emoji: "\u{1F3E3}", keywords: ["japanese post office"] },
    { emoji: "\u{1F3E4}", keywords: ["post office"] },
    { emoji: "\u{1F3E5}", keywords: ["hospital", "medical"] },
    { emoji: "\u{1F3E6}", keywords: ["bank", "money"] },
    { emoji: "\u{1F3E8}", keywords: ["hotel", "accommodation"] },
    { emoji: "\u{1F3EA}", keywords: ["convenience store", "shop"] },
    { emoji: "\u{1F3EB}", keywords: ["school", "education"] },
    { emoji: "\u{1F3E9}", keywords: ["love hotel"] },
    { emoji: "\u{1F492}", keywords: ["wedding", "chapel"] },
    { emoji: "\u{1F3DB}\uFE0F", keywords: ["classical building", "museum"] },
    { emoji: "\u26EA", keywords: ["church", "religion"] },
    { emoji: "\u{1F54C}", keywords: ["mosque", "islam"] },
    { emoji: "\u{1F54D}", keywords: ["synagogue", "jewish"] },
    { emoji: "\u{1F6D5}", keywords: ["hindu temple"] },
    { emoji: "\u{1F54B}", keywords: ["kaaba", "mecca"] },
    { emoji: "\u26E9\uFE0F", keywords: ["shinto shrine", "japan"] },
    { emoji: "\u{1F303}", keywords: ["night", "city", "starry"] },
    { emoji: "\u{1F306}", keywords: ["cityscape", "sunset"] },
    { emoji: "\u{1F307}", keywords: ["sunset", "city"] },
    { emoji: "\u{1F309}", keywords: ["bridge at night"] },
    { emoji: "\u{1F30C}", keywords: ["milky way", "galaxy", "space"] },
    { emoji: "\u{1F386}", keywords: ["fireworks", "celebrate"] },
    { emoji: "\u{1F387}", keywords: ["sparkler", "fireworks"] }
  ]
};

// src/compose/emoji/objects.ts
var objects = {
  label: "Objects",
  icon: "\u{1F4A1}",
  entries: [
    { emoji: "\u231A", keywords: ["watch", "time"] },
    { emoji: "\u{1F4F1}", keywords: ["phone", "mobile", "cell", "smartphone"] },
    { emoji: "\u{1F4F2}", keywords: ["phone", "call", "incoming"] },
    { emoji: "\u{1F4BB}", keywords: ["laptop", "computer", "pc"] },
    { emoji: "\u2328\uFE0F", keywords: ["keyboard", "type"] },
    { emoji: "\u{1F5A5}\uFE0F", keywords: ["desktop computer", "monitor"] },
    { emoji: "\u{1F5A8}\uFE0F", keywords: ["printer"] },
    { emoji: "\u{1F5B1}\uFE0F", keywords: ["computer mouse"] },
    { emoji: "\u{1F5B2}\uFE0F", keywords: ["trackball"] },
    { emoji: "\u{1F4BD}", keywords: ["computer disk", "minidisk"] },
    { emoji: "\u{1F4BE}", keywords: ["floppy disk", "save"] },
    { emoji: "\u{1F4BF}", keywords: ["cd", "disk", "optical"] },
    { emoji: "\u{1F4C0}", keywords: ["dvd", "disk"] },
    { emoji: "\u{1F4F7}", keywords: ["camera", "photo"] },
    { emoji: "\u{1F4F8}", keywords: ["camera with flash", "photo"] },
    { emoji: "\u{1F4F9}", keywords: ["video camera", "camcorder"] },
    { emoji: "\u{1F3A5}", keywords: ["movie camera", "film"] },
    { emoji: "\u{1F4FD}\uFE0F", keywords: ["film projector"] },
    { emoji: "\u{1F39E}\uFE0F", keywords: ["film frames", "movie"] },
    { emoji: "\u{1F4DE}", keywords: ["telephone", "call"] },
    { emoji: "\u260E\uFE0F", keywords: ["telephone", "call", "phone"] },
    { emoji: "\u{1F4DF}", keywords: ["pager", "beeper"] },
    { emoji: "\u{1F4E0}", keywords: ["fax machine"] },
    { emoji: "\u{1F4FA}", keywords: ["television", "tv", "screen"] },
    { emoji: "\u{1F4FB}", keywords: ["radio", "music"] },
    { emoji: "\u{1F399}\uFE0F", keywords: ["studio microphone", "podcast"] },
    { emoji: "\u{1F39A}\uFE0F", keywords: ["level slider", "volume"] },
    { emoji: "\u{1F39B}\uFE0F", keywords: ["control knobs", "dials"] },
    { emoji: "\u{1F9ED}", keywords: ["compass", "navigation"] },
    { emoji: "\u23F1\uFE0F", keywords: ["stopwatch", "timer"] },
    { emoji: "\u23F2\uFE0F", keywords: ["timer clock"] },
    { emoji: "\u23F0", keywords: ["alarm clock", "wake up"] },
    { emoji: "\u{1F570}\uFE0F", keywords: ["mantelpiece clock"] },
    { emoji: "\u231B", keywords: ["hourglass", "time", "sand"] },
    { emoji: "\u23F3", keywords: ["hourglass flowing", "time"] },
    { emoji: "\u{1F50B}", keywords: ["battery", "power", "charge"] },
    { emoji: "\u{1FAAB}", keywords: ["low battery"] },
    { emoji: "\u{1F50C}", keywords: ["plug", "electric", "power"] },
    { emoji: "\u{1F4A1}", keywords: ["light bulb", "idea", "bright"] },
    { emoji: "\u{1F526}", keywords: ["flashlight", "torch"] },
    { emoji: "\u{1F56F}\uFE0F", keywords: ["candle", "light", "flame"] },
    { emoji: "\u{1F9EF}", keywords: ["fire extinguisher"] },
    { emoji: "\u{1F5D1}\uFE0F", keywords: ["wastebasket", "trash", "delete"] },
    { emoji: "\u{1F6E2}\uFE0F", keywords: ["oil drum", "barrel"] },
    { emoji: "\u{1F4B8}", keywords: ["money with wings", "spending"] },
    { emoji: "\u{1F4B5}", keywords: ["dollar", "money", "cash"] },
    { emoji: "\u{1F4B4}", keywords: ["yen", "money"] },
    { emoji: "\u{1F4B6}", keywords: ["euro", "money"] },
    { emoji: "\u{1F4B7}", keywords: ["pound", "money"] },
    { emoji: "\u{1FA99}", keywords: ["coin", "money"] },
    { emoji: "\u{1F4B0}", keywords: ["money bag", "rich", "cash"] },
    { emoji: "\u{1F4B3}", keywords: ["credit card", "payment"] },
    { emoji: "\u{1F48E}", keywords: ["gem", "diamond", "jewel"] },
    { emoji: "\u2696\uFE0F", keywords: ["balance scale", "justice"] },
    { emoji: "\u{1FA9C}", keywords: ["ladder", "climb"] },
    { emoji: "\u{1F9F0}", keywords: ["toolbox", "tools"] },
    { emoji: "\u{1FA9B}", keywords: ["screwdriver", "tool"] },
    { emoji: "\u{1F527}", keywords: ["wrench", "tool", "settings"] },
    { emoji: "\u{1F528}", keywords: ["hammer", "tool", "build"] },
    { emoji: "\u2692\uFE0F", keywords: ["hammer and pick", "tool"] },
    { emoji: "\u{1F6E0}\uFE0F", keywords: ["hammer and wrench", "tools"] },
    { emoji: "\u26CF\uFE0F", keywords: ["pick", "mining"] },
    { emoji: "\u{1FA9A}", keywords: ["saw", "carpentry"] },
    { emoji: "\u{1F529}", keywords: ["nut and bolt", "hardware"] },
    { emoji: "\u2699\uFE0F", keywords: ["gear", "settings", "cog"] },
    { emoji: "\u{1FAA4}", keywords: ["mouse trap"] },
    { emoji: "\u{1F9F2}", keywords: ["magnet", "attract"] },
    { emoji: "\u{1F52B}", keywords: ["water gun", "pistol", "squirt"] },
    { emoji: "\u{1F4A3}", keywords: ["bomb", "explosive"] },
    { emoji: "\u{1F9E8}", keywords: ["firecracker", "dynamite"] },
    { emoji: "\u{1FA93}", keywords: ["axe", "chop"] },
    { emoji: "\u{1F52A}", keywords: ["kitchen knife", "cut"] },
    { emoji: "\u{1F5E1}\uFE0F", keywords: ["dagger", "sword"] },
    { emoji: "\u2694\uFE0F", keywords: ["crossed swords", "battle"] },
    { emoji: "\u{1F6E1}\uFE0F", keywords: ["shield", "defense", "protect"] },
    { emoji: "\u{1F511}", keywords: ["key", "lock", "password"] },
    { emoji: "\u{1F5DD}\uFE0F", keywords: ["old key", "vintage"] },
    { emoji: "\u{1F512}", keywords: ["lock", "locked", "secure", "privacy"] },
    { emoji: "\u{1F513}", keywords: ["unlocked", "open"] },
    { emoji: "\u{1F50F}", keywords: ["lock with pen", "privacy"] },
    { emoji: "\u{1F510}", keywords: ["locked with key", "secure"] },
    { emoji: "\u{1F4E7}", keywords: ["email", "e-mail", "envelope"] },
    { emoji: "\u2709\uFE0F", keywords: ["envelope", "mail", "letter"] },
    { emoji: "\u{1F4E8}", keywords: ["incoming envelope", "email"] },
    { emoji: "\u{1F4E9}", keywords: ["envelope with arrow", "email"] },
    { emoji: "\u{1F4E4}", keywords: ["outbox tray", "sent"] },
    { emoji: "\u{1F4E5}", keywords: ["inbox tray", "received"] },
    { emoji: "\u{1F4E6}", keywords: ["package", "box", "delivery"] },
    { emoji: "\u{1F4EB}", keywords: ["mailbox", "mail"] },
    { emoji: "\u{1F4EA}", keywords: ["mailbox", "empty"] },
    { emoji: "\u{1F4EC}", keywords: ["mailbox with mail"] },
    { emoji: "\u{1F4ED}", keywords: ["mailbox", "no mail"] },
    { emoji: "\u{1F4EE}", keywords: ["postbox", "mail"] },
    { emoji: "\u{1F4DD}", keywords: ["memo", "note", "write", "pencil"] },
    { emoji: "\u{1F4C3}", keywords: ["page with curl", "document"] },
    { emoji: "\u{1F4C4}", keywords: ["page facing up", "document"] },
    { emoji: "\u{1F4D1}", keywords: ["bookmark tabs"] },
    { emoji: "\u{1F4CA}", keywords: ["bar chart", "graph", "stats"] },
    { emoji: "\u{1F4C8}", keywords: ["chart increasing", "growth", "up"] },
    { emoji: "\u{1F4C9}", keywords: ["chart decreasing", "down"] },
    { emoji: "\u{1F5D2}\uFE0F", keywords: ["spiral notepad"] },
    { emoji: "\u{1F5D3}\uFE0F", keywords: ["spiral calendar"] },
    { emoji: "\u{1F4C6}", keywords: ["tear-off calendar", "date"] },
    { emoji: "\u{1F4C5}", keywords: ["calendar", "date"] },
    { emoji: "\u{1F4C7}", keywords: ["card index", "rolodex"] },
    { emoji: "\u{1F5C3}\uFE0F", keywords: ["card file box"] },
    { emoji: "\u{1F5F3}\uFE0F", keywords: ["ballot box", "vote"] },
    { emoji: "\u{1F5C4}\uFE0F", keywords: ["file cabinet"] },
    { emoji: "\u{1F4CB}", keywords: ["clipboard", "paste"] },
    { emoji: "\u{1F4C1}", keywords: ["file folder", "directory"] },
    { emoji: "\u{1F4C2}", keywords: ["open file folder"] },
    { emoji: "\u{1F5C2}\uFE0F", keywords: ["card index dividers"] },
    { emoji: "\u{1F4F0}", keywords: ["newspaper", "news"] },
    { emoji: "\u{1F4D3}", keywords: ["notebook"] },
    { emoji: "\u{1F4D4}", keywords: ["notebook with decorative cover"] },
    { emoji: "\u{1F4D2}", keywords: ["ledger", "notebook"] },
    { emoji: "\u{1F4D5}", keywords: ["closed book", "red"] },
    { emoji: "\u{1F4D7}", keywords: ["green book"] },
    { emoji: "\u{1F4D8}", keywords: ["blue book"] },
    { emoji: "\u{1F4D9}", keywords: ["orange book"] },
    { emoji: "\u{1F4DA}", keywords: ["books", "library", "study"] },
    { emoji: "\u{1F4D6}", keywords: ["open book", "read"] },
    { emoji: "\u{1F517}", keywords: ["link", "chain", "url"] },
    { emoji: "\u{1F4CE}", keywords: ["paperclip", "attachment"] },
    { emoji: "\u{1F587}\uFE0F", keywords: ["linked paperclips"] },
    { emoji: "\u2702\uFE0F", keywords: ["scissors", "cut"] },
    { emoji: "\u{1F4D0}", keywords: ["triangular ruler"] },
    { emoji: "\u{1F4CF}", keywords: ["straight ruler", "measure"] },
    { emoji: "\u{1F9EE}", keywords: ["abacus", "calculate"] },
    { emoji: "\u{1F4CC}", keywords: ["pushpin", "pin"] },
    { emoji: "\u{1F4CD}", keywords: ["round pushpin", "location"] },
    { emoji: "\u270F\uFE0F", keywords: ["pencil", "write"] },
    { emoji: "\u{1F58A}\uFE0F", keywords: ["pen", "write"] },
    { emoji: "\u{1F58B}\uFE0F", keywords: ["fountain pen", "write"] },
    { emoji: "\u{1F58C}\uFE0F", keywords: ["paintbrush", "art"] },
    { emoji: "\u{1F58D}\uFE0F", keywords: ["crayon", "draw"] },
    { emoji: "\u{1F50D}", keywords: ["magnifying glass", "search", "zoom"] },
    { emoji: "\u{1F50E}", keywords: ["magnifying glass right", "search"] }
  ]
};

// src/compose/emoji/symbols.ts
var symbols = {
  label: "Symbols",
  icon: "\u{1F49F}",
  entries: [
    { emoji: "\u2764\uFE0F", keywords: ["red heart", "love"] },
    { emoji: "\u{1F9E1}", keywords: ["orange heart", "love"] },
    { emoji: "\u{1F49B}", keywords: ["yellow heart", "love"] },
    { emoji: "\u{1F49A}", keywords: ["green heart", "love"] },
    { emoji: "\u{1F499}", keywords: ["blue heart", "love"] },
    { emoji: "\u{1F49C}", keywords: ["purple heart", "love"] },
    { emoji: "\u{1F5A4}", keywords: ["black heart", "love"] },
    { emoji: "\u{1F90D}", keywords: ["white heart", "love"] },
    { emoji: "\u{1F90E}", keywords: ["brown heart", "love"] },
    { emoji: "\u2764\uFE0F\u200D\u{1F525}", keywords: ["heart on fire", "passion"] },
    { emoji: "\u2764\uFE0F\u200D\u{1FA79}", keywords: ["mending heart", "healing"] },
    { emoji: "\u{1F494}", keywords: ["broken heart", "sad"] },
    { emoji: "\u{1F495}", keywords: ["two hearts", "love"] },
    { emoji: "\u{1F49E}", keywords: ["revolving hearts", "love"] },
    { emoji: "\u{1F493}", keywords: ["beating heart", "love"] },
    { emoji: "\u{1F497}", keywords: ["growing heart", "love"] },
    { emoji: "\u{1F496}", keywords: ["sparkling heart", "love"] },
    { emoji: "\u{1F498}", keywords: ["heart with arrow", "cupid"] },
    { emoji: "\u{1F49D}", keywords: ["heart with ribbon", "gift", "love"] },
    { emoji: "\u{1F49F}", keywords: ["heart decoration", "love"] },
    { emoji: "\u262E\uFE0F", keywords: ["peace", "symbol"] },
    { emoji: "\u271D\uFE0F", keywords: ["cross", "christian", "religion"] },
    { emoji: "\u262A\uFE0F", keywords: ["star and crescent", "islam"] },
    { emoji: "\u{1F549}\uFE0F", keywords: ["om", "hindu", "buddhist"] },
    { emoji: "\u2638\uFE0F", keywords: ["wheel of dharma", "buddhism"] },
    { emoji: "\u2721\uFE0F", keywords: ["star of david", "jewish"] },
    { emoji: "\u{1F52F}", keywords: ["six pointed star"] },
    { emoji: "\u{1F54E}", keywords: ["menorah", "jewish", "hanukkah"] },
    { emoji: "\u262F\uFE0F", keywords: ["yin yang", "balance"] },
    { emoji: "\u2626\uFE0F", keywords: ["orthodox cross"] },
    { emoji: "\u{1F6D0}", keywords: ["place of worship", "pray"] },
    { emoji: "\u26CE", keywords: ["ophiuchus", "zodiac"] },
    { emoji: "\u2648", keywords: ["aries", "zodiac"] },
    { emoji: "\u2649", keywords: ["taurus", "zodiac"] },
    { emoji: "\u264A", keywords: ["gemini", "zodiac"] },
    { emoji: "\u264B", keywords: ["cancer", "zodiac"] },
    { emoji: "\u264C", keywords: ["leo", "zodiac"] },
    { emoji: "\u264D", keywords: ["virgo", "zodiac"] },
    { emoji: "\u264E", keywords: ["libra", "zodiac"] },
    { emoji: "\u264F", keywords: ["scorpio", "zodiac"] },
    { emoji: "\u2650", keywords: ["sagittarius", "zodiac"] },
    { emoji: "\u2651", keywords: ["capricorn", "zodiac"] },
    { emoji: "\u2652", keywords: ["aquarius", "zodiac"] },
    { emoji: "\u2653", keywords: ["pisces", "zodiac"] },
    { emoji: "\u{1F194}", keywords: ["id", "identity"] },
    { emoji: "\u269B\uFE0F", keywords: ["atom", "science"] },
    { emoji: "\u{1F251}", keywords: ["accept", "japanese"] },
    { emoji: "\u2622\uFE0F", keywords: ["radioactive", "nuclear"] },
    { emoji: "\u2623\uFE0F", keywords: ["biohazard", "danger"] },
    { emoji: "\u{1F4F4}", keywords: ["mobile phone off"] },
    { emoji: "\u{1F4F3}", keywords: ["vibration mode"] },
    { emoji: "\u{1F236}", keywords: ["japanese not free of charge"] },
    { emoji: "\u{1F21A}", keywords: ["japanese free of charge"] },
    { emoji: "\u{1F238}", keywords: ["japanese application"] },
    { emoji: "\u{1F23A}", keywords: ["japanese open for business"] },
    { emoji: "\u{1F237}\uFE0F", keywords: ["japanese monthly amount"] },
    { emoji: "\u2734\uFE0F", keywords: ["eight pointed star"] },
    { emoji: "\u{1F19A}", keywords: ["vs", "versus", "against"] },
    { emoji: "\u{1F4AE}", keywords: ["white flower", "good job"] },
    { emoji: "\u{1F250}", keywords: ["japanese bargain"] },
    { emoji: "\u3299\uFE0F", keywords: ["japanese secret"] },
    { emoji: "\u3297\uFE0F", keywords: ["japanese congratulations"] },
    { emoji: "\u{1F234}", keywords: ["japanese passing grade"] },
    { emoji: "\u{1F235}", keywords: ["japanese no vacancy"] },
    { emoji: "\u{1F239}", keywords: ["japanese discount"] },
    { emoji: "\u{1F232}", keywords: ["japanese prohibited"] },
    { emoji: "\u{1F170}\uFE0F", keywords: ["a button", "blood type"] },
    { emoji: "\u{1F171}\uFE0F", keywords: ["b button", "blood type"] },
    { emoji: "\u{1F18E}", keywords: ["ab button", "blood type"] },
    { emoji: "\u{1F191}", keywords: ["cl button", "clear"] },
    { emoji: "\u{1F17E}\uFE0F", keywords: ["o button", "blood type"] },
    { emoji: "\u{1F198}", keywords: ["sos", "help", "emergency"] },
    { emoji: "\u274C", keywords: ["cross mark", "no", "wrong", "x"] },
    { emoji: "\u2B55", keywords: ["hollow red circle", "correct"] },
    { emoji: "\u{1F6D1}", keywords: ["stop sign", "halt"] },
    { emoji: "\u26D4", keywords: ["no entry", "prohibited"] },
    { emoji: "\u{1F4DB}", keywords: ["name badge"] },
    { emoji: "\u{1F6AB}", keywords: ["prohibited", "forbidden", "no"] },
    { emoji: "\u{1F4AF}", keywords: ["hundred", "perfect", "score", "100"] },
    { emoji: "\u{1F4A2}", keywords: ["anger", "angry", "symbol"] },
    { emoji: "\u2668\uFE0F", keywords: ["hot springs", "steam"] },
    { emoji: "\u{1F6B7}", keywords: ["no pedestrians"] },
    { emoji: "\u{1F6AF}", keywords: ["no littering"] },
    { emoji: "\u{1F6B3}", keywords: ["no bicycles"] },
    { emoji: "\u{1F6B1}", keywords: ["non-potable water"] },
    { emoji: "\u{1F51E}", keywords: ["no one under eighteen", "18+"] },
    { emoji: "\u{1F4F5}", keywords: ["no mobile phones"] },
    { emoji: "\u{1F507}", keywords: ["muted", "no sound"] },
    { emoji: "\u{1F515}", keywords: ["bell with slash", "mute"] },
    { emoji: "\u{1F50A}", keywords: ["speaker high volume", "loud"] },
    { emoji: "\u{1F509}", keywords: ["speaker medium volume"] },
    { emoji: "\u{1F508}", keywords: ["speaker low volume"] },
    { emoji: "\u{1F514}", keywords: ["bell", "notification", "alert"] },
    { emoji: "\u267B\uFE0F", keywords: ["recycling", "recycle", "green"] },
    { emoji: "\u2705", keywords: ["check mark", "yes", "correct", "done"] },
    { emoji: "\u274E", keywords: ["cross mark button", "no"] },
    { emoji: "\u303D\uFE0F", keywords: ["part alternation mark"] },
    { emoji: "\u2757", keywords: ["exclamation", "warning", "important"] },
    { emoji: "\u2753", keywords: ["question mark"] },
    { emoji: "\u2755", keywords: ["white exclamation mark"] },
    { emoji: "\u2754", keywords: ["white question mark"] },
    { emoji: "\u203C\uFE0F", keywords: ["double exclamation mark"] },
    { emoji: "\u2049\uFE0F", keywords: ["exclamation question mark"] },
    { emoji: "\u{1F505}", keywords: ["dim button", "brightness low"] },
    { emoji: "\u{1F506}", keywords: ["bright button", "brightness high"] },
    { emoji: "\u26A0\uFE0F", keywords: ["warning", "caution", "alert"] },
    { emoji: "\u{1F6B8}", keywords: ["children crossing"] },
    { emoji: "\u{1F531}", keywords: ["trident", "emblem"] },
    { emoji: "\u269C\uFE0F", keywords: ["fleur-de-lis"] },
    { emoji: "\u{1F530}", keywords: ["japanese symbol for beginner"] },
    { emoji: "\u267F", keywords: ["wheelchair", "accessibility"] },
    { emoji: "\u{1F3E7}", keywords: ["atm sign"] },
    { emoji: "\u24C2\uFE0F", keywords: ["circled m", "metro"] },
    { emoji: "\u{1F6C2}", keywords: ["passport control"] },
    { emoji: "\u{1F6C3}", keywords: ["customs"] },
    { emoji: "\u{1F6C4}", keywords: ["baggage claim"] },
    { emoji: "\u{1F6C5}", keywords: ["left luggage"] },
    { emoji: "\u{1F520}", keywords: ["input latin uppercase"] },
    { emoji: "\u{1F521}", keywords: ["input latin lowercase"] },
    { emoji: "\u{1F522}", keywords: ["input numbers"] },
    { emoji: "\u{1F523}", keywords: ["input symbols"] },
    { emoji: "\u{1F524}", keywords: ["input latin letters"] },
    { emoji: "\u2139\uFE0F", keywords: ["information", "info"] },
    { emoji: "\u{1F197}", keywords: ["ok button"] },
    { emoji: "\u{1F195}", keywords: ["new button"] },
    { emoji: "\u{1F199}", keywords: ["up button", "upgrade"] },
    { emoji: "\u{1F192}", keywords: ["cool button"] },
    { emoji: "\u{1F193}", keywords: ["free button"] },
    { emoji: "\u{1F196}", keywords: ["ng button", "no good"] },
    { emoji: "\u{1F17F}\uFE0F", keywords: ["p button", "parking"] },
    { emoji: "\u{1F201}", keywords: ["japanese here"] },
    { emoji: "\u{1F202}\uFE0F", keywords: ["japanese service charge"] },
    { emoji: "\u{1F233}", keywords: ["japanese vacancy"] },
    { emoji: "\u{1F503}", keywords: ["clockwise arrows", "reload", "refresh"] },
    { emoji: "\u{1F504}", keywords: ["counterclockwise arrows", "refresh"] },
    { emoji: "\u{1F519}", keywords: ["back arrow"] },
    { emoji: "\u{1F51A}", keywords: ["end arrow"] },
    { emoji: "\u{1F51B}", keywords: ["on arrow"] },
    { emoji: "\u{1F51C}", keywords: ["soon arrow"] },
    { emoji: "\u{1F51D}", keywords: ["top arrow"] },
    { emoji: "\u2B06\uFE0F", keywords: ["up arrow"] },
    { emoji: "\u2B07\uFE0F", keywords: ["down arrow"] },
    { emoji: "\u2B05\uFE0F", keywords: ["left arrow"] },
    { emoji: "\u27A1\uFE0F", keywords: ["right arrow"] },
    { emoji: "\u2197\uFE0F", keywords: ["up-right arrow"] },
    { emoji: "\u2198\uFE0F", keywords: ["down-right arrow"] },
    { emoji: "\u2199\uFE0F", keywords: ["down-left arrow"] },
    { emoji: "\u2196\uFE0F", keywords: ["up-left arrow"] },
    { emoji: "\u2195\uFE0F", keywords: ["up-down arrow"] },
    { emoji: "\u2194\uFE0F", keywords: ["left-right arrow"] },
    { emoji: "\u21A9\uFE0F", keywords: ["right arrow curving left", "undo"] },
    { emoji: "\u21AA\uFE0F", keywords: ["left arrow curving right", "redo"] },
    { emoji: "\u2934\uFE0F", keywords: ["right arrow curving up"] },
    { emoji: "\u2935\uFE0F", keywords: ["right arrow curving down"] },
    { emoji: "\u{1F500}", keywords: ["shuffle", "random"] },
    { emoji: "\u{1F501}", keywords: ["repeat", "loop"] },
    { emoji: "\u{1F502}", keywords: ["repeat single"] },
    { emoji: "\u25B6\uFE0F", keywords: ["play button", "start"] },
    { emoji: "\u23E9", keywords: ["fast forward"] },
    { emoji: "\u23ED\uFE0F", keywords: ["next track button"] },
    { emoji: "\u23EF\uFE0F", keywords: ["play or pause button"] },
    { emoji: "\u25C0\uFE0F", keywords: ["reverse button", "back"] },
    { emoji: "\u23EA", keywords: ["fast reverse", "rewind"] },
    { emoji: "\u23EE\uFE0F", keywords: ["last track button"] },
    { emoji: "\u23F8\uFE0F", keywords: ["pause button"] },
    { emoji: "\u23F9\uFE0F", keywords: ["stop button"] },
    { emoji: "\u23FA\uFE0F", keywords: ["record button"] },
    { emoji: "\u23CF\uFE0F", keywords: ["eject button"] },
    { emoji: "\u{1F3B5}", keywords: ["musical note", "music", "song"] },
    { emoji: "\u{1F3B6}", keywords: ["musical notes", "music", "singing"] },
    { emoji: "\u2795", keywords: ["plus", "add"] },
    { emoji: "\u2796", keywords: ["minus", "subtract"] },
    { emoji: "\u2797", keywords: ["divide", "division"] },
    { emoji: "\u2716\uFE0F", keywords: ["multiply", "times"] },
    { emoji: "\u267E\uFE0F", keywords: ["infinity", "forever"] },
    { emoji: "\u{1F4B2}", keywords: ["dollar sign", "money"] },
    { emoji: "\u{1F4B1}", keywords: ["currency exchange"] },
    { emoji: "\u2122\uFE0F", keywords: ["trade mark", "tm"] },
    { emoji: "\xA9\uFE0F", keywords: ["copyright"] },
    { emoji: "\xAE\uFE0F", keywords: ["registered"] },
    { emoji: "\u3030\uFE0F", keywords: ["wavy dash"] },
    { emoji: "\u27B0", keywords: ["curly loop"] },
    { emoji: "\u27BF", keywords: ["double curly loop"] },
    { emoji: "#\uFE0F\u20E3", keywords: ["keycap hash", "number sign", "hashtag"] },
    { emoji: "*\uFE0F\u20E3", keywords: ["keycap asterisk", "star"] },
    { emoji: "0\uFE0F\u20E3", keywords: ["keycap zero", "0"] },
    { emoji: "1\uFE0F\u20E3", keywords: ["keycap one", "1"] },
    { emoji: "2\uFE0F\u20E3", keywords: ["keycap two", "2"] },
    { emoji: "3\uFE0F\u20E3", keywords: ["keycap three", "3"] },
    { emoji: "4\uFE0F\u20E3", keywords: ["keycap four", "4"] },
    { emoji: "5\uFE0F\u20E3", keywords: ["keycap five", "5"] },
    { emoji: "6\uFE0F\u20E3", keywords: ["keycap six", "6"] },
    { emoji: "7\uFE0F\u20E3", keywords: ["keycap seven", "7"] },
    { emoji: "8\uFE0F\u20E3", keywords: ["keycap eight", "8"] },
    { emoji: "9\uFE0F\u20E3", keywords: ["keycap nine", "9"] },
    { emoji: "\u{1F51F}", keywords: ["keycap ten", "10"] },
    { emoji: "\u{1F536}", keywords: ["large orange diamond"] },
    { emoji: "\u{1F537}", keywords: ["large blue diamond"] },
    { emoji: "\u{1F538}", keywords: ["small orange diamond"] },
    { emoji: "\u{1F539}", keywords: ["small blue diamond"] },
    { emoji: "\u{1F53A}", keywords: ["red triangle up"] },
    { emoji: "\u{1F53B}", keywords: ["red triangle down"] },
    { emoji: "\u25FE", keywords: ["black medium-small square"] },
    { emoji: "\u25FD", keywords: ["white medium-small square"] },
    { emoji: "\u2B1B", keywords: ["black large square"] },
    { emoji: "\u2B1C", keywords: ["white large square"] },
    { emoji: "\u{1F7E5}", keywords: ["red square"] },
    { emoji: "\u{1F7E7}", keywords: ["orange square"] },
    { emoji: "\u{1F7E8}", keywords: ["yellow square"] },
    { emoji: "\u{1F7E9}", keywords: ["green square"] },
    { emoji: "\u{1F7E6}", keywords: ["blue square"] },
    { emoji: "\u{1F7EA}", keywords: ["purple square"] },
    { emoji: "\u{1F7EB}", keywords: ["brown square"] },
    { emoji: "\u{1F534}", keywords: ["red circle"] },
    { emoji: "\u{1F7E0}", keywords: ["orange circle"] },
    { emoji: "\u{1F7E1}", keywords: ["yellow circle"] },
    { emoji: "\u{1F7E2}", keywords: ["green circle"] },
    { emoji: "\u{1F535}", keywords: ["blue circle"] },
    { emoji: "\u{1F7E3}", keywords: ["purple circle"] },
    { emoji: "\u{1F7E4}", keywords: ["brown circle"] },
    { emoji: "\u26AB", keywords: ["black circle"] },
    { emoji: "\u26AA", keywords: ["white circle"] }
  ]
};

// src/compose/emoji/activities.ts
var activities = {
  label: "Activities",
  icon: "\u26BD",
  entries: [
    { emoji: "\u26BD", keywords: ["soccer", "football", "ball", "sport"] },
    { emoji: "\u{1F3C0}", keywords: ["basketball", "ball", "sport"] },
    { emoji: "\u{1F3C8}", keywords: ["american football", "ball", "sport"] },
    { emoji: "\u26BE", keywords: ["baseball", "ball", "sport"] },
    { emoji: "\u{1F94E}", keywords: ["softball", "ball"] },
    { emoji: "\u{1F3BE}", keywords: ["tennis", "ball", "sport"] },
    { emoji: "\u{1F3D0}", keywords: ["volleyball", "ball", "sport"] },
    { emoji: "\u{1F3C9}", keywords: ["rugby", "ball", "sport"] },
    { emoji: "\u{1F94F}", keywords: ["flying disc", "frisbee"] },
    { emoji: "\u{1F3B1}", keywords: ["billiards", "pool", "8 ball"] },
    { emoji: "\u{1FA80}", keywords: ["yo-yo", "toy"] },
    { emoji: "\u{1F3D3}", keywords: ["ping pong", "table tennis"] },
    { emoji: "\u{1F3F8}", keywords: ["badminton", "shuttlecock"] },
    { emoji: "\u{1F3D2}", keywords: ["ice hockey", "stick"] },
    { emoji: "\u{1F3D1}", keywords: ["field hockey", "stick"] },
    { emoji: "\u{1F94D}", keywords: ["lacrosse", "stick"] },
    { emoji: "\u{1F3CF}", keywords: ["cricket", "bat"] },
    { emoji: "\u{1FA83}", keywords: ["boomerang"] },
    { emoji: "\u{1F945}", keywords: ["goal net", "soccer"] },
    { emoji: "\u26F3", keywords: ["golf", "flag in hole"] },
    { emoji: "\u{1FA81}", keywords: ["kite", "fly"] },
    { emoji: "\u{1F3F9}", keywords: ["bow and arrow", "archery"] },
    { emoji: "\u{1F3A3}", keywords: ["fishing", "rod"] },
    { emoji: "\u{1F93F}", keywords: ["diving mask", "scuba", "snorkel"] },
    { emoji: "\u{1F94A}", keywords: ["boxing glove", "fight"] },
    { emoji: "\u{1F94B}", keywords: ["martial arts", "karate", "uniform"] },
    { emoji: "\u{1F3BF}", keywords: ["skis", "skiing", "snow"] },
    { emoji: "\u26F8\uFE0F", keywords: ["ice skate", "skating"] },
    { emoji: "\u{1F6F7}", keywords: ["sled", "sledge"] },
    { emoji: "\u{1F6F9}", keywords: ["skateboard", "skate"] },
    { emoji: "\u{1F6FC}", keywords: ["roller skate"] },
    { emoji: "\u{1F3AA}", keywords: ["circus tent"] },
    { emoji: "\u{1F3AD}", keywords: ["performing arts", "theater", "drama"] },
    { emoji: "\u{1F3A8}", keywords: ["art", "palette", "paint"] },
    { emoji: "\u{1F3AC}", keywords: ["clapper board", "movie", "film"] },
    { emoji: "\u{1F3A4}", keywords: ["microphone", "karaoke", "sing"] },
    { emoji: "\u{1F3A7}", keywords: ["headphones", "music", "listen"] },
    { emoji: "\u{1F3BC}", keywords: ["musical score", "music", "sheet"] },
    { emoji: "\u{1F3B9}", keywords: ["musical keyboard", "piano"] },
    { emoji: "\u{1F941}", keywords: ["drum", "beat", "percussion"] },
    { emoji: "\u{1FA98}", keywords: ["long drum"] },
    { emoji: "\u{1F3B7}", keywords: ["saxophone", "jazz", "music"] },
    { emoji: "\u{1F3BA}", keywords: ["trumpet", "brass", "music"] },
    { emoji: "\u{1FA97}", keywords: ["accordion"] },
    { emoji: "\u{1F3B8}", keywords: ["guitar", "rock", "music"] },
    { emoji: "\u{1FA95}", keywords: ["banjo", "music"] },
    { emoji: "\u{1F3BB}", keywords: ["violin", "music"] },
    { emoji: "\u{1F3B2}", keywords: ["dice", "game", "gamble"] },
    { emoji: "\u265F\uFE0F", keywords: ["chess pawn", "game"] },
    { emoji: "\u{1F3AF}", keywords: ["bullseye", "target", "dart"] },
    { emoji: "\u{1F3B3}", keywords: ["bowling", "sport"] },
    { emoji: "\u{1F3AE}", keywords: ["video game", "controller", "gaming"] },
    { emoji: "\u{1F579}\uFE0F", keywords: ["joystick", "arcade", "game"] },
    { emoji: "\u{1F3B0}", keywords: ["slot machine", "casino", "gamble"] },
    { emoji: "\u{1F9E9}", keywords: ["puzzle", "piece", "jigsaw"] },
    { emoji: "\u{1F9F8}", keywords: ["teddy bear", "toy", "plush"] },
    { emoji: "\u{1FA85}", keywords: ["pi\xF1ata", "party"] },
    { emoji: "\u{1FAA9}", keywords: ["mirror ball", "disco"] },
    { emoji: "\u{1FA86}", keywords: ["nesting dolls", "matryoshka"] },
    { emoji: "\u2660\uFE0F", keywords: ["spade suit", "cards"] },
    { emoji: "\u2665\uFE0F", keywords: ["heart suit", "cards"] },
    { emoji: "\u2666\uFE0F", keywords: ["diamond suit", "cards"] },
    { emoji: "\u2663\uFE0F", keywords: ["club suit", "cards"] },
    { emoji: "\u{1F0CF}", keywords: ["joker", "card", "wild"] },
    { emoji: "\u{1F004}", keywords: ["mahjong", "game"] },
    { emoji: "\u{1F3B4}", keywords: ["flower playing cards"] },
    { emoji: "\u{1F389}", keywords: ["party popper", "celebrate", "tada"] },
    { emoji: "\u{1F38A}", keywords: ["confetti ball", "celebrate"] },
    { emoji: "\u{1F388}", keywords: ["balloon", "party", "birthday"] },
    { emoji: "\u{1F381}", keywords: ["gift", "present", "wrapped"] },
    { emoji: "\u{1F380}", keywords: ["ribbon", "bow", "decoration"] },
    { emoji: "\u{1F3C6}", keywords: ["trophy", "winner", "champion", "award"] },
    { emoji: "\u{1F947}", keywords: ["gold medal", "first", "winner"] },
    { emoji: "\u{1F948}", keywords: ["silver medal", "second"] },
    { emoji: "\u{1F949}", keywords: ["bronze medal", "third"] },
    { emoji: "\u{1F3C5}", keywords: ["sports medal", "award"] },
    { emoji: "\u{1F396}\uFE0F", keywords: ["military medal", "honor"] },
    { emoji: "\u{1F397}\uFE0F", keywords: ["reminder ribbon", "awareness"] },
    { emoji: "\u{1F39F}\uFE0F", keywords: ["admission tickets"] },
    { emoji: "\u{1F3AB}", keywords: ["ticket", "admission"] },
    { emoji: "\u{1F386}", keywords: ["fireworks", "celebrate", "new year"] },
    { emoji: "\u{1F387}", keywords: ["sparkler", "fireworks"] },
    { emoji: "\u{1F9E8}", keywords: ["firecracker", "dynamite"] },
    { emoji: "\u{1F391}", keywords: ["moon viewing", "ceremony"] },
    { emoji: "\u{1F383}", keywords: ["jack-o-lantern", "halloween", "pumpkin"] },
    { emoji: "\u{1F384}", keywords: ["christmas tree", "holiday"] },
    { emoji: "\u{1F38B}", keywords: ["tanabata tree"] },
    { emoji: "\u{1F38D}", keywords: ["pine decoration", "new year"] },
    { emoji: "\u{1F38E}", keywords: ["japanese dolls"] },
    { emoji: "\u{1F38F}", keywords: ["carp streamer", "koinobori"] },
    { emoji: "\u{1F390}", keywords: ["wind chime"] },
    { emoji: "\u{1F38C}", keywords: ["crossed flags"] },
    { emoji: "\u{1F3EE}", keywords: ["red paper lantern", "izakaya"] },
    { emoji: "\u{1F9E7}", keywords: ["red envelope", "lucky money"] }
  ]
};

// src/compose/emoji/flags.ts
var flags = {
  label: "Flags",
  icon: "\u{1F3F3}\uFE0F",
  entries: [
    { emoji: "\u{1F3C1}", keywords: ["chequered flag", "race", "finish"] },
    { emoji: "\u{1F6A9}", keywords: ["triangular flag", "red flag"] },
    { emoji: "\u{1F38C}", keywords: ["crossed flags"] },
    { emoji: "\u{1F3F4}", keywords: ["black flag"] },
    { emoji: "\u{1F3F3}\uFE0F", keywords: ["white flag", "surrender"] },
    { emoji: "\u{1F3F3}\uFE0F\u200D\u{1F308}", keywords: ["rainbow flag", "pride", "lgbtq"] },
    { emoji: "\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F", keywords: ["transgender flag", "trans"] },
    { emoji: "\u{1F3F4}\u200D\u2620\uFE0F", keywords: ["pirate flag", "jolly roger"] },
    { emoji: "\u{1F1E6}\u{1F1EB}", keywords: ["afghanistan", "flag"] },
    { emoji: "\u{1F1E6}\u{1F1F1}", keywords: ["albania", "flag"] },
    { emoji: "\u{1F1E9}\u{1F1FF}", keywords: ["algeria", "flag"] },
    { emoji: "\u{1F1E6}\u{1F1F7}", keywords: ["argentina", "flag"] },
    { emoji: "\u{1F1E6}\u{1F1FA}", keywords: ["australia", "flag"] },
    { emoji: "\u{1F1E6}\u{1F1F9}", keywords: ["austria", "flag"] },
    { emoji: "\u{1F1E7}\u{1F1E9}", keywords: ["bangladesh", "flag"] },
    { emoji: "\u{1F1E7}\u{1F1EA}", keywords: ["belgium", "flag"] },
    { emoji: "\u{1F1E7}\u{1F1F7}", keywords: ["brazil", "flag"] },
    { emoji: "\u{1F1E8}\u{1F1E6}", keywords: ["canada", "flag"] },
    { emoji: "\u{1F1E8}\u{1F1F1}", keywords: ["chile", "flag"] },
    { emoji: "\u{1F1E8}\u{1F1F3}", keywords: ["china", "flag"] },
    { emoji: "\u{1F1E8}\u{1F1F4}", keywords: ["colombia", "flag"] },
    { emoji: "\u{1F1ED}\u{1F1F7}", keywords: ["croatia", "flag"] },
    { emoji: "\u{1F1E8}\u{1F1FA}", keywords: ["cuba", "flag"] },
    { emoji: "\u{1F1E8}\u{1F1FF}", keywords: ["czech republic", "czechia", "flag"] },
    { emoji: "\u{1F1E9}\u{1F1F0}", keywords: ["denmark", "flag"] },
    { emoji: "\u{1F1EA}\u{1F1EC}", keywords: ["egypt", "flag"] },
    { emoji: "\u{1F1EA}\u{1F1F9}", keywords: ["ethiopia", "flag"] },
    { emoji: "\u{1F1EB}\u{1F1EE}", keywords: ["finland", "flag"] },
    { emoji: "\u{1F1EB}\u{1F1F7}", keywords: ["france", "french", "flag"] },
    { emoji: "\u{1F1E9}\u{1F1EA}", keywords: ["germany", "flag"] },
    { emoji: "\u{1F1EC}\u{1F1F7}", keywords: ["greece", "flag"] },
    { emoji: "\u{1F1ED}\u{1F1F0}", keywords: ["hong kong", "flag"] },
    { emoji: "\u{1F1ED}\u{1F1FA}", keywords: ["hungary", "flag"] },
    { emoji: "\u{1F1EE}\u{1F1F8}", keywords: ["iceland", "flag"] },
    { emoji: "\u{1F1EE}\u{1F1F3}", keywords: ["india", "flag"] },
    { emoji: "\u{1F1EE}\u{1F1E9}", keywords: ["indonesia", "flag"] },
    { emoji: "\u{1F1EE}\u{1F1F7}", keywords: ["iran", "flag"] },
    { emoji: "\u{1F1EE}\u{1F1F6}", keywords: ["iraq", "flag"] },
    { emoji: "\u{1F1EE}\u{1F1EA}", keywords: ["ireland", "flag"] },
    { emoji: "\u{1F1EE}\u{1F1F1}", keywords: ["israel", "flag"] },
    { emoji: "\u{1F1EE}\u{1F1F9}", keywords: ["italy", "flag"] },
    { emoji: "\u{1F1EF}\u{1F1F2}", keywords: ["jamaica", "flag"] },
    { emoji: "\u{1F1EF}\u{1F1F5}", keywords: ["japan", "flag"] },
    { emoji: "\u{1F1EF}\u{1F1F4}", keywords: ["jordan", "flag"] },
    { emoji: "\u{1F1F0}\u{1F1EA}", keywords: ["kenya", "flag"] },
    { emoji: "\u{1F1F0}\u{1F1F5}", keywords: ["north korea", "flag"] },
    { emoji: "\u{1F1F0}\u{1F1F7}", keywords: ["south korea", "korea", "flag"] },
    { emoji: "\u{1F1F0}\u{1F1FC}", keywords: ["kuwait", "flag"] },
    { emoji: "\u{1F1F1}\u{1F1E7}", keywords: ["lebanon", "flag"] },
    { emoji: "\u{1F1F2}\u{1F1FE}", keywords: ["malaysia", "flag"] },
    { emoji: "\u{1F1F2}\u{1F1FD}", keywords: ["mexico", "flag"] },
    { emoji: "\u{1F1F2}\u{1F1E6}", keywords: ["morocco", "flag"] },
    { emoji: "\u{1F1F3}\u{1F1F1}", keywords: ["netherlands", "dutch", "flag"] },
    { emoji: "\u{1F1F3}\u{1F1FF}", keywords: ["new zealand", "flag"] },
    { emoji: "\u{1F1F3}\u{1F1EC}", keywords: ["nigeria", "flag"] },
    { emoji: "\u{1F1F3}\u{1F1F4}", keywords: ["norway", "flag"] },
    { emoji: "\u{1F1F5}\u{1F1F0}", keywords: ["pakistan", "flag"] },
    { emoji: "\u{1F1F5}\u{1F1ED}", keywords: ["philippines", "flag"] },
    { emoji: "\u{1F1F5}\u{1F1F1}", keywords: ["poland", "flag"] },
    { emoji: "\u{1F1F5}\u{1F1F9}", keywords: ["portugal", "flag"] },
    { emoji: "\u{1F1F6}\u{1F1E6}", keywords: ["qatar", "flag"] },
    { emoji: "\u{1F1F7}\u{1F1F4}", keywords: ["romania", "flag"] },
    { emoji: "\u{1F1F7}\u{1F1FA}", keywords: ["russia", "flag"] },
    { emoji: "\u{1F1F8}\u{1F1E6}", keywords: ["saudi arabia", "flag"] },
    { emoji: "\u{1F1F8}\u{1F1EC}", keywords: ["singapore", "flag"] },
    { emoji: "\u{1F1FF}\u{1F1E6}", keywords: ["south africa", "flag"] },
    { emoji: "\u{1F1EA}\u{1F1F8}", keywords: ["spain", "flag"] },
    { emoji: "\u{1F1F8}\u{1F1EA}", keywords: ["sweden", "flag"] },
    { emoji: "\u{1F1E8}\u{1F1ED}", keywords: ["switzerland", "flag"] },
    { emoji: "\u{1F1F9}\u{1F1FC}", keywords: ["taiwan", "flag"] },
    { emoji: "\u{1F1F9}\u{1F1ED}", keywords: ["thailand", "flag"] },
    { emoji: "\u{1F1F9}\u{1F1F7}", keywords: ["turkey", "turkiye", "flag"] },
    { emoji: "\u{1F1FA}\u{1F1E6}", keywords: ["ukraine", "flag"] },
    { emoji: "\u{1F1E6}\u{1F1EA}", keywords: ["united arab emirates", "uae", "flag"] },
    { emoji: "\u{1F1EC}\u{1F1E7}", keywords: ["united kingdom", "uk", "britain", "flag"] },
    { emoji: "\u{1F1FA}\u{1F1F8}", keywords: ["united states", "usa", "america", "flag"] },
    { emoji: "\u{1F1FB}\u{1F1F3}", keywords: ["vietnam", "flag"] },
    { emoji: "\u{1F1EA}\u{1F1FA}", keywords: ["european union", "eu", "flag"] },
    { emoji: "\u{1F1FA}\u{1F1F3}", keywords: ["united nations", "un", "flag"] }
  ]
};

// src/compose/emoji/categories.ts
var emoji_categories = {
  smileys,
  gestures,
  animals,
  food,
  travel,
  objects,
  symbols,
  activities,
  flags
};

// src/compose/emoji/search.ts
function get_all_emojis() {
  return Object.values(emoji_categories).flatMap(
    (category) => category.entries
  );
}
function search_emojis(query) {
  const lower = query.toLowerCase().trim();
  if (!lower) return [];
  return get_all_emojis().filter(
    (entry) => entry.emoji.includes(lower) || entry.keywords.some((kw) => kw.includes(lower))
  );
}

// src/compose/emoji/skin_tones.ts
var skin_tones = [
  "default",
  "light",
  "medium_light",
  "medium",
  "medium_dark",
  "dark"
];
var skin_tone_modifiers = {
  default: "",
  light: "\u{1F3FB}",
  medium_light: "\u{1F3FC}",
  medium: "\u{1F3FD}",
  medium_dark: "\u{1F3FE}",
  dark: "\u{1F3FF}"
};
var skin_tone_swatches = {
  default: "\u270B",
  light: "\u270B\u{1F3FB}",
  medium_light: "\u270B\u{1F3FC}",
  medium: "\u270B\u{1F3FD}",
  medium_dark: "\u270B\u{1F3FE}",
  dark: "\u270B\u{1F3FF}"
};
var tone_capable_emoji = /* @__PURE__ */ new Set([
  "\u{1F44B}",
  "\u{1F91A}",
  "\u{1F590}\uFE0F",
  "\u270B",
  "\u{1F596}",
  "\u{1FAF1}",
  "\u{1FAF2}",
  "\u{1FAF3}",
  "\u{1FAF4}",
  "\u{1FAF7}",
  "\u{1FAF8}",
  "\u{1F44C}",
  "\u{1F90C}",
  "\u{1F90F}",
  "\u270C\uFE0F",
  "\u{1F91E}",
  "\u{1FAF0}",
  "\u{1F91F}",
  "\u{1F918}",
  "\u{1F919}",
  "\u{1F448}",
  "\u{1F449}",
  "\u{1F446}",
  "\u{1F595}",
  "\u{1F447}",
  "\u261D\uFE0F",
  "\u{1FAF5}",
  "\u{1F44D}",
  "\u{1F44E}",
  "\u270A",
  "\u{1F44A}",
  "\u{1F91B}",
  "\u{1F91C}",
  "\u{1F44F}",
  "\u{1F64C}",
  "\u{1FAF6}",
  "\u{1F450}",
  "\u{1F932}",
  "\u{1F64F}",
  "\u270D\uFE0F",
  "\u{1F485}",
  "\u{1F933}",
  "\u{1F4AA}",
  "\u{1F442}",
  "\u{1F9BB}",
  "\u{1F443}",
  "\u{1F476}",
  "\u{1F9D2}",
  "\u{1F466}",
  "\u{1F467}",
  "\u{1F9D1}",
  "\u{1F471}",
  "\u{1F468}",
  "\u{1F9D4}",
  "\u{1F469}",
  "\u{1F9D3}",
  "\u{1F474}",
  "\u{1F475}",
  "\u{1F64D}",
  "\u{1F64E}",
  "\u{1F645}",
  "\u{1F646}",
  "\u{1F481}",
  "\u{1F64B}",
  "\u{1F9CF}",
  "\u{1F647}",
  "\u{1F926}",
  "\u{1F937}",
  "\u{1F46E}",
  "\u{1F575}\uFE0F",
  "\u{1F482}",
  "\u{1F977}",
  "\u{1F477}",
  "\u{1FAC5}",
  "\u{1F934}",
  "\u{1F478}",
  "\u{1F9D9}",
  "\u{1F9DA}",
  "\u{1F9DB}",
  "\u{1F9DC}",
  "\u{1F9DD}",
  "\u{1F486}",
  "\u{1F487}",
  "\u{1F6B6}",
  "\u{1F9CD}",
  "\u{1F9CE}",
  "\u{1F3C3}",
  "\u{1F483}",
  "\u{1F57A}",
  "\u{1F9D6}",
  "\u{1F9D7}",
  "\u{1F938}",
  "\u{1F3CC}\uFE0F",
  "\u{1F3CB}\uFE0F",
  "\u{1F93D}",
  "\u{1F93E}",
  "\u{1F93A}",
  "\u26F9\uFE0F",
  "\u{1F3CA}",
  "\u{1F6A3}",
  "\u{1F9D8}",
  "\u{1F6C0}",
  "\u{1F6CC}"
]);
function is_tone_capable(emoji) {
  return tone_capable_emoji.has(emoji);
}
function apply_skin_tone(emoji, tone) {
  if (tone === "default" || !is_tone_capable(emoji)) return emoji;
  const modifier = skin_tone_modifiers[tone];
  const variation_selector = "\uFE0F";
  if (emoji.endsWith(variation_selector)) {
    return emoji.slice(0, -variation_selector.length) + modifier;
  }
  return emoji + modifier;
}

// src/compose/emoji_picker.tsx
var import_jsx_runtime58 = require("react/jsx-runtime");
var RECENT_KEY = "recent";
var CATEGORY_KEYS = Object.keys(emoji_categories);
var SKIN_TONE_STORAGE_KEY = "aster_emoji_skin_tone";
var RECENT_STORAGE_KEY = "aster_emoji_recent";
var RECENT_LIMIT = 16;
var SCROLL_SPY_OFFSET = 12;
var TAB_STEPS = { ArrowRight: 1, ArrowLeft: -1 };
var ICON_SHAPES = {
  recent: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M12 6v6l4 2" })
  ] }),
  smileys: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M9 9h.01" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M15 9h.01" })
  ] }),
  gestures: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" })
  ] }),
  animals: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("circle", { cx: "11", cy: "4", r: "2" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("circle", { cx: "18", cy: "8", r: "2" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("circle", { cx: "20", cy: "16", r: "2" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" })
  ] }),
  food: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M10 2c1 .5 2 2 2 5" })
  ] }),
  travel: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("circle", { cx: "7", cy: "17", r: "2" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M9 17h6" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("circle", { cx: "17", cy: "17", r: "2" })
  ] }),
  objects: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M9 18h6" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M10 22h4" })
  ] }),
  symbols: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }),
  activities: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M11.1 7.1a16.55 16.55 0 0 1 10.9 4" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M12 12a12.6 12.6 0 0 1-8.7 5" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M16.8 13.6a16.55 16.55 0 0 1-9 7.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("circle", { cx: "12", cy: "12", r: "10" })
  ] }),
  flags: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M4 22v-7" })
  ] }),
  search: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "m21 21-4.3-4.3" })
  ] }),
  close: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M18 6 6 18" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "m6 6 12 12" })
  ] })
};
function PickerIcon({ name, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      focusable: "false",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.9,
      viewBox: "0 0 24 24",
      children: ICON_SHAPES[name] ?? ICON_SHAPES.smileys
    }
  );
}
var ENTRY_BY_EMOJI = new Map(
  Object.values(emoji_categories).flatMap(
    (category) => category.entries.map((entry) => [entry.emoji, entry])
  )
);
var emoji_support_cache = /* @__PURE__ */ new Map();
var support_canvas = null;
var renderable_sections = null;
function is_emoji_renderable(emoji) {
  const cached = emoji_support_cache.get(emoji);
  if (cached !== void 0) return cached;
  if (!support_canvas) {
    support_canvas = document.createElement("canvas");
  }
  support_canvas.width = 20;
  support_canvas.height = 20;
  const ctx = support_canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return true;
  ctx.textBaseline = "top";
  ctx.font = "16px 'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif";
  ctx.fillStyle = "#000";
  ctx.fillText(emoji, 0, 0);
  const data = ctx.getImageData(0, 0, 20, 20).data;
  let supported = false;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 16 && (data[i] !== data[i + 1] || data[i + 1] !== data[i + 2])) {
      supported = true;
      break;
    }
  }
  if (supported && emoji.includes(String.fromCharCode(8205))) {
    const width = ctx.measureText(emoji).width;
    const single_width = ctx.measureText("\u{1F600}").width;
    if (width > single_width * 1.25) {
      supported = false;
    }
  }
  emoji_support_cache.set(emoji, supported);
  return supported;
}
function category_sections() {
  if (!renderable_sections) {
    renderable_sections = CATEGORY_KEYS.map((key) => ({
      key,
      entries: emoji_categories[key].entries.filter(
        (entry) => is_emoji_renderable(entry.emoji)
      )
    })).filter((section) => section.entries.length > 0);
  }
  return renderable_sections;
}
function prefers_touch() {
  try {
    return window.matchMedia("(pointer: coarse)").matches;
  } catch {
    return false;
  }
}
function load_skin_tone() {
  try {
    const stored = localStorage.getItem(SKIN_TONE_STORAGE_KEY);
    if (stored && skin_tones.includes(stored)) {
      return stored;
    }
  } catch {
    return "default";
  }
  return "default";
}
function load_recent() {
  try {
    const parsed = JSON.parse(
      localStorage.getItem(RECENT_STORAGE_KEY) ?? "[]"
    );
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (value) => typeof value === "string" && ENTRY_BY_EMOJI.has(value)
    ).slice(0, RECENT_LIMIT);
  } catch {
    return [];
  }
}
function remember_recent(emoji) {
  const next = [emoji, ...load_recent().filter((value) => value !== emoji)];
  try {
    localStorage.setItem(
      RECENT_STORAGE_KEY,
      JSON.stringify(next.slice(0, RECENT_LIMIT))
    );
  } catch {
    return;
  }
}
function entry_from_event(event) {
  const button = event.target.closest(
    "[data-emoji]"
  );
  const emoji = button?.dataset.emoji;
  return emoji ? ENTRY_BY_EMOJI.get(emoji) ?? null : null;
}
function vertical_neighbor(buttons, index, direction) {
  const current = buttons[index].getBoundingClientRect();
  let row_top = null;
  let best = null;
  let best_distance = Infinity;
  for (let i = index + direction; i >= 0 && i < buttons.length; i += direction) {
    const rect = buttons[i].getBoundingClientRect();
    const crossed = direction === 1 ? rect.top > current.top + 4 : rect.top < current.top - 4;
    if (!crossed) continue;
    if (row_top === null) row_top = rect.top;
    if (Math.abs(rect.top - row_top) > 4) break;
    const distance = Math.abs(rect.left - current.left);
    if (distance < best_distance) {
      best_distance = distance;
      best = i;
    }
  }
  return best;
}
var EmojiGrid = (0, import_react13.memo)(function EmojiGrid2({
  entries,
  skin_tone
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "aster_emoji_grid", children: entries.map((entry, index) => {
    const toned = apply_skin_tone(entry.emoji, skin_tone);
    return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
      "button",
      {
        "aria-label": entry.keywords[0] ?? toned,
        className: "aster_emoji_cell",
        "data-emoji": entry.emoji,
        type: "button",
        children: toned
      },
      `${entry.emoji}-${index}`
    );
  }) });
});
function EmojiPicker({
  on_select,
  labels,
  reduce_motion: reduce_motion_prop
}) {
  const system_reduce_motion = (0, import_framer_motion11.useReducedMotion)();
  const reduce_motion = reduce_motion_prop ?? !!system_reduce_motion;
  const indicator_id = (0, import_react13.useId)();
  const [search_query, set_search_query] = (0, import_react13.useState)("");
  const [skin_tone, set_skin_tone] = (0, import_react13.useState)(load_skin_tone);
  const [show_tones, set_show_tones] = (0, import_react13.useState)(false);
  const [recent] = (0, import_react13.useState)(load_recent);
  const [is_touch] = (0, import_react13.useState)(prefers_touch);
  const grid_ref = (0, import_react13.useRef)(null);
  const input_ref = (0, import_react13.useRef)(null);
  const tones_ref = (0, import_react13.useRef)(null);
  const tab_refs = (0, import_react13.useRef)([]);
  const spy_frame_ref = (0, import_react13.useRef)(0);
  const pending_jump_ref = (0, import_react13.useRef)(null);
  const trimmed_query = search_query.trim();
  const is_searching = trimmed_query.length > 0;
  const category_labels = labels.categories;
  const category_label = (key) => category_labels?.[key] ?? emoji_categories[key]?.label ?? key;
  const sections = (0, import_react13.useMemo)(() => {
    const recent_entries = recent.map((emoji) => ENTRY_BY_EMOJI.get(emoji)).filter(
      (entry) => entry !== void 0 && is_emoji_renderable(entry.emoji)
    );
    const categories = category_sections();
    return recent_entries.length > 0 ? [{ key: RECENT_KEY, entries: recent_entries }, ...categories] : categories;
  }, [recent]);
  const section_keys = (0, import_react13.useMemo)(
    () => sections.map((section) => section.key),
    [sections]
  );
  const [active_section, set_active_section] = (0, import_react13.useState)(section_keys[0]);
  const search_results = (0, import_react13.useMemo)(
    () => is_searching ? search_emojis(trimmed_query).filter(
      (entry) => is_emoji_renderable(entry.emoji)
    ) : [],
    [is_searching, trimmed_query]
  );
  const content = (0, import_react13.useMemo)(() => {
    if (is_searching) {
      return search_results.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "aster_emoji_results", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(EmojiGrid, { entries: search_results, skin_tone }) }) : /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "aster_emoji_empty", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(PickerIcon, { className: "aster_emoji_empty_icon", name: "search" }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { children: labels.no_results })
      ] });
    }
    return sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("section", { "data-section": section.key, children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "aster_emoji_section_label", children: category_labels?.[section.key] ?? emoji_categories[section.key]?.label ?? section.key }),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(EmojiGrid, { entries: section.entries, skin_tone })
    ] }, section.key));
  }, [
    is_searching,
    search_results,
    sections,
    skin_tone,
    labels.no_results,
    category_labels
  ]);
  const select_entry = (entry) => {
    remember_recent(entry.emoji);
    on_select(apply_skin_tone(entry.emoji, skin_tone));
  };
  const select_skin_tone = (tone) => {
    set_skin_tone(tone);
    set_show_tones(false);
    try {
      localStorage.setItem(SKIN_TONE_STORAGE_KEY, tone);
    } catch {
      return;
    }
  };
  const scroll_to_section = (key) => {
    const grid = grid_ref.current;
    const target = grid?.querySelector(`[data-section="${key}"]`);
    if (!grid || !target) return;
    grid.scrollTop = target.offsetTop;
  };
  const choose_section = (key) => {
    set_active_section(key);
    if (is_searching) {
      pending_jump_ref.current = key;
      set_search_query("");
      return;
    }
    scroll_to_section(key);
  };
  const update_active_from_scroll = () => {
    const grid = grid_ref.current;
    if (!grid || is_searching) return;
    const threshold = grid.scrollTop + SCROLL_SPY_OFFSET;
    const nodes = grid.querySelectorAll("[data-section]");
    let current = section_keys[0];
    for (const node of nodes) {
      if (node.offsetTop > threshold) break;
      current = node.dataset.section ?? current;
    }
    if (grid.scrollTop + grid.clientHeight >= grid.scrollHeight - 2) {
      current = nodes[nodes.length - 1]?.dataset.section ?? current;
    }
    set_active_section(
      (previous) => previous === current ? previous : current
    );
  };
  const handle_scroll = () => {
    if (spy_frame_ref.current) return;
    spy_frame_ref.current = window.requestAnimationFrame(() => {
      spy_frame_ref.current = 0;
      update_active_from_scroll();
    });
  };
  const emoji_buttons = () => Array.from(
    grid_ref.current?.querySelectorAll("[data-emoji]") ?? []
  );
  const focus_emoji = (buttons, index) => {
    const target = buttons[index];
    if (!target) return;
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: "nearest" });
  };
  const handle_search_key = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focus_emoji(emoji_buttons(), 0);
      return;
    }
    if (event.key === "Escape" && is_searching) {
      event.preventDefault();
      event.stopPropagation();
      set_search_query("");
      return;
    }
    if (event.key !== "Enter" || !is_searching) return;
    const first = search_results[0];
    if (!first) return;
    event.preventDefault();
    select_entry(first);
  };
  const handle_tab_key = (event, index) => {
    const step = TAB_STEPS[event.key];
    if (step === void 0) return;
    event.preventDefault();
    const next = (index + step + section_keys.length) % section_keys.length;
    choose_section(section_keys[next]);
    tab_refs.current[next]?.focus();
  };
  const handle_grid_key = (event) => {
    const key = event.key;
    if (key !== "ArrowRight" && key !== "ArrowLeft" && key !== "ArrowDown" && key !== "ArrowUp") {
      return;
    }
    const buttons = emoji_buttons();
    const index = buttons.indexOf(document.activeElement);
    if (index === -1) return;
    event.preventDefault();
    if (key === "ArrowRight" || key === "ArrowLeft") {
      const step = key === "ArrowRight" ? 1 : -1;
      focus_emoji(
        buttons,
        Math.max(0, Math.min(buttons.length - 1, index + step))
      );
      return;
    }
    const next = vertical_neighbor(
      buttons,
      index,
      key === "ArrowDown" ? 1 : -1
    );
    if (next === null) {
      if (key === "ArrowUp") input_ref.current?.focus();
      return;
    }
    focus_emoji(buttons, next);
  };
  const handle_grid_click = (event) => {
    const entry = entry_from_event(event);
    if (entry) select_entry(entry);
  };
  const clear_search = () => {
    set_search_query("");
    input_ref.current?.focus();
  };
  (0, import_react13.useLayoutEffect)(() => {
    const grid = grid_ref.current;
    if (!grid) return;
    if (is_searching) {
      grid.scrollTop = 0;
      return;
    }
    const jump = pending_jump_ref.current;
    pending_jump_ref.current = null;
    if (jump) {
      scroll_to_section(jump);
    } else {
      grid.scrollTop = 0;
      set_active_section(section_keys[0]);
    }
  }, [is_searching, trimmed_query, section_keys]);
  (0, import_react13.useEffect)(() => {
    if (!is_touch) input_ref.current?.focus({ preventScroll: true });
    return () => window.cancelAnimationFrame(spy_frame_ref.current);
  }, [is_touch]);
  (0, import_react13.useEffect)(() => {
    if (!show_tones) return;
    const handle_pointer = (event) => {
      if (!tones_ref.current?.contains(event.target)) {
        set_show_tones(false);
      }
    };
    document.addEventListener("pointerdown", handle_pointer, true);
    return () => document.removeEventListener("pointerdown", handle_pointer, true);
  }, [show_tones]);
  const fade = reduce_motion ? { duration: 0 } : { duration: 0.16, ease: [0.2, 0, 0, 1] };
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "aster_emoji_picker", onMouseDown: (e) => e.preventDefault(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "aster_emoji_tabs", role: "tablist", children: section_keys.map((key, index) => {
      const is_active = !is_searching && active_section === key;
      const is_focus_target = is_searching ? index === 0 : is_active;
      return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(Tooltip, { position: "top", tip: category_label(key), children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
        "button",
        {
          ref: (node) => {
            tab_refs.current[index] = node;
          },
          "aria-label": category_label(key),
          "aria-selected": is_active,
          className: "aster_emoji_tab",
          "data-active": is_active || void 0,
          role: "tab",
          tabIndex: is_focus_target ? 0 : -1,
          type: "button",
          onClick: () => choose_section(key),
          onKeyDown: (event) => handle_tab_key(event, index),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(PickerIcon, { className: "aster_emoji_tab_icon", name: key }),
            is_active && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
              import_framer_motion11.motion.span,
              {
                className: "aster_emoji_tab_indicator",
                layoutId: `${indicator_id}_emoji_tab`,
                transition: reduce_motion ? { duration: 0 } : { type: "spring", stiffness: 620, damping: 44 }
              }
            )
          ]
        }
      ) }, key);
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
      "div",
      {
        ref: tones_ref,
        className: "aster_emoji_head",
        onKeyDown: (event) => {
          if (event.key !== "Escape" || !show_tones) return;
          event.stopPropagation();
          set_show_tones(false);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_framer_motion11.AnimatePresence, { initial: false, mode: "wait", children: show_tones ? /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
            import_framer_motion11.motion.div,
            {
              animate: { opacity: 1 },
              "aria-label": labels.skin_tone,
              className: "aster_emoji_tone_row",
              exit: { opacity: 0 },
              initial: reduce_motion ? false : { opacity: 0 },
              role: "group",
              transition: fade,
              children: skin_tones.map((tone) => /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
                "button",
                {
                  "aria-label": labels.skin_tone,
                  "aria-pressed": skin_tone === tone,
                  className: "aster_emoji_tone_option",
                  "data-active": skin_tone === tone || void 0,
                  type: "button",
                  onClick: () => select_skin_tone(tone),
                  children: skin_tone_swatches[tone]
                },
                tone
              ))
            },
            "tones"
          ) : /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
            import_framer_motion11.motion.div,
            {
              animate: { opacity: 1 },
              className: "aster_emoji_search",
              exit: { opacity: 0 },
              initial: reduce_motion ? false : { opacity: 0 },
              transition: fade,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(PickerIcon, { className: "aster_emoji_search_icon", name: "search" }),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
                  "input",
                  {
                    ref: input_ref,
                    "aria-label": labels.search,
                    autoCapitalize: "off",
                    autoComplete: "off",
                    autoCorrect: "off",
                    className: "aster_emoji_search_input",
                    enterKeyHint: "done",
                    inputMode: "search",
                    placeholder: labels.search,
                    spellCheck: false,
                    type: "text",
                    value: search_query,
                    onChange: (e) => set_search_query(e.target.value),
                    onKeyDown: handle_search_key,
                    onMouseDown: (e) => e.stopPropagation()
                  }
                ),
                is_searching && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
                  "button",
                  {
                    "aria-label": labels.clear ?? labels.search,
                    className: "aster_emoji_search_clear",
                    type: "button",
                    onClick: clear_search,
                    children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(PickerIcon, { className: "aster_emoji_clear_icon", name: "close" })
                  }
                )
              ]
            },
            "search"
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(Tooltip, { position: "top", tip: labels.skin_tone, children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
            "button",
            {
              "aria-expanded": show_tones,
              "aria-label": labels.skin_tone,
              className: "aster_emoji_tone_btn",
              "data-open": show_tones || void 0,
              type: "button",
              onClick: () => set_show_tones(!show_tones),
              children: show_tones ? /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(PickerIcon, { className: "aster_emoji_tone_close", name: "close" }) : skin_tone_swatches[skin_tone]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
      "div",
      {
        ref: grid_ref,
        className: "aster_emoji_body",
        onClick: handle_grid_click,
        onKeyDown: handle_grid_key,
        onScroll: handle_scroll,
        children: content
      }
    )
  ] });
}

// src/compose/emoji_popover.tsx
var import_react14 = require("react");
var import_react_dom = require("react-dom");
var import_framer_motion12 = require("framer-motion");
var import_jsx_runtime59 = require("react/jsx-runtime");
var EMOJI_PICKER_WIDTH = 360;
var EMOJI_PICKER_MAX_HEIGHT = 420;
var VIEWPORT_MARGIN = 8;
function clamp_emoji_picker_position(rect) {
  const min_right = VIEWPORT_MARGIN;
  const max_right = Math.max(
    min_right,
    window.innerWidth - EMOJI_PICKER_WIDTH - VIEWPORT_MARGIN
  );
  const min_bottom = VIEWPORT_MARGIN;
  const max_bottom = Math.max(
    min_bottom,
    window.innerHeight - EMOJI_PICKER_MAX_HEIGHT - VIEWPORT_MARGIN
  );
  return {
    right: Math.min(
      Math.max(window.innerWidth - rect.right, min_right),
      max_right
    ),
    bottom: Math.min(
      Math.max(window.innerHeight - rect.top + 8, min_bottom),
      max_bottom
    )
  };
}
function EmojiPopover({
  open,
  anchor_ref,
  panel_id,
  on_close,
  on_select,
  labels,
  reduce_motion
}) {
  const [pos, set_pos] = (0, import_react14.useState)({ bottom: 0, right: 0 });
  const picker_ref = (0, import_react14.useRef)(null);
  (0, import_react14.useEffect)(() => {
    if (!open) return;
    const handle_click_outside = (e) => {
      const target = e.target;
      if (anchor_ref.current?.contains(target)) return;
      if (picker_ref.current?.contains(target)) return;
      on_close();
    };
    document.addEventListener("mousedown", handle_click_outside);
    return () => document.removeEventListener("mousedown", handle_click_outside);
  }, [open, anchor_ref, on_close]);
  use_escape_layer(open, on_close, "compose_emoji_picker");
  use_anchored_layer(
    open,
    anchor_ref,
    (rect) => set_pos(clamp_emoji_picker_position(rect)),
    on_close
  );
  if (typeof document === "undefined") return null;
  return (0, import_react_dom.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_framer_motion12.AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
      "div",
      {
        ref: picker_ref,
        className: "aster_emoji_popover",
        id: panel_id,
        style: { zIndex: 9999, right: pos.right, bottom: pos.bottom },
        children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
          EmojiPicker,
          {
            labels,
            reduce_motion,
            on_select
          }
        )
      }
    ) }),
    document.body
  );
}

// src/compose/link_popover.tsx
var import_react15 = require("react");
var import_react_dom2 = require("react-dom");
var import_jsx_runtime60 = require("react/jsx-runtime");
function LinkPopover({
  open,
  anchor_ref,
  selected_text,
  on_close,
  on_insert,
  labels
}) {
  const [url, set_url] = (0, import_react15.useState)("https://");
  const [text, set_text] = (0, import_react15.useState)("");
  const [error, set_error] = (0, import_react15.useState)("");
  const [pos, set_pos] = (0, import_react15.useState)({ top: 0, left: 0 });
  const card_ref = (0, import_react15.useRef)(null);
  const url_input_ref = (0, import_react15.useRef)(null);
  use_escape_layer(open, on_close, "compose_link_popover");
  use_anchored_layer(
    open,
    anchor_ref,
    (rect) => set_pos({
      top: rect.top,
      left: Math.max(8, Math.min(rect.left, window.innerWidth - 308))
    }),
    on_close
  );
  (0, import_react15.useEffect)(() => {
    if (!open) return;
    set_url("https://");
    set_text(selected_text);
    set_error("");
    requestAnimationFrame(() => url_input_ref.current?.focus());
    const handle_click_outside = (e) => {
      const target = e.target;
      if (anchor_ref.current?.contains(target)) return;
      if (card_ref.current?.contains(target)) return;
      on_close();
    };
    document.addEventListener("mousedown", handle_click_outside);
    return () => document.removeEventListener("mousedown", handle_click_outside);
  }, [open]);
  const handle_insert = () => {
    const normalized = normalize_link_url(url);
    if (!normalized) {
      set_error(labels.invalid_url);
      return;
    }
    on_insert(normalized, text.trim() || void 0);
    on_close();
  };
  if (!open || typeof document === "undefined") return null;
  return (0, import_react_dom2.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(
      "div",
      {
        ref: card_ref,
        "aria-label": labels.url_placeholder,
        className: "aster_link_popover",
        role: "dialog",
        style: {
          zIndex: 9999,
          left: pos.left,
          bottom: window.innerHeight - pos.top + 8
        },
        onKeyDown: (e) => {
          if (e.key === "Enter" && !is_composing(e)) {
            e.preventDefault();
            handle_insert();
          }
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
            Input,
            {
              ref: url_input_ref,
              "aria-invalid": error ? true : void 0,
              "aria-label": labels.url_placeholder,
              className: "aster_link_popover_input",
              placeholder: labels.url_placeholder,
              size: "sm",
              type: "url",
              value: url,
              onChange: (e) => {
                set_url(e.target.value);
                if (error) set_error("");
              }
            }
          ),
          error && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("p", { className: "aster_link_popover_error", role: "alert", children: error }),
          !selected_text && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
            Input,
            {
              "aria-label": labels.display_text_placeholder,
              className: "aster_link_popover_input",
              placeholder: labels.display_text_placeholder,
              size: "sm",
              type: "text",
              value: text,
              onChange: (e) => set_text(e.target.value)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "aster_link_popover_actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(Button, { size: "sm", variant: "outline", onClick: on_close, children: labels.cancel }),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(Button, { size: "sm", variant: "depth", onClick: handle_insert, children: labels.insert })
          ] })
        ]
      }
    ),
    document.body
  );
}

// src/compose/draft_status.tsx
var import_framer_motion13 = require("framer-motion");
var import_jsx_runtime61 = require("react/jsx-runtime");
function DraftStatusIndicator({
  status,
  reduce_motion,
  labels
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_framer_motion13.AnimatePresence, { children: status !== "idle" && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
    import_framer_motion13.motion.div,
    {
      animate: { opacity: 1 },
      className: "aster_draft_status",
      exit: { opacity: 0 },
      initial: reduce_motion ? false : { opacity: 0 },
      transition: { duration: reduce_motion ? 0 : 0.2, ease: "easeOut" },
      children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_framer_motion13.AnimatePresence, { initial: false, mode: "wait", children: status === "saving" ? /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
        import_framer_motion13.motion.div,
        {
          animate: { opacity: 1 },
          className: "aster_draft_status_item",
          exit: { opacity: 0 },
          initial: reduce_motion ? false : { opacity: 0 },
          transition: { duration: reduce_motion ? 0 : 0.15 },
          children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
            "div",
            {
              "aria-label": labels.saving,
              className: "aster_draft_progress",
              role: "progressbar",
              children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
                import_framer_motion13.motion.div,
                {
                  animate: reduce_motion ? { x: "0%" } : { x: ["-100%", "250%"] },
                  className: "aster_draft_progress_bar",
                  transition: reduce_motion ? { duration: 0 } : { duration: 1.1, ease: "easeInOut", repeat: Infinity }
                }
              )
            }
          )
        },
        "saving"
      ) : status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(
        import_framer_motion13.motion.div,
        {
          animate: { opacity: 1 },
          className: "aster_draft_status_item aster_draft_status_error",
          exit: { opacity: 0 },
          initial: reduce_motion ? false : { opacity: 0 },
          transition: { duration: reduce_motion ? 0 : 0.15 },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(
              "svg",
              {
                className: "aster_draft_status_icon",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                viewBox: "0 0 24 24",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                  /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "12", x2: "12", y1: "8", y2: "12" }),
                  /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("line", { x1: "12", x2: "12.01", y1: "16", y2: "16" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { children: labels.save_failed })
          ]
        },
        "error"
      ) : /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(
        import_framer_motion13.motion.div,
        {
          animate: { opacity: 1 },
          className: "aster_draft_status_item",
          exit: { opacity: 0 },
          initial: reduce_motion ? false : { opacity: 0 },
          transition: { duration: reduce_motion ? 0 : 0.15 },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
              "svg",
              {
                className: "aster_draft_status_icon",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: COMPOSE_ICON_PATHS.saved })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { children: labels.saved })
          ]
        },
        "saved"
      ) })
    }
  ) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AVATAR_COLORS,
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
  ButtonSpinner,
  COMPOSE_ICON_PATHS,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
  Checkbox,
  ColorVisionFilters,
  ComposeIcon,
  ComposeToolbarLayout,
  ConfirmationModal,
  ContextMenu,
  CountBadge,
  DashboardSidebar,
  DraftStatusIndicator,
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
  EMOJI_PICKER_MAX_HEIGHT,
  EMOJI_PICKER_WIDTH,
  EmojiPicker,
  EmojiPopover,
  EmptyState,
  ErrorBanner,
  ExternalLinkWarningModal,
  FORMAT_BAR_STORAGE_KEY,
  FeatureCard,
  FieldHint,
  FieldLabel,
  FullPageLoader,
  Input,
  Kbd,
  KeyboardShortcutsModal,
  LinkPopover,
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
  ToolbarButton,
  ToolbarDivider,
  Tooltip,
  TooltipDotted,
  TooltipRich,
  UnderlineTabs,
  UpgradeBtn,
  UpgradeOverlay,
  ViewMockupFullpage,
  ViewMockupPopup,
  ViewMockupSplit,
  ViewModeCard,
  accordion_variants,
  apply_skin_tone,
  avatar_variants,
  badge_variants,
  button_tap,
  button_variants,
  card_variants,
  clamp_emoji_picker_position,
  dismiss_toast,
  emoji_categories,
  fade_up_item,
  get_active_locale,
  get_all_emojis,
  get_auth_alert_styles,
  get_auth_primary_button_style,
  get_avatar_color,
  get_avatar_color_index,
  get_avatar_key,
  get_contrast_text,
  get_initials,
  has_open_overlay_layer,
  hash_utf16,
  is_composing,
  is_emoji_renderable,
  is_tone_capable,
  is_top_overlay_layer,
  kbd_variants,
  marquee_variants,
  motion_duration_base,
  motion_duration_fast,
  motion_duration_slow,
  motion_ease_standard,
  normalize_link_url,
  page_slide_transition,
  push_overlay_layer,
  read_format_bar_preference,
  remove_overlay_layer,
  search_emojis,
  show_toast,
  skin_tone_modifiers,
  skin_tone_swatches,
  skin_tones,
  stagger_container,
  store_format_bar_preference,
  switch_variants,
  tone_capable_emoji,
  use_anchored_layer,
  use_escape_layer,
  use_overlay_layer,
  use_should_reduce_motion
});

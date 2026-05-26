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
  AppSwitcher: () => AppSwitcher,
  AuthEyeIcon: () => AuthEyeIcon,
  AuthEyeSlashIcon: () => AuthEyeSlashIcon,
  AuthInputWrapper: () => AuthInputWrapper,
  AuthLogo: () => AuthLogo,
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
  ConfirmationModal: () => ConfirmationModal,
  ContextMenu: () => ContextMenu,
  DashboardSidebar: () => DashboardSidebar,
  EmptyState: () => EmptyState,
  ErrorBanner: () => ErrorBanner,
  FeatureCard: () => FeatureCard,
  FieldHint: () => FieldHint,
  FieldLabel: () => FieldLabel,
  Kbd: () => Kbd,
  KeyboardShortcutsModal: () => KeyboardShortcutsModal,
  Marquee: () => Marquee,
  MarqueeLogo: () => MarqueeLogo,
  MarqueeTrack: () => MarqueeTrack,
  Modal: () => Modal,
  ModalActions: () => ModalActions,
  ModalBody: () => ModalBody,
  ModalDescription: () => ModalDescription,
  ModalFooter: () => ModalFooter,
  ModalHeader: () => ModalHeader,
  ModalTitle: () => ModalTitle,
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
  SearchBar: () => SearchBar,
  SegmentedToggle: () => SegmentedToggle,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectItem: () => SelectItem,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
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
  StatCard: () => StatCard,
  StorageIndicator: () => StorageIndicator,
  Switch: () => Switch,
  TestimonialCard: () => TestimonialCard,
  TextRoller: () => TextRoller,
  ThemeCard: () => ThemeCard,
  Tooltip: () => Tooltip,
  TooltipDotted: () => TooltipDotted,
  TooltipRich: () => TooltipRich,
  accordion_variants: () => accordion_variants,
  avatar_variants: () => avatar_variants,
  badge_variants: () => badge_variants,
  button_variants: () => button_variants,
  card_variants: () => card_variants,
  dismiss_toast: () => dismiss_toast,
  kbd_variants: () => kbd_variants,
  marquee_variants: () => marquee_variants,
  show_toast: () => show_toast,
  switch_variants: () => switch_variants
});
module.exports = __toCommonJS(index_exports);

// src/button/button.tsx
var React = __toESM(require("react"), 1);
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime = require("react/jsx-runtime");
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
var Button = React.forwardRef(
  ({ className, variant, size, as_child = false, ...props }, ref) => {
    const Comp = as_child ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Comp,
      {
        className: button_variants({ variant, size, className }),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/badge/badge.tsx
var React2 = __toESM(require("react"), 1);
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime2 = require("react/jsx-runtime");
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
var Badge = React2.forwardRef(
  ({ className, color, size, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var BadgeDot = React2.forwardRef(
  ({ color = "gray", className, ...props }, ref) => {
    const classes = [dot_color_map[color], className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: classes, ref, ...props });
  }
);
BadgeDot.displayName = "BadgeDot";

// src/card/card.tsx
var React3 = __toESM(require("react"), 1);
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime3 = require("react/jsx-runtime");
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
var Card = React3.forwardRef(
  ({ className, variant, padding, interactive, as_child = false, ...props }, ref) => {
    const Comp = as_child ? import_react_slot2.Slot : "div";
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var CardHeader = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
  "div",
  {
    ref,
    className: ["aster_card_header", className].filter(Boolean).join(" "),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
  "h3",
  {
    ref,
    className: ["aster_card_title", className].filter(Boolean).join(" "),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
  "p",
  {
    ref,
    className: ["aster_card_description", className].filter(Boolean).join(" "),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
  "div",
  {
    ref,
    className: ["aster_card_content", className].filter(Boolean).join(" "),
    ...props
  }
));
CardContent.displayName = "CardContent";
var CardFooter = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var CardIcon = React3.forwardRef(
  ({ color = "blue", className, ...props }, ref) => {
    const classes = [icon_color_map[color], className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { ref, className: classes, ...props });
  }
);
CardIcon.displayName = "CardIcon";

// src/card/feature_card.tsx
var React4 = __toESM(require("react"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
var FeatureCard = React4.forwardRef(
  ({ icon, icon_color = "blue", title, description, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      Card,
      {
        ref,
        className: ["aster_feature_card", className].filter(Boolean).join(" "),
        ...props,
        children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CardIcon, { color: icon_color, children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "aster_feature_card_title", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "aster_feature_card_description", children: description })
        ]
      }
    );
  }
);
FeatureCard.displayName = "FeatureCard";

// src/card/pricing_card.tsx
var React5 = __toESM(require("react"), 1);
var import_jsx_runtime5 = require("react/jsx-runtime");
var CheckIcon = () => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("svg", { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }
) });
var PricingCard = React5.forwardRef(
  ({ plan, price, period, description, features, badge, children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      Card,
      {
        ref,
        className: ["aster_pricing_card", className].filter(Boolean).join(" "),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "aster_pricing_card_header", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "aster_pricing_card_plan", children: plan }),
            badge
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "aster_pricing_card_price_row", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "aster_pricing_card_price", children: price }),
            period && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "aster_pricing_card_period", children: period })
          ] }),
          description && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "aster_pricing_card_description", children: description }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("hr", { className: "aster_pricing_card_divider" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { className: "aster_pricing_card_features", children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("li", { className: "aster_pricing_card_feature", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "aster_pricing_card_check", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CheckIcon, {}) }),
            feature
          ] }, feature)) }),
          children && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "aster_pricing_card_cta", children })
        ]
      }
    );
  }
);
PricingCard.displayName = "PricingCard";

// src/card/testimonial_card.tsx
var React6 = __toESM(require("react"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var TestimonialCard = React6.forwardRef(
  ({ quote, author, role, company, avatar, className, ...props }, ref) => {
    const role_text = [role, company].filter(Boolean).join(" at ");
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      Card,
      {
        ref,
        className: ["aster_testimonial_card", className].filter(Boolean).join(" "),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "aster_testimonial_card_quote", children: quote }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "aster_testimonial_card_author", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "aster_testimonial_card_avatar", children: avatar || author.charAt(0).toUpperCase() }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "aster_testimonial_card_info", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "aster_testimonial_card_name", children: author }),
              role_text && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "aster_testimonial_card_role", children: role_text })
            ] })
          ] })
        ]
      }
    );
  }
);
TestimonialCard.displayName = "TestimonialCard";

// src/card/stat_card.tsx
var React7 = __toESM(require("react"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
var TrendArrowUp = () => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M6 2.5L9.5 6H7.5V9.5H4.5V6H2.5L6 2.5Z", fill: "currentColor" }) });
var TrendArrowDown = () => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M6 9.5L2.5 6H4.5V2.5H7.5V6H9.5L6 9.5Z", fill: "currentColor" }) });
var trend_class_map = {
  up: "aster_stat_card_trend aster_stat_card_trend_up",
  down: "aster_stat_card_trend aster_stat_card_trend_down",
  neutral: "aster_stat_card_trend aster_stat_card_trend_neutral"
};
var StatCard = React7.forwardRef(
  ({ value, label, trend, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      Card,
      {
        ref,
        className: ["aster_stat_card", className].filter(Boolean).join(" "),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "aster_stat_card_value", children: value }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "aster_stat_card_label", children: label }),
          trend && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: trend_class_map[trend.direction], children: [
            trend.direction === "up" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TrendArrowUp, {}),
            trend.direction === "down" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TrendArrowDown, {}),
            trend.value
          ] })
        ]
      }
    );
  }
);
StatCard.displayName = "StatCard";

// src/banner/banner.tsx
var React8 = __toESM(require("react"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
var Banner = React8.forwardRef(
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
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: classes, ref, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "aster_banner_content", children: [
        badge,
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "aster_banner_text", children: text }),
        action_label && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          "a",
          {
            href: action_href || "#",
            className: "aster_banner_action",
            onClick: on_action,
            children: [
              action_label,
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "svg",
                {
                  className: "aster_banner_arrow",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
      show_close && on_dismiss && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          className: "aster_banner_close",
          "aria-label": "Dismiss",
          onClick: on_dismiss,
          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "svg",
            {
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "2",
              stroke: "currentColor",
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
var React9 = __toESM(require("react"), 1);
var import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime9 = require("react/jsx-runtime");
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
var Avatar = React9.forwardRef(
  ({ className, size, src, alt, initials, bordered, ...props }, ref) => {
    const base_classes2 = avatar_variants({ size });
    const extra = [
      base_classes2,
      initials && !src && "aster_avatar_initials",
      bordered && "aster_avatar_bordered",
      className
    ].filter(Boolean).join(" ");
    if (src) {
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
var AvatarWithStatus = React9.forwardRef(
  ({ status, className, ...avatar_props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "aster_avatar_wrap", ref, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Avatar, { ...avatar_props }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: status_class_map[status] })
    ] });
  }
);
AvatarWithStatus.displayName = "AvatarWithStatus";
var AvatarGroup = React9.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_avatar_group", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: classes, ref, ...props, children });
  }
);
AvatarGroup.displayName = "AvatarGroup";
var AvatarNamed = React9.forwardRef(
  ({ className, name, children, ...props }, ref) => {
    const classes = ["aster_avatar_named", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: classes, ref, ...props, children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "aster_avatar_named_text", children: name })
    ] });
  }
);
AvatarNamed.displayName = "AvatarNamed";

// src/modal/modal.tsx
var React10 = __toESM(require("react"), 1);
var import_jsx_runtime10 = require("react/jsx-runtime");
var size_class = {
  sm: "aster_modal_sm",
  md: "aster_modal_md",
  lg: "aster_modal_lg",
  xl: "aster_modal_xl",
  "2xl": "aster_modal_2xl",
  full: "aster_modal_full"
};
var Modal = React10.forwardRef(
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
    React10.useEffect(() => {
      const handle_escape = (e) => {
        if (e.key === "Escape" && resolved_open) {
          on_close();
        }
      };
      document.addEventListener("keydown", handle_escape);
      return () => document.removeEventListener("keydown", handle_escape);
    }, [resolved_open, on_close]);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: overlay_classes, onClick: handle_overlay_click, style: overlay_style, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: modal_classes, ref, style, ...props, children: [
      show_close_button && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "button",
        {
          type: "button",
          "aria-label": "Close",
          className: "aster_modal_close_floating",
          onClick: on_close,
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "svg",
            {
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "2",
              stroke: "currentColor",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
var ModalHeader = React10.forwardRef(
  ({ title, icon, on_close, className, children, ...props }, ref) => {
    const classes = ["aster_modal_header", className].filter(Boolean).join(" ");
    if (children !== void 0 && !title && !on_close && !icon) {
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: classes, ref, ...props, children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: classes, ref, ...props, children: [
      icon,
      title && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "aster_modal_title", children: title }),
      children,
      on_close && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "button",
        {
          type: "button",
          className: "aster_modal_close",
          onClick: on_close,
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "svg",
            {
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "2",
              stroke: "currentColor",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
var ModalBody = React10.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_modal_body", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: classes, ref, ...props, children });
  }
);
ModalBody.displayName = "ModalBody";
var ModalActions = React10.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_modal_actions", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: classes, ref, ...props, children });
  }
);
ModalActions.displayName = "ModalActions";
var ModalTitle = React10.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_modal_title", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: classes, ref, ...props, children });
  }
);
ModalTitle.displayName = "ModalTitle";
var ModalDescription = React10.forwardRef(({ className, children, ...props }, ref) => {
  const classes = ["aster_modal_description", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: classes, ref, ...props, children });
});
ModalDescription.displayName = "ModalDescription";
var ModalFooter = React10.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_modal_footer", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: classes, ref, ...props, children });
  }
);
ModalFooter.displayName = "ModalFooter";

// src/select/select.tsx
var React11 = __toESM(require("react"), 1);
var import_jsx_runtime11 = require("react/jsx-runtime");
function join_classes(...parts) {
  return parts.filter(Boolean).join(" ");
}
var SelectContext = React11.createContext(null);
function use_select_context(component_name) {
  const ctx = React11.useContext(SelectContext);
  if (!ctx) {
    throw new Error(`${component_name} must be used within <Select>`);
  }
  return ctx;
}
function Select({
  value,
  default_value,
  defaultValue,
  on_value_change,
  onValueChange,
  disabled,
  children
}) {
  const resolved_default = default_value ?? defaultValue;
  const resolved_change = on_value_change ?? onValueChange;
  const [internal_value, set_internal_value] = React11.useState(
    resolved_default
  );
  const [is_open, set_is_open] = React11.useState(false);
  const [, force_rerender] = React11.useState(0);
  const registered_labels = React11.useRef(/* @__PURE__ */ new Map());
  const root_ref = React11.useRef(null);
  const is_controlled = value !== void 0;
  const current_value = is_controlled ? value : internal_value;
  const set_value = React11.useCallback(
    (next) => {
      if (!is_controlled) set_internal_value(next);
      resolved_change?.(next);
      set_is_open(false);
    },
    [is_controlled, resolved_change]
  );
  const bump_rerender = React11.useCallback(() => {
    force_rerender((n) => n + 1);
  }, []);
  React11.useEffect(() => {
    if (!is_open) return;
    const handle_click = (e) => {
      if (!root_ref.current?.contains(e.target)) {
        set_is_open(false);
      }
    };
    const handle_key = (e) => {
      if (e.key === "Escape") set_is_open(false);
    };
    document.addEventListener("mousedown", handle_click);
    document.addEventListener("keydown", handle_key);
    return () => {
      document.removeEventListener("mousedown", handle_click);
      document.removeEventListener("keydown", handle_key);
    };
  }, [is_open]);
  const ctx = React11.useMemo(
    () => ({
      value: current_value,
      set_value,
      is_open,
      set_is_open,
      registered_labels,
      bump_rerender,
      root_ref,
      disabled
    }),
    [current_value, set_value, is_open, bump_rerender, disabled]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SelectContext.Provider, { value: ctx, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { ref: root_ref, className: "relative inline-block w-full", children }) });
}
var SelectTrigger = React11.forwardRef(({ className, children, onClick, ...props }, ref) => {
  const ctx = use_select_context("SelectTrigger");
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "button",
    {
      ref,
      type: "button",
      disabled: ctx.disabled,
      "aria-haspopup": "listbox",
      "aria-expanded": ctx.is_open,
      "data-state": ctx.is_open ? "open" : "closed",
      onClick: (e) => {
        if (!ctx.disabled) ctx.set_is_open(!ctx.is_open);
        onClick?.(e);
      },
      className: join_classes(
        "flex h-8 w-full items-center justify-between gap-2 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
        "border-[var(--border-secondary)] bg-[var(--input-bg)] text-[var(--text-secondary)]",
        "hover:bg-[var(--bg-secondary)] data-[state=open]:bg-[var(--bg-secondary)]",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "svg",
          {
            "aria-hidden": "true",
            className: "h-3.5 w-3.5 opacity-50 flex-shrink-0",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M6 9l6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" })
          }
        )
      ]
    }
  );
});
SelectTrigger.displayName = "SelectTrigger";
function SelectValue({
  placeholder,
  className,
  children
}) {
  const ctx = use_select_context("SelectValue");
  const label = ctx.value !== void 0 ? ctx.registered_labels.current.get(ctx.value) : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "span",
    {
      className: join_classes(
        "truncate text-left",
        !label && "text-[var(--text-muted)]",
        className
      ),
      children: label ?? children ?? placeholder ?? ""
    }
  );
}
function SelectContent({ children, className }) {
  const ctx = use_select_context("SelectContent");
  if (!ctx.is_open) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: { display: "none" }, "aria-hidden": "true", children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "div",
    {
      role: "listbox",
      className: join_classes(
        "absolute left-0 right-0 top-full mt-1 z-50 max-h-96 min-w-[8rem] overflow-auto rounded-md border shadow-md p-1",
        "border-[var(--border-secondary)] bg-[var(--dropdown-bg)]",
        className
      ),
      children
    }
  );
}
var SelectItem = React11.forwardRef(
  ({ value, disabled, className, children, ...props }, ref) => {
    const ctx = use_select_context("SelectItem");
    const is_selected = ctx.value === value;
    React11.useEffect(() => {
      const map = ctx.registered_labels.current;
      const had = map.has(value);
      map.set(value, children);
      if (!had) ctx.bump_rerender();
      return () => {
        map.delete(value);
      };
    }, [value, children, ctx]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      "div",
      {
        ref,
        role: "option",
        "aria-selected": is_selected,
        "data-state": is_selected ? "checked" : "unchecked",
        "data-disabled": disabled || void 0,
        onClick: () => {
          if (!disabled) ctx.set_value(value);
        },
        className: join_classes(
          "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-xs outline-none transition-colors",
          "text-[var(--text-secondary)] hover:bg-black/5 dark:hover:bg-white/5",
          is_selected && "text-[var(--color-info,#3b82f6)] font-medium",
          disabled && "pointer-events-none opacity-50",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: is_selected && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "svg",
            {
              "aria-hidden": "true",
              className: "h-3.5 w-3.5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              strokeWidth: 2,
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M5 13l4 4L19 7", strokeLinecap: "round", strokeLinejoin: "round" })
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "truncate", children })
        ]
      }
    );
  }
);
SelectItem.displayName = "SelectItem";

// src/skeleton/skeleton.tsx
var React12 = __toESM(require("react"), 1);
var import_jsx_runtime12 = require("react/jsx-runtime");
function join_classes2(...parts) {
  return parts.filter(Boolean).join(" ");
}
var base_classes = "animate-pulse bg-black/[0.06] dark:bg-white/[0.08] inline-block align-middle";
var Skeleton = React12.forwardRef(
  ({ variant = "rectangular", width, height, className, style, ...props }, ref) => {
    const radius = variant === "circular" ? "rounded-full" : variant === "text" ? "rounded-[4px]" : "rounded-md";
    const resolved_style = {
      width: width ?? (variant === "text" ? "100%" : void 0),
      height: height ?? (variant === "text" ? "0.85em" : variant === "circular" ? width : void 0),
      ...style
    };
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
var SkeletonText = React12.forwardRef(
  ({
    lines = 3,
    line_height = "0.85em",
    last_line_width = "60%",
    gap = "0.5em",
    className,
    style,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        ref,
        className: join_classes2("flex flex-col", className),
        style: { gap, ...style },
        ...props,
        children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
var React13 = __toESM(require("react"), 1);
var import_framer_motion = require("framer-motion");
var import_jsx_runtime13 = require("react/jsx-runtime");
var subscribers = /* @__PURE__ */ new Set();
var next_id = 1;
var dismiss_timer = null;
function emit(toast) {
  subscribers.forEach((fn) => fn(toast));
}
function show_toast(message, kind = "info", duration_ms = 3500) {
  if (dismiss_timer) {
    clearTimeout(dismiss_timer);
    dismiss_timer = null;
  }
  const payload = {
    id: next_id++,
    message,
    kind,
    duration_ms
  };
  emit(payload);
  if (duration_ms > 0) {
    dismiss_timer = setTimeout(() => {
      emit(null);
      dismiss_timer = null;
    }, duration_ms);
  }
}
function dismiss_toast() {
  if (dismiss_timer) {
    clearTimeout(dismiss_timer);
    dismiss_timer = null;
  }
  emit(null);
}
function check_icon() {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "svg",
    {
      className: "w-4 h-4",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4.5 12.75l6 6 9-13.5"
        }
      )
    }
  );
}
function info_icon() {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "svg",
    {
      className: "w-4 h-4",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        }
      )
    }
  );
}
function warning_icon() {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "svg",
    {
      className: "w-4 h-4",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        }
      )
    }
  );
}
function close_icon(size) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "svg",
    {
      className: size,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 18L18 6M6 6l12 12"
        }
      )
    }
  );
}
function icon_for(kind) {
  if (kind === "success") return check_icon();
  if (kind === "error") return close_icon("w-4 h-4");
  if (kind === "warning") return warning_icon();
  return info_icon();
}
function SimpleToast({
  position = "bottom",
  dismiss_label = "Dismiss",
  className
}) {
  const [toast, set_toast] = React13.useState(null);
  React13.useEffect(() => {
    const fn = (next) => set_toast(next);
    subscribers.add(fn);
    return () => {
      subscribers.delete(fn);
    };
  }, []);
  const is_top = position === "top";
  const y_offset = is_top ? -20 : 20;
  const container_style = is_top ? { top: `calc(env(safe-area-inset-top, 0px) + 12px)` } : { bottom: "24px" };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "div",
    {
      className: `fixed left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 pointer-events-none ${className ?? ""}`,
      style: container_style,
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_framer_motion.AnimatePresence, { children: toast && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_framer_motion.motion.div,
        {
          initial: { opacity: 0, y: y_offset, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
          transition: { duration: 0.15 },
          className: "pointer-events-auto",
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 bg-modal-bg border border-edge-secondary", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "flex-shrink-0 text-txt-primary", children: icon_for(toast.kind) }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-[13px] font-medium text-txt-primary whitespace-nowrap", children: toast.message }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "button",
              {
                type: "button",
                "aria-label": dismiss_label,
                onClick: dismiss_toast,
                className: "ml-1 flex-shrink-0 text-txt-muted hover:text-txt-primary transition-colors",
                children: close_icon("w-3.5 h-3.5")
              }
            )
          ] })
        },
        toast.id
      ) })
    }
  );
}

// src/not_found/not_found_page.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "main",
    {
      className: join_classes3(
        "flex flex-col items-center justify-center min-h-[60vh] w-full px-6 text-center",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-[64px] leading-none font-semibold tracking-tight text-[var(--text-primary,#111)]", children: title }),
        message && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mt-3 max-w-md text-[14px] text-[var(--text-muted,#666)]", children: message }),
        cta_label && on_navigate_home && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var import_jsx_runtime15 = require("react/jsx-runtime");
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
  items,
  footer
}) {
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { ref: wrapper_ref, className: "relative", children: [
    trigger,
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_framer_motion2.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "px-3 pt-2.5 pb-1", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "span",
            {
              className: "text-[10px] uppercase tracking-wide font-medium",
              style: { color: "var(--text-muted)" },
              children: identity_label
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "px-1.5 pb-1.5", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
            "div",
            {
              className: "w-full px-2.5 py-2 rounded-[14px] flex items-center gap-2.5",
              style: { backgroundColor: "var(--surf-tertiary, transparent)" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "relative", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                    "div",
                    {
                      "aria-hidden": "true",
                      className: "w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold text-white flex-shrink-0",
                      style: { backgroundColor: "var(--color-info)" },
                      children: initials_for(display_name, email)
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex flex-col min-w-0 flex-1", children: [
                  display_name && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                    "span",
                    {
                      className: "text-[12px] font-medium truncate",
                      style: { color: "var(--text-primary)" },
                      children: display_name
                    }
                  ),
                  email && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                    "span",
                    {
                      className: "text-[11px] truncate",
                      style: { color: "var(--text-muted)" },
                      children: email
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                  "span",
                  {
                    className: "text-[10px] font-medium px-2 py-0.5 rounded-full",
                    style: {
                      backgroundColor: "var(--color-success-soft, rgba(16,185,129,0.12))",
                      color: "var(--color-success)"
                    },
                    children: active_label
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "div",
            {
              className: "h-px mx-2",
              style: { backgroundColor: "var(--border-secondary)" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "p-1.5", children: items.map((item) => {
            const Icon = item.icon;
            return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
              "button",
              {
                className: "w-full px-2.5 py-2 rounded-[12px] flex items-center gap-2.5 text-left transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
                type: "button",
                onClick: () => {
                  item.on_click();
                  on_close();
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                    Icon,
                    {
                      className: "w-4 h-4 flex-shrink-0",
                      style: { color: "var(--text-secondary)" }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
          footer && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
              "div",
              {
                className: "h-px mx-2",
                style: { backgroundColor: "var(--border-secondary)" }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "p-1.5", children: footer })
          ] })
        ]
      }
    ) })
  ] });
}

// src/tooltip/tooltip.tsx
var React15 = __toESM(require("react"), 1);
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);
var import_jsx_runtime16 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(TooltipPrimitive.Provider, { delayDuration: delay, skipDelayDuration: 0, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(TooltipPrimitive.Root, { open, onOpenChange: handle_open_change, children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(TooltipPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: classes, "data-tip": tip, ref, ...props, children });
  }
);
TooltipDotted.displayName = "TooltipDotted";
var TooltipRich = React15.forwardRef(
  ({ title, description, className, children, ...props }, ref) => {
    const classes = ["aster_tip_rich_wrap", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { className: classes, ref, ...props, children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { className: "aster_tip_rich", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "aster_tip_rich_title", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "aster_tip_rich_desc", children: description })
      ] })
    ] });
  }
);
TooltipRich.displayName = "TooltipRich";

// src/toggle/toggle.tsx
var React16 = __toESM(require("react"), 1);
var import_class_variance_authority5 = require("class-variance-authority");
var import_jsx_runtime17 = require("react/jsx-runtime");
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
    const switch_el = /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("label", { className: [switch_classes, className].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", { type: "checkbox", className: "aster_switch_input", ref, onChange: handle_change, ...props }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "aster_switch_track", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "aster_switch_thumb" }) })
    ] });
    if (label_title) {
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("label", { className: "aster_switch_labeled", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { className: "aster_switch_labeled_text", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "aster_switch_labeled_title", children: label_title }),
          label_desc && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "aster_switch_labeled_desc", children: label_desc })
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
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("label", { className: classes, children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", { type: "checkbox", className: "aster_checkbox_input", ref: combined_ref, onChange: handle_change, ...props }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "aster_checkbox_box", children: indeterminate ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "svg",
        {
          className: "aster_checkbox_check",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: "3",
          stroke: "currentColor",
          children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12h14" })
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "svg",
        {
          className: "aster_checkbox_check",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: "3",
          stroke: "currentColor",
          children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m4.5 12.75 6 6 9-13.5"
            }
          )
        }
      ) }),
      label && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "aster_checkbox_text", children: label })
    ] });
  }
);
Checkbox.displayName = "Checkbox";
var Radio = React16.forwardRef(
  ({ className, label, ...props }, ref) => {
    const classes = ["aster_radio", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("label", { className: classes, children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", { type: "radio", className: "aster_radio_input", ref, ...props }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "aster_radio_circle" }),
      label && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "aster_radio_text", children: label })
    ] });
  }
);
Radio.displayName = "Radio";
var SegmentedToggle = React16.forwardRef(
  ({ className, name, options, value, on_change, ...props }, ref) => {
    const classes = ["aster_seg", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: classes, ref, ...props, children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(React16.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("label", { htmlFor: `${name}_${opt.value}`, className: "aster_seg_label", children: opt.label })
    ] }, opt.value)) });
  }
);
SegmentedToggle.displayName = "SegmentedToggle";

// src/navbar/navbar.tsx
var React17 = __toESM(require("react"), 1);
var import_jsx_runtime18 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(NavbarContext.Provider, { value: { active_panel, open_panel, schedule_close, cancel_close }, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("nav", { className: classes, ref, onMouseLeave: schedule_close, ...props, children }) });
  }
);
Navbar.displayName = "Navbar";
var NavbarInner = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_inner", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarInner.displayName = "NavbarInner";
var NavbarLogo = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_logo", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("a", { className: classes, ref, ...props, children });
  }
);
NavbarLogo.displayName = "NavbarLogo";
var NavbarLinks = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_links", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarLinks.displayName = "NavbarLinks";
var NavbarLink = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_link", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("a", { className: classes, ref, ...props, children });
  }
);
NavbarLink.displayName = "NavbarLink";
var NavbarTrigger = React17.forwardRef(
  ({ className, panel_id, children, ...props }, ref) => {
    const { active_panel, open_panel, schedule_close } = React17.useContext(NavbarContext);
    const classes = ["aster_navbar_link", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "svg",
            {
              className: "aster_navbar_chevron",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m19.5 8.25-7.5 7.5-7.5-7.5" })
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
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: classes, ref, ...props, children });
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
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("a", { className: classes, ref, ...props, children });
  }
);
NavbarCta.displayName = "NavbarCta";
var NavbarSearch = React17.forwardRef(
  ({ className, placeholder = "Search...", shortcut = "/", ...props }, ref) => {
    const classes = ["aster_navbar_search", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: classes, ref, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "svg",
        {
          className: "aster_navbar_search_icon",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { type: "text", className: "aster_navbar_search_input", placeholder }),
      shortcut && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("kbd", { className: "aster_navbar_search_kbd", children: shortcut })
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
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "div",
      {
        className: outer_classes,
        ref,
        onMouseEnter: cancel_close,
        onMouseLeave: schedule_close,
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: container_classes, children })
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
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarMegaPanel.displayName = "NavbarMegaPanel";
var NavbarMegaCols = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mega_cols", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarMegaCols.displayName = "NavbarMegaCols";
var NavbarMegaCol = React17.forwardRef(
  ({ className, heading, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className, ref, ...props, children: [
      heading && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "aster_navbar_mega_heading", children: heading }),
      children
    ] });
  }
);
NavbarMegaCol.displayName = "NavbarMegaCol";
var NavbarMegaItem = React17.forwardRef(
  ({ className, icon, title, description, ...props }, ref) => {
    const classes = ["aster_navbar_mega_item", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("a", { className: classes, ref, ...props, children: [
      icon && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "aster_navbar_mega_icon", children: icon }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "aster_navbar_mega_title", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "aster_navbar_mega_desc", children: description })
      ] })
    ] });
  }
);
NavbarMegaItem.displayName = "NavbarMegaItem";
var NavbarMegaItemSimple = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mega_item_simple", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("a", { className: classes, ref, ...props, children });
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
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("button", { className: classes, ref, onClick: handle_click, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "svg",
        {
          className: "aster_navbar_hamburger_open",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "svg",
        {
          className: "aster_navbar_hamburger_close",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" })
        }
      )
    ] });
  }
);
NavbarHamburger.displayName = "NavbarHamburger";
var NavbarMobileMenu = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mobile_menu", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarMobileMenu.displayName = "NavbarMobileMenu";
var NavbarMobileLink = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mobile_link", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("a", { className: classes, ref, ...props, children });
  }
);
NavbarMobileLink.displayName = "NavbarMobileLink";
var NavbarMobileDivider = () => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "aster_navbar_mobile_divider" });
NavbarMobileDivider.displayName = "NavbarMobileDivider";

// src/accordion/accordion.tsx
var React18 = __toESM(require("react"), 1);
var import_class_variance_authority6 = require("class-variance-authority");
var import_jsx_runtime19 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(AccordionContext.Provider, { value: context, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(AccordionItemContext.Provider, { value, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    "button",
    {
      ref,
      type: "button",
      className: ["aster_accordion_trigger", className].filter(Boolean).join(" "),
      onClick: () => toggle(value),
      "aria-expanded": is_open,
      ...props,
      children: [
        icon ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "aster_accordion_trigger_icon_wrap", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "aster_accordion_trigger_icon", children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "div",
      {
        ref,
        className: [
          "aster_accordion_content",
          is_open && "aster_accordion_content_open",
          className
        ].filter(Boolean).join(" "),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var import_jsx_runtime20 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("kbd", { "aria-label": `Keyboard shortcut: ${label}`, className: classes, ref, ...props, children: formatted.map((k, i) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(React19.Fragment, { children: [
      i > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { "aria-hidden": "true", className: "aster_kbd_sep" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { "aria-hidden": "true", children: k })
    ] }, i)) });
  }
);
Kbd.displayName = "Kbd";

// src/marquee/marquee.tsx
var React20 = __toESM(require("react"), 1);
var import_class_variance_authority8 = require("class-variance-authority");
var import_jsx_runtime21 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "aster_marquee_slide", children }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "aster_marquee_slide", "aria-hidden": "true", children })
        ]
      }
    );
  }
);
MarqueeTrack.displayName = "MarqueeTrack";
var MarqueeLogo = React20.forwardRef(
  ({ className, icon, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
      "span",
      {
        ref,
        className: ["aster_marquee_logo", className].filter(Boolean).join(" "),
        ...props,
        children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "aster_marquee_logo_icon", children: icon }),
          children
        ]
      }
    );
  }
);
MarqueeLogo.displayName = "MarqueeLogo";

// src/text_roller/text_roller.tsx
var React21 = __toESM(require("react"), 1);
var import_jsx_runtime22 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "span",
      {
        ref,
        className: ["aster_text_roller", className].filter(Boolean).join(" "),
        style: { height: item_height },
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          "span",
          {
            className: "aster_text_roller_track",
            style: { transform: `translateY(calc(-${index} * ${item_height}))` },
            "aria-live": "polite",
            children: items.map((item, i) => {
              const text = typeof item === "string" ? item : item.text;
              const item_class = typeof item === "string" ? void 0 : item.class_name;
              return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
var import_jsx_runtime23 = require("react/jsx-runtime");
function join_classes4(...parts) {
  return parts.filter(Boolean).join(" ");
}
function ChevronDown({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("path", { d: "M6 9l6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" })
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
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
    "button",
    {
      className: join_classes4(
        "w-full flex items-center rounded-[12px] px-1 py-1 -mx-1 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)]",
        is_collapsed ? "justify-center" : "gap-3"
      ),
      type: "button",
      onClick: on_trigger_click,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "div",
          {
            className: join_classes4(
              "flex-shrink-0 relative",
              is_collapsed ? "w-10 h-10" : "w-11 h-11"
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
        !is_collapsed && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex flex-col items-start min-w-0 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "text-[15px] font-semibold text-txt-primary truncate w-full text-left", children: title }),
            subtitle && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "text-[11px] truncate w-full text-left text-txt-muted", children: subtitle })
          ] }),
          right_slot,
          show_chevron && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(ChevronDown, { className: "w-4 h-4 flex-shrink-0 text-txt-muted" })
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
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "mb-1 px-2.5", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "text-[10px] font-semibold uppercase tracking-[0.05em] text-txt-muted opacity-70", children: label }) });
}
function SidebarSectionToggle({
  label,
  is_collapsed,
  section_collapsed,
  on_toggle,
  right_slot
}) {
  if (is_collapsed) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "mt-5 mb-1 px-2.5", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "w-full flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
      "button",
      {
        className: "flex-1 flex items-center gap-1 py-1 text-txt-muted opacity-70 hover:opacity-100",
        type: "button",
        onClick: on_toggle,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            ChevronDown,
            {
              className: join_classes4(
                "w-3 h-3",
                section_collapsed ? "-rotate-90" : "rotate-0"
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "text-[10px] font-semibold uppercase tracking-[0.05em]", children: label })
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
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
    "button",
    {
      className: "w-full flex items-center gap-2 px-2.5 h-7 text-[12px] rounded-[12px] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] text-txt-muted",
      type: "button",
      onClick: on_toggle,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          ChevronDown,
          {
            className: join_classes4(
              "w-3.5 h-3.5",
              expanded ? "rotate-180" : "rotate-0"
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { children: expanded ? less_label : more_label })
      ]
    }
  );
}
var SidebarNavRow = React22.forwardRef(
  ({
    icon: Icon,
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
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
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
          Icon && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            Icon,
            {
              className: is_collapsed ? "w-5 h-5" : "w-4 h-4",
              style: {
                color: selected ? "var(--text-primary)" : "var(--text-muted)"
              }
            }
          ),
          !is_collapsed && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "flex-1 text-left", children: label }),
          !is_collapsed && trailing,
          !is_collapsed && show_count && !is_loading && count !== void 0 && count > 0 && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "ml-auto text-[11px] tabular-nums text-txt-muted", children: count })
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
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
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
        TagIcon2 ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          TagIcon2,
          {
            className: join_classes4(
              "flex-shrink-0",
              is_collapsed ? "w-5 h-5" : "w-4 h-4"
            ),
            style: { color: color ?? "var(--accent-color)" }
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "span",
          {
            className: join_classes4(
              "flex-shrink-0 rounded-full",
              is_collapsed ? "w-3 h-3" : "w-2.5 h-2.5"
            ),
            style: { backgroundColor: color ?? "var(--accent-color)" }
          }
        ),
        !is_collapsed && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "flex-1 text-left truncate leading-4", children: label }),
          show_count && count !== void 0 && count > 0 && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "ml-auto text-[11px] tabular-nums text-txt-muted", children: count })
        ] })
      ]
    }
  );
}
function SidebarActionButton({
  icon: Icon,
  label,
  on_click,
  is_collapsed = false,
  shortcut_key,
  data_attr,
  extra_class
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Icon, { className: "w-4 h-4 flex-shrink-0" }),
        !is_collapsed && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "flex-1 text-left", children: label }),
          shortcut_key && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
var import_react = require("react");
var import_framer_motion3 = require("framer-motion");
var import_jsx_runtime24 = require("react/jsx-runtime");
var SIDEBAR_EXPANDED_WIDTH = 256;
function ChevronDownIcon({ className }) {
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
function PlusIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M12 4v16m8-8H4", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function XMarkIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M6 18L18 6M6 6l12 12", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function Cog6ToothIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          "path",
          {
            d: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      style,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      style,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      style,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      style,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          "path",
          {
            d: "M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M6 6h.008v.008H6V6Z", strokeLinecap: "round", strokeLinejoin: "round" })
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
  t_strings,
  storage_key_prefix = "aster_authenticator_sidebar",
  add_shortcut_key = "a",
  extra_account_menu_items
}) {
  const accounts_collapsed_key = `${storage_key_prefix}_accounts_collapsed`;
  const tags_collapsed_key = `${storage_key_prefix}_tags_collapsed`;
  const [is_mobile, set_is_mobile] = (0, import_react.useState)(false);
  const [is_tablet, set_is_tablet] = (0, import_react.useState)(false);
  const [is_account_menu_open, set_is_account_menu_open] = (0, import_react.useState)(false);
  const [labels_expanded, set_labels_expanded] = (0, import_react.useState)(false);
  const [accounts_section_collapsed, set_accounts_section_collapsed] = (0, import_react.useState)(
    () => {
      if (typeof window === "undefined") return false;
      return localStorage.getItem(accounts_collapsed_key) === "1";
    }
  );
  const [tags_section_collapsed, set_tags_section_collapsed] = (0, import_react.useState)(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(tags_collapsed_key) === "1";
  });
  const [indicator_style, set_indicator_style] = (0, import_react.useState)({ opacity: 0 });
  const nav_container_ref = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const check_breakpoints = () => {
      const width = window.innerWidth;
      set_is_mobile(width < 768);
      set_is_tablet(width >= 768 && width < 1024);
    };
    check_breakpoints();
    window.addEventListener("resize", check_breakpoints);
    return () => window.removeEventListener("resize", check_breakpoints);
  }, []);
  (0, import_react.useEffect)(() => {
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
  const tag_data = (0, import_react.useMemo)(() => {
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
  const nav_counts = (0, import_react.useMemo)(() => {
    return {
      all: accounts.length,
      favorites: accounts.filter((a) => a.is_pinned).length,
      recent: accounts.length,
      archived: 0
    };
  }, [accounts]);
  const toggle_accounts_section = (0, import_react.useCallback)(() => {
    set_accounts_section_collapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(accounts_collapsed_key, next ? "1" : "0");
      } catch {
      }
      return next;
    });
  }, [accounts_collapsed_key]);
  const toggle_tags_section = (0, import_react.useCallback)(() => {
    set_tags_section_collapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(tags_collapsed_key, next ? "1" : "0");
      } catch {
      }
      return next;
    });
  }, [tags_collapsed_key]);
  const recalculate_indicator = (0, import_react.useCallback)(() => {
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
  (0, import_react.useLayoutEffect)(() => {
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
  (0, import_react.useEffect)(() => {
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
  const handle_nav_click = (0, import_react.useCallback)(
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
  const account_menu_items = (0, import_react.useMemo)(() => {
    const settings_item = {
      id: "settings",
      label: t_strings.settings,
      icon: Cog6ToothIcon,
      on_click: on_settings_click
    };
    return extra_account_menu_items ? [settings_item, ...extra_account_menu_items] : [settings_item];
  }, [t_strings.settings, on_settings_click, extra_account_menu_items]);
  const account_menu_footer = /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    Button,
    {
      className: "w-full text-[12px]",
      size: "sm",
      variant: "destructive",
      onClick: on_sign_out,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ArrowRightOnRectangleIcon, { className: "w-3.5 h-3.5" }),
        t_strings.sign_out
      ]
    }
  );
  const footer_expanded_slot = /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "button",
    {
      className: "flex-1 flex items-center gap-2 px-2 py-1.5 rounded-[12px] text-[12px] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] text-txt-muted",
      type: "button",
      onClick: on_settings_click,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Cog6ToothIcon, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: t_strings.settings })
      ]
    }
  ) });
  const footer_collapsed_slot = /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "button",
    {
      className: "p-2 rounded-[14px] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] text-txt-muted",
      title: t_strings.settings,
      type: "button",
      onClick: on_settings_click,
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Cog6ToothIcon, { className: "w-4 h-4" })
    }
  );
  const max_visible_tags = collapsed ? 3 : 5;
  const visible_tags = labels_expanded ? tag_data.tags : tag_data.tags.slice(0, max_visible_tags);
  const has_more_tags = tag_data.tags.length > max_visible_tags;
  const hidden_tag_count = tag_data.tags.length - max_visible_tags;
  const content = /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "aside",
    {
      className: `flex h-full flex-col flex-shrink-0 transition-all duration-150 bg-sidebar-bg-custom ${collapsed ? "w-16 min-w-16 max-w-16" : ""}`,
      style: collapsed ? void 0 : {
        width: SIDEBAR_EXPANDED_WIDTH,
        minWidth: SIDEBAR_EXPANDED_WIDTH,
        maxWidth: SIDEBAR_EXPANDED_WIDTH
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
          "div",
          {
            className: `${collapsed ? "px-2" : "px-3"} ${is_mobile ? "pr-12" : ""} pt-4 pb-3 relative`,
            children: [
              is_mobile && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                "button",
                {
                  "aria-label": t_strings.close_menu,
                  className: "absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-[8px] transition-colors hover:bg-black/[0.06] dark:hover:bg-white/[0.08] z-10 text-txt-muted",
                  type: "button",
                  onClick: on_close_mobile,
                  children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(XMarkIcon, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                SidebarAccountMenu,
                {
                  active_label: t_strings.active,
                  display_name: account_display_name || void 0,
                  email: account_email || void 0,
                  footer: account_menu_footer,
                  identity_label: t_strings.your_account,
                  is_open: is_account_menu_open,
                  items: account_menu_items,
                  on_close: () => set_is_account_menu_open(false),
                  trigger: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
                    "button",
                    {
                      className: `w-full flex items-center ${collapsed ? "justify-center" : "gap-3"} rounded-[12px] px-1 py-1 -mx-1 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04] focus:outline-none`,
                      type: "button",
                      onClick: (e) => {
                        set_is_account_menu_open((v) => !v);
                        e.currentTarget.blur();
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                          "div",
                          {
                            className: `${collapsed ? "w-10 h-10" : "w-11 h-11"} flex-shrink-0 relative`,
                            children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
                        !collapsed && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex flex-col items-start min-w-0 flex-1", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "text-[15px] font-semibold text-txt-primary truncate w-full text-left", children: t_strings.app_name }),
                            t_strings.deck_subtitle && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "text-[11px] truncate w-full text-left text-txt-muted", children: t_strings.deck_subtitle })
                          ] }),
                          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ChevronDownIcon, { className: "w-4 h-4 flex-shrink-0 text-txt-muted" })
                        ] })
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: `${collapsed ? "px-2" : "px-2.5"} pb-3`, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
          Button,
          {
            className: `w-full !rounded-[14px] ${collapsed ? "" : "gap-2"}`,
            variant: "depth",
            onClick: () => {
              on_add_account();
              if (is_mobile) on_close_mobile();
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PlusIcon, { className: "w-[15px] h-[15px]" }),
              !collapsed && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: t_strings.add_account }),
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Kbd, { keys: add_shortcut_key, size: "sm", variant: "inlay" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          "div",
          {
            className: `flex-1 overflow-y-auto ${collapsed ? "px-2" : "px-2.5"} pt-0.5 pb-2`,
            children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { ref: nav_container_ref, className: "relative", children: [
              !collapsed && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
              collapsed ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                SidebarSectionHeader,
                {
                  is_collapsed: true,
                  label: t_strings.accounts_section
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                SidebarSectionToggle,
                {
                  is_collapsed: false,
                  label: t_strings.accounts_section,
                  on_toggle: toggle_accounts_section,
                  section_collapsed: accounts_section_collapsed
                }
              ),
              !accounts_section_collapsed && NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const selected = is_kind_selected(item.id);
                const label = labels_for_kind(item.id);
                const count = nav_counts[item.id];
                return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                        Icon,
                        {
                          className: `${collapsed ? "w-5 h-5" : "w-4 h-4"} `,
                          style: {
                            color: selected ? "var(--text-primary)" : "var(--text-muted)"
                          }
                        }
                      ),
                      !collapsed && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "flex-1 text-left", children: label }),
                        count > 0 && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "ml-auto text-[11px] tabular-nums text-txt-muted", children: count })
                      ] })
                    ]
                  },
                  item.id
                );
              }),
              !collapsed && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                SidebarSectionToggle,
                {
                  is_collapsed: false,
                  label: t_strings.tags_section,
                  on_toggle: toggle_tags_section,
                  right_slot: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                    "button",
                    {
                      className: "p-1 rounded-[14px] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-txt-muted",
                      title: t_strings.create_tag,
                      type: "button",
                      onClick: () => {
                        on_add_account();
                        if (is_mobile) on_close_mobile();
                      },
                      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PlusIcon, { className: "w-4 h-4" })
                    }
                  ),
                  section_collapsed: tags_section_collapsed
                }
              ),
              collapsed && tag_data.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mt-3 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "p-1.5 text-txt-muted", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(TagIcon, { className: "w-4 h-4" }) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { children: [
                !tags_section_collapsed && visible_tags.map((tag_name) => {
                  const color = color_for_tag(tag_name);
                  const selected = active_filter.kind === "tag" && active_filter.tag === tag_name;
                  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
                has_more_tags && !collapsed && !tags_section_collapsed && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                  SidebarMoreToggle,
                  {
                    expanded: labels_expanded,
                    hidden_count: hidden_tag_count,
                    less_label: t_strings.show_less,
                    more_label: t_strings.more_tags(hidden_tag_count),
                    on_toggle: () => set_labels_expanded(!labels_expanded)
                  }
                ),
                tag_data.tags.length === 0 && !collapsed && !tags_section_collapsed && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "text-[11px] px-2.5 py-2 text-txt-muted", children: t_strings.no_tags_yet })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "mt-auto flex-shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            "div",
            {
              className: `${collapsed ? "mx-2" : "mx-3"} mb-3 h-px bg-edge-primary`
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
            "div",
            {
              className: `${collapsed ? "px-2" : "px-3"} pb-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]`,
              children: [
                !collapsed && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mb-2", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                  "img",
                  {
                    alt: "Aster",
                    className: "h-[18px] select-none",
                    decoding: "async",
                    draggable: false,
                    src: brand_text_logo_src
                  }
                ) }),
                collapsed ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex flex-col items-center gap-1", children: footer_collapsed_slot }) : footer_expanded_slot
              ]
            }
          )
        ] })
      ]
    }
  );
  if (is_mobile) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_framer_motion3.AnimatePresence, { children: is_mobile_open && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        import_framer_motion3.motion.div,
        {
          animate: { opacity: 1 },
          className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-md",
          exit: { opacity: 0 },
          initial: { opacity: 0 },
          transition: { duration: 0.2 },
          onClick: on_close_mobile
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        import_framer_motion3.motion.div,
        {
          animate: { x: 0 },
          className: "fixed top-0 left-0 bottom-0 z-50",
          exit: { x: -SIDEBAR_EXPANDED_WIDTH },
          initial: { x: -SIDEBAR_EXPANDED_WIDTH },
          transition: { type: "tween", duration: 0.25, ease: "easeOut" },
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
var import_jsx_runtime25 = require("react/jsx-runtime");
function join_classes5(...parts) {
  return parts.filter(Boolean).join(" ");
}
function get_reduce_motion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function XIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M6 6l12 12M18 6l-12 12", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function CheckIcon2({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M5 12l5 5L20 7", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function SpinnerIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M4 12a8 8 0 018-8M20 12a8 8 0 01-8 8", strokeLinecap: "round" })
    }
  );
}
function WarningIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
    saved: { Icon: CheckIcon2, color: "var(--color-success)" },
    error: { Icon: WarningIcon, color: "var(--color-danger)" }
  };
  const entry = map[status];
  const Icon = entry.Icon;
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "div",
    {
      className: "flex items-center gap-1.5 text-[12px]",
      style: { color: entry.color },
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        Icon,
        {
          className: join_classes5("w-3.5 h-3.5", entry.spin && "animate-spin")
        }
      )
    }
  );
}
function SettingsSectionHeader({
  icon: Icon,
  title,
  description,
  trailing
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("h3", { className: "text-base font-semibold text-txt-primary flex items-center gap-2 min-w-0", children: [
        Icon && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Icon, { className: "w-[18px] h-[18px] text-txt-primary flex-shrink-0" }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "truncate", children: title })
      ] }),
      trailing && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "flex-shrink-0", children: trailing })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "mt-2 h-px bg-edge-secondary" }),
    description && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-sm mt-2 text-txt-muted", children: description })
  ] });
}
function SettingsRow({ label, description, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex items-center justify-between py-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex-1 pr-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-sm font-medium text-txt-primary", children: label }),
      description && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-sm mt-0.5 text-txt-muted", children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "flex-shrink-0", children })
  ] });
}
function SettingsNavItemButton({
  item,
  is_selected,
  on_select,
  data_nav_id
}) {
  const Icon = item.icon;
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Icon, { className: "w-5 h-5 flex-shrink-0" }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "truncate text-left", children: item.label })
      ]
    }
  );
}
function SettingsNavGroup({
  group,
  selected_id,
  on_select
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "mb-4 last:mb-0", children: [
    group.label && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "text-[10px] font-semibold uppercase tracking-wider px-2.5 mb-2 text-txt-muted select-none", children: group.label }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "space-y-0.5", children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
  children
}) {
  void header_extra;
  void overlay_content;
  void content_dimmed;
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
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_framer_motion4.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      import_framer_motion4.motion.div,
      {
        animate: { scale: 1, opacity: 1, y: 0 },
        className: "relative flex flex-row w-full h-full md:w-[80vw] md:max-w-[1200px] md:h-[80vh] md:max-h-[900px] md:rounded-2xl overflow-hidden bg-surf-primary",
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
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
            "nav",
            {
              className: "hidden md:flex w-52 px-3 py-4 flex-col overflow-y-auto flex-shrink-0",
              style: {
                backgroundColor: "var(--sidebar-bg)",
                borderRight: "1px solid var(--border-primary)"
              },
              children: [
                header_slot && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "mb-3 px-1", children: header_slot }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { ref: nav_container_ref, className: "relative", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
                  groups.map((group, idx) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                    SettingsNavGroup,
                    {
                      group,
                      on_select,
                      selected_id
                    },
                    group.id ?? group.label ?? idx
                  ))
                ] })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex-1 overflow-y-auto flex flex-col min-h-0 bg-surf-primary", children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("header", { className: "flex items-center justify-between px-4 md:px-6 py-4 flex-shrink-0 border-b border-b-edge-secondary", children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex items-center gap-3 min-w-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h2", { className: "text-[17px] font-semibold text-txt-primary truncate", children: title }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(SettingsSaveIndicator, { status: save_status })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                "button",
                {
                  "aria-label": close_label,
                  className: "flex items-center justify-center w-8 h-8 rounded-[10px] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-txt-muted",
                  type: "button",
                  onClick: on_close,
                  children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(XIcon, { className: "w-5 h-5" })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "flex-1 overflow-y-auto p-4 md:p-6", children })
          ] })
        ]
      }
    )
  ] }) });
}

// src/theme_card/theme_card.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var light_palette = {
  bg: "#ffffff",
  header_bg: "#f7f7f7",
  header_border: "#e8e8e8",
  brand: "#3b82f6",
  text_strong: "#374151",
  highlight_bg: "#eff6ff",
  highlight_brand: "#3b82f6",
  highlight_text: "#111827",
  text_mid: "#6b7280",
  text_soft: "#9ca3af",
  row_brand: "#d1d5db",
  row_text: "#374151"
};
var dark_palette = {
  bg: "#121212",
  header_bg: "#0a0a0a",
  header_border: "#2a2a2a",
  brand: "#3b82f6",
  text_strong: "#ffffff",
  highlight_bg: "#1e3a5f",
  highlight_brand: "#60a5fa",
  highlight_text: "#ffffff",
  text_mid: "#888888",
  text_soft: "#666666",
  row_brand: "#3a3a3a",
  row_text: "#e5e5e5"
};
function ThemeMockup({ palette }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    "div",
    {
      className: "w-full h-full rounded-md overflow-hidden",
      style: { backgroundColor: palette.bg },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
          "div",
          {
            className: "h-4 flex items-center px-2 gap-1",
            style: {
              backgroundColor: palette.header_bg,
              borderBottom: `1px solid ${palette.header_border}`
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                "div",
                {
                  className: "w-2 h-2 rounded",
                  style: { backgroundColor: palette.brand }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                "div",
                {
                  className: "flex-1 h-1 rounded-sm",
                  style: { backgroundColor: palette.text_strong }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "p-2 space-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
            "div",
            {
              className: "h-6 rounded p-1.5 flex items-center gap-1.5",
              style: { backgroundColor: palette.highlight_bg },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                  "div",
                  {
                    className: "w-3 h-3 rounded-lg",
                    style: { backgroundColor: palette.highlight_brand }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                    "div",
                    {
                      className: "w-[60%] h-1 rounded-sm mb-0.5",
                      style: { backgroundColor: palette.highlight_text }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                    "div",
                    {
                      className: "w-[40%] h-1 rounded-sm",
                      style: { backgroundColor: palette.text_mid }
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                  "div",
                  {
                    className: "text-[6px] font-mono font-bold",
                    style: { color: palette.highlight_text },
                    children: "123 456"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "h-6 rounded p-1.5 flex items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
              "div",
              {
                className: "w-3 h-3 rounded-lg",
                style: { backgroundColor: palette.row_brand }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                "div",
                {
                  className: "w-[50%] h-1 rounded-sm mb-0.5",
                  style: { backgroundColor: palette.row_text }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                "div",
                {
                  className: "w-[35%] h-1 rounded-sm",
                  style: { backgroundColor: palette.text_soft }
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
              "div",
              {
                className: "text-[6px] font-mono",
                style: { color: palette.text_mid },
                children: "789 012"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function SystemMockup() {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "w-full h-full flex rounded-md overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "w-1/2 h-full", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(ThemeMockup, { palette: light_palette }) }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "w-1/2 h-full", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(ThemeMockup, { palette: dark_palette }) })
  ] });
}
function ThemeCard({
  mode,
  label,
  is_selected,
  on_select
}) {
  const border_color = mode === "light" ? "1px solid #e5e5e5" : "1px solid #1a1a1a";
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    "button",
    {
      className: `flex-1 p-3 rounded-[14px] border-2 transition-all cursor-pointer ${is_selected ? "border-brand bg-surf-selected" : "border-edge-secondary bg-transparent"}`,
      type: "button",
      onClick: on_select,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
          "div",
          {
            className: "w-full aspect-[4/3] rounded-lg overflow-hidden mb-3",
            style: { border: border_color },
            children: [
              mode === "light" && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(ThemeMockup, { palette: light_palette }),
              mode === "dark" && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(ThemeMockup, { palette: dark_palette }),
              mode === "system" && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(SystemMockup, {})
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "text-sm font-medium text-txt-primary", children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "pointer-events-none flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Radio, { readOnly: true, checked: is_selected }) })
        ] })
      ]
    }
  );
}

// src/storage_indicator/storage_indicator.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "px-2 pt-2 pb-3 border-t border-edge-primary flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        "button",
        {
          "aria-label": logo_alt,
          className: "w-8 h-8 flex items-center justify-center rounded-[10px] hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
          type: "button",
          onClick: on_logo_click,
          children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "px-3 pt-3 pb-3 border-t border-edge-primary", children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex items-center justify-between gap-2 mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        "button",
        {
          "aria-label": logo_alt,
          className: "flex items-center rounded-[8px] px-1 py-1 -mx-1 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
          type: "button",
          onClick: on_logo_click,
          children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
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
    show_metric && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex items-center justify-between text-[10px] text-txt-muted mb-1", children: [
        storage_used_label && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: storage_used_label }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: "tabular-nums", children: [
          Math.round(clamped),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        "div",
        {
          className: join_classes6(
            "h-1 w-full rounded-full overflow-hidden",
            "bg-black/[0.06] dark:bg-white/[0.06]"
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "text-[10px] text-txt-muted mt-1 tabular-nums", children: usage_text })
    ] }),
    footer_slot && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "mt-2", children: footer_slot })
  ] });
}

// src/empty_state/empty_state.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: merged, children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mb-4", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-sm sm:text-base font-medium text-txt-primary mb-1", children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "text-xs sm:text-sm text-txt-muted max-w-[260px] mx-auto", children: description }),
      action && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "mt-6 flex justify-center", children: action })
    ] })
  ] });
}

// src/search_bar/search_bar.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
function SearchBar({
  value,
  on_change,
  placeholder,
  clear_label,
  className,
  search_icon,
  clear_icon
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: className ?? "mb-5", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center gap-3 px-4 h-11 rounded-xl bg-surf-secondary border border-edge-secondary transition-colors duration-150", children: [
    search_icon && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "shrink-0 text-txt-muted", children: search_icon }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
      "input",
      {
        type: "text",
        placeholder,
        value,
        onChange: (e) => on_change(e.target.value),
        className: "flex-1 bg-transparent outline-none text-sm text-txt-primary placeholder:text-txt-muted"
      }
    ),
    value && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
var import_react2 = require("react");
var import_framer_motion5 = require("framer-motion");
var import_jsx_runtime30 = require("react/jsx-runtime");
var GridIcon = () => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
  "svg",
  {
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      }
    )
  }
);
var CheckIcon3 = () => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
  "svg",
  {
    className: "w-3.5 h-3.5 text-txt-muted flex-shrink-0",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
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
  const [is_open, set_is_open] = (0, import_react2.useState)(false);
  const wrapper_ref = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { ref: wrapper_ref, className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "button",
      {
        type: "button",
        "aria-label": title,
        title,
        onClick: () => set_is_open((v) => !v),
        className: "flex items-center justify-center w-9 h-9 rounded-[10px] text-txt-muted hover:bg-black/[0.06] dark:hover:bg-white/[0.08]",
        children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(GridIcon, {})
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_framer_motion5.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "px-3 py-2 border-b border-edge-primary", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-[11px] uppercase tracking-wider text-txt-muted", children: title }) }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "py-1", children: apps.map((app) => {
            const is_current = app.id === current_app_id;
            return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
              "a",
              {
                href: app.url,
                target: is_current ? void 0 : "_blank",
                rel: is_current ? void 0 : "noopener noreferrer",
                className: "flex items-start gap-3 px-3 py-2 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                    "img",
                    {
                      alt: "",
                      src: app.logo_src,
                      className: "w-8 h-8 rounded-lg flex-shrink-0",
                      decoding: "async",
                      draggable: false
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "text-[13px] font-medium text-txt-primary truncate", children: app.name }),
                      is_current && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(CheckIcon3, {})
                    ] }),
                    app.description && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-[11px] text-txt-muted truncate", children: app.description })
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
var import_jsx_runtime31 = require("react/jsx-runtime");
var AuthLogo = ({
  src = "/text_logo.png",
  alt = "Aster",
  className = "h-12"
}) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("img", { alt, className, decoding: "async", src });
var AuthEyeIcon = () => /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
  "svg",
  {
    className: "h-5 w-5 text-txt-muted",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        "path",
        {
          d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
var AuthEyeSlashIcon = () => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
  "svg",
  {
    className: "h-5 w-5 text-txt-muted",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
}) => /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: `relative ${wrapper_class ?? ""}`, children: [
  children,
  end_content && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: end_content })
] });

// src/form/form.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
function FieldLabel({ children, className, htmlFor }) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    "label",
    {
      htmlFor,
      className: `block text-sm font-medium mb-1.5 text-txt-primary ${className ?? ""}`,
      children
    }
  );
}
function FieldHint({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: `text-xs mt-1.5 text-txt-muted ${className ?? ""}`, children });
}
function ErrorBanner({ message, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    "div",
    {
      className: `p-3 rounded-[10px] text-sm border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 ${className ?? ""}`,
      children: message
    }
  );
}

// src/confirmation_modal/confirmation_modal.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
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
  variant = "info"
}) {
  const button_variant = VARIANT_MAP[variant];
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    Modal,
    {
      is_open,
      on_close: on_cancel,
      show_close_button: false,
      size: "sm",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(ModalHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(ModalTitle, { children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(ModalDescription, { children: message })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(ModalFooter, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            Button,
            {
              className: "max-sm:flex-1",
              size: "xl",
              variant: "outline",
              onClick: on_cancel,
              children: cancel_text
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            Button,
            {
              className: "max-sm:flex-1",
              size: "xl",
              variant: button_variant,
              onClick: on_confirm,
              children: confirm_text
            }
          )
        ] })
      ]
    }
  );
}

// src/keyboard_shortcuts/keyboard_shortcuts_modal.tsx
var React24 = __toESM(require("react"), 1);
var import_framer_motion6 = require("framer-motion");
var import_jsx_runtime34 = require("react/jsx-runtime");
function get_reduce_motion2() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function CloseIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("path", { d: "M6 6l12 12M18 6l-12 12", strokeLinecap: "round", strokeLinejoin: "round" })
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
  reduce_motion: reduce_motion_prop
}) {
  const [reduce_motion_state, set_reduce_motion] = React24.useState(get_reduce_motion2);
  const reduce_motion = reduce_motion_prop ?? reduce_motion_state;
  const modal_ref = React24.useRef(null);
  const close_button_ref = React24.useRef(null);
  const previous_active_element = React24.useRef(null);
  React24.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => set_reduce_motion(mq.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);
  React24.useEffect(() => {
    if (is_open) {
      previous_active_element.current = document.activeElement;
      close_button_ref.current?.focus();
    } else if (previous_active_element.current instanceof HTMLElement) {
      previous_active_element.current.focus();
    }
  }, [is_open]);
  React24.useEffect(() => {
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
  const sections = React24.useMemo(() => {
    if (is_section_list(shortcuts)) return shortcuts;
    return [{ title: "", shortcuts }];
  }, [shortcuts]);
  const has_section_titles = sections.some((s) => s.title);
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_framer_motion6.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
    import_framer_motion6.motion.div,
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
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          import_framer_motion6.motion.div,
          {
            "aria-hidden": "true",
            className: "absolute inset-0 backdrop-blur-md",
            style: { backgroundColor: "var(--modal-overlay)" },
            onClick: on_close
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
          import_framer_motion6.motion.div,
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
              /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
                "div",
                {
                  className: "flex items-center justify-between px-6 py-4",
                  style: { borderBottom: "1px solid var(--border-secondary)" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
                      "h2",
                      {
                        className: "text-[16px] font-semibold",
                        id: "aster-keyboard-shortcuts-title",
                        style: { color: "var(--text-primary)" },
                        children: t_strings.title
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
                      "button",
                      {
                        ref: close_button_ref,
                        "aria-label": t_strings.close,
                        className: "p-1.5 rounded-[14px] transition-colors hover:bg-black/[0.05] dark:hover:bg-white/[0.05]",
                        style: { color: "var(--text-muted)" },
                        onClick: on_close,
                        type: "button",
                        children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(CloseIcon, { className: "w-5 h-5" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
                "div",
                {
                  className: "relative overflow-y-auto px-6 py-5",
                  style: {
                    maxHeight: "calc(85vh - 130px)",
                    scrollbarWidth: "thin"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
                    "div",
                    {
                      className: has_section_titles ? "grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6" : "space-y-1",
                      children: sections.map((section, idx) => /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { children: [
                        section.title && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
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
                        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "space-y-1", children: section.shortcuts.map((entry, eidx) => /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
                          "div",
                          {
                            className: "flex items-center justify-between py-1.5",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
                                "span",
                                {
                                  className: "text-[13px]",
                                  style: { color: "var(--text-secondary)" },
                                  children: entry.label
                                }
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "flex items-center gap-0.5 ml-4", children: entry.keys.map((key, kidx) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
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
                              )) })
                            ]
                          },
                          `${idx}-${eidx}`
                        )) })
                      ] }, section.title || idx))
                    }
                  )
                }
              ),
              (t_strings.press_label || t_strings.platform_label) && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
                "div",
                {
                  className: "px-6 py-3 flex items-center justify-between text-[12px]",
                  style: {
                    color: "var(--text-muted)",
                    borderTop: "1px solid var(--border-secondary)",
                    backgroundColor: "var(--bg-secondary)"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "flex items-center gap-4", children: t_strings.press_label && t_strings.anywhere_to_open && /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("span", { className: "flex items-center gap-2", children: [
                      t_strings.press_label,
                      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
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
                    t_strings.platform_label && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
                      "span",
                      {
                        className: "px-2 py-0.5 rounded font-medium",
                        style: { backgroundColor: "var(--bg-tertiary)" },
                        children: t_strings.platform_label
                      }
                    )
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

// src/context_menu/context_menu.tsx
var React25 = __toESM(require("react"), 1);
var import_framer_motion7 = require("framer-motion");
var import_jsx_runtime35 = require("react/jsx-runtime");
function ContextMenu({
  items,
  position,
  on_close,
  min_width = 180,
  origin = "top-left"
}) {
  const menu_ref = React25.useRef(null);
  const [focused_index, set_focused_index] = React25.useState(-1);
  const [resolved, set_resolved] = React25.useState({
    left: position.x,
    top: position.y
  });
  React25.useEffect(() => {
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
  React25.useEffect(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_framer_motion7.AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    import_framer_motion7.motion.div,
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
      children: items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
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
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "flex items-center justify-center w-4 h-4 flex-shrink-0", children: item.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "flex-1 truncate", children: item.label }),
            item.trailing && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "ml-auto", children: item.trailing })
          ]
        },
        item.id
      ))
    }
  ) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AppSwitcher,
  AuthEyeIcon,
  AuthEyeSlashIcon,
  AuthInputWrapper,
  AuthLogo,
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
  ConfirmationModal,
  ContextMenu,
  DashboardSidebar,
  EmptyState,
  ErrorBanner,
  FeatureCard,
  FieldHint,
  FieldLabel,
  Kbd,
  KeyboardShortcutsModal,
  Marquee,
  MarqueeLogo,
  MarqueeTrack,
  Modal,
  ModalActions,
  ModalBody,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
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
  SearchBar,
  SegmentedToggle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
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
  StatCard,
  StorageIndicator,
  Switch,
  TestimonialCard,
  TextRoller,
  ThemeCard,
  Tooltip,
  TooltipDotted,
  TooltipRich,
  accordion_variants,
  avatar_variants,
  badge_variants,
  button_variants,
  card_variants,
  dismiss_toast,
  kbd_variants,
  marquee_variants,
  show_toast,
  switch_variants
});

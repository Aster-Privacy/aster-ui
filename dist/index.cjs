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
  FeatureCard: () => FeatureCard,
  Kbd: () => Kbd,
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
  UpgradeBtn: () => UpgradeBtn,
  UpgradeOverlay: () => UpgradeOverlay,
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
    dismiss_label = "Dismiss",
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
          "aria-label": dismiss_label,
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
var open_modal_stack = [];
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
    const stack_token = React10.useRef(null);
    if (stack_token.current === null) {
      stack_token.current = /* @__PURE__ */ Symbol("aster_modal");
    }
    React10.useEffect(() => {
      if (!resolved_open) return;
      const token = stack_token.current;
      open_modal_stack.push(token);
      return () => {
        const index = open_modal_stack.lastIndexOf(token);
        if (index !== -1) {
          open_modal_stack.splice(index, 1);
        }
      };
    }, [resolved_open]);
    React10.useEffect(() => {
      if (!resolved_open || !close_on_escape) return;
      const token = stack_token.current;
      const handle_escape = (e) => {
        if (e.key !== "Escape") return;
        if (open_modal_stack[open_modal_stack.length - 1] !== token) return;
        on_close();
      };
      document.addEventListener("keydown", handle_escape);
      return () => document.removeEventListener("keydown", handle_escape);
    }, [resolved_open, close_on_escape, on_close]);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: overlay_classes, onClick: handle_overlay_click, style: overlay_style, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: modal_classes, ref, style, ...props, children: [
      show_close_button && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "button",
        {
          type: "button",
          "aria-label": close_label,
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
  ({ title, icon, on_close, close_label = "Close", className, children, ...props }, ref) => {
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
          "aria-label": close_label,
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
function join_classes3(...parts) {
  return parts.filter(Boolean).join(" ");
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
  if (!toast) return null;
  const kind_classes = toast.kind === "success" ? "bg-emerald-600 text-white" : toast.kind === "error" ? "bg-rose-600 text-white" : toast.kind === "warning" ? "bg-amber-500 text-black" : "bg-[var(--bg-card,#1f2937)] text-[var(--text-primary,#fff)]";
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: join_classes3(
        "fixed left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-3 rounded-[12px] px-4 py-2.5 shadow-lg",
        position === "top" ? "top-4" : "bottom-6",
        kind_classes,
        className
      ),
      style: { maxWidth: "calc(100vw - 2rem)" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-[13px] font-medium truncate", children: toast.message }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "button",
          {
            type: "button",
            onClick: dismiss_toast,
            "aria-label": dismiss_label,
            className: "text-[12px] underline-offset-2 hover:underline opacity-80 hover:opacity-100",
            children: dismiss_label
          }
        )
      ]
    }
  );
}

// src/not_found/not_found_page.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function join_classes4(...parts) {
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
      className: join_classes4(
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
var import_framer_motion = require("framer-motion");
var import_jsx_runtime15 = require("react/jsx-runtime");
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
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_framer_motion.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
      import_framer_motion.motion.div,
      {
        initial: { opacity: 0, y: -4 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -4 },
        transition: { duration: 0.12 },
        className: "absolute left-0 right-0 top-full mt-2 z-30 rounded-[14px] shadow-lg overflow-hidden",
        style: {
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border-primary)"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "px-3 py-3 border-b border-edge-primary", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-[10px] uppercase tracking-wider text-txt-muted", children: identity_label }),
            display_name && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-[13px] font-medium text-txt-primary truncate mt-1", children: display_name }),
            email && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-[11px] text-txt-muted truncate", children: email }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-[10px] mt-1 text-txt-muted", children: active_label })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "py-1", children: items.map((item) => {
            const Icon = item.icon;
            return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
              "button",
              {
                type: "button",
                onClick: () => {
                  item.on_click();
                  on_close();
                },
                className: "w-full flex items-center gap-2 px-3 py-2 text-[13px] text-txt-secondary hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Icon, { className: "w-4 h-4 flex-shrink-0" }),
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: item.label })
                ]
              },
              item.id
            );
          }) }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "px-3 py-2 border-t border-edge-primary", children: footer })
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
function join_classes5(...parts) {
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
      className: join_classes5(
        "w-full flex items-center rounded-[12px] px-1 py-1 -mx-1 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)]",
        is_collapsed ? "justify-center" : "gap-3"
      ),
      type: "button",
      onClick: on_trigger_click,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "div",
          {
            className: join_classes5(
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
  if (is_collapsed) return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "h-1" });
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "px-2 pt-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-txt-muted select-none", children: label });
}
function SidebarSectionToggle({
  label,
  is_collapsed,
  section_collapsed,
  on_toggle,
  right_slot,
  margin_top
}) {
  if (is_collapsed) return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "h-1" });
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
    "div",
    {
      className: join_classes5(
        "flex items-center justify-between pl-2 pr-1 pt-3 pb-1 group",
        margin_top && "mt-2"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
          "button",
          {
            className: "flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-txt-muted hover:text-txt-secondary select-none",
            type: "button",
            onClick: on_toggle,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                ChevronDown,
                {
                  className: join_classes5(
                    "w-3 h-3 transition-transform",
                    section_collapsed ? "-rotate-90" : "rotate-0"
                  )
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { children: label })
            ]
          }
        ),
        right_slot
      ]
    }
  );
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
      className: "w-full flex items-center gap-2 px-2 py-1.5 mt-0.5 rounded-[10px] text-[12px] text-txt-muted hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
      type: "button",
      onClick: on_toggle,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          ChevronDown,
          {
            className: join_classes5(
              "w-3.5 h-3.5 transition-transform",
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
        className: join_classes5(
          "sidebar-nav-btn relative z-[1] w-full flex items-center gap-2 rounded-[10px] px-2 py-1.5 text-[13px] text-txt-secondary",
          is_collapsed && "justify-center px-0 py-2",
          selected && "sidebar-active text-txt-primary font-medium"
        ),
        title: title ?? label,
        type: "button",
        onClick: on_click,
        children: [
          leading,
          Icon && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            Icon,
            {
              className: join_classes5(
                "flex-shrink-0",
                is_collapsed ? "w-5 h-5" : "w-4 h-4"
              )
            }
          ),
          !is_collapsed && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "flex-1 truncate text-left", children: label }),
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
  tag_icon: TagIcon
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
    "button",
    {
      ref: button_ref,
      className: join_classes5(
        "sidebar-nav-btn relative z-[1] w-full flex items-center gap-2 rounded-[10px] px-2 py-1.5 text-[13px] text-txt-secondary",
        is_collapsed && "justify-center px-0 py-2",
        selected && "sidebar-active text-txt-primary font-medium",
        drag_over && "ring-2 ring-[var(--accent-blue)]"
      ),
      title: label,
      type: "button",
      onClick: on_click,
      onDragEnter: on_drag_enter,
      onDragLeave: on_drag_leave,
      onDragOver: on_drag_over,
      onDrop: on_drop,
      children: [
        TagIcon ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(TagIcon, { className: is_collapsed ? "w-4 h-4" : "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "span",
          {
            className: join_classes5(
              "flex-shrink-0 rounded-full",
              is_collapsed ? "w-2.5 h-2.5" : "w-2 h-2"
            ),
            style: { backgroundColor: color ?? "var(--accent-color)" }
          }
        ),
        !is_collapsed && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "flex-1 truncate text-left", children: label }),
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
      className: join_classes5(
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

// src/settings/settings_shell.tsx
var React23 = __toESM(require("react"), 1);
var import_framer_motion2 = require("framer-motion");
var import_jsx_runtime24 = require("react/jsx-runtime");
function join_classes6(...parts) {
  return parts.filter(Boolean).join(" ");
}
function get_reduce_motion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function XIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M6 6l12 12M18 6l-12 12", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function CheckIcon2({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M5 12l5 5L20 7", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function SpinnerIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("path", { d: "M4 12a8 8 0 018-8M20 12a8 8 0 01-8 8", strokeLinecap: "round" })
    }
  );
}
function WarningIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "div",
    {
      className: "flex items-center gap-1.5 text-[12px]",
      style: { color: entry.color },
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        Icon,
        {
          className: join_classes6("w-3.5 h-3.5", entry.spin && "animate-spin")
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("h3", { className: "text-base font-semibold text-txt-primary flex items-center gap-2 min-w-0", children: [
        Icon && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Icon, { className: "w-[18px] h-[18px] text-txt-primary flex-shrink-0" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "truncate", children: title })
      ] }),
      trailing && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex-shrink-0", children: trailing })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mt-2 h-px bg-edge-secondary" }),
    description && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "text-sm mt-2 text-txt-muted", children: description })
  ] });
}
function SettingsRow({ label, description, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex items-center justify-between py-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex-1 pr-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "text-sm font-medium text-txt-primary", children: label }),
      description && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "text-sm mt-0.5 text-txt-muted", children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex-shrink-0", children })
  ] });
}
function SettingsNavItemButton({
  item,
  is_selected,
  on_select,
  data_nav_id
}) {
  const Icon = item.icon;
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "button",
    {
      className: join_classes6(
        "w-full flex items-center gap-2 px-3 py-1.5 rounded-[10px] text-[13px] text-txt-secondary relative z-[1]",
        is_selected ? "font-medium text-txt-primary" : "hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
      ),
      "data-nav-id": data_nav_id ?? item.id,
      type: "button",
      onClick: () => on_select(item.id),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Icon, { className: "w-4 h-4 flex-shrink-0" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "truncate text-left", children: item.label })
      ]
    }
  );
}
function SettingsNavGroup({
  group,
  selected_id,
  on_select
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { children: [
    group.label && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "px-3 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-wider text-txt-muted select-none", children: group.label }),
    group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      SettingsNavItemButton,
      {
        is_selected: selected_id === item.id,
        item,
        on_select
      },
      item.id
    ))
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
  const flat_items = React23.useMemo(
    () => groups.flatMap((g) => g.items),
    [groups]
  );
  const header_label = active_label ?? flat_items.find((i) => i.id === selected_id)?.label ?? "";
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_framer_motion2.AnimatePresence, { children: is_open && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      import_framer_motion2.motion.div,
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
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
      import_framer_motion2.motion.div,
      {
        animate: { opacity: 1, scale: 1 },
        className: "relative w-full max-w-[960px] h-[640px] max-h-[90vh] rounded-[18px] shadow-2xl flex overflow-hidden",
        exit: { opacity: 0, scale: 0.98 },
        initial: reduce_motion ? false : { opacity: 0, scale: 0.98 },
        style: {
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border-primary)"
        },
        transition: { duration: reduce_motion ? 0 : 0.18, ease: "easeOut" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
            "aside",
            {
              className: "w-[220px] flex-shrink-0 flex flex-col py-4 px-2 border-r border-edge-primary",
              style: { backgroundColor: "var(--bg-secondary)" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "px-3 pb-3", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("h2", { className: "text-[15px] font-semibold text-txt-primary", children: title }) }),
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("nav", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { ref: nav_container_ref, className: "relative", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                    "div",
                    {
                      className: "pointer-events-none absolute left-0 right-0 rounded-[10px]",
                      style: {
                        top: indicator_style.top,
                        height: indicator_style.height,
                        opacity: indicator_style.opacity,
                        backgroundColor: "var(--indicator-bg)",
                        border: "1px solid var(--border-primary)",
                        zIndex: 0,
                        transition: "none"
                      }
                    }
                  ),
                  groups.map((group, idx) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                    SettingsNavGroup,
                    {
                      group,
                      on_select,
                      selected_id
                    },
                    group.id ?? group.label ?? idx
                  ))
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex-1 flex flex-col min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("header", { className: "flex items-center justify-between px-6 py-3 border-b border-edge-primary", children: [
              /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex items-center gap-3 min-w-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("h3", { className: "text-[14px] font-semibold text-txt-primary truncate", children: header_label }),
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(SettingsSaveIndicator, { status: save_status })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                "button",
                {
                  "aria-label": close_label,
                  className: "flex items-center justify-center w-8 h-8 rounded-[10px] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-txt-muted",
                  type: "button",
                  onClick: on_close,
                  children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(XIcon, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex-1 overflow-y-auto px-6 py-4", children })
          ] })
        ]
      }
    )
  ] }) });
}

// src/theme_card/theme_card.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "div",
    {
      className: "w-full h-full rounded-md overflow-hidden",
      style: { backgroundColor: palette.bg },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
          "div",
          {
            className: "h-4 flex items-center px-2 gap-1",
            style: {
              backgroundColor: palette.header_bg,
              borderBottom: `1px solid ${palette.header_border}`
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                "div",
                {
                  className: "w-2 h-2 rounded",
                  style: { backgroundColor: palette.brand }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                "div",
                {
                  className: "flex-1 h-1 rounded-sm",
                  style: { backgroundColor: palette.text_strong }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "p-2 space-y-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
            "div",
            {
              className: "h-6 rounded p-1.5 flex items-center gap-1.5",
              style: { backgroundColor: palette.highlight_bg },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                  "div",
                  {
                    className: "w-3 h-3 rounded-lg",
                    style: { backgroundColor: palette.highlight_brand }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex-1", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                    "div",
                    {
                      className: "w-[60%] h-1 rounded-sm mb-0.5",
                      style: { backgroundColor: palette.highlight_text }
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                    "div",
                    {
                      className: "w-[40%] h-1 rounded-sm",
                      style: { backgroundColor: palette.text_mid }
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "h-6 rounded p-1.5 flex items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
              "div",
              {
                className: "w-3 h-3 rounded-lg",
                style: { backgroundColor: palette.row_brand }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                "div",
                {
                  className: "w-[50%] h-1 rounded-sm mb-0.5",
                  style: { backgroundColor: palette.row_text }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
                "div",
                {
                  className: "w-[35%] h-1 rounded-sm",
                  style: { backgroundColor: palette.text_soft }
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "w-full h-full flex rounded-md overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "w-1/2 h-full", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ThemeMockup, { palette: light_palette }) }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "w-1/2 h-full", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ThemeMockup, { palette: dark_palette }) })
  ] });
}
function ThemeCard({
  mode,
  label,
  is_selected,
  on_select
}) {
  const border_color = mode === "light" ? "1px solid #e5e5e5" : "1px solid #1a1a1a";
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "button",
    {
      className: `flex-1 p-3 rounded-[14px] border-2 transition-all cursor-pointer ${is_selected ? "border-brand bg-surf-selected" : "border-edge-secondary bg-transparent"}`,
      type: "button",
      onClick: on_select,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
          "div",
          {
            className: "w-full aspect-[4/3] rounded-lg overflow-hidden mb-3",
            style: { border: border_color },
            children: [
              mode === "light" && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ThemeMockup, { palette: light_palette }),
              mode === "dark" && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ThemeMockup, { palette: dark_palette }),
              mode === "system" && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(SystemMockup, {})
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "text-sm font-medium text-txt-primary", children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "pointer-events-none flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Radio, { readOnly: true, checked: is_selected }) })
        ] })
      ]
    }
  );
}

// src/storage_indicator/storage_indicator.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
function join_classes7(...parts) {
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
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "px-2 pt-2 pb-3 border-t border-edge-primary flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "button",
        {
          "aria-label": logo_alt,
          className: "w-8 h-8 flex items-center justify-center rounded-[10px] hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
          type: "button",
          onClick: on_logo_click,
          children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "px-3 pt-3 pb-3 border-t border-edge-primary", children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex items-center justify-between gap-2 mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "button",
        {
          "aria-label": logo_alt,
          className: "flex items-center rounded-[8px] px-1 py-1 -mx-1 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
          type: "button",
          onClick: on_logo_click,
          children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
    show_metric && /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "flex items-center justify-between text-[10px] text-txt-muted mb-1", children: [
        storage_used_label && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: storage_used_label }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("span", { className: "tabular-nums", children: [
          Math.round(clamped),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "div",
        {
          className: join_classes7(
            "h-1 w-full rounded-full overflow-hidden",
            "bg-black/[0.06] dark:bg-white/[0.06]"
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "text-[10px] text-txt-muted mt-1 tabular-nums", children: usage_text })
    ] }),
    footer_slot && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mt-2", children: footer_slot })
  ] });
}

// src/upgrade_btn/upgrade_btn.tsx
var React24 = __toESM(require("react"), 1);
var import_jsx_runtime27 = require("react/jsx-runtime");
function SparkleIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("path", { d: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("path", { d: "M5 17l.75 2.25L8 20l-2.25.75L5 23l-.75-2.25L2 20l2.25-.75L5 17z" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("path", { d: "M19 3l.5 1.5L21 5l-1.5.5L19 7l-.5-1.5L17 5l1.5-.5L19 3z" })
      ]
    }
  );
}
var UpgradeBtn = React24.forwardRef(
  ({ label, children, size = "md", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(Button, { ref, variant: "upgrade", size, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(SparkleIcon, {}),
      children ?? label ?? "Upgrade"
    ] });
  }
);
UpgradeBtn.displayName = "UpgradeBtn";

// src/upgrade_overlay/upgrade_overlay.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
function UpgradeOverlay({
  badge_label = "Upgrade plan",
  message,
  cta_label = "Upgrade",
  on_upgrade,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: ["aster_upgrade_overlay", className].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Badge, { color: "blue", children: badge_label }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "aster_upgrade_overlay_message", children: message }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(UpgradeBtn, { size: "sm", onClick: on_upgrade, children: cta_label })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
  FeatureCard,
  Kbd,
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
  UpgradeBtn,
  UpgradeOverlay,
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

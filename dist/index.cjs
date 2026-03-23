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
  ModalHeader: () => ModalHeader,
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
  PricingCard: () => PricingCard,
  Radio: () => Radio,
  SegmentedToggle: () => SegmentedToggle,
  StatCard: () => StatCard,
  Switch: () => Switch,
  TestimonialCard: () => TestimonialCard,
  TextRoller: () => TextRoller,
  Tooltip: () => Tooltip,
  TooltipDotted: () => TooltipDotted,
  TooltipRich: () => TooltipRich,
  accordion_variants: () => accordion_variants,
  avatar_variants: () => avatar_variants,
  badge_variants: () => badge_variants,
  button_variants: () => button_variants,
  card_variants: () => card_variants,
  kbd_variants: () => kbd_variants,
  marquee_variants: () => marquee_variants,
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
      depth: "aster_btn_depth"
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
    const base_classes = avatar_variants({ size });
    const extra = [
      base_classes,
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
var Modal = React10.forwardRef(
  ({ open, on_close, children, className, ...props }, ref) => {
    const overlay_classes = [
      "aster_modal_overlay",
      open && "aster_modal_open"
    ].filter(Boolean).join(" ");
    const modal_classes = ["aster_modal", className].filter(Boolean).join(" ");
    const handle_overlay_click = (e) => {
      if (e.target === e.currentTarget) {
        on_close();
      }
    };
    React10.useEffect(() => {
      const handle_escape = (e) => {
        if (e.key === "Escape" && open) {
          on_close();
        }
      };
      document.addEventListener("keydown", handle_escape);
      return () => document.removeEventListener("keydown", handle_escape);
    }, [open, on_close]);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: overlay_classes, onClick: handle_overlay_click, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: modal_classes, ref, ...props, children }) });
  }
);
Modal.displayName = "Modal";
var ModalHeader = React10.forwardRef(
  ({ title, icon, on_close, className, ...props }, ref) => {
    const classes = ["aster_modal_header", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: classes, ref, ...props, children: [
      icon,
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "aster_modal_title", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { className: "aster_modal_close", onClick: on_close, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
      ) })
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

// src/tooltip/tooltip.tsx
var React11 = __toESM(require("react"), 1);
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);
var import_jsx_runtime11 = require("react/jsx-runtime");
function Tooltip({ tip, position = "bottom", dark, delay = 400, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TooltipPrimitive.Provider, { delayDuration: delay, skipDelayDuration: 0, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(TooltipPrimitive.Root, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TooltipPrimitive.Trigger, { asChild: true, children }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TooltipPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      TooltipPrimitive.Content,
      {
        className: dark ? "aster_tip_portal aster_tip_portal_dark" : "aster_tip_portal",
        side: position,
        sideOffset: 6,
        children: tip
      }
    ) })
  ] }) });
}
Tooltip.displayName = "Tooltip";
var TooltipDotted = React11.forwardRef(
  ({ tip, className, children, ...props }, ref) => {
    const classes = ["aster_tip_dotted", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: classes, "data-tip": tip, ref, ...props, children });
  }
);
TooltipDotted.displayName = "TooltipDotted";
var TooltipRich = React11.forwardRef(
  ({ title, description, className, children, ...props }, ref) => {
    const classes = ["aster_tip_rich_wrap", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: classes, ref, ...props, children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "aster_tip_rich", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "aster_tip_rich_title", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "aster_tip_rich_desc", children: description })
      ] })
    ] });
  }
);
TooltipRich.displayName = "TooltipRich";

// src/toggle/toggle.tsx
var React12 = __toESM(require("react"), 1);
var import_class_variance_authority5 = require("class-variance-authority");
var import_jsx_runtime12 = require("react/jsx-runtime");
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
var Switch = React12.forwardRef(
  ({ className, size, color, label_title, label_desc, onChange, onCheckedChange, ...props }, ref) => {
    const switch_classes = switch_variants({ size, color });
    const handle_change = React12.useCallback(
      (e) => {
        onChange?.(e);
        onCheckedChange?.(e.target.checked);
      },
      [onChange, onCheckedChange]
    );
    const switch_el = /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: [switch_classes, className].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "checkbox", className: "aster_switch_input", ref, onChange: handle_change, ...props }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "aster_switch_track", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "aster_switch_thumb" }) })
    ] });
    if (label_title) {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: "aster_switch_labeled", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "aster_switch_labeled_text", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "aster_switch_labeled_title", children: label_title }),
          label_desc && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "aster_switch_labeled_desc", children: label_desc })
        ] }),
        switch_el
      ] });
    }
    return switch_el;
  }
);
Switch.displayName = "Switch";
var Checkbox = React12.forwardRef(
  ({ className, label, indeterminate, onChange, onCheckedChange, ...props }, ref) => {
    const classes = ["aster_checkbox", className].filter(Boolean).join(" ");
    const internal_ref = React12.useRef(null);
    React12.useEffect(() => {
      const el = typeof ref === "function" ? internal_ref.current : ref?.current ?? internal_ref.current;
      if (el) {
        el.indeterminate = !!indeterminate;
      }
    }, [indeterminate, ref]);
    const combined_ref = React12.useCallback(
      (node) => {
        internal_ref.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );
    const handle_change = React12.useCallback(
      (e) => {
        onChange?.(e);
        onCheckedChange?.(e.target.checked);
      },
      [onChange, onCheckedChange]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: classes, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "checkbox", className: "aster_checkbox_input", ref: combined_ref, onChange: handle_change, ...props }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "aster_checkbox_box", children: indeterminate ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "svg",
        {
          className: "aster_checkbox_check",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: "3",
          stroke: "currentColor",
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12h14" })
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "svg",
        {
          className: "aster_checkbox_check",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: "3",
          stroke: "currentColor",
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m4.5 12.75 6 6 9-13.5"
            }
          )
        }
      ) }),
      label && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "aster_checkbox_text", children: label })
    ] });
  }
);
Checkbox.displayName = "Checkbox";
var Radio = React12.forwardRef(
  ({ className, label, ...props }, ref) => {
    const classes = ["aster_radio", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: classes, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "radio", className: "aster_radio_input", ref, ...props }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "aster_radio_circle" }),
      label && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "aster_radio_text", children: label })
    ] });
  }
);
Radio.displayName = "Radio";
var SegmentedToggle = React12.forwardRef(
  ({ className, name, options, value, on_change, ...props }, ref) => {
    const classes = ["aster_seg", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: classes, ref, ...props, children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(React12.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", { htmlFor: `${name}_${opt.value}`, className: "aster_seg_label", children: opt.label })
    ] }, opt.value)) });
  }
);
SegmentedToggle.displayName = "SegmentedToggle";

// src/navbar/navbar.tsx
var React13 = __toESM(require("react"), 1);
var import_jsx_runtime13 = require("react/jsx-runtime");
var NavbarContext = React13.createContext({
  active_panel: null,
  open_panel: () => {
  },
  schedule_close: () => {
  },
  cancel_close: () => {
  }
});
var Navbar = React13.forwardRef(
  ({ className, variant = "default", children, ...props }, ref) => {
    const [active_panel, set_active_panel] = React13.useState(null);
    const close_timer = React13.useRef(null);
    const open_panel = React13.useCallback((panel_id) => {
      if (close_timer.current) {
        clearTimeout(close_timer.current);
        close_timer.current = null;
      }
      set_active_panel(panel_id);
    }, []);
    const schedule_close = React13.useCallback(() => {
      close_timer.current = setTimeout(() => set_active_panel(null), 150);
    }, []);
    const cancel_close = React13.useCallback(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(NavbarContext.Provider, { value: { active_panel, open_panel, schedule_close, cancel_close }, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("nav", { className: classes, ref, onMouseLeave: schedule_close, ...props, children }) });
  }
);
Navbar.displayName = "Navbar";
var NavbarInner = React13.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_inner", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarInner.displayName = "NavbarInner";
var NavbarLogo = React13.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_logo", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { className: classes, ref, ...props, children });
  }
);
NavbarLogo.displayName = "NavbarLogo";
var NavbarLinks = React13.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_links", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarLinks.displayName = "NavbarLinks";
var NavbarLink = React13.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_link", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { className: classes, ref, ...props, children });
  }
);
NavbarLink.displayName = "NavbarLink";
var NavbarTrigger = React13.forwardRef(
  ({ className, panel_id, children, ...props }, ref) => {
    const { active_panel, open_panel, schedule_close } = React13.useContext(NavbarContext);
    const classes = ["aster_navbar_link", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "svg",
            {
              className: "aster_navbar_chevron",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m19.5 8.25-7.5 7.5-7.5-7.5" })
            }
          )
        ]
      }
    );
  }
);
NavbarTrigger.displayName = "NavbarTrigger";
var NavbarActions = React13.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_actions", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarActions.displayName = "NavbarActions";
var NavbarCta = React13.forwardRef(
  ({ className, light, children, ...props }, ref) => {
    const classes = [
      "aster_navbar_cta",
      light && "aster_navbar_cta_light",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { className: classes, ref, ...props, children });
  }
);
NavbarCta.displayName = "NavbarCta";
var NavbarSearch = React13.forwardRef(
  ({ className, placeholder = "Search...", shortcut = "/", ...props }, ref) => {
    const classes = ["aster_navbar_search", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: classes, ref, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "svg",
        {
          className: "aster_navbar_search_icon",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("input", { type: "text", className: "aster_navbar_search_input", placeholder }),
      shortcut && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("kbd", { className: "aster_navbar_search_kbd", children: shortcut })
    ] });
  }
);
NavbarSearch.displayName = "NavbarSearch";
var NavbarMega = React13.forwardRef(
  ({ className, dark, children, ...props }, ref) => {
    const { cancel_close, schedule_close } = React13.useContext(NavbarContext);
    const outer_classes = ["aster_navbar_mega", className].filter(Boolean).join(" ");
    const container_classes = [
      "aster_navbar_mega_container",
      dark && "aster_navbar_mega_container_dark"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "div",
      {
        className: outer_classes,
        ref,
        onMouseEnter: cancel_close,
        onMouseLeave: schedule_close,
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: container_classes, children })
      }
    );
  }
);
NavbarMega.displayName = "NavbarMega";
var NavbarMegaPanel = React13.forwardRef(
  ({ className, panel_id, children, ...props }, ref) => {
    const { active_panel } = React13.useContext(NavbarContext);
    const classes = [
      "aster_navbar_mega_panel",
      active_panel === panel_id && "aster_navbar_mega_panel_active",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarMegaPanel.displayName = "NavbarMegaPanel";
var NavbarMegaCols = React13.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mega_cols", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarMegaCols.displayName = "NavbarMegaCols";
var NavbarMegaCol = React13.forwardRef(
  ({ className, heading, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className, ref, ...props, children: [
      heading && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "aster_navbar_mega_heading", children: heading }),
      children
    ] });
  }
);
NavbarMegaCol.displayName = "NavbarMegaCol";
var NavbarMegaItem = React13.forwardRef(
  ({ className, icon, title, description, ...props }, ref) => {
    const classes = ["aster_navbar_mega_item", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("a", { className: classes, ref, ...props, children: [
      icon && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "aster_navbar_mega_icon", children: icon }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "aster_navbar_mega_title", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "aster_navbar_mega_desc", children: description })
      ] })
    ] });
  }
);
NavbarMegaItem.displayName = "NavbarMegaItem";
var NavbarMegaItemSimple = React13.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mega_item_simple", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { className: classes, ref, ...props, children });
  }
);
NavbarMegaItemSimple.displayName = "NavbarMegaItemSimple";
var NavbarHamburger = React13.forwardRef(
  ({ className, onClick, ...props }, ref) => {
    const classes = ["aster_navbar_hamburger", className].filter(Boolean).join(" ");
    const handle_click = (e) => {
      const nav = e.currentTarget.closest(".aster_navbar");
      if (nav) nav.classList.toggle("aster_navbar_mobile_open");
      onClick?.(e);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("button", { className: classes, ref, onClick: handle_click, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "svg",
        {
          className: "aster_navbar_hamburger_open",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "svg",
        {
          className: "aster_navbar_hamburger_close",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" })
        }
      )
    ] });
  }
);
NavbarHamburger.displayName = "NavbarHamburger";
var NavbarMobileMenu = React13.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mobile_menu", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: classes, ref, ...props, children });
  }
);
NavbarMobileMenu.displayName = "NavbarMobileMenu";
var NavbarMobileLink = React13.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mobile_link", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { className: classes, ref, ...props, children });
  }
);
NavbarMobileLink.displayName = "NavbarMobileLink";
var NavbarMobileDivider = () => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "aster_navbar_mobile_divider" });
NavbarMobileDivider.displayName = "NavbarMobileDivider";

// src/accordion/accordion.tsx
var React14 = __toESM(require("react"), 1);
var import_class_variance_authority6 = require("class-variance-authority");
var import_jsx_runtime14 = require("react/jsx-runtime");
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
var AccordionContext = React14.createContext({
  open_items: [],
  toggle: () => {
  }
});
var AccordionItemContext = React14.createContext("");
var Accordion = React14.forwardRef(
  ({
    className,
    variant,
    multiple = false,
    default_open = [],
    children,
    ...props
  }, ref) => {
    const [open_items, set_open_items] = React14.useState(default_open);
    const toggle = React14.useCallback(
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
    const context = React14.useMemo(
      () => ({ open_items, toggle }),
      [open_items, toggle]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AccordionContext.Provider, { value: context, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var AccordionItem = React14.forwardRef(
  ({ className, value, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AccordionItemContext.Provider, { value, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var AccordionTrigger = React14.forwardRef(({ className, icon, children, ...props }, ref) => {
  const { open_items, toggle } = React14.useContext(AccordionContext);
  const value = React14.useContext(AccordionItemContext);
  const is_open = open_items.includes(value);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "button",
    {
      ref,
      type: "button",
      className: ["aster_accordion_trigger", className].filter(Boolean).join(" "),
      onClick: () => toggle(value),
      "aria-expanded": is_open,
      ...props,
      children: [
        icon ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "aster_accordion_trigger_icon_wrap", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "aster_accordion_trigger_icon", children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var AccordionContent = React14.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { open_items } = React14.useContext(AccordionContext);
    const value = React14.useContext(AccordionItemContext);
    const is_open = open_items.includes(value);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "div",
      {
        ref,
        className: [
          "aster_accordion_content",
          is_open && "aster_accordion_content_open",
          className
        ].filter(Boolean).join(" "),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var React15 = __toESM(require("react"), 1);
var import_class_variance_authority7 = require("class-variance-authority");
var import_jsx_runtime15 = require("react/jsx-runtime");
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
var Kbd = React15.forwardRef(
  ({ className, size, variant, keys, ...props }, ref) => {
    const key_list = Array.isArray(keys) ? keys : [keys];
    const formatted = key_list.map(format_key);
    const label = key_list.join(" + ");
    const classes = [kbd_variants({ size, variant }), className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("kbd", { "aria-label": `Keyboard shortcut: ${label}`, className: classes, ref, ...props, children: formatted.map((k, i) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(React15.Fragment, { children: [
      i > 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { "aria-hidden": "true", className: "aster_kbd_sep" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { "aria-hidden": "true", children: k })
    ] }, i)) });
  }
);
Kbd.displayName = "Kbd";

// src/marquee/marquee.tsx
var React16 = __toESM(require("react"), 1);
var import_class_variance_authority8 = require("class-variance-authority");
var import_jsx_runtime16 = require("react/jsx-runtime");
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
var Marquee = React16.forwardRef(
  ({ className, variant, fade, pause_on_hover, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
var MarqueeTrack = React16.forwardRef(
  ({ className, reverse = false, speed = "default", children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "aster_marquee_slide", children }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "aster_marquee_slide", "aria-hidden": "true", children })
        ]
      }
    );
  }
);
MarqueeTrack.displayName = "MarqueeTrack";
var MarqueeLogo = React16.forwardRef(
  ({ className, icon, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      "span",
      {
        ref,
        className: ["aster_marquee_logo", className].filter(Boolean).join(" "),
        ...props,
        children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "aster_marquee_logo_icon", children: icon }),
          children
        ]
      }
    );
  }
);
MarqueeLogo.displayName = "MarqueeLogo";

// src/text_roller/text_roller.tsx
var React17 = __toESM(require("react"), 1);
var import_jsx_runtime17 = require("react/jsx-runtime");
var TextRoller = React17.forwardRef(
  ({ className, items, interval = 2e3, item_height = "1.2em", ...props }, ref) => {
    const [index, set_index] = React17.useState(0);
    React17.useEffect(() => {
      if (items.length <= 1) return;
      const timer = setInterval(() => {
        set_index((prev) => (prev + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }, [items.length, interval]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "span",
      {
        ref,
        className: ["aster_text_roller", className].filter(Boolean).join(" "),
        style: { height: item_height },
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "span",
          {
            className: "aster_text_roller_track",
            style: { transform: `translateY(calc(-${index} * ${item_height}))` },
            "aria-live": "polite",
            children: items.map((item, i) => {
              const text = typeof item === "string" ? item : item.text;
              const item_class = typeof item === "string" ? void 0 : item.class_name;
              return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
  ModalHeader,
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
  PricingCard,
  Radio,
  SegmentedToggle,
  StatCard,
  Switch,
  TestimonialCard,
  TextRoller,
  Tooltip,
  TooltipDotted,
  TooltipRich,
  accordion_variants,
  avatar_variants,
  badge_variants,
  button_variants,
  card_variants,
  kbd_variants,
  marquee_variants,
  switch_variants
});

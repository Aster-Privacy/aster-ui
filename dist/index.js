// src/button/button.tsx
import * as React2 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/spinner/spinner.tsx
import * as React from "react";

// src/lib/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/spinner/spinner.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var size_classes = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6"
};
var Spinner = React.forwardRef(
  ({ size = "md", className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "svg",
      {
        ref,
        className: cn(
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
          /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx(
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
function ButtonSpinner({
  size = "sm",
  centered = false,
  className
}) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "aria-hidden": "true",
      className: cn(
        "aster_btn_spinner",
        centered && "aster_btn_spinner_centered",
        className
      ),
      children: /* @__PURE__ */ jsx(Spinner, { size })
    }
  );
}

// src/button/button.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var button_variants = cva("aster_btn", {
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
    loading_position,
    disabled,
    children,
    ...props
  }, ref) => {
    const Comp = as_child ? Slot : "button";
    const class_name = button_variants({ variant, size, className });
    if (!is_loading || as_child) {
      return /* @__PURE__ */ jsx2(Comp, { className: class_name, disabled, ref, ...props, children });
    }
    const has_label = React2.Children.toArray(children).length > 0;
    const keep_centered = !has_label || size === "icon" || loading_position === "replace";
    return /* @__PURE__ */ jsxs2(
      Comp,
      {
        className: class_name,
        ref,
        ...props,
        "aria-busy": true,
        "data-loading": true,
        disabled: disabled || is_loading,
        children: [
          keep_centered ? null : children,
          /* @__PURE__ */ jsx2(
            ButtonSpinner,
            {
              centered: keep_centered,
              size: size === "sm" ? "xs" : "sm"
            }
          )
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/badge/badge.tsx
import * as React3 from "react";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var badge_variants = cva2("aster_badge", {
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
    return /* @__PURE__ */ jsx3(
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
    return /* @__PURE__ */ jsx3("span", { className: classes, ref, ...props });
  }
);
BadgeDot.displayName = "BadgeDot";

// src/card/card.tsx
import * as React4 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx4 } from "react/jsx-runtime";
var card_variants = cva3("aster_card", {
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
    const Comp = as_child ? Slot2 : "div";
    return /* @__PURE__ */ jsx4(
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
var CardHeader = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  "div",
  {
    ref,
    className: ["aster_card_header", className].filter(Boolean).join(" "),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  "h3",
  {
    ref,
    className: ["aster_card_title", className].filter(Boolean).join(" "),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  "p",
  {
    ref,
    className: ["aster_card_description", className].filter(Boolean).join(" "),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  "div",
  {
    ref,
    className: ["aster_card_content", className].filter(Boolean).join(" "),
    ...props
  }
));
CardContent.displayName = "CardContent";
var CardFooter = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
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
    return /* @__PURE__ */ jsx4("div", { ref, className: classes, ...props });
  }
);
CardIcon.displayName = "CardIcon";

// src/card/feature_card.tsx
import * as React5 from "react";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var FeatureCard = React5.forwardRef(
  ({ icon, icon_color = "blue", title, description, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs3(
      Card,
      {
        ref,
        className: ["aster_feature_card", className].filter(Boolean).join(" "),
        ...props,
        children: [
          icon && /* @__PURE__ */ jsx5(CardIcon, { color: icon_color, children: icon }),
          /* @__PURE__ */ jsx5("p", { className: "aster_feature_card_title", children: title }),
          /* @__PURE__ */ jsx5("p", { className: "aster_feature_card_description", children: description })
        ]
      }
    );
  }
);
FeatureCard.displayName = "FeatureCard";

// src/card/pricing_card.tsx
import * as React6 from "react";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var CheckIcon = () => /* @__PURE__ */ jsx6("svg", { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", children: /* @__PURE__ */ jsx6(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }
) });
var PricingCard = React6.forwardRef(
  ({ plan, price, period, description, features, badge, children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs4(
      Card,
      {
        ref,
        className: ["aster_pricing_card", className].filter(Boolean).join(" "),
        ...props,
        children: [
          /* @__PURE__ */ jsxs4("div", { className: "aster_pricing_card_header", children: [
            /* @__PURE__ */ jsx6("p", { className: "aster_pricing_card_plan", children: plan }),
            badge
          ] }),
          /* @__PURE__ */ jsxs4("div", { className: "aster_pricing_card_price_row", children: [
            /* @__PURE__ */ jsx6("span", { className: "aster_pricing_card_price", children: price }),
            period && /* @__PURE__ */ jsx6("span", { className: "aster_pricing_card_period", children: period })
          ] }),
          description && /* @__PURE__ */ jsx6("p", { className: "aster_pricing_card_description", children: description }),
          /* @__PURE__ */ jsx6("hr", { className: "aster_pricing_card_divider" }),
          /* @__PURE__ */ jsx6("ul", { className: "aster_pricing_card_features", children: features.map((feature) => /* @__PURE__ */ jsxs4("li", { className: "aster_pricing_card_feature", children: [
            /* @__PURE__ */ jsx6("span", { className: "aster_pricing_card_check", children: /* @__PURE__ */ jsx6(CheckIcon, {}) }),
            feature
          ] }, feature)) }),
          children && /* @__PURE__ */ jsx6("div", { className: "aster_pricing_card_cta", children })
        ]
      }
    );
  }
);
PricingCard.displayName = "PricingCard";

// src/card/testimonial_card.tsx
import * as React7 from "react";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var TestimonialCard = React7.forwardRef(
  ({ quote, author, role, company, avatar, className, ...props }, ref) => {
    const role_text = [role, company].filter(Boolean).join(" at ");
    return /* @__PURE__ */ jsxs5(
      Card,
      {
        ref,
        className: ["aster_testimonial_card", className].filter(Boolean).join(" "),
        ...props,
        children: [
          /* @__PURE__ */ jsx7("p", { className: "aster_testimonial_card_quote", children: quote }),
          /* @__PURE__ */ jsxs5("div", { className: "aster_testimonial_card_author", children: [
            /* @__PURE__ */ jsx7("div", { className: "aster_testimonial_card_avatar", children: avatar || author.charAt(0).toUpperCase() }),
            /* @__PURE__ */ jsxs5("div", { className: "aster_testimonial_card_info", children: [
              /* @__PURE__ */ jsx7("p", { className: "aster_testimonial_card_name", children: author }),
              role_text && /* @__PURE__ */ jsx7("p", { className: "aster_testimonial_card_role", children: role_text })
            ] })
          ] })
        ]
      }
    );
  }
);
TestimonialCard.displayName = "TestimonialCard";

// src/card/stat_card.tsx
import * as React8 from "react";
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var TrendArrowUp = () => /* @__PURE__ */ jsx8("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsx8("path", { d: "M6 2.5L9.5 6H7.5V9.5H4.5V6H2.5L6 2.5Z", fill: "currentColor" }) });
var TrendArrowDown = () => /* @__PURE__ */ jsx8("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsx8("path", { d: "M6 9.5L2.5 6H4.5V2.5H7.5V6H9.5L6 9.5Z", fill: "currentColor" }) });
var trend_class_map = {
  up: "aster_stat_card_trend aster_stat_card_trend_up",
  down: "aster_stat_card_trend aster_stat_card_trend_down",
  neutral: "aster_stat_card_trend aster_stat_card_trend_neutral"
};
var StatCard = React8.forwardRef(
  ({ value, label, trend, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs6(
      Card,
      {
        ref,
        className: ["aster_stat_card", className].filter(Boolean).join(" "),
        ...props,
        children: [
          /* @__PURE__ */ jsx8("p", { className: "aster_stat_card_value", children: value }),
          /* @__PURE__ */ jsx8("p", { className: "aster_stat_card_label", children: label }),
          trend && /* @__PURE__ */ jsxs6("span", { className: trend_class_map[trend.direction], children: [
            trend.direction === "up" && /* @__PURE__ */ jsx8(TrendArrowUp, {}),
            trend.direction === "down" && /* @__PURE__ */ jsx8(TrendArrowDown, {}),
            trend.value
          ] })
        ]
      }
    );
  }
);
StatCard.displayName = "StatCard";

// src/banner/banner.tsx
import * as React9 from "react";
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsxs7("div", { className: classes, ref, ...props, children: [
      /* @__PURE__ */ jsxs7("div", { className: "aster_banner_content", children: [
        badge,
        /* @__PURE__ */ jsx9("p", { className: "aster_banner_text", children: text }),
        action_label && /* @__PURE__ */ jsxs7(
          "a",
          {
            href: action_href || "#",
            className: "aster_banner_action",
            onClick: on_action,
            children: [
              action_label,
              /* @__PURE__ */ jsx9(
                "svg",
                {
                  className: "aster_banner_arrow",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  children: /* @__PURE__ */ jsx9(
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
      show_close && on_dismiss && /* @__PURE__ */ jsx9(
        "button",
        {
          className: "aster_banner_close",
          "aria-label": dismiss_label,
          onClick: on_dismiss,
          children: /* @__PURE__ */ jsx9(
            "svg",
            {
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "2",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsx9(
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
import * as React10 from "react";
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
var avatar_variants = cva4("aster_avatar", {
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
      return /* @__PURE__ */ jsx10(
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
    return /* @__PURE__ */ jsx10(
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
    return /* @__PURE__ */ jsxs8("div", { className: "aster_avatar_wrap", ref, children: [
      /* @__PURE__ */ jsx10(Avatar, { ...avatar_props }),
      /* @__PURE__ */ jsx10("span", { className: status_class_map[status] })
    ] });
  }
);
AvatarWithStatus.displayName = "AvatarWithStatus";
var AvatarGroup = React10.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_avatar_group", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx10("div", { className: classes, ref, ...props, children });
  }
);
AvatarGroup.displayName = "AvatarGroup";
var AvatarNamed = React10.forwardRef(
  ({ className, name, children, ...props }, ref) => {
    const classes = ["aster_avatar_named", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxs8("div", { className: classes, ref, ...props, children: [
      children,
      /* @__PURE__ */ jsx10("span", { className: "aster_avatar_named_text", children: name })
    ] });
  }
);
AvatarNamed.displayName = "AvatarNamed";

// src/modal/modal.tsx
import * as React11 from "react";
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx11("div", { className: overlay_classes, onClick: handle_overlay_click, style: overlay_style, children: /* @__PURE__ */ jsxs9("div", { className: modal_classes, ref, style, ...props, children: [
      show_close_button && /* @__PURE__ */ jsx11(
        "button",
        {
          type: "button",
          "aria-label": close_label,
          className: "aster_modal_close aster_modal_close_floating",
          onClick: on_close,
          children: /* @__PURE__ */ jsx11(
            "svg",
            {
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "2",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsx11(
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
      return /* @__PURE__ */ jsx11("div", { className: classes, ref, ...props, children });
    }
    return /* @__PURE__ */ jsxs9("div", { className: classes, ref, ...props, children: [
      icon,
      title && /* @__PURE__ */ jsx11("p", { className: "aster_modal_title", children: title }),
      children,
      on_close && /* @__PURE__ */ jsx11(
        "button",
        {
          type: "button",
          "aria-label": close_label,
          className: "aster_modal_close",
          onClick: on_close,
          children: /* @__PURE__ */ jsx11(
            "svg",
            {
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "2",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsx11(
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
    return /* @__PURE__ */ jsx11("p", { className: classes, ref, ...props, children });
  }
);
ModalBody.displayName = "ModalBody";
var ModalActions = React11.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_modal_actions", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx11("div", { className: classes, ref, ...props, children });
  }
);
ModalActions.displayName = "ModalActions";
var ModalTitle = React11.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_modal_title", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx11("h2", { className: classes, ref, ...props, children });
  }
);
ModalTitle.displayName = "ModalTitle";
var ModalDescription = React11.forwardRef(({ className, children, ...props }, ref) => {
  const classes = ["aster_modal_description", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx11("p", { className: classes, ref, ...props, children });
});
ModalDescription.displayName = "ModalDescription";
var ModalFooter = React11.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_modal_footer", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx11("div", { className: classes, ref, ...props, children });
  }
);
ModalFooter.displayName = "ModalFooter";

// src/select/select.tsx
import * as React12 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon as CheckIcon2
} from "@heroicons/react/24/outline";
import { jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectLabel = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx12(
  SelectPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--text-muted)]",
      className
    ),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectSeparator = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx12(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn(
      "-mx-1.5 my-1.5 h-px bg-[var(--border-secondary)]",
      className
    ),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
var SelectScrollUpButton = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx12(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1 text-[var(--text-muted)]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx12(ChevronUpIcon, { className: "h-3.5 w-3.5" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx12(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1 text-[var(--text-muted)]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx12(ChevronDownIcon, { className: "h-3.5 w-3.5" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectTrigger = React12.forwardRef(({ className, children, style, ...props }, ref) => /* @__PURE__ */ jsxs10(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "group flex h-10 w-full items-center justify-between gap-2 overflow-hidden rounded-lg border border-[var(--border-secondary)] bg-[var(--input-bg)] px-3 py-1.5 text-[13px] font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-hover)] hover:border-[var(--border-primary)] active:bg-[var(--bg-secondary)] data-[state=open]:bg-[var(--bg-secondary)] data-[state=open]:border-[var(--border-primary)] data-[placeholder]:font-normal data-[placeholder]:text-[var(--text-muted)] outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    style: {
      boxShadow: "var(--select-shadow)",
      ...style
    },
    ...props,
    children: [
      /* @__PURE__ */ jsx12("span", { className: "min-w-0 truncate", children }),
      /* @__PURE__ */ jsx12(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx12(ChevronDownIcon, { className: "h-4 w-4 shrink-0 text-[var(--text-muted)] transition-transform duration-200 group-data-[state=open]:rotate-180" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
function use_wheel_scroll() {
  const detach_ref = React12.useRef(null);
  React12.useEffect(() => {
    return () => {
      detach_ref.current?.();
      detach_ref.current = null;
    };
  }, []);
  return React12.useCallback((node) => {
    detach_ref.current?.();
    detach_ref.current = null;
    if (!node) return;
    const handle_wheel = (event) => {
      if (event.ctrlKey || event.metaKey) return;
      if (node.scrollHeight <= node.clientHeight) return;
      const line_height = 16;
      const page_height = node.clientHeight;
      const delta = event.deltaMode === 1 ? event.deltaY * line_height : event.deltaMode === 2 ? event.deltaY * page_height : event.deltaY;
      event.preventDefault();
      event.stopPropagation();
      node.scrollTop += delta;
    };
    node.addEventListener("wheel", handle_wheel, { passive: false });
    detach_ref.current = () => node.removeEventListener("wheel", handle_wheel);
  }, []);
}
var SelectContent = React12.forwardRef(({ className, children, position = "popper", ...props }, ref) => {
  const viewport_ref = use_wheel_scroll();
  return /* @__PURE__ */ jsx12(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs10(
    SelectPrimitive.Content,
    {
      ref,
      className: cn(
        "relative z-[70] max-h-96 min-w-[8rem] overflow-hidden rounded-xl border border-[var(--border-secondary)] bg-[var(--dropdown-bg)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1",
        position === "popper" && "translate-y-1",
        className
      ),
      collisionPadding: 12,
      position,
      sideOffset: 6,
      style: { boxShadow: "var(--dropdown-shadow)" },
      ...props,
      children: [
        /* @__PURE__ */ jsx12(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx12(
          SelectPrimitive.Viewport,
          {
            ref: viewport_ref,
            className: cn(
              "p-1.5 max-h-[inherit] overflow-y-auto overscroll-contain",
              position === "popper" && "w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx12(SelectScrollDownButton, {})
      ]
    }
  ) });
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectItem = React12.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs10(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex min-h-[36px] w-full cursor-pointer select-none items-center rounded-lg py-2 ps-3 pe-9 text-[13px] text-[var(--text-secondary)] outline-none transition-colors hover:bg-black/[0.06] dark:hover:bg-white/[0.06] focus:bg-black/[0.06] dark:focus:bg-white/[0.06] data-[highlighted]:bg-black/[0.06] dark:data-[highlighted]:bg-white/[0.06] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:text-txt-primary data-[state=checked]:font-medium",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx12("span", { className: "absolute end-2.5 flex h-4 w-4 items-center justify-center text-brand", children: /* @__PURE__ */ jsx12(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx12(CheckIcon2, { className: "h-4 w-4", strokeWidth: 2.5 }) }) }),
      /* @__PURE__ */ jsx12(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

// src/skeleton/skeleton.tsx
import * as React13 from "react";
import { jsx as jsx13 } from "react/jsx-runtime";
var base_classes = "animate-pulse bg-black/[0.06] dark:bg-white/[0.08] inline-block align-middle";
var Skeleton = React13.forwardRef(
  ({ variant, width, height, className, style, ...props }, ref) => {
    if (variant === void 0 && width === void 0 && height === void 0) {
      return /* @__PURE__ */ jsx13(
        "div",
        {
          ref,
          className: cn("aster_skeleton", className),
          style,
          ...props
        }
      );
    }
    const resolved_variant = variant ?? "rectangular";
    const radius = resolved_variant === "circular" ? "rounded-full" : resolved_variant === "text" ? "rounded-[4px]" : "rounded-md";
    const resolved_style = {
      width: width ?? (resolved_variant === "text" ? "100%" : void 0),
      height: height ?? (resolved_variant === "text" ? "0.85em" : resolved_variant === "circular" ? width : void 0),
      ...style
    };
    return /* @__PURE__ */ jsx13(
      "div",
      {
        ref,
        "aria-hidden": "true",
        className: cn(base_classes, radius, className),
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
    return /* @__PURE__ */ jsx13(
      "div",
      {
        ref,
        className: cn("flex flex-col", className),
        style: { gap, ...style },
        ...props,
        children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsx13(
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
import { useState, useEffect as useEffect3 } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { jsx as jsx14, jsxs as jsxs11 } from "react/jsx-runtime";
function CheckIcon3({ className }) {
  return /* @__PURE__ */ jsx14(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx14(
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
  return /* @__PURE__ */ jsx14(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx14(
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
  return /* @__PURE__ */ jsx14(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx14(
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
  return /* @__PURE__ */ jsx14(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx14(
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
      return /* @__PURE__ */ jsx14(CheckIcon3, { className: icon_class });
    case "warning":
      return /* @__PURE__ */ jsx14(ExclamationTriangleIcon, { className: icon_class });
    case "error":
      return /* @__PURE__ */ jsx14(XMarkIcon, { className: icon_class });
    case "info":
      return /* @__PURE__ */ jsx14(InformationCircleIcon, { className: icon_class });
    default:
      return null;
  }
}
function SimpleToast({
  position = "bottom",
  dismiss_label = "Dismiss"
}) {
  const reduce_motion = useReducedMotion() ?? false;
  const [toasts, set_toasts] = useState([]);
  useEffect3(() => {
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
  return /* @__PURE__ */ jsx14(
    "div",
    {
      className: `fixed left-1/2 -translate-x-1/2 z-[100] flex ${is_top ? "flex-col" : "flex-col-reverse"} gap-2 pointer-events-none`,
      style: is_top ? { top: `calc(env(safe-area-inset-top, 0px) + 12px)` } : { bottom: "24px" },
      children: /* @__PURE__ */ jsx14(AnimatePresence, { children: toasts.map((toast) => /* @__PURE__ */ jsx14(
        motion.div,
        {
          animate: { opacity: 1, y: 0, scale: 1 },
          className: "pointer-events-auto",
          exit: { opacity: 0, scale: 0.95 },
          initial: reduce_motion ? false : { opacity: 0, y: y_offset, scale: 0.95 },
          layout: !reduce_motion,
          transition: { duration: reduce_motion ? 0 : 0.15 },
          children: /* @__PURE__ */ jsxs11("div", { className: "px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 bg-modal-bg border border-edge-secondary", children: [
            get_toast_icon(toast.icon_type) && /* @__PURE__ */ jsx14("span", { className: "flex-shrink-0 text-txt-primary", children: get_toast_icon(toast.icon_type) }),
            /* @__PURE__ */ jsx14("span", { className: "text-[13px] font-medium text-txt-primary whitespace-nowrap", children: toast.message }),
            /* @__PURE__ */ jsx14(
              "button",
              {
                "aria-label": dismiss_label,
                className: "ml-1 flex-shrink-0 text-txt-muted hover:text-txt-primary transition-colors",
                onClick: () => dismiss_toast(toast.id),
                children: /* @__PURE__ */ jsx14(XMarkIcon, { className: "w-3.5 h-3.5" })
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
import { jsx as jsx15, jsxs as jsxs12 } from "react/jsx-runtime";
function join_classes(...parts) {
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
  return /* @__PURE__ */ jsxs12(
    "main",
    {
      className: join_classes(
        "flex flex-col items-center justify-center min-h-[60vh] w-full px-6 text-center",
        className
      ),
      children: [
        /* @__PURE__ */ jsx15("p", { className: "text-[64px] leading-none font-semibold tracking-tight text-[var(--text-primary,#111)]", children: title }),
        message && /* @__PURE__ */ jsx15("p", { className: "mt-3 max-w-md text-[14px] text-[var(--text-muted,#666)]", children: message }),
        cta_label && on_navigate_home && /* @__PURE__ */ jsx15(
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
import * as React14 from "react";
import { AnimatePresence as AnimatePresence2, motion as motion2 } from "framer-motion";
import { Fragment, jsx as jsx16, jsxs as jsxs13 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs13("div", { ref: wrapper_ref, className: "relative", children: [
    trigger,
    /* @__PURE__ */ jsx16(AnimatePresence2, { children: is_open && /* @__PURE__ */ jsxs13(
      motion2.div,
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
          /* @__PURE__ */ jsx16("div", { className: "px-3 pt-2.5 pb-1", children: /* @__PURE__ */ jsx16(
            "span",
            {
              className: "text-[10px] uppercase tracking-wide font-medium",
              style: { color: "var(--text-muted)" },
              children: identity_label
            }
          ) }),
          /* @__PURE__ */ jsx16("div", { className: "px-1.5 pb-1.5", children: /* @__PURE__ */ jsxs13(
            "div",
            {
              className: "w-full px-2.5 py-2 rounded-[14px] flex items-center gap-2.5",
              style: { backgroundColor: "var(--surf-tertiary, transparent)" },
              children: [
                /* @__PURE__ */ jsxs13("div", { className: "relative", children: [
                  show_image ? /* @__PURE__ */ jsx16(
                    "img",
                    {
                      alt: "",
                      className: "w-7 h-7 rounded-full object-cover flex-shrink-0 ring-1 ring-black/5 dark:ring-white/10",
                      decoding: "async",
                      draggable: false,
                      onError: () => set_image_failed(true),
                      src: profile_picture
                    }
                  ) : /* @__PURE__ */ jsx16(
                    "div",
                    {
                      "aria-hidden": "true",
                      className: "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden",
                      style: {
                        background: avatar_gradient,
                        boxShadow: "inset 0 -2px 4px rgba(0,0,0,0.25), inset 0 1px 2px rgba(255,255,255,0.2)"
                      },
                      children: aster_fallback_src ? /* @__PURE__ */ jsx16(
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
                      ) : /* @__PURE__ */ jsx16("span", { className: "text-[10px] font-semibold text-white", children: initials_for(display_name, email) })
                    }
                  ),
                  /* @__PURE__ */ jsx16(
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
                /* @__PURE__ */ jsxs13("div", { className: "flex flex-col min-w-0 flex-1", children: [
                  display_name && /* @__PURE__ */ jsx16(
                    "span",
                    {
                      className: "text-[12px] font-medium truncate",
                      style: { color: "var(--text-primary)" },
                      children: display_name
                    }
                  ),
                  email && /* @__PURE__ */ jsx16(
                    "span",
                    {
                      className: "text-[11px] truncate",
                      style: { color: "var(--text-muted)" },
                      children: email
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx16("span", { className: "inline-flex items-center text-[9px] font-medium px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/30", children: active_label })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx16(
            "div",
            {
              className: "h-px mx-2",
              style: { backgroundColor: "var(--border-secondary)" }
            }
          ),
          /* @__PURE__ */ jsx16("div", { className: "p-1.5", children: items.map((item) => {
            const Icon2 = item.icon;
            return /* @__PURE__ */ jsxs13(
              "button",
              {
                className: "w-full px-2.5 py-2 rounded-[12px] flex items-center gap-2.5 text-left transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
                type: "button",
                onClick: () => {
                  item.on_click();
                  on_close();
                },
                children: [
                  /* @__PURE__ */ jsx16(
                    Icon2,
                    {
                      className: "w-4 h-4 flex-shrink-0",
                      style: { color: "var(--text-secondary)" }
                    }
                  ),
                  /* @__PURE__ */ jsx16(
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
          footer && /* @__PURE__ */ jsxs13(Fragment, { children: [
            /* @__PURE__ */ jsx16(
              "div",
              {
                className: "h-px mx-2",
                style: { backgroundColor: "var(--border-secondary)" }
              }
            ),
            /* @__PURE__ */ jsx16("div", { className: "p-1.5", children: footer })
          ] })
        ]
      }
    ) })
  ] });
}

// src/tooltip/tooltip.tsx
import * as React15 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsx as jsx17, jsxs as jsxs14 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx17(TooltipPrimitive.Provider, { delayDuration: delay, skipDelayDuration: 0, children: /* @__PURE__ */ jsxs14(TooltipPrimitive.Root, { open, onOpenChange: handle_open_change, children: [
    /* @__PURE__ */ jsx17(
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
    /* @__PURE__ */ jsx17(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx17(
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
    return /* @__PURE__ */ jsx17("span", { className: classes, "data-tip": tip, ref, ...props, children });
  }
);
TooltipDotted.displayName = "TooltipDotted";
var TooltipRich = React15.forwardRef(
  ({ title, description, className, children, ...props }, ref) => {
    const classes = ["aster_tip_rich_wrap", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxs14("span", { className: classes, ref, ...props, children: [
      children,
      /* @__PURE__ */ jsxs14("span", { className: "aster_tip_rich", children: [
        /* @__PURE__ */ jsx17("span", { className: "aster_tip_rich_title", children: title }),
        /* @__PURE__ */ jsx17("span", { className: "aster_tip_rich_desc", children: description })
      ] })
    ] });
  }
);
TooltipRich.displayName = "TooltipRich";

// src/toggle/toggle.tsx
import * as React16 from "react";
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx18, jsxs as jsxs15 } from "react/jsx-runtime";
var switch_variants = cva5("aster_switch", {
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
    const switch_el = /* @__PURE__ */ jsxs15("label", { className: [switch_classes, className].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ jsx18("input", { type: "checkbox", className: "aster_switch_input", ref, onChange: handle_change, ...props }),
      /* @__PURE__ */ jsx18("span", { className: "aster_switch_track", children: /* @__PURE__ */ jsx18("span", { className: "aster_switch_thumb" }) })
    ] });
    if (label_title) {
      return /* @__PURE__ */ jsxs15("label", { className: "aster_switch_labeled", children: [
        /* @__PURE__ */ jsxs15("span", { className: "aster_switch_labeled_text", children: [
          /* @__PURE__ */ jsx18("span", { className: "aster_switch_labeled_title", children: label_title }),
          label_desc && /* @__PURE__ */ jsx18("span", { className: "aster_switch_labeled_desc", children: label_desc })
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
    return /* @__PURE__ */ jsxs15("label", { className: classes, children: [
      /* @__PURE__ */ jsx18("input", { type: "checkbox", className: "aster_checkbox_input", ref: combined_ref, onChange: handle_change, ...props }),
      /* @__PURE__ */ jsx18("span", { className: "aster_checkbox_box", children: indeterminate ? /* @__PURE__ */ jsx18(
        "svg",
        {
          className: "aster_checkbox_check",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: "3",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsx18("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12h14" })
        }
      ) : /* @__PURE__ */ jsx18(
        "svg",
        {
          className: "aster_checkbox_check",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: "3",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsx18(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m4.5 12.75 6 6 9-13.5"
            }
          )
        }
      ) }),
      label && /* @__PURE__ */ jsx18("span", { className: "aster_checkbox_text", children: label })
    ] });
  }
);
Checkbox.displayName = "Checkbox";
var Radio = React16.forwardRef(
  ({ className, label, ...props }, ref) => {
    const classes = ["aster_radio", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxs15("label", { className: classes, children: [
      /* @__PURE__ */ jsx18("input", { type: "radio", className: "aster_radio_input", ref, ...props }),
      /* @__PURE__ */ jsx18("span", { className: "aster_radio_circle" }),
      label && /* @__PURE__ */ jsx18("span", { className: "aster_radio_text", children: label })
    ] });
  }
);
Radio.displayName = "Radio";
var SegmentedToggle = React16.forwardRef(
  ({ className, name, options, value, on_change, ...props }, ref) => {
    const classes = ["aster_seg", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx18("div", { className: classes, ref, ...props, children: options.map((opt) => /* @__PURE__ */ jsxs15(React16.Fragment, { children: [
      /* @__PURE__ */ jsx18(
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
      /* @__PURE__ */ jsx18("label", { htmlFor: `${name}_${opt.value}`, className: "aster_seg_label", children: opt.label })
    ] }, opt.value)) });
  }
);
SegmentedToggle.displayName = "SegmentedToggle";

// src/navbar/navbar.tsx
import * as React17 from "react";
import { jsx as jsx19, jsxs as jsxs16 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx19(NavbarContext.Provider, { value: { active_panel, open_panel, schedule_close, cancel_close }, children: /* @__PURE__ */ jsx19("nav", { className: classes, ref, onMouseLeave: schedule_close, ...props, children }) });
  }
);
Navbar.displayName = "Navbar";
var NavbarInner = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_inner", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx19("div", { className: classes, ref, ...props, children });
  }
);
NavbarInner.displayName = "NavbarInner";
var NavbarLogo = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_logo", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx19("a", { className: classes, ref, ...props, children });
  }
);
NavbarLogo.displayName = "NavbarLogo";
var NavbarLinks = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_links", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx19("div", { className: classes, ref, ...props, children });
  }
);
NavbarLinks.displayName = "NavbarLinks";
var NavbarLink = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_link", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx19("a", { className: classes, ref, ...props, children });
  }
);
NavbarLink.displayName = "NavbarLink";
var NavbarTrigger = React17.forwardRef(
  ({ className, panel_id, children, ...props }, ref) => {
    const { active_panel, open_panel, schedule_close } = React17.useContext(NavbarContext);
    const classes = ["aster_navbar_link", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxs16(
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
          /* @__PURE__ */ jsx19(
            "svg",
            {
              className: "aster_navbar_chevron",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: /* @__PURE__ */ jsx19("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m19.5 8.25-7.5 7.5-7.5-7.5" })
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
    return /* @__PURE__ */ jsx19("div", { className: classes, ref, ...props, children });
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
    return /* @__PURE__ */ jsx19("a", { className: classes, ref, ...props, children });
  }
);
NavbarCta.displayName = "NavbarCta";
var NavbarSearch = React17.forwardRef(
  ({ className, placeholder = "Search...", shortcut = "/", ...props }, ref) => {
    const classes = ["aster_navbar_search", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxs16("div", { className: classes, ref, ...props, children: [
      /* @__PURE__ */ jsx19(
        "svg",
        {
          className: "aster_navbar_search_icon",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          children: /* @__PURE__ */ jsx19(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx19("input", { type: "text", className: "aster_navbar_search_input", placeholder }),
      shortcut && /* @__PURE__ */ jsx19("kbd", { className: "aster_navbar_search_kbd", children: shortcut })
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
    return /* @__PURE__ */ jsx19(
      "div",
      {
        className: outer_classes,
        ref,
        onMouseEnter: cancel_close,
        onMouseLeave: schedule_close,
        ...props,
        children: /* @__PURE__ */ jsx19("div", { className: container_classes, children })
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
    return /* @__PURE__ */ jsx19("div", { className: classes, ref, ...props, children });
  }
);
NavbarMegaPanel.displayName = "NavbarMegaPanel";
var NavbarMegaCols = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mega_cols", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx19("div", { className: classes, ref, ...props, children });
  }
);
NavbarMegaCols.displayName = "NavbarMegaCols";
var NavbarMegaCol = React17.forwardRef(
  ({ className, heading, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs16("div", { className, ref, ...props, children: [
      heading && /* @__PURE__ */ jsx19("p", { className: "aster_navbar_mega_heading", children: heading }),
      children
    ] });
  }
);
NavbarMegaCol.displayName = "NavbarMegaCol";
var NavbarMegaItem = React17.forwardRef(
  ({ className, icon, title, description, ...props }, ref) => {
    const classes = ["aster_navbar_mega_item", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxs16("a", { className: classes, ref, ...props, children: [
      icon && /* @__PURE__ */ jsx19("span", { className: "aster_navbar_mega_icon", children: icon }),
      /* @__PURE__ */ jsxs16("div", { children: [
        /* @__PURE__ */ jsx19("span", { className: "aster_navbar_mega_title", children: title }),
        description && /* @__PURE__ */ jsx19("span", { className: "aster_navbar_mega_desc", children: description })
      ] })
    ] });
  }
);
NavbarMegaItem.displayName = "NavbarMegaItem";
var NavbarMegaItemSimple = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mega_item_simple", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx19("a", { className: classes, ref, ...props, children });
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
    return /* @__PURE__ */ jsxs16("button", { className: classes, ref, onClick: handle_click, ...props, children: [
      /* @__PURE__ */ jsx19(
        "svg",
        {
          className: "aster_navbar_hamburger_open",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ jsx19(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx19(
        "svg",
        {
          className: "aster_navbar_hamburger_close",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ jsx19("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" })
        }
      )
    ] });
  }
);
NavbarHamburger.displayName = "NavbarHamburger";
var NavbarMobileMenu = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mobile_menu", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx19("div", { className: classes, ref, ...props, children });
  }
);
NavbarMobileMenu.displayName = "NavbarMobileMenu";
var NavbarMobileLink = React17.forwardRef(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mobile_link", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx19("a", { className: classes, ref, ...props, children });
  }
);
NavbarMobileLink.displayName = "NavbarMobileLink";
var NavbarMobileDivider = () => /* @__PURE__ */ jsx19("div", { className: "aster_navbar_mobile_divider" });
NavbarMobileDivider.displayName = "NavbarMobileDivider";

// src/accordion/accordion.tsx
import * as React18 from "react";
import { cva as cva6 } from "class-variance-authority";
import { jsx as jsx20, jsxs as jsxs17 } from "react/jsx-runtime";
var accordion_variants = cva6("aster_accordion", {
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
    return /* @__PURE__ */ jsx20(AccordionContext.Provider, { value: context, children: /* @__PURE__ */ jsx20(
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
    return /* @__PURE__ */ jsx20(AccordionItemContext.Provider, { value, children: /* @__PURE__ */ jsx20(
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
  return /* @__PURE__ */ jsxs17(
    "button",
    {
      ref,
      type: "button",
      className: ["aster_accordion_trigger", className].filter(Boolean).join(" "),
      onClick: () => toggle(value),
      "aria-expanded": is_open,
      ...props,
      children: [
        icon ? /* @__PURE__ */ jsxs17("span", { className: "aster_accordion_trigger_icon_wrap", children: [
          /* @__PURE__ */ jsx20("span", { className: "aster_accordion_trigger_icon", children: icon }),
          /* @__PURE__ */ jsx20("span", { children })
        ] }) : /* @__PURE__ */ jsx20("span", { children }),
        /* @__PURE__ */ jsx20(
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
            children: /* @__PURE__ */ jsx20(
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
    return /* @__PURE__ */ jsx20(
      "div",
      {
        ref,
        className: [
          "aster_accordion_content",
          is_open && "aster_accordion_content_open",
          className
        ].filter(Boolean).join(" "),
        ...props,
        children: /* @__PURE__ */ jsx20(
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
import * as React19 from "react";
import { cva as cva7 } from "class-variance-authority";
import { jsx as jsx21, jsxs as jsxs18 } from "react/jsx-runtime";
var kbd_variants = cva7("aster_kbd", {
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
    return /* @__PURE__ */ jsx21("kbd", { "aria-label": `Keyboard shortcut: ${label}`, className: classes, ref, ...props, children: formatted.map((k, i) => /* @__PURE__ */ jsxs18(React19.Fragment, { children: [
      i > 0 && /* @__PURE__ */ jsx21("span", { "aria-hidden": "true", className: "aster_kbd_sep" }),
      /* @__PURE__ */ jsx21("span", { "aria-hidden": "true", children: k })
    ] }, i)) });
  }
);
Kbd.displayName = "Kbd";

// src/marquee/marquee.tsx
import * as React20 from "react";
import { cva as cva8 } from "class-variance-authority";
import { jsx as jsx22, jsxs as jsxs19 } from "react/jsx-runtime";
var marquee_variants = cva8("aster_marquee", {
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
    return /* @__PURE__ */ jsx22(
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
    return /* @__PURE__ */ jsxs19(
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
          /* @__PURE__ */ jsx22("div", { className: "aster_marquee_slide", children }),
          /* @__PURE__ */ jsx22("div", { className: "aster_marquee_slide", "aria-hidden": "true", children })
        ]
      }
    );
  }
);
MarqueeTrack.displayName = "MarqueeTrack";
var MarqueeLogo = React20.forwardRef(
  ({ className, icon, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs19(
      "span",
      {
        ref,
        className: ["aster_marquee_logo", className].filter(Boolean).join(" "),
        ...props,
        children: [
          icon && /* @__PURE__ */ jsx22("span", { className: "aster_marquee_logo_icon", children: icon }),
          children
        ]
      }
    );
  }
);
MarqueeLogo.displayName = "MarqueeLogo";

// src/text_roller/text_roller.tsx
import * as React21 from "react";
import { jsx as jsx23 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx23(
      "span",
      {
        ref,
        className: ["aster_text_roller", className].filter(Boolean).join(" "),
        style: { height: item_height },
        ...props,
        children: /* @__PURE__ */ jsx23(
          "span",
          {
            className: "aster_text_roller_track",
            style: { transform: `translateY(calc(-${index} * ${item_height}))` },
            "aria-live": "polite",
            children: items.map((item, i) => {
              const text = typeof item === "string" ? item : item.text;
              const item_class = typeof item === "string" ? void 0 : item.class_name;
              return /* @__PURE__ */ jsx23(
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
import * as React22 from "react";
import { Fragment as Fragment4, jsx as jsx24, jsxs as jsxs20 } from "react/jsx-runtime";
function join_classes2(...parts) {
  return parts.filter(Boolean).join(" ");
}
function ChevronDown({ className }) {
  return /* @__PURE__ */ jsx24(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx24("path", { d: "M6 9l6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" })
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
  return /* @__PURE__ */ jsxs20(
    "button",
    {
      className: join_classes2(
        "w-full flex items-center rounded-[12px] px-1 py-1 -mx-1 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)]",
        is_collapsed ? "justify-center" : "gap-3"
      ),
      type: "button",
      onClick: on_trigger_click,
      children: [
        /* @__PURE__ */ jsx24(
          "div",
          {
            className: join_classes2(
              "flex-shrink-0 relative",
              is_collapsed ? "w-10 h-10" : "w-11 h-11"
            ),
            children: /* @__PURE__ */ jsx24(
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
        !is_collapsed && /* @__PURE__ */ jsxs20(Fragment4, { children: [
          /* @__PURE__ */ jsxs20("div", { className: "flex flex-col items-start min-w-0 flex-1", children: [
            /* @__PURE__ */ jsx24("span", { className: "text-[15px] font-semibold text-txt-primary truncate w-full text-left", children: title }),
            subtitle && /* @__PURE__ */ jsx24("span", { className: "text-[11px] truncate w-full text-left text-txt-muted", children: subtitle })
          ] }),
          right_slot,
          show_chevron && /* @__PURE__ */ jsx24(ChevronDown, { className: "w-4 h-4 flex-shrink-0 text-txt-muted" })
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
  return /* @__PURE__ */ jsx24("div", { className: "mb-1 px-2.5", children: /* @__PURE__ */ jsx24("span", { className: "text-[10px] font-semibold uppercase tracking-[0.05em] text-txt-muted opacity-70", children: label }) });
}
function SidebarSectionToggle({
  label,
  is_collapsed,
  section_collapsed,
  on_toggle,
  right_slot
}) {
  if (is_collapsed) return null;
  return /* @__PURE__ */ jsx24("div", { className: "mt-5 mb-1 px-2.5", children: /* @__PURE__ */ jsxs20("div", { className: "w-full flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs20(
      "button",
      {
        className: "flex-1 flex items-center gap-1 py-1 text-txt-muted opacity-70 hover:opacity-100",
        type: "button",
        onClick: on_toggle,
        children: [
          /* @__PURE__ */ jsx24(
            ChevronDown,
            {
              className: join_classes2(
                "w-3 h-3",
                section_collapsed ? "-rotate-90" : "rotate-0"
              )
            }
          ),
          /* @__PURE__ */ jsx24("span", { className: "text-[10px] font-semibold uppercase tracking-[0.05em]", children: label })
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
  return /* @__PURE__ */ jsxs20(
    "button",
    {
      className: "w-full flex items-center gap-2 px-2.5 h-7 text-[12px] rounded-[12px] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] text-txt-muted",
      type: "button",
      onClick: on_toggle,
      children: [
        /* @__PURE__ */ jsx24(
          ChevronDown,
          {
            className: join_classes2(
              "w-3.5 h-3.5",
              expanded ? "rotate-180" : "rotate-0"
            )
          }
        ),
        /* @__PURE__ */ jsx24("span", { children: expanded ? less_label : more_label })
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
    return /* @__PURE__ */ jsxs20(
      "button",
      {
        ref,
        className: join_classes2(
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
          Icon2 && /* @__PURE__ */ jsx24(
            Icon2,
            {
              className: is_collapsed ? "w-5 h-5" : "w-4 h-4",
              style: {
                color: selected ? "var(--text-primary)" : "var(--text-muted)"
              }
            }
          ),
          !is_collapsed && /* @__PURE__ */ jsx24("span", { className: "flex-1 text-left", children: label }),
          !is_collapsed && trailing,
          !is_collapsed && show_count && !is_loading && count !== void 0 && count > 0 && /* @__PURE__ */ jsx24("span", { className: "ml-auto text-[11px] tabular-nums text-txt-muted", children: count })
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
  tag_icon: TagIcon3
}) {
  return /* @__PURE__ */ jsxs20(
    "button",
    {
      ref: button_ref,
      className: join_classes2(
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
        TagIcon3 ? /* @__PURE__ */ jsx24(
          TagIcon3,
          {
            className: join_classes2(
              "flex-shrink-0",
              is_collapsed ? "w-5 h-5" : "w-4 h-4"
            ),
            style: { color: color ?? "var(--accent-color)" }
          }
        ) : /* @__PURE__ */ jsx24(
          "span",
          {
            className: join_classes2(
              "flex-shrink-0 rounded-full",
              is_collapsed ? "w-3 h-3" : "w-2.5 h-2.5"
            ),
            style: { backgroundColor: color ?? "var(--accent-color)" }
          }
        ),
        !is_collapsed && /* @__PURE__ */ jsxs20(Fragment4, { children: [
          /* @__PURE__ */ jsx24("span", { className: "flex-1 text-left truncate leading-4", children: label }),
          show_count && count !== void 0 && count > 0 && /* @__PURE__ */ jsx24("span", { className: "ml-auto text-[11px] tabular-nums text-txt-muted", children: count })
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
  return /* @__PURE__ */ jsxs20(
    "button",
    {
      className: join_classes2(
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
        /* @__PURE__ */ jsx24(Icon2, { className: "w-4 h-4 flex-shrink-0" }),
        !is_collapsed && /* @__PURE__ */ jsxs20(Fragment4, { children: [
          /* @__PURE__ */ jsx24("span", { className: "flex-1 text-left", children: label }),
          shortcut_key && /* @__PURE__ */ jsx24(
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
import {
  useCallback as useCallback5,
  useEffect as useEffect9,
  useLayoutEffect,
  useMemo as useMemo2,
  useRef as useRef7,
  useState as useState8
} from "react";
import { AnimatePresence as AnimatePresence3, motion as motion3 } from "framer-motion";

// src/motion/use_should_reduce_motion.ts
import { useEffect as useEffect8, useState as useState7 } from "react";
function use_should_reduce_motion() {
  const [reduced, set_reduced] = useState7(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  useEffect8(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => set_reduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// src/sidebar/dashboard_sidebar.tsx
import { Fragment as Fragment5, jsx as jsx25, jsxs as jsxs21 } from "react/jsx-runtime";
var SIDEBAR_EXPANDED_WIDTH = 256;
function ChevronDownIcon2({ className }) {
  return /* @__PURE__ */ jsx25(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx25("path", { d: "M6 9l6 6 6-6", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function PlusIcon({ className }) {
  return /* @__PURE__ */ jsx25(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx25("path", { d: "M12 4v16m8-8H4", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function XMarkIcon2({ className }) {
  return /* @__PURE__ */ jsx25(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx25("path", { d: "M6 18L18 6M6 6l12 12", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function Cog6ToothIcon({ className }) {
  return /* @__PURE__ */ jsxs21(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ jsx25(
          "path",
          {
            d: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx25(
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
  return /* @__PURE__ */ jsx25(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx25(
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
  return /* @__PURE__ */ jsx25(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      style,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx25(
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
  return /* @__PURE__ */ jsx25(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      style,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx25(
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
  return /* @__PURE__ */ jsx25(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      style,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx25(
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
  return /* @__PURE__ */ jsx25(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      style,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx25(
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
  return /* @__PURE__ */ jsxs21(
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
        /* @__PURE__ */ jsx25(
          "path",
          {
            d: "M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx25("path", { d: "M6 6h.008v.008H6V6Z", strokeLinecap: "round", strokeLinejoin: "round" })
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
  const [is_mobile, set_is_mobile] = useState8(false);
  const [is_tablet, set_is_tablet] = useState8(false);
  const [is_account_menu_open, set_is_account_menu_open] = useState8(false);
  const [labels_expanded, set_labels_expanded] = useState8(false);
  const [accounts_section_collapsed, set_accounts_section_collapsed] = useState8(
    () => {
      if (typeof window === "undefined") return false;
      return localStorage.getItem(accounts_collapsed_key) === "1";
    }
  );
  const [tags_section_collapsed, set_tags_section_collapsed] = useState8(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(tags_collapsed_key) === "1";
  });
  const [indicator_style, set_indicator_style] = useState8({ opacity: 0 });
  const nav_container_ref = useRef7(null);
  useEffect9(() => {
    const check_breakpoints = () => {
      const width = window.innerWidth;
      set_is_mobile(width < 768);
      set_is_tablet(width >= 768 && width < 1024);
    };
    check_breakpoints();
    window.addEventListener("resize", check_breakpoints);
    return () => window.removeEventListener("resize", check_breakpoints);
  }, []);
  useEffect9(() => {
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
  const tag_data = useMemo2(() => {
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
  const nav_counts = useMemo2(() => {
    return {
      all: accounts.length,
      favorites: accounts.filter((a) => a.is_pinned).length,
      recent: accounts.length,
      archived: 0
    };
  }, [accounts]);
  const toggle_accounts_section = useCallback5(() => {
    set_accounts_section_collapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(accounts_collapsed_key, next ? "1" : "0");
      } catch {
      }
      return next;
    });
  }, [accounts_collapsed_key]);
  const toggle_tags_section = useCallback5(() => {
    set_tags_section_collapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(tags_collapsed_key, next ? "1" : "0");
      } catch {
      }
      return next;
    });
  }, [tags_collapsed_key]);
  const recalculate_indicator = useCallback5(() => {
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
  useLayoutEffect(() => {
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
  useEffect9(() => {
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
  const handle_nav_click = useCallback5(
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
  const account_menu_items = useMemo2(() => {
    const settings_item = {
      id: "settings",
      label: t_strings.settings,
      icon: Cog6ToothIcon,
      on_click: on_settings_click
    };
    return extra_account_menu_items ? [settings_item, ...extra_account_menu_items] : [settings_item];
  }, [t_strings.settings, on_settings_click, extra_account_menu_items]);
  const account_menu_footer = /* @__PURE__ */ jsxs21(
    Button,
    {
      className: "w-full text-[12px]",
      size: "sm",
      variant: "destructive",
      onClick: on_sign_out,
      children: [
        /* @__PURE__ */ jsx25(ArrowRightOnRectangleIcon, { className: "w-3.5 h-3.5" }),
        t_strings.sign_out
      ]
    }
  );
  const footer_expanded_slot = /* @__PURE__ */ jsx25("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsxs21(
    "button",
    {
      className: "flex-1 flex items-center gap-2 px-2 py-1.5 rounded-[12px] text-[12px] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] text-txt-muted",
      type: "button",
      onClick: on_settings_click,
      children: [
        /* @__PURE__ */ jsx25(Cog6ToothIcon, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx25("span", { children: t_strings.settings })
      ]
    }
  ) });
  const footer_collapsed_slot = /* @__PURE__ */ jsx25(
    "button",
    {
      className: "p-2 rounded-[14px] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] text-txt-muted",
      title: t_strings.settings,
      type: "button",
      onClick: on_settings_click,
      children: /* @__PURE__ */ jsx25(Cog6ToothIcon, { className: "w-4 h-4" })
    }
  );
  const max_visible_tags = collapsed ? 3 : 5;
  const visible_tags = labels_expanded ? tag_data.tags : tag_data.tags.slice(0, max_visible_tags);
  const has_more_tags = tag_data.tags.length > max_visible_tags;
  const hidden_tag_count = tag_data.tags.length - max_visible_tags;
  const content = /* @__PURE__ */ jsxs21(
    "aside",
    {
      className: `flex h-full flex-col flex-shrink-0 transition-all duration-150 bg-sidebar-bg-custom ${collapsed ? "w-16 min-w-16 max-w-16" : ""}`,
      style: collapsed ? void 0 : {
        width: SIDEBAR_EXPANDED_WIDTH,
        minWidth: SIDEBAR_EXPANDED_WIDTH,
        maxWidth: SIDEBAR_EXPANDED_WIDTH
      },
      children: [
        /* @__PURE__ */ jsxs21(
          "div",
          {
            className: `${collapsed ? "px-2" : "px-3"} ${is_mobile ? "pr-12" : ""} pt-4 pb-3 relative`,
            children: [
              is_mobile && /* @__PURE__ */ jsx25(
                "button",
                {
                  "aria-label": t_strings.close_menu,
                  className: "absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-[8px] transition-colors hover:bg-black/[0.06] dark:hover:bg-white/[0.08] z-10 text-txt-muted",
                  type: "button",
                  onClick: on_close_mobile,
                  children: /* @__PURE__ */ jsx25(XMarkIcon2, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsx25(
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
                  trigger: /* @__PURE__ */ jsxs21(
                    "button",
                    {
                      className: `w-full flex items-center ${collapsed ? "justify-center" : "gap-3"} rounded-[12px] px-1 py-1 -mx-1 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04] focus:outline-none`,
                      type: "button",
                      onClick: (e) => {
                        set_is_account_menu_open((v) => !v);
                        e.currentTarget.blur();
                      },
                      children: [
                        /* @__PURE__ */ jsx25(
                          "div",
                          {
                            className: `${collapsed ? "w-10 h-10" : "w-11 h-11"} flex-shrink-0 relative`,
                            children: /* @__PURE__ */ jsx25(
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
                        !collapsed && /* @__PURE__ */ jsxs21(Fragment5, { children: [
                          /* @__PURE__ */ jsxs21("div", { className: "flex flex-col items-start min-w-0 flex-1", children: [
                            /* @__PURE__ */ jsx25("span", { className: "text-[15px] font-semibold text-txt-primary truncate w-full text-left", children: t_strings.app_name }),
                            t_strings.deck_subtitle && /* @__PURE__ */ jsx25("span", { className: "text-[11px] truncate w-full text-left text-txt-muted", children: t_strings.deck_subtitle })
                          ] }),
                          /* @__PURE__ */ jsx25(ChevronDownIcon2, { className: "w-4 h-4 flex-shrink-0 text-txt-muted" })
                        ] })
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx25("div", { className: `${collapsed ? "px-2" : "px-2.5"} pb-3`, children: /* @__PURE__ */ jsxs21(
          Button,
          {
            className: `w-full !rounded-[14px] ${collapsed ? "" : "gap-2"}`,
            variant: "depth",
            onClick: () => {
              on_add_account();
              if (is_mobile) on_close_mobile();
            },
            children: [
              /* @__PURE__ */ jsx25(PlusIcon, { className: "w-[15px] h-[15px]" }),
              !collapsed && /* @__PURE__ */ jsxs21(Fragment5, { children: [
                /* @__PURE__ */ jsx25("span", { children: t_strings.add_account }),
                /* @__PURE__ */ jsx25(Kbd, { keys: add_shortcut_key, size: "sm", variant: "inlay" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx25(
          "div",
          {
            className: `flex-1 overflow-y-auto ${collapsed ? "px-2" : "px-2.5"} pt-0.5 pb-2`,
            children: /* @__PURE__ */ jsxs21("div", { ref: nav_container_ref, className: "relative", children: [
              !collapsed && /* @__PURE__ */ jsx25(
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
              collapsed ? /* @__PURE__ */ jsx25(
                SidebarSectionHeader,
                {
                  is_collapsed: true,
                  label: t_strings.accounts_section
                }
              ) : /* @__PURE__ */ jsx25(
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
                return /* @__PURE__ */ jsxs21(
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
                      /* @__PURE__ */ jsx25(
                        Icon2,
                        {
                          className: `${collapsed ? "w-5 h-5" : "w-4 h-4"} `,
                          style: {
                            color: selected ? "var(--text-primary)" : "var(--text-muted)"
                          }
                        }
                      ),
                      !collapsed && /* @__PURE__ */ jsxs21(Fragment5, { children: [
                        /* @__PURE__ */ jsx25("span", { className: "flex-1 text-left", children: label }),
                        count > 0 && /* @__PURE__ */ jsx25("span", { className: "ml-auto text-[11px] tabular-nums text-txt-muted", children: count })
                      ] })
                    ]
                  },
                  item.id
                );
              }),
              !collapsed && /* @__PURE__ */ jsx25(
                SidebarSectionToggle,
                {
                  is_collapsed: false,
                  label: t_strings.tags_section,
                  on_toggle: toggle_tags_section,
                  right_slot: /* @__PURE__ */ jsx25(
                    "button",
                    {
                      className: "p-1 rounded-[14px] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-txt-muted",
                      title: t_strings.create_tag,
                      type: "button",
                      onClick: () => {
                        on_add_account();
                        if (is_mobile) on_close_mobile();
                      },
                      children: /* @__PURE__ */ jsx25(PlusIcon, { className: "w-4 h-4" })
                    }
                  ),
                  section_collapsed: tags_section_collapsed
                }
              ),
              collapsed && tag_data.tags.length > 0 && /* @__PURE__ */ jsx25("div", { className: "mt-3 flex justify-center", children: /* @__PURE__ */ jsx25("div", { className: "p-1.5 text-txt-muted", children: /* @__PURE__ */ jsx25(TagIcon, { className: "w-4 h-4" }) }) }),
              /* @__PURE__ */ jsxs21("div", { children: [
                !tags_section_collapsed && visible_tags.map((tag_name) => {
                  const color = color_for_tag(tag_name);
                  const selected = active_filter.kind === "tag" && active_filter.tag === tag_name;
                  return /* @__PURE__ */ jsx25(
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
                has_more_tags && !collapsed && !tags_section_collapsed && /* @__PURE__ */ jsx25(
                  SidebarMoreToggle,
                  {
                    expanded: labels_expanded,
                    hidden_count: hidden_tag_count,
                    less_label: t_strings.show_less,
                    more_label: t_strings.more_tags(hidden_tag_count),
                    on_toggle: () => set_labels_expanded(!labels_expanded)
                  }
                ),
                tag_data.tags.length === 0 && !collapsed && !tags_section_collapsed && /* @__PURE__ */ jsx25("p", { className: "text-[11px] px-2.5 py-2 text-txt-muted", children: t_strings.no_tags_yet })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs21("div", { className: "mt-auto flex-shrink-0", children: [
          /* @__PURE__ */ jsx25(
            "div",
            {
              className: `${collapsed ? "mx-2" : "mx-3"} mb-3 h-px bg-edge-primary`
            }
          ),
          /* @__PURE__ */ jsxs21(
            "div",
            {
              className: `${collapsed ? "px-2" : "px-3"} pb-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]`,
              children: [
                !collapsed && /* @__PURE__ */ jsx25("div", { className: "mb-2", children: /* @__PURE__ */ jsx25(
                  "img",
                  {
                    alt: "Aster",
                    className: "h-[18px] select-none",
                    decoding: "async",
                    draggable: false,
                    src: brand_text_logo_src
                  }
                ) }),
                collapsed ? /* @__PURE__ */ jsx25("div", { className: "flex flex-col items-center gap-1", children: footer_collapsed_slot }) : footer_expanded_slot
              ]
            }
          )
        ] })
      ]
    }
  );
  if (is_mobile) {
    return /* @__PURE__ */ jsx25(AnimatePresence3, { children: is_mobile_open && /* @__PURE__ */ jsxs21(Fragment5, { children: [
      /* @__PURE__ */ jsx25(
        motion3.div,
        {
          animate: { opacity: 1 },
          className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-md",
          exit: { opacity: 0 },
          initial: { opacity: 0 },
          transition: { duration: dur(0.2) },
          onClick: on_close_mobile
        }
      ),
      /* @__PURE__ */ jsx25(
        motion3.div,
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
import * as React24 from "react";
import { AnimatePresence as AnimatePresence4, motion as motion4 } from "framer-motion";

// src/island/island.tsx
import * as React23 from "react";
import { Fragment as Fragment6, jsx as jsx26, jsxs as jsxs22 } from "react/jsx-runtime";
function join_classes3(...parts) {
  return parts.filter(Boolean).join(" ");
}
var Island = React23.forwardRef(
  ({
    padding = "none",
    tone = "default",
    divided = false,
    interactive = false,
    selected = false,
    as = "div",
    className,
    ...props
  }, ref) => {
    const Component = as;
    return /* @__PURE__ */ jsx26(
      Component,
      {
        ref,
        className: join_classes3(
          "aster_island",
          padding !== "none" && `aster_island_pad_${padding}`,
          tone !== "default" && `aster_island_tone_${tone}`,
          divided && "aster_island_divided",
          interactive && "aster_island_interactive",
          selected && "aster_island_selected",
          className
        ),
        ...props
      }
    );
  }
);
Island.displayName = "Island";
var IslandLink = React23.forwardRef(
  ({ padding = "none", tone = "default", selected = false, className, target, rel, ...props }, ref) => /* @__PURE__ */ jsx26(
    "a",
    {
      ref,
      className: join_classes3(
        "aster_island",
        "aster_island_link",
        "aster_island_interactive",
        padding !== "none" && `aster_island_pad_${padding}`,
        tone !== "default" && `aster_island_tone_${tone}`,
        selected && "aster_island_selected",
        className
      ),
      rel: rel ?? (target === "_blank" ? "noopener noreferrer" : void 0),
      target,
      ...props
    }
  )
);
IslandLink.displayName = "IslandLink";
var IslandBlock = React23.forwardRef(
  ({ size = "md", className, ...props }, ref) => /* @__PURE__ */ jsx26(
    "div",
    {
      ref,
      className: join_classes3("aster_island_block", `aster_island_block_${size}`, className),
      ...props
    }
  )
);
IslandBlock.displayName = "IslandBlock";
var IslandEmpty = React23.forwardRef(
  ({ icon, title, description, action, tone = "default", className, ...props }, ref) => /* @__PURE__ */ jsxs22(
    Island,
    {
      ref,
      className: join_classes3("aster_island_empty", className),
      padding: "lg",
      tone,
      ...props,
      children: [
        icon && /* @__PURE__ */ jsx26("span", { "aria-hidden": "true", className: "aster_island_empty_icon", children: icon }),
        /* @__PURE__ */ jsx26("p", { className: "aster_island_empty_title", children: title }),
        description && /* @__PURE__ */ jsx26("p", { className: "aster_island_empty_description", children: description }),
        action && /* @__PURE__ */ jsx26("div", { className: "aster_island_empty_action", children: action })
      ]
    }
  )
);
IslandEmpty.displayName = "IslandEmpty";
var IslandSection = React23.forwardRef(
  ({
    title,
    title_info,
    icon,
    description,
    trailing,
    footer,
    divided = false,
    padding = "none",
    tone = "default",
    bare = false,
    island_class_name,
    className,
    children,
    ...props
  }, ref) => {
    const heading_id = React23.useId();
    const has_header = Boolean(title || description || trailing);
    return /* @__PURE__ */ jsxs22(
      "section",
      {
        ref,
        "aria-labelledby": title ? heading_id : void 0,
        className: join_classes3("aster_island_section", className),
        ...props,
        children: [
          has_header && /* @__PURE__ */ jsxs22("div", { className: "aster_island_section_header", children: [
            /* @__PURE__ */ jsxs22("div", { className: "aster_island_section_heading", children: [
              title && /* @__PURE__ */ jsxs22("h3", { className: "aster_island_section_title", id: heading_id, children: [
                icon,
                /* @__PURE__ */ jsx26("span", { children: title }),
                title_info && /* @__PURE__ */ jsx26("span", { className: "aster_island_section_title_info", children: title_info })
              ] }),
              description && /* @__PURE__ */ jsx26("p", { className: "aster_island_section_description", children: description })
            ] }),
            trailing && /* @__PURE__ */ jsx26("div", { className: "aster_island_section_trailing", children: trailing })
          ] }),
          bare ? /* @__PURE__ */ jsx26("div", { className: "aster_island_section_body", children }) : /* @__PURE__ */ jsx26(
            Island,
            {
              className: island_class_name,
              divided,
              padding,
              tone,
              children
            }
          ),
          footer && /* @__PURE__ */ jsx26("p", { className: "aster_island_section_footer", children: footer })
        ]
      }
    );
  }
);
IslandSection.displayName = "IslandSection";
var IslandSections = React23.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx26("div", { ref, className: join_classes3("aster_island_sections", className), ...props })
);
IslandSections.displayName = "IslandSections";
function ChevronIcon({ className }) {
  return /* @__PURE__ */ jsx26(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx26("path", { d: "M9 6l6 6-6 6", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
var INTERACTIVE_SELECTOR = "button, a, input, select, textarea, label, [role='button'], [role='combobox'], [role='switch'], [role='menuitem']";
var IslandRow = React23.forwardRef(
  ({
    label,
    description,
    icon,
    value,
    trailing,
    chevron,
    destructive = false,
    disabled = false,
    on_press,
    href,
    target,
    rel,
    toggle,
    layout = "inline",
    className,
    ...props
  }, ref) => {
    const label_id = React23.useId();
    const description_id = React23.useId();
    const is_toggle = Boolean(toggle);
    const toggle_disabled = disabled || Boolean(toggle?.disabled);
    const is_link = Boolean(href) && !disabled;
    const is_button = !is_link && !is_toggle && Boolean(on_press);
    const is_pressable = is_link || is_button || is_toggle && !toggle_disabled;
    const show_chevron = chevron ?? (is_link || is_button && !trailing && !value);
    const handle_toggle_click = (event) => {
      if (!toggle || toggle_disabled) return;
      const origin = event.target;
      const interactive = origin?.closest?.(INTERACTIVE_SELECTOR);
      if (interactive && interactive !== event.currentTarget) return;
      toggle.on_change(!toggle.checked);
    };
    const classes = join_classes3(
      "aster_island_row",
      is_pressable && "aster_island_row_pressable",
      disabled && "aster_island_row_disabled",
      destructive && "aster_island_row_destructive",
      layout === "stacked" && "aster_island_row_stacked",
      layout === "block" && "aster_island_row_block",
      className
    );
    const text = /* @__PURE__ */ jsxs22("span", { className: "aster_island_row_text", children: [
      /* @__PURE__ */ jsx26("span", { className: "aster_island_row_label", id: label_id, children: label }),
      description && /* @__PURE__ */ jsx26("span", { className: "aster_island_row_description", id: description_id, children: description })
    ] });
    const icon_node = icon ? /* @__PURE__ */ jsx26("span", { "aria-hidden": "true", className: "aster_island_row_icon", children: icon }) : null;
    const trailing_node = value || trailing || toggle || show_chevron ? /* @__PURE__ */ jsxs22("span", { className: "aster_island_row_trailing", children: [
      value && /* @__PURE__ */ jsx26("span", { className: "aster_island_row_value", children: value }),
      trailing,
      toggle && /* @__PURE__ */ jsx26(
        "span",
        {
          className: "aster_island_toggle_stop",
          onClick: (event) => event.stopPropagation(),
          children: /* @__PURE__ */ jsx26(
            Switch,
            {
              "aria-describedby": description ? description_id : void 0,
              "aria-label": toggle.aria_label,
              "aria-labelledby": toggle.aria_label ? void 0 : label_id,
              checked: toggle.checked,
              size: toggle.size,
              disabled: toggle_disabled,
              onCheckedChange: (next) => toggle.on_change(next)
            }
          )
        }
      ),
      show_chevron && /* @__PURE__ */ jsx26(ChevronIcon, { className: "aster_island_row_chevron" })
    ] }) : null;
    const content = layout === "block" ? /* @__PURE__ */ jsxs22(Fragment6, { children: [
      /* @__PURE__ */ jsxs22("span", { className: "aster_island_row_head", children: [
        icon_node,
        text
      ] }),
      trailing_node
    ] }) : /* @__PURE__ */ jsxs22(Fragment6, { children: [
      icon_node,
      text,
      trailing_node
    ] });
    if (is_link) {
      return /* @__PURE__ */ jsx26(
        "a",
        {
          ref,
          className: classes,
          href,
          rel: rel ?? (target === "_blank" ? "noopener noreferrer" : void 0),
          target,
          onClick: on_press,
          ...props,
          children: content
        }
      );
    }
    if (is_button) {
      return /* @__PURE__ */ jsx26(
        "button",
        {
          ref,
          className: classes,
          disabled,
          type: "button",
          onClick: on_press,
          ...props,
          children: content
        }
      );
    }
    return /* @__PURE__ */ jsx26(
      "div",
      {
        ref,
        "aria-disabled": disabled || void 0,
        className: classes,
        onClick: is_toggle ? handle_toggle_click : void 0,
        ...props,
        children: content
      }
    );
  }
);
IslandRow.displayName = "IslandRow";
function IslandDivider({ inset, className, style, ...props }) {
  return /* @__PURE__ */ jsx26(
    "hr",
    {
      className: join_classes3("aster_island_divider", className),
      style: inset === void 0 ? style : { ...style, "--aster-island-divider-inset": `${inset}px` },
      ...props
    }
  );
}
var IslandStack = React23.forwardRef(
  ({ grouped = false, as = "div", className, ...props }, ref) => {
    const Component = as;
    return /* @__PURE__ */ jsx26(
      Component,
      {
        ref,
        className: join_classes3(
          "aster_island_stack",
          grouped && "aster_island_stack_grouped",
          className
        ),
        ...props
      }
    );
  }
);
IslandStack.displayName = "IslandStack";
function IslandGrid({ min_column_width, className, style, ...props }) {
  return /* @__PURE__ */ jsx26(
    "div",
    {
      className: join_classes3("aster_island_grid", className),
      style: min_column_width === void 0 ? style : { ...style, "--aster-island-grid-min": `${min_column_width}px` },
      ...props
    }
  );
}
var IslandPage = React23.forwardRef(
  ({ title, description, breadcrumb, actions, width = "default", className, children, ...props }, ref) => {
    const has_header = Boolean(title || description || breadcrumb || actions);
    return /* @__PURE__ */ jsxs22(
      "div",
      {
        ref,
        className: join_classes3(
          "aster_island_page",
          width !== "default" && `aster_island_page_${width}`,
          className
        ),
        ...props,
        children: [
          has_header && /* @__PURE__ */ jsxs22("header", { className: "aster_island_page_header", children: [
            /* @__PURE__ */ jsxs22("div", { className: "aster_island_page_heading", children: [
              breadcrumb && /* @__PURE__ */ jsx26("nav", { className: "aster_island_page_breadcrumb", children: breadcrumb }),
              title && /* @__PURE__ */ jsx26("h1", { className: "aster_island_page_title", children: title }),
              description && /* @__PURE__ */ jsx26("p", { className: "aster_island_page_description", children: description })
            ] }),
            actions && /* @__PURE__ */ jsx26("div", { className: "aster_island_page_actions", children: actions })
          ] }),
          children
        ]
      }
    );
  }
);
IslandPage.displayName = "IslandPage";

// src/settings/settings_shell.tsx
import { Fragment as Fragment7, jsx as jsx27, jsxs as jsxs23 } from "react/jsx-runtime";
function join_classes4(...parts) {
  return parts.filter(Boolean).join(" ");
}
function get_reduce_motion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function XIcon({ className }) {
  return /* @__PURE__ */ jsx27(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx27("path", { d: "M6 6l12 12M18 6l-12 12", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function CheckIcon4({ className }) {
  return /* @__PURE__ */ jsx27(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx27("path", { d: "M5 12l5 5L20 7", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function SpinnerIcon({ className }) {
  return /* @__PURE__ */ jsx27(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx27("path", { d: "M4 12a8 8 0 018-8M20 12a8 8 0 01-8 8", strokeLinecap: "round" })
    }
  );
}
function WarningIcon({ className }) {
  return /* @__PURE__ */ jsx27(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx27(
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
  return /* @__PURE__ */ jsx27(
    "div",
    {
      className: "flex items-center gap-1.5 text-[12px]",
      style: { color: entry.color },
      children: /* @__PURE__ */ jsx27(
        Icon2,
        {
          className: join_classes4("w-3.5 h-3.5", entry.spin && "animate-spin")
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
  return /* @__PURE__ */ jsxs23("div", { className: "aster_island_section_header", children: [
    /* @__PURE__ */ jsxs23("div", { className: "aster_island_section_heading", children: [
      /* @__PURE__ */ jsxs23("h3", { className: "aster_island_section_title", children: [
        Icon2 && /* @__PURE__ */ jsx27(Icon2, { "aria-hidden": "true" }),
        /* @__PURE__ */ jsx27("span", { children: title })
      ] }),
      description && /* @__PURE__ */ jsx27("p", { className: "aster_island_section_description", children: description })
    ] }),
    trailing && /* @__PURE__ */ jsx27("div", { className: "aster_island_section_trailing", children: trailing })
  ] });
}
function SettingsRow({ label, description, children }) {
  return /* @__PURE__ */ jsx27(
    IslandRow,
    {
      description,
      label,
      layout: "stacked",
      trailing: children
    }
  );
}
function SettingsNavItemButton({
  item,
  is_selected,
  on_select,
  data_nav_id
}) {
  const Icon2 = item.icon;
  return /* @__PURE__ */ jsxs23(
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
        /* @__PURE__ */ jsx27(Icon2, { className: "w-5 h-5 flex-shrink-0" }),
        /* @__PURE__ */ jsx27("span", { className: "truncate text-left", children: item.label })
      ]
    }
  );
}
function SettingsNavGroup({
  group,
  selected_id,
  on_select
}) {
  return /* @__PURE__ */ jsxs23("div", { className: "mb-4 last:mb-0", children: [
    group.label && /* @__PURE__ */ jsx27("div", { className: "text-[10px] font-semibold uppercase tracking-wider px-2.5 mb-2 text-txt-muted select-none", children: group.label }),
    /* @__PURE__ */ jsx27("div", { className: "space-y-0.5", children: group.items.map((item) => /* @__PURE__ */ jsx27(
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
  const [show_mobile_nav, set_show_mobile_nav] = React24.useState(true);
  const content_scroll_ref = React24.useRef(null);
  React24.useEffect(() => {
    content_scroll_ref.current?.scrollTo(0, 0);
  }, [selected_id, content_key]);
  React24.useEffect(() => {
    if (is_open) set_show_mobile_nav(true);
  }, [is_open]);
  const active_section_label = React24.useMemo(() => {
    for (const g of groups) {
      for (const it of g.items) {
        if (it.id === selected_id) return it.label;
      }
    }
    return title;
  }, [groups, selected_id, title]);
  const handle_select_internal = React24.useCallback(
    (id) => {
      on_select(id);
      if (enable_mobile_drilldown) set_show_mobile_nav(false);
    },
    [on_select, enable_mobile_drilldown]
  );
  const [reduce_motion_state, set_reduce_motion] = React24.useState(get_reduce_motion);
  const reduce_motion = reduce_motion_prop ?? reduce_motion_state;
  const nav_container_ref = React24.useRef(null);
  const [indicator_style, set_indicator_style] = React24.useState({ top: 0, height: 0, opacity: 0 });
  React24.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => set_reduce_motion(mq.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);
  React24.useEffect(() => {
    if (!is_open) return;
    const handle = (e) => {
      if (e.key === "Escape") on_close();
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [is_open, on_close]);
  const recalculate_indicator = React24.useCallback(() => {
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
  React24.useLayoutEffect(() => {
    recalculate_indicator();
  }, [recalculate_indicator, groups, is_open]);
  React24.useEffect(() => {
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
  return /* @__PURE__ */ jsx27(AnimatePresence4, { children: is_open && /* @__PURE__ */ jsxs23("div", { className: "fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-4", children: [
    /* @__PURE__ */ jsx27(
      motion4.div,
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
    /* @__PURE__ */ jsxs23(
      motion4.div,
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
          /* @__PURE__ */ jsxs23(
            "nav",
            {
              className: "hidden md:flex w-52 px-3 py-4 flex-col overflow-y-auto flex-shrink-0",
              style: {
                backgroundColor: "var(--sidebar-bg)",
                borderRight: "1px solid var(--border-primary)"
              },
              children: [
                header_slot && /* @__PURE__ */ jsx27("div", { className: "mb-3 px-1", children: header_slot }),
                /* @__PURE__ */ jsxs23("div", { ref: nav_container_ref, className: "relative", children: [
                  /* @__PURE__ */ jsx27(
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
                  groups.map((group, idx) => /* @__PURE__ */ jsx27(
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
          /* @__PURE__ */ jsxs23("div", { className: "flex-1 overflow-y-auto flex flex-col min-h-0 bg-surf-primary", children: [
            /* @__PURE__ */ jsxs23("header", { className: "flex items-center justify-between px-4 md:px-6 py-4 flex-shrink-0 border-b border-b-edge-secondary", children: [
              /* @__PURE__ */ jsxs23("div", { className: "flex items-center gap-3 min-w-0", children: [
                enable_mobile_drilldown && !show_mobile_nav && (mobile_back_button ? /* @__PURE__ */ jsx27(
                  "span",
                  {
                    className: "md:hidden -ml-1.5",
                    onClick: () => set_show_mobile_nav(true),
                    children: mobile_back_button
                  }
                ) : /* @__PURE__ */ jsx27(
                  "button",
                  {
                    "aria-label": back_label,
                    className: "md:hidden -ml-1.5 flex items-center justify-center w-8 h-8 rounded-[10px] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-txt-muted",
                    type: "button",
                    onClick: () => set_show_mobile_nav(true),
                    children: /* @__PURE__ */ jsx27(
                      "svg",
                      {
                        "aria-hidden": "true",
                        className: "w-5 h-5",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ jsx27(
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
                /* @__PURE__ */ jsx27("h2", { className: "text-[17px] font-semibold text-txt-primary truncate", children: enable_mobile_drilldown ? /* @__PURE__ */ jsxs23(Fragment7, { children: [
                  /* @__PURE__ */ jsx27("span", { className: "hidden md:inline", children: title }),
                  /* @__PURE__ */ jsx27("span", { className: "md:hidden", children: show_mobile_nav ? title : active_section_label })
                ] }) : title }),
                /* @__PURE__ */ jsx27(SettingsSaveIndicator, { status: save_status })
              ] }),
              close_button ? /* @__PURE__ */ jsx27("span", { onClick: on_close, children: close_button }) : /* @__PURE__ */ jsx27(
                "button",
                {
                  "aria-label": close_label,
                  className: "flex items-center justify-center w-8 h-8 rounded-[10px] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-txt-muted",
                  type: "button",
                  onClick: on_close,
                  children: /* @__PURE__ */ jsx27(XIcon, { className: "w-5 h-5" })
                }
              )
            ] }),
            enable_mobile_drilldown && show_mobile_nav && /* @__PURE__ */ jsx27("div", { className: "md:hidden flex-1 overflow-y-auto", children: groups.map((group, idx) => /* @__PURE__ */ jsxs23("div", { children: [
              group.label && /* @__PURE__ */ jsx27(
                "div",
                {
                  className: join_classes4(
                    "text-[11px] font-semibold uppercase tracking-wider px-4 py-3 text-txt-muted",
                    mobile_group_spacing && idx > 0 && "mt-2"
                  ),
                  children: group.label
                }
              ),
              group.items.map((item) => {
                const Icon2 = item.icon;
                return /* @__PURE__ */ jsxs23(
                  "button",
                  {
                    className: join_classes4(
                      "w-full flex items-center gap-3 px-4 py-3 text-[15px] transition-colors duration-150 text-txt-primary border-b border-b-edge-primary",
                      mobile_item_full_border && "border border-edge-primary"
                    ),
                    type: "button",
                    onClick: () => handle_select_internal(item.id),
                    children: [
                      /* @__PURE__ */ jsx27(Icon2, { className: "w-5 h-5 flex-shrink-0 text-txt-secondary" }),
                      /* @__PURE__ */ jsx27("span", { children: item.label })
                    ]
                  },
                  item.id
                );
              })
            ] }, group.id ?? group.label ?? idx)) }),
            /* @__PURE__ */ jsxs23(
              "div",
              {
                ref: content_scroll_ref,
                className: join_classes4(
                  "flex-1 overflow-y-auto p-4 md:p-6 relative",
                  enable_mobile_drilldown && show_mobile_nav && "hidden md:block"
                ),
                style: stable_scrollbar_gutter ? { scrollbarGutter: "stable" } : void 0,
                children: [
                  overlay_content,
                  /* @__PURE__ */ jsx27(
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
import { jsx as jsx28, jsxs as jsxs24 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs24(
    "div",
    {
      className: "w-[52px] h-full flex flex-col p-1.5 gap-1.5 flex-shrink-0",
      style: {
        backgroundColor: c.sidebar_bg,
        borderRight: `1px solid ${c.sidebar_border}`
      },
      children: [
        /* @__PURE__ */ jsxs24("div", { className: "flex items-center gap-1.5 px-1", children: [
          /* @__PURE__ */ jsx28("div", { className: "w-4 h-4 rounded", style: { backgroundColor: c.brand } }),
          /* @__PURE__ */ jsx28(
            "div",
            {
              className: "flex-1 h-1.5 rounded-sm",
              style: { backgroundColor: c.text_secondary }
            }
          )
        ] }),
        /* @__PURE__ */ jsx28(
          "div",
          {
            className: "h-5 rounded flex items-center justify-center",
            style: {
              background: c.compose_gradient,
              borderTop: `1px solid ${c.compose_border_top}`,
              borderBottom: `1px solid ${c.compose_border_bottom}`
            },
            children: /* @__PURE__ */ jsx28("div", { className: "w-2.5 h-2.5 rounded-sm bg-white/80" })
          }
        ),
        /* @__PURE__ */ jsxs24("div", { className: "flex-1 flex flex-col mt-0.5", children: [
          /* @__PURE__ */ jsx28("div", { className: "px-1 mb-0.5", children: /* @__PURE__ */ jsx28(
            "div",
            {
              className: "w-3.5 h-0.5 rounded-sm",
              style: { backgroundColor: c.text_muted, opacity: 0.5 }
            }
          ) }),
          /* @__PURE__ */ jsxs24("div", { className: "space-y-px", children: [
            /* @__PURE__ */ jsxs24(
              "div",
              {
                className: "h-4 rounded px-1.5 flex items-center gap-1",
                style: {
                  backgroundColor: c.indicator_bg,
                  border: `1px solid ${c.indicator_border}`
                },
                children: [
                  /* @__PURE__ */ jsx28(
                    "div",
                    {
                      className: "w-2 h-2 rounded-sm",
                      style: { backgroundColor: c.text_primary }
                    }
                  ),
                  /* @__PURE__ */ jsx28(
                    "div",
                    {
                      className: "flex-1 h-1 rounded-sm",
                      style: { backgroundColor: c.text_primary }
                    }
                  ),
                  /* @__PURE__ */ jsx28(
                    "div",
                    {
                      className: "w-1 h-1 rounded-full",
                      style: { backgroundColor: c.brand }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs24("div", { className: "h-4 rounded px-1.5 flex items-center gap-1", children: [
              /* @__PURE__ */ jsx28(
                "div",
                {
                  className: "w-2 h-2 rounded-sm",
                  style: { backgroundColor: c.text_muted }
                }
              ),
              /* @__PURE__ */ jsx28(
                "div",
                {
                  className: "flex-1 h-1 rounded-sm",
                  style: { backgroundColor: c.text_muted }
                }
              )
            ] }),
            /* @__PURE__ */ jsxs24("div", { className: "h-4 rounded px-1.5 flex items-center gap-1", children: [
              /* @__PURE__ */ jsx28(
                "div",
                {
                  className: "w-2 h-2 rounded-sm",
                  style: { backgroundColor: c.text_muted }
                }
              ),
              /* @__PURE__ */ jsx28(
                "div",
                {
                  className: "flex-1 h-1 rounded-sm",
                  style: { backgroundColor: c.text_muted }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx28("div", { className: "px-1 mt-1.5 mb-0.5", children: /* @__PURE__ */ jsx28(
            "div",
            {
              className: "w-3 h-0.5 rounded-sm",
              style: { backgroundColor: c.text_muted, opacity: 0.5 }
            }
          ) }),
          /* @__PURE__ */ jsxs24("div", { className: "h-4 rounded px-1.5 flex items-center gap-1", children: [
            /* @__PURE__ */ jsx28(
              "div",
              {
                className: "w-2 h-2 rounded-sm",
                style: { backgroundColor: c.text_muted }
              }
            ),
            /* @__PURE__ */ jsx28(
              "div",
              {
                className: "flex-1 h-1 rounded-sm",
                style: { backgroundColor: c.text_muted }
              }
            )
          ] }),
          /* @__PURE__ */ jsx28("div", { className: "flex-1" }),
          /* @__PURE__ */ jsx28("div", { className: "px-0.5", children: /* @__PURE__ */ jsx28(
            "div",
            {
              className: "w-full h-1 rounded-full overflow-hidden",
              style: { backgroundColor: c.storage_track },
              children: /* @__PURE__ */ jsx28(
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
  return /* @__PURE__ */ jsxs24(
    "div",
    {
      className: full_width ? "flex-1 flex flex-col" : "w-[55%] flex flex-col",
      style: full_width ? void 0 : { borderRight: `1px solid ${c.border}` },
      children: [
        /* @__PURE__ */ jsxs24(
          "div",
          {
            className: "h-4 flex items-center justify-between px-1.5 flex-shrink-0",
            style: { borderBottom: `1px solid ${c.border_secondary}` },
            children: [
              /* @__PURE__ */ jsxs24("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-2 h-2 rounded-sm",
                    style: { border: `1.5px solid ${c.text_muted}` }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "h-1.5 rounded-sm w-5",
                    style: { backgroundColor: c.text_primary }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs24("div", { className: "flex items-center gap-0.5", children: [
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-1.5 h-1.5 rounded-full",
                    style: { backgroundColor: c.text_muted }
                  }
                ),
                /* @__PURE__ */ jsx28(
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
        /* @__PURE__ */ jsxs24("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs24(
            "div",
            {
              className: "h-6 flex items-center gap-1 px-1.5",
              style: {
                backgroundColor: c.selected_bg,
                borderBottom: `1px solid ${c.border_secondary}`
              },
              children: [
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-3 h-3 rounded-full flex-shrink-0",
                    style: { backgroundColor: c.brand }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "h-1 rounded-sm flex-shrink-0",
                    style: { width: "28%", backgroundColor: c.text_primary }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "flex-1 h-1 rounded-sm",
                    style: { backgroundColor: c.text_secondary }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-2 h-0.5 rounded-sm flex-shrink-0",
                    style: { backgroundColor: c.text_muted }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                    style: { backgroundColor: c.brand }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs24(
            "div",
            {
              className: "h-6 flex items-center gap-1 px-1.5",
              style: { borderBottom: `1px solid ${c.border_secondary}` },
              children: [
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-3 h-3 rounded-full flex-shrink-0",
                    style: { backgroundColor: c.avatar_read }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "h-1 rounded-sm flex-shrink-0",
                    style: { width: "24%", backgroundColor: c.text_secondary }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "flex-1 h-1 rounded-sm",
                    style: { backgroundColor: c.text_tertiary }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-2 h-0.5 rounded-sm flex-shrink-0",
                    style: { backgroundColor: c.text_muted }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs24(
            "div",
            {
              className: "h-6 flex items-center gap-1 px-1.5",
              style: { borderBottom: `1px solid ${c.border_secondary}` },
              children: [
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-3 h-3 rounded-full flex-shrink-0",
                    style: { backgroundColor: c.avatar_read }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "h-1 rounded-sm flex-shrink-0",
                    style: { width: "32%", backgroundColor: c.text_secondary }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "flex-1 h-1 rounded-sm",
                    style: { backgroundColor: c.text_tertiary }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-2 h-0.5 rounded-sm flex-shrink-0",
                    style: { backgroundColor: c.text_muted }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs24(
            "div",
            {
              className: "h-6 flex items-center gap-1 px-1.5",
              style: { borderBottom: `1px solid ${c.border_secondary}` },
              children: [
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-3 h-3 rounded-full flex-shrink-0",
                    style: { backgroundColor: c.avatar_read }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "h-1 rounded-sm flex-shrink-0",
                    style: { width: "26%", backgroundColor: c.text_secondary }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "flex-1 h-1 rounded-sm",
                    style: { backgroundColor: c.text_tertiary }
                  }
                ),
                /* @__PURE__ */ jsx28(
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
  return /* @__PURE__ */ jsxs24(
    "div",
    {
      className: "w-full h-full rounded-md overflow-hidden flex",
      style: { backgroundColor: c.bg },
      children: [
        /* @__PURE__ */ jsx28(MockupSidebar, { c }),
        /* @__PURE__ */ jsxs24("div", { className: "flex-1 flex", style: { backgroundColor: c.bg }, children: [
          /* @__PURE__ */ jsx28(MockupEmailList, { c }),
          /* @__PURE__ */ jsxs24("div", { className: "flex-1 flex flex-col", children: [
            /* @__PURE__ */ jsxs24(
              "div",
              {
                className: "h-3.5 flex items-center gap-0.5 px-1.5 flex-shrink-0",
                style: { borderBottom: `1px solid ${c.border_secondary}` },
                children: [
                  /* @__PURE__ */ jsx28(
                    "div",
                    {
                      className: "w-1.5 h-1.5 rounded-sm",
                      style: { backgroundColor: c.text_muted }
                    }
                  ),
                  /* @__PURE__ */ jsx28(
                    "div",
                    {
                      className: "w-1.5 h-1.5 rounded-sm",
                      style: { backgroundColor: c.text_muted }
                    }
                  ),
                  /* @__PURE__ */ jsx28(
                    "div",
                    {
                      className: "w-1.5 h-1.5 rounded-sm",
                      style: { backgroundColor: c.text_muted }
                    }
                  ),
                  /* @__PURE__ */ jsx28("div", { className: "flex-1" }),
                  /* @__PURE__ */ jsx28(
                    "div",
                    {
                      className: "w-1.5 h-1.5 rounded-sm",
                      style: { backgroundColor: c.text_muted }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs24("div", { className: "flex-1 p-2", children: [
              /* @__PURE__ */ jsx28(
                "div",
                {
                  className: "w-[75%] h-1.5 rounded-sm mb-1",
                  style: { backgroundColor: c.text_primary }
                }
              ),
              /* @__PURE__ */ jsxs24("div", { className: "flex items-center gap-1 mb-1.5", children: [
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-2.5 h-2.5 rounded-full flex-shrink-0",
                    style: { backgroundColor: c.brand }
                  }
                ),
                /* @__PURE__ */ jsxs24("div", { children: [
                  /* @__PURE__ */ jsx28(
                    "div",
                    {
                      className: "w-6 h-0.5 rounded-sm mb-0.5",
                      style: { backgroundColor: c.text_secondary }
                    }
                  ),
                  /* @__PURE__ */ jsx28(
                    "div",
                    {
                      className: "w-10 h-0.5 rounded-sm",
                      style: { backgroundColor: c.text_muted }
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx28(
                "div",
                {
                  className: "w-full mb-1.5",
                  style: { height: "1px", backgroundColor: c.border_secondary }
                }
              ),
              /* @__PURE__ */ jsxs24("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-full h-1 rounded-sm",
                    style: { backgroundColor: c.body_line }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-[92%] h-1 rounded-sm",
                    style: { backgroundColor: c.body_line }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-[85%] h-1 rounded-sm",
                    style: { backgroundColor: c.body_line }
                  }
                ),
                /* @__PURE__ */ jsx28(
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
  return /* @__PURE__ */ jsxs24(
    "div",
    {
      className: "w-full h-full rounded-md overflow-hidden flex relative",
      style: { backgroundColor: c.bg },
      children: [
        /* @__PURE__ */ jsx28(MockupSidebar, { c }),
        /* @__PURE__ */ jsx28("div", { className: "flex-1 flex", style: { backgroundColor: c.bg }, children: /* @__PURE__ */ jsx28(MockupEmailList, { full_width: true, c }) }),
        /* @__PURE__ */ jsx28(
          "div",
          {
            className: "absolute inset-0 flex items-center justify-center",
            style: { backgroundColor: c.modal_overlay },
            children: /* @__PURE__ */ jsxs24(
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
                  /* @__PURE__ */ jsxs24(
                    "div",
                    {
                      className: "h-3.5 flex items-center px-1.5 flex-shrink-0 gap-0.5",
                      style: { borderBottom: `1px solid ${c.border_secondary}` },
                      children: [
                        /* @__PURE__ */ jsx28(
                          "div",
                          {
                            className: "w-1.5 h-1.5 rounded-sm",
                            style: { backgroundColor: c.text_muted }
                          }
                        ),
                        /* @__PURE__ */ jsx28(
                          "div",
                          {
                            className: "w-1.5 h-1.5 rounded-sm",
                            style: { backgroundColor: c.text_muted }
                          }
                        ),
                        /* @__PURE__ */ jsx28("div", { className: "flex-1" }),
                        /* @__PURE__ */ jsx28(
                          "div",
                          {
                            className: "w-1.5 h-1.5 rounded-sm",
                            style: { backgroundColor: c.text_muted }
                          }
                        ),
                        /* @__PURE__ */ jsx28(
                          "div",
                          {
                            className: "w-1.5 h-1.5 rounded-sm",
                            style: { backgroundColor: c.text_muted }
                          }
                        ),
                        /* @__PURE__ */ jsx28(
                          "div",
                          {
                            className: "w-1.5 h-1.5 rounded-sm",
                            style: { backgroundColor: c.text_muted }
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs24("div", { className: "flex-1 p-2 overflow-hidden", children: [
                    /* @__PURE__ */ jsx28(
                      "div",
                      {
                        className: "w-[75%] h-1.5 rounded-sm mb-1",
                        style: { backgroundColor: c.text_primary }
                      }
                    ),
                    /* @__PURE__ */ jsxs24("div", { className: "flex items-center gap-1 mb-1.5", children: [
                      /* @__PURE__ */ jsx28(
                        "div",
                        {
                          className: "w-2.5 h-2.5 rounded-full flex-shrink-0",
                          style: { backgroundColor: c.brand }
                        }
                      ),
                      /* @__PURE__ */ jsxs24("div", { children: [
                        /* @__PURE__ */ jsx28(
                          "div",
                          {
                            className: "w-6 h-0.5 rounded-sm mb-0.5",
                            style: { backgroundColor: c.text_secondary }
                          }
                        ),
                        /* @__PURE__ */ jsx28(
                          "div",
                          {
                            className: "w-10 h-0.5 rounded-sm",
                            style: { backgroundColor: c.text_muted }
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx28(
                      "div",
                      {
                        className: "w-full mb-1.5",
                        style: { height: "1px", backgroundColor: c.border_secondary }
                      }
                    ),
                    /* @__PURE__ */ jsxs24("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsx28(
                        "div",
                        {
                          className: "w-full h-1 rounded-sm",
                          style: { backgroundColor: c.body_line }
                        }
                      ),
                      /* @__PURE__ */ jsx28(
                        "div",
                        {
                          className: "w-[90%] h-1 rounded-sm",
                          style: { backgroundColor: c.body_line }
                        }
                      ),
                      /* @__PURE__ */ jsx28(
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
  return /* @__PURE__ */ jsxs24(
    "div",
    {
      className: "w-full h-full rounded-md overflow-hidden flex",
      style: { backgroundColor: c.bg },
      children: [
        /* @__PURE__ */ jsx28(MockupSidebar, { c }),
        /* @__PURE__ */ jsxs24("div", { className: "flex-1 flex flex-col", style: { backgroundColor: c.bg }, children: [
          /* @__PURE__ */ jsxs24(
            "div",
            {
              className: "h-4 flex items-center justify-between px-2 flex-shrink-0",
              style: { borderBottom: `1px solid ${c.border_secondary}` },
              children: [
                /* @__PURE__ */ jsxs24("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ jsx28(
                    "svg",
                    {
                      className: "w-2 h-2",
                      fill: "none",
                      stroke: c.brand,
                      strokeLinecap: "round",
                      strokeWidth: 2.5,
                      viewBox: "0 0 8 8",
                      children: /* @__PURE__ */ jsx28("path", { d: "M5 1L2 4L5 7" })
                    }
                  ),
                  /* @__PURE__ */ jsx28(
                    "div",
                    {
                      className: "w-3.5 h-1 rounded-sm",
                      style: { backgroundColor: c.brand }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs24("div", { className: "flex items-center gap-0.5", children: [
                  /* @__PURE__ */ jsx28(
                    "div",
                    {
                      className: "h-0.5 w-3 rounded-sm",
                      style: { backgroundColor: c.text_muted }
                    }
                  ),
                  /* @__PURE__ */ jsx28(
                    "div",
                    {
                      className: "w-1.5 h-1.5 rounded-sm",
                      style: { backgroundColor: c.text_muted }
                    }
                  ),
                  /* @__PURE__ */ jsx28(
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
          /* @__PURE__ */ jsxs24("div", { className: "flex-1 p-2.5", children: [
            /* @__PURE__ */ jsx28(
              "div",
              {
                className: "w-[65%] h-2 rounded-sm mb-1.5",
                style: { backgroundColor: c.text_primary }
              }
            ),
            /* @__PURE__ */ jsxs24("div", { className: "flex items-center gap-1.5 mb-2", children: [
              /* @__PURE__ */ jsx28(
                "div",
                {
                  className: "w-3.5 h-3.5 rounded-full flex-shrink-0",
                  style: { backgroundColor: c.brand }
                }
              ),
              /* @__PURE__ */ jsxs24("div", { children: [
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-8 h-1 rounded-sm mb-0.5",
                    style: { backgroundColor: c.text_secondary }
                  }
                ),
                /* @__PURE__ */ jsx28(
                  "div",
                  {
                    className: "w-14 h-0.5 rounded-sm",
                    style: { backgroundColor: c.text_muted }
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx28(
              "div",
              {
                className: "w-full mb-2",
                style: { height: "1px", backgroundColor: c.border_secondary }
              }
            ),
            /* @__PURE__ */ jsxs24("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx28(
                "div",
                {
                  className: "w-full h-1 rounded-sm",
                  style: { backgroundColor: c.body_line }
                }
              ),
              /* @__PURE__ */ jsx28(
                "div",
                {
                  className: "w-[94%] h-1 rounded-sm",
                  style: { backgroundColor: c.body_line }
                }
              ),
              /* @__PURE__ */ jsx28(
                "div",
                {
                  className: "w-[88%] h-1 rounded-sm",
                  style: { backgroundColor: c.body_line }
                }
              ),
              /* @__PURE__ */ jsx28(
                "div",
                {
                  className: "w-[82%] h-1 rounded-sm",
                  style: { backgroundColor: c.body_line }
                }
              ),
              /* @__PURE__ */ jsx28(
                "div",
                {
                  className: "w-[75%] h-1 rounded-sm",
                  style: { backgroundColor: c.body_line }
                }
              ),
              /* @__PURE__ */ jsx28(
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
import { jsx as jsx29 } from "react/jsx-runtime";
function ThemeMockupLight() {
  return /* @__PURE__ */ jsx29(ViewMockupSplit, { theme: "light" });
}
function ThemeMockupDark() {
  return /* @__PURE__ */ jsx29(ViewMockupSplit, { theme: "dark" });
}

// src/theme_card/theme_card.tsx
import { jsx as jsx30, jsxs as jsxs25 } from "react/jsx-runtime";
function ThemeMockupSystem() {
  return /* @__PURE__ */ jsxs25("div", { className: "w-full h-full flex overflow-hidden", children: [
    /* @__PURE__ */ jsx30("div", { className: "w-1/2 h-full overflow-hidden", children: /* @__PURE__ */ jsx30(ThemeMockupLight, {}) }),
    /* @__PURE__ */ jsx30("div", { className: "w-1/2 h-full overflow-hidden", children: /* @__PURE__ */ jsx30(ThemeMockupDark, {}) })
  ] });
}
function ThemeCard({
  mode,
  label,
  is_selected,
  on_select
}) {
  const get_mockup = () => {
    if (mode === "light") return /* @__PURE__ */ jsx30(ThemeMockupLight, {});
    if (mode === "dark") return /* @__PURE__ */ jsx30(ThemeMockupDark, {});
    return /* @__PURE__ */ jsx30(ThemeMockupSystem, {});
  };
  const get_border_color = () => {
    if (mode === "light") return "1px solid #e5e5e5";
    if (mode === "dark") return "1px solid #1a1a1a";
    return "1px solid #1a1a1a";
  };
  return /* @__PURE__ */ jsxs25(
    "button",
    {
      className: `flex-1 p-3 rounded-[14px] border-2 transition-all cursor-pointer ${is_selected ? "border-brand bg-surf-selected" : "border-edge-secondary bg-transparent"}`,
      type: "button",
      onClick: on_select,
      children: [
        /* @__PURE__ */ jsx30(
          "div",
          {
            className: "w-full aspect-[4/3] rounded-lg overflow-hidden mb-3",
            style: { border: get_border_color() },
            children: get_mockup()
          }
        ),
        /* @__PURE__ */ jsxs25("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx30("span", { className: "text-sm font-medium text-txt-primary", children: label }),
          /* @__PURE__ */ jsx30("span", { className: "pointer-events-none flex-shrink-0", children: /* @__PURE__ */ jsx30(Radio, { readOnly: true, checked: is_selected }) })
        ] })
      ]
    }
  );
}

// src/storage_indicator/storage_indicator.tsx
import { Fragment as Fragment8, jsx as jsx31, jsxs as jsxs26 } from "react/jsx-runtime";
function join_classes5(...parts) {
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
    return /* @__PURE__ */ jsxs26("div", { className: "px-2 pt-2 pb-3 border-t border-edge-primary flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsx31(
        "button",
        {
          "aria-label": logo_alt,
          className: "w-8 h-8 flex items-center justify-center rounded-[10px] hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
          type: "button",
          onClick: on_logo_click,
          children: /* @__PURE__ */ jsx31(
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
  return /* @__PURE__ */ jsxs26("div", { className: "px-3 pt-3 pb-3 border-t border-edge-primary", children: [
    /* @__PURE__ */ jsxs26("div", { className: "flex items-center justify-between gap-2 mb-2", children: [
      /* @__PURE__ */ jsx31(
        "button",
        {
          "aria-label": logo_alt,
          className: "flex items-center rounded-[8px] px-1 py-1 -mx-1 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
          type: "button",
          onClick: on_logo_click,
          children: /* @__PURE__ */ jsx31(
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
    show_metric && /* @__PURE__ */ jsxs26(Fragment8, { children: [
      /* @__PURE__ */ jsxs26("div", { className: "flex items-center justify-between text-[10px] text-txt-muted mb-1", children: [
        storage_used_label && /* @__PURE__ */ jsx31("span", { children: storage_used_label }),
        /* @__PURE__ */ jsxs26("span", { className: "tabular-nums", children: [
          Math.round(clamped),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx31(
        "div",
        {
          className: join_classes5(
            "h-1 w-full rounded-full overflow-hidden",
            "bg-black/[0.06] dark:bg-white/[0.06]"
          ),
          children: /* @__PURE__ */ jsx31(
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
      /* @__PURE__ */ jsx31("div", { className: "text-[10px] text-txt-muted mt-1 tabular-nums", children: usage_text })
    ] }),
    footer_slot && /* @__PURE__ */ jsx31("div", { className: "mt-2", children: footer_slot })
  ] });
}

// src/upgrade_btn/upgrade_btn.tsx
import * as React25 from "react";
import { jsx as jsx32, jsxs as jsxs27 } from "react/jsx-runtime";
function SparkleIcon() {
  return /* @__PURE__ */ jsxs27(
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
        /* @__PURE__ */ jsx32("path", { d: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" }),
        /* @__PURE__ */ jsx32("path", { d: "M5 17l.75 2.25L8 20l-2.25.75L5 23l-.75-2.25L2 20l2.25-.75L5 17z" }),
        /* @__PURE__ */ jsx32("path", { d: "M19 3l.5 1.5L21 5l-1.5.5L19 7l-.5-1.5L17 5l1.5-.5L19 3z" })
      ]
    }
  );
}
var UpgradeBtn = React25.forwardRef(
  ({ label, children, size = "md", ...props }, ref) => {
    return /* @__PURE__ */ jsxs27(Button, { ref, variant: "upgrade", size, ...props, children: [
      /* @__PURE__ */ jsx32(SparkleIcon, {}),
      children ?? label ?? "Upgrade"
    ] });
  }
);
UpgradeBtn.displayName = "UpgradeBtn";

// src/upgrade_overlay/upgrade_overlay.tsx
import { jsx as jsx33, jsxs as jsxs28 } from "react/jsx-runtime";
function UpgradeOverlay({
  badge_label = "Upgrade plan",
  message,
  cta_label = "Upgrade",
  on_upgrade,
  className
}) {
  return /* @__PURE__ */ jsxs28("div", { className: ["aster_upgrade_overlay", className].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ jsx33(Badge, { color: "blue", children: badge_label }),
    /* @__PURE__ */ jsx33("p", { className: "aster_upgrade_overlay_message", children: message }),
    /* @__PURE__ */ jsx33(UpgradeBtn, { size: "sm", onClick: on_upgrade, children: cta_label })
  ] });
}

// src/empty_state/empty_state.tsx
import { jsx as jsx34, jsxs as jsxs29 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs29("div", { className: merged, children: [
    icon && /* @__PURE__ */ jsx34("div", { className: "mb-4", children: icon }),
    /* @__PURE__ */ jsxs29("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx34("p", { className: "text-sm sm:text-base font-medium text-txt-primary mb-1", children: title }),
      description && /* @__PURE__ */ jsx34("p", { className: "text-xs sm:text-sm text-txt-muted max-w-[260px] mx-auto", children: description }),
      action && /* @__PURE__ */ jsx34("div", { className: "mt-6 flex justify-center", children: action })
    ] })
  ] });
}

// src/search_bar/search_bar.tsx
import { jsx as jsx35, jsxs as jsxs30 } from "react/jsx-runtime";
function SearchBar({
  value,
  on_change,
  placeholder,
  clear_label,
  className,
  search_icon,
  clear_icon
}) {
  return /* @__PURE__ */ jsx35("div", { className: className ?? "mb-5", children: /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-3 px-4 h-11 rounded-xl bg-surf-secondary border border-edge-secondary transition-colors duration-150", children: [
    search_icon && /* @__PURE__ */ jsx35("span", { className: "shrink-0 text-txt-muted", children: search_icon }),
    /* @__PURE__ */ jsx35(
      "input",
      {
        type: "text",
        placeholder,
        value,
        onChange: (e) => on_change(e.target.value),
        className: "flex-1 bg-transparent outline-none text-sm text-txt-primary placeholder:text-txt-muted"
      }
    ),
    value && /* @__PURE__ */ jsx35(
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
import { useEffect as useEffect11, useRef as useRef9, useState as useState10 } from "react";
import { motion as motion5, AnimatePresence as AnimatePresence5 } from "framer-motion";
import { jsx as jsx36, jsxs as jsxs31 } from "react/jsx-runtime";
var GridIcon = () => /* @__PURE__ */ jsx36(
  "svg",
  {
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx36(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      }
    )
  }
);
var CheckIcon5 = () => /* @__PURE__ */ jsx36(
  "svg",
  {
    className: "w-3.5 h-3.5 text-txt-muted flex-shrink-0",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx36(
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
  const [is_open, set_is_open] = useState10(false);
  const wrapper_ref = useRef9(null);
  useEffect11(() => {
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
  return /* @__PURE__ */ jsxs31("div", { ref: wrapper_ref, className: "relative", children: [
    /* @__PURE__ */ jsx36(
      "button",
      {
        type: "button",
        "aria-label": title,
        title,
        onClick: () => set_is_open((v) => !v),
        className: "flex items-center justify-center w-9 h-9 rounded-[10px] text-txt-muted hover:bg-black/[0.06] dark:hover:bg-white/[0.08]",
        children: /* @__PURE__ */ jsx36(GridIcon, {})
      }
    ),
    /* @__PURE__ */ jsx36(AnimatePresence5, { children: is_open && /* @__PURE__ */ jsxs31(
      motion5.div,
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
          /* @__PURE__ */ jsx36("div", { className: "px-3 py-2 border-b border-edge-primary", children: /* @__PURE__ */ jsx36("p", { className: "text-[11px] uppercase tracking-wider text-txt-muted", children: title }) }),
          /* @__PURE__ */ jsx36("div", { className: "py-1", children: apps.map((app) => {
            const is_current = app.id === current_app_id;
            return /* @__PURE__ */ jsxs31(
              "a",
              {
                href: app.url,
                target: is_current ? void 0 : "_blank",
                rel: is_current ? void 0 : "noopener noreferrer",
                className: "flex items-start gap-3 px-3 py-2 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
                children: [
                  /* @__PURE__ */ jsx36(
                    "img",
                    {
                      alt: "",
                      src: app.logo_src,
                      className: "w-8 h-8 rounded-lg flex-shrink-0",
                      decoding: "async",
                      draggable: false
                    }
                  ),
                  /* @__PURE__ */ jsxs31("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxs31("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx36("span", { className: "text-[13px] font-medium text-txt-primary truncate", children: app.name }),
                      is_current && /* @__PURE__ */ jsx36(CheckIcon5, {})
                    ] }),
                    app.description && /* @__PURE__ */ jsx36("p", { className: "text-[11px] text-txt-muted truncate", children: app.description })
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
import { jsx as jsx37, jsxs as jsxs32 } from "react/jsx-runtime";
var AuthLogo = ({
  src = "/text_logo.png",
  alt = "Aster",
  className = "h-12"
}) => /* @__PURE__ */ jsx37("img", { alt, className, decoding: "async", src });
var AuthEyeIcon = () => /* @__PURE__ */ jsxs32(
  "svg",
  {
    className: "h-5 w-5 text-txt-muted",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ jsx37(
        "path",
        {
          d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx37(
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
var AuthEyeSlashIcon = () => /* @__PURE__ */ jsx37(
  "svg",
  {
    className: "h-5 w-5 text-txt-muted",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx37(
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
}) => /* @__PURE__ */ jsxs32("div", { className: `relative ${wrapper_class ?? ""}`, children: [
  children,
  end_content && /* @__PURE__ */ jsx37("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: end_content })
] });
var AuthCheckIcon = ({
  className = "h-3 w-3"
}) => /* @__PURE__ */ jsx37(
  "svg",
  {
    className: `${className} text-white`,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 3,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx37("path", { d: "M5 13l4 4L19 7", strokeLinecap: "round", strokeLinejoin: "round" })
  }
);
var AuthCheckbox = ({
  checked,
  disabled,
  onChange
}) => /* @__PURE__ */ jsx37(
  "button",
  {
    "aria-checked": checked,
    className: `flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border transition-colors ${checked ? "border-brand bg-brand" : "border-edge-secondary bg-surf-card"}`,
    disabled,
    role: "checkbox",
    type: "button",
    onClick: () => onChange(!checked),
    children: checked && /* @__PURE__ */ jsx37(AuthCheckIcon, {})
  }
);
var AuthCard = ({
  children,
  className = "max-w-md"
}) => /* @__PURE__ */ jsx37("div", { className: `flex w-full ${className} flex-col items-center gap-6`, children });
var AuthCardBody = ({
  children,
  padding = "px-10 py-10"
}) => /* @__PURE__ */ jsx37(
  "div",
  {
    className: `w-full rounded-xl border ${padding} transition-colors duration-200 bg-surf-card border-edge-primary`,
    children
  }
);
var AuthFormLabel = ({
  children
}) => /* @__PURE__ */ jsx37("label", { className: "mb-2 block text-sm font-medium text-txt-primary", children });
var AuthFourPointStar = ({
  className = "h-7 w-7"
}) => /* @__PURE__ */ jsx37("svg", { className, fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx37("path", { d: "M12 0L13.2 10.8L24 12L13.2 13.2L12 24L10.8 13.2L0 12L10.8 10.8Z" }) });
var AuthSparkleDecoration = () => /* @__PURE__ */ jsxs32(
  "svg",
  {
    className: "ml-1 -mt-0.5 inline-block h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ jsx37(
        "path",
        {
          d: "M9.5 2L10.9 8.1L17 9.5L10.9 10.9L9.5 17L8.1 10.9L2 9.5L8.1 8.1L9.5 2Z",
          fill: "#FBBF24"
        }
      ),
      /* @__PURE__ */ jsx37(
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
var AuthShieldCheckIcon = ({ color }) => /* @__PURE__ */ jsx37(
  "svg",
  {
    className: "h-5 w-5 flex-shrink-0 mt-0.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    style: { color },
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx37(
      "path",
      {
        d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthLockIcon = ({ color }) => /* @__PURE__ */ jsx37(
  "svg",
  {
    className: "h-5 w-5 flex-shrink-0",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    style: { color },
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx37(
      "path",
      {
        d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthWarningIcon = ({ color }) => /* @__PURE__ */ jsx37(
  "svg",
  {
    className: "h-5 w-5 flex-shrink-0 mt-0.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    style: { color },
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx37(
      "path",
      {
        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthDocumentIcon = () => /* @__PURE__ */ jsx37(
  "svg",
  {
    className: "h-4 w-4 mr-2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx37(
      "path",
      {
        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthDownloadIcon = () => /* @__PURE__ */ jsx37(
  "svg",
  {
    className: "h-4 w-4 mr-2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx37(
      "path",
      {
        d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthUserCircleIcon = () => /* @__PURE__ */ jsx37(
  "svg",
  {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx37(
      "path",
      {
        d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthLockClosedIcon = () => /* @__PURE__ */ jsx37(
  "svg",
  {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx37(
      "path",
      {
        d: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var AuthEnvelopeIcon = () => /* @__PURE__ */ jsx37(
  "svg",
  {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx37(
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
import { jsx as jsx38 } from "react/jsx-runtime";
function FieldLabel({ children, className, htmlFor }) {
  return /* @__PURE__ */ jsx38(
    "label",
    {
      htmlFor,
      className: `block text-sm font-medium mb-1.5 text-txt-primary ${className ?? ""}`,
      children
    }
  );
}
function FieldHint({ children, className }) {
  return /* @__PURE__ */ jsx38("p", { className: `text-xs mt-1.5 text-txt-muted ${className ?? ""}`, children });
}
function ErrorBanner({ message, className }) {
  return /* @__PURE__ */ jsx38(
    "div",
    {
      className: `p-3 rounded-[10px] text-sm border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 ${className ?? ""}`,
      children: message
    }
  );
}

// src/input/input.tsx
import * as React26 from "react";
import { jsx as jsx39 } from "react/jsx-runtime";
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
var Input = React26.forwardRef(
  ({ className, type, size = "lg", status = "default", ...props }, ref) => {
    return /* @__PURE__ */ jsx39(
      "input",
      {
        ref,
        className: cn(
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
import * as React27 from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { jsx as jsx40 } from "react/jsx-runtime";
var RadioGroup = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx40(
  RadioGroupPrimitive.Root,
  {
    ref,
    className: cn("flex gap-3", className),
    ...props
  }
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx40(
  RadioGroupPrimitive.Item,
  {
    ref,
    className: cn(
      "flex items-center justify-center h-5 w-5 shrink-0 rounded-full border-2 transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 border-edge-secondary bg-transparent data-[state=checked]:border-brand data-[state=checked]:bg-brand",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx40(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx40("span", { className: "h-2 w-2 rounded-full bg-white" }) })
  }
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/motion_modal/motion_modal.tsx
import * as React29 from "react";
import { createPortal } from "react-dom";
import { AnimatePresence as AnimatePresence6, motion as motion6 } from "framer-motion";
import { XMarkIcon as XMarkIcon3 } from "@heroicons/react/24/outline";

// src/lib/use_dialog_shell.ts
import { useCallback as useCallback7, useEffect as useEffect14, useRef as useRef11 } from "react";

// src/lib/body_scroll_lock.ts
import { useEffect as useEffect12 } from "react";
var BODY_SCROLL_LOCK_STATE_KEY = /* @__PURE__ */ Symbol.for("aster_ui.body_scroll_lock_state");
function resolve_body_scroll_lock_state() {
  const registry = globalThis;
  const existing = registry[BODY_SCROLL_LOCK_STATE_KEY];
  if (existing) return existing;
  const created = { count: 0, restored_overflow: "" };
  registry[BODY_SCROLL_LOCK_STATE_KEY] = created;
  return created;
}
var body_scroll_lock_state = resolve_body_scroll_lock_state();
function lock_body_scroll() {
  if (body_scroll_lock_state.count === 0) {
    body_scroll_lock_state.restored_overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  body_scroll_lock_state.count += 1;
}
function unlock_body_scroll() {
  if (body_scroll_lock_state.count === 0) return;
  body_scroll_lock_state.count -= 1;
  if (body_scroll_lock_state.count === 0) {
    document.body.style.overflow = body_scroll_lock_state.restored_overflow;
    body_scroll_lock_state.restored_overflow = "";
  }
}
function use_body_scroll_lock(is_locked) {
  useEffect12(() => {
    if (!is_locked) return;
    lock_body_scroll();
    return unlock_body_scroll;
  }, [is_locked]);
}

// src/lib/overlay_layer_stack.ts
import { useEffect as useEffect13, useRef as useRef10 } from "react";
var OVERLAY_LAYER_STATE_KEY = /* @__PURE__ */ Symbol.for("aster_ui.overlay_layer_state");
function resolve_overlay_layer_state() {
  const registry = globalThis;
  const existing = registry[OVERLAY_LAYER_STATE_KEY];
  if (existing) return existing;
  const created = { stack: [], blocking: /* @__PURE__ */ new Set() };
  registry[OVERLAY_LAYER_STATE_KEY] = created;
  return created;
}
var overlay_layer_state = resolve_overlay_layer_state();
var overlay_layer_stack = overlay_layer_state.stack;
var blocking_overlay_layers = overlay_layer_state.blocking;
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
  const id_ref = useRef10(null);
  if (id_ref.current === null) id_ref.current = Symbol(label);
  useEffect13(() => {
    if (!is_open) return;
    const id = id_ref.current;
    push_overlay_layer(id, blocking);
    return () => remove_overlay_layer(id);
  }, [is_open, blocking]);
  return id_ref.current;
}
function use_escape_layer(is_open, on_close, label = "overlay", blocking = true) {
  const id = use_overlay_layer(is_open, label, blocking);
  const close_ref = useRef10(on_close);
  useEffect13(() => {
    close_ref.current = on_close;
  }, [on_close]);
  useEffect13(() => {
    if (!is_open) return;
    const handle_escape = (e) => {
      if (e["key"] !== "Escape") return;
      if (!is_top_overlay_layer(id)) return;
      e.preventDefault();
      close_ref.current();
    };
    document.addEventListener("keydown", handle_escape);
    return () => document.removeEventListener("keydown", handle_escape);
  }, [is_open, id]);
  return id;
}

// src/lib/use_dialog_shell.ts
var FOCUSABLE_SELECTOR = 'a[href],button:not([disabled]),textarea:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';
function use_focus_trap(is_open, layer_id) {
  const dialog_ref = useRef11(null);
  useEffect14(() => {
    if (!is_open) return;
    const node = dialog_ref.current;
    if (!node) return;
    const opener = document.activeElement;
    const focus_started_inside = node.contains(opener);
    const previously_focused = focus_started_inside ? null : opener;
    if (!focus_started_inside) node.focus();
    const handle_tab = (e) => {
      if (e.key !== "Tab") return;
      if (!is_top_overlay_layer(layer_id)) return;
      const focusables = Array.from(
        node.querySelectorAll(FOCUSABLE_SELECTOR)
      );
      const active = document.activeElement;
      if (focusables.length === 0) {
        e.preventDefault();
        node.focus();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!node.contains(active)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
        return;
      }
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handle_tab, true);
    return () => {
      document.removeEventListener("keydown", handle_tab, true);
      previously_focused?.focus?.();
    };
  }, [is_open, layer_id]);
  return dialog_ref;
}
function use_backdrop_dismiss(on_dismiss) {
  return useCallback7(
    (e) => {
      if (e.target !== e.currentTarget) return;
      if (e.button !== 0) return;
      on_dismiss();
    },
    [on_dismiss]
  );
}
function use_dialog_shell(is_open, on_close, label = "dialog", close_on_escape = true) {
  const handle_escape_close = useCallback7(() => {
    if (!close_on_escape) return;
    on_close();
  }, [close_on_escape, on_close]);
  const layer_id = use_escape_layer(is_open, handle_escape_close, label);
  const dialog_ref = use_focus_trap(is_open, layer_id);
  const handle_backdrop_pointer_down = use_backdrop_dismiss(on_close);
  use_body_scroll_lock(is_open);
  return { layer_id, dialog_ref, handle_backdrop_pointer_down };
}

// src/i18n/ui_strings.tsx
import * as React28 from "react";
import { jsx as jsx41 } from "react/jsx-runtime";
var default_ui_strings = {
  close: "Close",
  cancel: "Cancel",
  confirm: "Confirm",
  loading: "Loading",
  more_info: "More info",
  copy: "Copy",
  copied: "Copied",
  retry: "Try again",
  show_password: "Show password",
  hide_password: "Hide password",
  previous_month: "Previous month",
  next_month: "Next month",
  verification_code_digit: "Digit {index} of {count}",
  qr_code: "QR code",
  learn_more: "Learn more"
};
var UI_STRINGS_CONTEXT_KEY = /* @__PURE__ */ Symbol.for("aster_ui.ui_strings_context");
function resolve_ui_strings_context() {
  const registry = globalThis;
  const existing = registry[UI_STRINGS_CONTEXT_KEY];
  if (existing) return existing;
  const created = React28.createContext(default_ui_strings);
  registry[UI_STRINGS_CONTEXT_KEY] = created;
  return created;
}
var UiStringsContext = resolve_ui_strings_context();
function UiStringsProvider({ strings, children }) {
  const parent = React28.useContext(UiStringsContext);
  const value = React28.useMemo(() => ({ ...parent, ...strings }), [parent, strings]);
  return /* @__PURE__ */ jsx41(UiStringsContext.Provider, { value, children });
}
function use_ui_strings() {
  return React28.useContext(UiStringsContext);
}
function format_ui_string(template, values) {
  return template.replace(
    /\{(\w+)\}/g,
    (match, key) => key in values ? String(values[key]) : match
  );
}

// src/motion_modal/motion_modal.tsx
import { jsx as jsx42, jsxs as jsxs33 } from "react/jsx-runtime";
var SIZE_MAX_WIDTH = {
  sm: "max-w-[360px]",
  md: "max-w-[440px]",
  lg: "max-w-[520px]",
  xl: "max-w-[640px]",
  "2xl": "max-w-[860px]",
  full: "max-w-[800px]"
};
var motion_modal_labels_context = React29.createContext(null);
function MotionModal({
  is_open,
  on_close,
  size = "md",
  show_close_button = true,
  close_on_overlay = true,
  close_on_escape = true,
  z_index,
  className,
  panel_class_name,
  overlay_class_name,
  reduce_motion,
  close_label,
  children
}) {
  const system_reduce_motion = use_should_reduce_motion();
  const ui_strings = use_ui_strings();
  const should_reduce_motion = reduce_motion ?? system_reduce_motion;
  const resolved_close_label = close_label ?? ui_strings.close;
  const instance_id = React29.useId().replace(/:/g, "");
  const { dialog_ref, handle_backdrop_pointer_down } = use_dialog_shell(
    is_open,
    on_close,
    "modal",
    close_on_escape
  );
  const label_ids = React29.useMemo(
    () => ({
      title_id: `${instance_id}_title`,
      description_id: `${instance_id}_description`
    }),
    [instance_id]
  );
  const overlay = /* @__PURE__ */ jsx42(AnimatePresence6, { children: is_open && /* @__PURE__ */ jsxs33(
    "div",
    {
      className: "fixed inset-0 flex items-center justify-center",
      style: { zIndex: z_index ?? 60 },
      children: [
        /* @__PURE__ */ jsx42(
          "div",
          {
            className: cn(
              "absolute inset-0 backdrop-blur-sm sm:backdrop-blur-md",
              overlay_class_name
            ),
            style: {
              backgroundColor: "var(--modal-overlay)",
              transform: "translateZ(0)"
            },
            onPointerDown: close_on_overlay ? handle_backdrop_pointer_down : void 0
          }
        ),
        /* @__PURE__ */ jsxs33(
          motion6.div,
          {
            ref: dialog_ref,
            animate: { opacity: 1, scale: 1, y: 0 },
            "aria-describedby": label_ids.description_id,
            "aria-labelledby": label_ids.title_id,
            "aria-modal": "true",
            className: cn(
              "relative w-full mx-4 my-4 rounded-xl border flex flex-col max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain outline-none focus:outline-none focus-visible:outline-none",
              SIZE_MAX_WIDTH[size],
              className,
              panel_class_name
            ),
            exit: { opacity: 0, scale: 0.97, y: 4 },
            initial: should_reduce_motion ? false : { opacity: 0, scale: 0.97, y: 4 },
            role: "dialog",
            style: {
              backgroundColor: "var(--modal-bg)",
              borderColor: "var(--border-primary)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
              outline: "none"
            },
            tabIndex: -1,
            transition: {
              duration: should_reduce_motion ? 0 : 0.12,
              ease: [0.16, 1, 0.3, 1]
            },
            onClick: (e) => e.stopPropagation(),
            children: [
              show_close_button && /* @__PURE__ */ jsx42(
                "button",
                {
                  "aria-label": resolved_close_label,
                  className: "aster_modal_close absolute end-5 top-5 z-10 flex items-center justify-center rounded-[14px] transition-colors hover:bg-black/5 dark:hover:bg-white/10",
                  style: { width: 28, height: 28, padding: 0 },
                  type: "button",
                  onClick: on_close,
                  children: /* @__PURE__ */ jsx42(
                    XMarkIcon3,
                    {
                      className: "text-txt-secondary",
                      style: { width: 18, height: 18, flexShrink: 0 }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx42(motion_modal_labels_context.Provider, { value: label_ids, children })
            ]
          }
        )
      ]
    }
  ) });
  if (typeof document === "undefined") return overlay;
  return createPortal(overlay, document.body);
}
function MotionModalHeader({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx42(
    "div",
    {
      className: cn(
        "aster_modal_header flex flex-col px-6 pt-6 pb-5 pe-12",
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
  id,
  style,
  ...props
}) {
  const labels = React29.useContext(motion_modal_labels_context);
  return /* @__PURE__ */ jsx42(
    "h3",
    {
      className: cn(
        "aster_modal_title w-full text-base font-semibold leading-tight",
        className
      ),
      id: labels?.title_id ?? id,
      style: { color: "var(--text-primary)", ...style },
      ...props,
      children
    }
  );
}
function MotionModalDescription({
  className,
  children,
  id,
  style,
  ...props
}) {
  const labels = React29.useContext(motion_modal_labels_context);
  return /* @__PURE__ */ jsx42(
    "p",
    {
      className: cn("text-[13px] w-full mt-2.5 leading-relaxed", className),
      id: labels?.description_id ?? id,
      style: { color: "var(--text-tertiary)", ...style },
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
  return /* @__PURE__ */ jsx42("div", { className: cn("aster_modal_body px-5 pb-5", className), ...props, children });
}
function MotionModalFooter({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx42(
    "div",
    {
      className: cn(
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
  return /* @__PURE__ */ jsx42(
    "div",
    {
      className: cn(
        "aster_modal_actions px-6 pb-6 pt-2 flex items-center justify-end gap-3",
        className
      ),
      ...props,
      children
    }
  );
}

// src/confirmation_modal/confirmation_modal.tsx
import * as React30 from "react";
import { jsx as jsx43, jsxs as jsxs34 } from "react/jsx-runtime";
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
  const [dont_ask, set_dont_ask] = React30.useState(false);
  const [is_saving, set_is_saving] = React30.useState(false);
  React30.useEffect(() => {
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
  return /* @__PURE__ */ jsxs34(
    Modal,
    {
      is_open,
      on_close: on_cancel,
      show_close_button: false,
      size: "sm",
      children: [
        /* @__PURE__ */ jsxs34(ModalHeader, { children: [
          /* @__PURE__ */ jsx43(ModalTitle, { children: title }),
          /* @__PURE__ */ jsx43(ModalDescription, { children: message })
        ] }),
        show_dont_ask_again && dont_ask_again_label && /* @__PURE__ */ jsx43("div", { className: "px-6 pb-2", children: /* @__PURE__ */ jsxs34(
          "label",
          {
            className: "inline-flex items-center gap-2 cursor-pointer select-none",
            htmlFor: "aster-ui-dont-ask-again",
            children: [
              /* @__PURE__ */ jsx43(
                Checkbox,
                {
                  checked: dont_ask,
                  id: "aster-ui-dont-ask-again",
                  onCheckedChange: (checked) => set_dont_ask(checked === true)
                }
              ),
              /* @__PURE__ */ jsx43(
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
        /* @__PURE__ */ jsxs34(ModalFooter, { children: [
          /* @__PURE__ */ jsx43(
            Button,
            {
              className: "max-sm:flex-1",
              disabled: is_saving,
              variant: "outline",
              onClick: on_cancel,
              children: cancel_text
            }
          ),
          /* @__PURE__ */ jsx43(
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
import * as React31 from "react";
import { AnimatePresence as AnimatePresence7, motion as motion7 } from "framer-motion";
import { jsx as jsx44, jsxs as jsxs35 } from "react/jsx-runtime";
function get_reduce_motion2() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function CloseIcon({ className }) {
  return /* @__PURE__ */ jsx44(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx44("path", { d: "M6 6l12 12M18 6l-12 12", strokeLinecap: "round", strokeLinejoin: "round" })
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
  const [reduce_motion_state, set_reduce_motion] = React31.useState(get_reduce_motion2);
  const reduce_motion = reduce_motion_prop ?? reduce_motion_state;
  const modal_ref = React31.useRef(null);
  const close_button_ref = React31.useRef(null);
  const previous_active_element = React31.useRef(null);
  React31.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => set_reduce_motion(mq.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);
  React31.useEffect(() => {
    if (is_open) {
      previous_active_element.current = document.activeElement;
      close_button_ref.current?.focus();
    } else if (previous_active_element.current instanceof HTMLElement) {
      previous_active_element.current.focus();
    }
  }, [is_open]);
  React31.useEffect(() => {
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
  const sections = React31.useMemo(() => {
    if (is_section_list(shortcuts)) return shortcuts;
    return [{ title: "", shortcuts }];
  }, [shortcuts]);
  const has_section_titles = sections.some((s) => s.title);
  return /* @__PURE__ */ jsx44(AnimatePresence7, { children: is_open && /* @__PURE__ */ jsxs35(
    motion7.div,
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
        /* @__PURE__ */ jsx44(
          motion7.div,
          {
            "aria-hidden": "true",
            className: "absolute inset-0 backdrop-blur-md",
            style: { backgroundColor: "var(--modal-overlay)" },
            onClick: on_close
          }
        ),
        /* @__PURE__ */ jsxs35(
          motion7.div,
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
              /* @__PURE__ */ jsxs35(
                "div",
                {
                  className: "flex items-center justify-between px-6 py-4",
                  style: { borderBottom: "1px solid var(--border-secondary)" },
                  children: [
                    /* @__PURE__ */ jsx44(
                      "h2",
                      {
                        className: "text-[16px] font-semibold",
                        id: "aster-keyboard-shortcuts-title",
                        style: { color: "var(--text-primary)" },
                        children: t_strings.title
                      }
                    ),
                    /* @__PURE__ */ jsxs35("div", { className: "flex items-center gap-4", children: [
                      header_right_slot,
                      /* @__PURE__ */ jsx44(
                        "button",
                        {
                          ref: close_button_ref,
                          "aria-label": t_strings.close,
                          className: "p-1.5 rounded-[14px] transition-colors hover:bg-black/[0.05] dark:hover:bg-white/[0.05]",
                          style: { color: "var(--text-muted)" },
                          onClick: on_close,
                          type: "button",
                          children: /* @__PURE__ */ jsx44(CloseIcon, { className: "w-5 h-5" })
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs35(
                "div",
                {
                  className: "relative overflow-y-auto px-6 py-5",
                  style: {
                    maxHeight: "calc(85vh - 130px)",
                    scrollbarWidth: "thin"
                  },
                  children: [
                    disabled_overlay,
                    /* @__PURE__ */ jsx44(
                      "div",
                      {
                        className: use_two_column_grid ?? has_section_titles ? "grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6" : "space-y-1",
                        children: sections.map((section, idx) => /* @__PURE__ */ jsxs35("div", { children: [
                          section.title && /* @__PURE__ */ jsx44(
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
                          /* @__PURE__ */ jsx44("div", { className: "space-y-1", children: section.shortcuts.map((entry, eidx) => /* @__PURE__ */ jsxs35(
                            "div",
                            {
                              className: "flex items-center justify-between py-1.5",
                              children: [
                                /* @__PURE__ */ jsx44(
                                  "span",
                                  {
                                    className: "text-[13px]",
                                    style: { color: "var(--text-secondary)" },
                                    children: entry.label
                                  }
                                ),
                                /* @__PURE__ */ jsxs35("div", { className: "flex items-center gap-2 ml-4", children: [
                                  /* @__PURE__ */ jsx44("div", { className: "flex items-center gap-0.5", children: entry.keys.map((key, kidx) => /* @__PURE__ */ jsx44(
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
              (t_strings.press_label || t_strings.platform_label) && /* @__PURE__ */ jsxs35(
                "div",
                {
                  className: "px-6 py-3 flex items-center justify-between text-[12px]",
                  style: {
                    color: "var(--text-muted)",
                    borderTop: "1px solid var(--border-secondary)",
                    backgroundColor: "var(--bg-secondary)"
                  },
                  children: [
                    /* @__PURE__ */ jsx44("div", { className: "flex items-center gap-4", children: t_strings.press_label && t_strings.anywhere_to_open && /* @__PURE__ */ jsxs35("span", { className: "flex items-center gap-2", children: [
                      t_strings.press_label,
                      /* @__PURE__ */ jsx44(
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
                    t_strings.platform_label && /* @__PURE__ */ jsxs35("div", { className: "flex items-center gap-2", children: [
                      t_strings.platform_prefix && /* @__PURE__ */ jsx44("span", { children: t_strings.platform_prefix }),
                      /* @__PURE__ */ jsx44(
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
import * as React32 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon as CheckIcon6, ChevronRightIcon } from "@heroicons/react/24/outline";
import { jsx as jsx45, jsxs as jsxs36 } from "react/jsx-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React32.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs36(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-[var(--dropdown-hover)] data-[state=open]:bg-[var(--dropdown-hover)] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "ps-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx45(ChevronRightIcon, { className: "ms-auto h-4 w-4 rtl:-scale-x-100" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React32.forwardRef(({ className, style, ...props }, ref) => /* @__PURE__ */ jsx45(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-[200] min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
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
var DropdownMenuContent = React32.forwardRef(({ className, sideOffset = 4, style, ...props }, ref) => /* @__PURE__ */ jsx45(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx45(
  DropdownMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "z-[200] max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border p-1 shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
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
var DropdownMenuItem = React32.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx45(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-[var(--dropdown-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "ps-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React32.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs36(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    checked,
    className: cn(
      "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 ps-8 pe-2 text-sm outline-none transition-colors focus:bg-[var(--dropdown-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx45("span", { className: "absolute start-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx45(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx45(CheckIcon6, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React32.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs36(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 ps-8 pe-2 text-sm outline-none transition-colors focus:bg-[var(--dropdown-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx45("span", { className: "absolute start-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx45(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx45("span", { className: "h-2 w-2 rounded-full bg-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React32.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx45(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "ps-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React32.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx45(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px", className),
    style: { backgroundColor: "var(--border-secondary)" },
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx45(
    "span",
    {
      className: cn("ms-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/context_menu/context_menu.tsx
import * as React33 from "react";
import { AnimatePresence as AnimatePresence8, motion as motion8 } from "framer-motion";
import { jsx as jsx46, jsxs as jsxs37 } from "react/jsx-runtime";
function ContextMenu({
  items,
  position,
  on_close,
  min_width = 180,
  origin = "top-left"
}) {
  const menu_ref = React33.useRef(null);
  const [focused_index, set_focused_index] = React33.useState(-1);
  const [resolved, set_resolved] = React33.useState({
    left: position.x,
    top: position.y
  });
  React33.useEffect(() => {
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
  React33.useEffect(() => {
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
  return /* @__PURE__ */ jsx46(AnimatePresence8, { children: /* @__PURE__ */ jsx46(
    motion8.div,
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
      children: items.map((item, idx) => /* @__PURE__ */ jsxs37(
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
            item.icon && /* @__PURE__ */ jsx46("span", { className: "flex items-center justify-center w-4 h-4 flex-shrink-0", children: item.icon }),
            /* @__PURE__ */ jsx46("span", { className: "flex-1 truncate", children: item.label }),
            item.trailing && /* @__PURE__ */ jsx46("span", { className: "ml-auto", children: item.trailing })
          ]
        },
        item.id
      ))
    }
  ) });
}

// src/context_menu/radix_context_menu.tsx
import * as React34 from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon as CheckIcon7, ChevronRightIcon as ChevronRightIcon2 } from "@heroicons/react/24/outline";
import { jsx as jsx47, jsxs as jsxs38 } from "react/jsx-runtime";
var RadixContextMenu = ContextMenuPrimitive.Root;
var RadixContextMenuTrigger = ContextMenuPrimitive.Trigger;
var RadixContextMenuGroup = ContextMenuPrimitive.Group;
var RadixContextMenuPortal = ContextMenuPrimitive.Portal;
var RadixContextMenuSub = ContextMenuPrimitive.Sub;
var RadixContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
var RadixContextMenuSubTrigger = React34.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs38(
  ContextMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-[var(--dropdown-hover)] data-[state=open]:bg-[var(--dropdown-hover)] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "ps-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx47(ChevronRightIcon2, { className: "ms-auto h-4 w-4 rtl:-scale-x-100" })
    ]
  }
));
RadixContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
var RadixContextMenuSubContent = React34.forwardRef(({ className, style, ...props }, ref) => /* @__PURE__ */ jsx47(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx47(
  ContextMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
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
) }));
RadixContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
var RadixContextMenuContent = React34.forwardRef(({ className, style, ...props }, ref) => /* @__PURE__ */ jsx47(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx47(
  ContextMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
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
) }));
RadixContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
var RadixContextMenuItem = React34.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx47(
  ContextMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-[var(--dropdown-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "ps-8",
      className
    ),
    ...props
  }
));
RadixContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
var RadixContextMenuCheckboxItem = React34.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs38(
  ContextMenuPrimitive.CheckboxItem,
  {
    ref,
    checked,
    className: cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 ps-8 pe-2 text-sm outline-none focus:bg-[var(--dropdown-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx47("span", { className: "absolute start-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx47(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx47(CheckIcon7, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
RadixContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;
var RadixContextMenuRadioItem = React34.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs38(
  ContextMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 ps-8 pe-2 text-sm outline-none focus:bg-[var(--dropdown-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx47("span", { className: "absolute start-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx47(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx47(CheckIcon7, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
RadixContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
var RadixContextMenuLabel = React34.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx47(
  ContextMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "ps-8",
      className
    ),
    ...props
  }
));
RadixContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
var RadixContextMenuSeparator = React34.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx47(
  ContextMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px", className),
    style: { backgroundColor: "var(--border-secondary)" },
    ...props
  }
));
RadixContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

// src/full_page_loader/full_page_loader.tsx
import { useEffect as useEffect18, useState as useState14 } from "react";
import { jsx as jsx48, jsxs as jsxs39 } from "react/jsx-runtime";
var active_count = 0;
function dismiss_loader() {
  const el = document.getElementById("initial-loader");
  if (!el) return;
  el.style.transition = "opacity 0.15s ease-out";
  el.style.opacity = "0";
  setTimeout(() => el.remove(), 150);
}
function FullPageLoader() {
  const [has_static] = useState14(
    () => !!document.getElementById("initial-loader")
  );
  useEffect18(() => {
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
  return /* @__PURE__ */ jsx48("div", { className: "full-page-loader bg-surf-secondary", children: /* @__PURE__ */ jsxs39("div", { className: "full-page-loader-content", children: [
    /* @__PURE__ */ jsx48(
      "img",
      {
        alt: "Aster",
        className: "h-7",
        draggable: false,
        src: "/text_logo.png"
      }
    ),
    /* @__PURE__ */ jsx48("div", { className: "loader-spinner" })
  ] }) });
}

// src/count_badge/count_badge.tsx
import { jsx as jsx49 } from "react/jsx-runtime";
function CountBadge({
  count,
  show_zero = false,
  is_active = false,
  is_loading = false,
  className = ""
}) {
  if (is_loading) {
    return /* @__PURE__ */ jsx49(
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
  return /* @__PURE__ */ jsx49(
    "span",
    {
      className: `text-[12px] font-medium tabular-nums ${is_active ? "text-txt-secondary" : "text-txt-muted"} ${className}`,
      children: display_value
    }
  );
}

// src/island/setting_rows.tsx
import { Fragment as Fragment9, jsx as jsx50, jsxs as jsxs40 } from "react/jsx-runtime";
function join_classes6(...parts) {
  return parts.filter(Boolean).join(" ");
}
function SettingNote({ tone = "muted", icon, children }) {
  return /* @__PURE__ */ jsxs40(
    "span",
    {
      className: join_classes6(
        "aster_island_row_note",
        tone === "warning" && "aster_island_row_note_warning"
      ),
      children: [
        icon,
        children
      ]
    }
  );
}
function render_label(label, info) {
  if (!info) return label;
  return /* @__PURE__ */ jsxs40("span", { className: "aster_island_row_label_group", children: [
    label,
    info
  ] });
}
function render_description(description, note) {
  if (!note) return description;
  return /* @__PURE__ */ jsxs40(Fragment9, { children: [
    description,
    note
  ] });
}
function SettingToggleRow({
  label,
  description,
  info,
  note,
  icon,
  trailing,
  checked,
  on_change,
  disabled,
  size = "lg",
  className
}) {
  return /* @__PURE__ */ jsx50(
    IslandRow,
    {
      className,
      description: render_description(description, note),
      disabled,
      icon,
      label: render_label(label, info),
      toggle: { checked, on_change, size, aria_label: label },
      trailing
    }
  );
}
function SettingControlRow({
  label,
  description,
  info,
  note,
  icon,
  control,
  layout = "stacked",
  control_width,
  disabled,
  className
}) {
  const has_control = control !== void 0 && control !== null && control !== false;
  const control_node = !has_control ? void 0 : layout === "block" ? control : /* @__PURE__ */ jsx50(
    "span",
    {
      className: join_classes6(
        "aster_island_row_control",
        control_width === "auto" && "aster_island_row_control_auto"
      ),
      style: typeof control_width === "number" ? { "--aster-island-control-width": `${control_width}px` } : void 0,
      children: control
    }
  );
  return /* @__PURE__ */ jsx50(
    IslandRow,
    {
      className,
      description: render_description(description, note),
      disabled,
      icon,
      label: render_label(label, info),
      layout,
      trailing: control_node
    }
  );
}

// src/setting_row/setting_row.tsx
import { jsx as jsx51 } from "react/jsx-runtime";
function SettingRow({ label, description, children, className }) {
  return /* @__PURE__ */ jsx51(
    SettingControlRow,
    {
      className,
      control: children,
      control_width: "auto",
      description,
      label,
      layout: "stacked"
    }
  );
}

// src/radio_row_with_description/radio_row_with_description.tsx
import { jsx as jsx52, jsxs as jsxs41 } from "react/jsx-runtime";
function RadioRowWithDescription({
  label,
  description,
  is_selected,
  on_select
}) {
  return /* @__PURE__ */ jsxs41(
    "button",
    {
      className: `w-full flex items-center justify-between px-4 py-3 rounded-[16px] border transition-colors ${is_selected ? "border-brand bg-surf-selected" : "border-edge-secondary bg-transparent"}`,
      type: "button",
      onClick: on_select,
      children: [
        /* @__PURE__ */ jsxs41("div", { className: "text-left", children: [
          /* @__PURE__ */ jsx52("span", { className: "text-sm font-medium block text-txt-primary", children: label }),
          /* @__PURE__ */ jsx52("span", { className: "text-xs mt-0.5 block text-txt-muted", children: description })
        ] }),
        /* @__PURE__ */ jsx52("span", { className: "pointer-events-none flex-shrink-0 ml-3", children: /* @__PURE__ */ jsx52(Radio, { readOnly: true, checked: is_selected }) })
      ]
    }
  );
}

// src/view_mode_card/view_mode_card.tsx
import { jsx as jsx53, jsxs as jsxs42 } from "react/jsx-runtime";
function ViewModeCard({
  mode,
  label,
  is_selected,
  on_select,
  theme
}) {
  const get_mockup = () => {
    if (mode === "popup") return /* @__PURE__ */ jsx53(ViewMockupPopup, { theme });
    if (mode === "split") return /* @__PURE__ */ jsx53(ViewMockupSplit, { theme });
    return /* @__PURE__ */ jsx53(ViewMockupFullpage, { theme });
  };
  const get_border_color = () => {
    if (theme === "light") return "1px solid #e5e5e5";
    return "1px solid #1a1a1a";
  };
  return /* @__PURE__ */ jsxs42(
    "button",
    {
      className: `flex-1 p-3 rounded-[14px] border-2 transition-all cursor-pointer ${is_selected ? "border-brand bg-surf-selected" : "border-edge-secondary bg-transparent"}`,
      type: "button",
      onClick: on_select,
      children: [
        /* @__PURE__ */ jsx53(
          "div",
          {
            className: "w-full aspect-[4/3] rounded-lg overflow-hidden mb-3",
            style: { border: get_border_color() },
            children: get_mockup()
          }
        ),
        /* @__PURE__ */ jsxs42("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx53("span", { className: "text-sm font-medium text-txt-primary", children: label }),
          /* @__PURE__ */ jsx53("span", { className: "pointer-events-none flex-shrink-0", children: /* @__PURE__ */ jsx53(Radio, { readOnly: true, checked: is_selected }) })
        ] })
      ]
    }
  );
}

// src/alert_dialog/alert_dialog.tsx
import * as React35 from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { jsx as jsx54, jsxs as jsxs43 } from "react/jsx-runtime";
var AlertDialog = AlertDialogPrimitive.Root;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
var AlertDialogContent = React35.forwardRef(({ className, on_overlay_click, ...props }, ref) => /* @__PURE__ */ jsxs43(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx54(
    AlertDialogPrimitive.Overlay,
    {
      className: "fixed inset-0 z-[60] backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-150",
      style: { backgroundColor: "var(--modal-overlay)" },
      onClick: on_overlay_click
    }
  ),
  /* @__PURE__ */ jsx54(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
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
}) => /* @__PURE__ */ jsx54(
  "div",
  {
    className: cn("flex flex-col gap-3 text-center sm:text-start", className),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx54(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React35.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx54(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    style: { color: "var(--text-primary)" },
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React35.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx54(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm", className),
    style: { color: "var(--text-tertiary)" },
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React35.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx54(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(button_variants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React35.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx54(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(button_variants({ variant: "outline" }), className),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

// src/external_link_warning_modal/external_link_warning_modal.tsx
import { useState as useState15, useEffect as useEffect19, useRef as useRef14 } from "react";
import { jsx as jsx55, jsxs as jsxs44 } from "react/jsx-runtime";
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
  const [dont_show_again, set_dont_show_again] = useState15(false);
  const [internal_open, set_internal_open] = useState15(false);
  const closing_ref = useRef14(false);
  useEffect19(() => {
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
  return /* @__PURE__ */ jsx55(
    AlertDialog,
    {
      open: internal_open,
      onOpenChange: (open) => {
        if (!open) handle_cancel();
      },
      children: /* @__PURE__ */ jsx55(
        AlertDialogContent,
        {
          className: "gap-0 p-0 overflow-hidden max-w-[420px] max-sm:max-w-none max-sm:w-full max-sm:h-full max-sm:rounded-none max-sm:left-0 max-sm:top-0 max-sm:translate-x-0 max-sm:translate-y-0",
          on_overlay_click: handle_cancel,
          children: /* @__PURE__ */ jsxs44("div", { className: "flex h-full flex-col", children: [
            /* @__PURE__ */ jsxs44("div", { className: "flex-1 px-6 pt-6 pb-5 max-sm:pt-[env(safe-area-inset-top,0px)]", children: [
              /* @__PURE__ */ jsxs44(AlertDialogHeader, { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs44(AlertDialogTitle, { className: "text-[16px] font-semibold flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx55(
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
                      children: /* @__PURE__ */ jsx55(
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
                /* @__PURE__ */ jsx55(AlertDialogDescription, { className: "text-[14px] leading-normal", children: description })
              ] }),
              /* @__PURE__ */ jsxs44(
                "div",
                {
                  className: "mt-4 p-3 rounded-lg",
                  style: {
                    backgroundColor: "var(--bg-tertiary)",
                    border: "1px solid var(--border-secondary)"
                  },
                  children: [
                    /* @__PURE__ */ jsx55(
                      "p",
                      {
                        className: "text-[13px] font-medium",
                        style: { color: "var(--text-primary)" },
                        children: get_display_hostname()
                      }
                    ),
                    /* @__PURE__ */ jsx55(
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
              /* @__PURE__ */ jsxs44(
                "label",
                {
                  className: "inline-flex items-center gap-2 cursor-pointer select-none mt-5",
                  htmlFor: "external-link-dont-show-checkbox",
                  children: [
                    /* @__PURE__ */ jsx55(
                      Checkbox,
                      {
                        checked: dont_show_again,
                        id: "external-link-dont-show-checkbox",
                        onCheckedChange: (checked) => set_dont_show_again(checked === true)
                      }
                    ),
                    /* @__PURE__ */ jsx55(
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
            /* @__PURE__ */ jsxs44(AlertDialogFooter, { className: "flex-row gap-3 px-6 pb-6 pt-2 sm:justify-end max-sm:pb-[calc(env(safe-area-inset-bottom,0px)+1.5rem)]", children: [
              /* @__PURE__ */ jsx55(
                Button,
                {
                  className: "mt-0 max-sm:flex-1",
                  size: "xl",
                  variant: "outline",
                  onClick: handle_cancel,
                  children: cancel_label
                }
              ),
              /* @__PURE__ */ jsx55(
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
import { useEffect as useEffect20 } from "react";
import { jsx as jsx56, jsxs as jsxs45 } from "react/jsx-runtime";
function ColorVisionFilters({ mode = "none" }) {
  useEffect20(() => {
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
  return /* @__PURE__ */ jsx56(
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
      children: /* @__PURE__ */ jsxs45("defs", { children: [
        /* @__PURE__ */ jsx56("filter", { colorInterpolationFilters: "linearRGB", id: "cv-protanopia", children: /* @__PURE__ */ jsx56(
          "feColorMatrix",
          {
            in: "SourceGraphic",
            type: "matrix",
            values: "0.567, 0.433, 0,     0, 0\r\n                    0.558, 0.442, 0,     0, 0\r\n                    0,     0.242, 0.758, 0, 0\r\n                    0,     0,     0,     1, 0"
          }
        ) }),
        /* @__PURE__ */ jsx56("filter", { colorInterpolationFilters: "linearRGB", id: "cv-deuteranopia", children: /* @__PURE__ */ jsx56(
          "feColorMatrix",
          {
            in: "SourceGraphic",
            type: "matrix",
            values: "0.625, 0.375, 0,   0, 0\r\n                    0.7,   0.3,   0,   0, 0\r\n                    0,     0.3,   0.7, 0, 0\r\n                    0,     0,     0,   1, 0"
          }
        ) }),
        /* @__PURE__ */ jsx56("filter", { colorInterpolationFilters: "linearRGB", id: "cv-tritanopia", children: /* @__PURE__ */ jsx56(
          "feColorMatrix",
          {
            in: "SourceGraphic",
            type: "matrix",
            values: "0.95, 0.05,  0,     0, 0\r\n                    0,    0.433, 0.567, 0, 0\r\n                    0,    0.475, 0.525, 0, 0\r\n                    0,    0,     0,     1, 0"
          }
        ) }),
        /* @__PURE__ */ jsx56("filter", { colorInterpolationFilters: "linearRGB", id: "cv-achromatopsia", children: /* @__PURE__ */ jsx56(
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
import { memo } from "react";
import { jsx as jsx57, jsxs as jsxs46 } from "react/jsx-runtime";
var MobileHeader = memo(function MobileHeader2({
  title,
  left_action,
  right_actions,
  safe_area_top = 0,
  height = 56,
  on_title_click,
  center_content
}) {
  return /* @__PURE__ */ jsxs46(
    "header",
    {
      className: "sticky top-0 z-40 shrink-0 bg-[var(--bg-primary)] px-3 relative flex items-center isolate",
      style: {
        paddingTop: safe_area_top,
        height: typeof safe_area_top === "number" ? height + safe_area_top : `calc(${height}px + ${safe_area_top})`
      },
      children: [
        /* @__PURE__ */ jsx57("div", { className: "flex items-center gap-1", children: left_action }),
        /* @__PURE__ */ jsx57("div", { className: "flex-1 min-w-0 flex items-center justify-center px-2", children: center_content ? center_content : on_title_click ? /* @__PURE__ */ jsx57(
          "button",
          {
            className: "max-w-full truncate text-lg font-semibold text-[var(--text-primary)]",
            type: "button",
            onClick: on_title_click,
            children: title
          }
        ) : /* @__PURE__ */ jsx57("h1", { className: "max-w-full truncate text-lg font-semibold text-[var(--text-primary)]", children: title }) }),
        /* @__PURE__ */ jsx57("div", { className: "flex shrink-0 items-center gap-1", children: right_actions })
      ]
    }
  );
});
var MobileHeaderIconButton = memo(function MobileHeaderIconButton2({
  on_click,
  children,
  "aria-label": aria_label
}) {
  return /* @__PURE__ */ jsx57(
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
import { useEffect as useEffect21 } from "react";
import { motion as motion9, AnimatePresence as AnimatePresence9 } from "framer-motion";
import { Fragment as Fragment10, jsx as jsx58, jsxs as jsxs47 } from "react/jsx-runtime";
function MobileDrawerShell({
  is_open,
  on_close,
  children,
  width = 320,
  max_width_vw = 85,
  safe_area_top = 0,
  safe_area_bottom = 0,
  reduce_motion = false,
  lock_body_scroll: lock_body_scroll2 = true,
  side = "left",
  background_color = "var(--mobile-sidebar-bg, var(--bg-primary))"
}) {
  useEffect21(() => {
    if (!lock_body_scroll2) return;
    if (is_open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [is_open, lock_body_scroll2]);
  const closed_x = side === "left" ? -width : width;
  return /* @__PURE__ */ jsxs47(Fragment10, { children: [
    /* @__PURE__ */ jsx58(AnimatePresence9, { children: is_open && /* @__PURE__ */ jsx58(
      motion9.div,
      {
        animate: { opacity: 1 },
        className: "fixed inset-0 z-50 bg-black/50",
        exit: { opacity: 0 },
        initial: reduce_motion ? false : { opacity: 0 },
        transition: { duration: reduce_motion ? 0 : 0.2 },
        onClick: on_close
      }
    ) }),
    /* @__PURE__ */ jsx58(
      motion9.nav,
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
import { memo as memo2, useEffect as useEffect22 } from "react";
import {
  motion as motion10,
  AnimatePresence as AnimatePresence10,
  useDragControls
} from "framer-motion";
import { Fragment as Fragment11, jsx as jsx59, jsxs as jsxs48 } from "react/jsx-runtime";
var MobileActionSheetShell = memo2(function MobileActionSheetShell2({
  is_open,
  on_close,
  children,
  safe_area_bottom = 0,
  reduce_motion = false,
  lock_body_scroll: lock_body_scroll2 = true,
  background_color = "var(--bg-primary)",
  max_height_vh = 85,
  z_index_backdrop = 60,
  z_index_panel = 61,
  show_handle = true
}) {
  const drag_controls = useDragControls();
  useEffect22(() => {
    if (!lock_body_scroll2) return;
    if (is_open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [is_open, lock_body_scroll2]);
  const handle_drag_end = (_, info) => {
    if (info.offset.y > 100 || info.velocity.y > 300) {
      on_close();
    }
  };
  return /* @__PURE__ */ jsx59(AnimatePresence10, { children: is_open && /* @__PURE__ */ jsxs48(Fragment11, { children: [
    /* @__PURE__ */ jsx59(
      motion10.div,
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
    /* @__PURE__ */ jsxs48(
      motion10.div,
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
          show_handle && /* @__PURE__ */ jsx59(
            "div",
            {
              className: "flex shrink-0 cursor-grab justify-center py-2 active:cursor-grabbing",
              style: { touchAction: "none" },
              onPointerDown: (e) => drag_controls.start(e),
              children: /* @__PURE__ */ jsx59("div", { className: "h-1 w-10 rounded-full bg-[var(--text-muted)] opacity-30" })
            }
          ),
          /* @__PURE__ */ jsx59(
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

// src/island/island_controls.tsx
import * as React36 from "react";
import { Fragment as Fragment12, jsx as jsx60, jsxs as jsxs49 } from "react/jsx-runtime";
function join_classes7(...parts) {
  return parts.filter(Boolean).join(" ");
}
var PillButton = React36.forwardRef(
  ({
    variant = "filled",
    size = "md",
    block = false,
    leading,
    trailing,
    className,
    type = "button",
    children,
    ...props
  }, ref) => /* @__PURE__ */ jsxs49(
    "button",
    {
      ref,
      className: join_classes7(
        "aster_pill",
        `aster_pill_${variant}`,
        size !== "md" && `aster_pill_${size}`,
        block && "aster_pill_block",
        className
      ),
      type,
      ...props,
      children: [
        leading,
        children,
        trailing
      ]
    }
  )
);
PillButton.displayName = "PillButton";
var IslandIconButton = React36.forwardRef(
  ({ label, size = "md", active = false, className, type = "button", children, ...props }, ref) => /* @__PURE__ */ jsx60(
    "button",
    {
      ref,
      "aria-label": label,
      "aria-pressed": active || void 0,
      className: join_classes7(
        "aster_island_icon_btn",
        size !== "md" && `aster_island_icon_btn_${size}`,
        active && "aster_island_icon_btn_active",
        className
      ),
      type,
      ...props,
      children
    }
  )
);
IslandIconButton.displayName = "IslandIconButton";
var IslandChip = React36.forwardRef(
  ({ name, meta, leading, trailing, on_press, className, title, ...props }, ref) => {
    const inner = /* @__PURE__ */ jsxs49(Fragment12, { children: [
      leading && /* @__PURE__ */ jsx60("span", { className: "aster_island_chip_leading", children: leading }),
      /* @__PURE__ */ jsxs49("span", { className: "aster_island_chip_text", children: [
        /* @__PURE__ */ jsx60("span", { className: "aster_island_chip_name", children: name }),
        meta && /* @__PURE__ */ jsx60("span", { className: "aster_island_chip_meta", children: meta })
      ] })
    ] });
    if (on_press && !trailing) {
      return /* @__PURE__ */ jsx60(
        "button",
        {
          ref,
          className: join_classes7("aster_island_chip aster_island_chip_pressable", className),
          title,
          type: "button",
          onClick: on_press,
          ...props,
          children: inner
        }
      );
    }
    return /* @__PURE__ */ jsxs49(
      "div",
      {
        ref,
        className: join_classes7(
          "aster_island_chip",
          on_press && "aster_island_chip_pressable",
          className
        ),
        role: on_press ? "button" : void 0,
        tabIndex: on_press ? 0 : void 0,
        title,
        onClick: on_press,
        onKeyDown: on_press ? (event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            on_press();
          }
        } : void 0,
        ...props,
        children: [
          inner,
          trailing && /* @__PURE__ */ jsx60(
            "span",
            {
              className: "aster_island_chip_trailing",
              onClick: (event) => event.stopPropagation(),
              children: trailing
            }
          )
        ]
      }
    );
  }
);
IslandChip.displayName = "IslandChip";
var IslandCountPill = React36.forwardRef(
  ({ count, label, className, type = "button", ...props }, ref) => /* @__PURE__ */ jsx60(
    "button",
    {
      ref,
      "aria-label": label,
      className: join_classes7("aster_island_count", className),
      type,
      ...props,
      children: /* @__PURE__ */ jsx60("span", { className: "aster_island_count_pill", children: count })
    }
  )
);
IslandCountPill.displayName = "IslandCountPill";

// src/separator/separator.tsx
import * as React37 from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsx as jsx61 } from "react/jsx-runtime";
var Separator4 = React37.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx61(
    SeparatorPrimitive.Root,
    {
      ref,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      decorative,
      orientation,
      ...props
    }
  )
);
Separator4.displayName = SeparatorPrimitive.Root.displayName;

// src/progress/progress.tsx
import * as React38 from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { jsx as jsx62 } from "react/jsx-runtime";
var Progress = React38.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsx62(
  ProgressPrimitive.Root,
  {
    ref,
    className: cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx62(
      ProgressPrimitive.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = ProgressPrimitive.Root.displayName;

// src/crown_icon/crown_icon.tsx
import { jsx as jsx63, jsxs as jsxs50 } from "react/jsx-runtime";
function CrownIcon(props) {
  return /* @__PURE__ */ jsxs50(
    "svg",
    {
      "aria-hidden": "true",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ jsx63(
          "path",
          {
            d: "M3.75 18.75h16.5L21.75 8.25l-5.25 4.5L12 5.25l-4.5 7.5-5.25-4.5z",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx63("path", { d: "M4.5 15.75h15", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  );
}

// src/coin_icon/coin_icon.tsx
import { useId as useId3 } from "react";
import { Fragment as Fragment13, jsx as jsx64, jsxs as jsxs51 } from "react/jsx-runtime";
var CURRENCY_MARKS = {
  btc: "btc",
  xbt: "btc",
  eth: "eth",
  weth: "eth",
  usdc: "usdc",
  usdt: "usdt",
  tether: "usdt",
  dai: "dai",
  ltc: "ltc",
  sol: "sol",
  bch: "bch",
  xmr: "xmr",
  stable: "stable",
  stablecoin: "stable"
};
var CHAIN_MARKS = {
  bitcoin: "bitcoin",
  ethereum: "ethereum",
  base: "base",
  monero: "monero",
  litecoin: "litecoin",
  solana: "solana",
  bitcoincash: "bitcoin_cash",
  "bitcoin-cash": "bitcoin_cash"
};
var NATIVE_CHAIN_OF = {
  btc: "bitcoin",
  eth: "ethereum",
  usdc: "generic",
  usdt: "generic",
  dai: "generic",
  ltc: "litecoin",
  sol: "solana",
  bch: "bitcoin_cash",
  xmr: "monero",
  stable: "generic",
  generic: "generic"
};
var VIEW_SIZE = 40;
var MARK_BOX = "0 0 32 32";
var BADGE_CUTOUT_RADIUS = VIEW_SIZE / 4;
var BADGE_CENTER = VIEW_SIZE - BADGE_CUTOUT_RADIUS;
var BADGE_RING = 1.8;
var BADGE_RADIUS = BADGE_CUTOUT_RADIUS - BADGE_RING;
var BADGE_ORIGIN = BADGE_CENTER - BADGE_RADIUS;
var BADGE_SIZE = BADGE_RADIUS * 2;
function btc_mark() {
  return /* @__PURE__ */ jsxs51("g", { children: [
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M31.519 19.871C29.382 28.442 20.701 33.658 12.128 31.521 3.56 29.384-1.657 20.702 0.481 12.131 2.617 3.559 11.298-1.658 19.868 0.479 28.44 2.616 33.656 11.299 31.519 19.871Z",
        fill: "#f7931a"
      }
    ),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M23.054 13.721C23.373 11.592 21.752 10.447 19.535 9.684L20.254 6.8 18.499 6.362 17.799 9.17C17.337 9.055 16.863 8.947 16.392 8.839L17.097 6.013 15.343 5.575 14.623 8.458C14.241 8.371 13.866 8.285 13.502 8.195L13.504 8.186 11.083 7.581 10.616 9.456S11.919 9.755 11.891 9.773C12.602 9.951 12.731 10.421 12.709 10.794L11.89 14.08C11.939 14.092 12.003 14.11 12.073 14.138 12.014 14.124 11.952 14.108 11.887 14.092L10.739 18.695C10.652 18.911 10.432 19.235 9.935 19.112 9.952 19.137 8.659 18.793 8.659 18.793L7.788 20.803 10.072 21.372C10.497 21.479 10.913 21.59 11.323 21.695L10.597 24.612 12.35 25.05 13.07 22.164C13.549 22.294 14.014 22.414 14.469 22.527L13.752 25.399 15.507 25.837 16.234 22.925C19.227 23.492 21.478 23.263 22.426 20.556 23.189 18.376 22.388 17.118 20.813 16.298 21.96 16.034 22.824 15.279 23.054 13.721ZM19.043 19.345C18.501 21.525 14.83 20.347 13.64 20.051L14.604 16.187C15.794 16.484 19.61 17.072 19.043 19.345ZM19.586 13.689C19.091 15.672 16.036 14.665 15.045 14.418L15.919 10.913C16.91 11.16 20.102 11.621 19.586 13.689Z",
        fill: "#ffffff"
      }
    )
  ] });
}
function eth_mark() {
  return /* @__PURE__ */ jsxs51("g", { children: [
    /* @__PURE__ */ jsx64("path", { d: "M0 16A16 16 0 1 0 32 16 16 16 0 1 0 0 16Z", fill: "#627eea" }),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M16.498 4V12.87L23.995 16.22Z",
        fill: "#ffffff",
        fillOpacity: "0.602"
      }
    ),
    /* @__PURE__ */ jsx64("path", { d: "M16.498 4L9 16.22 16.498 12.87Z", fill: "#ffffff" }),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M16.498 21.968V27.995L24 17.616Z",
        fill: "#ffffff",
        fillOpacity: "0.602"
      }
    ),
    /* @__PURE__ */ jsx64("path", { d: "M16.498 27.995V21.967L9 17.616Z", fill: "#ffffff" }),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M16.498 20.573L23.995 16.22 16.498 12.872Z",
        fill: "#ffffff",
        fillOpacity: "0.2"
      }
    ),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M9 16.22L16.498 20.573V12.872Z",
        fill: "#ffffff",
        fillOpacity: "0.602"
      }
    )
  ] });
}
function usdc_mark() {
  return /* @__PURE__ */ jsxs51("g", { children: [
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M16 32C24.837 32 32 24.837 32 16 32 7.163 24.837 0 16 0 7.163 0 0 7.163 0 16 0 24.837 7.163 32 16 32Z",
        fill: "#0b53bf"
      }
    ),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M18.88 4.35V6.41C22.99 7.65 26 11.47 26 16 26 20.53 22.99 24.35 18.88 25.59V27.65C24.12 26.37 28 21.64 28 16 28 10.36 24.12 5.63 18.88 4.35Z",
        fill: "#ffffff"
      }
    ),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M6 16C6 11.47 9.01 7.65 13.12 6.41V4.35C7.88 5.63 4 10.36 4 16 4 21.64 7.88 26.37 13.12 27.65V25.59C9.01 24.36 6 20.53 6 16Z",
        fill: "#ffffff"
      }
    ),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M20.3 18.23C20.3 14.14 13.89 15.82 13.89 13.56 13.89 12.75 14.54 12.23 15.78 12.23 17.26 12.23 17.77 12.95 17.93 13.92H19.97C19.788 12.1 18.743 10.95 17 10.608V9H15V10.55C13.091 10.794 11.89 11.906 11.89 13.56 11.89 17.67 18.31 16.13 18.31 18.35 18.31 19.19 17.5 19.75 16.13 19.75 14.34 19.75 13.75 18.96 13.53 17.87H11.54C11.669 19.864 12.899 21.112 15 21.423V23H17V21.444C19.051 21.179 20.3 19.986 20.3 18.23Z",
        fill: "#ffffff"
      }
    )
  ] });
}
function usdt_mark() {
  return /* @__PURE__ */ jsxs51("g", { children: [
    /* @__PURE__ */ jsx64("path", { d: "M0 16A16 16 0 1 0 32 16 16 16 0 1 0 0 16Z", fill: "#009393" }),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M16.02 17.144C18.771 17.144 21.071 16.678 21.633 16.057 21.156 15.53 19.43 15.114 17.238 15.001V16.314C16.845 16.334 16.437 16.344 16.019 16.344S15.193 16.334 14.8 16.314V15.001C12.609 15.114 10.882 15.53 10.405 16.057 10.968 16.678 13.268 17.144 16.019 17.144ZM20.908 10.962V12.771H17.238V14.025C19.816 14.159 21.751 14.71 21.765 15.37V16.745C21.751 17.404 19.816 17.954 17.238 18.089V21.166H14.8V18.089C12.222 17.955 10.288 17.404 10.274 16.745V15.37C10.288 14.71 12.222 14.159 14.8 14.025V12.771H11.13V10.962H20.909ZM9.686 8.084H22.572C22.88 8.084 23.164 8.246 23.318 8.51L27.072 14.956C27.266 15.29 27.208 15.712 26.931 15.983L16.597 26.07C16.262 26.397 15.724 26.397 15.389 26.07L5.068 15.997C4.785 15.719 4.731 15.285 4.94 14.949L8.954 8.49C9.11 8.238 9.388 8.085 9.686 8.085Z",
        fill: "#ffffff",
        fillRule: "evenodd"
      }
    )
  ] });
}
function dai_mark() {
  return /* @__PURE__ */ jsxs51("g", { children: [
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M16 0C24.837 0 32 7.164 32 16 32 24.837 24.837 32 16 32 7.164 32 0 24.837 0 16 0 7.164 7.164 0 16 0Z",
        fill: "#f5ac37"
      }
    ),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M16.59 17.13L22.669 17.13C22.799 17.13 22.86 17.13 22.87 16.96 22.919 16.341 22.919 15.719 22.87 15.1 22.87 14.98 22.81 14.93 22.68 14.93L10.58 14.93C10.43 14.93 10.39 14.98 10.39 15.12L10.39 16.9C10.39 17.13 10.39 17.13 10.629 17.13L16.59 17.13ZM22.191 12.85C22.208 12.805 22.208 12.755 22.191 12.71 22.089 12.489 21.969 12.278 21.829 12.08 21.619 11.742 21.371 11.43 21.089 11.15 20.956 10.981 20.802 10.829 20.629 10.7 19.763 9.963 18.735 9.442 17.629 9.18 17.071 9.055 16.5 8.995 15.929 9L10.559 9C10.409 9 10.389 9.06 10.389 9.19L10.389 12.74C10.389 12.89 10.389 12.93 10.579 12.93L22.119 12.93C22.119 12.93 22.219 12.91 22.239 12.85L22.19 12.85ZM22.191 19.21C22.021 19.191 21.849 19.191 21.679 19.21L10.59 19.21C10.44 19.21 10.39 19.21 10.39 19.41L10.39 22.88C10.39 23.04 10.39 23.081 10.59 23.081L15.71 23.081C15.955 23.099 16.199 23.082 16.439 23.031 17.182 22.978 17.913 22.816 18.61 22.551 18.863 22.463 19.108 22.348 19.339 22.211L19.409 22.211C20.609 21.587 21.584 20.606 22.199 19.402 22.199 19.402 22.269 19.251 22.191 19.211ZM8.38 24.88L8.38 24.82 8.38 22.49 8.38 21.7 8.38 19.35C8.38 19.22 8.38 19.2 8.22 19.2L6.05 19.2C5.93 19.2 5.88 19.2 5.88 19.041L5.88 17.14 8.2 17.14C8.33 17.14 8.38 17.14 8.38 16.971L8.38 15.091C8.38 14.97 8.38 14.941 8.22 14.941L6.05 14.941C5.93 14.941 5.88 14.941 5.88 14.781L5.88 13.021C5.88 12.911 5.88 12.882 6.04 12.882L8.19 12.882C8.34 12.882 8.38 12.882 8.38 12.692L8.38 7.302C8.38 7.142 8.38 7.101 8.58 7.101L16.08 7.101C16.624 7.123 17.165 7.183 17.7 7.281 18.802 7.485 19.861 7.879 20.83 8.441 21.472 8.819 22.063 9.276 22.59 9.801 22.986 10.213 23.343 10.658 23.659 11.131 23.974 11.612 24.235 12.125 24.441 12.661 24.466 12.801 24.6 12.895 24.739 12.872L26.529 12.872C26.759 12.872 26.759 12.872 26.769 13.092L26.769 14.732C26.769 14.892 26.709 14.932 26.549 14.932L25.169 14.932C25.029 14.932 24.989 14.932 24.999 15.112 25.053 15.721 25.053 16.333 24.999 16.942 24.999 17.112 24.999 17.132 25.189 17.132L26.768 17.132C26.838 17.222 26.768 17.312 26.768 17.403 26.779 17.518 26.779 17.636 26.768 17.752L26.768 18.962C26.768 19.132 26.719 19.182 26.568 19.182L24.678 19.182C24.546 19.157 24.418 19.241 24.388 19.373 23.938 20.543 23.218 21.592 22.288 22.433 21.948 22.739 21.591 23.027 21.218 23.292 20.818 23.523 20.428 23.762 20.018 23.952 19.262 24.292 18.47 24.543 17.657 24.702 16.886 24.84 16.103 24.903 15.317 24.892L8.377 24.892 8.377 24.882Z",
        fill: "#fefefd"
      }
    )
  ] });
}
function ltc_mark() {
  return /* @__PURE__ */ jsxs51("g", { children: [
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M1.732 16A14.268 14.268 0 1 0 30.268 16 14.268 14.268 0 1 0 1.732 16Z",
        fill: "#ffffff"
      }
    ),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M16 0A16 16 0 1 0 32 16H32A15.954 15.954 0 0 0 16.093 0ZM16.271 16.542L14.605 22.16H23.516A0.449 0.449 0 0 1 23.981 22.594V22.741L23.206 25.414A0.577 0.577 0 0 1 22.625 25.84H8.988L11.274 18.053 8.717 18.828 9.298 17.046 11.855 16.271 15.07 5.346A0.585 0.585 0 0 1 15.651 4.92H19.099A0.449 0.449 0 0 1 19.564 5.354V5.501L16.852 14.722 19.409 13.947 18.867 15.806Z",
        fill: "#345d9d"
      }
    )
  ] });
}
function bch_mark() {
  return /* @__PURE__ */ jsxs51("g", { children: [
    /* @__PURE__ */ jsx64("path", { d: "M0 16A16 16 0 1 0 32 16 16 16 0 1 0 0 16Z", fill: "#0ac18e" }),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M20.991 10.627C20.187 8.804 18.339 8.414 16.077 8.792L15.35 5.974 13.637 6.416 14.351 9.226C13.901 9.34 13.438 9.438 12.979 9.568L12.264 6.774 10.55 7.216 11.277 10.035C10.908 10.14 7.817 10.932 7.817 10.932L8.288 12.768C8.288 12.768 9.547 12.414 9.535 12.443 10.234 12.26 10.562 12.609 10.717 12.938L12.715 20.662C12.739 20.885 12.698 21.267 12.219 21.397 12.248 21.413 10.973 21.718 10.973 21.718L11.159 23.858C11.159 23.858 14.221 23.074 14.623 22.973L15.358 25.823 17.072 25.381 16.337 22.51C16.808 22.4 17.267 22.286 17.714 22.169L18.445 25.023 20.158 24.581 19.423 21.734C22.063 21.092 23.927 19.427 23.545 16.881 23.302 15.346 21.624 14.087 20.231 13.945 21.088 13.186 21.523 12.077 20.991 10.627L20.991 10.627ZM20.166 17.348C20.508 19.87 17.003 20.179 15.846 20.483L14.839 16.711C16 16.406 19.59 15.127 20.166 17.348ZM18.055 12.211C18.416 14.453 15.419 14.713 14.453 14.96L13.535 11.537C14.506 11.297 17.32 10.136 18.055 12.211Z",
        fill: "#ffffff"
      }
    )
  ] });
}
function sol_mark(gradient_id) {
  return /* @__PURE__ */ jsxs51("g", { children: [
    /* @__PURE__ */ jsx64("defs", { children: /* @__PURE__ */ jsxs51(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        id: gradient_id,
        x1: "8.353",
        x2: "23.013",
        y1: "24.398",
        y2: "7.435",
        children: [
          /* @__PURE__ */ jsx64("stop", { offset: "0.08", stopColor: "#9945ff" }),
          /* @__PURE__ */ jsx64("stop", { offset: "0.3", stopColor: "#8752f3" }),
          /* @__PURE__ */ jsx64("stop", { offset: "0.5", stopColor: "#5497d5" }),
          /* @__PURE__ */ jsx64("stop", { offset: "0.6", stopColor: "#43b4ca" }),
          /* @__PURE__ */ jsx64("stop", { offset: "0.72", stopColor: "#28e0b9" }),
          /* @__PURE__ */ jsx64("stop", { offset: "0.97", stopColor: "#19fb9b" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx64("path", { d: "M0 16A16 16 0 1 0 32 16 16 16 0 1 0 0 16Z", fill: "#000000" }),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M25.105 20.624L22.068 23.798C22.002 23.866 21.922 23.921 21.833 23.959 21.744 23.997 21.649 24.016 21.552 24.016H7.153C7.084 24.016 7.017 23.996 6.959 23.96 6.902 23.923 6.857 23.871 6.829 23.809 6.802 23.748 6.793 23.68 6.805 23.614 6.817 23.548 6.848 23.487 6.895 23.438L9.935 20.264C10 20.196 10.08 20.141 10.169 20.103 10.257 20.066 10.353 20.046 10.449 20.046H24.847C24.916 20.046 24.983 20.066 25.041 20.102 25.098 20.139 25.143 20.191 25.171 20.253 25.198 20.314 25.207 20.382 25.195 20.448 25.183 20.514 25.152 20.575 25.105 20.624ZM22.068 14.233C22.002 14.165 21.922 14.11 21.833 14.072 21.744 14.034 21.649 14.015 21.552 14.015H7.153C7.084 14.015 7.017 14.035 6.959 14.071 6.902 14.108 6.857 14.16 6.829 14.222 6.802 14.283 6.793 14.351 6.805 14.417 6.817 14.483 6.848 14.544 6.895 14.593L9.935 17.767C10 17.835 10.08 17.89 10.169 17.928 10.257 17.965 10.353 17.985 10.449 17.985H24.847C24.916 17.985 24.983 17.965 25.041 17.929 25.098 17.892 25.143 17.84 25.171 17.778 25.198 17.717 25.207 17.649 25.195 17.583 25.183 17.517 25.152 17.456 25.105 17.407L22.068 14.233ZM7.153 11.954H21.552C21.649 11.954 21.744 11.935 21.833 11.897 21.922 11.859 22.002 11.805 22.068 11.736L25.105 8.562C25.152 8.513 25.183 8.452 25.195 8.386 25.207 8.32 25.198 8.252 25.171 8.191 25.143 8.129 25.098 8.077 25.041 8.04 24.983 8.004 24.916 7.984 24.847 7.984L10.449 7.984C10.353 7.984 10.257 8.004 10.169 8.041 10.08 8.079 10 8.134 9.935 8.202L6.896 11.376C6.849 11.425 6.818 11.486 6.806 11.552 6.794 11.618 6.803 11.686 6.83 11.747 6.857 11.808 6.902 11.861 6.96 11.897 7.017 11.934 7.084 11.954 7.153 11.954Z",
        fill: `url(#${gradient_id})`
      }
    )
  ] });
}
function xmr_mark() {
  return /* @__PURE__ */ jsxs51("g", { children: [
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M32 16C32 24.836 24.837 32 16 32S0 24.836 0 16 7.163 0 16 0 32 7.163 32 16Z",
        fill: "#ffffff"
      }
    ),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M16 0C7.166 0-0.009 7.174 0.002 15.999 0.004 17.765 0.286 19.464 0.814 21.053H5.601V7.593L16 17.992 26.398 7.593V21.053H31.186C31.716 19.464 31.996 17.766 31.999 16 32.014 7.165 24.835 0.002 16 0.002Z",
        fill: "#f26822"
      }
    ),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M13.609 20.382L9.07 15.844V24.313H5.601L2.327 24.314C5.135 28.921 10.21 32.003 16 32.003S26.865 28.921 29.674 24.313H22.929V15.844L18.39 20.382 15.999 22.773 13.609 20.382H13.609Z",
        fill: "#4d4d4d"
      }
    )
  ] });
}
function stable_mark() {
  return /* @__PURE__ */ jsxs51("g", { children: [
    /* @__PURE__ */ jsx64("path", { d: "M0 16A16 16 0 1 0 32 16 16 16 0 1 0 0 16Z", fill: "#0d9488" }),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M3.4 16A12.6 12.6 0 1 0 28.6 16 12.6 12.6 0 1 0 3.4 16Z",
        fill: "none",
        stroke: "#ffffff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: "0.3",
        strokeWidth: "1.3"
      }
    ),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M16 6.9V25.1",
        fill: "none",
        stroke: "#ffffff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2.2"
      }
    ),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M19.6 11.9C19.6 10 17.9 9 16 9 13.9 9 12.3 10.2 12.3 12.1 12.3 14.3 14.2 15 16 15.5 18.2 16.1 19.8 17 19.8 19.2 19.8 21.1 18 22.3 16 22.3S12.3 21.3 12.3 19.4",
        fill: "none",
        stroke: "#ffffff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2.2"
      }
    )
  ] });
}
function generic_mark() {
  return /* @__PURE__ */ jsxs51("g", { children: [
    /* @__PURE__ */ jsx64("path", { d: "M0 16A16 16 0 1 0 32 16 16 16 0 1 0 0 16Z", fill: "#6b7280" }),
    /* @__PURE__ */ jsx64(
      "path",
      {
        d: "M16 8A8 8 0 1 0 16 24 8 8 0 1 0 16 8ZM16 11.2A1.2 1.2 0 1 1 16 13.6 1.2 1.2 0 1 1 16 11.2ZM17.4 20.8H14.6V15.2H17.4Z",
        fill: "#ffffff",
        fillRule: "evenodd"
      }
    )
  ] });
}
function base_mark() {
  return /* @__PURE__ */ jsx64("g", { children: /* @__PURE__ */ jsx64(
    "path",
    {
      d: "M5 6.738C5 6.143 5 5.845 5.112 5.616 5.22 5.397 5.397 5.219 5.616 5.112 5.845 5 6.143 5 6.738 5H25.262C25.857 5 26.155 5 26.384 5.112 26.603 5.22 26.78 5.397 26.888 5.616 27 5.845 27 6.143 27 6.738V25.262C27 25.857 27 26.155 26.888 26.384 26.78 26.603 26.603 26.781 26.384 26.888 26.155 27 25.857 27 25.262 27H6.738C6.143 27 5.845 27 5.616 26.888 5.397 26.781 5.219 26.603 5.112 26.384 5 26.155 5 25.857 5 25.262V6.738Z",
      fill: "#0000ff"
    }
  ) });
}
function mark_for(id, gradient_id) {
  if (id === "btc") return btc_mark();
  if (id === "eth") return eth_mark();
  if (id === "usdc") return usdc_mark();
  if (id === "usdt") return usdt_mark();
  if (id === "dai") return dai_mark();
  if (id === "ltc") return ltc_mark();
  if (id === "sol") return sol_mark(gradient_id);
  if (id === "bch") return bch_mark();
  if (id === "xmr") return xmr_mark();
  if (id === "stable") return stable_mark();
  return generic_mark();
}
function chain_mark_for(id, gradient_id) {
  if (id === "bitcoin") return btc_mark();
  if (id === "ethereum") return eth_mark();
  if (id === "base") return base_mark();
  if (id === "monero") return xmr_mark();
  if (id === "litecoin") return ltc_mark();
  if (id === "solana") return sol_mark(gradient_id);
  if (id === "bitcoin_cash") return bch_mark();
  return generic_mark();
}
function resolve_currency(currency) {
  return CURRENCY_MARKS[currency.trim().toLowerCase()] ?? "generic";
}
function resolve_chain(chain) {
  return CHAIN_MARKS[chain.trim().toLowerCase()] ?? "generic";
}
function chain_letter(chain) {
  const trimmed = chain.trim();
  if (trimmed.toLowerCase() === "generic") return null;
  const first = trimmed.charAt(0).toUpperCase();
  return /^[A-Z0-9]$/.test(first) ? first : null;
}
function letter_chain_mark(letter) {
  return /* @__PURE__ */ jsxs51(Fragment13, { children: [
    /* @__PURE__ */ jsx64("circle", { cx: "16", cy: "16", fill: "#3d3d47", r: "16" }),
    /* @__PURE__ */ jsx64(
      "text",
      {
        dominantBaseline: "central",
        fill: "#ffffff",
        fontFamily: "system-ui, -apple-system, sans-serif",
        fontSize: "19",
        fontWeight: "700",
        textAnchor: "middle",
        x: "16",
        y: "17",
        children: letter
      }
    )
  ] });
}
function CoinIcon({
  currency,
  chain,
  size = 32,
  class_name = "",
  show_chain = true
}) {
  const instance_id = useId3().replace(/[^a-zA-Z0-9_-]/g, "");
  const currency_mark = resolve_currency(currency);
  const chain_mark = resolve_chain(chain);
  const chain_key = chain.trim().toLowerCase();
  const native_chain = NATIVE_CHAIN_OF[currency_mark];
  const is_native_chain = native_chain !== "generic" && (chain_mark === native_chain || chain_key === native_chain);
  const chain_initial = chain_letter(chain);
  const show_badge = show_chain && !is_native_chain && (chain_mark !== "generic" || chain_initial !== null);
  const show_letter_badge = show_badge && chain_mark === "generic";
  const cutout_id = `coin_icon_cutout_${instance_id}`;
  return /* @__PURE__ */ jsxs51(
    "svg",
    {
      "aria-hidden": "true",
      className: `shrink-0 ${class_name}`,
      focusable: "false",
      height: size,
      role: "presentation",
      viewBox: `0 0 ${VIEW_SIZE} ${VIEW_SIZE}`,
      width: size,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        show_badge && /* @__PURE__ */ jsx64("defs", { children: /* @__PURE__ */ jsxs51(
          "mask",
          {
            height: VIEW_SIZE,
            id: cutout_id,
            maskUnits: "userSpaceOnUse",
            width: VIEW_SIZE,
            x: "0",
            y: "0",
            children: [
              /* @__PURE__ */ jsx64(
                "rect",
                {
                  fill: "#ffffff",
                  height: VIEW_SIZE,
                  width: VIEW_SIZE,
                  x: "0",
                  y: "0"
                }
              ),
              /* @__PURE__ */ jsx64(
                "circle",
                {
                  cx: BADGE_CENTER,
                  cy: BADGE_CENTER,
                  fill: "#000000",
                  r: BADGE_CUTOUT_RADIUS
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx64(
          "svg",
          {
            height: VIEW_SIZE,
            mask: show_badge ? `url(#${cutout_id})` : void 0,
            overflow: "visible",
            viewBox: MARK_BOX,
            width: VIEW_SIZE,
            x: "0",
            y: "0",
            children: mark_for(currency_mark, `coin_icon_coin_gradient_${instance_id}`)
          }
        ),
        show_badge && /* @__PURE__ */ jsx64(
          "svg",
          {
            height: BADGE_SIZE,
            overflow: "visible",
            viewBox: MARK_BOX,
            width: BADGE_SIZE,
            x: BADGE_ORIGIN,
            y: BADGE_ORIGIN,
            children: show_letter_badge ? letter_chain_mark(chain_initial ?? "?") : chain_mark_for(
              chain_mark,
              `coin_icon_chain_gradient_${instance_id}`
            )
          }
        )
      ]
    }
  );
}

// src/favicon_or_initial/favicon_or_initial.tsx
import { useEffect as useEffect23, useState as useState16 } from "react";
import { jsx as jsx65 } from "react/jsx-runtime";
function FaviconOrInitial({
  src,
  initial,
  image_class_name = "w-4 h-4 object-contain",
  initial_class_name = "text-[11px] font-medium text-txt-muted",
  initial_style
}) {
  const [failed, set_failed] = useState16(false);
  useEffect23(() => {
    set_failed(false);
  }, [src]);
  if (!src || failed) {
    return /* @__PURE__ */ jsx65("span", { className: initial_class_name, style: initial_style, children: initial });
  }
  return /* @__PURE__ */ jsx65(
    "img",
    {
      alt: "",
      className: image_class_name,
      src,
      onError: () => set_failed(true)
    }
  );
}

// src/sparkle_overlay/sparkle_overlay.tsx
import { useEffect as useEffect24, useRef as useRef15 } from "react";
import { jsx as jsx66 } from "react/jsx-runtime";
function SparkleOverlay({ is_active }) {
  const canvas_ref = useRef15(null);
  const animation_ref = useRef15(0);
  const particles_ref = useRef15([]);
  const initialized_ref = useRef15(false);
  useEffect24(() => {
    const canvas = canvas_ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (!initialized_ref.current) {
      const rect2 = canvas.getBoundingClientRect();
      if (rect2.width === 0 || rect2.height === 0) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect2.width * dpr;
      canvas.height = rect2.height * dpr;
      ctx.scale(dpr, dpr);
      const w2 = rect2.width;
      const h2 = rect2.height;
      const count = Math.max(10, Math.floor(w2 * h2 / 140));
      const max_size = 1.3;
      particles_ref.current = Array.from({ length: count }, () => ({
        x: max_size + Math.random() * (w2 - max_size * 2),
        y: max_size + Math.random() * (h2 - max_size * 2),
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: 0.5 + Math.random() * 0.8,
        opacity: Math.random(),
        fade_speed: 4e-3 + Math.random() * 0.012,
        fade_dir: Math.random() > 0.5 ? 1 : -1
      }));
      initialized_ref.current = true;
    }
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const color_str = getComputedStyle(canvas).color;
    const rgb_match = color_str.match(/(\d+)/g);
    const [r, g, b] = rgb_match ? rgb_match.map(Number) : [255, 255, 255];
    const reduce_motion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce_motion) {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles_ref.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity * 0.7})`;
        ctx.fill();
      }
      return;
    }
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles_ref.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < p.size || p.x > w - p.size) p.vx *= -1;
        if (p.y < p.size || p.y > h - p.size) p.vy *= -1;
        p.x = Math.max(p.size, Math.min(w - p.size, p.x));
        p.y = Math.max(p.size, Math.min(h - p.size, p.y));
        p.opacity += p.fade_dir * p.fade_speed;
        if (p.opacity >= 1) {
          p.opacity = 1;
          p.fade_dir = -1;
        }
        if (p.opacity <= 0) {
          p.opacity = 0;
          p.fade_dir = 1;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity * 0.7})`;
        ctx.fill();
      }
      animation_ref.current = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(animation_ref.current);
    };
  }, []);
  return /* @__PURE__ */ jsx66(
    "canvas",
    {
      ref: canvas_ref,
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        borderRadius: "inherit",
        color: "var(--text-primary)",
        opacity: is_active ? 1 : 0,
        transition: "opacity 0.2s ease"
      }
    }
  );
}

// src/otp_input/otp_input.tsx
import { useRef as useRef16, useEffect as useEffect25 } from "react";
import { jsx as jsx67 } from "react/jsx-runtime";
function OtpInput({
  length = 6,
  value,
  disabled = false,
  status = "default",
  autofocus = true,
  align = "center",
  onChange,
  onComplete
}) {
  const box_refs = useRef16([]);
  const autofocus_done_ref = useRef16(false);
  const restore_index_ref = useRef16(null);
  useEffect25(() => {
    if (disabled) return;
    if (autofocus && !autofocus_done_ref.current) {
      autofocus_done_ref.current = true;
      box_refs.current[0]?.focus();
      return;
    }
    const restore_index = restore_index_ref.current;
    if (restore_index === null) return;
    restore_index_ref.current = null;
    box_refs.current[restore_index]?.focus();
  }, [autofocus, disabled]);
  const digits = Array.from({ length }, (_, i) => value[i] ?? "");
  const set_at = (index, digit) => {
    const next = digits.slice();
    next[index] = digit;
    const joined = next.join("").slice(0, length);
    onChange(joined);
    if (joined.length === length) onComplete?.(joined);
  };
  const handle_change = (index, raw) => {
    const cleaned = raw.replace(/\D/g, "");
    if (!cleaned) {
      set_at(index, "");
      return;
    }
    const start = Math.min(index, value.length);
    if (cleaned.length > 1) {
      const next = digits.slice();
      for (let i = 0; i < cleaned.length && start + i < length; i++) {
        next[start + i] = cleaned[i];
      }
      const joined = next.join("").slice(0, length);
      onChange(joined);
      if (joined.length === length) onComplete?.(joined);
      const last_index = Math.min(start + cleaned.length, length - 1);
      box_refs.current[last_index]?.focus();
      return;
    }
    set_at(start, cleaned);
    if (start < length - 1) {
      box_refs.current[start + 1]?.focus();
    }
  };
  const handle_key_down = (index, e) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      box_refs.current[index - 1]?.focus();
      set_at(index - 1, "");
    } else if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      box_refs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      e.preventDefault();
      box_refs.current[index + 1]?.focus();
    }
  };
  const handle_paste = (index, e) => {
    e.preventDefault();
    handle_change(index, e.clipboardData.getData("text"));
  };
  return /* @__PURE__ */ jsx67(
    "div",
    {
      className: cn(
        "flex flex-wrap items-center gap-2",
        align === "left" ? "justify-start" : "justify-center"
      ),
      children: digits.map((digit, index) => /* @__PURE__ */ jsx67(
        "input",
        {
          ref: (el) => {
            box_refs.current[index] = el;
          },
          autoComplete: index === 0 ? "one-time-code" : "off",
          className: cn(
            "w-11 h-[52px] rounded-[10px] text-center text-xl font-semibold outline-none transition-colors bg-surf-primary text-txt-primary border-2",
            status === "error" ? "border-red-500" : "border-edge-primary focus:border-brand"
          ),
          disabled,
          inputMode: "numeric",
          maxLength: 1,
          type: "text",
          value: digit,
          onBlur: (e) => {
            restore_index_ref.current = e.target.disabled ? index : null;
          },
          onChange: (e) => handle_change(index, e.target.value),
          onFocus: (e) => e.target.select(),
          onKeyDown: (e) => handle_key_down(index, e),
          onPaste: (e) => handle_paste(index, e)
        },
        index
      ))
    }
  );
}

// src/slider/slider.tsx
import { useState as useState17, useRef as useRef17, useCallback as useCallback8 } from "react";
import { jsx as jsx68, jsxs as jsxs52 } from "react/jsx-runtime";
function Slider({
  value,
  min,
  max,
  step = 1,
  ariaLabel,
  format_tooltip,
  className,
  onChange
}) {
  const track_ref = useRef17(null);
  const [is_dragging, set_is_dragging] = useState17(false);
  const [drag_percent, set_drag_percent] = useState17(null);
  const value_to_percent = (v) => (v - min) / (max - min) * 100;
  const percent_from_client_x = useCallback8(
    (client_x) => {
      const track = track_ref.current;
      if (!track) return value_to_percent(value);
      const rect = track.getBoundingClientRect();
      const is_rtl = getComputedStyle(track).direction === "rtl";
      const offset = is_rtl ? rect.right - client_x : client_x - rect.left;
      const raw = offset / rect.width * 100;
      return Math.min(100, Math.max(0, raw));
    },
    [value, min, max]
  );
  const percent_to_stepped_value = useCallback8(
    (percent) => {
      const raw_value = min + percent / 100 * (max - min);
      const stepped = Math.round(raw_value / step) * step;
      return Math.min(max, Math.max(min, stepped));
    },
    [min, max, step]
  );
  const handle_pointer_down = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    set_is_dragging(true);
    set_drag_percent(percent_from_client_x(e.clientX));
  };
  const handle_pointer_move = (e) => {
    if (!is_dragging) return;
    set_drag_percent(percent_from_client_x(e.clientX));
  };
  const handle_pointer_up = (e) => {
    if (!is_dragging) return;
    const percent = percent_from_client_x(e.clientX);
    onChange(percent_to_stepped_value(percent));
    set_is_dragging(false);
    set_drag_percent(null);
  };
  const handle_key_down = (e) => {
    const is_rtl = getComputedStyle(e.currentTarget).direction === "rtl";
    const increase_key = is_rtl ? "ArrowLeft" : "ArrowRight";
    const decrease_key = is_rtl ? "ArrowRight" : "ArrowLeft";
    if (e.key === increase_key || e.key === "ArrowUp") {
      e.preventDefault();
      onChange(Math.min(max, value + step));
    } else if (e.key === decrease_key || e.key === "ArrowDown") {
      e.preventDefault();
      onChange(Math.max(min, value - step));
    } else if (e.key === "Home") {
      e.preventDefault();
      onChange(min);
    } else if (e.key === "End") {
      e.preventDefault();
      onChange(max);
    }
  };
  const display_percent = is_dragging && drag_percent !== null ? drag_percent : value_to_percent(value);
  const display_value = is_dragging && drag_percent !== null ? percent_to_stepped_value(drag_percent) : value;
  const fill_transition = is_dragging ? "" : "transition-[width] duration-150 ease-out";
  const thumb_transition = is_dragging ? "transition-[transform,box-shadow] duration-100" : "transition-[left,transform,box-shadow] duration-150 ease-out";
  return /* @__PURE__ */ jsxs52(
    "div",
    {
      ref: track_ref,
      className: cn(
        "relative py-2 group/slider cursor-pointer touch-none select-none",
        className
      ),
      onPointerCancel: handle_pointer_up,
      onPointerDown: handle_pointer_down,
      onPointerMove: handle_pointer_move,
      onPointerUp: handle_pointer_up,
      children: [
        /* @__PURE__ */ jsx68(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute start-0 end-0 top-1/2 -translate-y-1/2 h-1.5 rounded-full pointer-events-none",
            style: {
              background: "color-mix(in srgb, var(--text-primary) 18%, transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsx68(
          "div",
          {
            "aria-hidden": "true",
            className: cn(
              "absolute start-0 top-1/2 -translate-y-1/2 h-1.5 rounded-full pointer-events-none",
              fill_transition
            ),
            style: {
              width: `${display_percent}%`,
              background: "linear-gradient(90deg, var(--accent-alpha-75, rgba(59, 130, 246, 0.75)), var(--accent-blue))"
            }
          }
        ),
        is_dragging && format_tooltip && /* @__PURE__ */ jsx68(
          "div",
          {
            className: "absolute -top-8 ltr:-translate-x-1/2 rtl:translate-x-1/2 px-2 py-1 rounded-md text-xs font-medium text-[var(--accent-fg,#ffffff)] bg-[var(--accent-blue)] shadow-lg pointer-events-none whitespace-nowrap",
            style: { insetInlineStart: `${display_percent}%` },
            children: format_tooltip(display_value)
          }
        ),
        /* @__PURE__ */ jsx68(
          "div",
          {
            "aria-label": ariaLabel,
            "aria-valuemax": max,
            "aria-valuemin": min,
            "aria-valuenow": display_value,
            className: cn(
              "absolute top-1/2 w-5 h-5 rounded-full border-0 bg-[var(--accent-blue)] shadow-[0_1px_3px_rgba(0,0,0,0.4)] ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing hover:scale-125 hover:shadow-[0_2px_8px_rgba(0,0,0,0.45)] active:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--accent-blue)]/30",
              thumb_transition
            ),
            role: "slider",
            style: { insetInlineStart: `${display_percent}%` },
            tabIndex: 0,
            onKeyDown: handle_key_down
          }
        )
      ]
    }
  );
}

// src/popover/popover.tsx
import * as React39 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsx as jsx69, jsxs as jsxs53 } from "react/jsx-runtime";
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverAnchor = PopoverPrimitive.Anchor;
var PopoverOverlayLayer = () => {
  use_overlay_layer(true, "popover");
  return null;
};
var PopoverContent = React39.forwardRef(
  ({ className, align = "center", sideOffset = 4, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx69(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsxs53(
      PopoverPrimitive.Content,
      {
        ref,
        align,
        className: cn(
          "z-[200] w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        ),
        sideOffset,
        ...props,
        children: [
          /* @__PURE__ */ jsx69(PopoverOverlayLayer, {}),
          children
        ]
      }
    ) });
  }
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/info_popover/info_popover.tsx
import { InformationCircleIcon as InformationCircleIcon2 } from "@heroicons/react/24/outline";
import { jsx as jsx70, jsxs as jsxs54 } from "react/jsx-runtime";
function InfoPopover({
  title,
  description,
  learn_more_url,
  learn_more_label,
  icon_class
}) {
  const strings = use_ui_strings();
  return /* @__PURE__ */ jsxs54(Popover, { children: [
    /* @__PURE__ */ jsx70(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx70(
      "button",
      {
        "aria-label": strings.more_info,
        className: "-m-1 inline-flex items-center justify-center flex-shrink-0 p-1 text-txt-muted hover:text-txt-secondary transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand",
        type: "button",
        children: /* @__PURE__ */ jsx70(InformationCircleIcon2, { className: icon_class ?? "w-4 h-4" })
      }
    ) }),
    /* @__PURE__ */ jsxs54(
      PopoverContent,
      {
        align: "start",
        className: "w-80 max-w-[calc(100vw-24px)] border border-edge-primary bg-modal-bg shadow-lg rounded-xl p-4 z-[200]",
        collisionPadding: 12,
        sideOffset: 6,
        children: [
          title && /* @__PURE__ */ jsx70("p", { className: "text-sm font-semibold text-txt-primary mb-1.5 break-words", children: title }),
          /* @__PURE__ */ jsx70("p", { className: "text-sm text-txt-muted leading-relaxed break-words", children: description }),
          learn_more_url && /* @__PURE__ */ jsx70(
            "a",
            {
              className: "inline-block mt-2.5 text-xs text-brand hover:underline",
              href: learn_more_url,
              rel: "noopener noreferrer",
              target: "_blank",
              children: learn_more_label ?? strings.learn_more
            }
          )
        ]
      }
    )
  ] });
}

// src/profile_avatar/profile_avatar.tsx
import * as React40 from "react";
import { jsx as jsx71, jsxs as jsxs55 } from "react/jsx-runtime";
var PROFILE_AVATAR_SIZE_MAP = {
  xs: 24,
  sm_compact: 28,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 96
};
var ProfileAvatarView = React40.memo(function ProfileAvatarView2({
  name,
  email,
  size = "md",
  className = "",
  src,
  pending = false,
  initials = "",
  background_color,
  text_color,
  is_favicon_source = false,
  is_local_logo_source = false,
  show_placeholder = false,
  image_attributes,
  on_image_error,
  on_image_load
}) {
  const pixel_size = PROFILE_AVATAR_SIZE_MAP[size];
  if (!src) {
    if (pending) {
      return /* @__PURE__ */ jsx71(
        Skeleton,
        {
          className: `rounded-full flex-shrink-0 ${className}`,
          style: {
            width: pixel_size,
            height: pixel_size,
            minWidth: pixel_size,
            minHeight: pixel_size
          }
        }
      );
    }
    const font_size = Math.round(
      pixel_size * (initials.length > 1 ? 0.36 : 0.44)
    );
    return /* @__PURE__ */ jsx71(
      "div",
      {
        "aria-label": name || email || void 0,
        className: `rounded-full flex-shrink-0 flex items-center justify-center ${className}`,
        role: "img",
        style: {
          width: pixel_size,
          height: pixel_size,
          minWidth: pixel_size,
          minHeight: pixel_size,
          backgroundColor: background_color,
          userSelect: "none"
        },
        children: /* @__PURE__ */ jsx71(
          "svg",
          {
            "aria-hidden": "true",
            height: pixel_size,
            style: { display: "block", pointerEvents: "none" },
            viewBox: `0 0 ${pixel_size} ${pixel_size}`,
            width: pixel_size,
            children: /* @__PURE__ */ jsx71(
              "text",
              {
                dominantBaseline: "central",
                fill: text_color,
                fontSize: font_size,
                fontWeight: 600,
                style: {
                  fontFamily: "inherit",
                  letterSpacing: initials.length > 1 ? "-0.02em" : void 0
                },
                textAnchor: "middle",
                x: "50%",
                y: "50%",
                children: initials
              }
            )
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsxs55(
    "div",
    {
      className: `rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden relative ${className}`,
      style: {
        width: pixel_size,
        height: pixel_size,
        minWidth: pixel_size,
        minHeight: pixel_size,
        backgroundColor: is_favicon_source ? "transparent" : "var(--avatar-bg)",
        userSelect: "none"
      },
      children: [
        show_placeholder && /* @__PURE__ */ jsx71(Skeleton, { className: "absolute inset-0 rounded-full" }),
        /* @__PURE__ */ jsx71(
          "img",
          {
            alt: name,
            className: `w-full h-full ${is_favicon_source ? "object-contain" : "object-cover"}`,
            crossOrigin: is_favicon_source || is_local_logo_source ? void 0 : "anonymous",
            decoding: "async",
            draggable: false,
            ...image_attributes,
            referrerPolicy: "no-referrer",
            src,
            style: {
              position: "absolute",
              inset: 0,
              opacity: show_placeholder ? 0 : 1
            },
            onError: on_image_error,
            onLoad: on_image_load
          }
        )
      ]
    }
  );
});

// src/account_avatar_button/account_avatar_button.tsx
import { CameraIcon } from "@heroicons/react/24/solid";
import { jsx as jsx72, jsxs as jsxs56 } from "react/jsx-runtime";
var OVERLAY_ICON_SIZE = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5",
  xl: "w-7 h-7"
};
function AccountAvatarButtonView({
  avatar,
  label,
  size = "lg",
  is_paid_plan = false,
  ring_offset_color = "var(--bg-hover)",
  className = "",
  uploading = false,
  accept,
  file_input_ref,
  on_file_change,
  on_open_picker
}) {
  return /* @__PURE__ */ jsxs56("div", { className: `relative flex-shrink-0 ${className}`, children: [
    /* @__PURE__ */ jsx72(
      "input",
      {
        ref: file_input_ref,
        accept,
        className: "hidden",
        type: "file",
        onChange: on_file_change
      }
    ),
    /* @__PURE__ */ jsx72(
      "button",
      {
        "aria-label": label,
        className: "group relative flex w-fit rounded-full leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)] focus-visible:ring-offset-2",
        disabled: uploading,
        style: { ["--tw-ring-offset-color"]: ring_offset_color },
        title: label,
        type: "button",
        onClick: on_open_picker,
        children: /* @__PURE__ */ jsx72(
          "span",
          {
            className: is_paid_plan ? "plan_ring" : "inline-flex leading-none",
            children: /* @__PURE__ */ jsxs56("span", { className: "relative flex rounded-full leading-none", children: [
              avatar,
              /* @__PURE__ */ jsx72(
                "span",
                {
                  "aria-hidden": "true",
                  className: "absolute inset-0 flex items-center justify-center rounded-full opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100 motion-reduce:transition-none",
                  style: { backgroundColor: "rgba(0, 0, 0, 0.55)" },
                  children: /* @__PURE__ */ jsx72(CameraIcon, { className: `${OVERLAY_ICON_SIZE[size]} text-white` })
                }
              ),
              uploading && /* @__PURE__ */ jsx72(
                "span",
                {
                  className: "absolute inset-0 rounded-full flex items-center justify-center",
                  style: { backgroundColor: "rgba(0, 0, 0, 0.55)" },
                  children: /* @__PURE__ */ jsx72(
                    "span",
                    {
                      className: "rounded-full border-2 border-white border-t-transparent animate-spin motion-reduce:animate-none",
                      style: { width: "50%", height: "50%" }
                    }
                  )
                }
              )
            ] })
          }
        )
      }
    )
  ] });
}

// src/badge_chip/badge_chip.tsx
import * as React41 from "react";

// src/badge_chip/badge_registry.ts
import {
  SparklesIcon,
  MoonIcon,
  GlobeAltIcon,
  LightBulbIcon,
  SunIcon,
  ArrowPathIcon,
  CloudIcon,
  RocketLaunchIcon,
  BoltIcon,
  StarIcon as StarIcon2,
  HeartIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";
var BADGE_VISUALS = {
  big_bang: {
    icon: SparklesIcon,
    gradient_from: "#fbbf24",
    gradient_to: "#f97316",
    text_class: "text-amber-700 dark:text-amber-400",
    bg_class: "bg-amber-100 dark:bg-amber-500/15",
    border_class: "border-amber-200 dark:border-amber-500/30"
  },
  event_horizon: {
    icon: MoonIcon,
    gradient_from: "#8b5cf6",
    gradient_to: "#6366f1",
    text_class: "text-violet-700 dark:text-violet-400",
    bg_class: "bg-violet-100 dark:bg-violet-500/15",
    border_class: "border-violet-200 dark:border-violet-500/30"
  },
  black_hole: {
    icon: GlobeAltIcon,
    gradient_from: "#6366f1",
    gradient_to: "#1e293b",
    text_class: "text-indigo-700 dark:text-indigo-400",
    bg_class: "bg-indigo-100 dark:bg-indigo-500/15",
    border_class: "border-indigo-200 dark:border-indigo-500/30"
  },
  singularity: {
    icon: LightBulbIcon,
    gradient_from: "#94a3b8",
    gradient_to: "#e2e8f0",
    text_class: "text-slate-700 dark:text-slate-300",
    bg_class: "bg-slate-100 dark:bg-slate-500/15",
    border_class: "border-slate-200 dark:border-slate-500/30"
  },
  supernova: {
    icon: SunIcon,
    gradient_from: "#f97316",
    gradient_to: "#ef4444",
    text_class: "text-orange-700 dark:text-orange-400",
    bg_class: "bg-orange-100 dark:bg-orange-500/15",
    border_class: "border-orange-200 dark:border-orange-500/30"
  },
  andromeda: {
    icon: ArrowPathIcon,
    gradient_from: "#a855f7",
    gradient_to: "#ec4899",
    text_class: "text-purple-700 dark:text-purple-400",
    bg_class: "bg-purple-100 dark:bg-purple-500/15",
    border_class: "border-purple-200 dark:border-purple-500/30"
  },
  nebula: {
    icon: CloudIcon,
    gradient_from: "#ec4899",
    gradient_to: "#8b5cf6",
    text_class: "text-pink-700 dark:text-pink-400",
    bg_class: "bg-pink-100 dark:bg-pink-500/15",
    border_class: "border-pink-200 dark:border-pink-500/30"
  },
  comet: {
    icon: RocketLaunchIcon,
    gradient_from: "#0ea5e9",
    gradient_to: "#22d3ee",
    text_class: "text-sky-700 dark:text-sky-400",
    bg_class: "bg-sky-100 dark:bg-sky-500/15",
    border_class: "border-sky-200 dark:border-sky-500/30"
  },
  pulsar: {
    icon: BoltIcon,
    gradient_from: "#3b82f6",
    gradient_to: "#06b6d4",
    text_class: "text-blue-700 dark:text-blue-400",
    bg_class: "bg-blue-100 dark:bg-blue-500/15",
    border_class: "border-blue-200 dark:border-blue-500/30"
  },
  stargazer: {
    icon: StarIcon2,
    gradient_from: "#8b5cf6",
    gradient_to: "#3b82f6",
    text_class: "text-violet-700 dark:text-violet-400",
    bg_class: "bg-violet-100 dark:bg-violet-500/15",
    border_class: "border-violet-200 dark:border-violet-500/30"
  },
  founding_member: {
    icon: TrophyIcon,
    gradient_from: "#facc15",
    gradient_to: "#f59e0b",
    text_class: "text-yellow-700 dark:text-yellow-400",
    bg_class: "bg-yellow-100 dark:bg-yellow-500/15",
    border_class: "border-yellow-200 dark:border-yellow-500/30"
  },
  early_supporter: {
    icon: HeartIcon,
    gradient_from: "#f43f5e",
    gradient_to: "#a855f7",
    text_class: "text-rose-700 dark:text-rose-400",
    bg_class: "bg-rose-100 dark:bg-rose-500/15",
    border_class: "border-rose-200 dark:border-rose-500/30"
  }
};
var DEFAULT_VISUAL = {
  icon: StarIcon2,
  gradient_from: "#64748b",
  gradient_to: "#94a3b8",
  text_class: "text-slate-700 dark:text-slate-300",
  bg_class: "bg-slate-100 dark:bg-slate-500/15",
  border_class: "border-slate-200 dark:border-slate-500/30"
};
function get_badge_visual(slug) {
  return BADGE_VISUALS[slug] ?? DEFAULT_VISUAL;
}
function format_find_order(find_order, locale) {
  if (find_order == null || find_order < 1) return null;
  return `#${find_order.toLocaleString(locale)}`;
}

// src/badge_chip/badge_chip.tsx
import { jsx as jsx73, jsxs as jsxs57 } from "react/jsx-runtime";
var size_classes2 = {
  xs: "text-[9px] px-1 py-[1px] gap-0.5 rounded",
  sm: "text-[10px] px-1.5 py-0.5 gap-1 rounded",
  md: "text-[11px] px-2 py-0.5 gap-1 rounded-md"
};
var icon_size_classes = {
  xs: "w-2.5 h-2.5",
  sm: "w-3 h-3",
  md: "w-3.5 h-3.5"
};
var BadgeChip = React41.memo(function BadgeChip2({
  badge,
  size = "sm",
  show_find_order = true,
  show_label = true,
  className,
  title,
  locale
}) {
  const visual = get_badge_visual(badge.slug);
  const Icon2 = visual.icon;
  const find_label = show_find_order ? format_find_order(badge.find_order, locale) : null;
  return /* @__PURE__ */ jsxs57(
    "span",
    {
      className: cn(
        "inline-flex items-center font-medium border select-none",
        size_classes2[size],
        visual.bg_class,
        visual.text_class,
        visual.border_class,
        className
      ),
      title: title ?? badge.display_name,
      children: [
        /* @__PURE__ */ jsx73(Icon2, { className: cn(icon_size_classes[size], "flex-shrink-0") }),
        show_label && /* @__PURE__ */ jsx73("span", { className: "truncate", children: badge.display_name }),
        find_label && /* @__PURE__ */ jsx73("span", { className: "tabular-nums opacity-70", children: find_label })
      ]
    }
  );
});

// src/email_tag/email_tag.tsx
import * as React42 from "react";
import { cva as cva9 } from "class-variance-authority";
import {
  ClockIcon as ClockIcon2,
  ArchiveBoxIcon as ArchiveBoxIcon2,
  TrashIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
  StarIcon as StarIcon3,
  FlagIcon,
  BoltIcon as BoltIcon2,
  ShieldExclamationIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  TagIcon as TagIcon2,
  FolderIcon,
  EnvelopeIcon,
  LockClosedIcon,
  BellIcon,
  SparklesIcon as SparklesIcon2,
  FireIcon,
  HeartIcon as HeartIcon2,
  BookmarkIcon,
  ChatBubbleLeftIcon,
  DocumentIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  CodeBracketIcon,
  UserIcon,
  BuildingOfficeIcon,
  GlobeAltIcon as GlobeAltIcon2,
  InformationCircleIcon as InformationCircleIcon3,
  EyeSlashIcon,
  AtSymbolIcon,
  BanknotesIcon,
  BuildingLibraryIcon,
  CreditCardIcon,
  WalletIcon,
  ReceiptPercentIcon,
  ChartBarIcon,
  GiftIcon,
  TicketIcon,
  BriefcaseIcon,
  UsersIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  PresentationChartBarIcon,
  TrophyIcon as TrophyIcon2,
  KeyIcon as KeyIcon2,
  LinkIcon,
  CubeIcon,
  AcademicCapIcon,
  BookOpenIcon,
  PencilIcon,
  CalculatorIcon,
  BeakerIcon,
  LanguageIcon,
  HomeIcon,
  TruckIcon,
  MapPinIcon,
  CameraIcon as CameraIcon2,
  MusicalNoteIcon,
  CloudIcon as CloudIcon2,
  SunIcon as SunIcon2,
  MoonIcon as MoonIcon2,
  PhoneIcon,
  NewspaperIcon,
  LightBulbIcon as LightBulbIcon2,
  WrenchScrewdriverIcon,
  NoSymbolIcon
} from "@heroicons/react/16/solid";
import { Fragment as Fragment14, jsx as jsx74, jsxs as jsxs58 } from "react/jsx-runtime";
function BitcoinGlyph({
  className,
  style
}) {
  return /* @__PURE__ */ jsx74(
    "svg",
    {
      "aria-hidden": "true",
      className,
      fill: "currentColor",
      height: "1em",
      stroke: "currentColor",
      strokeWidth: "0",
      style,
      viewBox: "0 0 512 512",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx74("path", { d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z" })
    }
  );
}
var tag_icon_map = {
  clock: ClockIcon2,
  archive: ArchiveBoxIcon2,
  trash: TrashIcon,
  send: PaperAirplaneIcon,
  draft: PencilSquareIcon,
  star: StarIcon3,
  flag: FlagIcon,
  bolt: BoltIcon2,
  shield: ShieldExclamationIcon,
  warning: ExclamationCircleIcon,
  check: CheckCircleIcon,
  tag: TagIcon2,
  folder: FolderIcon,
  envelope: EnvelopeIcon,
  lock: LockClosedIcon,
  bell: BellIcon,
  sparkles: SparklesIcon2,
  fire: FireIcon,
  heart: HeartIcon2,
  bookmark: BookmarkIcon,
  chat: ChatBubbleLeftIcon,
  document: DocumentIcon,
  currency: CurrencyDollarIcon,
  cart: ShoppingCartIcon,
  code: CodeBracketIcon,
  user: UserIcon,
  building: BuildingOfficeIcon,
  globe: GlobeAltIcon2,
  info: InformationCircleIcon3,
  "eye-slash": EyeSlashIcon,
  at: AtSymbolIcon,
  money: BanknotesIcon,
  bank: BuildingLibraryIcon,
  card: CreditCardIcon,
  wallet: WalletIcon,
  receipt: ReceiptPercentIcon,
  chart: ChartBarIcon,
  gift: GiftIcon,
  ticket: TicketIcon,
  crypto: BitcoinGlyph,
  briefcase: BriefcaseIcon,
  users: UsersIcon,
  calendar: CalendarIcon,
  clipboard: ClipboardDocumentListIcon,
  presentation: PresentationChartBarIcon,
  trophy: TrophyIcon2,
  key: KeyIcon2,
  link: LinkIcon,
  package: CubeIcon,
  graduation: AcademicCapIcon,
  book: BookOpenIcon,
  pencil: PencilIcon,
  calculator: CalculatorIcon,
  beaker: BeakerIcon,
  language: LanguageIcon,
  home: HomeIcon,
  truck: TruckIcon,
  "map-pin": MapPinIcon,
  camera: CameraIcon2,
  music: MusicalNoteIcon,
  cloud: CloudIcon2,
  sun: SunIcon2,
  moon: MoonIcon2,
  phone: PhoneIcon,
  news: NewspaperIcon,
  bulb: LightBulbIcon2,
  tools: WrenchScrewdriverIcon,
  ban: NoSymbolIcon
};
var TAG_ICON_GROUPS = [
  {
    key: "essentials",
    label_key: "common.icon_group_essentials",
    icons: [
      "tag",
      "folder",
      "star",
      "bookmark",
      "flag",
      "check",
      "bell",
      "heart",
      "sparkles",
      "fire",
      "bolt",
      "clock",
      "info",
      "warning"
    ]
  },
  {
    key: "mail",
    label_key: "common.icon_group_mail",
    icons: [
      "envelope",
      "at",
      "chat",
      "send",
      "draft",
      "document",
      "archive",
      "trash",
      "shield",
      "lock",
      "eye-slash"
    ]
  },
  {
    key: "money",
    label_key: "common.icon_group_money",
    icons: [
      "currency",
      "money",
      "bank",
      "card",
      "wallet",
      "receipt",
      "chart",
      "cart",
      "gift",
      "ticket",
      "crypto"
    ]
  },
  {
    key: "work",
    label_key: "common.icon_group_work",
    icons: [
      "briefcase",
      "building",
      "user",
      "users",
      "calendar",
      "clipboard",
      "presentation",
      "trophy",
      "code",
      "key",
      "link",
      "package"
    ]
  },
  {
    key: "school",
    label_key: "common.icon_group_school",
    icons: ["graduation", "book", "pencil", "calculator", "beaker", "language"]
  },
  {
    key: "everyday",
    label_key: "common.icon_group_everyday",
    icons: [
      "home",
      "truck",
      "map-pin",
      "camera",
      "music",
      "cloud",
      "sun",
      "moon",
      "globe",
      "phone",
      "news",
      "bulb",
      "tools",
      "ban"
    ]
  }
];
var email_tag_variants = cva9(
  "inline-flex items-center gap-1 font-medium transition-colors select-none",
  {
    variants: {
      variant: {
        scheduled: [
          "bg-violet-100 text-violet-700 border border-violet-200",
          "dark:bg-violet-500/15 dark:text-violet-400 dark:border-violet-500/30"
        ].join(" "),
        sent: [
          "bg-emerald-100 text-emerald-700 border border-emerald-200",
          "dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/30"
        ].join(" "),
        draft: [
          "bg-amber-100 text-amber-700 border border-amber-200",
          "dark:bg-amber-500/15 dark:text-amber-400 dark:border-amber-500/30"
        ].join(" "),
        archived: [
          "bg-sky-100 text-sky-700 border border-sky-200",
          "dark:bg-sky-500/15 dark:text-sky-400 dark:border-sky-500/30"
        ].join(" "),
        trashed: [
          "bg-red-100 text-red-700 border border-red-200",
          "dark:bg-red-500/15 dark:text-red-400 dark:border-red-500/30"
        ].join(" "),
        spam: [
          "bg-orange-100 text-orange-700 border border-orange-200",
          "dark:bg-orange-500/15 dark:text-orange-400 dark:border-orange-500/30"
        ].join(" "),
        snoozed: [
          "bg-indigo-100 text-indigo-700 border border-indigo-200",
          "dark:bg-indigo-500/15 dark:text-indigo-400 dark:border-indigo-500/30"
        ].join(" "),
        starred: [
          "bg-yellow-100 text-yellow-700 border border-yellow-200",
          "dark:bg-yellow-500/15 dark:text-yellow-400 dark:border-yellow-500/30"
        ].join(" "),
        important: [
          "bg-rose-100 text-rose-700 border border-rose-200",
          "dark:bg-rose-500/15 dark:text-rose-400 dark:border-rose-500/30"
        ].join(" "),
        unread: [
          "bg-blue-100 text-blue-700 border border-blue-200",
          "dark:bg-blue-500/15 dark:text-blue-400 dark:border-blue-500/30"
        ].join(" "),
        encrypted: [
          "bg-teal-100 text-teal-700 border border-teal-200",
          "dark:bg-teal-500/15 dark:text-teal-400 dark:border-teal-500/30"
        ].join(" "),
        red: [
          "bg-red-100 text-red-700 border border-red-200",
          "dark:bg-red-500/15 dark:text-red-400 dark:border-red-500/30"
        ].join(" "),
        orange: [
          "bg-orange-100 text-orange-700 border border-orange-200",
          "dark:bg-orange-500/15 dark:text-orange-400 dark:border-orange-500/30"
        ].join(" "),
        amber: [
          "bg-amber-100 text-amber-700 border border-amber-200",
          "dark:bg-amber-500/15 dark:text-amber-400 dark:border-amber-500/30"
        ].join(" "),
        yellow: [
          "bg-yellow-100 text-yellow-700 border border-yellow-200",
          "dark:bg-yellow-500/15 dark:text-yellow-400 dark:border-yellow-500/30"
        ].join(" "),
        lime: [
          "bg-lime-100 text-lime-700 border border-lime-200",
          "dark:bg-lime-500/15 dark:text-lime-400 dark:border-lime-500/30"
        ].join(" "),
        green: [
          "bg-green-100 text-green-700 border border-green-200",
          "dark:bg-green-500/15 dark:text-green-400 dark:border-green-500/30"
        ].join(" "),
        emerald: [
          "bg-emerald-100 text-emerald-700 border border-emerald-200",
          "dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/30"
        ].join(" "),
        teal: [
          "bg-teal-100 text-teal-700 border border-teal-200",
          "dark:bg-teal-500/15 dark:text-teal-400 dark:border-teal-500/30"
        ].join(" "),
        cyan: [
          "bg-cyan-100 text-cyan-700 border border-cyan-200",
          "dark:bg-cyan-500/15 dark:text-cyan-400 dark:border-cyan-500/30"
        ].join(" "),
        sky: [
          "bg-sky-100 text-sky-700 border border-sky-200",
          "dark:bg-sky-500/15 dark:text-sky-400 dark:border-sky-500/30"
        ].join(" "),
        blue: [
          "bg-blue-100 text-blue-700 border border-blue-200",
          "dark:bg-blue-500/15 dark:text-blue-400 dark:border-blue-500/30"
        ].join(" "),
        indigo: [
          "bg-indigo-100 text-indigo-700 border border-indigo-200",
          "dark:bg-indigo-500/15 dark:text-indigo-400 dark:border-indigo-500/30"
        ].join(" "),
        violet: [
          "bg-violet-100 text-violet-700 border border-violet-200",
          "dark:bg-violet-500/15 dark:text-violet-400 dark:border-violet-500/30"
        ].join(" "),
        purple: [
          "bg-purple-100 text-purple-700 border border-purple-200",
          "dark:bg-purple-500/15 dark:text-purple-400 dark:border-purple-500/30"
        ].join(" "),
        fuchsia: [
          "bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200",
          "dark:bg-fuchsia-500/15 dark:text-fuchsia-400 dark:border-fuchsia-500/30"
        ].join(" "),
        pink: [
          "bg-pink-100 text-pink-700 border border-pink-200",
          "dark:bg-pink-500/15 dark:text-pink-400 dark:border-pink-500/30"
        ].join(" "),
        rose: [
          "bg-rose-100 text-rose-700 border border-rose-200",
          "dark:bg-rose-500/15 dark:text-rose-400 dark:border-rose-500/30"
        ].join(" "),
        slate: [
          "bg-slate-100 text-slate-700 border border-slate-200",
          "dark:bg-slate-500/15 dark:text-slate-400 dark:border-slate-500/30"
        ].join(" "),
        neutral: [
          "bg-neutral-100 text-neutral-700 border border-neutral-200",
          "dark:bg-neutral-500/15 dark:text-neutral-400 dark:border-neutral-500/30"
        ].join(" "),
        custom: ""
      },
      size: {
        xs: "text-[9px] px-1.5 py-0.5 rounded",
        sm: "text-[10px] px-1.5 py-0.5 rounded",
        default: "text-[11px] px-2 py-0.5 rounded-md",
        lg: "text-xs px-2.5 py-1 rounded-md"
      }
    },
    defaultVariants: {
      variant: "neutral",
      size: "sm"
    }
  }
);
var EmailTag = React42.forwardRef(
  function EmailTag2({
    className,
    variant,
    size,
    icon,
    label,
    custom_color,
    show_icon = true,
    muted = false,
    style,
    ...props
  }, ref) {
    const default_icons = {
      scheduled: "clock",
      sent: "send",
      draft: "draft",
      archived: "archive",
      trashed: "trash",
      spam: "shield",
      snoozed: "clock",
      starred: "star",
      important: "flag",
      unread: "envelope",
      encrypted: "lock"
    };
    const resolved_icon = icon ?? (variant && variant in default_icons ? default_icons[variant] : void 0);
    const IconComponent = typeof resolved_icon === "string" ? tag_icon_map[resolved_icon] : null;
    const icon_sizes = {
      xs: "w-2.5 h-2.5",
      sm: "w-3 h-3",
      default: "w-3.5 h-3.5",
      lg: "w-4 h-4"
    };
    const custom_styles = variant === "custom" && custom_color ? get_custom_color_styles(custom_color) : {};
    return /* @__PURE__ */ jsxs58(
      "span",
      {
        ref,
        className: cn(
          email_tag_variants({ variant, size }),
          muted && "opacity-70",
          className
        ),
        style: { ...custom_styles, ...style },
        ...props,
        children: [
          show_icon && resolved_icon && /* @__PURE__ */ jsx74(Fragment14, { children: IconComponent ? /* @__PURE__ */ jsx74(
            IconComponent,
            {
              className: cn(
                icon_sizes[size || "sm"],
                "flex-shrink-0 -ml-0.5"
              )
            }
          ) : /* @__PURE__ */ jsx74(
            "span",
            {
              className: cn(
                icon_sizes[size || "sm"],
                "flex-shrink-0 -ml-0.5"
              ),
              children: resolved_icon
            }
          ) }),
          /* @__PURE__ */ jsx74("span", { className: "truncate", children: label })
        ]
      }
    );
  }
);
function get_custom_color_styles(color) {
  const hex_to_rgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };
  const rgb = hex_to_rgb(color);
  if (!rgb) return {};
  return {
    backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.12)`,
    color,
    borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.25)`
  };
}
var TAG_COLOR_PRESETS = [
  { name: "Red", variant: "red", hex: "#ef4444" },
  { name: "Orange", variant: "orange", hex: "#f97316" },
  { name: "Amber", variant: "amber", hex: "#f59e0b" },
  { name: "Yellow", variant: "yellow", hex: "#eab308" },
  { name: "Lime", variant: "lime", hex: "#84cc16" },
  { name: "Green", variant: "green", hex: "#22c55e" },
  { name: "Emerald", variant: "emerald", hex: "#10b981" },
  { name: "Teal", variant: "teal", hex: "#14b8a6" },
  { name: "Cyan", variant: "cyan", hex: "#06b6d4" },
  { name: "Sky", variant: "sky", hex: "#0ea5e9" },
  { name: "Blue", variant: "blue", hex: "#3b82f6" },
  { name: "Indigo", variant: "indigo", hex: "#6366f1" },
  { name: "Violet", variant: "violet", hex: "#8b5cf6" },
  { name: "Purple", variant: "purple", hex: "#a855f7" },
  { name: "Fuchsia", variant: "fuchsia", hex: "#d946ef" },
  { name: "Pink", variant: "pink", hex: "#ec4899" },
  { name: "Rose", variant: "rose", hex: "#f43f5e" }
];
var TAG_ICONS = Object.keys(tag_icon_map);
function tag_color_label_key(variant) {
  return `common.color_${variant}`;
}
function tag_icon_label_key(icon) {
  return `common.tag_icon_${String(icon).replace(/-/g, "_")}`;
}
function hex_to_variant(hex) {
  const preset = TAG_COLOR_PRESETS.find(
    (p) => p.hex.toLowerCase() === hex.toLowerCase()
  );
  return preset?.variant ?? "custom";
}

// src/snooze_badge/snooze_badge.tsx
import * as React43 from "react";
import { jsx as jsx75 } from "react/jsx-runtime";
var default_snooze_time_units = {
  now: "Now",
  days_short: "d",
  hours_short: "h",
  minutes_short: "m"
};
function format_snooze_time_remaining(target, units = default_snooze_time_units) {
  const now = /* @__PURE__ */ new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) {
    return units.now;
  }
  const minutes = Math.max(1, Math.floor(diff / 6e4));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const day_unit = units.days_short;
  const hour_unit = units.hours_short;
  const minute_unit = units.minutes_short;
  if (days > 0) {
    const remaining_hours = hours % 24;
    if (remaining_hours > 0 && days < 7) {
      return `${days}${day_unit} ${remaining_hours}${hour_unit}`;
    }
    return `${days}${day_unit}`;
  }
  if (hours > 0) {
    const remaining_minutes = minutes % 60;
    if (remaining_minutes > 0 && hours < 12) {
      return `${hours}${hour_unit} ${remaining_minutes}${minute_unit}`;
    }
    return `${hours}${hour_unit}`;
  }
  return `${minutes}${minute_unit}`;
}
function get_update_interval(target) {
  const now = /* @__PURE__ */ new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) {
    return 0;
  }
  if (diff <= 5 * 60 * 1e3) {
    return 10 * 1e3;
  }
  if (diff <= 60 * 60 * 1e3) {
    return 30 * 1e3;
  }
  return 60 * 1e3;
}
function SnoozeBadge({
  snoozed_until,
  muted = false,
  size = "default",
  className,
  units = default_snooze_time_units
}) {
  const target_date = React43.useMemo(
    () => new Date(snoozed_until),
    [snoozed_until]
  );
  const [time_remaining, set_time_remaining] = React43.useState(
    () => format_snooze_time_remaining(target_date, units)
  );
  React43.useEffect(() => {
    set_time_remaining(format_snooze_time_remaining(target_date, units));
    const update_time = () => {
      set_time_remaining(format_snooze_time_remaining(target_date, units));
    };
    let interval_id = null;
    const schedule_next_update = () => {
      const interval = get_update_interval(target_date);
      if (interval > 0) {
        interval_id = window.setInterval(() => {
          update_time();
          const new_interval = get_update_interval(target_date);
          if (new_interval !== interval && interval_id !== null) {
            window.clearInterval(interval_id);
            schedule_next_update();
          }
        }, interval);
      }
    };
    schedule_next_update();
    return () => {
      if (interval_id !== null) {
        window.clearInterval(interval_id);
      }
    };
  }, [target_date, units]);
  return /* @__PURE__ */ jsx75(
    EmailTag,
    {
      className: cn(className),
      label: time_remaining,
      muted,
      size,
      variant: "snoozed"
    }
  );
}

// src/error_boundary/error_boundary.tsx
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { jsx as jsx76, jsxs as jsxs59 } from "react/jsx-runtime";
function format_error_text(error) {
  return `${error.message}${error.stack ? `

${error.stack}` : ""}`;
}
function ErrorDetailsView({
  error,
  title,
  copy_label,
  on_copy
}) {
  return /* @__PURE__ */ jsxs59(
    "div",
    {
      className: "mt-6 max-w-lg w-full rounded-lg overflow-hidden",
      style: {
        backgroundColor: "var(--bg-tertiary)",
        border: "1px solid var(--border-secondary)"
      },
      children: [
        /* @__PURE__ */ jsxs59(
          "div",
          {
            className: "px-3 py-2 flex items-center justify-between",
            style: { borderBottom: "1px solid var(--border-secondary)" },
            children: [
              /* @__PURE__ */ jsx76(
                "span",
                {
                  className: "text-xs font-medium",
                  style: { color: "var(--text-muted)" },
                  children: title
                }
              ),
              /* @__PURE__ */ jsx76("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsxs59(
                "button",
                {
                  className: "flex items-center gap-1.5 px-2 py-1 rounded-[12px] text-xs transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06]",
                  style: { color: "var(--text-muted)" },
                  type: "button",
                  onClick: () => on_copy?.(format_error_text(error)),
                  children: [
                    /* @__PURE__ */ jsx76(ClipboardDocumentIcon, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsx76("span", { children: copy_label })
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsx76("div", { className: "p-3 overflow-auto max-h-40", children: /* @__PURE__ */ jsxs59(
          "pre",
          {
            className: "text-xs whitespace-pre-wrap break-words font-mono",
            style: { color: "var(--text-secondary)" },
            children: [
              error.message,
              error.stack && `

${error.stack}`
            ]
          }
        ) })
      ]
    }
  );
}
function ErrorBoundaryView({
  error,
  title,
  description,
  retry_label,
  status_label,
  details_title,
  copy_label,
  logo_src = "/text_logo.png",
  logo_alt = "Aster",
  on_retry,
  on_view_status,
  on_copy_error
}) {
  return /* @__PURE__ */ jsxs59(
    "div",
    {
      className: "absolute inset-0 flex flex-col items-center justify-center p-6 text-center",
      style: { color: "var(--text-secondary)" },
      children: [
        /* @__PURE__ */ jsx76(
          "img",
          {
            alt: logo_alt,
            className: "h-10 mb-4",
            draggable: false,
            src: logo_src
          }
        ),
        /* @__PURE__ */ jsx76(
          "div",
          {
            className: "text-[15px] font-semibold mb-1.5",
            style: { color: "var(--text-primary)" },
            children: title
          }
        ),
        /* @__PURE__ */ jsx76("div", { className: "text-[13px] leading-relaxed max-w-[420px] mb-5", children: description }),
        /* @__PURE__ */ jsxs59("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx76(Button, { size: "md", variant: "depth", onClick: on_retry, children: retry_label }),
          /* @__PURE__ */ jsx76(Button, { size: "md", variant: "secondary", onClick: on_view_status, children: status_label })
        ] }),
        error && /* @__PURE__ */ jsx76(
          ErrorDetailsView,
          {
            copy_label,
            error,
            title: details_title,
            on_copy: on_copy_error
          }
        )
      ]
    }
  );
}
function EmailErrorFallbackView({
  title,
  description,
  retry_label,
  on_retry
}) {
  return /* @__PURE__ */ jsxs59(
    "div",
    {
      className: "flex flex-col items-center justify-center h-full p-8 text-center",
      style: { color: "var(--text-secondary)" },
      children: [
        /* @__PURE__ */ jsx76(
          "div",
          {
            className: "text-base font-medium mb-2",
            style: { color: "var(--text-primary)" },
            children: title
          }
        ),
        /* @__PURE__ */ jsx76("div", { className: "text-sm mb-4 max-w-md", children: description }),
        on_retry && /* @__PURE__ */ jsx76(
          "button",
          {
            className: "px-4 py-2 text-sm rounded-[14px] transition-colors",
            style: {
              backgroundColor: "var(--accent-color)",
              color: "white"
            },
            onClick: on_retry,
            children: retry_label
          }
        )
      ]
    }
  );
}
function ComposeErrorFallbackView({
  title,
  description
}) {
  return /* @__PURE__ */ jsxs59(
    "div",
    {
      className: "flex flex-col items-center justify-center h-64 p-8 text-center",
      style: { color: "var(--text-secondary)" },
      children: [
        /* @__PURE__ */ jsx76(
          "div",
          {
            className: "text-base font-medium mb-2",
            style: { color: "var(--text-primary)" },
            children: title
          }
        ),
        /* @__PURE__ */ jsx76("div", { className: "text-sm mb-4 max-w-md", children: description })
      ]
    }
  );
}
function ChunkRecoveryFallbackView({
  label
}) {
  return /* @__PURE__ */ jsxs59(
    "div",
    {
      className: "absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center",
      style: { color: "var(--text-secondary)" },
      children: [
        /* @__PURE__ */ jsx76(
          "span",
          {
            className: "rounded-full border-2 border-t-transparent animate-spin motion-reduce:animate-none",
            style: {
              width: "22px",
              height: "22px",
              borderColor: "var(--accent-color, #3b82f6)",
              borderTopColor: "transparent"
            }
          }
        ),
        /* @__PURE__ */ jsx76("div", { className: "text-[13px]", children: label })
      ]
    }
  );
}

// src/profile_dropdown/profile_dropdown.tsx
import * as React44 from "react";
import {
  UserPlusIcon,
  UserMinusIcon,
  DocumentTextIcon,
  EnvelopeIcon as EnvelopeIcon2,
  NoSymbolIcon as NoSymbolIcon2,
  ClipboardDocumentIcon as ClipboardDocumentIcon2
} from "@heroicons/react/24/outline";
import { Fragment as Fragment15, jsx as jsx77, jsxs as jsxs60 } from "react/jsx-runtime";
function ProfileDropdownView({
  email,
  display_name,
  domain,
  children,
  avatar,
  notes,
  labels,
  open,
  on_open_change,
  is_contact,
  is_contact_loading = false,
  is_blocking = false,
  show_notes,
  on_prewarm,
  on_copy_email,
  on_contact_action,
  on_toggle_notes,
  on_messages_from_sender,
  on_block_sender
}) {
  const [address_expanded, set_address_expanded] = React44.useState(false);
  React44.useEffect(() => {
    set_address_expanded(false);
  }, [email, open]);
  return /* @__PURE__ */ jsxs60(DropdownMenu, { open, onOpenChange: on_open_change, children: [
    /* @__PURE__ */ jsx77(
      DropdownMenuTrigger,
      {
        asChild: true,
        onFocus: on_prewarm,
        onPointerDown: on_prewarm,
        onPointerEnter: on_prewarm,
        children
      }
    ),
    /* @__PURE__ */ jsxs60(
      DropdownMenuContent,
      {
        align: "start",
        className: "w-64",
        onClick: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ jsxs60("div", { className: "px-3 pt-3 pb-2", children: [
            /* @__PURE__ */ jsxs60("div", { className: "flex items-center gap-3", children: [
              avatar,
              /* @__PURE__ */ jsxs60("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsx77("p", { className: "text-[13px] font-medium truncate text-txt-primary", children: display_name }),
                domain && /* @__PURE__ */ jsx77("p", { className: "text-[11px] truncate text-txt-muted", children: domain })
              ] })
            ] }),
            /* @__PURE__ */ jsxs60("div", { className: "mt-2 w-full flex items-center gap-1.5 px-2 py-1.5 rounded-[12px] text-[12px] border text-txt-secondary border-edge-secondary bg-surf-secondary", children: [
              /* @__PURE__ */ jsx77(
                "button",
                {
                  className: `flex-1 min-w-0 text-start ${address_expanded ? "whitespace-normal break-all" : "truncate"}`,
                  title: email,
                  type: "button",
                  onClick: () => set_address_expanded((current) => !current),
                  children: email
                }
              ),
              /* @__PURE__ */ jsx77(
                "button",
                {
                  "aria-label": labels.copy,
                  className: "flex-shrink-0 opacity-60 transition-opacity hover:opacity-100",
                  title: labels.copy,
                  type: "button",
                  onClick: on_copy_email,
                  children: /* @__PURE__ */ jsx77(ClipboardDocumentIcon2, { className: "w-3 h-3" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx77(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx77(
            DropdownMenuItem,
            {
              className: "gap-2 cursor-pointer",
              disabled: is_contact_loading,
              onClick: on_contact_action,
              children: is_contact ? /* @__PURE__ */ jsxs60(Fragment15, { children: [
                /* @__PURE__ */ jsx77(UserMinusIcon, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx77("span", { children: labels.remove_from_contacts })
              ] }) : /* @__PURE__ */ jsxs60(Fragment15, { children: [
                /* @__PURE__ */ jsx77(UserPlusIcon, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx77("span", { children: labels.add_to_contacts })
              ] })
            }
          ),
          /* @__PURE__ */ jsxs60(
            DropdownMenuItem,
            {
              className: "gap-2 cursor-pointer",
              onSelect: (e) => {
                e.preventDefault();
                on_toggle_notes();
              },
              children: [
                /* @__PURE__ */ jsx77(DocumentTextIcon, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx77("span", { children: show_notes ? labels.hide_notes : labels.notes })
              ]
            }
          ),
          show_notes && /* @__PURE__ */ jsx77(
            "div",
            {
              className: "mx-1 my-1 rounded-md overflow-hidden",
              onClick: (e) => e.stopPropagation(),
              children: notes
            }
          ),
          /* @__PURE__ */ jsx77(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs60(
            DropdownMenuItem,
            {
              className: "gap-2 cursor-pointer",
              onClick: on_messages_from_sender,
              children: [
                /* @__PURE__ */ jsx77(EnvelopeIcon2, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx77("span", { children: labels.messages_from_sender })
              ]
            }
          ),
          /* @__PURE__ */ jsx77(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs60(
            DropdownMenuItem,
            {
              className: "gap-2 cursor-pointer text-red-500 focus:text-red-500 focus:bg-red-500/10",
              disabled: is_blocking,
              onClick: on_block_sender,
              children: [
                /* @__PURE__ */ jsx77(NoSymbolIcon2, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx77("span", { children: labels.block_sender })
              ]
            }
          )
        ]
      }
    )
  ] });
}

// src/account_switcher/account_switcher.tsx
import * as React45 from "react";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { jsx as jsx78, jsxs as jsxs61 } from "react/jsx-runtime";
function PanelToggleIcon({
  direction,
  className
}) {
  return /* @__PURE__ */ jsxs61(
    "svg",
    {
      "aria-hidden": "true",
      className: `${className ?? ""} rtl:-scale-x-100`,
      fill: "none",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx78(
          "rect",
          {
            height: "16",
            rx: "3.5",
            stroke: "currentColor",
            strokeWidth: "1.6",
            width: "18",
            x: "3",
            y: "4"
          }
        ),
        /* @__PURE__ */ jsx78("path", { d: "M9.5 4.8V19.2", stroke: "currentColor", strokeWidth: "1.6" }),
        /* @__PURE__ */ jsx78(
          "path",
          {
            d: direction === "collapse" ? "M17 9.5 14 12l3 2.5" : "M14 9.5l3 2.5-3 2.5",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.6"
          }
        )
      ]
    }
  );
}
var AccountSwitcherView = React45.memo(function AccountSwitcherView2({
  is_collapsed,
  storage,
  labels,
  on_invite,
  on_toggle_collapse
}) {
  return /* @__PURE__ */ jsx78("div", { className: "mt-auto flex-shrink-0", children: /* @__PURE__ */ jsxs61(
    "div",
    {
      className: `${is_collapsed ? "px-2" : "px-3"} pb-[max(0.75rem,env(safe-area-inset-bottom))]`,
      children: [
        !is_collapsed && storage,
        is_collapsed ? /* @__PURE__ */ jsxs61("div", { className: "flex flex-col items-center gap-0.5", children: [
          /* @__PURE__ */ jsx78(Tooltip, { tip: labels.invite, children: /* @__PURE__ */ jsx78(
            "button",
            {
              "aria-label": labels.invite,
              className: "sidebar-rail-btn",
              type: "button",
              onClick: on_invite,
              children: /* @__PURE__ */ jsx78(UserGroupIcon, { className: "w-5 h-5" })
            }
          ) }),
          on_toggle_collapse && /* @__PURE__ */ jsx78(Tooltip, { tip: labels.expand_sidebar, children: /* @__PURE__ */ jsx78(
            "button",
            {
              "aria-label": labels.expand_sidebar,
              className: "sidebar-rail-btn",
              type: "button",
              onClick: on_toggle_collapse,
              children: /* @__PURE__ */ jsx78(PanelToggleIcon, { className: "w-5 h-5", direction: "expand" })
            }
          ) })
        ] }) : /* @__PURE__ */ jsxs61("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxs61(
            "button",
            {
              className: "flex-1 flex items-center gap-2 px-2 py-1.5 rounded-[12px] text-[12px] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] text-txt-muted",
              type: "button",
              onClick: on_invite,
              children: [
                /* @__PURE__ */ jsx78(UserGroupIcon, { className: "w-3.5 h-3.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx78("span", { className: "truncate", children: labels.invite })
              ]
            }
          ),
          on_toggle_collapse && /* @__PURE__ */ jsx78(Tooltip, { tip: labels.collapse_sidebar, children: /* @__PURE__ */ jsx78(
            "button",
            {
              "aria-label": labels.collapse_sidebar,
              className: "flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-[10px] hover:bg-black/[0.06] dark:hover:bg-white/[0.06] text-txt-muted transition-colors",
              type: "button",
              onClick: on_toggle_collapse,
              children: /* @__PURE__ */ jsx78(
                PanelToggleIcon,
                {
                  className: "w-[18px] h-[18px]",
                  direction: "collapse"
                }
              )
            }
          ) })
        ] })
      ]
    }
  ) });
});

// src/workspace_switcher/workspace_switcher.tsx
import * as React46 from "react";
import {
  ArrowPathIcon as ArrowPathIcon2,
  ArrowRightStartOnRectangleIcon,
  PlusIcon as PlusIcon2,
  PowerIcon
} from "@heroicons/react/24/outline";
import { Fragment as Fragment16, jsx as jsx79, jsxs as jsxs62 } from "react/jsx-runtime";
function account_badge(badge) {
  if (!badge) return null;
  return /* @__PURE__ */ jsx79(
    "span",
    {
      className: badge.muted ? "account_menu_badge account_menu_badge_muted" : "account_menu_badge",
      children: badge.label
    }
  );
}
function WorkspaceSwitcherView({
  align = "start",
  trigger,
  is_open,
  on_open_change,
  labels,
  header_avatar,
  greeting,
  display_name,
  email,
  is_official = false,
  official_badge_src = "/official_badge.webp",
  plan_badge,
  storage_used_text,
  storage_percent,
  accounts,
  hub_accounts = [],
  show_resubscribe = false,
  add_account_dimmed = false,
  add_account_meta,
  show_sign_out_all = false,
  on_copy_email,
  on_manage_account,
  on_switch_account,
  on_hub_account,
  on_resubscribe,
  on_add_account,
  on_sign_out,
  on_sign_out_all
}) {
  const popover_ref = React46.useRef(null);
  const pointer_close_ref = React46.useRef(false);
  const row_count = accounts.length + hub_accounts.length;
  return /* @__PURE__ */ jsx79(Fragment16, { children: /* @__PURE__ */ jsxs62(Popover, { open: is_open, onOpenChange: on_open_change, children: [
    /* @__PURE__ */ jsx79(PopoverTrigger, { asChild: true, children: trigger }),
    /* @__PURE__ */ jsxs62(
      PopoverContent,
      {
        ref: popover_ref,
        align,
        className: "account_menu_surface w-[352px] max-w-[calc(100vw-24px)] p-2 rounded-[24px] data-[state=closed]:animate-none data-[state=closed]:zoom-out-100 data-[state=closed]:slide-in-from-top-0",
        sideOffset: 8,
        style: {
          boxShadow: "0 18px 40px -12px rgba(0, 0, 0, 0.5), 0 4px 12px -4px rgba(0, 0, 0, 0.3)"
        },
        onCloseAutoFocus: (e) => {
          if (pointer_close_ref.current) e.preventDefault();
          pointer_close_ref.current = false;
        },
        onOpenAutoFocus: (e) => {
          e.preventDefault();
          pointer_close_ref.current = false;
          popover_ref.current?.focus();
        },
        onPointerDownOutside: () => {
          pointer_close_ref.current = true;
        },
        children: [
          /* @__PURE__ */ jsxs62("div", { className: "account_menu_card rounded-[18px] px-4 py-4", children: [
            /* @__PURE__ */ jsxs62("div", { className: "flex items-center gap-3.5", children: [
              header_avatar,
              /* @__PURE__ */ jsxs62("div", { className: "flex flex-col min-w-0 flex-1 gap-0.5", children: [
                /* @__PURE__ */ jsx79(
                  "span",
                  {
                    className: "text-[12px] leading-tight",
                    style: { color: "var(--text-muted)" },
                    children: greeting
                  }
                ),
                /* @__PURE__ */ jsxs62("span", { className: "flex items-center gap-1.5 min-w-0", children: [
                  is_official && /* @__PURE__ */ jsx79(
                    "img",
                    {
                      alt: labels.official_sender,
                      className: "block h-4 w-4 flex-shrink-0",
                      draggable: false,
                      src: official_badge_src,
                      title: labels.official_sender
                    }
                  ),
                  /* @__PURE__ */ jsx79(
                    "span",
                    {
                      className: "min-w-0 flex-1 text-[15px] font-semibold leading-tight truncate",
                      style: { color: "var(--text-primary)" },
                      title: display_name,
                      children: display_name
                    }
                  ),
                  plan_badge
                ] }),
                /* @__PURE__ */ jsx79(
                  "button",
                  {
                    className: "text-[12px] leading-tight truncate text-start transition-colors hover:text-[var(--text-secondary)]",
                    style: { color: "var(--text-muted)" },
                    type: "button",
                    onClick: on_copy_email,
                    children: email
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx79(
              "button",
              {
                className: "account_menu_manage mt-3.5 w-full h-9 rounded-full text-[13px] font-medium transition-colors",
                type: "button",
                onClick: on_manage_account,
                children: labels.manage_account
              }
            ),
            /* @__PURE__ */ jsxs62("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsxs62("div", { className: "flex items-baseline justify-between mb-2", children: [
                /* @__PURE__ */ jsx79(
                  "span",
                  {
                    className: "whitespace-nowrap text-[12px] font-medium",
                    style: { color: "var(--text-secondary)" },
                    children: labels.storage_used
                  }
                ),
                storage_used_text ? /* @__PURE__ */ jsx79(
                  "span",
                  {
                    className: "truncate text-[12px] tabular-nums",
                    style: { color: "var(--text-muted)" },
                    children: storage_used_text
                  }
                ) : /* @__PURE__ */ jsx79(Skeleton, { className: "h-3 w-[92px] rounded-full" })
              ] }),
              storage_used_text ? /* @__PURE__ */ jsx79(
                "div",
                {
                  className: "h-1.5 w-full rounded-full overflow-hidden",
                  style: {
                    backgroundColor: "color-mix(in srgb, var(--text-primary) 18%, transparent)"
                  },
                  children: /* @__PURE__ */ jsx79(
                    "div",
                    {
                      className: "h-full rounded-full",
                      style: {
                        backgroundColor: storage_percent >= 90 ? "var(--color-danger)" : "var(--accent-color)",
                        minWidth: "10px",
                        width: `${storage_percent}%`
                      }
                    }
                  )
                }
              ) : /* @__PURE__ */ jsx79(Skeleton, { className: "h-1.5 w-full rounded-full" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs62("div", { className: "mt-2 flex flex-col gap-2", children: [
            row_count > 0 && /* @__PURE__ */ jsxs62(
              "div",
              {
                className: `flex flex-col gap-1.5 ${row_count > 4 ? "aster_scrollbar_thin max-h-[min(52vh,420px)] overflow-y-auto pe-0.5" : ""}`,
                children: [
                  accounts.map((acc) => /* @__PURE__ */ jsxs62(
                    "a",
                    {
                      draggable: true,
                      className: "account_menu_row group relative w-full h-[60px] flex-shrink-0 px-3.5 flex items-center gap-3.5 cursor-pointer no-underline rounded-[16px]",
                      href: acc.href,
                      onClick: (e) => {
                        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) {
                          return;
                        }
                        e.preventDefault();
                        on_switch_account(acc.id);
                      },
                      children: [
                        /* @__PURE__ */ jsx79(
                          "span",
                          {
                            className: `inline-flex leading-none flex-shrink-0 ${acc.has_plan_ring ? "plan_ring" : ""}`,
                            children: acc.avatar
                          }
                        ),
                        /* @__PURE__ */ jsxs62("div", { className: "flex flex-col min-w-0 flex-1 gap-0.5", children: [
                          /* @__PURE__ */ jsx79(
                            "span",
                            {
                              className: "text-[13px] font-medium leading-tight truncate",
                              style: { color: "var(--text-primary)" },
                              children: acc.name
                            }
                          ),
                          /* @__PURE__ */ jsx79(
                            "span",
                            {
                              className: "text-[11px] leading-tight truncate",
                              style: { color: "var(--text-muted)" },
                              children: acc.email
                            }
                          )
                        ] }),
                        account_badge(acc.badge)
                      ]
                    },
                    acc.id
                  )),
                  hub_accounts.map((acc) => /* @__PURE__ */ jsxs62(
                    "button",
                    {
                      className: "account_menu_row group relative w-full h-[60px] flex-shrink-0 px-3.5 flex items-center gap-3.5 rounded-[16px]",
                      type: "button",
                      onClick: () => on_hub_account?.(acc.id),
                      children: [
                        /* @__PURE__ */ jsx79("span", { className: "inline-flex leading-none flex-shrink-0", children: acc.avatar }),
                        /* @__PURE__ */ jsxs62("div", { className: "flex flex-col min-w-0 flex-1 gap-0.5 text-start", children: [
                          /* @__PURE__ */ jsx79(
                            "span",
                            {
                              className: "text-[13px] font-medium leading-tight truncate",
                              style: { color: "var(--text-primary)" },
                              children: acc.name
                            }
                          ),
                          /* @__PURE__ */ jsx79(
                            "span",
                            {
                              className: "text-[11px] leading-tight truncate",
                              style: { color: "var(--text-muted)" },
                              children: acc.email
                            }
                          )
                        ] }),
                        account_badge(acc.badge)
                      ]
                    },
                    acc.id
                  ))
                ]
              }
            ),
            show_resubscribe && /* @__PURE__ */ jsxs62(
              "button",
              {
                className: "account_menu_tile account_menu_tile_accent",
                type: "button",
                onClick: on_resubscribe,
                children: [
                  /* @__PURE__ */ jsx79("span", { className: "account_menu_tile_icon", children: /* @__PURE__ */ jsx79(ArrowPathIcon2, { className: "w-[18px] h-[18px]" }) }),
                  /* @__PURE__ */ jsx79("span", { className: "account_menu_tile_label", children: labels.resubscribe })
                ]
              }
            ),
            /* @__PURE__ */ jsxs62(
              "button",
              {
                className: `account_menu_tile ${add_account_dimmed ? "opacity-60" : ""}`,
                type: "button",
                onClick: on_add_account,
                children: [
                  /* @__PURE__ */ jsx79("span", { className: "account_menu_tile_icon", children: /* @__PURE__ */ jsx79(PlusIcon2, { className: "w-[18px] h-[18px]" }) }),
                  /* @__PURE__ */ jsx79("span", { className: "account_menu_tile_label", children: labels.add_account }),
                  add_account_meta == null ? null : /* @__PURE__ */ jsx79("span", { className: "account_menu_tile_meta tabular-nums", children: add_account_meta })
                ]
              }
            ),
            /* @__PURE__ */ jsxs62("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxs62(
                "button",
                {
                  className: "account_menu_tile account_menu_tile_danger flex-1",
                  type: "button",
                  onClick: on_sign_out,
                  children: [
                    /* @__PURE__ */ jsx79("span", { className: "account_menu_tile_icon", children: /* @__PURE__ */ jsx79(ArrowRightStartOnRectangleIcon, { className: "w-[18px] h-[18px]" }) }),
                    /* @__PURE__ */ jsx79("span", { className: "account_menu_tile_label", children: labels.sign_out })
                  ]
                }
              ),
              show_sign_out_all && /* @__PURE__ */ jsx79(Tooltip, { position: "top", tip: labels.sign_out_all, children: /* @__PURE__ */ jsx79(
                "button",
                {
                  "aria-label": labels.sign_out_all,
                  className: "account_menu_tile account_menu_tile_danger w-[54px] justify-center px-0",
                  type: "button",
                  onClick: on_sign_out_all,
                  children: /* @__PURE__ */ jsx79("span", { className: "account_menu_tile_icon", children: /* @__PURE__ */ jsx79(PowerIcon, { className: "w-[18px] h-[18px]" }) })
                }
              ) })
            ] })
          ] })
        ]
      }
    )
  ] }) });
}

// src/storage_meter/storage_meter.tsx
import * as React47 from "react";
import { Fragment as Fragment17, jsx as jsx80, jsxs as jsxs63 } from "react/jsx-runtime";
var StorageMeterView = React47.memo(function StorageMeterView2({
  storage_percentage,
  used_text,
  total_text,
  percent_text,
  is_loading = false,
  labels,
  on_buy_more,
  on_open,
  className = ""
}) {
  if (is_loading) {
    return /* @__PURE__ */ jsx80("div", { className, children: /* @__PURE__ */ jsx80(Skeleton, { className: "h-1.5 w-full rounded-full" }) });
  }
  const is_critical = storage_percentage >= 90;
  const meter_body = /* @__PURE__ */ jsxs63(Fragment17, { children: [
    /* @__PURE__ */ jsxs63("div", { className: "flex items-center justify-between mb-1", children: [
      /* @__PURE__ */ jsx80("span", { className: "text-[10px] font-medium tracking-wide text-txt-muted", children: labels.storage_used }),
      /* @__PURE__ */ jsx80(
        "span",
        {
          className: "text-[10px] tabular-nums font-medium",
          style: {
            color: is_critical ? "var(--color-danger)" : "var(--text-tertiary)"
          },
          children: storage_percentage > 0 && storage_percentage < 1 ? labels.under_one_percent : percent_text
        }
      )
    ] }),
    /* @__PURE__ */ jsx80(
      "div",
      {
        "aria-label": labels.storage_used,
        "aria-valuemax": 100,
        "aria-valuemin": 0,
        "aria-valuenow": Math.round(storage_percentage),
        className: "h-1.5 w-full rounded-full overflow-hidden",
        role: "progressbar",
        style: {
          backgroundColor: "color-mix(in srgb, var(--text-muted) 26%, transparent)"
        },
        children: /* @__PURE__ */ jsx80(
          "div",
          {
            className: "h-full rounded-full transition-all duration-300",
            style: {
              minWidth: "10px",
              width: `${storage_percentage}%`,
              backgroundColor: is_critical ? "var(--color-danger)" : "var(--accent-color)"
            }
          }
        )
      }
    )
  ] });
  return /* @__PURE__ */ jsxs63("div", { className, children: [
    on_open ? /* @__PURE__ */ jsx80(
      "button",
      {
        "aria-label": labels.open,
        className: "w-full text-left cursor-pointer rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-brand",
        title: labels.open,
        type: "button",
        onClick: on_open,
        children: meter_body
      }
    ) : meter_body,
    /* @__PURE__ */ jsxs63("div", { className: "flex items-center justify-between mt-1.5 gap-2", children: [
      /* @__PURE__ */ jsxs63("p", { className: "text-[9px] text-txt-muted truncate", children: [
        used_text,
        " ",
        labels.of,
        " ",
        total_text
      ] }),
      on_buy_more && /* @__PURE__ */ jsx80(
        "button",
        {
          className: "text-[9px] flex-shrink-0 text-txt-muted transition-colors hover:text-brand hover:underline focus:outline-none",
          type: "button",
          onClick: on_buy_more,
          children: labels.buy_more
        }
      )
    ] })
  ] });
});

// src/app_rail/app_rail.tsx
import * as React48 from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronRightIcon as ChevronRightIcon3
} from "@heroicons/react/24/outline";
import { Fragment as Fragment18, jsx as jsx81, jsxs as jsxs64 } from "react/jsx-runtime";
function AppRailViewComponent({
  panel,
  is_panel_visible,
  is_settings_view = false,
  is_hidden,
  items,
  labels,
  on_toggle_hidden
}) {
  const [failed_icons, set_failed_icons] = React48.useState({});
  const mark_icon_failed = React48.useCallback((key) => {
    set_failed_icons(
      (current) => current[key] ? current : { ...current, [key]: true }
    );
  }, []);
  return /* @__PURE__ */ jsxs64(Fragment18, { children: [
    /* @__PURE__ */ jsx81(
      "div",
      {
        className: `quick_panel_slot relative flex-shrink-0 ${is_panel_visible ? `mb-1 me-1 w-[min(320px,78vw)] md:mb-2 md:me-2 md:w-[clamp(272px,23vw,320px)] ${is_settings_view ? "mt-1 md:mt-2" : ""}` : "pointer-events-none w-0"}`,
        children: panel
      }
    ),
    is_hidden && /* @__PURE__ */ jsx81(
      "button",
      {
        "aria-label": labels.expand,
        className: "app_rail_popout absolute bottom-3 end-0 z-20 flex h-9 w-6 items-center justify-center rounded-s-lg",
        "data-rail-tip": labels.expand,
        "data-rail-tip-side": "left",
        type: "button",
        onClick: on_toggle_hidden,
        children: /* @__PURE__ */ jsx81(ChevronDoubleLeftIcon, { className: "h-4 w-4 rtl:rotate-180" })
      }
    ),
    /* @__PURE__ */ jsxs64(
      "div",
      {
        "aria-hidden": is_hidden,
        className: `app_rail_column flex shrink-0 flex-col items-center overflow-hidden pb-2 pt-2.5 ${is_hidden ? "pointer-events-none w-0 opacity-0" : "w-[52px] md:-ms-2"}`,
        children: [
          items.map((item, index) => /* @__PURE__ */ jsx81(
            "button",
            {
              "aria-expanded": item.selected,
              "aria-label": item.label,
              className: `app_rail_btn ${index > 0 ? "mt-1 " : ""}flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px]`,
              "data-rail-tip": item.selected ? void 0 : item.label,
              "data-rail-tip-side": "left",
              "data-selected": item.selected ? "true" : void 0,
              tabIndex: is_hidden ? -1 : void 0,
              type: "button",
              onClick: item.on_click,
              children: item.icon_src && !failed_icons[item.key] ? /* @__PURE__ */ jsx81(
                "img",
                {
                  alt: "",
                  "aria-hidden": "true",
                  className: "h-6 w-6 shrink-0 select-none",
                  decoding: "sync",
                  draggable: false,
                  height: 24,
                  loading: "eager",
                  src: item.icon_src,
                  srcSet: item.icon_src_set,
                  width: 24,
                  onError: () => mark_icon_failed(item.key)
                }
              ) : item.fallback_icon
            },
            item.key
          )),
          /* @__PURE__ */ jsx81(
            "button",
            {
              "aria-label": labels.collapse,
              className: "app_rail_toggle mt-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
              "data-rail-tip": labels.collapse,
              "data-rail-tip-side": "left",
              tabIndex: is_hidden ? -1 : void 0,
              type: "button",
              onClick: on_toggle_hidden,
              children: /* @__PURE__ */ jsx81(ChevronRightIcon3, { className: "h-4 w-4 rtl:rotate-180" })
            }
          )
        ]
      }
    )
  ] });
}
var AppRailView = React48.memo(AppRailViewComponent);
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccountAvatarButtonView,
  AccountSwitcherView,
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
  AppRailView,
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
  BADGE_VISUALS,
  Badge,
  BadgeChip,
  BadgeDot,
  Banner,
  Button,
  ButtonSpinner,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
  Checkbox,
  ChunkRecoveryFallbackView,
  CoinIcon,
  ColorVisionFilters,
  ComposeErrorFallbackView,
  ConfirmationModal,
  ContextMenu,
  CountBadge,
  CrownIcon,
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
  EmailErrorFallbackView,
  EmailTag,
  EmptyState,
  ErrorBanner,
  ErrorBoundaryView,
  ErrorDetailsView,
  ExternalLinkWarningModal,
  FaviconOrInitial,
  FeatureCard,
  FieldHint,
  FieldLabel,
  FullPageLoader,
  InfoPopover,
  Input,
  Island,
  IslandBlock,
  IslandChip,
  IslandCountPill,
  IslandDivider,
  IslandEmpty,
  IslandGrid,
  IslandIconButton,
  IslandLink,
  IslandPage,
  IslandRow,
  IslandSection,
  IslandSections,
  IslandStack,
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
  OtpInput,
  PROFILE_AVATAR_SIZE_MAP,
  PanelToggleIcon,
  PillButton,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
  PricingCard,
  ProfileAvatarView,
  ProfileDropdownView,
  Progress,
  Radio,
  RadioGroup,
  RadioGroupItem,
  RadioRowWithDescription,
  RadixContextMenu,
  RadixContextMenuCheckboxItem,
  RadixContextMenuContent,
  RadixContextMenuGroup,
  RadixContextMenuItem,
  RadixContextMenuLabel,
  RadixContextMenuPortal,
  RadixContextMenuRadioGroup,
  RadixContextMenuRadioItem,
  RadixContextMenuSeparator,
  RadixContextMenuSub,
  RadixContextMenuSubContent,
  RadixContextMenuSubTrigger,
  RadixContextMenuTrigger,
  SearchBar,
  SegmentedToggle,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator4 as Separator,
  SettingControlRow,
  SettingNote,
  SettingRow,
  SettingToggleRow,
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
  Slider,
  SnoozeBadge,
  SparkleOverlay,
  Spinner,
  StatCard,
  StorageIndicator,
  StorageMeterView,
  Switch,
  TAG_COLOR_PRESETS,
  TAG_ICONS,
  TAG_ICON_GROUPS,
  TestimonialCard,
  TextRoller,
  ThemeCard,
  ThemeMockupDark,
  ThemeMockupLight,
  Tooltip,
  TooltipDotted,
  TooltipRich,
  UiStringsProvider,
  UpgradeBtn,
  UpgradeOverlay,
  ViewMockupFullpage,
  ViewMockupPopup,
  ViewMockupSplit,
  ViewModeCard,
  WorkspaceSwitcherView,
  accordion_variants,
  avatar_variants,
  badge_variants,
  button_tap,
  button_variants,
  card_variants,
  cn,
  default_snooze_time_units,
  default_ui_strings,
  dismiss_toast,
  email_tag_variants,
  fade_up_item,
  format_error_text,
  format_find_order,
  format_snooze_time_remaining,
  format_ui_string,
  get_auth_alert_styles,
  get_auth_primary_button_style,
  get_badge_visual,
  has_open_overlay_layer,
  hex_to_variant,
  is_top_overlay_layer,
  kbd_variants,
  lock_body_scroll,
  marquee_variants,
  motion_duration_base,
  motion_duration_fast,
  motion_duration_slow,
  motion_ease_standard,
  page_slide_transition,
  push_overlay_layer,
  remove_overlay_layer,
  show_toast,
  stagger_container,
  switch_variants,
  tag_color_label_key,
  tag_icon_label_key,
  tag_icon_map,
  unlock_body_scroll,
  use_backdrop_dismiss,
  use_body_scroll_lock,
  use_dialog_shell,
  use_escape_layer,
  use_focus_trap,
  use_overlay_layer,
  use_should_reduce_motion,
  use_ui_strings
};

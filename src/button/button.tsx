//
// Aster Communications Inc.
//
// Copyright (c) 2026 Aster Communications Inc.
//
// This file is part of this project.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.
//

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonSpinner } from "../spinner";

const button_variants = cva("aster_btn", {
  variants: {
    variant: {
      primary: "aster_btn_primary",
      secondary: "aster_btn_secondary",
      outline: "aster_btn_outline",
      ghost: "aster_btn_ghost",
      destructive: "aster_btn_destructive",
      depth: "aster_btn_depth",
      depth_destructive: "aster_btn_depth_destructive",
      upgrade: "aster_btn_upgrade",
    },
    size: {
      xl: "aster_btn_xl",
      lg: "aster_btn_lg",
      md: "aster_btn_md",
      sm: "aster_btn_sm",
      icon: "aster_btn_icon",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "lg",
  },
});

type ButtonVariantProps = VariantProps<typeof button_variants>;

type LoadingPosition = "replace" | "before" | "after";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  as_child?: boolean;
  is_loading?: boolean;
  loading_position?: LoadingPosition;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      as_child = false,
      is_loading = false,
      loading_position,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = as_child ? Slot : "button";
    const class_name = button_variants({ variant, size, className });

    if (!is_loading || as_child) {
      return (
        <Comp className={class_name} disabled={disabled} ref={ref} {...props}>
          {children}
        </Comp>
      );
    }

    const has_label = React.Children.toArray(children).length > 0;
    const keep_centered =
      !has_label || size === "icon" || loading_position === "replace";

    return (
      <Comp
        className={class_name}
        ref={ref}
        {...props}
        aria-busy
        data-loading
        disabled={disabled || is_loading}
      >
        {keep_centered ? null : children}
        <ButtonSpinner
          centered={keep_centered}
          size={size === "sm" ? "xs" : "sm"}
        />
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, button_variants };
export type { ButtonProps, ButtonVariantProps };

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
import { Spinner } from "../spinner";

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
      loading_position = "replace",
      disabled,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = as_child ? Slot : "button";
    const effective_disabled = disabled || is_loading;
    const handle_click: React.MouseEventHandler<HTMLButtonElement> | undefined =
      is_loading
        ? (event) => {
            event.preventDefault();
            event.stopPropagation();
          }
        : onClick;

    let content: React.ReactNode = children;
    if (is_loading && !as_child) {
      if (loading_position === "replace") {
        content = <Spinner size="sm" />;
      } else if (loading_position === "before") {
        content = (
          <>
            <Spinner size="sm" />
            {children}
          </>
        );
      } else {
        content = (
          <>
            {children}
            <Spinner size="sm" />
          </>
        );
      }
    }

    return (
      <Comp
        className={button_variants({ variant, size, className })}
        ref={ref}
        disabled={effective_disabled}
        aria-busy={is_loading || undefined}
        data-loading={is_loading || undefined}
        onClick={handle_click}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, button_variants };
export type { ButtonProps, ButtonVariantProps };

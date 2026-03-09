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
import { cva, type VariantProps } from "class-variance-authority";

const badge_variants = cva("aster_badge", {
  variants: {
    color: {
      blue: "aster_badge_blue",
      green: "aster_badge_green",
      purple: "aster_badge_purple",
      amber: "aster_badge_amber",
      gray: "aster_badge_gray",
      red: "aster_badge_red",
    },
    size: {
      default: "",
      lg: "aster_badge_lg",
    },
  },
  defaultVariants: {
    color: "blue",
    size: "default",
  },
});

type BadgeVariantProps = VariantProps<typeof badge_variants>;

interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    BadgeVariantProps {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, color, size, ...props }, ref) => {
    return (
      <span
        className={badge_variants({ color, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

const dot_color_map: Record<string, string> = {
  blue: "aster_badge_dot aster_badge_dot_blue",
  green: "aster_badge_dot aster_badge_dot_green",
  amber: "aster_badge_dot aster_badge_dot_amber",
  red: "aster_badge_dot aster_badge_dot_red",
  gray: "aster_badge_dot aster_badge_dot_gray",
};

interface BadgeDotProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> {
  color?: "blue" | "green" | "amber" | "red" | "gray";
}

const BadgeDot = React.forwardRef<HTMLSpanElement, BadgeDotProps>(
  ({ color = "gray", className, ...props }, ref) => {
    const classes = [dot_color_map[color], className].filter(Boolean).join(" ");
    return <span className={classes} ref={ref} {...props} />;
  }
);

BadgeDot.displayName = "BadgeDot";

export { Badge, BadgeDot, badge_variants };
export type { BadgeProps, BadgeVariantProps, BadgeDotProps };

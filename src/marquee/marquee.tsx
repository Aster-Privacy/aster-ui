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

const marquee_variants = cva("aster_marquee", {
  variants: {
    variant: {
      default: "",
      dark: "aster_marquee_dark",
    },
    fade: {
      true: "aster_marquee_fade",
      false: "",
    },
    pause_on_hover: {
      true: "aster_marquee_hover_pause",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    fade: false,
    pause_on_hover: false,
  },
});

type MarqueeVariantProps = VariantProps<typeof marquee_variants>;

type MarqueeProps = React.HTMLAttributes<HTMLDivElement> & MarqueeVariantProps;

interface MarqueeTrackProps extends React.HTMLAttributes<HTMLDivElement> {
  reverse?: boolean;
  speed?: "slow" | "default" | "fast";
}

interface MarqueeLogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: React.ReactNode;
}

const speed_class_map: Record<string, string | undefined> = {
  fast: "aster_marquee_fast",
  slow: "aster_marquee_slow",
};

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  ({ className, variant, fade, pause_on_hover, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={marquee_variants({
          variant,
          fade,
          pause_on_hover,
          className,
        })}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Marquee.displayName = "Marquee";

const MarqueeTrack = React.forwardRef<HTMLDivElement, MarqueeTrackProps>(
  (
    { className, reverse = false, speed = "default", children, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={[
          "aster_marquee_track",
          reverse && "aster_marquee_reverse",
          speed_class_map[speed],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        <div className="aster_marquee_slide">{children}</div>
        <div className="aster_marquee_slide" aria-hidden="true">
          {children}
        </div>
      </div>
    );
  },
);

MarqueeTrack.displayName = "MarqueeTrack";

const MarqueeLogo = React.forwardRef<HTMLSpanElement, MarqueeLogoProps>(
  ({ className, icon, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={["aster_marquee_logo", className]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {icon && <span className="aster_marquee_logo_icon">{icon}</span>}
        {children}
      </span>
    );
  },
);

MarqueeLogo.displayName = "MarqueeLogo";

export { Marquee, MarqueeTrack, MarqueeLogo, marquee_variants };
export type {
  MarqueeProps,
  MarqueeVariantProps,
  MarqueeTrackProps,
  MarqueeLogoProps,
};

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

type TooltipPosition = "top" | "bottom" | "left" | "right";

const position_class_map: Record<TooltipPosition, string> = {
  top: "aster_tip_top",
  bottom: "aster_tip_bottom",
  left: "aster_tip_left",
  right: "aster_tip_right",
};

interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  tip: string;
  position?: TooltipPosition;
  dark?: boolean;
  children: React.ReactNode;
}

const Tooltip = React.forwardRef<HTMLSpanElement, TooltipProps>(
  ({ tip, position = "top", dark, className, children, ...props }, ref) => {
    const classes = [
      position_class_map[position],
      dark && "aster_tip_dark",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <span className={classes} data-tip={tip} ref={ref} {...props}>
        {children}
      </span>
    );
  }
);

Tooltip.displayName = "Tooltip";

interface TooltipDottedProps extends React.HTMLAttributes<HTMLSpanElement> {
  tip: string;
  children: React.ReactNode;
}

const TooltipDotted = React.forwardRef<HTMLSpanElement, TooltipDottedProps>(
  ({ tip, className, children, ...props }, ref) => {
    const classes = ["aster_tip_dotted", className].filter(Boolean).join(" ");
    return (
      <span className={classes} data-tip={tip} ref={ref} {...props}>
        {children}
      </span>
    );
  }
);

TooltipDotted.displayName = "TooltipDotted";

interface TooltipRichProps extends React.HTMLAttributes<HTMLSpanElement> {
  title: string;
  description: string;
  children: React.ReactNode;
}

const TooltipRich = React.forwardRef<HTMLSpanElement, TooltipRichProps>(
  ({ title, description, className, children, ...props }, ref) => {
    const classes = ["aster_tip_rich_wrap", className]
      .filter(Boolean)
      .join(" ");

    return (
      <span className={classes} ref={ref} {...props}>
        {children}
        <span className="aster_tip_rich">
          <span className="aster_tip_rich_title">{title}</span>
          <span className="aster_tip_rich_desc">{description}</span>
        </span>
      </span>
    );
  }
);

TooltipRich.displayName = "TooltipRich";

export { Tooltip, TooltipDotted, TooltipRich };
export type {
  TooltipProps,
  TooltipDottedProps,
  TooltipRichProps,
  TooltipPosition,
};

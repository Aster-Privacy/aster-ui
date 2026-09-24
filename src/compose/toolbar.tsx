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

import { Tooltip, type TooltipPosition } from "../tooltip/tooltip";

export const COMPOSE_ICON_PATHS = {
  formatting:
    "M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zm2.5-6.13L13.87 11h-3.74L12 6.67z",
  plain_text: "M4 5h16v2H4V5zm0 4h16v2H4V9zm0 4h10v2H4v-2zm0 4h10v2H4v-2z",
  attach:
    "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z",
  link: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z",
  emoji:
    "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z",
  trash:
    "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
  bold: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z",
  italic: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z",
  underline:
    "M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z",
  strikethrough: "M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z",
  bullet_list:
    "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z",
  numbered_list:
    "M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z",
  quote:
    "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z",
  remove_formatting:
    "M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z",
  saved: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
} as const;

export type ComposeIconName = keyof typeof COMPOSE_ICON_PATHS;

export interface ComposeIconProps extends React.SVGProps<SVGSVGElement> {
  name: ComposeIconName;
}

export function ComposeIcon({ name, className, ...props }: ComposeIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className ? `aster_compose_icon ${className}` : "aster_compose_icon"}
      fill="currentColor"
      focusable="false"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d={COMPOSE_ICON_PATHS[name]} />
    </svg>
  );
}

export interface ToolbarButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick" | "title"> {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  title?: string;
  tooltip_position?: TooltipPosition;
}

export const ToolbarButton = React.forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  (
    { onClick, children, disabled, active, title, tooltip_position = "top", className, ...props },
    ref,
  ) => {
    const button = (
      <button
        ref={ref}
        className={className ? `aster_compose_tool ${className}` : "aster_compose_tool"}
        data-active={active || undefined}
        disabled={disabled}
        type="button"
        onClick={onClick}
        onMouseDown={(e) => e.preventDefault()}
        {...props}
      >
        {children}
      </button>
    );

    if (!title) return button;

    return (
      <Tooltip position={tooltip_position} tip={title}>
        {button}
      </Tooltip>
    );
  },
);

ToolbarButton.displayName = "ToolbarButton";

export function ToolbarDivider() {
  return <div className="aster_compose_divider" />;
}

export interface ComposeToolbarLayoutProps {
  format_bar?: React.ReactNode;
  format_bar_label?: string;
  primary: React.ReactNode;
  tools?: React.ReactNode;
  end?: React.ReactNode;
  className?: string;
}

export function ComposeToolbarLayout({
  format_bar,
  format_bar_label,
  primary,
  tools,
  end,
  className,
}: ComposeToolbarLayoutProps) {
  return (
    <div className={className ? `aster_compose_toolbar ${className}` : "aster_compose_toolbar"}>
      {format_bar ? (
        <div aria-label={format_bar_label} className="aster_compose_format_row" role="toolbar">
          {format_bar}
        </div>
      ) : null}
      <div className="aster_compose_bar">
        {primary}
        <div className="aster_compose_tools">{tools}</div>
        <div className="aster_compose_end">{end}</div>
      </div>
    </div>
  );
}

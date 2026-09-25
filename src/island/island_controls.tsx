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

function join_classes(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export type PillVariant = "filled" | "outline" | "tonal" | "neutral" | "ghost" | "danger";
export type PillSize = "sm" | "md" | "lg";

export interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: PillVariant;
  size?: PillSize;
  block?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}

export const PillButton = React.forwardRef<HTMLButtonElement, PillButtonProps>(
  (
    {
      variant = "filled",
      size = "md",
      block = false,
      leading,
      trailing,
      className,
      type = "button",
      children,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      className={join_classes(
        "aster_pill",
        `aster_pill_${variant}`,
        size !== "md" && `aster_pill_${size}`,
        block && "aster_pill_block",
        className,
      )}
      type={type}
      {...props}
    >
      {leading}
      {children}
      {trailing}
    </button>
  ),
);

PillButton.displayName = "PillButton";

export interface IslandIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: PillSize;
  active?: boolean;
}

export const IslandIconButton = React.forwardRef<HTMLButtonElement, IslandIconButtonProps>(
  ({ label, size = "md", active = false, className, type = "button", children, ...props }, ref) => (
    <button
      ref={ref}
      aria-label={label}
      aria-pressed={active || undefined}
      className={join_classes(
        "aster_island_icon_btn",
        size !== "md" && `aster_island_icon_btn_${size}`,
        active && "aster_island_icon_btn_active",
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  ),
);

IslandIconButton.displayName = "IslandIconButton";

export interface IslandChipProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  name: React.ReactNode;
  meta?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  on_press?: () => void;
  title?: string;
}

export const IslandChip = React.forwardRef<HTMLElement, IslandChipProps>(
  ({ name, meta, leading, trailing, on_press, className, title, ...props }, ref) => {
    const inner = (
      <>
        {leading && <span className="aster_island_chip_leading">{leading}</span>}
        <span className="aster_island_chip_text">
          <span className="aster_island_chip_name">{name}</span>
          {meta && <span className="aster_island_chip_meta">{meta}</span>}
        </span>
      </>
    );

    if (on_press && !trailing) {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={join_classes("aster_island_chip aster_island_chip_pressable", className)}
          title={title}
          type="button"
          onClick={on_press}
          {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {inner}
        </button>
      );
    }

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={join_classes(
          "aster_island_chip",
          on_press && "aster_island_chip_pressable",
          className,
        )}
        role={on_press ? "button" : undefined}
        tabIndex={on_press ? 0 : undefined}
        title={title}
        onClick={on_press}
        onKeyDown={
          on_press
            ? (event) => {
                if (event.target !== event.currentTarget) return;
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  on_press();
                }
              }
            : undefined
        }
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {inner}
        {trailing && (
          <span
            className="aster_island_chip_trailing"
            onClick={(event) => event.stopPropagation()}
          >
            {trailing}
          </span>
        )}
      </div>
    );
  },
);

IslandChip.displayName = "IslandChip";

export type IslandCountPillSize = "sm" | "md";

export interface IslandCountPillProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  count: number;
  label: string;
  trailing?: React.ReactNode;
  size?: IslandCountPillSize;
}

export const IslandCountPill = React.forwardRef<HTMLButtonElement, IslandCountPillProps>(
  ({ count, label, trailing, size = "sm", className, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      aria-label={label}
      className={join_classes(
        "aster_island_count",
        size === "md" && "aster_island_count_md",
        className,
      )}
      type={type}
      {...props}
    >
      <span className="aster_island_count_pill">
        {count}
        {trailing ? (
          <span aria-hidden="true" className="aster_island_count_trailing">
            {trailing}
          </span>
        ) : null}
      </span>
    </button>
  ),
);

IslandCountPill.displayName = "IslandCountPill";

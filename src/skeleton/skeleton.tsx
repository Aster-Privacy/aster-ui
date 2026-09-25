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

import { cn } from "../lib/cn";

export type SkeletonVariant = "text" | "circular" | "rectangular";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
  width?: number | string;
  height?: number | string;
}

const base_classes =
  "animate-pulse bg-black/[0.06] dark:bg-white/[0.08] inline-block align-middle";

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant, width, height, className, style, ...props }, ref) => {
    if (variant === undefined && width === undefined && height === undefined) {
      return (
        <div
          ref={ref}
          className={cn("aster_skeleton", className)}
          style={style}
          {...props}
        />
      );
    }

    const resolved_variant: SkeletonVariant = variant ?? "rectangular";
    const radius =
      resolved_variant === "circular"
        ? "rounded-full"
        : resolved_variant === "text"
          ? "rounded-[4px]"
          : "rounded-md";

    const resolved_style: React.CSSProperties = {
      width: width ?? (resolved_variant === "text" ? "100%" : undefined),
      height:
        height ??
        (resolved_variant === "text"
          ? "0.85em"
          : resolved_variant === "circular"
            ? width
            : undefined),
      ...style,
    };

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(base_classes, radius, className)}
        style={resolved_style}
        {...props}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";
export interface SkeletonTextProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  lines?: number;
  line_height?: number | string;
  last_line_width?: number | string;
  gap?: number | string;
}

export const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
  (
    {
      lines = 3,
      line_height = "0.85em",
      last_line_width = "60%",
      gap = "0.5em",
      className,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col", className)}
        style={{ gap, ...style }}
        {...props}
      >
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton
            key={i}
            variant="text"
            width={i === lines - 1 ? last_line_width : "100%"}
            height={line_height}
          />
        ))}
      </div>
    );
  },
);

SkeletonText.displayName = "SkeletonText";

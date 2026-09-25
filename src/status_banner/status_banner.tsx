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

import type { AriaRole, ComponentType, CSSProperties, ReactNode } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { cn } from "../lib/cn";

export type StatusBannerTone = "danger" | "warning" | "accent";

export type StatusBannerVariant = "status" | "alert" | "prompt";

export type StatusBannerContrast = "light" | "dark";

export type StatusBannerActionEmphasis = "primary" | "secondary";

export interface StatusBannerAction {
  label: ReactNode;
  on_click: () => void;
  emphasis?: StatusBannerActionEmphasis;
  background?: string;
  hover_background?: string;
}

export interface StatusBannerProps {
  message: ReactNode;
  icon?: ComponentType<{ className?: string }>;
  actions?: StatusBannerAction[];
  is_visible?: boolean;
  animated?: boolean;
  reduce_motion?: boolean;
  tone?: StatusBannerTone;
  variant?: StatusBannerVariant;
  background?: string;
  text_color?: string;
  contrast?: StatusBannerContrast;
  role?: AriaRole;
  className?: string;
}

export const STATUS_BANNER_TONE_COLORS: Record<StatusBannerTone, string> = {
  danger: "#dc2626",
  warning: "#d97706",
  accent: "var(--accent-color)",
};

export const STATUS_BANNER_DARK_TEXT = "#111827";

const LIGHT_ACTION_COLORS: Record<
  StatusBannerActionEmphasis,
  { background: string; hover_background: string }
> = {
  primary: {
    background: "rgba(255, 255, 255, 0.2)",
    hover_background: "rgba(255, 255, 255, 0.3)",
  },
  secondary: {
    background: "rgba(255, 255, 255, 0.1)",
    hover_background: "rgba(255, 255, 255, 0.2)",
  },
};

const DARK_ACTION_COLORS: Record<
  StatusBannerActionEmphasis,
  { background: string; hover_background: string }
> = {
  primary: {
    background: "rgba(0, 0, 0, 0.12)",
    hover_background: "rgba(0, 0, 0, 0.2)",
  },
  secondary: {
    background: "rgba(0, 0, 0, 0.06)",
    hover_background: "rgba(0, 0, 0, 0.12)",
  },
};

interface VariantClasses {
  inner: string;
  content: string;
  icon: string;
  message: string;
  actions: string | null;
  action: string;
}

const VARIANT_CLASSES: Record<StatusBannerVariant, VariantClasses> = {
  status: {
    inner: "flex items-center justify-between gap-2 px-4 py-1.5",
    content: "flex min-w-0 items-center gap-1.5",
    icon: "h-3.5 w-3.5 flex-shrink-0 opacity-90",
    message: "truncate text-xs font-medium opacity-95",
    actions: null,
    action:
      "flex-shrink-0 rounded-[12px] px-2.5 py-0.5 text-xs font-medium transition-colors",
  },
  alert: {
    inner: "flex items-center justify-between gap-4 px-4 py-1.5",
    content: "flex items-center gap-1.5 min-w-0",
    icon: "h-3.5 w-3.5 flex-shrink-0",
    message: "text-xs font-semibold truncate",
    actions: null,
    action:
      "flex-shrink-0 rounded-[12px] px-2.5 py-0.5 text-xs font-semibold transition-colors",
  },
  prompt: {
    inner: "flex items-center justify-between px-4 py-1.5",
    content: "flex items-center gap-1.5 min-w-0",
    icon: "h-3.5 w-3.5 flex-shrink-0 opacity-90",
    message: "text-xs font-medium line-clamp-2 sm:truncate",
    actions: "flex items-center gap-1.5 flex-shrink-0 ms-4",
    action:
      "px-2.5 py-0.5 text-xs font-medium rounded-[12px] transition-colors",
  },
};

function resolve_action_colors(
  action: StatusBannerAction,
  variant: StatusBannerVariant,
  contrast: StatusBannerContrast,
): { background: string; hover_background: string | undefined } {
  const emphasis = action.emphasis ?? "primary";

  if (variant === "prompt") {
    const palette =
      contrast === "dark" ? DARK_ACTION_COLORS : LIGHT_ACTION_COLORS;

    return {
      background: action.background ?? palette[emphasis].background,
      hover_background:
        action.hover_background ?? palette[emphasis].hover_background,
    };
  }

  if (variant === "alert") {
    return {
      background: action.background ?? "rgba(255, 255, 255, 0.22)",
      hover_background: action.hover_background ?? "rgba(255, 255, 255, 0.34)",
    };
  }

  return {
    background: action.background ?? "rgba(255, 255, 255, 0.2)",
    hover_background: action.hover_background,
  };
}

function StatusBannerActionButton({
  action,
  variant,
  contrast,
  class_name,
}: {
  action: StatusBannerAction;
  variant: StatusBannerVariant;
  contrast: StatusBannerContrast;
  class_name: string;
}) {
  const { background, hover_background } = resolve_action_colors(
    action,
    variant,
    contrast,
  );
  const style: CSSProperties =
    variant === "prompt"
      ? { backgroundColor: background, color: "inherit" }
      : { backgroundColor: background };

  return (
    <button
      className={class_name}
      style={style}
      type="button"
      onClick={action.on_click}
      onMouseEnter={
        hover_background
          ? (e) => (e.currentTarget.style.backgroundColor = hover_background)
          : undefined
      }
      onMouseLeave={
        hover_background
          ? (e) => (e.currentTarget.style.backgroundColor = background)
          : undefined
      }
    >
      {action.label}
    </button>
  );
}

export function StatusBanner({
  message,
  icon: Icon,
  actions = [],
  is_visible = true,
  animated = true,
  reduce_motion = false,
  tone = "danger",
  variant = "status",
  background,
  text_color,
  contrast,
  role,
  className,
}: StatusBannerProps) {
  const classes = VARIANT_CLASSES[variant];
  const resolved_text_color = text_color ?? "#ffffff";
  const resolved_contrast: StatusBannerContrast =
    contrast ??
    (resolved_text_color === STATUS_BANNER_DARK_TEXT ? "dark" : "light");
  const style: CSSProperties = {
    backgroundColor: background ?? STATUS_BANNER_TONE_COLORS[tone],
    color: resolved_text_color,
  };

  const action_buttons = actions.map((action, index) => (
    <StatusBannerActionButton
      key={index}
      action={action}
      class_name={classes.action}
      contrast={resolved_contrast}
      variant={variant}
    />
  ));

  const body = (
    <div className={classes.inner}>
      <div className={classes.content}>
        {Icon && <Icon className={classes.icon} />}
        <span className={classes.message}>{message}</span>
      </div>
      {classes.actions ? (
        <div className={classes.actions}>{action_buttons}</div>
      ) : (
        action_buttons
      )}
    </div>
  );

  if (!animated) {
    if (!is_visible) return null;

    return (
      <div
        className={cn("w-full flex-shrink-0", className)}
        role={role}
        style={style}
      >
        {body}
      </div>
    );
  }

  return (
    <AnimatePresence>
      {is_visible && (
        <motion.div
          animate={{ opacity: 1, height: "auto" }}
          className={cn("w-full flex-shrink-0 overflow-hidden", className)}
          exit={{ opacity: 0, height: 0, overflow: "hidden" }}
          initial={reduce_motion ? false : { opacity: 0, height: 0 }}
          role={role}
          style={style}
          transition={{ duration: reduce_motion ? 0 : 0.2 }}
        >
          {body}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

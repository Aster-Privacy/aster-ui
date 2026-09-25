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
import { useEffect, useState } from "react";

import { cn } from "../lib/cn";

export type KeyboardShortcutBadgeSize = "xs" | "sm" | "md" | "lg";

export type KeyboardShortcutBadgeVariant = "default" | "outline" | "ghost";

export type KeyboardShortcutModifier =
  | "cmd"
  | "ctrl"
  | "shift"
  | "alt"
  | "cmd+shift"
  | "ctrl+shift";

export interface KeyboardShortcutBadgeViewProps {
  shortcut_key: string | null | undefined;
  modifier?: KeyboardShortcutModifier;
  is_mac: boolean;
  size?: KeyboardShortcutBadgeSize;
  variant?: KeyboardShortcutBadgeVariant;
  show_on_touch?: boolean;
  className?: string;
  format_aria_label?: (shortcut: string) => string;
}

const KEYBOARD_SHORTCUT_SIZE_CLASSES: Record<KeyboardShortcutBadgeSize, string> =
  {
    xs: "min-w-[14px] h-[14px] px-0.5 text-[8px]",
    sm: "min-w-[18px] h-[18px] px-1 text-[10px]",
    md: "min-w-[22px] h-[22px] px-1.5 text-[11px]",
    lg: "min-w-[28px] h-[28px] px-2 text-[13px]",
  };

const KEYBOARD_SHORTCUT_VARIANT_CLASSES: Record<
  KeyboardShortcutBadgeVariant,
  string
> = {
  default: [
    "bg-surf-tertiary text-txt-muted",
    "border border-edge-secondary",
    "shadow-[0_1px_0_var(--border-secondary)]",
  ].join(" "),
  outline: [
    "bg-transparent text-txt-muted",
    "border border-edge-secondary",
  ].join(" "),
  ghost: "bg-transparent text-txt-muted",
};

export function format_shortcut_modifier(
  mod: KeyboardShortcutModifier,
  is_mac: boolean,
): string {
  if (is_mac) {
    if (mod === "cmd+shift" || mod === "ctrl+shift") return "⌘⇧";
    if (mod === "cmd" || mod === "ctrl") return "⌘";
    if (mod === "shift") return "⇧";
    if (mod === "alt") return "⌥";
  } else {
    if (mod === "cmd+shift" || mod === "ctrl+shift") return "Ctrl+Shift";
    if (mod === "cmd" || mod === "ctrl") return "Ctrl";
    if (mod === "shift") return "Shift";
    if (mod === "alt") return "Alt";
  }

  return mod;
}

export function format_shortcut_key(key: string): string {
  if (key === "Enter") return "↵";
  if (key === "Escape") return "Esc";
  if (key === "Backspace") return "⌫";
  if (key === "Tab") return "⇥";
  if (key === "ArrowUp") return "↑";
  if (key === "ArrowDown") return "↓";
  if (key === "ArrowLeft") return "←";
  if (key === "ArrowRight") return "→";
  if (key === " ") return "Space";

  return key.toUpperCase();
}

function detect_touch(): boolean {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
  );
}

export function KeyboardShortcutBadgeView({
  shortcut_key,
  modifier,
  is_mac,
  size = "sm",
  variant = "default",
  show_on_touch = false,
  className,
  format_aria_label,
}: KeyboardShortcutBadgeViewProps) {
  const [is_touch, set_is_touch] = useState(false);

  useEffect(() => {
    set_is_touch(detect_touch());
  }, []);

  if (!shortcut_key) return null;
  if (is_touch && !show_on_touch) return null;

  const modifier_text = modifier
    ? format_shortcut_modifier(modifier, is_mac)
    : "";
  const key_text = format_shortcut_key(shortcut_key);
  const combined = `${modifier_text ? modifier_text + " + " : ""}${key_text}`;

  return (
    <kbd
      aria-label={format_aria_label ? format_aria_label(combined) : combined}
      className={cn(
        "inline-flex items-center justify-center gap-0.5 rounded font-mono font-medium select-none",
        KEYBOARD_SHORTCUT_VARIANT_CLASSES[variant],
        KEYBOARD_SHORTCUT_SIZE_CLASSES[size],
        className,
      )}
    >
      {modifier && <span aria-hidden="true">{modifier_text}</span>}
      <span aria-hidden="true">{key_text}</span>
    </kbd>
  );
}

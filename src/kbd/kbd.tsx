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

const kbd_variants = cva("aster_kbd", {
  variants: {
    size: {
      xs: "aster_kbd_xs",
      sm: "aster_kbd_sm",
      md: "aster_kbd_md",
      lg: "aster_kbd_lg",
    },
    variant: {
      default: "aster_kbd_default",
      outline: "aster_kbd_outline",
      ghost: "aster_kbd_ghost",
      inlay: "aster_kbd_inlay",
    },
  },
  defaultVariants: {
    size: "sm",
    variant: "default",
  },
});

type KbdVariantProps = VariantProps<typeof kbd_variants>;

interface KbdProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children">,
    KbdVariantProps {
  keys: string | string[];
}

const MODIFIER_MAP_MAC: Record<string, string> = {
  cmd: "\u2318",
  ctrl: "\u2318",
  shift: "\u21E7",
  alt: "\u2325",
  option: "\u2325",
  meta: "\u2318",
};

const MODIFIER_MAP_OTHER: Record<string, string> = {
  cmd: "Ctrl",
  ctrl: "Ctrl",
  shift: "Shift",
  alt: "Alt",
  option: "Alt",
  meta: "Win",
};

const KEY_DISPLAY: Record<string, string> = {
  enter: "\u21B5",
  return: "\u21B5",
  escape: "Esc",
  esc: "Esc",
  backspace: "\u232B",
  delete: "\u2326",
  tab: "\u21E5",
  arrowup: "\u2191",
  arrowdown: "\u2193",
  arrowleft: "\u2190",
  arrowright: "\u2192",
  space: "Space",
  " ": "Space",
};

function is_mac(): boolean {
  if (typeof navigator === "undefined") return false;

  return /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
}

function format_key(key: string): string {
  const lower = key.toLowerCase();
  const mac = is_mac();
  const mod_map = mac ? MODIFIER_MAP_MAC : MODIFIER_MAP_OTHER;

  if (mod_map[lower]) return mod_map[lower];
  if (KEY_DISPLAY[lower]) return KEY_DISPLAY[lower];

  return key.length === 1 ? key.toUpperCase() : key;
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, size, variant, keys, ...props }, ref) => {
    const key_list = Array.isArray(keys) ? keys : [keys];
    const formatted = key_list.map(format_key);
    const label = key_list.join(" + ");

    const classes = [kbd_variants({ size, variant }), className]
      .filter(Boolean)
      .join(" ");

    return (
      <kbd aria-label={`Keyboard shortcut: ${label}`} className={classes} ref={ref} {...props}>
        {formatted.map((k, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span aria-hidden="true" className="aster_kbd_sep" />}
            <span aria-hidden="true">{k}</span>
          </React.Fragment>
        ))}
      </kbd>
    );
  }
);

Kbd.displayName = "Kbd";

export { Kbd, kbd_variants };
export type { KbdProps, KbdVariantProps };

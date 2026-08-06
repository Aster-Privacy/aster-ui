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
import { AnimatePresence, motion } from "framer-motion";

export interface ContextMenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  danger?: boolean;
  disabled?: boolean;
  trailing?: React.ReactNode;
  on_select: () => void;
}

export interface ContextMenuPosition {
  x: number;
  y: number;
}

export interface ContextMenuProps {
  items: ContextMenuItem[];
  position: ContextMenuPosition;
  on_close: () => void;
  min_width?: number;
  origin?: "top-left" | "top-right";
}

export function ContextMenu({
  items,
  position,
  on_close,
  min_width = 180,
  origin = "top-left",
}: ContextMenuProps) {
  const menu_ref = React.useRef<HTMLDivElement>(null);
  const [focused_index, set_focused_index] = React.useState<number>(-1);
  const [resolved, set_resolved] = React.useState<{ left: number; top: number }>({
    left: position.x,
    top: position.y,
  });

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const el = menu_ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let left = position.x;
    let top = position.y;
    if (origin === "top-right") {
      left = position.x - rect.width;
    }
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (left + rect.width > vw - 8) left = vw - rect.width - 8;
    if (left < 8) left = 8;
    if (top + rect.height > vh - 8) top = vh - rect.height - 8;
    if (top < 8) top = 8;
    set_resolved({ left, top });
  }, [position.x, position.y, origin]);

  React.useEffect(() => {
    const handle_mousedown = (e: MouseEvent) => {
      if (menu_ref.current && !menu_ref.current.contains(e.target as Node)) {
        on_close();
      }
    };
    const handle_contextmenu = (e: MouseEvent) => {
      if (menu_ref.current && !menu_ref.current.contains(e.target as Node)) {
        on_close();
      }
    };
    const handle_keydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        on_close();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        set_focused_index((i) => {
          const total = items.length;
          let next = i;
          for (let step = 0; step < total; step++) {
            next = (next + 1) % total;
            if (!items[next].disabled) return next;
          }
          return i;
        });
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        set_focused_index((i) => {
          const total = items.length;
          let next = i < 0 ? 0 : i;
          for (let step = 0; step < total; step++) {
            next = (next - 1 + total) % total;
            if (!items[next].disabled) return next;
          }
          return i;
        });
        return;
      }
      if (e.key === "Enter" || e.key === " ") {
        if (focused_index >= 0 && focused_index < items.length) {
          const item = items[focused_index];
          if (!item.disabled) {
            e.preventDefault();
            item.on_select();
            on_close();
          }
        }
      }
    };
    document.addEventListener("mousedown", handle_mousedown);
    document.addEventListener("contextmenu", handle_contextmenu, true);
    document.addEventListener("keydown", handle_keydown);
    return () => {
      document.removeEventListener("mousedown", handle_mousedown);
      document.removeEventListener("contextmenu", handle_contextmenu, true);
      document.removeEventListener("keydown", handle_keydown);
    };
  }, [items, focused_index, on_close]);

  return (
    <AnimatePresence>
      <motion.div
        ref={menu_ref}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="fixed z-[9999] py-1 rounded-xl overflow-hidden bg-modal-bg border border-edge-secondary shadow-lg"
        exit={{ opacity: 0, scale: 0.95, y: -4 }}
        initial={{ opacity: 0, scale: 0.95, y: -8 }}
        role="menu"
        style={{
          top: resolved.top,
          left: resolved.left,
          minWidth: min_width,
          transformOrigin: origin === "top-right" ? "top right" : "top left",
        }}
        transition={{ duration: 0.12, ease: "easeOut" }}
        onContextMenu={(e) => e.preventDefault()}
      >
        {items.map((item, idx) => (
          <button
            key={item.id}
            className="w-full px-3 py-2 text-left text-sm flex items-center gap-2 hover:bg-[var(--bg-hover)] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={item.disabled}
            role="menuitem"
            style={{
              color: item.danger ? "#ef4444" : "var(--text-primary)",
              backgroundColor: focused_index === idx ? "var(--bg-hover)" : undefined,
            }}
            tabIndex={-1}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (item.disabled) return;
              item.on_select();
              on_close();
            }}
            onMouseEnter={() => set_focused_index(idx)}
          >
            {item.icon && (
              <span className="flex items-center justify-center w-4 h-4 flex-shrink-0">
                {item.icon}
              </span>
            )}
            <span className="flex-1 truncate">{item.label}</span>
            {item.trailing && <span className="ml-auto">{item.trailing}</span>}
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

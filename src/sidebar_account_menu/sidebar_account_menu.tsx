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

export interface SidebarAccountMenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
  on_click: () => void;
}

export interface SidebarAccountMenuProps {
  is_open: boolean;
  on_close: () => void;
  trigger: React.ReactNode;
  identity_label: string;
  active_label: string;
  display_name?: string;
  email?: string;
  items: SidebarAccountMenuItem[];
  footer?: React.ReactNode;
}

function initials_for(name?: string, email?: string): string {
  const source = (name || email || "?").trim();
  if (!source) return "?";
  const parts = source.split(/\s+/).slice(0, 2);
  const letters = parts.map((p) => p.charAt(0).toUpperCase()).join("");
  return letters || "?";
}

export function SidebarAccountMenu({
  is_open,
  on_close,
  trigger,
  identity_label,
  active_label,
  display_name,
  email,
  items,
  footer,
}: SidebarAccountMenuProps) {
  const wrapper_ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!is_open) return;
    const handle_click = (e: MouseEvent) => {
      if (!wrapper_ref.current?.contains(e.target as Node)) {
        on_close();
      }
    };
    const handle_key = (e: KeyboardEvent) => {
      if (e.key === "Escape") on_close();
    };
    document.addEventListener("mousedown", handle_click);
    document.addEventListener("keydown", handle_key);
    return () => {
      document.removeEventListener("mousedown", handle_click);
      document.removeEventListener("keydown", handle_key);
    };
  }, [is_open, on_close]);

  return (
    <div ref={wrapper_ref} className="relative">
      {trigger}
      <AnimatePresence>
        {is_open && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 top-full mt-2 z-30 w-[290px] rounded-2xl overflow-hidden"
            exit={{ opacity: 0, y: -4 }}
            initial={{ opacity: 0, y: -4 }}
            style={{
              backgroundColor: "var(--dropdown-bg)",
              border: "1px solid var(--border-secondary)",
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{ duration: 0.12 }}
          >
            <div className="px-3 pt-2.5 pb-1">
              <span
                className="text-[10px] uppercase tracking-wide font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                {identity_label}
              </span>
            </div>

            <div className="px-1.5 pb-1.5">
              <div
                className="w-full px-2.5 py-2 rounded-[14px] flex items-center gap-2.5"
                style={{ backgroundColor: "var(--surf-tertiary, transparent)" }}
              >
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold text-white flex-shrink-0"
                    style={{ backgroundColor: "var(--color-info)" }}
                  >
                    {initials_for(display_name, email)}
                  </div>
                  <div
                    className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2"
                    style={{
                      backgroundColor: "var(--color-success)",
                      borderColor: "var(--dropdown-bg)",
                    }}
                  />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  {display_name && (
                    <span
                      className="text-[12px] font-medium truncate"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {display_name}
                    </span>
                  )}
                  {email && (
                    <span
                      className="text-[11px] truncate"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {email}
                    </span>
                  )}
                </div>
                <span
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: "var(--color-success-soft, rgba(16,185,129,0.12))",
                    color: "var(--color-success)",
                  }}
                >
                  {active_label}
                </span>
              </div>
            </div>

            <div
              className="h-px mx-2"
              style={{ backgroundColor: "var(--border-secondary)" }}
            />

            <div className="p-1.5">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    className="w-full px-2.5 py-2 rounded-[12px] flex items-center gap-2.5 text-left transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                    type="button"
                    onClick={() => {
                      item.on_click();
                      on_close();
                    }}
                  >
                    <Icon
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "var(--text-secondary)" }}
                    />
                    <span
                      className="text-[12px] font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {footer && (
              <>
                <div
                  className="h-px mx-2"
                  style={{ backgroundColor: "var(--border-secondary)" }}
                />
                <div className="p-1.5">{footer}</div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

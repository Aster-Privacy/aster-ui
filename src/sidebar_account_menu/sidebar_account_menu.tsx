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
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.12 }}
            className="absolute left-0 right-0 top-full mt-2 z-30 rounded-[14px] shadow-lg overflow-hidden"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-primary)",
            }}
          >
            <div className="px-3 py-3 border-b border-edge-primary">
              <p className="text-[10px] uppercase tracking-wider text-txt-muted">
                {identity_label}
              </p>
              {display_name && (
                <p className="text-[13px] font-medium text-txt-primary truncate mt-1">
                  {display_name}
                </p>
              )}
              {email && (
                <p className="text-[11px] text-txt-muted truncate">{email}</p>
              )}
              <p className="text-[10px] mt-1 text-txt-muted">{active_label}</p>
            </div>
            <div className="py-1">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      item.on_click();
                      on_close();
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-[13px] text-txt-secondary hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
            {footer && (
              <div className="px-3 py-2 border-t border-edge-primary">
                {footer}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

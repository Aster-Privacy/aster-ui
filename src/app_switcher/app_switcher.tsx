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
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface AppEntry {
  id: string;
  name: string;
  description?: string;
  url: string;
  logo_src: string;
}

export interface AppSwitcherProps {
  apps: AppEntry[];
  current_app_id: string;
  title: string;
}

const GridIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-3.5 h-3.5 text-txt-muted flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

export function AppSwitcher({ apps, current_app_id, title }: AppSwitcherProps) {
  const [is_open, set_is_open] = useState(false);
  const wrapper_ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!is_open) return;
    const handle = (e: MouseEvent) => {
      if (!wrapper_ref.current?.contains(e.target as Node)) {
        set_is_open(false);
      }
    };
    const handle_key = (e: KeyboardEvent) => {
      if (e.key === "Escape") set_is_open(false);
    };
    document.addEventListener("mousedown", handle);
    document.addEventListener("keydown", handle_key);
    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("keydown", handle_key);
    };
  }, [is_open]);

  return (
    <div ref={wrapper_ref} className="relative">
      <button
        type="button"
        aria-label={title}
        title={title}
        onClick={() => set_is_open((v) => !v)}
        className="flex items-center justify-center w-9 h-9 rounded-[10px] text-txt-muted hover:bg-black/[0.06] dark:hover:bg-white/[0.08]"
      >
        <GridIcon />
      </button>
      <AnimatePresence>
        {is_open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.12 }}
            className="absolute right-0 top-full mt-2 z-30 w-72 rounded-[14px] shadow-lg overflow-hidden"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-primary)",
            }}
          >
            <div className="px-3 py-2 border-b border-edge-primary">
              <p className="text-[11px] uppercase tracking-wider text-txt-muted">
                {title}
              </p>
            </div>
            <div className="py-1">
              {apps.map((app) => {
                const is_current = app.id === current_app_id;
                return (
                  <a
                    key={app.id}
                    href={app.url}
                    target={is_current ? undefined : "_blank"}
                    rel={is_current ? undefined : "noopener noreferrer"}
                    className="flex items-start gap-3 px-3 py-2 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                  >
                    <img
                      alt=""
                      src={app.logo_src}
                      className="w-8 h-8 rounded-lg flex-shrink-0"
                      decoding="async"
                      draggable={false}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[13px] font-medium text-txt-primary truncate">
                          {app.name}
                        </span>
                        {is_current && <CheckIcon />}
                      </div>
                      {app.description && (
                        <p className="text-[11px] text-txt-muted truncate">
                          {app.description}
                        </p>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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

export interface KeyboardShortcutEntry {
  keys: string[];
  label: string;
}

export interface KeyboardShortcutSection {
  title: string;
  shortcuts: KeyboardShortcutEntry[];
}

export interface KeyboardShortcutsTStrings {
  title: string;
  close: string;
  press_label?: string;
  anywhere_to_open?: string;
  platform_label?: string;
}

export interface KeyboardShortcutsModalProps {
  is_open: boolean;
  on_close: () => void;
  shortcuts: KeyboardShortcutEntry[] | KeyboardShortcutSection[];
  t_strings: KeyboardShortcutsTStrings;
  reduce_motion?: boolean;
}

function get_reduce_motion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function is_section_list(
  value: KeyboardShortcutEntry[] | KeyboardShortcutSection[],
): value is KeyboardShortcutSection[] {
  return value.length > 0 && typeof (value[0] as KeyboardShortcutSection).title === "string";
}

export function KeyboardShortcutsModal({
  is_open,
  on_close,
  shortcuts,
  t_strings,
  reduce_motion: reduce_motion_prop,
}: KeyboardShortcutsModalProps) {
  const [reduce_motion_state, set_reduce_motion] = React.useState(get_reduce_motion);
  const reduce_motion = reduce_motion_prop ?? reduce_motion_state;
  const modal_ref = React.useRef<HTMLDivElement>(null);
  const close_button_ref = React.useRef<HTMLButtonElement>(null);
  const previous_active_element = React.useRef<Element | null>(null);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => set_reduce_motion(mq.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  React.useEffect(() => {
    if (is_open) {
      previous_active_element.current = document.activeElement;
      close_button_ref.current?.focus();
    } else if (previous_active_element.current instanceof HTMLElement) {
      previous_active_element.current.focus();
    }
  }, [is_open]);

  React.useEffect(() => {
    if (!is_open) return;
    const handle_keydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        on_close();
        return;
      }
      if (e.key === "Tab" && modal_ref.current) {
        const focusable = modal_ref.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handle_keydown, { capture: true });
    return () => {
      document.removeEventListener("keydown", handle_keydown, { capture: true });
    };
  }, [is_open, on_close]);

  const sections: KeyboardShortcutSection[] = React.useMemo(() => {
    if (is_section_list(shortcuts)) return shortcuts;
    return [{ title: "", shortcuts: shortcuts as KeyboardShortcutEntry[] }];
  }, [shortcuts]);

  const has_section_titles = sections.some((s) => s.title);

  return (
    <AnimatePresence>
      {is_open && (
        <motion.div
          animate={{ opacity: 1 }}
          aria-labelledby="aster-keyboard-shortcuts-title"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          exit={{ opacity: 0 }}
          initial={reduce_motion ? false : { opacity: 0 }}
          role="dialog"
          transition={{ duration: reduce_motion ? 0 : 0.15 }}
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 backdrop-blur-md"
            style={{ backgroundColor: "var(--modal-overlay)" }}
            onClick={on_close}
          />
          <motion.div
            ref={modal_ref}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-4xl max-h-[85vh] rounded-xl border overflow-hidden"
            exit={{ opacity: 0, scale: 0.96, y: 0 }}
            initial={reduce_motion ? false : { opacity: 0, scale: 0.96, y: 0 }}
            style={{
              backgroundColor: "var(--modal-bg)",
              borderColor: "var(--border-primary)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
            }}
            transition={{ duration: reduce_motion ? 0 : 0.15, ease: "easeOut" }}
          >
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: "1px solid var(--border-secondary)" }}
            >
              <h2
                className="text-[16px] font-semibold"
                id="aster-keyboard-shortcuts-title"
                style={{ color: "var(--text-primary)" }}
              >
                {t_strings.title}
              </h2>
              <button
                ref={close_button_ref}
                aria-label={t_strings.close}
                className="p-1.5 rounded-[14px] transition-colors hover:bg-black/[0.05] dark:hover:bg-white/[0.05]"
                style={{ color: "var(--text-muted)" }}
                onClick={on_close}
                type="button"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            <div
              className="relative overflow-y-auto px-6 py-5"
              style={{
                maxHeight: "calc(85vh - 130px)",
                scrollbarWidth: "thin",
              }}
            >
              <div
                className={
                  has_section_titles
                    ? "grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6"
                    : "space-y-1"
                }
              >
                {sections.map((section, idx) => (
                  <div key={section.title || idx}>
                    {section.title && (
                      <h3
                        className="text-[11px] font-semibold uppercase tracking-wider mb-3 pb-2"
                        style={{
                          color: "var(--text-muted)",
                          borderBottom: "1px solid var(--border-secondary)",
                        }}
                      >
                        {section.title}
                      </h3>
                    )}
                    <div className="space-y-1">
                      {section.shortcuts.map((entry, eidx) => (
                        <div
                          key={`${idx}-${eidx}`}
                          className="flex items-center justify-between py-1.5"
                        >
                          <span
                            className="text-[13px]"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {entry.label}
                          </span>
                          <div className="flex items-center gap-0.5 ml-4">
                            {entry.keys.map((key, kidx) => (
                              <kbd
                                key={kidx}
                                className="min-w-[22px] h-[22px] px-1.5 rounded flex items-center justify-center text-[11px] font-medium"
                                style={{
                                  backgroundColor: "var(--bg-tertiary)",
                                  color: "var(--text-secondary)",
                                  border: "1px solid var(--border-secondary)",
                                  boxShadow: "0 1px 0 var(--border-secondary)",
                                }}
                              >
                                {key}
                              </kbd>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {(t_strings.press_label || t_strings.platform_label) && (
              <div
                className="px-6 py-3 flex items-center justify-between text-[12px]"
                style={{
                  color: "var(--text-muted)",
                  borderTop: "1px solid var(--border-secondary)",
                  backgroundColor: "var(--bg-secondary)",
                }}
              >
                <div className="flex items-center gap-4">
                  {t_strings.press_label && t_strings.anywhere_to_open && (
                    <span className="flex items-center gap-2">
                      {t_strings.press_label}
                      <kbd
                        className="min-w-[20px] h-[18px] px-1.5 rounded flex items-center justify-center text-[10px] font-medium"
                        style={{
                          backgroundColor: "var(--bg-tertiary)",
                          color: "var(--text-secondary)",
                          border: "1px solid var(--border-secondary)",
                        }}
                      >
                        ?
                      </kbd>
                      {t_strings.anywhere_to_open}
                    </span>
                  )}
                </div>
                {t_strings.platform_label && (
                  <span
                    className="px-2 py-0.5 rounded font-medium"
                    style={{ backgroundColor: "var(--bg-tertiary)" }}
                  >
                    {t_strings.platform_label}
                  </span>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

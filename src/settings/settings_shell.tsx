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

function join_classes(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

function get_reduce_motion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function XIcon({ className }: { className?: string }) {
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SpinnerIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M4 12a8 8 0 018-8M20 12a8 8 0 01-8 8" strokeLinecap="round" />
    </svg>
  );
}

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        d="M12 3l10 18H2L12 3zM12 10v4M12 17h.01"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type SettingsSaveStatus = "idle" | "saving" | "saved" | "error";

export interface SettingsSaveIndicatorProps {
  status: SettingsSaveStatus;
}

export function SettingsSaveIndicator({ status }: SettingsSaveIndicatorProps) {
  if (status === "idle") return null;
  const map: Record<
    Exclude<SettingsSaveStatus, "idle">,
    { Icon: React.ElementType; color: string; spin?: boolean }
  > = {
    saving: { Icon: SpinnerIcon, color: "var(--text-muted)", spin: true },
    saved: { Icon: CheckIcon, color: "var(--color-success)" },
    error: { Icon: WarningIcon, color: "var(--color-danger)" },
  };
  const entry = map[status];
  const Icon = entry.Icon;
  return (
    <div
      className="flex items-center gap-1.5 text-[12px]"
      style={{ color: entry.color }}
    >
      <Icon
        className={join_classes("w-3.5 h-3.5", entry.spin && "animate-spin")}
      />
    </div>
  );
}

export interface SettingsSectionHeaderProps {
  icon?: React.ElementType;
  title: string;
  description?: string;
  trailing?: React.ReactNode;
}

export function SettingsSectionHeader({
  icon: Icon,
  title,
  description,
  trailing,
}: SettingsSectionHeaderProps) {
  return (
    <div className="mb-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-txt-primary flex items-center gap-2 min-w-0">
          {Icon && (
            <Icon className="w-[18px] h-[18px] text-txt-primary flex-shrink-0" />
          )}
          <span className="truncate">{title}</span>
        </h3>
        {trailing && <div className="flex-shrink-0">{trailing}</div>}
      </div>
      <div className="mt-2 h-px bg-edge-secondary" />
      {description && (
        <p className="text-sm mt-2 text-txt-muted">{description}</p>
      )}
    </div>
  );
}

export interface SettingsRowProps {
  label: string;
  description?: string;
  children: React.ReactNode;
}

export function SettingsRow({ label, description, children }: SettingsRowProps) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex-1 pr-4">
        <p className="text-sm font-medium text-txt-primary">{label}</p>
        {description && (
          <p className="text-sm mt-0.5 text-txt-muted">{description}</p>
        )}
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );
}

export interface SettingsNavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

export interface SettingsNavGroupData {
  id?: string;
  label?: string;
  items: SettingsNavItem[];
}

export interface SettingsNavItemButtonProps {
  item: SettingsNavItem;
  is_selected: boolean;
  on_select: (id: string) => void;
  data_nav_id?: string;
}

export function SettingsNavItemButton({
  item,
  is_selected,
  on_select,
  data_nav_id,
}: SettingsNavItemButtonProps) {
  const Icon = item.icon;
  return (
    <button
      className="w-full flex items-center gap-2.5 px-2.5 h-8 rounded-[12px] text-[13px] transition-colors duration-150 relative z-[1]"
      style={{
        color: is_selected ? "var(--text-primary)" : "var(--text-secondary)",
      }}
      data-nav-id={data_nav_id ?? item.id}
      type="button"
      onClick={() => on_select(item.id)}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span className="truncate text-left">{item.label}</span>
    </button>
  );
}

export interface SettingsNavGroupProps {
  group: SettingsNavGroupData;
  selected_id: string;
  on_select: (id: string) => void;
}

export function SettingsNavGroup({
  group,
  selected_id,
  on_select,
}: SettingsNavGroupProps) {
  return (
    <div className="mb-4 last:mb-0">
      {group.label && (
        <div className="text-[10px] font-semibold uppercase tracking-wider px-2.5 mb-2 text-txt-muted select-none">
          {group.label}
        </div>
      )}
      <div className="space-y-0.5">
        {group.items.map((item) => (
          <SettingsNavItemButton
            key={item.id}
            is_selected={selected_id === item.id}
            item={item}
            on_select={on_select}
          />
        ))}
      </div>
    </div>
  );
}

export interface SettingsModalShellProps {
  is_open: boolean;
  on_close: () => void;
  title: string;
  groups: SettingsNavGroupData[];
  selected_id: string;
  on_select: (id: string) => void;
  active_label?: string;
  save_status?: SettingsSaveStatus;
  close_label?: string;
  reduce_motion?: boolean;
  header_extra?: React.ReactNode;
  header_slot?: React.ReactNode;
  overlay_content?: React.ReactNode;
  content_dimmed?: boolean;
  children: React.ReactNode;
}

export function SettingsModalShell({
  is_open,
  on_close,
  title,
  groups,
  selected_id,
  on_select,
  active_label,
  save_status = "idle",
  close_label = "Close",
  reduce_motion: reduce_motion_prop,
  header_extra,
  header_slot,
  overlay_content,
  content_dimmed,
  children,
}: SettingsModalShellProps) {
  void header_extra;
  void overlay_content;
  void content_dimmed;
  const [reduce_motion_state, set_reduce_motion] = React.useState(get_reduce_motion);
  const reduce_motion = reduce_motion_prop ?? reduce_motion_state;
  const nav_container_ref = React.useRef<HTMLDivElement>(null);
  const [indicator_style, set_indicator_style] = React.useState<{
    top: number;
    height: number;
    opacity: number;
  }>({ top: 0, height: 0, opacity: 0 });

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => set_reduce_motion(mq.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  React.useEffect(() => {
    if (!is_open) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") on_close();
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [is_open, on_close]);

  const recalculate_indicator = React.useCallback(() => {
    const container = nav_container_ref.current;
    if (!container) return;
    const target = container.querySelector<HTMLElement>(
      `[data-nav-id="${selected_id}"]`,
    );
    if (!target) {
      set_indicator_style((s) => ({ ...s, opacity: 0 }));
      return;
    }
    set_indicator_style({
      top: target.offsetTop,
      height: target.offsetHeight,
      opacity: 1,
    });
  }, [selected_id]);

  React.useLayoutEffect(() => {
    recalculate_indicator();
  }, [recalculate_indicator, groups, is_open]);

  React.useEffect(() => {
    if (!nav_container_ref.current) return;
    let raf_id = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(raf_id);
      raf_id = requestAnimationFrame(recalculate_indicator);
    });
    observer.observe(nav_container_ref.current);
    return () => {
      cancelAnimationFrame(raf_id);
      observer.disconnect();
    };
  }, [recalculate_indicator]);

  void active_label;

  return (
    <AnimatePresence>
      {is_open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-4">
          <motion.div
            animate={{ opacity: 1 }}
            className="absolute inset-0"
            exit={{ opacity: 0 }}
            initial={reduce_motion ? false : { opacity: 0 }}
            style={{ backgroundColor: "var(--modal-overlay)" }}
            transition={{ duration: reduce_motion ? 0 : 0.15 }}
            onClick={on_close}
          />
          <motion.div
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative flex flex-row w-full h-full md:w-[80vw] md:max-w-[1200px] md:h-[80vh] md:max-h-[900px] md:rounded-2xl overflow-hidden bg-surf-primary"
            exit={{ scale: 0.95, opacity: 0, y: 8 }}
            initial={reduce_motion ? false : { scale: 0.95, opacity: 0, y: 8 }}
            style={{
              border: "1px solid var(--border-secondary)",
            }}
            transition={{
              duration: reduce_motion ? 0 : 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav
              className="hidden md:flex w-52 px-3 py-4 flex-col overflow-y-auto flex-shrink-0"
              style={{
                backgroundColor: "var(--sidebar-bg)",
                borderRight: "1px solid var(--border-primary)",
              }}
            >
              {header_slot && (
                <div className="mb-3 px-1">{header_slot}</div>
              )}
              <div ref={nav_container_ref} className="relative">
                  <div
                    className="pointer-events-none absolute left-0 w-full rounded-md"
                    style={{
                      top: indicator_style.top,
                      height: indicator_style.height,
                      opacity: indicator_style.opacity,
                      backgroundColor: "var(--indicator-bg)",
                      border: "1px solid var(--border-primary)",
                      zIndex: 0,
                      transition: "top 200ms ease, height 200ms ease, opacity 200ms ease",
                    }}
                  />
                  {groups.map((group, idx) => (
                    <SettingsNavGroup
                      key={group.id ?? group.label ?? idx}
                      group={group}
                      on_select={on_select}
                      selected_id={selected_id}
                    />
                ))}
              </div>
            </nav>

            <div className="flex-1 overflow-y-auto flex flex-col min-h-0 bg-surf-primary">
              <header className="flex items-center justify-between px-4 md:px-6 py-4 flex-shrink-0 border-b border-b-edge-secondary">
                <div className="flex items-center gap-3 min-w-0">
                  <h2 className="text-[17px] font-semibold text-txt-primary truncate">
                    {title}
                  </h2>
                  <SettingsSaveIndicator status={save_status} />
                </div>
                <button
                  aria-label={close_label}
                  className="flex items-center justify-center w-8 h-8 rounded-[10px] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-txt-muted"
                  type="button"
                  onClick={on_close}
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </header>
              <div className="flex-1 overflow-y-auto p-4 md:p-6">{children}</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

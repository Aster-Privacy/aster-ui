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
      className={join_classes(
        "w-full flex items-center gap-2 px-3 py-1.5 rounded-[10px] text-[13px] text-txt-secondary relative z-[1]",
        is_selected
          ? "font-medium text-txt-primary"
          : "hover:bg-black/[0.04] dark:hover:bg-white/[0.04]",
      )}
      data-nav-id={data_nav_id ?? item.id}
      type="button"
      onClick={() => on_select(item.id)}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
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
    <div>
      {group.label && (
        <div className="px-3 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-wider text-txt-muted select-none">
          {group.label}
        </div>
      )}
      {group.items.map((item) => (
        <SettingsNavItemButton
          key={item.id}
          is_selected={selected_id === item.id}
          item={item}
          on_select={on_select}
        />
      ))}
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

  const flat_items = React.useMemo(
    () => groups.flatMap((g) => g.items),
    [groups],
  );
  const header_label =
    active_label ?? flat_items.find((i) => i.id === selected_id)?.label ?? "";

  return (
    <AnimatePresence>
      {is_open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-[960px] h-[640px] max-h-[90vh] rounded-[18px] shadow-2xl flex overflow-hidden"
            exit={{ opacity: 0, scale: 0.98 }}
            initial={reduce_motion ? false : { opacity: 0, scale: 0.98 }}
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-primary)",
            }}
            transition={{ duration: reduce_motion ? 0 : 0.18, ease: "easeOut" }}
          >
            <aside
              className="w-[220px] flex-shrink-0 flex flex-col py-4 px-2 border-r border-edge-primary"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              <div className="px-3 pb-3">
                <h2 className="text-[15px] font-semibold text-txt-primary">
                  {title}
                </h2>
              </div>
              <nav className="flex-1 overflow-y-auto">
                <div ref={nav_container_ref} className="relative">
                  <div
                    className="pointer-events-none absolute left-0 right-0 rounded-[10px]"
                    style={{
                      top: indicator_style.top,
                      height: indicator_style.height,
                      opacity: indicator_style.opacity,
                      backgroundColor: "var(--indicator-bg)",
                      border: "1px solid var(--border-primary)",
                      zIndex: 0,
                      transition: "none",
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
            </aside>

            <div className="flex-1 flex flex-col min-w-0">
              <header className="flex items-center justify-between px-6 py-3 border-b border-edge-primary">
                <div className="flex items-center gap-3 min-w-0">
                  <h3 className="text-[14px] font-semibold text-txt-primary truncate">
                    {header_label}
                  </h3>
                  <SettingsSaveIndicator status={save_status} />
                </div>
                <button
                  aria-label={close_label}
                  className="flex items-center justify-center w-8 h-8 rounded-[10px] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-txt-muted"
                  type="button"
                  onClick={on_close}
                >
                  <XIcon className="w-4 h-4" />
                </button>
              </header>
              <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

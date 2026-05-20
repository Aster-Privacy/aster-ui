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

function join_classes(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

interface ChevronProps {
  className?: string;
}

function ChevronDown({ className }: ChevronProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export interface SidebarHeaderProps {
  is_collapsed: boolean;
  title: string;
  subtitle?: string;
  logo_src: string;
  logo_alt: string;
  on_trigger_click?: () => void;
  show_chevron?: boolean;
  right_slot?: React.ReactNode;
}

export function SidebarHeader({
  is_collapsed,
  title,
  subtitle,
  logo_src,
  logo_alt,
  on_trigger_click,
  show_chevron = true,
  right_slot,
}: SidebarHeaderProps) {
  return (
    <button
      className={join_classes(
        "w-full flex items-center rounded-[12px] px-1 py-1 -mx-1 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)]",
        is_collapsed ? "justify-center" : "gap-3",
      )}
      type="button"
      onClick={on_trigger_click}
    >
      <div
        className={join_classes(
          "flex-shrink-0 relative",
          is_collapsed ? "w-10 h-10" : "w-11 h-11",
        )}
      >
        <img
          alt={logo_alt}
          className="w-full h-full select-none rounded-lg"
          decoding="async"
          draggable={false}
          src={logo_src}
        />
      </div>
      {!is_collapsed && (
        <>
          <div className="flex flex-col items-start min-w-0 flex-1">
            <span className="text-[15px] font-semibold text-txt-primary truncate w-full text-left">
              {title}
            </span>
            {subtitle && (
              <span className="text-[11px] truncate w-full text-left text-txt-muted">
                {subtitle}
              </span>
            )}
          </div>
          {right_slot}
          {show_chevron && (
            <ChevronDown className="w-4 h-4 flex-shrink-0 text-txt-muted" />
          )}
        </>
      )}
    </button>
  );
}

export interface SidebarSectionHeaderProps {
  label: string;
  is_collapsed: boolean;
}

export function SidebarSectionHeader({
  label,
  is_collapsed,
}: SidebarSectionHeaderProps) {
  if (is_collapsed) return <div className="h-1" />;
  return (
    <div className="px-2 pt-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-txt-muted select-none">
      {label}
    </div>
  );
}

export interface SidebarSectionToggleProps {
  label: string;
  is_collapsed: boolean;
  section_collapsed: boolean;
  on_toggle: () => void;
  right_slot?: React.ReactNode;
  margin_top?: boolean;
}

export function SidebarSectionToggle({
  label,
  is_collapsed,
  section_collapsed,
  on_toggle,
  right_slot,
  margin_top,
}: SidebarSectionToggleProps) {
  if (is_collapsed) return <div className="h-1" />;
  return (
    <div
      className={join_classes(
        "flex items-center justify-between pl-2 pr-1 pt-3 pb-1 group",
        margin_top && "mt-2",
      )}
    >
      <button
        className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-txt-muted hover:text-txt-secondary select-none"
        type="button"
        onClick={on_toggle}
      >
        <ChevronDown
          className={join_classes(
            "w-3 h-3 transition-transform",
            section_collapsed ? "-rotate-90" : "rotate-0",
          )}
        />
        <span>{label}</span>
      </button>
      {right_slot}
    </div>
  );
}

export interface SidebarMoreToggleProps {
  more_label: string;
  less_label: string;
  expanded: boolean;
  hidden_count: number;
  on_toggle: () => void;
}

export function SidebarMoreToggle({
  more_label,
  less_label,
  expanded,
  on_toggle,
}: SidebarMoreToggleProps) {
  return (
    <button
      className="w-full flex items-center gap-2 px-2 py-1.5 mt-0.5 rounded-[10px] text-[12px] text-txt-muted hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
      type="button"
      onClick={on_toggle}
    >
      <ChevronDown
        className={join_classes(
          "w-3.5 h-3.5 transition-transform",
          expanded ? "rotate-180" : "rotate-0",
        )}
      />
      <span>{expanded ? less_label : more_label}</span>
    </button>
  );
}

export interface SidebarNavRowProps {
  icon?: React.ElementType;
  label: string;
  selected?: boolean;
  is_collapsed?: boolean;
  count?: number;
  show_count?: boolean;
  is_loading?: boolean;
  on_click?: () => void;
  trailing?: React.ReactNode;
  leading?: React.ReactNode;
  title?: string;
}

export const SidebarNavRow = React.forwardRef<
  HTMLButtonElement,
  SidebarNavRowProps
>(
  (
    {
      icon: Icon,
      label,
      selected = false,
      is_collapsed = false,
      count,
      show_count = false,
      is_loading = false,
      on_click,
      trailing,
      leading,
      title,
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={join_classes(
          "sidebar-nav-btn relative z-[1] w-full flex items-center gap-2 rounded-[10px] px-2 py-1.5 text-[13px] text-txt-secondary",
          is_collapsed && "justify-center px-0 py-2",
          selected && "sidebar-active text-txt-primary font-medium",
        )}
        title={title ?? label}
        type="button"
        onClick={on_click}
      >
        {leading}
        {Icon && (
          <Icon
            className={join_classes(
              "flex-shrink-0",
              is_collapsed ? "w-5 h-5" : "w-4 h-4",
            )}
          />
        )}
        {!is_collapsed && (
          <span className="flex-1 truncate text-left">{label}</span>
        )}
        {!is_collapsed && trailing}
        {!is_collapsed &&
          show_count &&
          !is_loading &&
          count !== undefined &&
          count > 0 && (
            <span className="ml-auto text-[11px] tabular-nums text-txt-muted">
              {count}
            </span>
          )}
      </button>
    );
  },
);

SidebarNavRow.displayName = "SidebarNavRow";

export interface SidebarTagRowProps {
  label: string;
  count?: number;
  selected?: boolean;
  is_collapsed?: boolean;
  on_click?: () => void;
  color?: string;
  show_count?: boolean;
  button_ref?: React.Ref<HTMLButtonElement>;
  drag_over?: boolean;
  on_drag_enter?: (e: React.DragEvent<HTMLButtonElement>) => void;
  on_drag_leave?: (e: React.DragEvent<HTMLButtonElement>) => void;
  on_drag_over?: (e: React.DragEvent<HTMLButtonElement>) => void;
  on_drop?: (e: React.DragEvent<HTMLButtonElement>) => void;
  tag_icon?: React.ComponentType<{ className?: string }> | null;
}

export function SidebarTagRow({
  label,
  count,
  selected = false,
  is_collapsed = false,
  on_click,
  color,
  show_count = false,
  button_ref,
  drag_over = false,
  on_drag_enter,
  on_drag_leave,
  on_drag_over,
  on_drop,
  tag_icon: TagIcon,
}: SidebarTagRowProps) {
  return (
    <button
      ref={button_ref}
      className={join_classes(
        "sidebar-nav-btn relative z-[1] w-full flex items-center gap-2 rounded-[10px] px-2 py-1.5 text-[13px] text-txt-secondary",
        is_collapsed && "justify-center px-0 py-2",
        selected && "sidebar-active text-txt-primary font-medium",
        drag_over && "ring-2 ring-[var(--accent-blue)]",
      )}
      title={label}
      type="button"
      onClick={on_click}
      onDragEnter={on_drag_enter}
      onDragLeave={on_drag_leave}
      onDragOver={on_drag_over}
      onDrop={on_drop}
    >
      {TagIcon ? (
        <TagIcon className={is_collapsed ? "w-4 h-4" : "w-3.5 h-3.5"} />
      ) : (
        <span
          className={join_classes(
            "flex-shrink-0 rounded-full",
            is_collapsed ? "w-2.5 h-2.5" : "w-2 h-2",
          )}
          style={{ backgroundColor: color ?? "var(--accent-color)" }}
        />
      )}
      {!is_collapsed && (
        <>
          <span className="flex-1 truncate text-left">{label}</span>
          {show_count && count !== undefined && count > 0 && (
            <span className="ml-auto text-[11px] tabular-nums text-txt-muted">
              {count}
            </span>
          )}
        </>
      )}
    </button>
  );
}

export interface SidebarActionButtonProps {
  icon: React.ElementType;
  label: string;
  on_click: () => void;
  is_collapsed?: boolean;
  shortcut_key?: string;
  data_attr?: Record<string, string>;
  extra_class?: string;
}

export function SidebarActionButton({
  icon: Icon,
  label,
  on_click,
  is_collapsed = false,
  shortcut_key,
  data_attr,
  extra_class,
}: SidebarActionButtonProps) {
  return (
    <button
      className={join_classes(
        "w-full flex items-center gap-2 rounded-[12px] text-[13px] font-medium transition-colors hover:opacity-90",
        is_collapsed ? "justify-center w-10 h-10 mx-auto p-0" : "px-3 py-2",
        extra_class,
      )}
      style={{
        backgroundColor: "var(--color-info)",
        color: "#ffffff",
      }}
      title={label}
      type="button"
      onClick={on_click}
      {...(data_attr || {})}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      {!is_collapsed && (
        <>
          <span className="flex-1 text-left">{label}</span>
          {shortcut_key && (
            <span
              className="ml-auto inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-[4px] text-[10px] font-semibold uppercase tabular-nums"
              style={{
                backgroundColor: "rgba(0,0,0,0.08)",
                color: "var(--bg-primary)",
              }}
            >
              {shortcut_key}
            </span>
          )}
        </>
      )}
    </button>
  );
}

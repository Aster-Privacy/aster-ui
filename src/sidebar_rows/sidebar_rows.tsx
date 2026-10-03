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
import {
  AtSymbolIcon,
  BellSlashIcon,
  BoltIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  FolderIcon,
  LockClosedIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

import { CountBadge } from "../count_badge";
import { RailUnreadDot } from "../rail_unread_dot";

function join_classes(
  ...parts: Array<string | false | null | undefined>
): string {
  return parts.filter(Boolean).join(" ");
}

export interface SidebarSectionAddButtonProps {
  label: string;
  on_click: () => void;
  rail_tip?: boolean;
}

export function SidebarSectionAddButton({
  label,
  on_click,
  rail_tip = false,
}: SidebarSectionAddButtonProps): React.ReactElement {
  return (
    <button
      aria-label={label}
      className="p-1 rounded-[var(--aster-radius-item)] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-icon-muted"
      data-rail-tip={rail_tip ? label : undefined}
      type="button"
      onClick={on_click}
    >
      <PlusIcon aria-hidden="true" className="w-4 h-4" />
    </button>
  );
}

export interface SidebarRailSectionButtonProps {
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  label: string;
  on_click: () => void;
  icon_style?: React.CSSProperties;
}

export function SidebarRailSectionButton({
  icon: Icon,
  label,
  on_click,
  icon_style,
}: SidebarRailSectionButtonProps): React.ReactElement {
  return (
    <div className="mt-3">
      <button
        className="sidebar-rail-btn"
        data-rail-tip={label}
        type="button"
        onClick={on_click}
      >
        <Icon className="w-5 h-5" style={icon_style} />
      </button>
    </div>
  );
}

export interface SidebarEmptyTextProps {
  children: React.ReactNode;
}

export function SidebarEmptyText({
  children,
}: SidebarEmptyTextProps): React.ReactElement {
  return <p className="text-[11px] px-2.5 py-2 text-txt-muted">{children}</p>;
}

export interface AliasIconViewProps {
  background: string;
  is_random: boolean;
  size: number;
  icon_class_name?: string;
}

export function AliasIconView({
  background,
  is_random,
  size,
  icon_class_name,
}: AliasIconViewProps): React.ReactElement {
  const icon_size = icon_class_name ?? (size >= 20 ? "w-4 h-4" : "w-3.5 h-3.5");

  return (
    <div
      className="rounded-full flex items-center justify-center flex-shrink-0"
      style={{
        width: size,
        height: size,
        background,
        boxShadow:
          "inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 1px rgba(0,0,0,0.15)",
      }}
    >
      {is_random ? (
        <BoltIcon className={`${icon_size} text-white`} />
      ) : (
        <AtSymbolIcon className={`${icon_size} text-white`} />
      )}
    </div>
  );
}

function TreeGuideVertical({ left }: { left: number }): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      className="absolute pointer-events-none"
      data-tree-guide="vertical"
      fill="none"
      style={{
        left: `${left}px`,
        top: "-2px",
        height: "calc(100% + 4px)",
      }}
      width={2}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        stroke="var(--border-primary)"
        strokeWidth={1.5}
        x1={0.75}
        x2={0.75}
        y1={0}
        y2="100%"
      />
    </svg>
  );
}

export interface SidebarFolderRowViewProps {
  label: string;
  color: string;
  is_collapsed: boolean;
  selected: boolean;
  depth: number;
  has_children: boolean;
  is_expanded: boolean;
  is_locked_closed: boolean;
  show_lock_badge?: boolean;
  muted_label?: string;
  guide_trail?: boolean[];
  guide_has_next?: boolean;
  unread_count: number;
  locale?: string;
  expand_label: string;
  collapse_label: string;
  drag_over?: boolean;
  button_ref?: React.Ref<HTMLButtonElement>;
  on_click: () => void;
  on_toggle_expanded: () => void;
  on_drag_enter?: (e: React.DragEvent<HTMLButtonElement>) => void;
  on_drag_leave?: (e: React.DragEvent<HTMLButtonElement>) => void;
  on_drag_over?: (e: React.DragEvent<HTMLButtonElement>) => void;
  on_drop?: (e: React.DragEvent<HTMLButtonElement>) => void;
}

export function SidebarFolderRowView({
  label,
  color,
  is_collapsed,
  selected,
  depth,
  has_children,
  is_expanded,
  is_locked_closed,
  show_lock_badge,
  muted_label,
  guide_trail,
  guide_has_next = false,
  unread_count,
  locale,
  expand_label,
  collapse_label,
  drag_over = false,
  button_ref,
  on_click,
  on_toggle_expanded,
  on_drag_enter,
  on_drag_leave,
  on_drag_over,
  on_drop,
}: SidebarFolderRowViewProps): React.ReactElement {
  const indent = is_collapsed ? 0 : depth * 16;
  const row_inset = indent > 0 ? indent + 4 : 0;
  const lock_badge = show_lock_badge ?? is_locked_closed;

  return (
    <>
      {!is_collapsed && depth > 0 && (
        <>
          {Array.from(
            { length: depth - 1 },
            (_, level) =>
              guide_trail?.[level + 1] && (
                <TreeGuideVertical
                  key={`guide-${level}`}
                  left={level * 16 + 8}
                />
              ),
          )}
          {guide_has_next && <TreeGuideVertical left={(depth - 1) * 16 + 8} />}
          <svg
            aria-hidden="true"
            className="absolute pointer-events-none"
            data-tree-guide="elbow"
            fill="none"
            height={35}
            style={{
              left: `${(depth - 1) * 16 + 8}px`,
              top: "-2px",
            }}
            width={13}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={
                guide_has_next
                  ? "M0.75 8 Q 0.75 18 8.75 18 H 12"
                  : "M0.75 0 V 10 Q 0.75 18 8.75 18 H 12"
              }
              stroke="var(--border-primary)"
              strokeLinecap="round"
              strokeWidth={1.5}
            />
          </svg>
        </>
      )}
      <button
        ref={button_ref}
        className={join_classes(
          "sidebar-nav-btn group relative w-full flex items-center",
          is_collapsed ? "justify-center" : "gap-2.5",
          "rounded-[10px]",
          is_collapsed && "px-0",
          "h-8 text-[14px]",
          selected && "sidebar-active",
          is_collapsed && selected && "sidebar-selected",
          drag_over && "ring-2 ring-brand/60 bg-brand/10",
        )}
        data-rail-tip={is_collapsed ? label : undefined}
        style={{
          zIndex: 1,
          marginInlineStart: is_collapsed ? undefined : `${row_inset}px`,
          width: is_collapsed ? undefined : `calc(100% - ${row_inset}px)`,
          paddingInlineStart: is_collapsed
            ? undefined
            : `${has_children ? 18 : 10}px`,
          paddingInlineEnd: is_collapsed ? undefined : "10px",
          color: selected ? "var(--text-primary)" : "var(--text-secondary)",
          backgroundColor: drag_over
            ? undefined
            : is_collapsed && selected
              ? "var(--aster-selected)"
              : undefined,
        }}
        type="button"
        onClick={on_click}
        onDragEnter={on_drag_enter}
        onDragLeave={on_drag_leave}
        onDragOver={on_drag_over}
        onDrop={on_drop}
      >
        {!is_collapsed && has_children && (
          <span
            aria-expanded={is_expanded}
            aria-label={is_expanded ? collapse_label : expand_label}
            className="absolute start-0 top-1/2 -translate-y-1/2 p-0.5 rounded hover:bg-black/[0.06] dark:hover:bg-white/[0.08]"
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              on_toggle_expanded();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                e.stopPropagation();
                on_toggle_expanded();
              }
            }}
          >
            {is_expanded ? (
              <ChevronDownIcon className="w-3 h-3" />
            ) : (
              <ChevronRightIcon className="w-3 h-3 rtl:-scale-x-100" />
            )}
          </span>
        )}
        <div className="relative">
          <FolderIcon
            className={is_collapsed ? "w-5 h-5" : "w-4 h-4"}
            style={{ color }}
          />
          {lock_badge && (
            <LockClosedIcon className="absolute -bottom-0.5 -end-0.5 w-2.5 h-2.5 p-0.5 rounded-full text-icon-active bg-surf-secondary" />
          )}
        </div>
        {is_collapsed && !is_locked_closed && (
          <RailUnreadDot count={unread_count} label={label} locale={locale} />
        )}
        {!is_collapsed && (
          <>
            <span className="flex-1 text-start truncate">{label}</span>
            {muted_label && (
              <BellSlashIcon
                aria-hidden={false}
                aria-label={muted_label}
                className="w-3.5 h-3.5 shrink-0 text-icon-muted"
                data-folder-muted="true"
                role="img"
                title={muted_label}
              />
            )}
            {is_locked_closed && (
              <LockClosedIcon className="w-3 h-3 ms-1 text-icon-muted" />
            )}
            {!is_locked_closed && (
              <CountBadge
                count={unread_count}
                is_active={selected}
                locale={locale}
              />
            )}
          </>
        )}
      </button>
    </>
  );
}

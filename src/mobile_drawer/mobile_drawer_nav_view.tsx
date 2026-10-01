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
import type { ReactNode } from "react";

import {
  BellSlashIcon,
  ChevronLeftIcon,
  FolderIcon,
  LockClosedIcon,
  LockOpenIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

import { MobileSidebarNavButton } from "../mobile/mobile_sidebar_nav_button";
import { NavSectionSkeleton } from "../nav_section_skeleton";
import { tag_icon_map } from "../email_tag";

const SECTION_LABEL_CLASS =
  "text-[10px] font-semibold uppercase tracking-[0.05em] text-[var(--text-muted)] opacity-70";

export interface MobileDrawerSectionHeaderProps {
  label: string;
  is_first?: boolean;
  add_label?: string;
  on_add?: () => void;
}

export function MobileDrawerSectionHeader({
  label,
  is_first = false,
  add_label,
  on_add,
}: MobileDrawerSectionHeaderProps) {
  return (
    <div className={is_first ? "mb-1 px-2.5" : "mb-1 mt-5 px-2.5"}>
      {on_add ? (
        <div className="flex w-full items-center justify-between">
          <span className={SECTION_LABEL_CLASS}>{label}</span>
          <button
            className="-m-1 flex min-h-6 min-w-6 items-center justify-center rounded p-1.5 text-[var(--text-muted)] transition-all duration-150 active:bg-[var(--bg-tertiary)]"
            type="button"
            aria-label={add_label}
            onClick={on_add}
          >
            <PlusIcon className="h-3.5 w-3.5" />
          </button>
        </div>
      ) : (
        <span className={SECTION_LABEL_CLASS}>{label}</span>
      )}
    </div>
  );
}

export interface MobileDrawerBackButtonProps {
  label: string;
  on_click: () => void;
}

export function MobileDrawerBackButton({
  label,
  on_click,
}: MobileDrawerBackButtonProps) {
  return (
    <button
      className="relative flex w-full items-center gap-2 rounded-xl px-3 py-2.5 mb-2 active:bg-[var(--bg-tertiary)]"
      style={{ zIndex: 1, color: "var(--accent-color, #3b82f6)" }}
      type="button"
      onClick={on_click}
    >
      <ChevronLeftIcon className="h-4 w-4 shrink-0 rtl:-scale-x-100" />
      <span className="text-[14px] font-medium">{label}</span>
    </button>
  );
}

export interface MobileDrawerSectionPlaceholderProps {
  is_loading: boolean;
  skeleton_rows: number;
  failed_notice?: ReactNode;
  empty_text: string;
}

export function MobileDrawerSectionPlaceholder({
  is_loading,
  skeleton_rows,
  failed_notice,
  empty_text,
}: MobileDrawerSectionPlaceholderProps) {
  if (is_loading) return <NavSectionSkeleton rows={skeleton_rows} />;
  if (failed_notice) return <div className="px-2.5 py-1">{failed_notice}</div>;

  return (
    <p className="px-2.5 py-2 text-[11px] text-[var(--text-muted)]">
      {empty_text}
    </p>
  );
}

export interface MobileDrawerFolderRowProps {
  label: string;
  color: string;
  depth: number;
  guide_trail?: boolean[];
  guide_has_next?: boolean;
  active: boolean;
  count?: number;
  locale?: string;
  show_lock_toggle?: boolean;
  lock_closed?: boolean;
  muted_label?: string;
  on_click: () => void;
  on_long_press?: () => void;
  on_toggle_lock?: () => void;
}

export function MobileDrawerFolderRow({
  label,
  color,
  depth,
  guide_trail,
  guide_has_next = false,
  active,
  count,
  locale,
  show_lock_toggle = false,
  lock_closed = false,
  muted_label,
  on_click,
  on_long_press,
  on_toggle_lock,
}: MobileDrawerFolderRowProps) {
  return (
    <div className="relative" style={{ paddingInlineStart: depth * 16 }}>
      {depth > 0 && (
        <>
          {Array.from(
            { length: depth - 1 },
            (_, level) =>
              guide_trail?.[level + 1] && (
                <span
                  key={`guide-${level}`}
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 bottom-0 w-px"
                  style={{
                    left: `${level * 16 + 10}px`,
                    backgroundColor: "var(--border-primary)",
                  }}
                />
              ),
          )}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0"
            style={{
              left: `${(depth - 1) * 16 + 10}px`,
              height: "50%",
              width: "9px",
              borderLeft: "1px solid var(--border-primary)",
              borderBottom: "1px solid var(--border-primary)",
              borderBottomLeftRadius: "7px",
            }}
          />
          {guide_has_next && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-0 bottom-0 w-px"
              style={{
                left: `${(depth - 1) * 16 + 10}px`,
                backgroundColor: "var(--border-primary)",
              }}
            />
          )}
        </>
      )}
      <MobileSidebarNavButton
        active={active}
        count={count}
        icon={<FolderIcon className="h-5 w-5" style={{ color }} />}
        label={label}
        locale={locale}
        on_click={on_click}
        on_long_press={on_long_press}
        trailing={
          muted_label || show_lock_toggle ? (
            <>
              {muted_label && (
                <BellSlashIcon
                  aria-hidden={false}
                  aria-label={muted_label}
                  className="h-4 w-4 shrink-0 text-[var(--text-muted)]"
                  data-folder-muted="true"
                  role="img"
                  title={muted_label}
                />
              )}
              {show_lock_toggle && (
                <button
                  className="flex h-7 w-7 items-center justify-center rounded-[8px] text-[var(--text-muted)] active:bg-[var(--bg-tertiary)]"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    on_toggle_lock?.();
                  }}
                >
                  {lock_closed ? (
                    <LockClosedIcon className="h-4 w-4" />
                  ) : (
                    <LockOpenIcon className="h-4 w-4" />
                  )}
                </button>
              )}
            </>
          ) : undefined
        }
      />
    </div>
  );
}

export interface MobileDrawerTagIconProps {
  icon?: string | null;
  color: string;
}

export function MobileDrawerTagIcon({ icon, color }: MobileDrawerTagIconProps) {
  const TagIconComponent = icon ? tag_icon_map[icon] : undefined;

  if (TagIconComponent) {
    return <TagIconComponent className="h-4 w-4" style={{ color }} />;
  }

  return (
    <span
      className="h-3 w-3 shrink-0 rounded-full"
      style={{ backgroundColor: color }}
    />
  );
}

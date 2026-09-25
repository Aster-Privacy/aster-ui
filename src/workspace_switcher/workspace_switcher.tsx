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
  ArrowPathIcon,
  ArrowRightStartOnRectangleIcon,
  PlusIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";

import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Skeleton } from "../skeleton";
import { Tooltip } from "../tooltip";

export interface WorkspaceAccountBadge {
  label: string;
  muted?: boolean;
}

export interface WorkspaceAccountRow {
  id: string;
  name: string;
  email: string;
  avatar: React.ReactNode;
  href: string;
  has_plan_ring?: boolean;
  badge?: WorkspaceAccountBadge | null;
}

export interface WorkspaceHubAccountRow {
  id: string;
  name: string;
  email: string;
  avatar: React.ReactNode;
  badge?: WorkspaceAccountBadge | null;
}

export interface WorkspaceSwitcherLabels {
  official_sender: string;
  manage_account: string;
  storage_used: string;
  resubscribe: string;
  add_account: string;
  sign_out: string;
  sign_out_all: string;
}

export interface WorkspaceSwitcherViewProps {
  align?: "start" | "center" | "end";
  trigger: React.ReactNode;
  is_open: boolean;
  on_open_change: (open: boolean) => void;
  labels: WorkspaceSwitcherLabels;
  header_avatar: React.ReactNode;
  greeting?: string;
  display_name: string;
  email: string;
  is_official?: boolean;
  official_badge_src?: string;
  plan_badge?: React.ReactNode;
  storage_used_text?: string | null;
  storage_percent: number;
  accounts: WorkspaceAccountRow[];
  hub_accounts?: WorkspaceHubAccountRow[];
  show_resubscribe?: boolean;
  add_account_dimmed?: boolean;
  add_account_meta?: string | null;
  show_sign_out_all?: boolean;
  on_copy_email: () => void;
  on_manage_account: () => void;
  on_switch_account: (account_id: string) => void;
  on_hub_account?: (account_id: string) => void;
  on_resubscribe?: () => void;
  on_add_account: () => void;
  on_sign_out: () => void;
  on_sign_out_all?: () => void;
}

function account_badge(badge?: WorkspaceAccountBadge | null) {
  if (!badge) return null;

  return (
    <span
      className={
        badge.muted
          ? "account_menu_badge account_menu_badge_muted"
          : "account_menu_badge"
      }
    >
      {badge.label}
    </span>
  );
}

export function WorkspaceSwitcherView({
  align = "start",
  trigger,
  is_open,
  on_open_change,
  labels,
  header_avatar,
  greeting,
  display_name,
  email,
  is_official = false,
  official_badge_src = "/official_badge.webp",
  plan_badge,
  storage_used_text,
  storage_percent,
  accounts,
  hub_accounts = [],
  show_resubscribe = false,
  add_account_dimmed = false,
  add_account_meta,
  show_sign_out_all = false,
  on_copy_email,
  on_manage_account,
  on_switch_account,
  on_hub_account,
  on_resubscribe,
  on_add_account,
  on_sign_out,
  on_sign_out_all,
}: WorkspaceSwitcherViewProps) {
  const popover_ref = React.useRef<HTMLDivElement>(null);
  const pointer_close_ref = React.useRef(false);
  const row_count = accounts.length + hub_accounts.length;

  return (
    <>
      <Popover open={is_open} onOpenChange={on_open_change}>
        <PopoverTrigger asChild>{trigger}</PopoverTrigger>
        <PopoverContent
          ref={popover_ref}
          align={align}
          className="account_menu_surface w-[352px] max-w-[calc(100vw-24px)] p-2 rounded-[24px] data-[state=closed]:animate-none data-[state=closed]:zoom-out-100 data-[state=closed]:slide-in-from-top-0"
          sideOffset={8}
          style={{
            boxShadow:
              "0 18px 40px -12px rgba(0, 0, 0, 0.5), 0 4px 12px -4px rgba(0, 0, 0, 0.3)",
          }}
          onCloseAutoFocus={(e) => {
            if (pointer_close_ref.current) e.preventDefault();
            pointer_close_ref.current = false;
          }}
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            pointer_close_ref.current = false;
            popover_ref.current?.focus();
          }}
          onPointerDownOutside={() => {
            pointer_close_ref.current = true;
          }}
        >
          <div className="account_menu_card rounded-[18px] px-4 py-4">
            <div className="flex items-center gap-3.5">
              {header_avatar}
              <div className="flex flex-col min-w-0 flex-1 gap-0.5">
                <span
                  className="text-[12px] leading-tight"
                  style={{ color: "var(--text-muted)" }}
                >
                  {greeting}
                </span>
                <span className="flex items-center gap-1.5 min-w-0">
                  {is_official && (
                    <img
                      alt={labels.official_sender}
                      className="block h-4 w-4 flex-shrink-0"
                      draggable={false}
                      src={official_badge_src}
                      title={labels.official_sender}
                    />
                  )}
                  <span
                    className="min-w-0 flex-1 text-[15px] font-semibold leading-tight truncate"
                    style={{ color: "var(--text-primary)" }}
                    title={display_name}
                  >
                    {display_name}
                  </span>
                  {plan_badge}
                </span>
                <button
                  className="text-[12px] leading-tight truncate text-start transition-colors hover:text-[var(--text-secondary)]"
                  style={{ color: "var(--text-muted)" }}
                  type="button"
                  onClick={on_copy_email}
                >
                  {email}
                </button>
              </div>
            </div>

            <button
              className="account_menu_manage mt-3.5 w-full h-9 rounded-full text-[13px] font-medium transition-colors"
              type="button"
              onClick={on_manage_account}
            >
              {labels.manage_account}
            </button>

            <div className="mt-4">
              <div className="flex items-baseline justify-between mb-2">
                <span
                  className="whitespace-nowrap text-[12px] font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {labels.storage_used}
                </span>
                {storage_used_text ? (
                  <span
                    className="truncate text-[12px] tabular-nums"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {storage_used_text}
                  </span>
                ) : (
                  <Skeleton className="h-3 w-[92px] rounded-full" />
                )}
              </div>
              {storage_used_text ? (
                <div
                  className="h-1.5 w-full rounded-full overflow-hidden"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--text-primary) 18%, transparent)",
                  }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor:
                        storage_percent >= 90
                          ? "var(--color-danger)"
                          : "var(--accent-color)",
                      minWidth: "10px",
                      width: `${storage_percent}%`,
                    }}
                  />
                </div>
              ) : (
                <Skeleton className="h-1.5 w-full rounded-full" />
              )}
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-2">
            {row_count > 0 && (
              <div
                className={`flex flex-col gap-1.5 ${
                  row_count > 4
                    ? "aster_scrollbar_thin max-h-[min(52vh,420px)] overflow-y-auto pe-0.5"
                    : ""
                }`}
              >
                {accounts.map((acc) => (
                  <a
                    key={acc.id}
                    draggable
                    className="account_menu_row group relative w-full h-[60px] flex-shrink-0 px-3.5 flex items-center gap-3.5 cursor-pointer no-underline rounded-[16px]"
                    href={acc.href}
                    onClick={(e) => {
                      if (
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.button !== 0
                      ) {
                        return;
                      }
                      e.preventDefault();
                      on_switch_account(acc.id);
                    }}
                  >
                    <span
                      className={`inline-flex leading-none flex-shrink-0 ${acc.has_plan_ring ? "plan_ring" : ""}`}
                    >
                      {acc.avatar}
                    </span>
                    <div className="flex flex-col min-w-0 flex-1 gap-0.5">
                      <span
                        className="text-[13px] font-medium leading-tight truncate"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {acc.name}
                      </span>
                      <span
                        className="text-[11px] leading-tight truncate"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {acc.email}
                      </span>
                    </div>
                    {account_badge(acc.badge)}
                  </a>
                ))}
                {hub_accounts.map((acc) => (
                  <button
                    key={acc.id}
                    className="account_menu_row group relative w-full h-[60px] flex-shrink-0 px-3.5 flex items-center gap-3.5 rounded-[16px]"
                    type="button"
                    onClick={() => on_hub_account?.(acc.id)}
                  >
                    <span className="inline-flex leading-none flex-shrink-0">
                      {acc.avatar}
                    </span>
                    <div className="flex flex-col min-w-0 flex-1 gap-0.5 text-start">
                      <span
                        className="text-[13px] font-medium leading-tight truncate"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {acc.name}
                      </span>
                      <span
                        className="text-[11px] leading-tight truncate"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {acc.email}
                      </span>
                    </div>
                    {account_badge(acc.badge)}
                  </button>
                ))}
              </div>
            )}

            {show_resubscribe && (
              <button
                className="account_menu_tile account_menu_tile_accent"
                type="button"
                onClick={on_resubscribe}
              >
                <span className="account_menu_tile_icon">
                  <ArrowPathIcon className="w-[18px] h-[18px]" />
                </span>
                <span className="account_menu_tile_label">
                  {labels.resubscribe}
                </span>
              </button>
            )}

            <button
              className={`account_menu_tile ${add_account_dimmed ? "opacity-60" : ""}`}
              type="button"
              onClick={on_add_account}
            >
              <span className="account_menu_tile_icon">
                <PlusIcon className="w-[18px] h-[18px]" />
              </span>
              <span className="account_menu_tile_label">
                {labels.add_account}
              </span>
              {add_account_meta == null ? null : (
                <span className="account_menu_tile_meta tabular-nums">
                  {add_account_meta}
                </span>
              )}
            </button>

            <div className="flex items-center gap-2">
              <button
                className="account_menu_tile account_menu_tile_danger flex-1"
                type="button"
                onClick={on_sign_out}
              >
                <span className="account_menu_tile_icon">
                  <ArrowRightStartOnRectangleIcon className="w-[18px] h-[18px]" />
                </span>
                <span className="account_menu_tile_label">
                  {labels.sign_out}
                </span>
              </button>

              {show_sign_out_all && (
                <Tooltip position="top" tip={labels.sign_out_all}>
                  <button
                    aria-label={labels.sign_out_all}
                    className="account_menu_tile account_menu_tile_danger w-[54px] justify-center px-0"
                    type="button"
                    onClick={on_sign_out_all}
                  >
                    <span className="account_menu_tile_icon">
                      <PowerIcon className="w-[18px] h-[18px]" />
                    </span>
                  </button>
                </Tooltip>
              )}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}

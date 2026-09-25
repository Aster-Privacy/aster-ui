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
  Bars3Icon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Button } from "../button";

export interface MobileMenuButtonViewProps {
  label: string;
  on_click: () => void;
}

export function MobileMenuButtonView({
  label,
  on_click,
}: MobileMenuButtonViewProps): React.ReactElement {
  return (
    <button
      aria-label={label}
      className="md:hidden flex items-center justify-center w-10 h-10 rounded-[10px] transition-colors hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-txt-primary"
      onClick={on_click}
    >
      <Bars3Icon className="w-5 h-5" />
    </button>
  );
}

export interface SidebarAsideViewProps {
  label: string;
  is_collapsed: boolean;
  is_mobile: boolean;
  expanded_width: number;
  children: React.ReactNode;
}

export function SidebarAsideView({
  label,
  is_collapsed,
  is_mobile,
  expanded_width,
  children,
}: SidebarAsideViewProps): React.ReactElement {
  return (
    <aside
      aria-label={label}
      className={`flex h-full flex-col flex-shrink-0 select-none transition-all duration-200 ease-out bg-sidebar-bg-custom ${
        is_collapsed ? "w-16 min-w-16 max-w-16" : ""
      }`}
      data-collapsed={is_collapsed ? "true" : "false"}
      data-sidebar-root="true"
      role="navigation"
      style={
        is_collapsed
          ? undefined
          : is_mobile
            ? { width: "100vw", minWidth: "100vw", maxWidth: "100vw" }
            : {
                width: expanded_width,
                minWidth: expanded_width,
                maxWidth: expanded_width,
              }
      }
    >
      {children}
    </aside>
  );
}

export interface SidebarRailOpenButtonProps {
  label: string;
  on_click: () => void;
}

export function SidebarRailOpenButton({
  label,
  on_click,
}: SidebarRailOpenButtonProps): React.ReactElement {
  return (
    <div className="px-2 pt-3 flex justify-center">
      <button
        aria-label={label}
        className="sidebar-rail-btn"
        type="button"
        onClick={on_click}
      >
        <Bars3Icon className="w-5 h-5" />
      </button>
    </div>
  );
}

export interface SidebarTopBarViewProps {
  is_collapsed: boolean;
  is_compact: boolean;
  children?: React.ReactNode;
}

export function SidebarTopBarView({
  is_collapsed,
  is_compact,
  children,
}: SidebarTopBarViewProps): React.ReactElement {
  return (
    <div
      className={`${is_collapsed ? "px-2" : "px-3"} ${is_compact ? "pe-12 pt-4 pb-3" : "pt-2"} relative`}
    >
      {children}
    </div>
  );
}

export interface SidebarCloseButtonProps {
  label: string;
  on_click: () => void;
  type?: "button";
}

export function SidebarCloseButton({
  label,
  on_click,
  type,
}: SidebarCloseButtonProps): React.ReactElement {
  return (
    <button
      aria-label={label}
      className="absolute top-2 end-2 flex items-center justify-center w-8 h-8 rounded-[8px] transition-colors hover:bg-black/[0.06] dark:hover:bg-white/[0.08] z-10 text-icon-muted"
      type={type}
      onClick={on_click}
    >
      <XMarkIcon className="w-5 h-5" />
    </button>
  );
}

export interface SidebarComposeButtonViewProps {
  label: string;
  is_collapsed: boolean;
  on_click: () => void;
}

export function SidebarComposeButtonView({
  label,
  is_collapsed,
  on_click,
}: SidebarComposeButtonViewProps): React.ReactElement {
  return (
    <div
      className={`${is_collapsed ? "px-2 flex justify-center" : "px-2.5"} pb-3`}
    >
      <Button
        className={
          is_collapsed
            ? "!rounded-[16px] w-14 h-14 min-w-14 !h-14 !p-0 flex items-center justify-center"
            : "w-full !rounded-[16px] gap-2"
        }
        data-onboarding="compose-button"
        data-rail-tip={is_collapsed ? label : undefined}
        variant="depth"
        onClick={on_click}
      >
        <PencilSquareIcon
          className={is_collapsed ? "w-[22px] h-[22px]" : "w-[15px] h-[15px]"}
        />
        {!is_collapsed && <span>{label}</span>}
      </Button>
    </div>
  );
}

export interface SidebarScrollAreaViewProps {
  is_collapsed: boolean;
  show_indicator: boolean;
  indicator_style: React.CSSProperties;
  container_ref?: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
}

export function SidebarScrollAreaView({
  is_collapsed,
  show_indicator,
  indicator_style,
  container_ref,
  children,
}: SidebarScrollAreaViewProps): React.ReactElement {
  return (
    <div
      className={`min-h-0 flex-1 overflow-y-auto ${is_collapsed ? "px-2" : "px-2.5"} pt-0.5 pb-4 [mask-image:linear-gradient(to_bottom,black_calc(100%-28px),transparent)]`}
    >
      <div ref={container_ref} className="relative">
        {show_indicator && (
          <div
            className="pointer-events-none absolute start-0 w-full rounded-md border-edge-primary"
            style={{
              ...indicator_style,
              top: 0,
              backgroundColor: "var(--indicator-bg)",
              border: "1px solid var(--border-primary)",
              zIndex: 0,
              willChange: "transform, opacity",
              transition:
                indicator_style.opacity === 0
                  ? "opacity 100ms ease"
                  : "transform 200ms ease, height 200ms ease, opacity 200ms ease",
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
}

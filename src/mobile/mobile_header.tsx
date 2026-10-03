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
import { memo, type ReactNode } from "react";
import {
  ChevronLeftIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import { use_ui_strings } from "../i18n/ui_strings";

export interface MobileHeaderProps {
  title?: ReactNode;
  left_action?: ReactNode;
  right_actions?: ReactNode;
  safe_area_top?: number | string;
  height?: number;
  on_title_click?: () => void;
  center_content?: ReactNode;
  on_back?: () => void;
  on_menu?: () => void;
  on_search?: () => void;
  back_label?: string;
  menu_label?: string;
  search_label?: string;
}

const HEADER_ICON_BUTTON_CLASS =
  "flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-secondary)] active:bg-[var(--bg-tertiary)]";

export const MobileHeader = memo(function MobileHeader({
  title,
  left_action,
  right_actions,
  safe_area_top = 0,
  height = 56,
  on_title_click,
  center_content,
  on_back,
  on_menu,
  on_search,
  back_label,
  menu_label,
  search_label,
}: MobileHeaderProps) {
  const strings = use_ui_strings();
  const show_menu = Boolean(on_menu) && !on_back;
  const title_click = on_title_click ?? (show_menu ? on_menu : undefined);

  return (
    <header
      className="sticky top-0 z-40 shrink-0 bg-[var(--bg-primary)] px-3 relative flex items-center isolate"
      style={{
        paddingTop: safe_area_top,
        height:
          typeof safe_area_top === "number"
            ? height + safe_area_top
            : `calc(${height}px + ${safe_area_top})`,
      }}
    >
      <div className="flex items-center gap-1">
        {left_action}
        {on_back && (
          <button
            aria-label={back_label ?? strings.back}
            className={HEADER_ICON_BUTTON_CLASS}
            type="button"
            onClick={on_back}
          >
            <ChevronLeftIcon className="h-6 w-6 rtl:-scale-x-100" />
          </button>
        )}

        {show_menu && (
          <button
            aria-label={menu_label ?? strings.open_menu}
            className={HEADER_ICON_BUTTON_CLASS}
            type="button"
            onClick={on_menu}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        )}
      </div>

      <div className="flex-1 min-w-0 flex items-center justify-center px-2">
        {center_content ? (
          center_content
        ) : title_click ? (
          <button
            className="max-w-full truncate text-lg font-semibold text-[var(--text-primary)]"
            type="button"
            onClick={title_click}
          >
            {title}
          </button>
        ) : (
          <h1 className="max-w-full truncate text-lg font-semibold text-[var(--text-primary)]">
            {title}
          </h1>
        )}
      </div>

      <div className="flex shrink-0 items-center gap-1">
        {right_actions}
        {on_search && (
          <button
            aria-label={search_label ?? strings.search}
            className={HEADER_ICON_BUTTON_CLASS}
            type="button"
            onClick={on_search}
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
        )}
      </div>
    </header>
  );
});

export interface MobileHeaderIconButtonProps {
  on_click: () => void;
  children: ReactNode;
  "aria-label"?: string;
}

export const MobileHeaderIconButton = memo(function MobileHeaderIconButton({
  on_click,
  children,
  "aria-label": aria_label,
}: MobileHeaderIconButtonProps) {
  return (
    <button
      aria-label={aria_label}
      className={HEADER_ICON_BUTTON_CLASS}
      type="button"
      onClick={on_click}
    >
      {children}
    </button>
  );
});

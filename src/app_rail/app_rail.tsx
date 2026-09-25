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
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export interface AppRailItem {
  key: string;
  label: string;
  selected: boolean;
  icon_src?: string;
  icon_src_set?: string;
  fallback_icon: React.ReactNode;
  on_click: () => void;
}

export interface AppRailLabels {
  expand: string;
  collapse: string;
}

export interface AppRailViewProps {
  panel?: React.ReactNode;
  is_panel_visible: boolean;
  is_settings_view?: boolean;
  is_hidden: boolean;
  items: AppRailItem[];
  labels: AppRailLabels;
  on_toggle_hidden: () => void;
}

function AppRailViewComponent({
  panel,
  is_panel_visible,
  is_settings_view = false,
  is_hidden,
  items,
  labels,
  on_toggle_hidden,
}: AppRailViewProps) {
  const [failed_icons, set_failed_icons] = React.useState<
    Record<string, boolean>
  >({});

  const mark_icon_failed = React.useCallback((key: string) => {
    set_failed_icons((current) =>
      current[key] ? current : { ...current, [key]: true },
    );
  }, []);

  return (
    <>
      <div
        className={`quick_panel_slot relative flex-shrink-0 ${
          is_panel_visible
            ? `mb-1 me-1 w-[min(320px,78vw)] md:mb-2 md:me-2 md:w-[clamp(272px,23vw,320px)] ${
                is_settings_view ? "mt-1 md:mt-2" : ""
              }`
            : "pointer-events-none w-0"
        }`}
      >
        {panel}
      </div>
      {is_hidden && (
        <button
          aria-label={labels.expand}
          className="app_rail_popout absolute bottom-3 end-0 z-20 flex h-9 w-6 items-center justify-center rounded-s-lg"
          data-rail-tip={labels.expand}
          data-rail-tip-side="left"
          type="button"
          onClick={on_toggle_hidden}
        >
          <ChevronDoubleLeftIcon className="h-4 w-4 rtl:rotate-180" />
        </button>
      )}
      <div
        aria-hidden={is_hidden}
        className={`app_rail_column flex shrink-0 flex-col items-center overflow-hidden pb-2 pt-2.5 ${
          is_hidden ? "pointer-events-none w-0 opacity-0" : "w-[52px] md:-ms-2"
        }`}
      >
        {items.map((item, index) => (
          <button
            key={item.key}
            aria-expanded={item.selected}
            aria-label={item.label}
            className={`app_rail_btn ${index > 0 ? "mt-1 " : ""}flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px]`}
            data-rail-tip={item.selected ? undefined : item.label}
            data-rail-tip-side="left"
            data-selected={item.selected ? "true" : undefined}
            tabIndex={is_hidden ? -1 : undefined}
            type="button"
            onClick={item.on_click}
          >
            {item.icon_src && !failed_icons[item.key] ? (
              <img
                alt=""
                aria-hidden="true"
                className="h-6 w-6 shrink-0 select-none"
                decoding="sync"
                draggable={false}
                height={24}
                loading="eager"
                src={item.icon_src}
                srcSet={item.icon_src_set}
                width={24}
                onError={() => mark_icon_failed(item.key)}
              />
            ) : (
              item.fallback_icon
            )}
          </button>
        ))}
        <button
          aria-label={labels.collapse}
          className="app_rail_toggle mt-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          data-rail-tip={labels.collapse}
          data-rail-tip-side="left"
          tabIndex={is_hidden ? -1 : undefined}
          type="button"
          onClick={on_toggle_hidden}
        >
          <ChevronRightIcon className="h-4 w-4 rtl:rotate-180" />
        </button>
      </div>
    </>
  );
}

export const AppRailView = React.memo(AppRailViewComponent);

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

export interface UnderlineTabItem<Key extends string = string> {
  key: Key;
  label: ReactNode;
  count?: number;
  icon?: ReactNode;
}

export interface UnderlineTabsProps<Key extends string = string> {
  items: UnderlineTabItem<Key>[];
  active: Key;
  on_change: (key: Key) => void;
  label?: string;
  className?: string;
  format_count?: (value: number) => string;
}

export function UnderlineTabs<Key extends string = string>({
  items,
  active,
  on_change,
  label,
  className = "",
  format_count = (value) => value.toLocaleString(),
}: UnderlineTabsProps<Key>) {
  return (
    <div
      aria-label={label}
      className={`aster_tabs ${className}`.trim()}
      role="group"
    >
      {items.map((item) => {
        const is_active = item.key === active;
        return (
          <button
            key={item.key}
            aria-pressed={is_active}
            className="aster_tab"
            data-active={is_active ? "" : undefined}
            type="button"
            onClick={() => on_change(item.key)}
            onMouseDown={(event) => event.preventDefault()}
          >
            {item.icon ? (
              <span aria-hidden="true" className="aster_tab_icon">
                {item.icon}
              </span>
            ) : null}
            <span className="aster_tab_label">{item.label}</span>
            {typeof item.count === "number" ? (
              <span className="aster_tab_count">
                {format_count(item.count)}
              </span>
            ) : null}
            {is_active ? (
              <span aria-hidden="true" className="aster_tab_bar" />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

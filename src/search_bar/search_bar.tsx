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

export interface SearchBarProps {
  value: string;
  on_change: (next: string) => void;
  placeholder?: string;
  clear_label?: string;
  className?: string;
  search_icon?: React.ReactNode;
  clear_icon?: React.ReactNode;
}

export function SearchBar({
  value,
  on_change,
  placeholder,
  clear_label,
  className,
  search_icon,
  clear_icon,
}: SearchBarProps) {
  return (
    <div className={className ?? "mb-5"}>
      <div className="flex items-center gap-3 px-4 h-11 rounded-xl bg-surf-secondary border border-edge-secondary transition-colors duration-150">
        {search_icon && (
          <span className="shrink-0 text-txt-muted">{search_icon}</span>
        )}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => on_change(e.target.value)}
          className="flex-1 bg-transparent outline-none text-sm text-txt-primary placeholder:text-txt-muted"
        />
        {value && (
          <button
            type="button"
            aria-label={clear_label}
            onClick={() => on_change("")}
            className="p-1 rounded-md transition-colors hover:bg-surf-hover text-txt-muted hover:text-txt-primary"
          >
            {clear_icon}
          </button>
        )}
      </div>
    </div>
  );
}

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

import { cn } from "../lib/cn";

export interface ThreadHiddenRowProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  label: string;
  icon?: React.ReactNode;
}

export const ThreadHiddenRow = React.forwardRef<HTMLButtonElement, ThreadHiddenRowProps>(
  ({ label, icon, className, type = "button", ...props }, ref) => (
    <div className={cn("aster_thread_hidden_row", className)}>
      <button
        ref={ref}
        className="aster_thread_hidden_button"
        type={type}
        {...props}
      >
        {icon ? (
          <span aria-hidden="true" className="aster_thread_hidden_icon">
            {icon}
          </span>
        ) : null}
        <span>{label}</span>
      </button>
    </div>
  ),
);

ThreadHiddenRow.displayName = "ThreadHiddenRow";

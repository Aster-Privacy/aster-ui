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
    <div className={cn("flex w-full items-center gap-3 px-6 py-2", className)}>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-[color-mix(in_srgb,var(--text-primary,#111827)_12%,transparent)]"
      />
      <button
        ref={ref}
        className="group inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full bg-[var(--aster-island-fill,var(--bg-primary))] px-3.5 text-[13px] font-medium text-[var(--text-secondary,#374151)] transition-colors duration-150 hover:bg-[color-mix(in_srgb,var(--text-primary,#111827)_8%,var(--aster-island-fill,var(--bg-primary)))] hover:text-[var(--text-primary,#111827)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color,#3b82f6)] motion-reduce:transition-none"
        type={type}
        {...props}
      >
        {icon ? (
          <span aria-hidden="true" className="inline-flex h-4 w-4 items-center justify-center">
            {icon}
          </span>
        ) : null}
        <span>{label}</span>
      </button>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-[color-mix(in_srgb,var(--text-primary,#111827)_12%,transparent)]"
      />
    </div>
  ),
);

ThreadHiddenRow.displayName = "ThreadHiddenRow";

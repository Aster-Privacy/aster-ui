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

function join_classes(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export interface StorageIndicatorProps {
  is_collapsed: boolean;
  logo_src: string;
  logo_alt: string;
  on_logo_click?: () => void;
  percentage?: number;
  storage_used_label?: string;
  usage_text?: string;
  actions_slot?: React.ReactNode;
  footer_slot?: React.ReactNode;
  collapsed_footer_slot?: React.ReactNode;
}

export function StorageIndicator({
  is_collapsed,
  logo_src,
  logo_alt,
  on_logo_click,
  percentage,
  storage_used_label,
  usage_text,
  actions_slot,
  footer_slot,
  collapsed_footer_slot,
}: StorageIndicatorProps) {
  const show_metric = typeof percentage === "number" && !!usage_text;
  const clamped = Math.min(100, Math.max(0, percentage ?? 0));

  if (is_collapsed) {
    return (
      <div className="px-2 pt-2 pb-3 border-t border-edge-primary flex flex-col items-center gap-2">
        <button
          aria-label={logo_alt}
          className="w-8 h-8 flex items-center justify-center rounded-[10px] hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
          type="button"
          onClick={on_logo_click}
        >
          <img
            alt={logo_alt}
            className="w-6 h-auto select-none"
            decoding="async"
            draggable={false}
            src={logo_src}
          />
        </button>
        {collapsed_footer_slot}
      </div>
    );
  }

  return (
    <div className="px-3 pt-3 pb-3 border-t border-edge-primary">
      <div className="flex items-center justify-between gap-2 mb-2">
        <button
          aria-label={logo_alt}
          className="flex items-center rounded-[8px] px-1 py-1 -mx-1 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
          type="button"
          onClick={on_logo_click}
        >
          <img
            alt={logo_alt}
            className="h-4 w-auto select-none"
            decoding="async"
            draggable={false}
            src={logo_src}
          />
        </button>
        {actions_slot}
      </div>
      {show_metric && (
        <>
          <div className="flex items-center justify-between text-[10px] text-txt-muted mb-1">
            {storage_used_label && <span>{storage_used_label}</span>}
            <span className="tabular-nums">{Math.round(clamped)}%</span>
          </div>
          <div
            className={join_classes(
              "h-1 w-full rounded-full overflow-hidden",
              "bg-black/[0.06] dark:bg-white/[0.06]",
            )}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${clamped}%`,
                backgroundColor: "var(--text-primary)",
              }}
            />
          </div>
          <div className="text-[10px] text-txt-muted mt-1 tabular-nums">
            {usage_text}
          </div>
        </>
      )}
      {footer_slot && <div className="mt-2">{footer_slot}</div>}
    </div>
  );
}

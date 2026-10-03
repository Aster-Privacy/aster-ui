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

import { Skeleton } from "../skeleton";

export interface StorageMeterLabels {
  storage_used: string;
  under_one_percent: string;
  of: string;
  open?: string;
  buy_more?: string;
}

export interface StorageMeterViewProps {
  storage_percentage: number;
  used_text: string;
  total_text: string;
  percent_text: string;
  is_loading?: boolean;
  labels: StorageMeterLabels;
  on_buy_more?: () => void;
  on_open?: () => void;
  className?: string;
}

export const StorageMeterView = React.memo(function StorageMeterView({
  storage_percentage,
  used_text,
  total_text,
  percent_text,
  is_loading = false,
  labels,
  on_buy_more,
  on_open,
  className = "",
}: StorageMeterViewProps) {
  if (is_loading) {
    return (
      <div className={className}>
        <Skeleton className="h-1.5 w-full rounded-full" />
      </div>
    );
  }

  const is_critical = storage_percentage >= 90;

  const meter_body = (
    <>
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-medium tracking-wide text-txt-muted">
          {labels.storage_used}
        </span>
        <span
          className="text-[10px] tabular-nums font-medium"
          style={{
            color: is_critical ? "var(--color-danger)" : "var(--text-tertiary)",
          }}
        >
          {storage_percentage > 0 && storage_percentage < 1
            ? labels.under_one_percent
            : percent_text}
        </span>
      </div>
      <div
        aria-label={labels.storage_used}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={Math.round(storage_percentage)}
        className="h-1.5 w-full rounded-full overflow-hidden"
        role="progressbar"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--text-muted) 26%, transparent)",
        }}
      >
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            minWidth: "10px",
            width: `${storage_percentage}%`,
            backgroundColor: is_critical
              ? "var(--color-danger)"
              : "var(--accent-color)",
          }}
        />
      </div>
    </>
  );

  return (
    <div className={className}>
      {on_open ? (
        <button
          aria-label={labels.open}
          className="w-full text-left cursor-pointer rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-brand"
          title={labels.open}
          type="button"
          onClick={on_open}
        >
          {meter_body}
        </button>
      ) : (
        meter_body
      )}
      <div className="flex items-center justify-between mt-1.5 gap-2">
        <p className="text-[9px] text-txt-muted truncate">
          {used_text} {labels.of} {total_text}
        </p>
        {on_buy_more && (
          <button
            className="text-[9px] flex-shrink-0 text-txt-muted transition-colors hover:text-brand hover:underline focus:outline-none"
            type="button"
            onClick={on_buy_more}
          >
            {labels.buy_more}
          </button>
        )}
      </div>
    </div>
  );
});

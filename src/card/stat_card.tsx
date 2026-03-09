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
import { Card, type CardProps } from "./card";

interface StatTrend {
  direction: "up" | "down" | "neutral";
  value: string;
}

interface StatCardProps extends Omit<CardProps, "children"> {
  value: string;
  label: string;
  trend?: StatTrend;
}

const TrendArrowUp = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 2.5L9.5 6H7.5V9.5H4.5V6H2.5L6 2.5Z" fill="currentColor" />
  </svg>
);

const TrendArrowDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 9.5L2.5 6H4.5V2.5H7.5V6H9.5L6 9.5Z" fill="currentColor" />
  </svg>
);

const trend_class_map: Record<string, string> = {
  up: "aster_stat_card_trend aster_stat_card_trend_up",
  down: "aster_stat_card_trend aster_stat_card_trend_down",
  neutral: "aster_stat_card_trend aster_stat_card_trend_neutral",
};

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ value, label, trend, className, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={["aster_stat_card", className].filter(Boolean).join(" ")}
        {...props}
      >
        <p className="aster_stat_card_value">{value}</p>
        <p className="aster_stat_card_label">{label}</p>
        {trend && (
          <span className={trend_class_map[trend.direction]}>
            {trend.direction === "up" && <TrendArrowUp />}
            {trend.direction === "down" && <TrendArrowDown />}
            {trend.value}
          </span>
        )}
      </Card>
    );
  }
);

StatCard.displayName = "StatCard";

export { StatCard };
export type { StatCardProps, StatTrend };

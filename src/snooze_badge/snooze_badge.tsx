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
import { EmailTag } from "../email_tag";

export interface SnoozeTimeUnits {
  now: string;
  days_short: string;
  hours_short: string;
  minutes_short: string;
}

export const default_snooze_time_units: SnoozeTimeUnits = {
  now: "Now",
  days_short: "d",
  hours_short: "h",
  minutes_short: "m",
};

export interface SnoozeBadgeProps {
  snoozed_until: string;
  muted?: boolean;
  size?: "xs" | "sm" | "default" | "lg";
  className?: string;
  units?: SnoozeTimeUnits;
}

export function format_snooze_time_remaining(
  target: Date,
  units: SnoozeTimeUnits = default_snooze_time_units,
): string {
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return units.now;
  }

  const minutes = Math.max(1, Math.floor(diff / 60000));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const day_unit = units.days_short;
  const hour_unit = units.hours_short;
  const minute_unit = units.minutes_short;

  if (days > 0) {
    const remaining_hours = hours % 24;

    if (remaining_hours > 0 && days < 7) {
      return `${days}${day_unit} ${remaining_hours}${hour_unit}`;
    }

    return `${days}${day_unit}`;
  }

  if (hours > 0) {
    const remaining_minutes = minutes % 60;

    if (remaining_minutes > 0 && hours < 12) {
      return `${hours}${hour_unit} ${remaining_minutes}${minute_unit}`;
    }

    return `${hours}${hour_unit}`;
  }

  return `${minutes}${minute_unit}`;
}

function get_update_interval(target: Date): number {
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return 0;
  }

  if (diff <= 5 * 60 * 1000) {
    return 10 * 1000;
  }

  if (diff <= 60 * 60 * 1000) {
    return 30 * 1000;
  }

  return 60 * 1000;
}

export function SnoozeBadge({
  snoozed_until,
  muted = false,
  size = "default",
  className,
  units = default_snooze_time_units,
}: SnoozeBadgeProps) {
  const target_date = React.useMemo(
    () => new Date(snoozed_until),
    [snoozed_until],
  );
  const [time_remaining, set_time_remaining] = React.useState(() =>
    format_snooze_time_remaining(target_date, units),
  );

  React.useEffect(() => {
    set_time_remaining(format_snooze_time_remaining(target_date, units));

    const update_time = () => {
      set_time_remaining(format_snooze_time_remaining(target_date, units));
    };

    let interval_id: number | null = null;

    const schedule_next_update = () => {
      const interval = get_update_interval(target_date);

      if (interval > 0) {
        interval_id = window.setInterval(() => {
          update_time();
          const new_interval = get_update_interval(target_date);

          if (new_interval !== interval && interval_id !== null) {
            window.clearInterval(interval_id);
            schedule_next_update();
          }
        }, interval);
      }
    };

    schedule_next_update();

    return () => {
      if (interval_id !== null) {
        window.clearInterval(interval_id);
      }
    };
  }, [target_date, units]);

  return (
    <EmailTag
      className={cn(className)}
      label={time_remaining}
      muted={muted}
      size={size}
      variant="snoozed"
    />
  );
}

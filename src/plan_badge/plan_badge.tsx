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
import { cn } from "../lib/cn";

export type PlanBadgeTier = "star" | "nova" | "supernova";

export function plan_badge_tier(
  plan_code: string | null | undefined,
): PlanBadgeTier | null {
  const normalized = (plan_code ?? "").trim().toLowerCase();

  if (normalized === "star") return "star";
  if (normalized === "nova") return "nova";
  if (normalized === "supernova") return "supernova";

  return null;
}

export interface PlanBadgeViewProps {
  tier: PlanBadgeTier | null;
  label: string;
  aria_label?: string;
  title?: string;
  className?: string;
}

export function PlanBadgeView({
  tier,
  label,
  aria_label,
  title,
  className,
}: PlanBadgeViewProps) {
  if (!tier) return null;

  return (
    <span
      aria-label={aria_label}
      className={cn("plan_badge", `plan_badge_tier_${tier}`, className)}
      title={title}
    >
      {label}
    </span>
  );
}

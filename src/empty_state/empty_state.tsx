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

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  min_height?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  min_height,
}: EmptyStateProps) {
  const base =
    "relative flex flex-col items-center justify-center h-full px-4";
  const merged = [base, min_height ? min_height : "", className || ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={merged}>
      {icon && <div className="mb-4">{icon}</div>}
      <div className="text-center">
        <p className="text-sm sm:text-base font-medium text-txt-primary mb-1">
          {title}
        </p>
        {description && (
          <p className="text-xs sm:text-sm text-txt-muted max-w-[260px] mx-auto">
            {description}
          </p>
        )}
        {action && <div className="mt-6 flex justify-center">{action}</div>}
      </div>
    </div>
  );
}

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

import { BLOCKING_DIALOG_ICON_PATHS } from "../blocking_dialog/blocking_dialog";

export interface SuspensionBannerViewProps {
  label: ReactNode;
  reason: ReactNode;
  appeal_label: ReactNode;
  appeal_href: string;
}

export function SuspensionBannerView({
  label,
  reason,
  appeal_label,
  appeal_href,
}: SuspensionBannerViewProps) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-2.5 text-sm border-b"
      style={{
        backgroundColor: "var(--bg-tertiary)",
        borderColor: "var(--border-secondary)",
        color: "var(--text-secondary)",
      }}
    >
      <svg
        className="w-4 h-4 flex-shrink-0"
        fill="currentColor"
        style={{ color: "var(--color-error, #ef4444)" }}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d={BLOCKING_DIALOG_ICON_PATHS.warning}
          fillRule="evenodd"
        />
      </svg>
      <span className="flex-1 min-w-0">
        <span className="font-medium" style={{ color: "var(--text-primary)" }}>
          {label}
        </span>{" "}
        {reason}{" "}
        <a
          className="hover:underline whitespace-nowrap"
          href={appeal_href}
          rel="noopener noreferrer"
          style={{ color: "var(--accent-color)" }}
          target="_blank"
        >
          {appeal_label}
        </a>
      </span>
    </div>
  );
}

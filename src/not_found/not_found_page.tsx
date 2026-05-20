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

export interface NotFoundPageProps {
  title?: string;
  message?: string;
  cta_label?: string;
  on_navigate_home?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export function NotFoundPage({
  title = "404",
  message,
  cta_label,
  on_navigate_home,
  className,
  children,
}: NotFoundPageProps) {
  return (
    <main
      className={join_classes(
        "flex flex-col items-center justify-center min-h-[60vh] w-full px-6 text-center",
        className,
      )}
    >
      <p className="text-[64px] leading-none font-semibold tracking-tight text-[var(--text-primary,#111)]">
        {title}
      </p>
      {message && (
        <p className="mt-3 max-w-md text-[14px] text-[var(--text-muted,#666)]">
          {message}
        </p>
      )}
      {cta_label && on_navigate_home && (
        <button
          type="button"
          onClick={on_navigate_home}
          className="mt-6 inline-flex items-center gap-2 rounded-[12px] px-4 py-2 text-[13px] font-medium bg-[var(--text-primary,#111)] text-[var(--bg-primary,#fff)] hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info,#3b82f6)]"
        >
          {cta_label}
        </button>
      )}
      {children}
    </main>
  );
}

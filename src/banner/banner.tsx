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

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: React.ReactNode;
  text: string;
  action_label?: string;
  action_href?: string;
  on_action?: () => void;
  on_dismiss?: () => void;
  show_close?: boolean;
  dismiss_label?: string;
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      className,
      badge,
      text,
      action_label,
      action_href,
      on_action,
      on_dismiss,
      show_close = true,
      dismiss_label = "Dismiss",
      ...props
    },
    ref
  ) => {
    const classes = ["aster_banner", className].filter(Boolean).join(" ");

    return (
      <div className={classes} ref={ref} {...props}>
        <div className="aster_banner_content">
          {badge}
          <p className="aster_banner_text">{text}</p>
          {action_label && (
            <a
              href={action_href || "#"}
              className="aster_banner_action"
              onClick={on_action}
            >
              {action_label}
              <svg
                className="aster_banner_arrow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          )}
        </div>
        {show_close && on_dismiss && (
          <button
            className="aster_banner_close"
            aria-label={dismiss_label}
            onClick={on_dismiss}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Banner.displayName = "Banner";

export { Banner };
export type { BannerProps };

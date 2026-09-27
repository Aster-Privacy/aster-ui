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
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
  type TouchEvent as ReactTouchEvent,
} from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export interface MobileDrawerHeaderViewProps {
  logo_src: string;
  logo_alt?: string;
  title: string;
  subtitle: string;
  on_click: () => void;
}

export function MobileDrawerHeaderView({
  logo_src,
  logo_alt = "Aster",
  title,
  subtitle,
  on_click,
}: MobileDrawerHeaderViewProps) {
  return (
    <div className="px-4 pb-4 pt-5">
      <button
        className="flex w-full items-center gap-3.5"
        type="button"
        onClick={on_click}
      >
        <div className="relative h-11 w-11 shrink-0">
          <img
            alt={logo_alt}
            className="h-full w-full select-none rounded-xl"
            draggable={false}
            src={logo_src}
          />
        </div>
        <div className="min-w-0 flex-1">
          <span className="block truncate text-start text-[17px] font-semibold text-[var(--text-primary)]">
            {title}
          </span>
          <span className="block truncate text-start text-[13px] text-[var(--text-muted)]">
            {subtitle}
          </span>
        </div>
        <ChevronDownIcon className="h-5 w-5 shrink-0 text-[var(--text-muted)]" />
      </button>
    </div>
  );
}

const BOUNCE_RELEASE_TRANSITION =
  "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

export interface MobileDrawerScrollAreaProps {
  children: ReactNode;
}

export function MobileDrawerScrollArea({
  children,
}: MobileDrawerScrollAreaProps) {
  const scroll_ref = useRef<HTMLDivElement>(null);
  const content_ref = useRef<HTMLDivElement>(null);
  const origin_y = useRef(0);
  const last_touch_y = useRef(0);
  const is_bouncing = useRef(false);

  const handle_touch_start = useCallback((e: ReactTouchEvent) => {
    last_touch_y.current = e.touches[0].clientY;
    is_bouncing.current = false;
  }, []);

  const handle_touch_move = useCallback((e: ReactTouchEvent) => {
    const el = scroll_ref.current;
    const content = content_ref.current;

    if (!el || !content) return;

    const current_y = e.touches[0].clientY;
    const incremental_delta = current_y - last_touch_y.current;

    last_touch_y.current = current_y;
    const at_top = el.scrollTop <= 0;
    const at_bottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

    if (at_top && incremental_delta > 0) {
      if (!is_bouncing.current) {
        is_bouncing.current = true;
        origin_y.current = current_y;
      }
      const overscroll = (current_y - origin_y.current) * 0.4;

      content.style.transform = `translateY(${Math.min(Math.max(overscroll, 0), 80)}px)`;
      content.style.transition = "none";
    } else if (at_bottom && incremental_delta < 0) {
      if (!is_bouncing.current) {
        is_bouncing.current = true;
        origin_y.current = current_y;
      }
      const overscroll = (current_y - origin_y.current) * 0.4;

      content.style.transform = `translateY(${Math.max(Math.min(overscroll, 0), -80)}px)`;
      content.style.transition = "none";
    } else if (is_bouncing.current) {
      is_bouncing.current = false;
      content.style.transform = "translateY(0)";
      content.style.transition = BOUNCE_RELEASE_TRANSITION;
    }
  }, []);

  const handle_touch_end = useCallback(() => {
    const content = content_ref.current;

    if (!content || !is_bouncing.current) return;
    is_bouncing.current = false;
    content.style.transform = "translateY(0)";
    content.style.transition = BOUNCE_RELEASE_TRANSITION;
  }, []);

  return (
    <div
      ref={scroll_ref}
      className="flex-1 overflow-y-auto overscroll-y-auto px-2.5 pb-2 pt-0.5"
      style={{ WebkitOverflowScrolling: "touch" }}
      onTouchEnd={handle_touch_end}
      onTouchMove={handle_touch_move}
      onTouchStart={handle_touch_start}
    >
      <div ref={content_ref}>{children}</div>
    </div>
  );
}

export interface MobileDrawerIndicatorStyle {
  y: number;
  height: number;
  opacity: number;
}

export function use_drawer_nav_indicator(
  container_ref: RefObject<HTMLElement>,
  is_open: boolean,
  active_key: string,
): MobileDrawerIndicatorStyle {
  const [indicator_style, set_indicator_style] =
    useState<MobileDrawerIndicatorStyle>({ y: 0, height: 0, opacity: 0 });

  useLayoutEffect(() => {
    if (!is_open || !container_ref.current) return;
    const container = container_ref.current;
    const active_btn = container.querySelector(
      "[data-nav-active='true']",
    ) as HTMLElement | null;

    if (!active_btn) {
      set_indicator_style((prev) => ({ ...prev, opacity: 0 }));

      return;
    }
    const container_rect = container.getBoundingClientRect();
    const btn_rect = active_btn.getBoundingClientRect();
    const y = Math.round(
      btn_rect.top - container_rect.top + container.scrollTop,
    );
    const height = Math.round(btn_rect.height);

    set_indicator_style({ y, height, opacity: 1 });
  }, [is_open, active_key]);

  return indicator_style;
}

export interface MobileDrawerNavIndicatorProps {
  indicator_style: MobileDrawerIndicatorStyle;
}

export function MobileDrawerNavIndicator({
  indicator_style,
}: MobileDrawerNavIndicatorProps) {
  return (
    <div
      className="pointer-events-none absolute start-0 w-full rounded-[16px]"
      style={{
        top: 0,
        transform: `translateY(${indicator_style.y}px)`,
        height: indicator_style.height,
        opacity: indicator_style.opacity,
        backgroundColor: "var(--mobile-indicator-bg, var(--indicator-bg))",
        zIndex: 0,
        transition: "opacity 150ms ease",
      }}
    />
  );
}

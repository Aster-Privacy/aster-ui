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
  useEffect,
  useRef,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  type Ref,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "../lib/cn";

export interface MobileDrawerShellProps {
  is_open: boolean;
  on_close: () => void;
  children: ReactNode;
  width?: number;
  max_width_vw?: number;
  safe_area_top?: number | string;
  safe_area_bottom?: number | string;
  reduce_motion?: boolean;
  lock_body_scroll?: boolean;
  side?: "left" | "right" | "start";
  background_color?: string;
  panel_ref?: Ref<HTMLElement>;
  panel_class_name?: string;
  width_class_name?: string;
  focusable?: boolean;
  hide_when_closed?: boolean;
  on_backdrop_pointer_down?: (event: ReactPointerEvent<HTMLDivElement>) => void;
}

function assign_ref<T>(ref: Ref<T> | undefined, value: T | null): void {
  if (!ref) return;
  if (typeof ref === "function") {
    ref(value);

    return;
  }
  (ref as { current: T | null }).current = value;
}

export function MobileDrawerShell({
  is_open,
  on_close,
  children,
  width = 320,
  max_width_vw = 85,
  safe_area_top = 0,
  safe_area_bottom = 0,
  reduce_motion = false,
  lock_body_scroll = true,
  side = "left",
  background_color = "var(--mobile-sidebar-bg, var(--bg-primary))",
  panel_ref,
  panel_class_name,
  width_class_name,
  focusable = false,
  hide_when_closed = false,
  on_backdrop_pointer_down,
}: MobileDrawerShellProps) {
  const nav_ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!lock_body_scroll) return;
    if (is_open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [is_open, lock_body_scroll]);

  const set_nav_ref = useCallback(
    (node: HTMLElement | null) => {
      nav_ref.current = node;
      assign_ref(panel_ref, node);
    },
    [panel_ref],
  );

  const is_start = side === "start";
  const is_rtl_start =
    is_start &&
    typeof document !== "undefined" &&
    document.documentElement.dir === "rtl";
  const closed_x = side === "right" || is_rtl_start ? "100%" : "-100%";

  return (
    <>
      <AnimatePresence>
        {is_open && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-black/50"
            exit={{ opacity: 0 }}
            initial={reduce_motion ? false : { opacity: 0 }}
            transition={{ duration: reduce_motion ? 0 : 0.2 }}
            onClick={on_backdrop_pointer_down ? undefined : on_close}
            onPointerDown={on_backdrop_pointer_down}
          />
        )}
      </AnimatePresence>

      <motion.nav
        ref={set_nav_ref}
        animate={{ x: is_open ? 0 : closed_x }}
        className={cn(
          "fixed inset-y-0 z-50 flex flex-col",
          is_start && "start-0",
          width_class_name,
          focusable && "outline-none",
          panel_class_name,
        )}
        initial={false}
        style={{
          ...(is_start ? {} : { [side]: 0 }),
          ...(width_class_name
            ? {}
            : { width, maxWidth: `${max_width_vw}vw` }),
          paddingTop: safe_area_top,
          paddingBottom: safe_area_bottom,
          backgroundColor: background_color,
          willChange: "transform",
          pointerEvents: is_open ? "auto" : "none",
        }}
        tabIndex={focusable ? -1 : undefined}
        transition={
          reduce_motion
            ? { duration: 0 }
            : { type: "tween", duration: 0.25, ease: "easeOut" }
        }
        onAnimationComplete={(definition) => {
          if (!hide_when_closed) return;
          if (
            typeof definition === "object" &&
            definition !== null &&
            "x" in definition &&
            definition.x === closed_x &&
            nav_ref.current
          ) {
            nav_ref.current.style.visibility = "hidden";
          }
        }}
        onAnimationStart={() => {
          if (!hide_when_closed) return;
          if (nav_ref.current) nav_ref.current.style.visibility = "visible";
        }}
      >
        {children}
      </motion.nav>
    </>
  );
}

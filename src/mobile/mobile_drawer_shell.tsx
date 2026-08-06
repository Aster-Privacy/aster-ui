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
import { useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  side?: "left" | "right";
  background_color?: string;
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
}: MobileDrawerShellProps) {
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

  const closed_x = side === "left" ? -width : width;

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
            onClick={on_close}
          />
        )}
      </AnimatePresence>

      <motion.nav
        animate={{ x: is_open ? 0 : closed_x }}
        className="fixed inset-y-0 z-50 flex flex-col"
        initial={false}
        style={{
          [side]: 0,
          width,
          maxWidth: `${max_width_vw}vw`,
          paddingTop: safe_area_top,
          paddingBottom: safe_area_bottom,
          backgroundColor: background_color,
          willChange: "transform",
          pointerEvents: is_open ? "auto" : "none",
        }}
        transition={
          reduce_motion
            ? { duration: 0 }
            : { type: "tween", duration: 0.25, ease: "easeOut" }
        }
      >
        {children}
      </motion.nav>
    </>
  );
}

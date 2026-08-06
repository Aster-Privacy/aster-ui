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
import { memo, useEffect, type ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useDragControls,
  type PanInfo,
} from "framer-motion";

export interface MobileActionSheetShellProps {
  is_open: boolean;
  on_close: () => void;
  children: ReactNode;
  safe_area_bottom?: number | string;
  reduce_motion?: boolean;
  lock_body_scroll?: boolean;
  background_color?: string;
  max_height_vh?: number;
  z_index_backdrop?: number;
  z_index_panel?: number;
  show_handle?: boolean;
}

export const MobileActionSheetShell = memo(function MobileActionSheetShell({
  is_open,
  on_close,
  children,
  safe_area_bottom = 0,
  reduce_motion = false,
  lock_body_scroll = true,
  background_color = "var(--bg-primary)",
  max_height_vh = 85,
  z_index_backdrop = 60,
  z_index_panel = 61,
  show_handle = true,
}: MobileActionSheetShellProps) {
  const drag_controls = useDragControls();

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

  const handle_drag_end = (_: unknown, info: PanInfo) => {
    if (info.offset.y > 100 || info.velocity.y > 300) {
      on_close();
    }
  };

  return (
    <AnimatePresence>
      {is_open && (
        <>
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/40"
            style={{ zIndex: z_index_backdrop }}
            exit={{ opacity: 0 }}
            initial={reduce_motion ? false : { opacity: 0 }}
            transition={{ duration: reduce_motion ? 0 : 0.2 }}
            onClick={on_close}
          />

          <motion.div
            animate={{ y: 0 }}
            className="fixed inset-x-0 bottom-0 flex flex-col rounded-t-2xl"
            drag="y"
            dragConstraints={{ top: 0 }}
            dragControls={drag_controls}
            dragElastic={0.2}
            dragListener={false}
            exit={{ y: "100%" }}
            initial={reduce_motion ? false : { y: "100%" }}
            style={{
              zIndex: z_index_panel,
              maxHeight: `${max_height_vh}vh`,
              backgroundColor: background_color,
              paddingBottom: safe_area_bottom,
            }}
            transition={
              reduce_motion
                ? { duration: 0 }
                : { type: "tween", duration: 0.25, ease: "easeOut" }
            }
            onDragEnd={handle_drag_end}
          >
            {show_handle && (
              <div
                className="flex shrink-0 cursor-grab justify-center py-2 active:cursor-grabbing"
                style={{ touchAction: "none" }}
                onPointerDown={(e) => drag_controls.start(e)}
              >
                <div className="h-1 w-10 rounded-full bg-[var(--text-muted)] opacity-30" />
              </div>
            )}
            <div
              className="flex-1 overflow-y-auto overscroll-contain"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

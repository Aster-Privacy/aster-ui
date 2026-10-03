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

import { AnimatePresence, motion } from "framer-motion";
import { WifiIcon } from "@heroicons/react/24/outline";

import { cn } from "../lib/cn";

export type OfflineIndicatorPosition = "top" | "bottom";

export interface OfflineIndicatorViewProps {
  is_online: boolean;
  show_reconnected: boolean;
  offline_label: string;
  reconnected_label: string;
  position?: OfflineIndicatorPosition;
  reduce_motion?: boolean;
  className?: string;
}

export function OfflineIndicatorView({
  is_online,
  show_reconnected,
  offline_label,
  reconnected_label,
  position = "bottom",
  reduce_motion = false,
  className,
}: OfflineIndicatorViewProps) {
  const position_classes =
    position === "top" ? "top-0 left-0 right-0" : "bottom-0 left-0 right-0";
  const hidden_y = position === "top" ? -20 : 20;

  return (
    <AnimatePresence>
      {!is_online && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "fixed z-50 flex items-center justify-center gap-2 px-4 py-2",
            "bg-amber-500 text-white text-sm font-medium shadow-lg",
            position_classes,
            className,
          )}
          exit={{ opacity: 0, y: hidden_y }}
          initial={reduce_motion ? false : { opacity: 0, y: hidden_y }}
          transition={{ duration: reduce_motion ? 0 : 0.2 }}
        >
          <WifiIcon className="h-4 w-4" />
          <span>{offline_label}</span>
        </motion.div>
      )}

      {is_online && show_reconnected && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "fixed z-50 flex items-center justify-center gap-2 px-4 py-2",
            "bg-green-500 text-white text-sm font-medium shadow-lg",
            position_classes,
            className,
          )}
          exit={{ opacity: 0, y: hidden_y }}
          initial={reduce_motion ? false : { opacity: 0, y: hidden_y }}
          transition={{ duration: reduce_motion ? 0 : 0.2 }}
        >
          <WifiIcon className="h-4 w-4" />
          <span>{reconnected_label}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

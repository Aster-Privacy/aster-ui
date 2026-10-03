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

import { COMPOSE_ICON_PATHS } from "./toolbar";

export type DraftStatus = "idle" | "saving" | "saved" | "error";

export interface DraftStatusLabels {
  saving: string;
  save_failed: string;
  saved: string;
}

export interface DraftStatusIndicatorProps {
  status: DraftStatus;
  reduce_motion: boolean;
  labels: DraftStatusLabels;
}

export function DraftStatusIndicator({
  status,
  reduce_motion,
  labels,
}: DraftStatusIndicatorProps) {
  return (
    <AnimatePresence>
      {status !== "idle" && (
        <motion.div
          animate={{ opacity: 1 }}
          className="aster_draft_status"
          exit={{ opacity: 0 }}
          initial={reduce_motion ? false : { opacity: 0 }}
          transition={{ duration: reduce_motion ? 0 : 0.2, ease: "easeOut" }}
        >
          <AnimatePresence initial={false} mode="wait">
            {status === "saving" ? (
              <motion.div
                key="saving"
                animate={{ opacity: 1 }}
                className="aster_draft_status_item"
                exit={{ opacity: 0 }}
                initial={reduce_motion ? false : { opacity: 0 }}
                transition={{ duration: reduce_motion ? 0 : 0.15 }}
              >
                <div
                  aria-label={labels.saving}
                  className="aster_draft_progress"
                  role="progressbar"
                >
                  <motion.div
                    animate={
                      reduce_motion ? { x: "0%" } : { x: ["-100%", "250%"] }
                    }
                    className="aster_draft_progress_bar"
                    transition={
                      reduce_motion
                        ? { duration: 0 }
                        : { duration: 1.1, ease: "easeInOut", repeat: Infinity }
                    }
                  />
                </div>
              </motion.div>
            ) : status === "error" ? (
              <motion.div
                key="error"
                animate={{ opacity: 1 }}
                className="aster_draft_status_item aster_draft_status_error"
                exit={{ opacity: 0 }}
                initial={reduce_motion ? false : { opacity: 0 }}
                transition={{ duration: reduce_motion ? 0 : 0.15 }}
              >
                <svg
                  className="aster_draft_status_icon"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" x2="12" y1="8" y2="12" />
                  <line x1="12" x2="12.01" y1="16" y2="16" />
                </svg>
                <span>{labels.save_failed}</span>
              </motion.div>
            ) : (
              <motion.div
                key="saved"
                animate={{ opacity: 1 }}
                className="aster_draft_status_item"
                exit={{ opacity: 0 }}
                initial={reduce_motion ? false : { opacity: 0 }}
                transition={{ duration: reduce_motion ? 0 : 0.15 }}
              >
                <svg
                  className="aster_draft_status_icon"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={COMPOSE_ICON_PATHS.saved} />
                </svg>
                <span>{labels.saved}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

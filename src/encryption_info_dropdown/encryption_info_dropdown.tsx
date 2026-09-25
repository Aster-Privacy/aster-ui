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

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckBadgeIcon,
  ShieldExclamationIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";

import { LockIcon } from "../icons/icons";

export type EncryptionSenderVerification =
  | "verified"
  | "invalid"
  | "unsigned"
  | "no_keys"
  | "unknown";

export interface EncryptionInfoDropdownViewProps {
  is_open: boolean;
  on_open_change: (is_open: boolean) => void;
  is_encrypted: boolean;
  has_pq_protection: boolean;
  heading: ReactNode;
  description: ReactNode;
  size?: number;
  label?: ReactNode;
  sender_verification?: EncryptionSenderVerification;
  sender_title?: ReactNode;
  sender_description?: ReactNode;
  sender_invalid_short_label?: ReactNode;
  reduce_motion?: boolean;
}

const PANEL_WIDTH = 288;
const PANEL_GAP = 8;
const VIEWPORT_MARGIN = 8;

export const ENCRYPTED_LOCK_COLOR = "rgb(59, 130, 246)";

export function EncryptionInfoDropdownView({
  is_open,
  on_open_change,
  is_encrypted,
  has_pq_protection,
  heading,
  description,
  size = 18,
  label,
  sender_verification,
  sender_title,
  sender_description,
  sender_invalid_short_label,
  reduce_motion = false,
}: EncryptionInfoDropdownViewProps) {
  const panel_id = useId();
  const container_ref = useRef<HTMLDivElement>(null);
  const panel_ref = useRef<HTMLDivElement>(null);
  const [panel_position, set_panel_position] = useState({ top: 0, left: 0 });

  const place_panel = useCallback(() => {
    const trigger = container_ref.current;

    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    const panel_width = panel_ref.current?.offsetWidth ?? PANEL_WIDTH;
    const panel_height = panel_ref.current?.offsetHeight ?? 0;
    const is_rtl = document.dir === "rtl";
    const preferred_left = is_rtl ? rect.right - panel_width : rect.left;
    const max_left = window.innerWidth - panel_width - VIEWPORT_MARGIN;
    const left = Math.max(
      VIEWPORT_MARGIN,
      Math.min(preferred_left, Math.max(VIEWPORT_MARGIN, max_left)),
    );
    const below = rect.bottom + PANEL_GAP;
    const fits_below =
      below + panel_height + VIEWPORT_MARGIN <= window.innerHeight;
    const top = fits_below
      ? below
      : Math.max(VIEWPORT_MARGIN, rect.top - PANEL_GAP - panel_height);

    set_panel_position({ top, left });
  }, []);

  useEffect(() => {
    if (!is_open) return;

    const handle_pointer_down = (event: PointerEvent) => {
      const target = event.target as Node | null;

      if (!target) return;
      if (container_ref.current?.contains(target)) return;
      if (panel_ref.current?.contains(target)) return;
      on_open_change(false);
    };

    document.addEventListener("pointerdown", handle_pointer_down);

    return () => {
      document.removeEventListener("pointerdown", handle_pointer_down);
    };
  }, [is_open, on_open_change]);

  useLayoutEffect(() => {
    if (!is_open) return;

    place_panel();
  }, [is_open, place_panel]);

  useEffect(() => {
    if (!is_open) return;

    const handle = () => place_panel();

    window.addEventListener("resize", handle);
    window.addEventListener("scroll", handle, true);

    return () => {
      window.removeEventListener("resize", handle);
      window.removeEventListener("scroll", handle, true);
    };
  }, [is_open, place_panel]);

  const lock_color = is_encrypted ? ENCRYPTED_LOCK_COLOR : "var(--text-muted)";
  const show_sender =
    sender_verification !== undefined && sender_verification !== "unknown";

  return (
    <div ref={container_ref} className="relative inline-flex">
      <button
        aria-controls={is_open ? panel_id : undefined}
        aria-expanded={is_open}
        aria-haspopup="dialog"
        className="flex-shrink-0 flex items-center gap-1 transition-colors hover:opacity-80"
        style={{ color: lock_color }}
        onClick={(e) => {
          e.stopPropagation();
          on_open_change(!is_open);
        }}
      >
        <LockIcon size={size} />
        {label && <span className="text-xs font-medium">{label}</span>}
        {sender_verification === "invalid" && (
          <span
            className="flex items-center gap-0.5 text-red-500"
            data-testid="sender-signature-mismatch"
          >
            <ShieldExclamationIcon
              aria-hidden="true"
              className="w-3.5 h-3.5 flex-shrink-0"
            />
            <span className="text-xs font-medium">
              {sender_invalid_short_label}
            </span>
          </span>
        )}
      </button>

      {createPortal(
        <AnimatePresence>
          {is_open && (
            <motion.div
              ref={panel_ref}
              animate={{ opacity: 1, y: 0 }}
              className="aster_floating fixed z-[200] w-72 max-w-[calc(100vw-24px)]"
              exit={{ opacity: 0, y: -4 }}
              id={panel_id}
              initial={reduce_motion ? false : { opacity: 0, y: -4 }}
              style={{ top: panel_position.top, left: panel_position.left }}
              transition={{
                duration: reduce_motion ? 0 : 0.15,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <div className="text-[13px] leading-[19px] space-y-2 text-txt-muted">
                  <div className="flex items-center gap-2">
                    <div
                      className="flex-shrink-0"
                      style={{ color: lock_color }}
                    >
                      <LockIcon size={16} />
                    </div>
                    <p className="text-[14px] leading-5 font-semibold text-txt-primary">{heading}</p>
                  </div>
                  <p className="ps-6">{description}</p>
                  <p className="ps-6 text-txt-muted">
                    AES-256-GCM · {has_pq_protection ? "ML-KEM-768" : "KEM-768"}
                  </p>
                  {show_sender && (
                    <div className="pt-3 mt-3 border-t border-[var(--aster-floating-divider)]">
                      <div className="flex items-center gap-2">
                        <div className="flex-shrink-0">
                          {sender_verification === "verified" && (
                            <CheckBadgeIcon className="w-4 h-4 text-emerald-500" />
                          )}
                          {sender_verification === "invalid" && (
                            <ShieldExclamationIcon className="w-4 h-4 text-red-500" />
                          )}
                          {(sender_verification === "no_keys" ||
                            sender_verification === "unsigned") && (
                            <QuestionMarkCircleIcon className="w-4 h-4 text-amber-500" />
                          )}
                        </div>
                        <p className="font-medium text-txt-primary">
                          {sender_title}
                        </p>
                      </div>
                      <p className="ps-6 mt-1">{sender_description}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  );
}

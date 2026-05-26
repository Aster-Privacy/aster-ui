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
import { motion, AnimatePresence } from "framer-motion";

export type ToastKind = "success" | "error" | "info" | "warning";

export interface ToastPayload {
  id: number;
  message: string;
  kind: ToastKind;
  duration_ms: number;
}

type Subscriber = (toast: ToastPayload | null) => void;

const subscribers = new Set<Subscriber>();
let next_id = 1;
let dismiss_timer: ReturnType<typeof setTimeout> | null = null;

function emit(toast: ToastPayload | null) {
  subscribers.forEach((fn) => fn(toast));
}

export function show_toast(
  message: string,
  kind: ToastKind = "info",
  duration_ms: number = 3500,
): void {
  if (dismiss_timer) {
    clearTimeout(dismiss_timer);
    dismiss_timer = null;
  }
  const payload: ToastPayload = {
    id: next_id++,
    message,
    kind,
    duration_ms,
  };
  emit(payload);
  if (duration_ms > 0) {
    dismiss_timer = setTimeout(() => {
      emit(null);
      dismiss_timer = null;
    }, duration_ms);
  }
}

export function dismiss_toast(): void {
  if (dismiss_timer) {
    clearTimeout(dismiss_timer);
    dismiss_timer = null;
  }
  emit(null);
}

function check_icon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

function info_icon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}

function warning_icon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  );
}

function close_icon(size: string) {
  return (
    <svg
      className={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function icon_for(kind: ToastKind) {
  if (kind === "success") return check_icon();
  if (kind === "error") return close_icon("w-4 h-4");
  if (kind === "warning") return warning_icon();
  return info_icon();
}

export interface SimpleToastProps {
  position?: "top" | "bottom";
  dismiss_label?: string;
  className?: string;
}

export function SimpleToast({
  position = "bottom",
  dismiss_label = "Dismiss",
  className,
}: SimpleToastProps) {
  const [toast, set_toast] = React.useState<ToastPayload | null>(null);

  React.useEffect(() => {
    const fn: Subscriber = (next) => set_toast(next);
    subscribers.add(fn);
    return () => {
      subscribers.delete(fn);
    };
  }, []);

  const is_top = position === "top";
  const y_offset = is_top ? -20 : 20;
  const container_style: React.CSSProperties = is_top
    ? { top: `calc(env(safe-area-inset-top, 0px) + 12px)` }
    : { bottom: "24px" };

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 pointer-events-none ${className ?? ""}`}
      style={container_style}
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: y_offset, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-auto"
          >
            <div className="px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 bg-modal-bg border border-edge-secondary">
              <span className="flex-shrink-0 text-txt-primary">
                {icon_for(toast.kind)}
              </span>
              <span className="text-[13px] font-medium text-txt-primary whitespace-nowrap">
                {toast.message}
              </span>
              <button
                type="button"
                aria-label={dismiss_label}
                onClick={dismiss_toast}
                className="ml-1 flex-shrink-0 text-txt-muted hover:text-txt-primary transition-colors"
              >
                {close_icon("w-3.5 h-3.5")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

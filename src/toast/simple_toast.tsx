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
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 12.75l6 6 9-13.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExclamationTriangleIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L18 6M6 6l12 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InformationCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type ToastKind = "success" | "warning" | "error" | "info";

export interface ToastPayload {
  id: string;
  message: string;
  icon_type?: ToastKind;
}

const MAX_TOASTS = 5;

let toast_listeners: ((toasts: ToastPayload[]) => void)[] = [];
let toast_stack: ToastPayload[] = [];
let toast_timeouts: Map<string, ReturnType<typeof setTimeout>> = new Map();

export function dismiss_toast(id: string) {
  const existing_timeout = toast_timeouts.get(id);

  if (existing_timeout) {
    clearTimeout(existing_timeout);
    toast_timeouts.delete(id);
  }
  toast_stack = toast_stack.filter((t) => t.id !== id);
  toast_listeners.forEach((listener) => listener([...toast_stack]));
}

export function show_toast(
  message: string,
  icon_type?: ToastKind,
): string {
  const new_toast: ToastPayload = {
    message,
    icon_type,
    id: crypto.randomUUID(),
  };

  toast_stack = [new_toast, ...toast_stack];

  if (toast_stack.length > MAX_TOASTS) {
    const overflow = toast_stack.slice(MAX_TOASTS);

    for (const old_toast of overflow) {
      const existing_timeout = toast_timeouts.get(old_toast.id);

      if (existing_timeout) {
        clearTimeout(existing_timeout);
        toast_timeouts.delete(old_toast.id);
      }
    }
    toast_stack = toast_stack.slice(0, MAX_TOASTS);
  }

  toast_listeners.forEach((listener) => listener([...toast_stack]));

  const timeout = setTimeout(() => {
    toast_timeouts.delete(new_toast.id);
    toast_stack = toast_stack.filter((t) => t.id !== new_toast.id);
    toast_listeners.forEach((listener) => listener([...toast_stack]));
  }, 2000);

  toast_timeouts.set(new_toast.id, timeout);

  return new_toast.id;
}

function get_toast_icon(icon_type?: ToastKind) {
  const icon_class = "w-4 h-4";

  switch (icon_type) {
    case "success":
      return <CheckIcon className={icon_class} />;
    case "warning":
      return <ExclamationTriangleIcon className={icon_class} />;
    case "error":
      return <XMarkIcon className={icon_class} />;
    case "info":
      return <InformationCircleIcon className={icon_class} />;
    default:
      return null;
  }
}

export interface SimpleToastProps {
  position?: "top" | "bottom";
  dismiss_label?: string;
}

export function SimpleToast({
  position = "bottom",
  dismiss_label = "Dismiss",
}: SimpleToastProps) {
  const reduce_motion = useReducedMotion() ?? false;
  const [toasts, set_toasts] = useState<ToastPayload[]>([]);

  useEffect(() => {
    const listener = (new_toasts: ToastPayload[]) => {
      set_toasts(new_toasts);
    };

    toast_listeners.push(listener);

    return () => {
      toast_listeners = toast_listeners.filter((l) => l !== listener);
    };
  }, []);

  const is_top = position === "top";
  const y_offset = is_top ? -20 : 20;

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 z-[100] flex ${is_top ? "flex-col" : "flex-col-reverse"} gap-2 pointer-events-none`}
      style={
        is_top
          ? { top: `calc(env(safe-area-inset-top, 0px) + 12px)` }
          : { bottom: "24px" }
      }
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="pointer-events-auto"
            exit={{ opacity: 0, scale: 0.95 }}
            initial={
              reduce_motion ? false : { opacity: 0, y: y_offset, scale: 0.95 }
            }
            layout={!reduce_motion}
            transition={{ duration: reduce_motion ? 0 : 0.15 }}
          >
            <div className="px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 bg-modal-bg border border-edge-secondary">
              {get_toast_icon(toast.icon_type) && (
                <span className="flex-shrink-0 text-txt-primary">
                  {get_toast_icon(toast.icon_type)}
                </span>
              )}
              <span className="text-[13px] font-medium text-txt-primary whitespace-nowrap">
                {toast.message}
              </span>
              <button
                aria-label={dismiss_label}
                className="ml-1 flex-shrink-0 text-txt-muted hover:text-txt-primary transition-colors"
                onClick={() => dismiss_toast(toast.id)}
              >
                <XMarkIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

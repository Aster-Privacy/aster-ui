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

function join_classes(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
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

  if (!toast) return null;

  const kind_classes =
    toast.kind === "success"
      ? "bg-emerald-600 text-white"
      : toast.kind === "error"
        ? "bg-rose-600 text-white"
        : toast.kind === "warning"
          ? "bg-amber-500 text-black"
          : "bg-[var(--bg-card,#1f2937)] text-[var(--text-primary,#fff)]";

  return (
    <div
      role="status"
      aria-live="polite"
      className={join_classes(
        "fixed left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-3 rounded-[12px] px-4 py-2.5 shadow-lg",
        position === "top" ? "top-4" : "bottom-6",
        kind_classes,
        className,
      )}
      style={{ maxWidth: "calc(100vw - 2rem)" }}
    >
      <span className="text-[13px] font-medium truncate">{toast.message}</span>
      <button
        type="button"
        onClick={dismiss_toast}
        aria-label={dismiss_label}
        className="text-[12px] underline-offset-2 hover:underline opacity-80 hover:opacity-100"
      >
        {dismiss_label}
      </button>
    </div>
  );
}

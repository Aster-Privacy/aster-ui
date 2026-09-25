// src/date_picker/calendar.tsx
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { DayPicker } from "react-day-picker";

// src/lib/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/i18n/ui_strings.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var default_ui_strings = {
  close: "Close",
  cancel: "Cancel",
  confirm: "Confirm",
  loading: "Loading",
  more_info: "More info",
  copy: "Copy",
  copied: "Copied",
  retry: "Try again",
  show_password: "Show password",
  hide_password: "Hide password",
  previous_month: "Previous month",
  next_month: "Next month",
  verification_code_digit: "Digit {index} of {count}",
  qr_code: "QR code",
  learn_more: "Learn more"
};
var UI_STRINGS_CONTEXT_KEY = /* @__PURE__ */ Symbol.for("aster_ui.ui_strings_context");
function resolve_ui_strings_context() {
  const registry = globalThis;
  const existing = registry[UI_STRINGS_CONTEXT_KEY];
  if (existing) return existing;
  const created = React.createContext(default_ui_strings);
  registry[UI_STRINGS_CONTEXT_KEY] = created;
  return created;
}
var UiStringsContext = resolve_ui_strings_context();
function use_ui_strings() {
  return React.useContext(UiStringsContext);
}

// src/date_picker/calendar.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var NAV_BUTTON_CLASS = "h-7 w-7 min-w-7 p-0 flex items-center justify-center rounded-full [color:var(--text-secondary)] hover:[background:var(--bg-hover)] hover:[color:var(--text-primary)] transition-colors";
function Calendar({
  className,
  classNames,
  labels,
  showOutsideDays = true,
  ...props
}) {
  const strings = use_ui_strings();
  return /* @__PURE__ */ jsx2(
    DayPicker,
    {
      className: cn("p-3 flex flex-col items-center", className),
      classNames: {
        months: "relative",
        month: "flex flex-col gap-3 w-full",
        month_caption: "flex justify-center items-center h-7",
        caption_label: "text-sm font-medium [color:var(--text-primary)]",
        nav: "absolute top-0 left-0 right-0 flex items-center justify-between h-7 px-1 z-10",
        button_previous: NAV_BUTTON_CLASS,
        button_next: NAV_BUTTON_CLASS,
        month_grid: "w-full border-collapse",
        weekdays: "flex justify-center",
        weekday: "w-9 font-normal text-[0.8rem] text-center [color:var(--text-muted)]",
        week: "flex w-full justify-center mt-2",
        day: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [color:var(--text-primary)]",
        day_button: "h-9 w-9 p-0 font-normal rounded-full inline-flex items-center justify-center [color:var(--text-primary)] cursor-pointer transition-colors hover:[background:var(--bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)] aria-selected:[color:white] aria-selected:[background:transparent]",
        range_start: "day-range-start rounded-s-md",
        range_end: "day-range-end rounded-e-md",
        selected: "[background:linear-gradient(to_bottom,var(--accent-mix-w80,#629bf8)_0%,var(--accent-color)_50%,var(--accent-mix-b80,#2f68c5)_100%)] rounded-full [color:white]",
        today: "[background:var(--bg-tertiary)] [color:var(--text-primary)] rounded-full",
        outside: "[color:var(--text-muted)] opacity-50",
        disabled: "[color:var(--text-muted)] opacity-50 cursor-not-allowed",
        range_middle: "aria-selected:[background:var(--bg-tertiary)] aria-selected:[color:var(--text-primary)]",
        hidden: "invisible",
        ...classNames
      },
      components: {
        Chevron: ({ orientation }) => orientation === "left" ? /* @__PURE__ */ jsx2(ChevronLeftIcon, { className: "h-4 w-4 rtl:-scale-x-100" }) : /* @__PURE__ */ jsx2(ChevronRightIcon, { className: "h-4 w-4 rtl:-scale-x-100" })
      },
      labels: {
        labelPrevious: () => strings.previous_month,
        labelNext: () => strings.next_month,
        ...labels
      },
      showOutsideDays,
      ...props
    }
  );
}
Calendar.displayName = "Calendar";
export {
  Calendar
};

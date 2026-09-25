"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/date_picker/index.ts
var date_picker_exports = {};
__export(date_picker_exports, {
  Calendar: () => Calendar
});
module.exports = __toCommonJS(date_picker_exports);

// src/date_picker/calendar.tsx
var import_outline = require("@heroicons/react/24/outline");
var import_react_day_picker = require("react-day-picker");

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/i18n/ui_strings.tsx
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
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
  learn_more: "Learn more",
  actions: "Actions",
  back: "Back",
  open_menu: "Open menu",
  search: "Search",
  download: "Download"
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
var import_jsx_runtime2 = require("react/jsx-runtime");
var NAV_BUTTON_CLASS = "h-7 w-7 min-w-7 p-0 flex items-center justify-center rounded-full [color:var(--text-secondary)] hover:[background:var(--bg-hover)] hover:[color:var(--text-primary)] transition-colors";
function Calendar({
  className,
  classNames,
  labels,
  showOutsideDays = true,
  ...props
}) {
  const strings = use_ui_strings();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_react_day_picker.DayPicker,
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
        Chevron: ({ orientation }) => orientation === "left" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_outline.ChevronLeftIcon, { className: "h-4 w-4 rtl:-scale-x-100" }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_outline.ChevronRightIcon, { className: "h-4 w-4 rtl:-scale-x-100" })
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Calendar
});

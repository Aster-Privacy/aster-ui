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

export interface AsterUiStrings {
  close: string;
  cancel: string;
  confirm: string;
  loading: string;
  more_info: string;
  copy: string;
  copied: string;
  retry: string;
  show_password: string;
  hide_password: string;
  previous_month: string;
  next_month: string;
  verification_code_digit: string;
  qr_code: string;
  learn_more: string;
  actions: string;
  back: string;
  open_menu: string;
  search: string;
  download: string;
  delete: string;
}

export const default_ui_strings: AsterUiStrings = {
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
  download: "Download",
  delete: "Delete",
};

const UI_STRINGS_CONTEXT_KEY = Symbol.for("aster_ui.ui_strings_context");

type ContextRegistry = Record<symbol, React.Context<AsterUiStrings> | undefined>;

function resolve_ui_strings_context(): React.Context<AsterUiStrings> {
  const registry = globalThis as unknown as ContextRegistry;
  const existing = registry[UI_STRINGS_CONTEXT_KEY];

  if (existing) return existing;

  const created = React.createContext<AsterUiStrings>(default_ui_strings);

  registry[UI_STRINGS_CONTEXT_KEY] = created;

  return created;
}

const UiStringsContext = resolve_ui_strings_context();

export interface UiStringsProviderProps {
  strings: Partial<AsterUiStrings>;
  children: React.ReactNode;
}

export function UiStringsProvider({ strings, children }: UiStringsProviderProps) {
  const parent = React.useContext(UiStringsContext);
  const value = React.useMemo(() => ({ ...parent, ...strings }), [parent, strings]);
  return <UiStringsContext.Provider value={value}>{children}</UiStringsContext.Provider>;
}

export function use_ui_strings(): AsterUiStrings {
  return React.useContext(UiStringsContext);
}

export function format_ui_string(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

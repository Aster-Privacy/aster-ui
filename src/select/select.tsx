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

function join_classes(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

interface SelectContextValue {
  value: string | undefined;
  set_value: (next: string) => void;
  is_open: boolean;
  set_is_open: (next: boolean) => void;
  registered_labels: React.MutableRefObject<Map<string, React.ReactNode>>;
  bump_rerender: () => void;
  root_ref: React.RefObject<HTMLDivElement>;
  disabled?: boolean;
}

const SelectContext = React.createContext<SelectContextValue | null>(null);

function use_select_context(component_name: string): SelectContextValue {
  const ctx = React.useContext(SelectContext);
  if (!ctx) {
    throw new Error(`${component_name} must be used within <Select>`);
  }
  return ctx;
}

export interface SelectProps {
  value?: string;
  default_value?: string;
  defaultValue?: string;
  on_value_change?: (next: string) => void;
  onValueChange?: (next: string) => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export function Select({
  value,
  default_value,
  defaultValue,
  on_value_change,
  onValueChange,
  disabled,
  children,
}: SelectProps) {
  const resolved_default = default_value ?? defaultValue;
  const resolved_change = on_value_change ?? onValueChange;
  const [internal_value, set_internal_value] = React.useState<string | undefined>(
    resolved_default,
  );
  const [is_open, set_is_open] = React.useState(false);
  const [, force_rerender] = React.useState(0);
  const registered_labels = React.useRef<Map<string, React.ReactNode>>(new Map());
  const root_ref = React.useRef<HTMLDivElement>(null);

  const is_controlled = value !== undefined;
  const current_value = is_controlled ? value : internal_value;

  const set_value = React.useCallback(
    (next: string) => {
      if (!is_controlled) set_internal_value(next);
      resolved_change?.(next);
      set_is_open(false);
    },
    [is_controlled, resolved_change],
  );

  const bump_rerender = React.useCallback(() => {
    force_rerender((n) => n + 1);
  }, []);

  React.useEffect(() => {
    if (!is_open) return;
    const handle_click = (e: MouseEvent) => {
      if (!root_ref.current?.contains(e.target as Node)) {
        set_is_open(false);
      }
    };
    const handle_key = (e: KeyboardEvent) => {
      if (e.key === "Escape") set_is_open(false);
    };
    document.addEventListener("mousedown", handle_click);
    document.addEventListener("keydown", handle_key);
    return () => {
      document.removeEventListener("mousedown", handle_click);
      document.removeEventListener("keydown", handle_key);
    };
  }, [is_open]);

  const ctx = React.useMemo<SelectContextValue>(
    () => ({
      value: current_value,
      set_value,
      is_open,
      set_is_open,
      registered_labels,
      bump_rerender,
      root_ref,
      disabled,
    }),
    [current_value, set_value, is_open, bump_rerender, disabled],
  );

  return (
    <SelectContext.Provider value={ctx}>
      <div ref={root_ref} className="relative inline-block w-full">
        {children}
      </div>
    </SelectContext.Provider>
  );
}

export interface SelectTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  SelectTriggerProps
>(({ className, children, onClick, ...props }, ref) => {
  const ctx = use_select_context("SelectTrigger");
  return (
    <button
      ref={ref}
      type="button"
      disabled={ctx.disabled}
      aria-haspopup="listbox"
      aria-expanded={ctx.is_open}
      data-state={ctx.is_open ? "open" : "closed"}
      onClick={(e) => {
        if (!ctx.disabled) ctx.set_is_open(!ctx.is_open);
        onClick?.(e);
      }}
      className={join_classes(
        "flex h-8 w-full items-center justify-between gap-2 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
        "border-[var(--border-secondary)] bg-[var(--input-bg)] text-[var(--text-secondary)]",
        "hover:bg-[var(--bg-secondary)] data-[state=open]:bg-[var(--bg-secondary)]",
        className,
      )}
      {...props}
    >
      {children}
      <svg
        aria-hidden="true"
        className="h-3.5 w-3.5 opacity-50 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
});

SelectTrigger.displayName = "SelectTrigger";

export interface SelectValueProps {
  placeholder?: string;
  className?: string;
  children?: React.ReactNode;
}

export function SelectValue({
  placeholder,
  className,
  children,
}: SelectValueProps) {
  const ctx = use_select_context("SelectValue");
  const label =
    ctx.value !== undefined
      ? ctx.registered_labels.current.get(ctx.value)
      : undefined;
  return (
    <span
      className={join_classes(
        "truncate text-left",
        !label && "text-[var(--text-muted)]",
        className,
      )}
    >
      {label ?? children ?? placeholder ?? ""}
    </span>
  );
}

export interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

export function SelectContent({ children, className }: SelectContentProps) {
  const ctx = use_select_context("SelectContent");
  if (!ctx.is_open) {
    return (
      <div style={{ display: "none" }} aria-hidden="true">
        {children}
      </div>
    );
  }
  return (
    <div
      role="listbox"
      className={join_classes(
        "absolute left-0 right-0 top-full mt-1 z-50 max-h-96 min-w-[8rem] overflow-auto rounded-md border shadow-md p-1",
        "border-[var(--border-secondary)] bg-[var(--dropdown-bg)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export interface SelectItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ value, disabled, className, children, ...props }, ref) => {
    const ctx = use_select_context("SelectItem");
    const is_selected = ctx.value === value;

    React.useEffect(() => {
      const map = ctx.registered_labels.current;
      const had = map.has(value);
      map.set(value, children);
      if (!had) ctx.bump_rerender();
      return () => {
        map.delete(value);
      };
    }, [value, children, ctx]);

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={is_selected}
        data-state={is_selected ? "checked" : "unchecked"}
        data-disabled={disabled || undefined}
        onClick={() => {
          if (!disabled) ctx.set_value(value);
        }}
        className={join_classes(
          "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-xs outline-none transition-colors",
          "text-[var(--text-secondary)] hover:bg-black/5 dark:hover:bg-white/5",
          is_selected && "text-[var(--color-info,#3b82f6)] font-medium",
          disabled && "pointer-events-none opacity-50",
          className,
        )}
        {...props}
      >
        <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
          {is_selected && (
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <span className="truncate">{children}</span>
      </div>
    );
  },
);

SelectItem.displayName = "SelectItem";

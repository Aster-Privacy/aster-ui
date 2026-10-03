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
import type { ComponentType } from "react";

import { memo, useCallback } from "react";

import { use_ui_strings } from "../i18n/ui_strings";

import { MobileBottomSheet } from "./mobile_bottom_sheet";

export interface MobileActionSheetItem {
  icon: ComponentType<{ className?: string }>;
  label: string;
  on_action: () => void;
  destructive?: boolean;
}

export interface MobileActionSheetProps {
  is_open: boolean;
  on_close: () => void;
  items: MobileActionSheetItem[];
  aria_label?: string;
  cancel_label?: string;
  title?: string;
  subtitle?: string;
  close_on_action?: boolean;
  safe_area_bottom?: number | string;
  reduce_motion?: boolean;
}

export const MobileActionSheet = memo(function MobileActionSheet({
  is_open,
  on_close,
  items,
  aria_label,
  cancel_label,
  title,
  subtitle,
  close_on_action = true,
  safe_area_bottom,
  reduce_motion,
}: MobileActionSheetProps) {
  const strings = use_ui_strings();

  const handle_action = useCallback(
    (action: () => void) => {
      action();
      if (close_on_action) on_close();
    },
    [on_close, close_on_action],
  );

  const show_header = title !== undefined || subtitle !== undefined;

  return (
    <MobileBottomSheet
      aria_label={aria_label ?? strings.actions}
      is_open={is_open}
      reduce_motion={reduce_motion}
      safe_area_bottom={safe_area_bottom}
      on_close={on_close}
    >
      <div className="px-2 pb-2">
        {show_header && (
          <div className="mb-2 px-4 pb-2 border-b border-[var(--border-primary)]">
            <p
              className="truncate text-[14px] font-medium text-[var(--text-primary)]"
              dir="auto"
            >
              {title}
            </p>
            <p
              className="truncate text-[13px] text-[var(--text-muted)]"
              dir="auto"
            >
              {subtitle}
            </p>
          </div>
        )}

        {items.map((item) => (
          <button
            key={item.label}
            className={`flex w-full items-center gap-3 rounded-[16px] px-4 py-3 text-start active:bg-[var(--bg-tertiary)] ${
              item.destructive
                ? "text-[var(--color-danger,#ef4444)]"
                : "text-[var(--text-primary)]"
            }`}
            type="button"
            onClick={() => handle_action(item.on_action)}
          >
            <item.icon className="h-5 w-5 shrink-0" />
            <span className="text-[15px]">{item.label}</span>
          </button>
        ))}

        <div className="mx-4 my-1 border-t border-[var(--border-primary)]" />

        <button
          className="flex w-full items-center justify-center rounded-[16px] px-4 py-3 text-[15px] font-medium text-[var(--text-secondary)] active:bg-[var(--bg-tertiary)]"
          type="button"
          onClick={on_close}
        >
          {cancel_label ?? strings.cancel}
        </button>
      </div>
    </MobileBottomSheet>
  );
});

export type MobileContextMenuViewProps = Omit<
  MobileActionSheetProps,
  "close_on_action"
>;

export const MobileContextMenuView = memo(function MobileContextMenuView(
  props: MobileContextMenuViewProps,
) {
  return <MobileActionSheet {...props} close_on_action={false} />;
});

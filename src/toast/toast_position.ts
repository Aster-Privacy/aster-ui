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

export type ToastPosition =
  | "top"
  | "bottom"
  | "top-right"
  | "bottom-right"
  | "top-left"
  | "bottom-left";

export interface ToastPositionLayout {
  anchor: string;
  align: string;
  column: string;
  style: { top: string } | { bottom: string };
}

export interface ResolvedToastPosition {
  position: ToastPosition;
  layout: ToastPositionLayout;
  is_top: boolean;
  y_offset: number;
}

const TOP_STYLE = { top: "calc(env(safe-area-inset-top, 0px) + 12px)" };
const BOTTOM_STYLE = { bottom: "24px" };

export const TOAST_BOTTOM_ISLAND_STYLE = { bottom: "80px" };

export const TOAST_POSITION_LAYOUT: Record<ToastPosition, ToastPositionLayout> =
  {
    top: {
      anchor: "inset-x-0 mx-auto w-fit max-w-[min(92vw,28rem)]",
      align: "items-center",
      column: "flex-col",
      style: TOP_STYLE,
    },
    bottom: {
      anchor: "inset-x-0 mx-auto w-fit max-w-[min(92vw,28rem)]",
      align: "items-center",
      column: "flex-col-reverse",
      style: BOTTOM_STYLE,
    },
    "top-right": {
      anchor: "right-4",
      align: "items-end",
      column: "flex-col",
      style: TOP_STYLE,
    },
    "top-left": {
      anchor: "left-4",
      align: "items-start",
      column: "flex-col",
      style: TOP_STYLE,
    },
    "bottom-right": {
      anchor: "right-4",
      align: "items-end",
      column: "flex-col-reverse",
      style: BOTTOM_STYLE,
    },
    "bottom-left": {
      anchor: "left-4",
      align: "items-start",
      column: "flex-col-reverse",
      style: BOTTOM_STYLE,
    },
  };

export const DEFAULT_TOAST_POSITION: ToastPosition = "bottom";

export function is_top_position(position: ToastPosition): boolean {
  return position.startsWith("top");
}

export function resolve_toast_position(
  value: string | undefined,
): ToastPosition {
  return value && value in TOAST_POSITION_LAYOUT
    ? (value as ToastPosition)
    : DEFAULT_TOAST_POSITION;
}

export function resolve_toast_layout(
  position: ToastPosition,
  lift_above_island = false,
): ResolvedToastPosition {
  const base_layout = TOAST_POSITION_LAYOUT[position];
  const is_top = is_top_position(position);
  const layout =
    lift_above_island && !is_top
      ? { ...base_layout, style: TOAST_BOTTOM_ISLAND_STYLE }
      : base_layout;

  return { position, layout, is_top, y_offset: is_top ? -20 : 20 };
}

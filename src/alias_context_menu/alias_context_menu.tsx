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
import {
  ClipboardDocumentIcon,
  Cog6ToothIcon,
  PaperAirplaneIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";

import {
  RadixContextMenu,
  RadixContextMenuContent,
  RadixContextMenuItem,
  RadixContextMenuSeparator,
  RadixContextMenuTrigger,
} from "../context_menu";

export interface AliasContextMenuLabels {
  copy_address: string;
  view_sent: string;
  pin: string;
  unpin: string;
  enable: string;
  disable: string;
  manage: string;
}

export interface AliasContextMenuViewProps {
  children: React.ReactNode;
  labels: AliasContextMenuLabels;
  is_pinned: boolean;
  is_enabled: boolean;
  show_pin: boolean;
  show_toggle_enabled: boolean;
  pin_icon?: React.ReactNode;
  on_copy_address: () => void;
  on_view_sent: () => void;
  on_toggle_pin: () => void;
  on_toggle_enabled: () => void;
  on_manage: () => void;
}

export function AliasContextMenuView({
  children,
  labels,
  is_pinned,
  is_enabled,
  show_pin,
  show_toggle_enabled,
  pin_icon,
  on_copy_address,
  on_view_sent,
  on_toggle_pin,
  on_toggle_enabled,
  on_manage,
}: AliasContextMenuViewProps): React.ReactElement {
  const enabled_color = is_enabled
    ? "var(--color-red-500, #ef4444)"
    : "var(--color-green-500, #22c55e)";

  return (
    <RadixContextMenu>
      <RadixContextMenuTrigger asChild>{children}</RadixContextMenuTrigger>
      <RadixContextMenuContent className="w-48">
        <RadixContextMenuItem onClick={on_copy_address}>
          <ClipboardDocumentIcon className="me-2 h-4 w-4" />
          {labels.copy_address}
        </RadixContextMenuItem>

        <RadixContextMenuItem onClick={on_view_sent}>
          <PaperAirplaneIcon className="me-2 h-4 w-4" />
          {labels.view_sent}
        </RadixContextMenuItem>

        {show_pin && (
          <RadixContextMenuItem onClick={on_toggle_pin}>
            {pin_icon}
            {is_pinned ? labels.unpin : labels.pin}
          </RadixContextMenuItem>
        )}

        {show_toggle_enabled && (
          <RadixContextMenuItem onClick={on_toggle_enabled}>
            <PowerIcon
              className="me-2 h-4 w-4"
              style={{ color: enabled_color }}
            />
            <span style={{ color: enabled_color }}>
              {is_enabled ? labels.disable : labels.enable}
            </span>
          </RadixContextMenuItem>
        )}

        <RadixContextMenuSeparator />

        <RadixContextMenuItem onClick={on_manage}>
          <Cog6ToothIcon className="me-2 h-4 w-4" />
          {labels.manage}
        </RadixContextMenuItem>
      </RadixContextMenuContent>
    </RadixContextMenu>
  );
}

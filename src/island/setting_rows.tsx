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

import { IslandRow } from "./island";

function join_classes(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export type SettingNoteTone = "muted" | "warning";

export interface SettingNoteProps {
  tone?: SettingNoteTone;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function SettingNote({ tone = "muted", icon, children }: SettingNoteProps) {
  return (
    <span
      className={join_classes(
        "aster_island_row_note",
        tone === "warning" && "aster_island_row_note_warning",
      )}
    >
      {icon}
      {children}
    </span>
  );
}

function render_label(label: React.ReactNode, info: React.ReactNode) {
  if (!info) return label;
  return (
    <span className="aster_island_row_label_group">
      {label}
      {info}
    </span>
  );
}

function render_description(description: React.ReactNode, note: React.ReactNode) {
  if (!note) return description;
  return (
    <>
      {description}
      {note}
    </>
  );
}

export interface SettingToggleRowProps {
  label: string;
  description?: React.ReactNode;
  info?: React.ReactNode;
  note?: React.ReactNode;
  icon?: React.ReactNode;
  checked: boolean;
  on_change: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SettingToggleRow({
  label,
  description,
  info,
  note,
  icon,
  checked,
  on_change,
  disabled,
  size = "lg",
  className,
}: SettingToggleRowProps) {
  return (
    <IslandRow
      className={className}
      description={render_description(description, note)}
      disabled={disabled}
      icon={icon}
      label={render_label(label, info)}
      toggle={{ checked, on_change, size, aria_label: label }}
    />
  );
}

export interface SettingControlRowProps {
  label: React.ReactNode;
  description?: React.ReactNode;
  info?: React.ReactNode;
  note?: React.ReactNode;
  icon?: React.ReactNode;
  control?: React.ReactNode;
  layout?: "inline" | "stacked" | "block";
  control_width?: number | "auto";
  disabled?: boolean;
  className?: string;
}

export function SettingControlRow({
  label,
  description,
  info,
  note,
  icon,
  control,
  layout = "stacked",
  control_width,
  disabled,
  className,
}: SettingControlRowProps) {
  const has_control = control !== undefined && control !== null && control !== false;
  const control_node = !has_control ? undefined : layout === "block" ? (
    control
  ) : (
    <span
      className={join_classes(
        "aster_island_row_control",
        control_width === "auto" && "aster_island_row_control_auto",
      )}
      style={
        typeof control_width === "number"
          ? ({ "--aster-island-control-width": `${control_width}px` } as React.CSSProperties)
          : undefined
      }
    >
      {control}
    </span>
  );

  return (
    <IslandRow
      className={className}
      description={render_description(description, note)}
      disabled={disabled}
      icon={icon}
      label={render_label(label, info)}
      layout={layout}
      trailing={control_node}
    />
  );
}

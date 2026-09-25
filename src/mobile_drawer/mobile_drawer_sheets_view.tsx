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
import type { ReactNode, Ref } from "react";

import {
  ArrowRightStartOnRectangleIcon,
  Cog6ToothIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";

import { Button } from "../button";
import { Input } from "../input";
import { Switch } from "../toggle";
import { UpgradeBtn } from "../upgrade_btn/upgrade_btn";
import { TAG_COLOR_PRESETS, tag_icon_map } from "../email_tag";
import { use_ui_strings } from "../i18n/ui_strings";
import { is_composing } from "../lib/is_composing";

export interface DrawerColorOption {
  hex: string;
}

export interface DrawerColorSwatchesProps {
  colors?: readonly DrawerColorOption[];
  selected: string;
  on_select: (hex: string) => void;
}

export function DrawerColorSwatches({
  colors = TAG_COLOR_PRESETS,
  selected,
  on_select,
}: DrawerColorSwatchesProps) {
  return (
    <div className="mb-3 flex flex-wrap gap-2">
      {colors.map((color) => (
        <button
          key={color.hex}
          className="h-7 w-7 rounded-full"
          style={{
            backgroundColor: color.hex,
            boxShadow:
              selected === color.hex
                ? `0 0 0 2px var(--bg-primary), 0 0 0 4px ${color.hex}`
                : "none",
          }}
          type="button"
          onClick={() => on_select(color.hex)}
        />
      ))}
    </div>
  );
}

function DrawerSheetTitle({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[16px] font-semibold text-[var(--text-primary)]">
      {children}
    </p>
  );
}

function DrawerSheetCaption({ children }: { children: ReactNode }) {
  return (
    <p className="mb-1.5 text-[12px] font-medium text-[var(--text-muted)]">
      {children}
    </p>
  );
}

function DrawerTagIconPreview({
  icon,
  color,
}: {
  icon: string | undefined;
  color: string;
}) {
  const Icon = icon ? tag_icon_map[icon] : undefined;

  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center">
      {Icon ? (
        <Icon className="h-5 w-5" style={{ color }} />
      ) : (
        <span
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: color }}
        />
      )}
    </span>
  );
}

function DrawerSaveDeleteRow({
  save_label,
  delete_label,
  on_save,
  on_delete,
}: {
  save_label: string;
  delete_label: string;
  on_save: () => void;
  on_delete: () => void;
}) {
  return (
    <div className="flex gap-2">
      <Button
        className="flex-1 rounded-[16px] py-3 text-[15px] font-medium"
        type="button"
        variant="depth"
        onClick={on_save}
      >
        {save_label}
      </Button>
      <button
        className="rounded-[16px] px-5 py-3 text-[15px] font-medium text-white transition-all "
        style={{
          background: "linear-gradient(180deg, #ef4444 0%, #dc2626 100%)",
        }}
        type="button"
        onClick={on_delete}
      >
        {delete_label}
      </button>
    </div>
  );
}

function storage_tone(storage_pct: number, fallback: string): string {
  if (storage_pct > 90) return "var(--color-danger)";
  if (storage_pct > 70) return "var(--color-warning)";

  return fallback;
}

export interface AccountMenuSheetViewProps {
  logo_src: string;
  logo_alt?: string;
  name: string;
  email: string;
  storage_label: string;
  storage_pct: number;
  storage_detail: string;
  upgrade_label: string;
  on_upgrade: () => void;
  settings_label: string;
  on_settings: () => void;
  sign_out_label: string;
  on_sign_out: () => void;
}

export function AccountMenuSheetView({
  logo_src,
  logo_alt = "Aster",
  name,
  email,
  storage_label,
  storage_pct,
  storage_detail,
  upgrade_label,
  on_upgrade,
  settings_label,
  on_settings,
  sign_out_label,
  on_sign_out,
}: AccountMenuSheetViewProps) {
  return (
    <div className="px-4 pb-4">
      <div className="flex items-center gap-3 pb-4">
        <div className="relative h-9 w-9 shrink-0">
          <img
            alt={logo_alt}
            className="h-full w-full select-none rounded-lg"
            draggable={false}
            src={logo_src}
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-semibold text-[var(--text-primary)]">
            {name}
          </p>
          <p className="truncate text-[12px] text-[var(--text-muted)]">
            {email}
          </p>
        </div>
      </div>
      <div className="mb-3 px-1">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[11px] font-medium tracking-wide text-[var(--text-muted)]">
            {storage_label}
          </span>
          <span
            className="text-[11px] font-medium tabular-nums"
            style={{
              color: storage_tone(
                storage_pct,
                "var(--text-tertiary, var(--text-muted))",
              ),
            }}
          >
            {storage_pct}%
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/[0.05] dark:bg-white/[0.06]">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${Math.min(storage_pct, 100)}%`,
              backgroundColor: storage_tone(storage_pct, "var(--color-info)"),
            }}
          />
        </div>
        <p className="mt-1 text-[10px] text-[var(--text-muted)]">
          {storage_detail}
        </p>
      </div>

      <div className="space-y-1">
        <Button
          className="flex w-full items-center justify-center gap-2 rounded-[var(--aster-radius-field)] px-3 py-2.5 text-[14px] font-medium"
          type="button"
          variant="depth"
          onClick={on_upgrade}
        >
          {upgrade_label}
        </Button>
        <button
          className="flex w-full items-center gap-3 rounded-[16px] px-3 py-3 text-start active:bg-[var(--bg-tertiary)]"
          type="button"
          onClick={on_settings}
        >
          <Cog6ToothIcon className="h-5 w-5 text-[var(--text-muted)]" />
          <span className="text-[15px] text-[var(--text-primary)]">
            {settings_label}
          </span>
        </button>
        <button
          className="flex w-full items-center gap-3 rounded-[16px] px-3 py-3 text-start active:bg-[var(--bg-tertiary)]"
          type="button"
          onClick={on_sign_out}
        >
          <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-[var(--color-danger,#ef4444)]" />
          <span className="text-[15px] text-[var(--color-danger,#ef4444)]">
            {sign_out_label}
          </span>
        </button>
      </div>
    </div>
  );
}

export interface CreateFolderSheetViewProps {
  title: string;
  placeholder: string;
  submit_label: string;
  name: string;
  on_name_change: (value: string) => void;
  color: string;
  on_color_change: (hex: string) => void;
  colors?: readonly DrawerColorOption[];
  input_ref?: Ref<HTMLInputElement>;
  is_creating: boolean;
  on_submit: () => void;
}

export function CreateFolderSheetView({
  title,
  placeholder,
  submit_label,
  name,
  on_name_change,
  color,
  on_color_change,
  colors,
  input_ref,
  is_creating,
  on_submit,
}: CreateFolderSheetViewProps) {
  return (
    <div className="px-4 pb-4">
      <DrawerSheetTitle>{title}</DrawerSheetTitle>
      <div className="mb-3 flex items-center gap-3">
        <FolderIcon className="h-6 w-6 shrink-0" style={{ color }} />
        <Input
          ref={input_ref}
          className="flex-1"
          placeholder={placeholder}
          value={name}
          onChange={(e) => on_name_change(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !is_composing(e)) on_submit();
          }}
        />
      </div>
      <DrawerColorSwatches
        colors={colors}
        selected={color}
        on_select={on_color_change}
      />
      <Button
        className="mt-1 w-full rounded-[16px] py-3 text-[15px] font-medium"
        disabled={is_creating || !name.trim()}
        type="button"
        variant="depth"
        onClick={on_submit}
      >
        {submit_label}
      </Button>
    </div>
  );
}

export interface CreateLabelSheetViewProps {
  title: string;
  placeholder: string;
  color_label: string;
  icon_label: string;
  submit_label: string;
  name: string;
  on_name_change: (value: string) => void;
  color: string;
  on_color_change: (hex: string) => void;
  colors?: readonly DrawerColorOption[];
  icon: string | undefined;
  icon_picker: ReactNode;
  input_ref?: Ref<HTMLInputElement>;
  is_creating: boolean;
  on_submit: () => void;
}

export function CreateLabelSheetView({
  title,
  placeholder,
  color_label,
  icon_label,
  submit_label,
  name,
  on_name_change,
  color,
  on_color_change,
  colors,
  icon,
  icon_picker,
  input_ref,
  is_creating,
  on_submit,
}: CreateLabelSheetViewProps) {
  return (
    <div className="px-4 pb-4">
      <DrawerSheetTitle>{title}</DrawerSheetTitle>
      <div className="mb-3 flex items-center gap-3">
        <DrawerTagIconPreview color={color} icon={icon} />
        <Input
          ref={input_ref}
          className="flex-1"
          placeholder={placeholder}
          value={name}
          onChange={(e) => on_name_change(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !is_composing(e)) on_submit();
          }}
        />
      </div>
      <DrawerSheetCaption>{color_label}</DrawerSheetCaption>
      <DrawerColorSwatches
        colors={colors}
        selected={color}
        on_select={on_color_change}
      />
      <DrawerSheetCaption>{icon_label}</DrawerSheetCaption>
      <div className="mb-3">{icon_picker}</div>
      <Button
        className="mt-1 w-full rounded-[16px] py-3 text-[15px] font-medium"
        disabled={is_creating || !name.trim()}
        type="button"
        variant="depth"
        onClick={on_submit}
      >
        {submit_label}
      </Button>
    </div>
  );
}

export interface EditFolderSheetViewProps {
  title: string;
  placeholder: string;
  notifications_label: string;
  save_label: string;
  delete_label?: string;
  name: string;
  on_name_change: (value: string) => void;
  color: string;
  on_color_change: (hex: string) => void;
  colors?: readonly DrawerColorOption[];
  notifications_enabled: boolean;
  on_toggle_notifications: () => void;
  on_save: () => void;
  on_delete: () => void;
}

export function EditFolderSheetView({
  title,
  placeholder,
  notifications_label,
  save_label,
  delete_label,
  name,
  on_name_change,
  color,
  on_color_change,
  colors,
  notifications_enabled,
  on_toggle_notifications,
  on_save,
  on_delete,
}: EditFolderSheetViewProps) {
  const strings = use_ui_strings();

  return (
    <div className="px-4 pb-4">
      <DrawerSheetTitle>{title}</DrawerSheetTitle>
      <div className="mb-3 flex items-center gap-3">
        <FolderIcon className="h-6 w-6 shrink-0" style={{ color }} />
        <Input
          className="flex-1"
          placeholder={placeholder}
          value={name}
          onChange={(e) => on_name_change(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !is_composing(e)) on_save();
          }}
        />
      </div>
      <DrawerColorSwatches
        colors={colors}
        selected={color}
        on_select={on_color_change}
      />
      <div className="mb-3 flex items-center justify-between py-1">
        <span className="text-[15px] text-[var(--text-primary)]">
          {notifications_label}
        </span>
        <Switch
          aria-label={notifications_label}
          checked={notifications_enabled}
          onCheckedChange={on_toggle_notifications}
        />
      </div>
      <DrawerSaveDeleteRow
        delete_label={delete_label ?? strings.delete}
        save_label={save_label}
        on_delete={on_delete}
        on_save={on_save}
      />
    </div>
  );
}

export interface EditTagSheetViewProps {
  title: string;
  placeholder: string;
  color_label: string;
  icon_label: string;
  save_label: string;
  delete_label?: string;
  name: string;
  on_name_change: (value: string) => void;
  color: string;
  on_color_change: (hex: string) => void;
  colors?: readonly DrawerColorOption[];
  icon: string | undefined;
  icon_picker: ReactNode;
  on_save: () => void;
  on_delete: () => void;
}

export function EditTagSheetView({
  title,
  placeholder,
  color_label,
  icon_label,
  save_label,
  delete_label,
  name,
  on_name_change,
  color,
  on_color_change,
  colors,
  icon,
  icon_picker,
  on_save,
  on_delete,
}: EditTagSheetViewProps) {
  const strings = use_ui_strings();

  return (
    <div className="px-4 pb-4">
      <DrawerSheetTitle>{title}</DrawerSheetTitle>
      <div className="mb-3 flex items-center gap-3">
        <DrawerTagIconPreview color={color} icon={icon} />
        <Input
          className="flex-1"
          placeholder={placeholder}
          value={name}
          onChange={(e) => on_name_change(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !is_composing(e)) on_save();
          }}
        />
      </div>
      <DrawerSheetCaption>{color_label}</DrawerSheetCaption>
      <DrawerColorSwatches
        colors={colors}
        selected={color}
        on_select={on_color_change}
      />
      <DrawerSheetCaption>{icon_label}</DrawerSheetCaption>
      <div className="mb-3">{icon_picker}</div>
      <DrawerSaveDeleteRow
        delete_label={delete_label ?? strings.delete}
        save_label={save_label}
        on_delete={on_delete}
        on_save={on_save}
      />
    </div>
  );
}

export interface CreateAliasSheetViewProps {
  title: string;
  at_limit?: boolean;
  limit_message: string;
  upgrade_label: string;
  on_upgrade: () => void;
  placeholder: string;
  submit_label: string;
  local_part: string;
  on_local_part_change: (value: string) => void;
  error: string;
  domain: string;
  is_creating: boolean;
  submit_blocked?: boolean;
  turnstile?: ReactNode;
  on_submit: () => void;
}

export function CreateAliasSheetView({
  title,
  at_limit = false,
  limit_message,
  upgrade_label,
  on_upgrade,
  placeholder,
  submit_label,
  local_part,
  on_local_part_change,
  error,
  domain,
  is_creating,
  submit_blocked = false,
  turnstile,
  on_submit,
}: CreateAliasSheetViewProps) {
  return (
    <div className="px-4 pb-4">
      <DrawerSheetTitle>{title}</DrawerSheetTitle>
      {at_limit ? (
        <>
          <p className="mb-4 text-[14px] text-[var(--text-secondary)]">
            {limit_message}
          </p>
          <UpgradeBtn
            className="w-full rounded-[16px] py-3 text-[15px] font-medium"
            onClick={on_upgrade}
          >
            {upgrade_label}
          </UpgradeBtn>
        </>
      ) : (
        <>
          <div className="mb-3 flex items-center gap-0">
            <Input
              autoCapitalize="none"
              autoCorrect="off"
              className="flex-1 !rounded-e-none"
              disabled={is_creating}
              placeholder={placeholder}
              spellCheck={false}
              status={error ? "error" : "default"}
              value={local_part}
              onChange={(e) => on_local_part_change(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") on_submit();
              }}
            />
            <span className="rounded-e-xl bg-[var(--bg-tertiary)] px-3 py-3 text-[15px] text-[var(--text-muted)] select-none">
              @{domain}
            </span>
          </div>
          {local_part.trim() && (
            <p className="mb-3 break-all text-[13px] text-[var(--text-secondary)]">
              {local_part.trim().toLowerCase()}@{domain}
            </p>
          )}
          {error && <p className="mb-3 text-[13px] text-red-500">{error}</p>}
          {turnstile && (
            <div className="mb-3 flex justify-center">{turnstile}</div>
          )}
          <Button
            className="w-full rounded-[16px] py-3 text-[15px] font-medium"
            disabled={!local_part.trim() || is_creating || submit_blocked}
            is_loading={is_creating}
            type="button"
            variant="depth"
            onClick={on_submit}
          >
            {submit_label}
          </Button>
        </>
      )}
    </div>
  );
}

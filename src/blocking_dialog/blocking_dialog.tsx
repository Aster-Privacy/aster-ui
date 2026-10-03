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

import type { ReactNode } from "react";

export type BlockingDialogIcon = "warning" | "lock";

export interface BlockingDialogViewProps {
  title: ReactNode;
  body: ReactNode;
  primary_label: ReactNode;
  secondary_label: ReactNode;
  on_primary: () => void;
  on_secondary: () => void;
  title_id: string;
  icon?: BlockingDialogIcon;
  icon_color?: string;
  error_message?: ReactNode;
  is_busy?: boolean;
}

const WARNING_PATH =
  "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z";

const LOCK_PATH =
  "M10 1a4.5 4.5 0 0 0-4.5 4.5V8H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 7V5.5a3 3 0 1 0-6 0V8h6Z";

export const BLOCKING_DIALOG_ICON_PATHS: Record<BlockingDialogIcon, string> = {
  warning: WARNING_PATH,
  lock: LOCK_PATH,
};

export function BlockingDialogView({
  title,
  body,
  primary_label,
  secondary_label,
  on_primary,
  on_secondary,
  title_id,
  icon = "warning",
  icon_color,
  error_message,
  is_busy = false,
}: BlockingDialogViewProps) {
  const resolved_icon_color =
    icon_color ?? (icon === "lock" ? "var(--accent-color)" : "#ef4444");

  return (
    <div
      aria-labelledby={title_id}
      aria-modal="true"
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
      role="dialog"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div
        className="w-full max-w-md rounded-xl p-6 shadow-xl"
        style={{
          backgroundColor: "var(--bg-secondary, var(--bg-primary))",
          border: "1px solid var(--border-primary)",
        }}
      >
        <div className="flex items-start gap-3 mb-4">
          <svg
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            fill="currentColor"
            style={{ color: resolved_icon_color }}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d={BLOCKING_DIALOG_ICON_PATHS[icon]}
              fillRule="evenodd"
            />
          </svg>
          <p
            className="font-semibold text-base"
            id={title_id}
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </p>
        </div>

        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
          {body}
        </p>

        {error_message ? (
          <p className="text-sm mb-4" style={{ color: "#ef4444" }}>
            {error_message}
          </p>
        ) : null}

        <div className="flex flex-col gap-2">
          <button
            className="w-full rounded-[var(--aster-radius-field)] px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50"
            disabled={is_busy}
            style={{
              backgroundColor: "var(--accent-color)",
              color: "var(--accent-fg, #ffffff)",
            }}
            onClick={on_primary}
          >
            {primary_label}
          </button>
          <button
            className="w-full rounded-[var(--aster-radius-field)] px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-80 disabled:opacity-50"
            disabled={is_busy}
            style={{
              backgroundColor: "transparent",
              color: "var(--text-muted)",
              border: "1px solid var(--border-secondary)",
            }}
            onClick={on_secondary}
          >
            {secondary_label}
          </button>
        </div>
      </div>
    </div>
  );
}

export interface PendingDeletionDialogViewProps {
  title: ReactNode;
  body: ReactNode;
  keep_label: ReactNode;
  sign_out_label: ReactNode;
  on_keep: () => void;
  on_sign_out: () => void;
  error_message?: ReactNode;
  is_busy?: boolean;
  title_id?: string;
}

export function PendingDeletionDialogView({
  title,
  body,
  keep_label,
  sign_out_label,
  on_keep,
  on_sign_out,
  error_message,
  is_busy = false,
  title_id = "pending_deletion_title",
}: PendingDeletionDialogViewProps) {
  return (
    <BlockingDialogView
      body={body}
      error_message={error_message}
      icon="warning"
      is_busy={is_busy}
      on_primary={on_keep}
      on_secondary={on_sign_out}
      primary_label={keep_label}
      secondary_label={sign_out_label}
      title={title}
      title_id={title_id}
    />
  );
}

export interface Family2faDialogViewProps {
  title: ReactNode;
  body: ReactNode;
  action_label: ReactNode;
  sign_out_label: ReactNode;
  on_action: () => void;
  on_sign_out: () => void;
  is_busy?: boolean;
  title_id?: string;
}

export function Family2faDialogView({
  title,
  body,
  action_label,
  sign_out_label,
  on_action,
  on_sign_out,
  is_busy = false,
  title_id = "family_2fa_title",
}: Family2faDialogViewProps) {
  return (
    <BlockingDialogView
      body={body}
      icon="lock"
      is_busy={is_busy}
      on_primary={on_action}
      on_secondary={on_sign_out}
      primary_label={action_label}
      secondary_label={sign_out_label}
      title={title}
      title_id={title_id}
    />
  );
}

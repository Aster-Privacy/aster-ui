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
import type { ReactNode, RefObject } from "react";

import { DocumentTextIcon } from "@heroicons/react/24/outline";

import { Skeleton } from "../skeleton";

export type ProfileNoteSaveStatus =
  | "idle"
  | "saving"
  | "saved"
  | "error"
  | "too_long";

export interface ProfileNotesStrings {
  notes: string;
  too_long: string;
  load_failed: string;
  placeholder: string;
}

interface ProfileNotesBaseProps {
  note: string;
  is_loading: boolean;
  load_failed: boolean;
  save_status: ProfileNoteSaveStatus;
  status_indicator?: ReactNode;
  strings: ProfileNotesStrings;
  on_change: (value: string) => void;
  on_blur: () => void;
  max_length?: number;
}

export interface ProfileNotesBoxViewProps extends ProfileNotesBaseProps {
  className?: string;
}

export interface ProfileNotesInlineViewProps extends ProfileNotesBaseProps {
  textarea_ref?: RefObject<HTMLTextAreaElement>;
}

const DEFAULT_MAX_LENGTH = 50000;

export function ProfileNotesBoxView({
  note,
  is_loading,
  load_failed,
  save_status,
  status_indicator,
  strings,
  on_change,
  on_blur,
  max_length = DEFAULT_MAX_LENGTH,
  className = "",
}: ProfileNotesBoxViewProps) {
  return (
    <div
      className={`rounded-xl border bg-surf-secondary border-edge-secondary ${className}`}
    >
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <DocumentTextIcon className="w-4 h-4 text-txt-muted" />
          <span className="text-[11px] font-medium uppercase tracking-wider text-txt-muted">
            {strings.notes}
          </span>
        </div>
        {save_status === "too_long" ? (
          <span className="text-[11px] text-red-500">{strings.too_long}</span>
        ) : (
          status_indicator
        )}
      </div>

      <div className="px-3 pb-3">
        {is_loading ? (
          <Skeleton className="h-16 rounded-lg" />
        ) : load_failed ? (
          <p className="text-[13px] text-txt-muted">{strings.load_failed}</p>
        ) : (
          <textarea
            className="w-full min-h-[64px] max-h-[160px] text-[13px] leading-relaxed bg-transparent outline-none resize-none placeholder:text-txt-muted text-txt-primary"
            maxLength={max_length}
            placeholder={strings.placeholder}
            value={note}
            onBlur={on_blur}
            onChange={(e) => on_change(e.target.value)}
          />
        )}
      </div>
    </div>
  );
}

export function ProfileNotesInlineView({
  note,
  is_loading,
  load_failed,
  save_status,
  status_indicator,
  strings,
  on_change,
  on_blur,
  max_length = DEFAULT_MAX_LENGTH,
  textarea_ref,
}: ProfileNotesInlineViewProps) {
  const show_indicator =
    save_status === "error" ||
    save_status === "saving" ||
    save_status === "saved";

  return (
    <div
      className="p-2 bg-surf-secondary"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-medium uppercase tracking-wider text-txt-muted">
          {strings.notes}
        </span>
        {show_indicator ? status_indicator : null}
        {save_status === "too_long" && (
          <span className="text-[10px] text-red-500">{strings.too_long}</span>
        )}
      </div>

      {is_loading ? (
        <div className="h-14 rounded animate-pulse bg-surf-tertiary" />
      ) : load_failed ? (
        <p className="h-14 text-[12px] text-txt-muted">{strings.load_failed}</p>
      ) : (
        <textarea
          ref={textarea_ref}
          className="w-full h-14 text-[12px] leading-relaxed bg-transparent outline-none resize-none placeholder:text-txt-muted text-txt-primary"
          maxLength={max_length}
          placeholder={strings.placeholder}
          value={note}
          onBlur={on_blur}
          onChange={(e) => on_change(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            e.stopPropagation();
            if (e["key"] === "Escape") {
              (e.target as HTMLTextAreaElement).blur();
            }
          }}
        />
      )}
    </div>
  );
}

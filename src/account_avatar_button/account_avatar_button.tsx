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
import { CameraIcon } from "@heroicons/react/24/solid";

export type AccountAvatarButtonSize = "sm" | "md" | "lg" | "xl";

export interface AccountAvatarButtonViewProps {
  avatar: React.ReactNode;
  label: string;
  size?: AccountAvatarButtonSize;
  is_paid_plan?: boolean;
  ring_offset_color?: string;
  className?: string;
  uploading?: boolean;
  accept?: string;
  file_input_ref?: React.Ref<HTMLInputElement>;
  on_file_change?: React.ChangeEventHandler<HTMLInputElement>;
  on_open_picker?: () => void;
}

const OVERLAY_ICON_SIZE: Record<AccountAvatarButtonSize, string> = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5",
  xl: "w-7 h-7",
};

export function AccountAvatarButtonView({
  avatar,
  label,
  size = "lg",
  is_paid_plan = false,
  ring_offset_color = "var(--bg-hover)",
  className = "",
  uploading = false,
  accept,
  file_input_ref,
  on_file_change,
  on_open_picker,
}: AccountAvatarButtonViewProps) {
  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <input
        ref={file_input_ref}
        accept={accept}
        className="hidden"
        type="file"
        onChange={on_file_change}
      />
      <button
        aria-label={label}
        className="group relative flex w-fit rounded-full leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)] focus-visible:ring-offset-2"
        disabled={uploading}
        style={{ ["--tw-ring-offset-color" as string]: ring_offset_color }}
        title={label}
        type="button"
        onClick={on_open_picker}
      >
        <span
          className={is_paid_plan ? "plan_ring" : "inline-flex leading-none"}
        >
          <span className="relative flex rounded-full leading-none">
            {avatar}
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center rounded-full opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100 motion-reduce:transition-none"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
            >
              <CameraIcon className={`${OVERLAY_ICON_SIZE[size]} text-white`} />
            </span>
            {uploading && (
              <span
                className="absolute inset-0 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
              >
                <span
                  className="rounded-full border-2 border-white border-t-transparent animate-spin motion-reduce:animate-none"
                  style={{ width: "50%", height: "50%" }}
                />
              </span>
            )}
          </span>
        </span>
      </button>
    </div>
  );
}

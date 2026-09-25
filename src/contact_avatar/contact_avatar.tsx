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

import { useState } from "react";

export interface ContactAvatarViewProps {
  size_px: number;
  initials: string;
  background_color: string;
  text_color: string;
  aria_label?: string;
  avatar_url?: string;
  favicon_src?: string;
  favicon_key?: string;
  favicon_initially_failed?: boolean;
  on_favicon_failed?: () => void;
  on_favicon_loaded?: (src: string) => void;
  rounded?: string;
  className?: string;
}

export function get_contact_avatar_font_size(
  size_px: number,
  initials: string,
): number {
  return Math.round(size_px * (initials.length > 1 ? 0.36 : 0.44));
}

export function ContactAvatarView({
  size_px,
  initials,
  background_color,
  text_color,
  aria_label,
  avatar_url,
  favicon_src,
  favicon_key,
  favicon_initially_failed = false,
  on_favicon_failed,
  on_favicon_loaded,
  rounded = "rounded-full",
  className = "",
}: ContactAvatarViewProps) {
  const resolved_favicon_key = favicon_key ?? favicon_src ?? "";
  const [avatar_failed, set_avatar_failed] = useState(false);
  const [avatar_loaded, set_avatar_loaded] = useState(false);
  const [favicon_loaded, set_favicon_loaded] = useState(false);
  const [favicon_failed, set_favicon_failed] = useState<boolean>(
    favicon_initially_failed,
  );
  const [prev_favicon_key, set_prev_favicon_key] =
    useState(resolved_favicon_key);
  const [prev_avatar_url, set_prev_avatar_url] = useState(avatar_url);

  if (resolved_favicon_key !== prev_favicon_key) {
    set_prev_favicon_key(resolved_favicon_key);
    set_favicon_failed(favicon_initially_failed);
    set_favicon_loaded(false);
  }

  if (avatar_url !== prev_avatar_url) {
    set_prev_avatar_url(avatar_url);
    set_avatar_failed(false);
    set_avatar_loaded(false);
  }

  const base_style = {
    width: size_px,
    height: size_px,
    minWidth: size_px,
    minHeight: size_px,
  } as const;

  if (avatar_url && !avatar_failed) {
    return (
      <div
        className={`${rounded} overflow-hidden flex items-center justify-center ${
          avatar_loaded ? "" : "aster_skeleton"
        } ${className}`}
        style={base_style}
      >
        <img
          alt=""
          className="w-full h-full object-cover transition-opacity duration-200"
          draggable={false}
          src={avatar_url}
          style={{ opacity: avatar_loaded ? 1 : 0 }}
          onError={() => set_avatar_failed(true)}
          onLoad={() => set_avatar_loaded(true)}
        />
      </div>
    );
  }

  if (favicon_src && !favicon_failed) {
    return (
      <div
        className={`${rounded} overflow-hidden flex items-center justify-center ${
          favicon_loaded ? "" : "aster_skeleton"
        } ${className}`}
        style={base_style}
      >
        <img
          alt=""
          className="w-full h-full object-cover transition-opacity duration-200"
          draggable={false}
          referrerPolicy="no-referrer"
          src={favicon_src}
          style={{
            userSelect: "none",
            opacity: favicon_loaded ? 1 : 0,
          }}
          onError={() => {
            on_favicon_failed?.();
            set_favicon_failed(true);
          }}
          onLoad={(e) => {
            const img = e.currentTarget;

            if (img.naturalWidth <= 1 || img.naturalHeight <= 1) {
              on_favicon_failed?.();
              set_favicon_failed(true);
            } else {
              set_favicon_loaded(true);
              on_favicon_loaded?.(img.src);
            }
          }}
        />
      </div>
    );
  }

  const font_size = get_contact_avatar_font_size(size_px, initials);

  return (
    <div
      aria-label={aria_label || undefined}
      className={`${rounded} overflow-hidden flex items-center justify-center ${className}`}
      role="img"
      style={{
        ...base_style,
        backgroundColor: background_color,
      }}
    >
      <span
        aria-hidden="true"
        className="font-semibold tracking-wide select-none"
        style={{ fontSize: font_size, lineHeight: 1, color: text_color }}
      >
        {initials}
      </span>
    </div>
  );
}

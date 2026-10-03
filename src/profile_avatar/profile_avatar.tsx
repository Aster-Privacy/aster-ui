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

import { Skeleton } from "../skeleton";

export type ProfileAvatarSize = "xs" | "sm_compact" | "sm" | "md" | "lg" | "xl";

export const PROFILE_AVATAR_SIZE_MAP: Record<ProfileAvatarSize, number> = {
  xs: 24,
  sm_compact: 28,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 96,
};

export interface ProfileAvatarViewProps {
  name: string;
  email?: string;
  size?: ProfileAvatarSize;
  className?: string;
  src?: string | null;
  pending?: boolean;
  initials?: string;
  background_color?: string;
  text_color?: string;
  is_favicon_source?: boolean;
  is_local_logo_source?: boolean;
  show_placeholder?: boolean;
  image_attributes?: Record<string, string>;
  on_image_error?: React.ReactEventHandler<HTMLImageElement>;
  on_image_load?: React.ReactEventHandler<HTMLImageElement>;
}

export const ProfileAvatarView = React.memo(function ProfileAvatarView({
  name,
  email,
  size = "md",
  className = "",
  src,
  pending = false,
  initials = "",
  background_color,
  text_color,
  is_favicon_source = false,
  is_local_logo_source = false,
  show_placeholder = false,
  image_attributes,
  on_image_error,
  on_image_load,
}: ProfileAvatarViewProps) {
  const pixel_size = PROFILE_AVATAR_SIZE_MAP[size];

  if (!src) {
    if (pending) {
      return (
        <Skeleton
          className={`rounded-full flex-shrink-0 ${className}`}
          style={{
            width: pixel_size,
            height: pixel_size,
            minWidth: pixel_size,
            minHeight: pixel_size,
          }}
        />
      );
    }

    const font_size = Math.round(
      pixel_size * (initials.length > 1 ? 0.36 : 0.44),
    );

    return (
      <div
        aria-label={name || email || undefined}
        className={`rounded-full flex-shrink-0 flex items-center justify-center ${className}`}
        role="img"
        style={{
          width: pixel_size,
          height: pixel_size,
          minWidth: pixel_size,
          minHeight: pixel_size,
          backgroundColor: background_color,
          userSelect: "none",
        }}
      >
        <svg
          aria-hidden="true"
          height={pixel_size}
          style={{ display: "block", pointerEvents: "none" }}
          viewBox={`0 0 ${pixel_size} ${pixel_size}`}
          width={pixel_size}
        >
          <text
            dominantBaseline="central"
            fill={text_color}
            fontSize={font_size}
            fontWeight={600}
            style={{
              fontFamily: "inherit",
              letterSpacing: initials.length > 1 ? "-0.02em" : undefined,
            }}
            textAnchor="middle"
            x="50%"
            y="50%"
          >
            {initials}
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden relative ${className}`}
      style={{
        width: pixel_size,
        height: pixel_size,
        minWidth: pixel_size,
        minHeight: pixel_size,
        backgroundColor: is_favicon_source ? "transparent" : "var(--avatar-bg)",
        userSelect: "none",
      }}
    >
      {show_placeholder && (
        <Skeleton className="absolute inset-0 rounded-full" />
      )}
      <img
        alt={name}
        className={`w-full h-full ${is_favicon_source ? "object-contain" : "object-cover"}`}
        crossOrigin={
          is_favicon_source || is_local_logo_source ? undefined : "anonymous"
        }
        decoding="async"
        draggable={false}
        {...image_attributes}
        referrerPolicy="no-referrer"
        src={src}
        style={{
          position: "absolute",
          inset: 0,
          opacity: show_placeholder ? 0 : 1,
        }}
        onError={on_image_error}
        onLoad={on_image_load}
      />
    </div>
  );
});

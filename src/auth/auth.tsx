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

export interface AuthLogoProps {
  src?: string;
  alt?: string;
  className?: string;
}

export const AuthLogo = ({
  src = "/text_logo.png",
  alt = "Aster",
  className = "h-12",
}: AuthLogoProps) => (
  <img alt={alt} className={className} decoding="async" src={src} />
);

export const AuthEyeIcon = () => (
  <svg
    className="h-5 w-5 text-txt-muted"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AuthEyeSlashIcon = () => (
  <svg
    className="h-5 w-5 text-txt-muted"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface AuthInputWrapperProps {
  end_content?: React.ReactNode;
  wrapper_class?: string;
  children: React.ReactNode;
}

export const AuthInputWrapper = ({
  end_content,
  wrapper_class,
  children,
}: AuthInputWrapperProps) => (
  <div className={`relative ${wrapper_class ?? ""}`}>
    {children}
    {end_content && (
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        {end_content}
      </div>
    )}
  </div>
);

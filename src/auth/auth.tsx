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
import type { CSSProperties } from "react";

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

export const AuthCheckIcon = ({
  className = "h-3 w-3",
}: {
  className?: string;
}) => (
  <svg
    className={`${className} text-white`}
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    viewBox="0 0 24 24"
  >
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export interface AuthCheckboxProps {
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

export const AuthCheckbox = ({
  checked,
  disabled,
  onChange,
}: AuthCheckboxProps) => (
  <button
    aria-checked={checked}
    className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border transition-colors ${
      checked
        ? "border-brand bg-brand"
        : "border-edge-secondary bg-surf-card"
    }`}
    disabled={disabled}
    role="checkbox"
    type="button"
    onClick={() => onChange(!checked)}
  >
    {checked && <AuthCheckIcon />}
  </button>
);

export interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export const AuthCard = ({
  children,
  className = "max-w-md",
}: AuthCardProps) => (
  <div className={`flex w-full ${className} flex-col items-center gap-6`}>
    {children}
  </div>
);

export interface AuthCardBodyProps {
  children: React.ReactNode;
  padding?: string;
}

export const AuthCardBody = ({
  children,
  padding = "px-10 py-10",
}: AuthCardBodyProps) => (
  <div
    className={`w-full rounded-xl border ${padding} transition-colors duration-200 bg-surf-card border-edge-primary`}
  >
    {children}
  </div>
);

export const AuthFormLabel = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <label className="mb-2 block text-sm font-medium text-txt-primary">
    {children}
  </label>
);

export const AuthFourPointStar = ({
  className = "h-7 w-7",
}: {
  className?: string;
}) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0L13.2 10.8L24 12L13.2 13.2L12 24L10.8 13.2L0 12L10.8 10.8Z" />
  </svg>
);

export const AuthSparkleDecoration = () => (
  <svg
    className="ml-1 -mt-0.5 inline-block h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      d="M9.5 2L10.9 8.1L17 9.5L10.9 10.9L9.5 17L8.1 10.9L2 9.5L8.1 8.1L9.5 2Z"
      fill="#FBBF24"
    />
    <path
      d="M18.5 11L19.3 14.2L22.5 15L19.3 15.8L18.5 19L17.7 15.8L14.5 15L17.7 14.2L18.5 11Z"
      fill="#FBBF24"
      opacity="0.6"
    />
  </svg>
);

export const AuthShieldCheckIcon = ({ color }: { color: string }) => (
  <svg
    className="h-5 w-5 flex-shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    style={{ color }}
    viewBox="0 0 24 24"
  >
    <path
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AuthLockIcon = ({ color }: { color: string }) => (
  <svg
    className="h-5 w-5 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    style={{ color }}
    viewBox="0 0 24 24"
  >
    <path
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AuthWarningIcon = ({ color }: { color: string }) => (
  <svg
    className="h-5 w-5 flex-shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    style={{ color }}
    viewBox="0 0 24 24"
  >
    <path
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AuthDocumentIcon = () => (
  <svg
    className="h-4 w-4 mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AuthDownloadIcon = () => (
  <svg
    className="h-4 w-4 mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AuthUserCircleIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AuthLockClosedIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AuthEnvelopeIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export type AuthAlertKind = "error" | "info" | "warning" | "success";

export const get_auth_alert_styles = (
  type: AuthAlertKind,
  _is_dark: boolean,
): CSSProperties => {
  const styles: Record<AuthAlertKind, CSSProperties> = {
    error: { backgroundColor: "#dc2626", color: "#fff" },
    info: { backgroundColor: "#2563eb", color: "#fff" },
    warning: { backgroundColor: "#d97706", color: "#fff" },
    success: { backgroundColor: "#16a34a", color: "#fff" },
  };
  return styles[type];
};

export const get_auth_primary_button_style = (
  is_dark: boolean,
  is_disabled?: boolean,
): CSSProperties => ({
  background: is_disabled
    ? "var(--text-muted)"
    : "linear-gradient(rgb(82, 110, 249), rgb(55, 79, 235))",
  border: is_disabled ? "none" : is_dark ? "none" : "1px solid #6c6d71",
});

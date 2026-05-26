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

export interface FieldLabelProps {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

export function FieldLabel({ children, className, htmlFor }: FieldLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium mb-1.5 text-txt-primary ${className ?? ""}`}
    >
      {children}
    </label>
  );
}

export interface FieldHintProps {
  children: React.ReactNode;
  className?: string;
}

export function FieldHint({ children, className }: FieldHintProps) {
  return (
    <p className={`text-xs mt-1.5 text-txt-muted ${className ?? ""}`}>
      {children}
    </p>
  );
}

export interface ErrorBannerProps {
  message: string;
  className?: string;
}

export function ErrorBanner({ message, className }: ErrorBannerProps) {
  return (
    <div
      className={`p-3 rounded-[10px] text-sm border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 ${className ?? ""}`}
    >
      {message}
    </div>
  );
}

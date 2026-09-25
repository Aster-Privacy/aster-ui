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

import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

import { Button } from "../button";

export interface ErrorDetailsViewProps {
  error: Error;
  title: string;
  copy_label: string;
  on_copy?: (error_text: string) => void;
}

export function format_error_text(error: Error): string {
  return `${error.message}${error.stack ? `\n\n${error.stack}` : ""}`;
}

export function ErrorDetailsView({
  error,
  title,
  copy_label,
  on_copy,
}: ErrorDetailsViewProps) {
  return (
    <div
      className="mt-6 max-w-lg w-full rounded-lg overflow-hidden"
      style={{
        backgroundColor: "var(--bg-tertiary)",
        border: "1px solid var(--border-secondary)",
      }}
    >
      <div
        className="px-3 py-2 flex items-center justify-between"
        style={{ borderBottom: "1px solid var(--border-secondary)" }}
      >
        <span
          className="text-xs font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          {title}
        </span>
        <div className="flex items-center gap-1">
          <button
            className="flex items-center gap-1.5 px-2 py-1 rounded-[12px] text-xs transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
            style={{ color: "var(--text-muted)" }}
            type="button"
            onClick={() => on_copy?.(format_error_text(error))}
          >
            <ClipboardDocumentIcon className="w-3.5 h-3.5" />
            <span>{copy_label}</span>
          </button>
        </div>
      </div>
      <div className="p-3 overflow-auto max-h-40">
        <pre
          className="text-xs whitespace-pre-wrap break-words font-mono"
          style={{ color: "var(--text-secondary)" }}
        >
          {error.message}
          {error.stack && `\n\n${error.stack}`}
        </pre>
      </div>
    </div>
  );
}

export interface ErrorBoundaryViewProps {
  error: Error | null;
  title: string;
  description: string;
  retry_label: string;
  status_label: string;
  details_title: string;
  copy_label: string;
  logo_src?: string;
  logo_alt?: string;
  on_retry: () => void;
  on_view_status?: () => void;
  on_copy_error?: (error_text: string) => void;
}

export function ErrorBoundaryView({
  error,
  title,
  description,
  retry_label,
  status_label,
  details_title,
  copy_label,
  logo_src = "/text_logo.png",
  logo_alt = "Aster",
  on_retry,
  on_view_status,
  on_copy_error,
}: ErrorBoundaryViewProps) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
      style={{ color: "var(--text-secondary)" }}
    >
      <img
        alt={logo_alt}
        className="h-10 mb-4"
        draggable={false}
        src={logo_src}
      />
      <div
        className="text-[15px] font-semibold mb-1.5"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </div>
      <div className="text-[13px] leading-relaxed max-w-[420px] mb-5">
        {description}
      </div>
      <div className="flex gap-2">
        <Button size="md" variant="depth" onClick={on_retry}>
          {retry_label}
        </Button>
        <Button size="md" variant="secondary" onClick={on_view_status}>
          {status_label}
        </Button>
      </div>
      {error && (
        <ErrorDetailsView
          copy_label={copy_label}
          error={error}
          title={details_title}
          on_copy={on_copy_error}
        />
      )}
    </div>
  );
}

export interface EmailErrorFallbackViewProps {
  title: string;
  description: string;
  retry_label: string;
  on_retry?: () => void;
}

export function EmailErrorFallbackView({
  title,
  description,
  retry_label,
  on_retry,
}: EmailErrorFallbackViewProps) {
  return (
    <div
      className="flex flex-col items-center justify-center h-full p-8 text-center"
      style={{ color: "var(--text-secondary)" }}
    >
      <div
        className="text-base font-medium mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </div>
      <div className="text-sm mb-4 max-w-md">{description}</div>
      {on_retry && (
        <button
          className="px-4 py-2 text-sm rounded-[14px] transition-colors"
          style={{
            backgroundColor: "var(--accent-color)",
            color: "white",
          }}
          onClick={on_retry}
        >
          {retry_label}
        </button>
      )}
    </div>
  );
}

export interface ComposeErrorFallbackViewProps {
  title: string;
  description: string;
}

export function ComposeErrorFallbackView({
  title,
  description,
}: ComposeErrorFallbackViewProps) {
  return (
    <div
      className="flex flex-col items-center justify-center h-64 p-8 text-center"
      style={{ color: "var(--text-secondary)" }}
    >
      <div
        className="text-base font-medium mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </div>
      <div className="text-sm mb-4 max-w-md">{description}</div>
    </div>
  );
}

export interface ChunkRecoveryFallbackViewProps {
  label: string;
}

export function ChunkRecoveryFallbackView({
  label,
}: ChunkRecoveryFallbackViewProps) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center"
      style={{ color: "var(--text-secondary)" }}
    >
      <span
        className="rounded-full border-2 border-t-transparent animate-spin motion-reduce:animate-none"
        style={{
          width: "22px",
          height: "22px",
          borderColor: "var(--accent-color, #3b82f6)",
          borderTopColor: "transparent",
        }}
      />
      <div className="text-[13px]">{label}</div>
    </div>
  );
}

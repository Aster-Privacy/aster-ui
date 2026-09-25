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
import { memo } from "react";
import {
  DocumentIcon,
  PhotoIcon,
  FilmIcon,
  MusicalNoteIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

import { use_ui_strings } from "../i18n/ui_strings";

export interface MobileAttachmentRowProps {
  filename: string;
  content_type: string;
  size_label: string;
  on_download?: () => void;
  is_downloading?: boolean;
  download_label?: string;
}

function get_file_icon(content_type: string) {
  if (content_type.startsWith("image/")) return PhotoIcon;
  if (content_type.startsWith("video/")) return FilmIcon;
  if (content_type.startsWith("audio/")) return MusicalNoteIcon;

  return DocumentIcon;
}

export const MobileAttachmentRow = memo(function MobileAttachmentRow({
  filename,
  content_type,
  size_label,
  on_download,
  is_downloading = false,
  download_label,
}: MobileAttachmentRowProps) {
  const strings = use_ui_strings();
  const FileIcon = get_file_icon(content_type);

  return (
    <div className="flex items-center gap-3 rounded-lg bg-[var(--bg-tertiary)] px-4 py-2.5">
      <FileIcon className="h-5 w-5 shrink-0 text-[var(--text-muted)]" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] text-[var(--text-primary)]">
          {filename}
        </p>
        <p className="text-[12px] text-[var(--text-muted)]">{size_label}</p>
      </div>
      {on_download && (
        <button
          aria-label={download_label ?? strings.download}
          className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-secondary)] active:bg-[var(--bg-secondary)] disabled:opacity-50"
          disabled={is_downloading}
          type="button"
          onClick={on_download}
        >
          <ArrowDownTrayIcon className="h-4.5 w-4.5" />
        </button>
      )}
    </div>
  );
});

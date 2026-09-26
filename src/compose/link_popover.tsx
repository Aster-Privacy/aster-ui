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

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "../button";
import { Input } from "../input";
import { use_anchored_layer } from "./anchored_layer";
import { is_composing, normalize_link_url } from "./link_url";
import { use_escape_layer } from "./overlay_layer";

export interface LinkPopoverLabels {
  url_placeholder: string;
  display_text_placeholder: string;
  invalid_url: string;
  cancel: string;
  insert: string;
}

export interface LinkPopoverProps {
  open: boolean;
  anchor_ref: React.RefObject<HTMLElement | null>;
  selected_text: string;
  on_close: () => void;
  on_insert: (url: string, text?: string) => void;
  labels: LinkPopoverLabels;
}

export function LinkPopover({
  open,
  anchor_ref,
  selected_text,
  on_close,
  on_insert,
  labels,
}: LinkPopoverProps) {
  const [url, set_url] = useState("https://");
  const [text, set_text] = useState("");
  const [error, set_error] = useState("");
  const [pos, set_pos] = useState({ top: 0, left: 0 });
  const card_ref = useRef<HTMLDivElement>(null);
  const url_input_ref = useRef<HTMLInputElement>(null);

  use_escape_layer(open, on_close, "compose_link_popover");

  use_anchored_layer(
    open,
    anchor_ref,
    (rect) =>
      set_pos({
        top: rect.top,
        left: Math.max(8, Math.min(rect.left, window.innerWidth - 308)),
      }),
    on_close,
  );

  useEffect(() => {
    if (!open) return;
    set_url("https://");
    set_text(selected_text);
    set_error("");
    requestAnimationFrame(() => url_input_ref.current?.focus());

    const handle_click_outside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (anchor_ref.current?.contains(target)) return;
      if (card_ref.current?.contains(target)) return;
      on_close();
    };

    document.addEventListener("mousedown", handle_click_outside);

    return () =>
      document.removeEventListener("mousedown", handle_click_outside);
  }, [open]);

  const handle_insert = () => {
    const normalized = normalize_link_url(url);

    if (!normalized) {
      set_error(labels.invalid_url);

      return;
    }
    on_insert(normalized, text.trim() || undefined);
    on_close();
  };

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={card_ref}
      aria-label={labels.url_placeholder}
      className="aster_link_popover"
      role="dialog"
      style={{
        zIndex: 9999,
        left: pos.left,
        bottom: window.innerHeight - pos.top + 8,
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !is_composing(e)) {
          e.preventDefault();
          handle_insert();
        }
      }}
    >
      <Input
        ref={url_input_ref}
        aria-invalid={error ? true : undefined}
        aria-label={labels.url_placeholder}
        className="aster_link_popover_input"
        placeholder={labels.url_placeholder}
        size="sm"
        type="url"
        value={url}
        onChange={(e) => {
          set_url(e.target.value);
          if (error) set_error("");
        }}
      />
      {error && (
        <p className="aster_link_popover_error" role="alert">
          {error}
        </p>
      )}
      {!selected_text && (
        <Input
          aria-label={labels.display_text_placeholder}
          className="aster_link_popover_input"
          placeholder={labels.display_text_placeholder}
          size="sm"
          type="text"
          value={text}
          onChange={(e) => set_text(e.target.value)}
        />
      )}
      <div className="aster_link_popover_actions">
        <Button size="sm" variant="outline" onClick={on_close}>
          {labels.cancel}
        </Button>
        <Button size="sm" variant="depth" onClick={handle_insert}>
          {labels.insert}
        </Button>
      </div>
    </div>,
    document.body,
  );
}

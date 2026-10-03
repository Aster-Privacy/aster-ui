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
import { AnimatePresence } from "framer-motion";

import { use_anchored_layer } from "./anchored_layer";
import { EmojiPicker, type EmojiPickerLabels } from "./emoji_picker";
import { use_escape_layer } from "./overlay_layer";

export const EMOJI_PICKER_WIDTH = 360;
export const EMOJI_PICKER_MAX_HEIGHT = 420;
const VIEWPORT_MARGIN = 8;

export function clamp_emoji_picker_position(rect: DOMRect) {
  const min_right = VIEWPORT_MARGIN;
  const max_right = Math.max(
    min_right,
    window.innerWidth - EMOJI_PICKER_WIDTH - VIEWPORT_MARGIN,
  );
  const min_bottom = VIEWPORT_MARGIN;
  const max_bottom = Math.max(
    min_bottom,
    window.innerHeight - EMOJI_PICKER_MAX_HEIGHT - VIEWPORT_MARGIN,
  );

  return {
    right: Math.min(
      Math.max(window.innerWidth - rect.right, min_right),
      max_right,
    ),
    bottom: Math.min(
      Math.max(window.innerHeight - rect.top + 8, min_bottom),
      max_bottom,
    ),
  };
}

export interface EmojiPopoverProps {
  open: boolean;
  anchor_ref: React.RefObject<HTMLElement | null>;
  panel_id?: string;
  on_close: () => void;
  on_select: (emoji: string) => void;
  labels: EmojiPickerLabels;
  reduce_motion?: boolean;
}

export function EmojiPopover({
  open,
  anchor_ref,
  panel_id,
  on_close,
  on_select,
  labels,
  reduce_motion,
}: EmojiPopoverProps) {
  const [pos, set_pos] = useState({ bottom: 0, right: 0 });
  const picker_ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handle_click_outside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (anchor_ref.current?.contains(target)) return;
      if (picker_ref.current?.contains(target)) return;
      on_close();
    };

    document.addEventListener("mousedown", handle_click_outside);

    return () =>
      document.removeEventListener("mousedown", handle_click_outside);
  }, [open, anchor_ref, on_close]);

  use_escape_layer(open, on_close, "compose_emoji_picker");

  use_anchored_layer(
    open,
    anchor_ref,
    (rect) => set_pos(clamp_emoji_picker_position(rect)),
    on_close,
  );

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          ref={picker_ref}
          className="aster_emoji_popover"
          id={panel_id}
          style={{ zIndex: 9999, right: pos.right, bottom: pos.bottom }}
        >
          <EmojiPicker
            labels={labels}
            reduce_motion={reduce_motion}
            on_select={on_select}
          />
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

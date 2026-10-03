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

import { useEffect, useLayoutEffect, useRef } from "react";

export const FORMAT_BAR_STORAGE_KEY = "aster_compose_format_bar_open";

export function use_anchored_layer(
  open: boolean,
  anchor_ref: React.RefObject<HTMLElement | null>,
  reposition: (rect: DOMRect) => void,
  on_dismiss: () => void,
) {
  const reposition_ref = useRef(reposition);
  const dismiss_ref = useRef(on_dismiss);

  useEffect(() => {
    reposition_ref.current = reposition;
    dismiss_ref.current = on_dismiss;
  });

  useLayoutEffect(() => {
    if (!open) return;

    const update = () => {
      const node = anchor_ref.current;

      if (!node) return;

      const rect = node.getBoundingClientRect();
      const off_screen =
        rect.bottom <= 0 ||
        rect.top >= window.innerHeight ||
        rect.right <= 0 ||
        rect.left >= window.innerWidth;

      if (off_screen) {
        dismiss_ref.current();

        return;
      }

      reposition_ref.current(rect);
    };

    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, true);
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule, true);
      window.removeEventListener("resize", schedule);
    };
  }, [open, anchor_ref]);
}

export function read_format_bar_preference(): boolean {
  try {
    return localStorage.getItem(FORMAT_BAR_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function store_format_bar_preference(open: boolean) {
  try {
    localStorage.setItem(FORMAT_BAR_STORAGE_KEY, open ? "1" : "0");
  } catch {
    return;
  }
}

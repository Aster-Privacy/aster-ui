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

import { useEffect } from "react";

interface BodyScrollLockState {
  count: number;
  restored_overflow: string;
}

const BODY_SCROLL_LOCK_STATE_KEY = Symbol.for("aster_ui.body_scroll_lock_state");

function resolve_body_scroll_lock_state(): BodyScrollLockState {
  const registry = globalThis as unknown as Record<symbol, BodyScrollLockState | undefined>;
  const existing = registry[BODY_SCROLL_LOCK_STATE_KEY];

  if (existing) return existing;

  const created: BodyScrollLockState = { count: 0, restored_overflow: "" };

  registry[BODY_SCROLL_LOCK_STATE_KEY] = created;

  return created;
}

const body_scroll_lock_state = resolve_body_scroll_lock_state();

export function lock_body_scroll(): void {
  if (body_scroll_lock_state.count === 0) {
    body_scroll_lock_state.restored_overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }

  body_scroll_lock_state.count += 1;
}

export function unlock_body_scroll(): void {
  if (body_scroll_lock_state.count === 0) return;

  body_scroll_lock_state.count -= 1;

  if (body_scroll_lock_state.count === 0) {
    document.body.style.overflow = body_scroll_lock_state.restored_overflow;
    body_scroll_lock_state.restored_overflow = "";
  }
}

export function use_body_scroll_lock(is_locked: boolean): void {
  useEffect(() => {
    if (!is_locked) return;

    lock_body_scroll();

    return unlock_body_scroll;
  }, [is_locked]);
}

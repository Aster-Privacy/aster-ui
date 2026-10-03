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

import {
  memo,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Tooltip } from "../tooltip/tooltip";
import {
  apply_skin_tone,
  emoji_categories,
  search_emojis,
  skin_tone_swatches,
  skin_tones,
  type EmojiEntry,
  type SkinTone,
} from "./emoji";

interface EmojiSection {
  key: string;
  entries: EmojiEntry[];
}

const RECENT_KEY = "recent";
const CATEGORY_KEYS = Object.keys(emoji_categories);
const SKIN_TONE_STORAGE_KEY = "aster_emoji_skin_tone";
const RECENT_STORAGE_KEY = "aster_emoji_recent";
const RECENT_LIMIT = 16;
const SCROLL_SPY_OFFSET = 12;

const TAB_STEPS: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };

const ICON_SHAPES: Record<string, ReactNode> = {
  recent: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  smileys: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
    </>
  ),
  gestures: (
    <>
      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
      <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </>
  ),
  animals: (
    <>
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </>
  ),
  food: (
    <>
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </>
  ),
  travel: (
    <>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
  objects: (
    <>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </>
  ),
  symbols: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  ),
  activities: (
    <>
      <path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4" />
      <path d="M12 12a12.6 12.6 0 0 1-8.7 5" />
      <path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5" />
      <path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" />
      <path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" />
      <circle cx="12" cy="12" r="10" />
    </>
  ),
  flags: (
    <>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <path d="M4 22v-7" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  close: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
};

function PickerIcon({ name, className }: { name: string; className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.9}
      viewBox="0 0 24 24"
    >
      {ICON_SHAPES[name] ?? ICON_SHAPES.smileys}
    </svg>
  );
}

const ENTRY_BY_EMOJI = new Map<string, EmojiEntry>(
  Object.values(emoji_categories).flatMap((category) =>
    category.entries.map((entry) => [entry.emoji, entry] as const),
  ),
);

const emoji_support_cache = new Map<string, boolean>();
let support_canvas: HTMLCanvasElement | null = null;
let renderable_sections: EmojiSection[] | null = null;

export function is_emoji_renderable(emoji: string): boolean {
  const cached = emoji_support_cache.get(emoji);

  if (cached !== undefined) return cached;

  if (!support_canvas) {
    support_canvas = document.createElement("canvas");
  }
  support_canvas.width = 20;
  support_canvas.height = 20;
  const ctx = support_canvas.getContext("2d", { willReadFrequently: true });

  if (!ctx) return true;

  ctx.textBaseline = "top";
  ctx.font =
    "16px 'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif";
  ctx.fillStyle = "#000";
  ctx.fillText(emoji, 0, 0);
  const data = ctx.getImageData(0, 0, 20, 20).data;
  let supported = false;

  for (let i = 0; i < data.length; i += 4) {
    if (
      data[i + 3] > 16 &&
      (data[i] !== data[i + 1] || data[i + 1] !== data[i + 2])
    ) {
      supported = true;
      break;
    }
  }

  if (supported && emoji.includes(String.fromCharCode(8205))) {
    const width = ctx.measureText(emoji).width;
    const single_width = ctx.measureText("\u{1F600}").width;

    if (width > single_width * 1.25) {
      supported = false;
    }
  }
  emoji_support_cache.set(emoji, supported);

  return supported;
}

function category_sections(): EmojiSection[] {
  if (!renderable_sections) {
    renderable_sections = CATEGORY_KEYS.map((key) => ({
      key,
      entries: emoji_categories[key].entries.filter((entry) =>
        is_emoji_renderable(entry.emoji),
      ),
    })).filter((section) => section.entries.length > 0);
  }

  return renderable_sections;
}

function prefers_touch(): boolean {
  try {
    return window.matchMedia("(pointer: coarse)").matches;
  } catch {
    return false;
  }
}

function load_skin_tone(): SkinTone {
  try {
    const stored = localStorage.getItem(SKIN_TONE_STORAGE_KEY);

    if (stored && skin_tones.includes(stored as SkinTone)) {
      return stored as SkinTone;
    }
  } catch {
    return "default";
  }

  return "default";
}

function load_recent(): string[] {
  try {
    const parsed: unknown = JSON.parse(
      localStorage.getItem(RECENT_STORAGE_KEY) ?? "[]",
    );

    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(
        (value): value is string =>
          typeof value === "string" && ENTRY_BY_EMOJI.has(value),
      )
      .slice(0, RECENT_LIMIT);
  } catch {
    return [];
  }
}

function remember_recent(emoji: string): void {
  const next = [emoji, ...load_recent().filter((value) => value !== emoji)];

  try {
    localStorage.setItem(
      RECENT_STORAGE_KEY,
      JSON.stringify(next.slice(0, RECENT_LIMIT)),
    );
  } catch {
    return;
  }
}

function entry_from_event(event: { target: EventTarget }): EmojiEntry | null {
  const button = (event.target as HTMLElement).closest<HTMLElement>(
    "[data-emoji]",
  );
  const emoji = button?.dataset.emoji;

  return emoji ? (ENTRY_BY_EMOJI.get(emoji) ?? null) : null;
}

function vertical_neighbor(
  buttons: HTMLButtonElement[],
  index: number,
  direction: 1 | -1,
): number | null {
  const current = buttons[index].getBoundingClientRect();
  let row_top: number | null = null;
  let best: number | null = null;
  let best_distance = Infinity;

  for (
    let i = index + direction;
    i >= 0 && i < buttons.length;
    i += direction
  ) {
    const rect = buttons[i].getBoundingClientRect();
    const crossed =
      direction === 1 ? rect.top > current.top + 4 : rect.top < current.top - 4;

    if (!crossed) continue;

    if (row_top === null) row_top = rect.top;

    if (Math.abs(rect.top - row_top) > 4) break;

    const distance = Math.abs(rect.left - current.left);

    if (distance < best_distance) {
      best_distance = distance;
      best = i;
    }
  }

  return best;
}

const EmojiGrid = memo(function EmojiGrid({
  entries,
  skin_tone,
}: {
  entries: EmojiEntry[];
  skin_tone: SkinTone;
}) {
  return (
    <div className="aster_emoji_grid">
      {entries.map((entry, index) => {
        const toned = apply_skin_tone(entry.emoji, skin_tone);

        return (
          <button
            key={`${entry.emoji}-${index}`}
            aria-label={entry.keywords[0] ?? toned}
            className="aster_emoji_cell"
            data-emoji={entry.emoji}
            type="button"
          >
            {toned}
          </button>
        );
      })}
    </div>
  );
});

export interface EmojiPickerLabels {
  search: string;
  skin_tone: string;
  no_results: string;
  clear?: string;
  categories?: Record<string, string>;
}

export interface EmojiPickerProps {
  on_select: (emoji: string) => void;
  labels: EmojiPickerLabels;
  reduce_motion?: boolean;
}

export function EmojiPicker({
  on_select,
  labels,
  reduce_motion: reduce_motion_prop,
}: EmojiPickerProps) {
  const system_reduce_motion = useReducedMotion();
  const reduce_motion = reduce_motion_prop ?? !!system_reduce_motion;
  const indicator_id = useId();
  const [search_query, set_search_query] = useState("");
  const [skin_tone, set_skin_tone] = useState<SkinTone>(load_skin_tone);
  const [show_tones, set_show_tones] = useState(false);
  const [recent] = useState<string[]>(load_recent);
  const [is_touch] = useState(prefers_touch);
  const grid_ref = useRef<HTMLDivElement>(null);
  const input_ref = useRef<HTMLInputElement>(null);
  const tones_ref = useRef<HTMLDivElement>(null);
  const tab_refs = useRef<(HTMLButtonElement | null)[]>([]);
  const spy_frame_ref = useRef(0);
  const pending_jump_ref = useRef<string | null>(null);

  const trimmed_query = search_query.trim();
  const is_searching = trimmed_query.length > 0;
  const category_labels = labels.categories;

  const category_label = (key: string) =>
    category_labels?.[key] ?? emoji_categories[key]?.label ?? key;

  const sections = useMemo<EmojiSection[]>(() => {
    const recent_entries = recent
      .map((emoji) => ENTRY_BY_EMOJI.get(emoji))
      .filter(
        (entry): entry is EmojiEntry =>
          entry !== undefined && is_emoji_renderable(entry.emoji),
      );
    const categories = category_sections();

    return recent_entries.length > 0
      ? [{ key: RECENT_KEY, entries: recent_entries }, ...categories]
      : categories;
  }, [recent]);

  const section_keys = useMemo(
    () => sections.map((section) => section.key),
    [sections],
  );

  const [active_section, set_active_section] = useState(section_keys[0]);

  const search_results = useMemo(
    () =>
      is_searching
        ? search_emojis(trimmed_query).filter((entry) =>
            is_emoji_renderable(entry.emoji),
          )
        : [],
    [is_searching, trimmed_query],
  );

  const content = useMemo(() => {
    if (is_searching) {
      return search_results.length > 0 ? (
        <div className="aster_emoji_results">
          <EmojiGrid entries={search_results} skin_tone={skin_tone} />
        </div>
      ) : (
        <div className="aster_emoji_empty">
          <PickerIcon className="aster_emoji_empty_icon" name="search" />
          <p>{labels.no_results}</p>
        </div>
      );
    }

    return sections.map((section) => (
      <section key={section.key} data-section={section.key}>
        <p className="aster_emoji_section_label">
          {category_labels?.[section.key] ??
            emoji_categories[section.key]?.label ??
            section.key}
        </p>
        <EmojiGrid entries={section.entries} skin_tone={skin_tone} />
      </section>
    ));
  }, [
    is_searching,
    search_results,
    sections,
    skin_tone,
    labels.no_results,
    category_labels,
  ]);

  const select_entry = (entry: EmojiEntry) => {
    remember_recent(entry.emoji);
    on_select(apply_skin_tone(entry.emoji, skin_tone));
  };

  const select_skin_tone = (tone: SkinTone) => {
    set_skin_tone(tone);
    set_show_tones(false);

    try {
      localStorage.setItem(SKIN_TONE_STORAGE_KEY, tone);
    } catch {
      return;
    }
  };

  const scroll_to_section = (key: string) => {
    const grid = grid_ref.current;
    const target = grid?.querySelector<HTMLElement>(`[data-section="${key}"]`);

    if (!grid || !target) return;

    grid.scrollTop = target.offsetTop;
  };

  const choose_section = (key: string) => {
    set_active_section(key);

    if (is_searching) {
      pending_jump_ref.current = key;
      set_search_query("");

      return;
    }

    scroll_to_section(key);
  };

  const update_active_from_scroll = () => {
    const grid = grid_ref.current;

    if (!grid || is_searching) return;

    const threshold = grid.scrollTop + SCROLL_SPY_OFFSET;
    const nodes = grid.querySelectorAll<HTMLElement>("[data-section]");
    let current = section_keys[0];

    for (const node of nodes) {
      if (node.offsetTop > threshold) break;
      current = node.dataset.section ?? current;
    }

    if (grid.scrollTop + grid.clientHeight >= grid.scrollHeight - 2) {
      current = nodes[nodes.length - 1]?.dataset.section ?? current;
    }

    set_active_section((previous) =>
      previous === current ? previous : current,
    );
  };

  const handle_scroll = () => {
    if (spy_frame_ref.current) return;

    spy_frame_ref.current = window.requestAnimationFrame(() => {
      spy_frame_ref.current = 0;
      update_active_from_scroll();
    });
  };

  const emoji_buttons = () =>
    Array.from(
      grid_ref.current?.querySelectorAll<HTMLButtonElement>("[data-emoji]") ??
        [],
    );

  const focus_emoji = (buttons: HTMLButtonElement[], index: number) => {
    const target = buttons[index];

    if (!target) return;

    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: "nearest" });
  };

  const handle_search_key = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focus_emoji(emoji_buttons(), 0);

      return;
    }

    if (event.key === "Escape" && is_searching) {
      event.preventDefault();
      event.stopPropagation();
      set_search_query("");

      return;
    }

    if (event.key !== "Enter" || !is_searching) return;

    const first = search_results[0];

    if (!first) return;

    event.preventDefault();
    select_entry(first);
  };

  const handle_tab_key = (event: KeyboardEvent, index: number) => {
    const step = TAB_STEPS[event.key];

    if (step === undefined) return;

    event.preventDefault();

    const next = (index + step + section_keys.length) % section_keys.length;

    choose_section(section_keys[next]);
    tab_refs.current[next]?.focus();
  };

  const handle_grid_key = (event: KeyboardEvent<HTMLDivElement>) => {
    const key = event.key;

    if (
      key !== "ArrowRight" &&
      key !== "ArrowLeft" &&
      key !== "ArrowDown" &&
      key !== "ArrowUp"
    ) {
      return;
    }

    const buttons = emoji_buttons();
    const index = buttons.indexOf(document.activeElement as HTMLButtonElement);

    if (index === -1) return;

    event.preventDefault();

    if (key === "ArrowRight" || key === "ArrowLeft") {
      const step = key === "ArrowRight" ? 1 : -1;

      focus_emoji(
        buttons,
        Math.max(0, Math.min(buttons.length - 1, index + step)),
      );

      return;
    }

    const next = vertical_neighbor(
      buttons,
      index,
      key === "ArrowDown" ? 1 : -1,
    );

    if (next === null) {
      if (key === "ArrowUp") input_ref.current?.focus();

      return;
    }

    focus_emoji(buttons, next);
  };

  const handle_grid_click = (event: MouseEvent<HTMLDivElement>) => {
    const entry = entry_from_event(event);

    if (entry) select_entry(entry);
  };

  const clear_search = () => {
    set_search_query("");
    input_ref.current?.focus();
  };

  useLayoutEffect(() => {
    const grid = grid_ref.current;

    if (!grid) return;

    if (is_searching) {
      grid.scrollTop = 0;

      return;
    }

    const jump = pending_jump_ref.current;

    pending_jump_ref.current = null;

    if (jump) {
      scroll_to_section(jump);
    } else {
      grid.scrollTop = 0;
      set_active_section(section_keys[0]);
    }
  }, [is_searching, trimmed_query, section_keys]);

  useEffect(() => {
    if (!is_touch) input_ref.current?.focus({ preventScroll: true });

    return () => window.cancelAnimationFrame(spy_frame_ref.current);
  }, [is_touch]);

  useEffect(() => {
    if (!show_tones) return;

    const handle_pointer = (event: PointerEvent) => {
      if (!tones_ref.current?.contains(event.target as Node)) {
        set_show_tones(false);
      }
    };

    document.addEventListener("pointerdown", handle_pointer, true);

    return () =>
      document.removeEventListener("pointerdown", handle_pointer, true);
  }, [show_tones]);

  const fade = reduce_motion
    ? { duration: 0 }
    : { duration: 0.16, ease: [0.2, 0, 0, 1] as const };

  return (
    <div className="aster_emoji_picker" onMouseDown={(e) => e.preventDefault()}>
      <div className="aster_emoji_tabs" role="tablist">
        {section_keys.map((key, index) => {
          const is_active = !is_searching && active_section === key;
          const is_focus_target = is_searching ? index === 0 : is_active;

          return (
            <Tooltip key={key} position="top" tip={category_label(key)}>
              <button
                ref={(node) => {
                  tab_refs.current[index] = node;
                }}
                aria-label={category_label(key)}
                aria-selected={is_active}
                className="aster_emoji_tab"
                data-active={is_active || undefined}
                role="tab"
                tabIndex={is_focus_target ? 0 : -1}
                type="button"
                onClick={() => choose_section(key)}
                onKeyDown={(event) => handle_tab_key(event, index)}
              >
                <PickerIcon className="aster_emoji_tab_icon" name={key} />
                {is_active && (
                  <motion.span
                    className="aster_emoji_tab_indicator"
                    layoutId={`${indicator_id}_emoji_tab`}
                    transition={
                      reduce_motion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 620, damping: 44 }
                    }
                  />
                )}
              </button>
            </Tooltip>
          );
        })}
      </div>

      <div
        ref={tones_ref}
        className="aster_emoji_head"
        onKeyDown={(event) => {
          if (event.key !== "Escape" || !show_tones) return;
          event.stopPropagation();
          set_show_tones(false);
        }}
      >
        <AnimatePresence initial={false} mode="wait">
          {show_tones ? (
            <motion.div
              key="tones"
              animate={{ opacity: 1 }}
              aria-label={labels.skin_tone}
              className="aster_emoji_tone_row"
              exit={{ opacity: 0 }}
              initial={reduce_motion ? false : { opacity: 0 }}
              role="group"
              transition={fade}
            >
              {skin_tones.map((tone) => (
                <button
                  key={tone}
                  aria-label={labels.skin_tone}
                  aria-pressed={skin_tone === tone}
                  className="aster_emoji_tone_option"
                  data-active={skin_tone === tone || undefined}
                  type="button"
                  onClick={() => select_skin_tone(tone)}
                >
                  {skin_tone_swatches[tone]}
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="search"
              animate={{ opacity: 1 }}
              className="aster_emoji_search"
              exit={{ opacity: 0 }}
              initial={reduce_motion ? false : { opacity: 0 }}
              transition={fade}
            >
              <PickerIcon className="aster_emoji_search_icon" name="search" />
              <input
                ref={input_ref}
                aria-label={labels.search}
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
                className="aster_emoji_search_input"
                enterKeyHint="done"
                inputMode="search"
                placeholder={labels.search}
                spellCheck={false}
                type="text"
                value={search_query}
                onChange={(e) => set_search_query(e.target.value)}
                onKeyDown={handle_search_key}
                onMouseDown={(e) => e.stopPropagation()}
              />
              {is_searching && (
                <button
                  aria-label={labels.clear ?? labels.search}
                  className="aster_emoji_search_clear"
                  type="button"
                  onClick={clear_search}
                >
                  <PickerIcon className="aster_emoji_clear_icon" name="close" />
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <Tooltip position="top" tip={labels.skin_tone}>
          <button
            aria-expanded={show_tones}
            aria-label={labels.skin_tone}
            className="aster_emoji_tone_btn"
            data-open={show_tones || undefined}
            type="button"
            onClick={() => set_show_tones(!show_tones)}
          >
            {show_tones ? (
              <PickerIcon className="aster_emoji_tone_close" name="close" />
            ) : (
              skin_tone_swatches[skin_tone]
            )}
          </button>
        </Tooltip>
      </div>

      <div
        ref={grid_ref}
        className="aster_emoji_body"
        onClick={handle_grid_click}
        onKeyDown={handle_grid_key}
        onScroll={handle_scroll}
      >
        {content}
      </div>
    </div>
  );
}

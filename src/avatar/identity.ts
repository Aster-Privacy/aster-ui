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


export const AVATAR_COLORS = [
  "#1e88e5",
  "#e53935",
  "#43a047",
  "#fb8c00",
  "#8e24aa",
  "#d81b60",
  "#00acc1",
  "#5e35b1",
  "#f4511e",
  "#00897b",
  "#3949ab",
  "#c0ca33",
  "#6d4c41",
  "#039be5",
  "#7cb342",
  "#ff6f00",
] as const;

export function hash_utf16(value: string): number {
  let hash = 0;

  for (let i = 0; i < value.length; i++) {
    hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0;
  }

  return hash;
}

export function get_avatar_key(email?: string, name?: string): string {
  return email || name || "?";
}

export function get_avatar_color_index(identifier: string): number {
  return Math.abs(hash_utf16(identifier)) % AVATAR_COLORS.length;
}

export function get_avatar_color(identifier: string): string {
  return AVATAR_COLORS[get_avatar_color_index(identifier)];
}

function to_linear(channel: number): number {
  return channel <= 0.03928
    ? channel / 12.92
    : Math.pow((channel + 0.055) / 1.055, 2.4);
}

const AVATAR_LUMINANCE_CROSSOVER = 0.55;

function get_relative_luminance(hex: string): number | null {
  const normalized = hex.replace("#", "");
  const full =
    normalized.length === 3
      ? normalized
          .split("")
          .map((c) => c + c)
          .join("")
      : normalized;

  if (full.length !== 6 || /[^0-9a-fA-F]/.test(full)) return null;

  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;

  return 0.2126 * to_linear(r) + 0.7152 * to_linear(g) + 0.0722 * to_linear(b);
}

export function get_contrast_text(hex: string): "#ffffff" | "#111827" {
  const luminance = get_relative_luminance(hex);

  if (luminance === null) return "#ffffff";

  return luminance > AVATAR_LUMINANCE_CROSSOVER ? "#111827" : "#ffffff";
}

type SegmenterConstructor = new (
  locales?: string,
  options?: { granularity?: "grapheme" | "word" | "sentence" },
) => { segment: (input: string) => Iterable<{ segment: string }> };

export function get_active_locale(): string | undefined {
  if (typeof document === "undefined") return undefined;

  return document.documentElement.lang || undefined;
}

function to_graphemes(value: string, locale?: string): string[] {
  const segmenter_ctor = (
    Intl as unknown as { Segmenter?: SegmenterConstructor }
  ).Segmenter;

  if (typeof segmenter_ctor === "function") {
    const segmenter = new segmenter_ctor(locale, { granularity: "grapheme" });
    const out: string[] = [];

    for (const part of segmenter.segment(value)) {
      out.push(part.segment);
    }

    return out;
  }

  return Array.from(value);
}

function first_grapheme(value: string, locale?: string): string {
  const graphemes = to_graphemes(value, locale);

  return graphemes.length > 0 ? graphemes[0] : "";
}

export function get_initials(
  name?: string,
  email?: string,
  locale?: string,
): string {
  const from_name = (name || "").trim();

  if (from_name) {
    const words = from_name.split(/\s+/).filter(Boolean);

    if (words.length >= 2) {
      const first = first_grapheme(words[0], locale);
      const last = first_grapheme(words[words.length - 1], locale);

      return (first + last).toLocaleUpperCase(locale);
    }

    return first_grapheme(words[0], locale).toLocaleUpperCase(locale);
  }

  const local_part = (email || "").trim().split("@")[0];

  if (local_part) {
    return first_grapheme(local_part, locale).toLocaleUpperCase(locale);
  }

  return "?";
}

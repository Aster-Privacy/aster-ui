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
import { Radio } from "../toggle";

export type ThemeMode = "light" | "dark" | "system";

interface MockupPalette {
  bg: string;
  header_bg: string;
  header_border: string;
  brand: string;
  text_strong: string;
  highlight_bg: string;
  highlight_brand: string;
  highlight_text: string;
  text_mid: string;
  text_soft: string;
  row_brand: string;
  row_text: string;
}

const light_palette: MockupPalette = {
  bg: "#ffffff",
  header_bg: "#f7f7f7",
  header_border: "#e8e8e8",
  brand: "#3b82f6",
  text_strong: "#374151",
  highlight_bg: "#eff6ff",
  highlight_brand: "#3b82f6",
  highlight_text: "#111827",
  text_mid: "#6b7280",
  text_soft: "#9ca3af",
  row_brand: "#d1d5db",
  row_text: "#374151",
};

const dark_palette: MockupPalette = {
  bg: "#121212",
  header_bg: "#0a0a0a",
  header_border: "#2a2a2a",
  brand: "#3b82f6",
  text_strong: "#ffffff",
  highlight_bg: "#1e3a5f",
  highlight_brand: "#60a5fa",
  highlight_text: "#ffffff",
  text_mid: "#888888",
  text_soft: "#666666",
  row_brand: "#3a3a3a",
  row_text: "#e5e5e5",
};

function ThemeMockup({ palette }: { palette: MockupPalette }) {
  return (
    <div
      className="w-full h-full rounded-md overflow-hidden"
      style={{ backgroundColor: palette.bg }}
    >
      <div
        className="h-4 flex items-center px-2 gap-1"
        style={{
          backgroundColor: palette.header_bg,
          borderBottom: `1px solid ${palette.header_border}`,
        }}
      >
        <div
          className="w-2 h-2 rounded"
          style={{ backgroundColor: palette.brand }}
        />
        <div
          className="flex-1 h-1 rounded-sm"
          style={{ backgroundColor: palette.text_strong }}
        />
      </div>
      <div className="p-2 space-y-1.5">
        <div
          className="h-6 rounded p-1.5 flex items-center gap-1.5"
          style={{ backgroundColor: palette.highlight_bg }}
        >
          <div
            className="w-3 h-3 rounded-lg"
            style={{ backgroundColor: palette.highlight_brand }}
          />
          <div className="flex-1">
            <div
              className="w-[60%] h-1 rounded-sm mb-0.5"
              style={{ backgroundColor: palette.highlight_text }}
            />
            <div
              className="w-[40%] h-1 rounded-sm"
              style={{ backgroundColor: palette.text_mid }}
            />
          </div>
          <div
            className="text-[6px] font-mono font-bold"
            style={{ color: palette.highlight_text }}
          >
            123 456
          </div>
        </div>
        <div className="h-6 rounded p-1.5 flex items-center gap-1.5">
          <div
            className="w-3 h-3 rounded-lg"
            style={{ backgroundColor: palette.row_brand }}
          />
          <div className="flex-1">
            <div
              className="w-[50%] h-1 rounded-sm mb-0.5"
              style={{ backgroundColor: palette.row_text }}
            />
            <div
              className="w-[35%] h-1 rounded-sm"
              style={{ backgroundColor: palette.text_soft }}
            />
          </div>
          <div
            className="text-[6px] font-mono"
            style={{ color: palette.text_mid }}
          >
            789 012
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemMockup() {
  return (
    <div className="w-full h-full flex rounded-md overflow-hidden">
      <div className="w-1/2 h-full">
        <ThemeMockup palette={light_palette} />
      </div>
      <div className="w-1/2 h-full">
        <ThemeMockup palette={dark_palette} />
      </div>
    </div>
  );
}

export interface ThemeCardProps {
  mode: ThemeMode;
  label: string;
  is_selected: boolean;
  on_select: () => void;
}

export function ThemeCard({
  mode,
  label,
  is_selected,
  on_select,
}: ThemeCardProps) {
  const border_color =
    mode === "light" ? "1px solid #e5e5e5" : "1px solid #1a1a1a";

  return (
    <button
      className={`flex-1 p-3 rounded-[14px] border-2 transition-all cursor-pointer ${
        is_selected
          ? "border-brand bg-surf-selected"
          : "border-edge-secondary bg-transparent"
      }`}
      type="button"
      onClick={on_select}
    >
      <div
        className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-3"
        style={{ border: border_color }}
      >
        {mode === "light" && <ThemeMockup palette={light_palette} />}
        {mode === "dark" && <ThemeMockup palette={dark_palette} />}
        {mode === "system" && <SystemMockup />}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-txt-primary">{label}</span>
        <span className="pointer-events-none flex-shrink-0">
          <Radio readOnly checked={is_selected} />
        </span>
      </div>
    </button>
  );
}

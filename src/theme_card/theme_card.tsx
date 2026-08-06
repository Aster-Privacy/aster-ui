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
import { ThemeMockupLight, ThemeMockupDark } from "../theme_mockups";

export type ThemeMode = "light" | "dark" | "system";

function ThemeMockupSystem() {
  return (
    <div className="w-full h-full flex overflow-hidden">
      <div className="w-1/2 h-full overflow-hidden">
        <ThemeMockupLight />
      </div>
      <div className="w-1/2 h-full overflow-hidden">
        <ThemeMockupDark />
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
  const get_mockup = () => {
    if (mode === "light") return <ThemeMockupLight />;
    if (mode === "dark") return <ThemeMockupDark />;
    return <ThemeMockupSystem />;
  };

  const get_border_color = () => {
    if (mode === "light") return "1px solid #e5e5e5";
    if (mode === "dark") return "1px solid #1a1a1a";
    return "1px solid #1a1a1a";
  };

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
        style={{ border: get_border_color() }}
      >
        {get_mockup()}
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

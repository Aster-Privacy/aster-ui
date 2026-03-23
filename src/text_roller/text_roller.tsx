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

interface TextRollerItem {
  text: string;
  class_name?: string;
}

interface TextRollerProps extends React.HTMLAttributes<HTMLDivElement> {
  items: (string | TextRollerItem)[];
  interval?: number;
  item_height?: string;
}

const TextRoller = React.forwardRef<HTMLDivElement, TextRollerProps>(
  ({ className, items, interval = 2000, item_height = "1.2em", ...props }, ref) => {
    const [index, set_index] = React.useState(0);

    React.useEffect(() => {
      if (items.length <= 1) return;

      const timer = setInterval(() => {
        set_index((prev) => (prev + 1) % items.length);
      }, interval);

      return () => clearInterval(timer);
    }, [items.length, interval]);

    return (
      <span
        ref={ref}
        className={["aster_text_roller", className].filter(Boolean).join(" ")}
        style={{ height: item_height }}
        {...props}
      >
        <span
          className="aster_text_roller_track"
          style={{ transform: `translateY(calc(-${index} * ${item_height}))` }}
          aria-live="polite"
        >
          {items.map((item, i) => {
            const text = typeof item === "string" ? item : item.text;
            const item_class = typeof item === "string" ? undefined : item.class_name;

            return (
              <span
                key={i}
                className={["aster_text_roller_item", item_class].filter(Boolean).join(" ")}
                style={{ height: item_height }}
                aria-hidden={i !== index}
              >
                {text}
              </span>
            );
          })}
        </span>
      </span>
    );
  },
);

TextRoller.displayName = "TextRoller";

export { TextRoller };
export type { TextRollerProps, TextRollerItem };

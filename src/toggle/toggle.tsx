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
import { cva, type VariantProps } from "class-variance-authority";

const switch_variants = cva("aster_switch", {
  variants: {
    size: {
      sm: "aster_switch_sm",
      md: "aster_switch_md",
      lg: "aster_switch_lg",
    },
    color: {
      blue: "",
      green: "aster_switch_green",
      purple: "aster_switch_purple",
      amber: "aster_switch_amber",
    },
  },
  defaultVariants: {
    size: "md",
    color: "blue",
  },
});

type SwitchVariantProps = VariantProps<typeof switch_variants>;

interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color" | "type">,
    SwitchVariantProps {
  label_title?: string;
  label_desc?: string;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, size, color, label_title, label_desc, onChange, onCheckedChange, ...props }, ref) => {
    const switch_classes = switch_variants({ size, color });

    const handle_change = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
        onCheckedChange?.(e.target.checked);
      },
      [onChange, onCheckedChange],
    );

    const switch_el = (
      <label className={[switch_classes, className].filter(Boolean).join(" ")}>
        <input type="checkbox" className="aster_switch_input" ref={ref} onChange={handle_change} {...props} />
        <span className="aster_switch_track">
          <span className="aster_switch_thumb" />
        </span>
      </label>
    );

    if (label_title) {
      return (
        <label className="aster_switch_labeled">
          <span className="aster_switch_labeled_text">
            <span className="aster_switch_labeled_title">{label_title}</span>
            {label_desc && (
              <span className="aster_switch_labeled_desc">{label_desc}</span>
            )}
          </span>
          {switch_el}
        </label>
      );
    }

    return switch_el;
  }
);

Switch.displayName = "Switch";

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  indeterminate?: boolean;
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, indeterminate, onChange, onCheckedChange, ...props }, ref) => {
    const classes = ["aster_checkbox", className].filter(Boolean).join(" ");
    const internal_ref = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      const el = typeof ref === "function" ? internal_ref.current : (ref?.current ?? internal_ref.current);
      if (el) {
        el.indeterminate = !!indeterminate;
      }
    }, [indeterminate, ref]);

    const combined_ref = React.useCallback(
      (node: HTMLInputElement | null) => {
        (internal_ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
      },
      [ref],
    );

    const handle_change = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
        onCheckedChange?.(e.target.checked);
      },
      [onChange, onCheckedChange],
    );

    return (
      <label className={classes}>
        <input type="checkbox" className="aster_checkbox_input" ref={combined_ref} onChange={handle_change} {...props} />
        <span className="aster_checkbox_box">
          {indeterminate ? (
            <svg
              className="aster_checkbox_check"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          ) : (
            <svg
              className="aster_checkbox_check"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </span>
        {label && <span className="aster_checkbox_text">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, ...props }, ref) => {
    const classes = ["aster_radio", className].filter(Boolean).join(" ");

    return (
      <label className={classes}>
        <input type="radio" className="aster_radio_input" ref={ref} {...props} />
        <span className="aster_radio_circle" />
        {label && <span className="aster_radio_text">{label}</span>}
      </label>
    );
  }
);

Radio.displayName = "Radio";

interface SegOption {
  value: string;
  label: React.ReactNode;
}

interface SegmentedToggleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  name: string;
  options: SegOption[];
  value?: string;
  on_change?: (value: string) => void;
}

const SegmentedToggle = React.forwardRef<HTMLDivElement, SegmentedToggleProps>(
  ({ className, name, options, value, on_change, ...props }, ref) => {
    const classes = ["aster_seg", className].filter(Boolean).join(" ");

    return (
      <div className={classes} ref={ref} {...props}>
        {options.map((opt) => (
          <React.Fragment key={opt.value}>
            <input
              type="radio"
              name={name}
              id={`${name}_${opt.value}`}
              className="aster_seg_input"
              checked={value === opt.value}
              onChange={() => on_change?.(opt.value)}
            />
            <label htmlFor={`${name}_${opt.value}`} className="aster_seg_label">
              {opt.label}
            </label>
          </React.Fragment>
        ))}
      </div>
    );
  }
);

SegmentedToggle.displayName = "SegmentedToggle";

export { Switch, Checkbox, Radio, SegmentedToggle, switch_variants };
export type {
  SwitchProps,
  SwitchVariantProps,
  CheckboxProps,
  RadioProps,
  SegmentedToggleProps,
  SegOption,
};

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

const accordion_variants = cva("aster_accordion", {
  variants: {
    variant: {
      default: "",
      bordered: "aster_accordion_bordered",
      separated: "aster_accordion_separated",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type AccordionVariantProps = VariantProps<typeof accordion_variants>;

interface AccordionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AccordionVariantProps {
  multiple?: boolean;
  default_open?: string[];
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

type AccordionContentProps = React.HTMLAttributes<HTMLDivElement>;

interface AccordionContextType {
  open_items: string[];
  toggle: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType>({
  open_items: [],
  toggle: () => {},
});

const AccordionItemContext = React.createContext<string>("");

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      variant,
      multiple = false,
      default_open = [],
      children,
      ...props
    },
    ref,
  ) => {
    const [open_items, set_open_items] = React.useState<string[]>(default_open);

    const toggle = React.useCallback(
      (value: string) => {
        set_open_items((prev) => {
          if (prev.includes(value)) {
            return prev.filter((v) => v !== value);
          }
          return multiple ? [...prev, value] : [value];
        });
      },
      [multiple],
    );

    const context = React.useMemo(
      () => ({ open_items, toggle }),
      [open_items, toggle],
    );

    return (
      <AccordionContext.Provider value={context}>
        <div
          ref={ref}
          className={accordion_variants({ variant, className })}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  },
);

Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    return (
      <AccordionItemContext.Provider value={value}>
        <div
          ref={ref}
          className={["aster_accordion_item", className]
            .filter(Boolean)
            .join(" ")}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  },
);

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, icon, children, ...props }, ref) => {
  const { open_items, toggle } = React.useContext(AccordionContext);
  const value = React.useContext(AccordionItemContext);
  const is_open = open_items.includes(value);

  return (
    <button
      ref={ref}
      type="button"
      className={["aster_accordion_trigger", className]
        .filter(Boolean)
        .join(" ")}
      onClick={() => toggle(value)}
      aria-expanded={is_open}
      {...props}
    >
      {icon ? (
        <span className="aster_accordion_trigger_icon_wrap">
          <span className="aster_accordion_trigger_icon">{icon}</span>
          <span>{children}</span>
        </span>
      ) : (
        <span>{children}</span>
      )}
      <svg
        className={[
          "aster_accordion_chevron",
          is_open && "aster_accordion_chevron_open",
        ]
          .filter(Boolean)
          .join(" ")}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
});

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const { open_items } = React.useContext(AccordionContext);
    const value = React.useContext(AccordionItemContext);
    const is_open = open_items.includes(value);

    return (
      <div
        ref={ref}
        className={[
          "aster_accordion_content",
          is_open && "aster_accordion_content_open",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        <div
          className={[
            "aster_accordion_content_inner",
            is_open && "aster_accordion_content_inner_open",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {children}
        </div>
      </div>
    );
  },
);

AccordionContent.displayName = "AccordionContent";

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordion_variants,
};
export type {
  AccordionProps,
  AccordionVariantProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
};

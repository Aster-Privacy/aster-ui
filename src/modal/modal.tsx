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

type ModalSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  open?: boolean;
  is_open?: boolean;
  on_close: () => void;
  size?: ModalSize;
  show_close_button?: boolean;
  close_on_overlay?: boolean;
  close_on_escape?: boolean;
  close_label?: string;
  z_index?: number;
  children: React.ReactNode;
}

const DEFAULT_MODAL_Z_INDEX = 100;

interface OpenModalEntry {
  token: symbol;
  z_index: number;
}

const open_modal_stack: OpenModalEntry[] = [];

const topmost_modal_token = (
  stack: readonly OpenModalEntry[],
): symbol | null => {
  let top: OpenModalEntry | null = null;
  for (const entry of stack) {
    if (top === null || entry.z_index >= top.z_index) {
      top = entry;
    }
  }
  return top === null ? null : top.token;
};

const size_class: Record<ModalSize, string> = {
  sm: "aster_modal_sm",
  md: "aster_modal_md",
  lg: "aster_modal_lg",
  xl: "aster_modal_xl",
  "2xl": "aster_modal_2xl",
  full: "aster_modal_full",
};

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      is_open,
      on_close,
      size,
      show_close_button,
      close_on_overlay = true,
      close_on_escape = true,
      close_label = "Close",
      z_index,
      children,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const resolved_open = open ?? is_open ?? false;
    const overlay_classes = [
      "aster_modal_overlay",
      resolved_open && "aster_modal_open",
    ]
      .filter(Boolean)
      .join(" ");

    const modal_classes = [
      "aster_modal",
      size && size_class[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const overlay_style: React.CSSProperties | undefined =
      z_index !== undefined ? { zIndex: z_index } : undefined;

    const handle_overlay_click = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!close_on_overlay) return;
      if (e.target === e.currentTarget) {
        on_close();
      }
    };

    const stack_token = React.useRef<symbol | null>(null);
    if (stack_token.current === null) {
      stack_token.current = Symbol("aster_modal");
    }

    const resolved_z_index = z_index ?? DEFAULT_MODAL_Z_INDEX;

    React.useEffect(() => {
      if (!resolved_open) return;
      const token = stack_token.current!;
      open_modal_stack.push({ token, z_index: resolved_z_index });
      return () => {
        const index = open_modal_stack.findIndex(
          (entry) => entry.token === token,
        );
        if (index !== -1) {
          open_modal_stack.splice(index, 1);
        }
      };
    }, [resolved_open, resolved_z_index]);

    React.useEffect(() => {
      if (!resolved_open || !close_on_escape) return;
      const token = stack_token.current!;
      const handle_escape = (e: KeyboardEvent) => {
        if (e.key !== "Escape") return;
        if (topmost_modal_token(open_modal_stack) !== token) return;
        on_close();
      };
      document.addEventListener("keydown", handle_escape);
      return () => document.removeEventListener("keydown", handle_escape);
    }, [resolved_open, close_on_escape, on_close]);

    return (
      <div className={overlay_classes} onClick={handle_overlay_click} style={overlay_style}>
        <div className={modal_classes} ref={ref} style={style} {...props}>
          {show_close_button && (
            <button
              type="button"
              aria-label={close_label}
              className="aster_modal_close aster_modal_close_floating"
              onClick={on_close}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          {children}
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

interface ModalHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: string;
  icon?: React.ReactNode;
  on_close?: () => void;
  close_label?: string;
  children?: React.ReactNode;
}

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ title, icon, on_close, close_label = "Close", className, children, ...props }, ref) => {
    const classes = ["aster_modal_header", className].filter(Boolean).join(" ");

    if (children !== undefined && !title && !on_close && !icon) {
      return (
        <div className={classes} ref={ref} {...props}>
          {children}
        </div>
      );
    }

    return (
      <div className={classes} ref={ref} {...props}>
        {icon}
        {title && <p className="aster_modal_title">{title}</p>}
        {children}
        {on_close && (
          <button
            type="button"
            aria-label={close_label}
            className="aster_modal_close"
            onClick={on_close}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

ModalHeader.displayName = "ModalHeader";

type ModalBodyProps = React.HTMLAttributes<HTMLParagraphElement>;

const ModalBody = React.forwardRef<HTMLParagraphElement, ModalBodyProps>(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_modal_body", className].filter(Boolean).join(" ");
    return (
      <p className={classes} ref={ref} {...props}>
        {children}
      </p>
    );
  }
);

ModalBody.displayName = "ModalBody";

type ModalActionsProps = React.HTMLAttributes<HTMLDivElement>;

const ModalActions = React.forwardRef<HTMLDivElement, ModalActionsProps>(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_modal_actions", className].filter(Boolean).join(" ");
    return (
      <div className={classes} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

ModalActions.displayName = "ModalActions";

type ModalTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const ModalTitle = React.forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_modal_title", className].filter(Boolean).join(" ");
    return (
      <h2 className={classes} ref={ref} {...props}>
        {children}
      </h2>
    );
  }
);

ModalTitle.displayName = "ModalTitle";

type ModalDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const ModalDescription = React.forwardRef<
  HTMLParagraphElement,
  ModalDescriptionProps
>(({ className, children, ...props }, ref) => {
  const classes = ["aster_modal_description", className]
    .filter(Boolean)
    .join(" ");
  return (
    <p className={classes} ref={ref} {...props}>
      {children}
    </p>
  );
});

ModalDescription.displayName = "ModalDescription";

type ModalFooterProps = React.HTMLAttributes<HTMLDivElement>;

const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_modal_footer", className].filter(Boolean).join(" ");
    return (
      <div className={classes} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

ModalFooter.displayName = "ModalFooter";

export {
  topmost_modal_token,
  DEFAULT_MODAL_Z_INDEX,
  Modal,
  ModalHeader,
  ModalBody,
  ModalActions,
  ModalTitle,
  ModalDescription,
  ModalFooter,
};
export type {
  ModalProps,
  ModalSize,
  ModalHeaderProps,
  ModalBodyProps,
  ModalActionsProps,
  ModalTitleProps,
  ModalDescriptionProps,
  ModalFooterProps,
};

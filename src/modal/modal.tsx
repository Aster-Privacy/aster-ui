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

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  on_close: () => void;
  children: React.ReactNode;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ open, on_close, children, className, ...props }, ref) => {
    const overlay_classes = [
      "aster_modal_overlay",
      open && "aster_modal_open",
    ]
      .filter(Boolean)
      .join(" ");

    const modal_classes = ["aster_modal", className].filter(Boolean).join(" ");

    const handle_overlay_click = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        on_close();
      }
    };

    React.useEffect(() => {
      const handle_escape = (e: KeyboardEvent) => {
        if (e.key === "Escape" && open) {
          on_close();
        }
      };
      document.addEventListener("keydown", handle_escape);
      return () => document.removeEventListener("keydown", handle_escape);
    }, [open, on_close]);

    return (
      <div className={overlay_classes} onClick={handle_overlay_click}>
        <div className={modal_classes} ref={ref} {...props}>
          {children}
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: React.ReactNode;
  on_close: () => void;
}

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ title, icon, on_close, className, ...props }, ref) => {
    const classes = ["aster_modal_header", className].filter(Boolean).join(" ");

    return (
      <div className={classes} ref={ref} {...props}>
        {icon}
        <p className="aster_modal_title">{title}</p>
        <button className="aster_modal_close" onClick={on_close}>
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

export { Modal, ModalHeader, ModalBody, ModalActions };
export type { ModalProps, ModalHeaderProps, ModalBodyProps, ModalActionsProps };

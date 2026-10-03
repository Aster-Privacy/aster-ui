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
"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { cn } from "../lib/cn";
import { use_dialog_shell } from "../lib/use_dialog_shell";
import { use_should_reduce_motion } from "../motion/use_should_reduce_motion";
import { use_ui_strings } from "../i18n/ui_strings";

export type MotionModalSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

const SIZE_MAX_WIDTH: Record<MotionModalSize, string> = {
  sm: "max-w-[360px]",
  md: "max-w-[440px]",
  lg: "max-w-[520px]",
  xl: "max-w-[640px]",
  "2xl": "max-w-[860px]",
  full: "max-w-[800px]",
};

interface MotionModalLabels {
  title_id: string;
  description_id: string;
}

const motion_modal_labels_context =
  React.createContext<MotionModalLabels | null>(null);

export interface MotionModalProps {
  is_open: boolean;
  on_close: () => void;
  size?: MotionModalSize;
  show_close_button?: boolean;
  close_on_overlay?: boolean;
  close_on_escape?: boolean;
  z_index?: number;
  className?: string;
  panel_class_name?: string;
  overlay_class_name?: string;
  reduce_motion?: boolean;
  close_label?: string;
  children: React.ReactNode;
}

export function MotionModal({
  is_open,
  on_close,
  size = "md",
  show_close_button = true,
  close_on_overlay = true,
  close_on_escape = true,
  z_index,
  className,
  panel_class_name,
  overlay_class_name,
  reduce_motion,
  close_label,
  children,
}: MotionModalProps) {
  const system_reduce_motion = use_should_reduce_motion();
  const ui_strings = use_ui_strings();
  const should_reduce_motion = reduce_motion ?? system_reduce_motion;
  const resolved_close_label = close_label ?? ui_strings.close;
  const instance_id = React.useId().replace(/:/g, "");

  const { dialog_ref, handle_backdrop_pointer_down } =
    use_dialog_shell<HTMLDivElement>(
      is_open,
      on_close,
      "modal",
      close_on_escape,
    );

  const label_ids = React.useMemo<MotionModalLabels>(
    () => ({
      title_id: `${instance_id}_title`,
      description_id: `${instance_id}_description`,
    }),
    [instance_id],
  );

  const overlay = (
    <AnimatePresence>
      {is_open && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: z_index ?? 60 }}
        >
          <div
            className={cn(
              "absolute inset-0 backdrop-blur-sm sm:backdrop-blur-md",
              overlay_class_name,
            )}
            style={{
              backgroundColor: "var(--modal-overlay)",
              transform: "translateZ(0)",
            }}
            onPointerDown={
              close_on_overlay ? handle_backdrop_pointer_down : undefined
            }
          />

          <motion.div
            ref={dialog_ref}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            aria-describedby={label_ids.description_id}
            aria-labelledby={label_ids.title_id}
            aria-modal="true"
            className={cn(
              "relative w-full mx-4 my-4 rounded-[var(--aster-radius-panel)] flex flex-col max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain outline-none focus:outline-none focus-visible:outline-none",
              SIZE_MAX_WIDTH[size],
              className,
              panel_class_name,
            )}
            exit={{ opacity: 0, scale: 0.97, y: 4 }}
            initial={
              should_reduce_motion ? false : { opacity: 0, scale: 0.97, y: 4 }
            }
            role="dialog"
            style={{
              backgroundColor: "var(--modal-bg)",
              boxShadow: "var(--aster-dialog-shadow)",
              outline: "none",
            }}
            tabIndex={-1}
            transition={{
              duration: should_reduce_motion ? 0 : 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {show_close_button && (
              <button
                aria-label={resolved_close_label}
                className="aster_modal_close absolute end-5 top-5 z-10 flex items-center justify-center rounded-[var(--aster-radius-item)] transition-colors hover:bg-[var(--aster-floating-hover)]"
                style={{ width: 28, height: 28, padding: 0 }}
                type="button"
                onClick={on_close}
              >
                <XMarkIcon
                  className="text-txt-secondary"
                  style={{ width: 18, height: 18, flexShrink: 0 }}
                />
              </button>
            )}
            <motion_modal_labels_context.Provider value={label_ids}>
              {children}
            </motion_modal_labels_context.Provider>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  if (typeof document === "undefined") return overlay;

  return createPortal(overlay, document.body);
}

export interface MotionModalHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function MotionModalHeader({
  className,
  children,
  ...props
}: MotionModalHeaderProps) {
  return (
    <div
      className={cn(
        "aster_modal_header flex flex-col px-6 pt-6 pb-5 pe-12",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface MotionModalTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export function MotionModalTitle({
  className,
  children,
  id,
  style,
  ...props
}: MotionModalTitleProps) {
  const labels = React.useContext(motion_modal_labels_context);

  return (
    <h3
      className={cn(
        "aster_modal_title w-full text-base font-semibold leading-tight",
        className,
      )}
      id={labels?.title_id ?? id}
      style={{ color: "var(--text-primary)", ...style }}
      {...props}
    >
      {children}
    </h3>
  );
}

export interface MotionModalDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function MotionModalDescription({
  className,
  children,
  id,
  style,
  ...props
}: MotionModalDescriptionProps) {
  const labels = React.useContext(motion_modal_labels_context);

  return (
    <p
      className={cn("text-[13px] w-full mt-2.5 leading-relaxed", className)}
      id={labels?.description_id ?? id}
      style={{ color: "var(--text-tertiary)", ...style }}
      {...props}
    >
      {children}
    </p>
  );
}

export interface MotionModalBodyProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function MotionModalBody({
  className,
  children,
  ...props
}: MotionModalBodyProps) {
  return (
    <div className={cn("aster_modal_body px-5 pb-5", className)} {...props}>
      {children}
    </div>
  );
}

export interface MotionModalFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function MotionModalFooter({
  className,
  children,
  ...props
}: MotionModalFooterProps) {
  return (
    <div
      className={cn(
        "aster_modal_actions px-6 pb-6 pt-2 flex items-center justify-end gap-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface MotionModalActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function MotionModalActions({
  className,
  children,
  ...props
}: MotionModalActionsProps) {
  return (
    <div
      className={cn(
        "aster_modal_actions px-6 pb-6 pt-2 flex items-center justify-end gap-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

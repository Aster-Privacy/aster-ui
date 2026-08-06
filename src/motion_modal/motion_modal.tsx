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
import { AnimatePresence, motion } from "framer-motion";

const cn = (...classes: Array<string | undefined | null | false>) =>
  classes.filter(Boolean).join(" ");

export type MotionModalSize = "sm" | "md" | "lg" | "xl" | "2xl";

const SIZE_MAX_WIDTH: Record<MotionModalSize, string> = {
  sm: "max-w-[360px]",
  md: "max-w-[440px]",
  lg: "max-w-[520px]",
  xl: "max-w-[640px]",
  "2xl": "max-w-[860px]",
};

function get_reduce_motion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function XMarkIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      style={style}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18 18 6M6 6l12 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export interface MotionModalProps {
  is_open: boolean;
  on_close: () => void;
  size?: MotionModalSize;
  show_close_button?: boolean;
  close_on_overlay?: boolean;
  z_index?: number;
  className?: string;
  children: React.ReactNode;
}

export function MotionModal({
  is_open,
  on_close,
  size = "md",
  show_close_button = true,
  close_on_overlay = true,
  z_index,
  className,
  children,
}: MotionModalProps) {
  const [reduce_motion, set_reduce_motion] = React.useState(get_reduce_motion);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handle = () => set_reduce_motion(mq.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  React.useEffect(() => {
    if (!is_open) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") on_close();
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [is_open, on_close]);

  return (
    <AnimatePresence>
      {is_open && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: z_index ?? 60 }}
        >
          <motion.div
            animate={{ opacity: 1 }}
            className="absolute inset-0 backdrop-blur-md"
            exit={{ opacity: 0 }}
            initial={reduce_motion ? false : { opacity: 0 }}
            style={{ backgroundColor: "var(--modal-overlay)" }}
            transition={{ duration: reduce_motion ? 0 : 0.2 }}
            onClick={close_on_overlay ? on_close : undefined}
          />
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className={cn(
              "relative w-full mx-4 my-4 rounded-xl border flex flex-col max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain",
              SIZE_MAX_WIDTH[size],
              className,
            )}
            exit={{ opacity: 0, scale: 0.97, y: 4 }}
            initial={reduce_motion ? false : { opacity: 0, scale: 0.97, y: 4 }}
            style={{
              backgroundColor: "var(--modal-bg)",
              borderColor: "var(--border-primary)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
            }}
            transition={{
              duration: reduce_motion ? 0 : 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {show_close_button && (
              <button
                aria-label="Close"
                className="aster_modal_close absolute right-5 top-4 z-10 flex items-center justify-center rounded-[14px] transition-colors hover:bg-black/5 dark:hover:bg-white/10"
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
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
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
        "aster_modal_header flex flex-col px-6 pt-6 pb-5 pr-12",
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
  ...props
}: MotionModalTitleProps) {
  return (
    <h3
      className={cn(
        "aster_modal_title w-full text-base font-semibold leading-tight text-txt-primary",
        className,
      )}
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
  ...props
}: MotionModalDescriptionProps) {
  return (
    <p
      className={cn(
        "text-[13px] w-full mt-2.5 leading-relaxed text-txt-tertiary",
        className,
      )}
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
    <div
      className={cn("aster_modal_body px-5 pb-5", className)}
      {...props}
    >
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

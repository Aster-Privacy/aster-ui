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
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BackspaceIcon,
  CheckIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

import { cn } from "../lib/cn";
import { Button } from "../button";
import { ButtonSpinner } from "../spinner";
import { use_ui_strings } from "../i18n/ui_strings";
import { is_composing } from "../lib/is_composing";

export interface PinDotsProps {
  digits: number;
  filled: number;
  shake_key: number;
}

export function PinDots({ digits, filled, shake_key }: PinDotsProps) {
  return (
    <motion.div
      key={shake_key}
      animate={shake_key > 0 ? { x: [0, -10, 10, -10, 10, 0] } : { x: 0 }}
      className="flex items-center gap-3"
      transition={{ duration: 0.4 }}
    >
      {Array.from({ length: digits }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-4 h-4 rounded-full border-2 transition-all duration-150",
            i < filled
              ? "bg-[var(--primary,var(--accent-color))] border-[var(--primary,var(--accent-color))]"
              : "border-[color-mix(in_oklab,var(--muted-foreground,var(--text-muted))_40%,transparent)] bg-transparent",
          )}
        />
      ))}
    </motion.div>
  );
}

export interface PinPadProps {
  on_digit: (digit: string) => void;
  on_backspace: () => void;
  on_check: () => void;
  can_check: boolean;
  pressed_key: string | null;
  delete_label?: string;
  confirm_label?: string;
}

const PIN_BTN_BASE =
  "h-14 w-14 mx-auto rounded-full flex items-center justify-center transition-all duration-75";
const PIN_BTN_SURFACE =
  "bg-[var(--muted,var(--bg-tertiary))] hover:bg-[color-mix(in_oklab,var(--muted,var(--bg-tertiary))_70%,transparent)] focus:outline-none";
const PIN_BTN_PRESSED =
  "scale-90 bg-[color-mix(in_oklab,var(--muted,var(--bg-tertiary))_50%,transparent)]";

export function PinPad({
  on_digit,
  on_backspace,
  on_check,
  can_check,
  pressed_key,
  delete_label,
  confirm_label,
}: PinPadProps) {
  const strings = use_ui_strings();
  const digit_cls = (k: string) =>
    cn(
      PIN_BTN_BASE,
      "text-xl font-medium",
      PIN_BTN_SURFACE,
      pressed_key === k && PIN_BTN_PRESSED,
    );

  return (
    <div className="grid grid-cols-3 gap-2.5">
      {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((k) => (
        <button
          key={k}
          className={digit_cls(k)}
          type="button"
          onClick={() => on_digit(k)}
        >
          {k}
        </button>
      ))}
      <button
        className={cn(
          PIN_BTN_BASE,
          PIN_BTN_SURFACE,
          pressed_key === "Backspace" && PIN_BTN_PRESSED,
        )}
        aria-label={delete_label ?? strings.delete}
        type="button"
        onClick={on_backspace}
      >
        <BackspaceIcon className="h-5 w-5 text-txt-primary" />
      </button>
      <button
        className={digit_cls("0")}
        type="button"
        onClick={() => on_digit("0")}
      >
        0
      </button>
      <button
        className={cn(
          PIN_BTN_BASE,
          PIN_BTN_SURFACE,
          pressed_key === "Enter" && PIN_BTN_PRESSED,
          !can_check && "opacity-40",
        )}
        aria-label={confirm_label ?? strings.confirm}
        disabled={!can_check}
        type="button"
        onClick={on_check}
      >
        <CheckIcon className="h-5 w-5 text-txt-primary" />
      </button>
    </div>
  );
}

const OVERLAY_CLASS =
  "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background,var(--bg-primary))] select-none";

export interface PinLockDuressViewProps {
  logo_src: string;
  logo_alt: string;
  reduce_motion: boolean;
  subtitle: string;
  title: string;
  description: string;
  detail: string;
  proceed_label: string;
  cancel_label?: string;
  is_wiping: boolean;
  on_proceed: () => void;
  on_cancel: () => void;
}

export function PinLockDuressView({
  logo_src,
  logo_alt,
  reduce_motion,
  subtitle,
  title,
  description,
  detail,
  proceed_label,
  cancel_label,
  is_wiping,
  on_proceed,
  on_cancel,
}: PinLockDuressViewProps) {
  const strings = use_ui_strings();

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className={cn(OVERLAY_CLASS, "px-6")}
      exit={{ opacity: 0 }}
      initial={reduce_motion ? false : { opacity: 0 }}
    >
      <motion.div
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center gap-5 max-w-sm w-full text-center"
        initial={reduce_motion ? false : { scale: 0.9, opacity: 0 }}
        transition={{ delay: 0.05 }}
      >
        <img
          alt={logo_alt}
          className="h-7 opacity-90"
          draggable={false}
          src={logo_src}
        />
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-500/80">
            {subtitle}
          </p>
          <h1 className="text-xl font-semibold text-txt-primary">{title}</h1>
        </div>
        <div className="w-full rounded-2xl bg-surf-secondary border border-edge-secondary px-4 py-3.5 flex flex-col gap-2 text-start">
          <p className="text-sm text-txt-primary font-medium">{description}</p>
          <p className="text-xs text-txt-muted leading-relaxed">{detail}</p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Button
            className="w-full"
            disabled={is_wiping}
            variant="depth_destructive"
            onClick={on_proceed}
          >
            {proceed_label}
            {is_wiping && <ButtonSpinner />}
          </Button>
          <Button
            className="w-full"
            disabled={is_wiping}
            variant="outline"
            onClick={on_cancel}
          >
            {cancel_label ?? strings.cancel}
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export interface PinLockOverlayViewProps {
  logo_src: string;
  logo_alt: string;
  reduce_motion: boolean;
  title: string;
  lockout_text?: string | null;
  pin_type: "numeric" | "text";
  digits: number;
  value: string;
  on_value_change: (value: string) => void;
  shake_key: number;
  message: string | null;
  is_verifying: boolean;
  is_locked_out: boolean;
  pressed_key: string | null;
  on_digit: (digit: string) => void;
  on_backspace: () => void;
  on_submit: () => void;
  passphrase_placeholder: string;
  unlock_label: string;
  sign_out_label: string;
  on_sign_out: () => void;
  delete_label?: string;
  confirm_label?: string;
}

export function PinLockOverlayView({
  logo_src,
  logo_alt,
  reduce_motion,
  title,
  lockout_text,
  pin_type,
  digits,
  value,
  on_value_change,
  shake_key,
  message,
  is_verifying,
  is_locked_out,
  pressed_key,
  on_digit,
  on_backspace,
  on_submit,
  passphrase_placeholder,
  unlock_label,
  sign_out_label,
  on_sign_out,
  delete_label,
  confirm_label,
}: PinLockOverlayViewProps) {
  const [show_passphrase, set_show_passphrase] = useState(false);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className={OVERLAY_CLASS}
      exit={{ opacity: 0 }}
      initial={reduce_motion ? false : { opacity: 0 }}
    >
      <motion.div
        animate={{ scale: 1, opacity: 1 }}
        className={cn(
          "flex flex-col items-center",
          pin_type === "text" ? "gap-3" : "gap-4",
        )}
        initial={reduce_motion ? false : { scale: 0.9, opacity: 0 }}
        transition={{ delay: 0.05 }}
      >
        <img
          alt={logo_alt}
          className="h-7 opacity-90"
          draggable={false}
          src={logo_src}
        />
        <div className="text-center">
          <h1 className="text-lg font-semibold text-txt-primary">{title}</h1>
          {lockout_text && (
            <p className="mt-0.5 text-sm text-txt-muted">{lockout_text}</p>
          )}
        </div>
        {pin_type === "numeric" ? (
          <>
            <div className="flex flex-col items-center gap-2">
              <PinDots
                digits={digits}
                filled={value.length}
                shake_key={shake_key}
              />
              <div className="h-4 flex items-center justify-center">
                {message && <p className="text-xs text-red-500">{message}</p>}
                {is_verifying && !message && (
                  <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-[var(--primary,var(--accent-color))] border-t-transparent" />
                )}
              </div>
            </div>
            <PinPad
              can_check={value.length >= digits}
              confirm_label={confirm_label}
              delete_label={delete_label}
              on_backspace={on_backspace}
              on_check={on_submit}
              on_digit={on_digit}
              pressed_key={pressed_key}
            />
            <Button variant="outline" onClick={on_sign_out}>
              {sign_out_label}
            </Button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2 w-72">
            <motion.div
              key={shake_key}
              animate={
                shake_key > 0 ? { x: [0, -10, 10, -10, 10, 0] } : { x: 0 }
              }
              className="w-full"
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full">
                <input
                  autoFocus
                  autoComplete="off"
                  className="w-full px-4 py-2.5 pe-10 rounded-xl bg-surf-secondary border border-edge-secondary text-sm text-txt-primary focus:outline-none focus:border-brand transition-colors text-center"
                  disabled={is_verifying || is_locked_out}
                  placeholder={passphrase_placeholder}
                  type={show_passphrase ? "text" : "password"}
                  value={value}
                  onChange={(e) => {
                    if (!is_verifying && !is_locked_out)
                      on_value_change(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter" &&
                      !is_composing(e) &&
                      value.length >= 1
                    )
                      on_submit();
                  }}
                />
                <button
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-txt-muted hover:text-txt-primary transition-colors"
                  tabIndex={-1}
                  type="button"
                  onClick={() => set_show_passphrase((v) => !v)}
                >
                  {show_passphrase ? (
                    <EyeSlashIcon className="h-4 w-4" />
                  ) : (
                    <EyeIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
            </motion.div>
            {message && <p className="text-xs text-red-500 -mt-1">{message}</p>}
            <Button
              className="w-full"
              disabled={is_verifying || is_locked_out || value.length < 1}
              variant="depth"
              onClick={on_submit}
            >
              {unlock_label}
              {is_verifying && <ButtonSpinner />}
            </Button>
            <Button className="w-full" variant="outline" onClick={on_sign_out}>
              {sign_out_label}
            </Button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

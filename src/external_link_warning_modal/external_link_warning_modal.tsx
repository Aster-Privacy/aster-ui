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
import { useState, useEffect, useRef } from "react";
import { Checkbox } from "../toggle";
import { Button } from "../button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
} from "../alert_dialog";

export interface ExternalLinkWarningModalProps {
  is_open: boolean;
  url: string;
  on_close: () => void;
  on_confirm: () => void;
  on_dismiss_permanently: () => void;
  title?: string;
  description?: string;
  continue_label?: string;
  cancel_label?: string;
  dont_ask_again_label?: string;
}

const ANIMATION_DURATION = 150;

export function ExternalLinkWarningModal({
  is_open,
  url,
  on_close,
  on_confirm,
  on_dismiss_permanently,
  title = "Leaving Aster Mail",
  description = "You're about to open an external link. Make sure you trust the destination before continuing.",
  continue_label = "Open link",
  cancel_label = "Cancel",
  dont_ask_again_label = "Don't show this warning again",
}: ExternalLinkWarningModalProps) {
  const [dont_show_again, set_dont_show_again] = useState(false);
  const [internal_open, set_internal_open] = useState(false);
  const closing_ref = useRef(false);

  useEffect(() => {
    if (is_open) {
      closing_ref.current = false;
      set_internal_open(true);
    } else {
      closing_ref.current = false;
      set_internal_open(false);
      set_dont_show_again(false);
    }
  }, [is_open]);

  const close_with_animation = (action: () => void) => {
    if (closing_ref.current) return;
    closing_ref.current = true;
    set_internal_open(false);
    setTimeout(action, ANIMATION_DURATION);
  };

  const handle_confirm = () => {
    if (dont_show_again) {
      on_dismiss_permanently();
    }
    close_with_animation(on_confirm);
  };

  const handle_cancel = () => {
    close_with_animation(on_close);
  };

  const get_display_hostname = () => {
    if (!url) return "";
    try {
      const parsed = new URL(url);

      return parsed.hostname;
    } catch {
      return url.length > 50 ? url.slice(0, 50) + "..." : url;
    }
  };

  return (
    <AlertDialog
      open={internal_open}
      onOpenChange={(open) => {
        if (!open) handle_cancel();
      }}
    >
      <AlertDialogContent
        className="gap-0 p-0 overflow-hidden max-w-[420px] max-sm:max-w-none max-sm:w-full max-sm:h-full max-sm:rounded-none max-sm:left-0 max-sm:top-0 max-sm:translate-x-0 max-sm:translate-y-0"
        on_overlay_click={handle_cancel}
      >
        <div className="flex h-full flex-col">
          <div className="flex-1 px-6 pt-6 pb-5 max-sm:pt-[env(safe-area-inset-top,0px)]">
            <AlertDialogHeader className="space-y-2">
              <AlertDialogTitle className="text-[16px] font-semibold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                  style={{ color: "var(--text-muted)" }}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                {title}
              </AlertDialogTitle>
              <AlertDialogDescription className="text-[14px] leading-normal">
                {description}
              </AlertDialogDescription>
            </AlertDialogHeader>

            <div
              className="mt-4 p-3 rounded-lg"
              style={{
                backgroundColor: "var(--bg-tertiary)",
                border: "1px solid var(--border-secondary)",
              }}
            >
              <p
                className="text-[13px] font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {get_display_hostname()}
              </p>
              <p
                className="text-[12px] break-all mt-1.5 max-h-[30vh] overflow-y-auto"
                style={{ color: "var(--color-info)" }}
              >
                {url}
              </p>
            </div>

            <label
              className="inline-flex items-center gap-2 cursor-pointer select-none mt-5"
              htmlFor="external-link-dont-show-checkbox"
            >
              <Checkbox
                checked={dont_show_again}
                id="external-link-dont-show-checkbox"
                onCheckedChange={(checked) =>
                  set_dont_show_again(checked === true)
                }
              />
              <span
                className="text-[13px]"
                style={{ color: "var(--text-muted)" }}
              >
                {dont_ask_again_label}
              </span>
            </label>
          </div>

          <AlertDialogFooter className="flex-row gap-3 px-6 pb-6 pt-2 sm:justify-end max-sm:pb-[calc(env(safe-area-inset-bottom,0px)+1.5rem)]">
            <Button
              className="mt-0 max-sm:flex-1"
              size="xl"
              variant="outline"
              onClick={handle_cancel}
            >
              {cancel_label}
            </Button>
            <Button
              className="max-sm:flex-1"
              size="xl"
              variant="depth"
              onClick={handle_confirm}
            >
              {continue_label}
            </Button>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

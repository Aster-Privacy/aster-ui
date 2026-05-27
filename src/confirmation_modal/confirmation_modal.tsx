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

import { Button } from "../button";
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
} from "../modal";
import { Checkbox } from "../toggle";

export type ConfirmationVariant = "danger" | "warning" | "info";

export interface ConfirmationModalProps {
  is_open: boolean;
  on_confirm: () => void;
  on_cancel: () => void;
  title: string;
  message: string;
  confirm_text: string;
  cancel_text: string;
  variant?: ConfirmationVariant;
  show_dont_ask_again?: boolean;
  dont_ask_again_label?: string;
  on_dont_ask_again?: () => void | Promise<void>;
  saving_text?: string;
}

const VARIANT_MAP: Record<ConfirmationVariant, "destructive" | "primary"> = {
  danger: "destructive",
  warning: "destructive",
  info: "primary",
};

export function ConfirmationModal({
  is_open,
  on_confirm,
  on_cancel,
  title,
  message,
  confirm_text,
  cancel_text,
  variant = "info",
  show_dont_ask_again = false,
  dont_ask_again_label,
  on_dont_ask_again,
  saving_text,
}: ConfirmationModalProps) {
  const button_variant = VARIANT_MAP[variant];
  const [dont_ask, set_dont_ask] = React.useState(false);
  const [is_saving, set_is_saving] = React.useState(false);

  React.useEffect(() => {
    if (!is_open) {
      set_dont_ask(false);
      set_is_saving(false);
    }
  }, [is_open]);

  const handle_confirm = async () => {
    if (dont_ask && on_dont_ask_again) {
      set_is_saving(true);
      try {
        await on_dont_ask_again();
      } finally {
        set_is_saving(false);
      }
    }
    on_confirm();
  };

  return (
    <Modal
      is_open={is_open}
      on_close={on_cancel}
      show_close_button={false}
      size="sm"
    >
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <ModalDescription>{message}</ModalDescription>
      </ModalHeader>
      {show_dont_ask_again && dont_ask_again_label && (
        <div className="px-6 pb-2">
          <label
            className="inline-flex items-center gap-2 cursor-pointer select-none"
            htmlFor="aster-ui-dont-ask-again"
          >
            <Checkbox
              checked={dont_ask}
              id="aster-ui-dont-ask-again"
              onCheckedChange={(checked) => set_dont_ask(checked === true)}
            />
            <span
              className="text-[13px]"
              style={{ color: "var(--text-muted)" }}
            >
              {dont_ask_again_label}
            </span>
          </label>
        </div>
      )}
      <ModalFooter>
        <Button
          className="max-sm:flex-1"
          disabled={is_saving}
          variant="outline"
          onClick={on_cancel}
        >
          {cancel_text}
        </Button>
        <Button
          className="max-sm:flex-1"
          disabled={is_saving}
          variant={button_variant}
          onClick={handle_confirm}
        >
          {is_saving && saving_text ? saving_text : confirm_text}
        </Button>
      </ModalFooter>
    </Modal>
  );
}

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
import { Button } from "../button";
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
} from "../modal";

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
}: ConfirmationModalProps) {
  const button_variant = VARIANT_MAP[variant];

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
      <ModalFooter>
        <Button
          className="max-sm:flex-1"
          size="xl"
          variant="outline"
          onClick={on_cancel}
        >
          {cancel_text}
        </Button>
        <Button
          className="max-sm:flex-1"
          size="xl"
          variant={button_variant}
          onClick={on_confirm}
        >
          {confirm_text}
        </Button>
      </ModalFooter>
    </Modal>
  );
}

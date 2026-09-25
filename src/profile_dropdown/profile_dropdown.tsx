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
import {
  UserPlusIcon,
  UserMinusIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  NoSymbolIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown_menu";

export interface ProfileDropdownLabels {
  copy: string;
  add_to_contacts: string;
  remove_from_contacts: string;
  notes: string;
  hide_notes: string;
  messages_from_sender: string;
  block_sender: string;
}

export interface ProfileDropdownViewProps {
  email: string;
  display_name: string;
  domain?: string | null;
  children: React.ReactNode;
  avatar: React.ReactNode;
  notes?: React.ReactNode;
  labels: ProfileDropdownLabels;
  open: boolean;
  on_open_change: (open: boolean) => void;
  is_contact: boolean;
  is_contact_loading?: boolean;
  is_blocking?: boolean;
  show_notes: boolean;
  on_prewarm?: () => void;
  on_copy_email: () => void;
  on_contact_action: () => void;
  on_toggle_notes: () => void;
  on_messages_from_sender: () => void;
  on_block_sender: () => void;
}

export function ProfileDropdownView({
  email,
  display_name,
  domain,
  children,
  avatar,
  notes,
  labels,
  open,
  on_open_change,
  is_contact,
  is_contact_loading = false,
  is_blocking = false,
  show_notes,
  on_prewarm,
  on_copy_email,
  on_contact_action,
  on_toggle_notes,
  on_messages_from_sender,
  on_block_sender,
}: ProfileDropdownViewProps) {
  const [address_expanded, set_address_expanded] = React.useState(false);

  React.useEffect(() => {
    set_address_expanded(false);
  }, [email, open]);

  return (
    <DropdownMenu open={open} onOpenChange={on_open_change}>
      <DropdownMenuTrigger
        asChild
        onFocus={on_prewarm}
        onPointerDown={on_prewarm}
        onPointerEnter={on_prewarm}
      >
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-64"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-3 pt-3 pb-2">
          <div className="flex items-center gap-3">
            {avatar}
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium truncate text-txt-primary">
                {display_name}
              </p>
              {domain && (
                <p className="text-[11px] truncate text-txt-muted">{domain}</p>
              )}
            </div>
          </div>
          <div className="mt-2 w-full flex items-center gap-1.5 px-2 py-1.5 rounded-[12px] text-[12px] border text-txt-secondary border-edge-secondary bg-surf-secondary">
            <button
              className={`flex-1 min-w-0 text-start ${
                address_expanded ? "whitespace-normal break-all" : "truncate"
              }`}
              title={email}
              type="button"
              onClick={() => set_address_expanded((current) => !current)}
            >
              {email}
            </button>
            <button
              aria-label={labels.copy}
              className="flex-shrink-0 opacity-60 transition-opacity hover:opacity-100"
              title={labels.copy}
              type="button"
              onClick={on_copy_email}
            >
              <ClipboardDocumentIcon className="w-3 h-3" />
            </button>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="gap-2 cursor-pointer"
          disabled={is_contact_loading}
          onClick={on_contact_action}
        >
          {is_contact ? (
            <>
              <UserMinusIcon className="w-4 h-4" />
              <span>{labels.remove_from_contacts}</span>
            </>
          ) : (
            <>
              <UserPlusIcon className="w-4 h-4" />
              <span>{labels.add_to_contacts}</span>
            </>
          )}
        </DropdownMenuItem>

        <DropdownMenuItem
          className="gap-2 cursor-pointer"
          onSelect={(e) => {
            e.preventDefault();
            on_toggle_notes();
          }}
        >
          <DocumentTextIcon className="w-4 h-4" />
          <span>{show_notes ? labels.hide_notes : labels.notes}</span>
        </DropdownMenuItem>

        {show_notes && (
          <div
            className="mx-1 my-1 rounded-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {notes}
          </div>
        )}

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="gap-2 cursor-pointer"
          onClick={on_messages_from_sender}
        >
          <EnvelopeIcon className="w-4 h-4" />
          <span>{labels.messages_from_sender}</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="gap-2 cursor-pointer text-red-500 focus:text-red-500 focus:bg-red-500/10"
          disabled={is_blocking}
          onClick={on_block_sender}
        >
          <NoSymbolIcon className="w-4 h-4" />
          <span>{labels.block_sender}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

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
import type { ReactNode } from "react";
import type { ProfileAvatarSize } from "../profile_avatar";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  XMarkIcon,
  UserPlusIcon,
  UserMinusIcon,
  EnvelopeIcon,
  NoSymbolIcon,
  ClipboardDocumentIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { ShieldCheckIcon as ShieldCheckSolid } from "@heroicons/react/24/solid";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown_menu";
import { ButtonSpinner } from "../spinner";

export const ASTER_EMAIL_DOMAINS: ReadonlySet<string> = new Set([
  "astermail.org",
  "aster.cx",
  "astermail.me",
  "astermail.net",
]);

function extract_root_domain(email: string): string {
  const match = email.match(/@([^@]+)$/);

  if (!match) return "";
  const parts = match[1].toLowerCase().split(".");

  if (parts.length >= 2) return parts.slice(-2).join(".");

  return match[1].toLowerCase();
}

export function is_aster_email_address(email: string): boolean {
  return ASTER_EMAIL_DOMAINS.has(extract_root_domain(email));
}

export interface SenderProfileAvatarRenderOptions {
  size: ProfileAvatarSize;
  className: string;
}

export type SenderProfileAvatarRenderer = (
  options: SenderProfileAvatarRenderOptions,
) => ReactNode;

interface SenderProfileBaseProps {
  email: string;
  display_name: string;
  domain: string;
  is_aster_user: boolean;
  render_avatar: SenderProfileAvatarRenderer;
  on_copy_email: () => void;
  is_contact: boolean;
  is_contact_loading: boolean;
  contact_disabled: boolean;
  on_contact_action: () => void;
  on_messages_from: () => void;
  on_compose?: () => void;
  is_allowlisted: boolean;
  is_allowlist_loading: boolean;
  allowlist_disabled: boolean;
  on_allowlist_action: () => void;
  is_blocking: boolean;
  on_block_action: () => void;
  notes?: ReactNode;
}

export interface SenderProfileCardStrings {
  add_to_contacts: string;
  remove_from_contacts: string;
  notes: string;
  hide_notes: string;
  messages_from: string;
  send_email: string;
  allow_sender: string;
  remove_from_allowlist: string;
  block_sender: string;
  unblock_sender: string;
}

export interface SenderProfileCardViewProps extends SenderProfileBaseProps {
  is_open: boolean;
  on_open_change: (open: boolean) => void;
  on_trigger_intent?: () => void;
  trigger_className?: string;
  children: ReactNode;
  show_notes: boolean;
  on_toggle_notes: () => void;
  is_blocked: boolean;
  strings: SenderProfileCardStrings;
}

const CARD_AVATAR_CLASS = "ring-1 ring-black/5 dark:ring-white/10 flex-shrink-0";
const INLINE_SPINNER_CLASS =
  "w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin flex-shrink-0";

export function SenderProfileCardView({
  email,
  display_name,
  domain,
  is_aster_user,
  render_avatar,
  on_copy_email,
  is_contact,
  is_contact_loading,
  contact_disabled,
  on_contact_action,
  on_messages_from,
  on_compose,
  is_allowlisted,
  is_allowlist_loading,
  allowlist_disabled,
  on_allowlist_action,
  is_blocking,
  on_block_action,
  notes,
  is_open,
  on_open_change,
  on_trigger_intent,
  trigger_className,
  children,
  show_notes,
  on_toggle_notes,
  is_blocked,
  strings,
}: SenderProfileCardViewProps) {
  return (
    <DropdownMenu open={is_open} onOpenChange={on_open_change}>
      <DropdownMenuTrigger
        asChild
        onFocus={on_trigger_intent}
        onPointerDown={on_trigger_intent}
        onPointerEnter={on_trigger_intent}
      >
        <button
          className={`outline-none${trigger_className ? ` ${trigger_className}` : ""}`}
          type="button"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-72 p-0 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-3 pt-3 pb-2 border-b border-edge-secondary">
          <div className="flex items-center gap-3">
            {render_avatar({ size: "md", className: CARD_AVATAR_CLASS })}
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium truncate text-txt-primary">
                {display_name}
              </p>
              {is_aster_user ? (
                <p className="text-[11px] truncate text-txt-muted">{email}</p>
              ) : (
                domain && (
                  <p className="text-[11px] truncate text-txt-muted">
                    {domain}
                  </p>
                )
              )}
            </div>
          </div>
          {!is_aster_user && (
            <button
              className="mt-2 w-full flex items-center justify-center gap-1.5 py-1.5 rounded-[12px] text-[12px] transition-colors border text-txt-secondary border-edge-secondary bg-surf-secondary hover:bg-surf-hover"
              type="button"
              onClick={on_copy_email}
            >
              <span className="truncate">{email}</span>
              <ClipboardDocumentIcon className="w-3 h-3 flex-shrink-0 opacity-60" />
            </button>
          )}
        </div>

        <div className="p-1">
          <DropdownMenuItem
            className="gap-2 cursor-pointer"
            disabled={contact_disabled}
            onSelect={(e) => {
              e.preventDefault();
              on_contact_action();
            }}
          >
            {is_contact ? (
              <UserMinusIcon className="w-4 h-4 flex-shrink-0" />
            ) : (
              <UserPlusIcon className="w-4 h-4 flex-shrink-0" />
            )}
            <span className="flex-1">
              {is_contact ? strings.remove_from_contacts : strings.add_to_contacts}
            </span>
            {is_contact_loading && <div className={INLINE_SPINNER_CLASS} />}
          </DropdownMenuItem>

          <DropdownMenuItem
            className="gap-2 cursor-pointer"
            onSelect={(e) => {
              e.preventDefault();
              on_toggle_notes();
            }}
          >
            <DocumentTextIcon className="w-4 h-4 flex-shrink-0" />
            <span>{show_notes ? strings.hide_notes : strings.notes}</span>
          </DropdownMenuItem>

          {show_notes && notes && (
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
            onSelect={on_messages_from}
          >
            <EnvelopeIcon className="w-4 h-4 flex-shrink-0" />
            <span>{strings.messages_from}</span>
          </DropdownMenuItem>

          {on_compose && (
            <DropdownMenuItem
              className="gap-2 cursor-pointer"
              onSelect={on_compose}
            >
              <EnvelopeIcon className="w-4 h-4 flex-shrink-0" />
              <span>{strings.send_email}</span>
            </DropdownMenuItem>
          )}

          {!is_aster_user && (
            <>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="gap-2 cursor-pointer"
                disabled={allowlist_disabled}
                onSelect={(e) => {
                  e.preventDefault();
                  on_allowlist_action();
                }}
              >
                {is_allowlisted ? (
                  <ShieldCheckSolid className="w-4 h-4 flex-shrink-0 text-emerald-500" />
                ) : (
                  <ShieldCheckIcon className="w-4 h-4 flex-shrink-0" />
                )}
                <span
                  className={`flex-1 ${is_allowlisted ? "text-emerald-600 dark:text-emerald-400" : ""}`}
                >
                  {is_allowlisted
                    ? strings.remove_from_allowlist
                    : strings.allow_sender}
                </span>
                {is_allowlist_loading && (
                  <div className={INLINE_SPINNER_CLASS} />
                )}
              </DropdownMenuItem>

              <DropdownMenuItem
                className={`gap-2 cursor-pointer ${
                  is_blocked
                    ? ""
                    : "text-red-500 focus:text-red-500 focus:bg-red-500/10"
                }`}
                disabled={is_blocking}
                onSelect={(e) => {
                  e.preventDefault();
                  on_block_action();
                }}
              >
                <NoSymbolIcon className="w-4 h-4 flex-shrink-0" />
                <span className="flex-1">
                  {is_blocked ? strings.unblock_sender : strings.block_sender}
                </span>
                {is_blocking && (
                  <div
                    className={`w-3 h-3 border-2 ${
                      is_blocked ? "border-blue-500" : "border-red-500"
                    } border-t-transparent rounded-full animate-spin flex-shrink-0`}
                  />
                )}
              </DropdownMenuItem>
            </>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export interface SenderProfileModalStrings {
  add_to_contacts: string;
  remove_from_contacts: string;
  messages_from: string;
  send_email: string;
  allow_sender: string;
  remove_from_allowlist: string;
  block_sender: string;
  close: string;
}

export interface SenderProfileModalViewProps extends SenderProfileBaseProps {
  is_open: boolean;
  on_close: () => void;
  reduce_motion?: boolean;
  strings: SenderProfileModalStrings;
}

const ROW_ICON_CLASS = "w-[18px] h-[18px] text-txt-muted flex-shrink-0";

export function SenderProfileModalView({
  email,
  display_name,
  domain,
  is_aster_user,
  render_avatar,
  on_copy_email,
  is_contact,
  is_contact_loading,
  contact_disabled,
  on_contact_action,
  on_messages_from,
  on_compose,
  is_allowlisted,
  is_allowlist_loading,
  allowlist_disabled,
  on_allowlist_action,
  is_blocking,
  on_block_action,
  notes,
  is_open,
  on_close,
  reduce_motion = false,
  strings,
}: SenderProfileModalViewProps) {
  useEffect(() => {
    if (!is_open) return;
    const on_key = (e: KeyboardEvent) => {
      if (e["key"] === "Escape") on_close();
    };

    window.addEventListener("keydown", on_key);

    return () => window.removeEventListener("keydown", on_key);
  }, [is_open, on_close]);

  return (
    <AnimatePresence>
      {is_open && (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          exit={{ opacity: 0 }}
          initial={reduce_motion ? false : { opacity: 0 }}
          transition={{ duration: reduce_motion ? 0 : 0.15 }}
          onClick={on_close}
        >
          <motion.div
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60"
            exit={{ opacity: 0 }}
            initial={reduce_motion ? false : { opacity: 0 }}
          />

          <motion.div
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative w-full max-w-[400px] rounded-2xl overflow-hidden bg-modal-bg border border-edge-primary shadow-[0_25px_60px_-12px_rgba(0,0,0,0.45)]"
            exit={{ scale: 0.96, opacity: 0, y: 8 }}
            initial={reduce_motion ? false : { scale: 0.96, opacity: 0, y: 8 }}
            transition={{
              duration: reduce_motion ? 0 : 0.15,
              ease: [0.19, 1, 0.22, 1],
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {is_aster_user ? (
              <ModalInternalHeader
                close_label={strings.close}
                display_name={display_name}
                email={email}
                on_close={on_close}
                render_avatar={render_avatar}
              />
            ) : (
              <ModalExternalHeader
                close_label={strings.close}
                display_name={display_name}
                domain={domain}
                email={email}
                on_close={on_close}
                on_copy_email={on_copy_email}
                render_avatar={render_avatar}
              />
            )}

            <div className="py-1">
              <ModalActionRow
                disabled={contact_disabled}
                icon={
                  is_contact ? (
                    <UserMinusIcon className={ROW_ICON_CLASS} />
                  ) : (
                    <UserPlusIcon className={ROW_ICON_CLASS} />
                  )
                }
                label={
                  is_contact
                    ? strings.remove_from_contacts
                    : strings.add_to_contacts
                }
                loading={is_contact_loading}
                on_click={on_contact_action}
              />

              <ModalActionRow
                icon={<EnvelopeIcon className={ROW_ICON_CLASS} />}
                label={strings.messages_from}
                on_click={on_messages_from}
              />

              {on_compose && (
                <ModalActionRow
                  icon={<EnvelopeIcon className={ROW_ICON_CLASS} />}
                  label={strings.send_email}
                  on_click={on_compose}
                />
              )}

              {!is_aster_user && (
                <>
                  <div className="my-1 mx-4 border-t border-edge-secondary" />

                  <ModalActionRow
                    disabled={allowlist_disabled}
                    icon={
                      is_allowlisted ? (
                        <ShieldCheckSolid className="w-[18px] h-[18px] text-emerald-500 flex-shrink-0" />
                      ) : (
                        <ShieldCheckIcon className={ROW_ICON_CLASS} />
                      )
                    }
                    label={
                      is_allowlisted
                        ? strings.remove_from_allowlist
                        : strings.allow_sender
                    }
                    loading={is_allowlist_loading}
                    on_click={on_allowlist_action}
                  />

                  <ModalActionRow
                    danger
                    disabled={is_blocking}
                    icon={
                      <NoSymbolIcon className="w-[18px] h-[18px] text-red-500 flex-shrink-0" />
                    }
                    label={strings.block_sender}
                    loading={is_blocking}
                    on_click={on_block_action}
                  />
                </>
              )}
            </div>

            {notes && (
              <div className="px-4 pb-4 pt-1 border-t border-edge-secondary">
                {notes}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ModalInternalHeaderProps {
  display_name: string;
  email: string;
  on_close: () => void;
  close_label: string;
  render_avatar: SenderProfileAvatarRenderer;
}

function ModalInternalHeader({
  display_name,
  email,
  on_close,
  close_label,
  render_avatar,
}: ModalInternalHeaderProps) {
  return (
    <div
      className="relative px-5 pt-6 pb-5"
      style={{
        background: "linear-gradient(135deg, #4f46e5 0%, #1e1b4b 100%)",
      }}
    >
      <button
        aria-label={close_label}
        className="absolute top-3 end-3 p-1.5 rounded-[14px] text-white/50 hover:text-white hover:bg-white/10 transition-colors"
        type="button"
        onClick={on_close}
      >
        <XMarkIcon className="w-4 h-4" />
      </button>

      <div className="flex flex-col items-center text-center">
        {render_avatar({
          size: "xl",
          className: "mb-3 ring-2 ring-white/20 shadow-lg",
        })}
        <h2 className="text-[17px] font-semibold text-white leading-tight">
          {display_name}
        </h2>
        <p className="text-[12px] mt-0.5 text-indigo-200 break-all">{email}</p>
      </div>
    </div>
  );
}

interface ModalExternalHeaderProps {
  display_name: string;
  email: string;
  domain: string;
  on_close: () => void;
  on_copy_email: () => void;
  close_label: string;
  render_avatar: SenderProfileAvatarRenderer;
}

function ModalExternalHeader({
  display_name,
  email,
  domain,
  on_close,
  on_copy_email,
  close_label,
  render_avatar,
}: ModalExternalHeaderProps) {
  return (
    <div className="relative px-5 pt-5 pb-4 border-b border-edge-secondary">
      <button
        aria-label={close_label}
        className="absolute top-3 end-3 p-1.5 rounded-[14px] text-txt-muted hover:text-txt-primary hover:bg-surf-hover transition-colors"
        type="button"
        onClick={on_close}
      >
        <XMarkIcon className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-4 pe-8">
        {render_avatar({ size: "lg", className: CARD_AVATAR_CLASS })}
        <div className="flex-1 min-w-0">
          <h2 className="text-[16px] font-semibold text-txt-primary leading-tight">
            {display_name}
          </h2>
          {domain && (
            <p className="text-[12px] mt-0.5 text-txt-muted">{domain}</p>
          )}
          <button
            className="mt-1 flex items-center gap-1 text-[11px] text-txt-muted hover:text-txt-secondary transition-colors group"
            type="button"
            onClick={on_copy_email}
          >
            <span className="truncate max-w-[220px]">{email}</span>
            <ClipboardDocumentIcon className="w-3 h-3 flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
}

interface ModalActionRowProps {
  icon: ReactNode;
  label: string;
  on_click: () => void;
  disabled?: boolean;
  loading?: boolean;
  danger?: boolean;
}

function ModalActionRow({
  icon,
  label,
  on_click,
  disabled = false,
  loading = false,
  danger = false,
}: ModalActionRowProps) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2.5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
        danger
          ? "hover:bg-red-500/8 dark:hover:bg-red-500/10"
          : "hover:bg-surf-hover"
      }`}
      disabled={disabled}
      type="button"
      onClick={on_click}
    >
      {icon}
      <span
        className={`flex-1 text-start text-[14px] ${danger ? "text-red-500" : "text-txt-primary"}`}
      >
        {label}
      </span>
      {loading && <ButtonSpinner size="xs" />}
    </button>
  );
}

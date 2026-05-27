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

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { use_should_reduce_motion } from "../motion/use_should_reduce_motion";
import { Button } from "../button";
import { Kbd } from "../kbd";
import { SidebarAccountMenu } from "../sidebar_account_menu";
import {
  SidebarSectionHeader,
  SidebarSectionToggle,
  SidebarMoreToggle,
  SidebarTagRow,
} from "./sidebar";

export type DashboardSidebarFilter =
  | { kind: "all" }
  | { kind: "favorites" }
  | { kind: "recent" }
  | { kind: "archived" }
  | { kind: "tag"; tag: string };

export interface DashboardSidebarAccountLike {
  id: string;
  tags?: string[] | null;
  is_pinned?: boolean;
  created_at?: string | null;
}

export interface DashboardSidebarTStrings {
  add_account: string;
  accounts_section: string;
  all_accounts: string;
  favorites: string;
  recently_used: string;
  archived: string;
  tags_section: string;
  no_tags_yet: string;
  create_tag: string;
  show_less: string;
  more_tags: (count: number) => string;
  settings: string;
  sign_out: string;
  app_name: string;
  deck_subtitle?: string;
  your_account: string;
  active: string;
  close_menu: string;
}

export interface DashboardSidebarProps {
  active_filter: DashboardSidebarFilter;
  on_filter_change: (filter: DashboardSidebarFilter) => void;
  on_add_account: () => void;
  on_settings_click: () => void;
  on_sign_out: () => void;
  on_toggle_collapsed?: () => void;
  is_collapsed: boolean;
  is_mobile_open: boolean;
  on_close_mobile: () => void;
  accounts: DashboardSidebarAccountLike[];
  brand_logo_src: string;
  brand_text_logo_src: string;
  account_display_name?: string;
  account_email?: string;
  account_profile_color?: string | null;
  account_profile_picture?: string | null;
  account_aster_fallback_src?: string;
  t_strings: DashboardSidebarTStrings;
  storage_key_prefix?: string;
  add_shortcut_key?: string;
  extra_account_menu_items?: Array<{
    id: string;
    label: string;
    icon: React.ElementType;
    on_click: () => void;
  }>;
}

const SIDEBAR_EXPANDED_WIDTH = 256;

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XMarkIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cog6ToothIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightOnRectangleIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function KeyIcon({ className, style }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon({ className, style }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({ className, style }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArchiveBoxIcon({ className, style }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TagIcon({ className, style }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      style={style}
      viewBox="0 0 24 24"
    >
      <path
        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 6h.008v.008H6V6Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const TAG_PALETTE = [
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#ef4444",
  "#f59e0b",
  "#10b981",
  "#14b8a6",
  "#6366f1",
];

function color_for_tag(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return TAG_PALETTE[hash % TAG_PALETTE.length];
}

type NavKind = "all" | "favorites" | "recent" | "archived";

interface NavItemDef {
  id: NavKind;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItemDef[] = [
  { id: "all", icon: KeyIcon },
  { id: "favorites", icon: StarIcon },
  { id: "recent", icon: ClockIcon },
  { id: "archived", icon: ArchiveBoxIcon },
];

export function DashboardSidebar({
  active_filter,
  on_filter_change,
  on_add_account,
  on_settings_click,
  on_sign_out,
  is_collapsed,
  is_mobile_open,
  on_close_mobile,
  accounts,
  brand_logo_src,
  brand_text_logo_src,
  account_display_name,
  account_email,
  account_profile_color,
  account_profile_picture,
  account_aster_fallback_src,
  t_strings,
  storage_key_prefix = "aster_authenticator_sidebar",
  add_shortcut_key = "a",
  extra_account_menu_items,
}: DashboardSidebarProps) {
  const accounts_collapsed_key = `${storage_key_prefix}_accounts_collapsed`;
  const tags_collapsed_key = `${storage_key_prefix}_tags_collapsed`;
  const reduce_motion = use_should_reduce_motion();
  const dur = (n: number) => (reduce_motion ? 0 : n);

  const [is_mobile, set_is_mobile] = useState(false);
  const [is_tablet, set_is_tablet] = useState(false);
  const [is_account_menu_open, set_is_account_menu_open] = useState(false);
  const [labels_expanded, set_labels_expanded] = useState(false);
  const [accounts_section_collapsed, set_accounts_section_collapsed] = useState(
    () => {
      if (typeof window === "undefined") return false;
      return localStorage.getItem(accounts_collapsed_key) === "1";
    },
  );
  const [tags_section_collapsed, set_tags_section_collapsed] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(tags_collapsed_key) === "1";
  });
  const [indicator_style, set_indicator_style] = useState<{
    transform?: string;
    height?: number;
    opacity?: number;
  }>({ opacity: 0 });
  const nav_container_ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check_breakpoints = () => {
      const width = window.innerWidth;
      set_is_mobile(width < 768);
      set_is_tablet(width >= 768 && width < 1024);
    };
    check_breakpoints();
    window.addEventListener("resize", check_breakpoints);
    return () => window.removeEventListener("resize", check_breakpoints);
  }, []);

  useEffect(() => {
    const handle_keydown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target) {
        const tag = target.tagName;
        if (
          tag === "INPUT" ||
          tag === "TEXTAREA" ||
          tag === "SELECT" ||
          target.isContentEditable
        ) {
          return;
        }
      }
      if (
        event.key === add_shortcut_key ||
        event.key === add_shortcut_key.toUpperCase()
      ) {
        event.preventDefault();
        on_add_account();
      }
    };
    window.addEventListener("keydown", handle_keydown);
    return () => window.removeEventListener("keydown", handle_keydown);
  }, [add_shortcut_key, on_add_account]);

  const collapsed = is_tablet || (!is_mobile && is_collapsed);

  const tag_data = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const account of accounts) {
      for (const tag of account.tags || []) {
        const trimmed = tag.trim();
        if (!trimmed) continue;
        counts[trimmed] = (counts[trimmed] || 0) + 1;
      }
    }
    const sorted = Object.keys(counts).sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base" }),
    );
    return { tags: sorted, counts };
  }, [accounts]);

  const nav_counts = useMemo(() => {
    return {
      all: accounts.length,
      favorites: accounts.filter((a) => a.is_pinned).length,
      recent: accounts.length,
      archived: 0,
    };
  }, [accounts]);

  const toggle_accounts_section = useCallback(() => {
    set_accounts_section_collapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(accounts_collapsed_key, next ? "1" : "0");
      } catch {
        /* noop */
      }
      return next;
    });
  }, [accounts_collapsed_key]);

  const toggle_tags_section = useCallback(() => {
    set_tags_section_collapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(tags_collapsed_key, next ? "1" : "0");
      } catch {
        /* noop */
      }
      return next;
    });
  }, [tags_collapsed_key]);

  const recalculate_indicator = useCallback(() => {
    const container = nav_container_ref.current;
    if (!container) return;
    const target = container.querySelector<HTMLElement>(".sidebar-active");
    if (!target) {
      set_indicator_style((s) => ({ ...s, opacity: 0 }));
      return;
    }
    const container_rect = container.getBoundingClientRect();
    const target_rect = target.getBoundingClientRect();
    set_indicator_style({
      transform: `translateY(${Math.round(target_rect.top - container_rect.top)}px)`,
      height: Math.round(target_rect.height),
      opacity: 1,
    });
  }, []);

  useLayoutEffect(() => {
    recalculate_indicator();
  }, [
    recalculate_indicator,
    active_filter,
    collapsed,
    tag_data.tags,
    labels_expanded,
    accounts_section_collapsed,
    tags_section_collapsed,
  ]);

  useEffect(() => {
    if (!nav_container_ref.current) return;
    let raf_id = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(raf_id);
      raf_id = requestAnimationFrame(recalculate_indicator);
    });
    observer.observe(nav_container_ref.current);
    return () => {
      cancelAnimationFrame(raf_id);
      observer.disconnect();
    };
  }, [recalculate_indicator]);

  const handle_nav_click = useCallback(
    (callback: () => void) => {
      callback();
      if (is_mobile) on_close_mobile();
    },
    [is_mobile, on_close_mobile],
  );

  const labels_for_kind = (kind: NavKind) => {
    switch (kind) {
      case "all":
        return t_strings.all_accounts;
      case "favorites":
        return t_strings.favorites;
      case "recent":
        return t_strings.recently_used;
      case "archived":
        return t_strings.archived;
    }
  };

  const is_kind_selected = (kind: NavKind) => {
    return (
      active_filter.kind !== "tag" && (active_filter.kind as NavKind) === kind
    );
  };

  const account_menu_items = useMemo(() => {
    const settings_item = {
      id: "settings",
      label: t_strings.settings,
      icon: Cog6ToothIcon,
      on_click: on_settings_click,
    };
    return extra_account_menu_items
      ? [settings_item, ...extra_account_menu_items]
      : [settings_item];
  }, [t_strings.settings, on_settings_click, extra_account_menu_items]);

  const account_menu_footer = (
    <Button
      className="w-full text-[12px]"
      size="sm"
      variant="destructive"
      onClick={on_sign_out}
    >
      <ArrowRightOnRectangleIcon className="w-3.5 h-3.5" />
      {t_strings.sign_out}
    </Button>
  );

  const footer_expanded_slot = (
    <div className="flex items-center gap-1">
      <button
        className="flex-1 flex items-center gap-2 px-2 py-1.5 rounded-[12px] text-[12px] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] text-txt-muted"
        type="button"
        onClick={on_settings_click}
      >
        <Cog6ToothIcon className="w-3.5 h-3.5" />
        <span>{t_strings.settings}</span>
      </button>
    </div>
  );

  const footer_collapsed_slot: ReactNode = (
    <button
      className="p-2 rounded-[14px] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] text-txt-muted"
      title={t_strings.settings}
      type="button"
      onClick={on_settings_click}
    >
      <Cog6ToothIcon className="w-4 h-4" />
    </button>
  );

  const max_visible_tags = collapsed ? 3 : 5;
  const visible_tags = labels_expanded
    ? tag_data.tags
    : tag_data.tags.slice(0, max_visible_tags);
  const has_more_tags = tag_data.tags.length > max_visible_tags;
  const hidden_tag_count = tag_data.tags.length - max_visible_tags;

  const content = (
    <aside
      className={`flex h-full flex-col flex-shrink-0 transition-all duration-150 bg-sidebar-bg-custom ${
        collapsed ? "w-16 min-w-16 max-w-16" : ""
      }`}
      style={
        collapsed
          ? undefined
          : {
              width: SIDEBAR_EXPANDED_WIDTH,
              minWidth: SIDEBAR_EXPANDED_WIDTH,
              maxWidth: SIDEBAR_EXPANDED_WIDTH,
            }
      }
    >
      <div
        className={`${collapsed ? "px-2" : "px-3"} ${is_mobile ? "pr-12" : ""} pt-4 pb-3 relative`}
      >
        {is_mobile && (
          <button
            aria-label={t_strings.close_menu}
            className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-[8px] transition-colors hover:bg-black/[0.06] dark:hover:bg-white/[0.08] z-10 text-txt-muted"
            type="button"
            onClick={on_close_mobile}
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        )}
        <SidebarAccountMenu
          active_label={t_strings.active}
          display_name={account_display_name || undefined}
          email={account_email || undefined}
          profile_color={account_profile_color || undefined}
          profile_picture={account_profile_picture || undefined}
          aster_fallback_src={account_aster_fallback_src}
          footer={account_menu_footer}
          identity_label={t_strings.your_account}
          is_open={is_account_menu_open}
          items={account_menu_items}
          on_close={() => set_is_account_menu_open(false)}
          trigger={
            <button
              className={`w-full flex items-center ${collapsed ? "justify-center" : "gap-3"} rounded-[12px] px-1 py-1 -mx-1 transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04] focus:outline-none`}
              type="button"
              onClick={(e) => {
                set_is_account_menu_open((v) => !v);
                e.currentTarget.blur();
              }}
            >
              <div
                className={`${collapsed ? "w-10 h-10" : "w-11 h-11"} flex-shrink-0 relative`}
              >
                <img
                  alt={t_strings.app_name}
                  className="w-full h-full select-none rounded-lg"
                  decoding="async"
                  draggable={false}
                  src={brand_logo_src}
                />
              </div>
              {!collapsed && (
                <>
                  <div className="flex flex-col items-start min-w-0 flex-1">
                    <span className="text-[15px] font-semibold text-txt-primary truncate w-full text-left">
                      {t_strings.app_name}
                    </span>
                    {t_strings.deck_subtitle && (
                      <span className="text-[11px] truncate w-full text-left text-txt-muted">
                        {t_strings.deck_subtitle}
                      </span>
                    )}
                  </div>
                  <ChevronDownIcon className="w-4 h-4 flex-shrink-0 text-txt-muted" />
                </>
              )}
            </button>
          }
        />
      </div>

      <div className={`${collapsed ? "px-2" : "px-2.5"} pb-3`}>
        <Button
          className={`w-full !rounded-[14px] ${collapsed ? "" : "gap-2"}`}
          variant="depth"
          onClick={() => {
            on_add_account();
            if (is_mobile) on_close_mobile();
          }}
        >
          <PlusIcon className="w-[15px] h-[15px]" />
          {!collapsed && (
            <>
              <span>{t_strings.add_account}</span>
              <Kbd keys={add_shortcut_key} size="sm" variant="inlay" />
            </>
          )}
        </Button>
      </div>

      <div
        className={`flex-1 overflow-y-auto ${collapsed ? "px-2" : "px-2.5"} pt-0.5 pb-2`}
      >
        <div ref={nav_container_ref} className="relative">
          {!collapsed && (
            <div
              className="pointer-events-none absolute left-0 w-full rounded-md border-edge-primary"
              style={{
                ...indicator_style,
                top: 0,
                backgroundColor: "var(--indicator-bg)",
                border: "1px solid var(--border-primary)",
                zIndex: 0,
                willChange: "transform, opacity",
                transition:
                  indicator_style.opacity === 0
                    ? "opacity 100ms ease"
                    : "transform 200ms ease, height 200ms ease, opacity 200ms ease",
              }}
            />
          )}

          {collapsed ? (
            <SidebarSectionHeader
              is_collapsed
              label={t_strings.accounts_section}
            />
          ) : (
            <SidebarSectionToggle
              is_collapsed={false}
              label={t_strings.accounts_section}
              on_toggle={toggle_accounts_section}
              section_collapsed={accounts_section_collapsed}
            />
          )}

          {!accounts_section_collapsed &&
            NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const selected = is_kind_selected(item.id);
              const label = labels_for_kind(item.id);
              const count = nav_counts[item.id];
              return (
                <button
                  key={item.id}
                  className={`sidebar-nav-btn group relative w-full flex items-center ${collapsed ? "justify-center" : "gap-2.5"} rounded-[12px] ${collapsed ? "px-0" : "px-2.5"} h-8 text-[14px]  ${selected ? "sidebar-active" : ""} ${collapsed && selected ? "sidebar-selected" : ""}`}
                  style={{
                    zIndex: 1,
                    color: selected
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                    backgroundColor:
                      collapsed && selected
                        ? "var(--indicator-bg)"
                        : undefined,
                  }}
                  title={collapsed ? label : undefined}
                  type="button"
                  onClick={() =>
                    handle_nav_click(() =>
                      on_filter_change({ kind: item.id } as DashboardSidebarFilter),
                    )
                  }
                >
                  <Icon
                    className={`${collapsed ? "w-5 h-5" : "w-4 h-4"} `}
                    style={{
                      color: selected
                        ? "var(--text-primary)"
                        : "var(--text-muted)",
                    }}
                  />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">{label}</span>
                      {count > 0 && (
                        <span className="ml-auto text-[11px] tabular-nums text-txt-muted">
                          {count}
                        </span>
                      )}
                    </>
                  )}
                </button>
              );
            })}

          {!collapsed && (
            <SidebarSectionToggle
              is_collapsed={false}
              label={t_strings.tags_section}
              on_toggle={toggle_tags_section}
              right_slot={
                <button
                  className="p-1 rounded-[14px] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-txt-muted"
                  title={t_strings.create_tag}
                  type="button"
                  onClick={() => {
                    on_add_account();
                    if (is_mobile) on_close_mobile();
                  }}
                >
                  <PlusIcon className="w-4 h-4" />
                </button>
              }
              section_collapsed={tags_section_collapsed}
            />
          )}

          {collapsed && tag_data.tags.length > 0 && (
            <div className="mt-3 flex justify-center">
              <div className="p-1.5 text-txt-muted">
                <TagIcon className="w-4 h-4" />
              </div>
            </div>
          )}

          <div>
            {!tags_section_collapsed &&
              visible_tags.map((tag_name) => {
                const color = color_for_tag(tag_name);
                const selected =
                  active_filter.kind === "tag" &&
                  active_filter.tag === tag_name;
                return (
                  <SidebarTagRow
                    key={tag_name}
                    color={color}
                    count={tag_data.counts[tag_name] ?? 0}
                    is_collapsed={collapsed}
                    label={tag_name}
                    on_click={() =>
                      handle_nav_click(() =>
                        on_filter_change({ kind: "tag", tag: tag_name }),
                      )
                    }
                    selected={selected}
                    show_count
                  />
                );
              })}
            {has_more_tags && !collapsed && !tags_section_collapsed && (
              <SidebarMoreToggle
                expanded={labels_expanded}
                hidden_count={hidden_tag_count}
                less_label={t_strings.show_less}
                more_label={t_strings.more_tags(hidden_tag_count)}
                on_toggle={() => set_labels_expanded(!labels_expanded)}
              />
            )}
            {tag_data.tags.length === 0 &&
              !collapsed &&
              !tags_section_collapsed && (
                <p className="text-[11px] px-2.5 py-2 text-txt-muted">
                  {t_strings.no_tags_yet}
                </p>
              )}
          </div>
        </div>
      </div>

      <div className="mt-auto flex-shrink-0">
        <div
          className={`${collapsed ? "mx-2" : "mx-3"} mb-3 h-px bg-edge-primary`}
        />
        <div
          className={`${collapsed ? "px-2" : "px-3"} pb-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]`}
        >
          {!collapsed && (
            <div className="mb-2">
              <img
                alt="Aster"
                className="h-[18px] select-none"
                decoding="async"
                draggable={false}
                src={brand_text_logo_src}
              />
            </div>
          )}
          {collapsed ? (
            <div className="flex flex-col items-center gap-1">
              {footer_collapsed_slot}
            </div>
          ) : (
            footer_expanded_slot
          )}
        </div>
      </div>
    </aside>
  );

  if (is_mobile) {
    return (
      <AnimatePresence>
        {is_mobile_open && (
          <>
            <motion.div
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: dur(0.2) }}
              onClick={on_close_mobile}
            />
            <motion.div
              animate={{ x: 0 }}
              className="fixed top-0 left-0 bottom-0 z-50"
              exit={{ x: -SIDEBAR_EXPANDED_WIDTH }}
              initial={{ x: -SIDEBAR_EXPANDED_WIDTH }}
              transition={{ type: "tween", duration: dur(0.25), ease: "easeOut" }}
            >
              {content}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  return content;
}

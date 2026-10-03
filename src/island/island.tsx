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

import { Switch } from "../toggle";

function join_classes(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export type IslandPadding = "none" | "sm" | "md" | "lg";
export type IslandTone = "default" | "danger" | "accent" | "warning" | "success";

export interface IslandProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: IslandPadding;
  tone?: IslandTone;
  divided?: boolean;
  interactive?: boolean;
  selected?: boolean;
  as?: "div" | "section" | "article" | "li" | "ul" | "ol" | "form";
}

export const Island = React.forwardRef<HTMLDivElement, IslandProps>(
  (
    {
      padding = "none",
      tone = "default",
      divided = false,
      interactive = false,
      selected = false,
      as = "div",
      className,
      ...props
    },
    ref,
  ) => {
    const Component = as as React.ElementType;
    return (
      <Component
        ref={ref}
        className={join_classes(
          "aster_island",
          padding !== "none" && `aster_island_pad_${padding}`,
          tone !== "default" && `aster_island_tone_${tone}`,
          divided && "aster_island_divided",
          interactive && "aster_island_interactive",
          selected && "aster_island_selected",
          className,
        )}
        {...props}
      />
    );
  },
);

Island.displayName = "Island";

export interface IslandLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  padding?: IslandPadding;
  tone?: IslandTone;
  selected?: boolean;
}

export const IslandLink = React.forwardRef<HTMLAnchorElement, IslandLinkProps>(
  ({ padding = "none", tone = "default", selected = false, className, target, rel, ...props }, ref) => (
    <a
      ref={ref}
      className={join_classes(
        "aster_island",
        "aster_island_link",
        "aster_island_interactive",
        padding !== "none" && `aster_island_pad_${padding}`,
        tone !== "default" && `aster_island_tone_${tone}`,
        selected && "aster_island_selected",
        className,
      )}
      rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
      target={target}
      {...props}
    />
  ),
);

IslandLink.displayName = "IslandLink";

export type IslandBlockSize = "sm" | "md" | "lg";

export interface IslandBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: IslandBlockSize;
}

export const IslandBlock = React.forwardRef<HTMLDivElement, IslandBlockProps>(
  ({ size = "md", className, ...props }, ref) => (
    <div
      ref={ref}
      className={join_classes("aster_island_block", `aster_island_block_${size}`, className)}
      {...props}
    />
  ),
);

IslandBlock.displayName = "IslandBlock";

export interface IslandEmptyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  tone?: IslandTone;
}

export const IslandEmpty = React.forwardRef<HTMLDivElement, IslandEmptyProps>(
  ({ icon, title, description, action, tone = "default", className, ...props }, ref) => (
    <Island
      ref={ref}
      className={join_classes("aster_island_empty", className)}
      padding="lg"
      tone={tone}
      {...props}
    >
      {icon && (
        <span aria-hidden="true" className="aster_island_empty_icon">
          {icon}
        </span>
      )}
      <p className="aster_island_empty_title">{title}</p>
      {description && <p className="aster_island_empty_description">{description}</p>}
      {action && <div className="aster_island_empty_action">{action}</div>}
    </Island>
  ),
);

IslandEmpty.displayName = "IslandEmpty";

export interface IslandSectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  title?: React.ReactNode;
  title_info?: React.ReactNode;
  icon?: React.ReactNode;
  description?: React.ReactNode;
  trailing?: React.ReactNode;
  footer?: React.ReactNode;
  divided?: boolean;
  padding?: IslandPadding;
  tone?: IslandTone;
  bare?: boolean;
  island_class_name?: string;
}

export const IslandSection = React.forwardRef<HTMLElement, IslandSectionProps>(
  (
    {
      title,
      title_info,
      icon,
      description,
      trailing,
      footer,
      divided = false,
      padding = "none",
      tone = "default",
      bare = false,
      island_class_name,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const heading_id = React.useId();
    const has_header = Boolean(title || description || trailing);
    return (
      <section
        ref={ref}
        aria-labelledby={title ? heading_id : undefined}
        className={join_classes("aster_island_section", className)}
        {...props}
      >
        {has_header && (
          <div className="aster_island_section_header">
            <div className="aster_island_section_heading">
              {title && (
                <h3 className="aster_island_section_title" id={heading_id}>
                  {icon}
                  <span>{title}</span>
                  {title_info && (
                    <span className="aster_island_section_title_info">{title_info}</span>
                  )}
                </h3>
              )}
              {description && (
                <p className="aster_island_section_description">{description}</p>
              )}
            </div>
            {trailing && (
              <div className="aster_island_section_trailing">{trailing}</div>
            )}
          </div>
        )}
        {bare ? (
          <div className="aster_island_section_body">{children}</div>
        ) : (
          <Island
            className={island_class_name}
            divided={divided}
            padding={padding}
            tone={tone}
          >
            {children}
          </Island>
        )}
        {footer && <p className="aster_island_section_footer">{footer}</p>}
      </section>
    );
  },
);

IslandSection.displayName = "IslandSection";

export type IslandSectionsProps = React.HTMLAttributes<HTMLDivElement>;

export const IslandSections = React.forwardRef<HTMLDivElement, IslandSectionsProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={join_classes("aster_island_sections", className)} {...props} />
  ),
);

IslandSections.displayName = "IslandSections";

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export interface IslandRowToggle {
  checked: boolean;
  on_change: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  aria_label?: string;
}

const INTERACTIVE_SELECTOR =
  "button, a, input, select, textarea, label, [role='button'], [role='combobox'], [role='switch'], [role='menuitem']";

export interface IslandRowProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "onChange"> {
  label: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  value?: React.ReactNode;
  trailing?: React.ReactNode;
  chevron?: boolean;
  destructive?: boolean;
  disabled?: boolean;
  on_press?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  toggle?: IslandRowToggle;
  layout?: "inline" | "stacked" | "block";
}

export const IslandRow = React.forwardRef<HTMLElement, IslandRowProps>(
  (
    {
      label,
      description,
      icon,
      value,
      trailing,
      chevron,
      destructive = false,
      disabled = false,
      on_press,
      href,
      target,
      rel,
      toggle,
      layout = "inline",
      className,
      ...props
    },
    ref,
  ) => {
    const label_id = React.useId();
    const description_id = React.useId();
    const is_toggle = Boolean(toggle);
    const toggle_disabled = disabled || Boolean(toggle?.disabled);
    const is_link = Boolean(href) && !disabled;
    const is_button = !is_link && !is_toggle && Boolean(on_press);
    const is_pressable = is_link || is_button || (is_toggle && !toggle_disabled);
    const show_chevron = chevron ?? (is_link || (is_button && !trailing && !value));

    const handle_toggle_click = (event: React.MouseEvent<HTMLDivElement>) => {
      if (!toggle || toggle_disabled) return;
      const origin = event.target as HTMLElement | null;
      const interactive = origin?.closest?.(INTERACTIVE_SELECTOR);
      if (interactive && interactive !== event.currentTarget) return;
      toggle.on_change(!toggle.checked);
    };

    const classes = join_classes(
      "aster_island_row",
      is_pressable && "aster_island_row_pressable",
      disabled && "aster_island_row_disabled",
      destructive && "aster_island_row_destructive",
      layout === "stacked" && "aster_island_row_stacked",
      layout === "block" && "aster_island_row_block",
      className,
    );

    const text = (
      <span className="aster_island_row_text">
        <span className="aster_island_row_label" id={label_id}>
          {label}
        </span>
        {description && (
          <span className="aster_island_row_description" id={description_id}>
            {description}
          </span>
        )}
      </span>
    );

    const icon_node = icon ? (
      <span aria-hidden="true" className="aster_island_row_icon">
        {icon}
      </span>
    ) : null;

    const trailing_node =
      value || trailing || toggle || show_chevron ? (
        <span className="aster_island_row_trailing">
          {value && <span className="aster_island_row_value">{value}</span>}
          {trailing}
          {toggle && (
            <span
              className="aster_island_toggle_stop"
              onClick={(event) => event.stopPropagation()}
            >
              <Switch
                aria-describedby={description ? description_id : undefined}
                aria-label={toggle.aria_label}
                aria-labelledby={toggle.aria_label ? undefined : label_id}
                checked={toggle.checked}
                size={toggle.size}
                disabled={toggle_disabled}
                onCheckedChange={(next) => toggle.on_change(next)}
              />
            </span>
          )}
          {show_chevron && <ChevronIcon className="aster_island_row_chevron" />}
        </span>
      ) : null;

    const content =
      layout === "block" ? (
        <>
          <span className="aster_island_row_head">
            {icon_node}
            {text}
          </span>
          {trailing_node}
        </>
      ) : (
        <>
          {icon_node}
          {text}
          {trailing_node}
        </>
      );

    if (is_link) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          href={href}
          rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
          target={target}
          onClick={on_press}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    if (is_button) {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={classes}
          disabled={disabled}
          type="button"
          onClick={on_press}
          {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {content}
        </button>
      );
    }

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        aria-disabled={disabled || undefined}
        className={classes}
        onClick={is_toggle ? handle_toggle_click : undefined}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {content}
      </div>
    );
  },
);

IslandRow.displayName = "IslandRow";

export interface IslandDividerProps extends React.HTMLAttributes<HTMLHRElement> {
  inset?: number;
}

export function IslandDivider({ inset, className, style, ...props }: IslandDividerProps) {
  return (
    <hr
      className={join_classes("aster_island_divider", className)}
      style={
        inset === undefined
          ? style
          : ({ ...style, "--aster-island-divider-inset": `${inset}px` } as React.CSSProperties)
      }
      {...props}
    />
  );
}

export interface IslandStackProps extends React.HTMLAttributes<HTMLDivElement> {
  grouped?: boolean;
  as?: "div" | "ul" | "ol";
}

export const IslandStack = React.forwardRef<HTMLDivElement, IslandStackProps>(
  ({ grouped = false, as = "div", className, ...props }, ref) => {
    const Component = as as React.ElementType;
    return (
      <Component
        ref={ref}
        className={join_classes(
          "aster_island_stack",
          grouped && "aster_island_stack_grouped",
          className,
        )}
        {...props}
      />
    );
  },
);

IslandStack.displayName = "IslandStack";

export interface IslandGridProps extends React.HTMLAttributes<HTMLDivElement> {
  min_column_width?: number;
}

export function IslandGrid({ min_column_width, className, style, ...props }: IslandGridProps) {
  return (
    <div
      className={join_classes("aster_island_grid", className)}
      style={
        min_column_width === undefined
          ? style
          : ({ ...style, "--aster-island-grid-min": `${min_column_width}px` } as React.CSSProperties)
      }
      {...props}
    />
  );
}

export type IslandPageWidth = "narrow" | "default" | "wide" | "full";

export interface IslandPageProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  breadcrumb?: React.ReactNode;
  actions?: React.ReactNode;
  width?: IslandPageWidth;
}

export const IslandPage = React.forwardRef<HTMLDivElement, IslandPageProps>(
  (
    { title, description, breadcrumb, actions, width = "default", className, children, ...props },
    ref,
  ) => {
    const has_header = Boolean(title || description || breadcrumb || actions);
    return (
      <div
        ref={ref}
        className={join_classes(
          "aster_island_page",
          width !== "default" && `aster_island_page_${width}`,
          className,
        )}
        {...props}
      >
        {has_header && (
          <header className="aster_island_page_header">
            <div className="aster_island_page_heading">
              {breadcrumb && (
                <nav className="aster_island_page_breadcrumb">{breadcrumb}</nav>
              )}
              {title && <h1 className="aster_island_page_title">{title}</h1>}
              {description && (
                <p className="aster_island_page_description">{description}</p>
              )}
            </div>
            {actions && <div className="aster_island_page_actions">{actions}</div>}
          </header>
        )}
        {children}
      </div>
    );
  },
);

IslandPage.displayName = "IslandPage";

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

type NavbarVariant = "default" | "dark";

interface NavbarContextValue {
  active_panel: string | null;
  open_panel: (id: string) => void;
  schedule_close: () => void;
  cancel_close: () => void;
}

const NavbarContext = React.createContext<NavbarContextValue>({
  active_panel: null,
  open_panel: () => {},
  schedule_close: () => {},
  cancel_close: () => {},
});

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  variant?: NavbarVariant;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const [active_panel, set_active_panel] = React.useState<string | null>(null);
    const close_timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const open_panel = React.useCallback((panel_id: string) => {
      if (close_timer.current) {
        clearTimeout(close_timer.current);
        close_timer.current = null;
      }
      set_active_panel(panel_id);
    }, []);

    const schedule_close = React.useCallback(() => {
      close_timer.current = setTimeout(() => set_active_panel(null), 150);
    }, []);

    const cancel_close = React.useCallback(() => {
      if (close_timer.current) {
        clearTimeout(close_timer.current);
        close_timer.current = null;
      }
    }, []);

    const classes = [
      "aster_navbar",
      variant === "dark" && "aster_navbar_dark",
      active_panel && "aster_navbar_mega_open",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <NavbarContext.Provider value={{ active_panel, open_panel, schedule_close, cancel_close }}>
        <nav className={classes} ref={ref} onMouseLeave={schedule_close} {...props}>
          {children}
        </nav>
      </NavbarContext.Provider>
    );
  }
);

Navbar.displayName = "Navbar";

type NavbarInnerProps = React.HTMLAttributes<HTMLDivElement>;

const NavbarInner = React.forwardRef<HTMLDivElement, NavbarInnerProps>(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_inner", className].filter(Boolean).join(" ");

    return (
      <div className={classes} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

NavbarInner.displayName = "NavbarInner";

type NavbarLogoProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const NavbarLogo = React.forwardRef<HTMLAnchorElement, NavbarLogoProps>(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_logo", className].filter(Boolean).join(" ");

    return (
      <a className={classes} ref={ref} {...props}>
        {children}
      </a>
    );
  }
);

NavbarLogo.displayName = "NavbarLogo";

type NavbarLinksProps = React.HTMLAttributes<HTMLDivElement>;

const NavbarLinks = React.forwardRef<HTMLDivElement, NavbarLinksProps>(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_links", className].filter(Boolean).join(" ");

    return (
      <div className={classes} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

NavbarLinks.displayName = "NavbarLinks";

type NavbarLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const NavbarLink = React.forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_link", className].filter(Boolean).join(" ");

    return (
      <a className={classes} ref={ref} {...props}>
        {children}
      </a>
    );
  }
);

NavbarLink.displayName = "NavbarLink";

interface NavbarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  panel_id: string;
}

const NavbarTrigger = React.forwardRef<HTMLButtonElement, NavbarTriggerProps>(
  ({ className, panel_id, children, ...props }, ref) => {
    const { active_panel, open_panel, schedule_close } = React.useContext(NavbarContext);
    const classes = ["aster_navbar_link", className].filter(Boolean).join(" ");

    return (
      <button
        className={classes}
        ref={ref}
        data-active={String(active_panel === panel_id)}
        onMouseEnter={() => open_panel(panel_id)}
        onMouseLeave={schedule_close}
        {...props}
      >
        {children}
        <svg
          className="aster_navbar_chevron"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    );
  }
);

NavbarTrigger.displayName = "NavbarTrigger";

type NavbarActionsProps = React.HTMLAttributes<HTMLDivElement>;

const NavbarActions = React.forwardRef<HTMLDivElement, NavbarActionsProps>(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_actions", className].filter(Boolean).join(" ");

    return (
      <div className={classes} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

NavbarActions.displayName = "NavbarActions";

interface NavbarCtaProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  light?: boolean;
}

const NavbarCta = React.forwardRef<HTMLAnchorElement, NavbarCtaProps>(
  ({ className, light, children, ...props }, ref) => {
    const classes = [
      "aster_navbar_cta",
      light && "aster_navbar_cta_light",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <a className={classes} ref={ref} {...props}>
        {children}
      </a>
    );
  }
);

NavbarCta.displayName = "NavbarCta";

interface NavbarSearchProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
  shortcut?: string;
}

const NavbarSearch = React.forwardRef<HTMLDivElement, NavbarSearchProps>(
  ({ className, placeholder = "Search...", shortcut = "/", ...props }, ref) => {
    const classes = ["aster_navbar_search", className].filter(Boolean).join(" ");

    return (
      <div className={classes} ref={ref} {...props}>
        <svg
          className="aster_navbar_search_icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input type="text" className="aster_navbar_search_input" placeholder={placeholder} />
        {shortcut && <kbd className="aster_navbar_search_kbd">{shortcut}</kbd>}
      </div>
    );
  }
);

NavbarSearch.displayName = "NavbarSearch";

interface NavbarMegaProps extends React.HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
}

const NavbarMega = React.forwardRef<HTMLDivElement, NavbarMegaProps>(
  ({ className, dark, children, ...props }, ref) => {
    const { cancel_close, schedule_close } = React.useContext(NavbarContext);

    const outer_classes = ["aster_navbar_mega", className].filter(Boolean).join(" ");
    const container_classes = [
      "aster_navbar_mega_container",
      dark && "aster_navbar_mega_container_dark",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        className={outer_classes}
        ref={ref}
        onMouseEnter={cancel_close}
        onMouseLeave={schedule_close}
        {...props}
      >
        <div className={container_classes}>
          {children}
        </div>
      </div>
    );
  }
);

NavbarMega.displayName = "NavbarMega";

interface NavbarMegaPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  panel_id: string;
}

const NavbarMegaPanel = React.forwardRef<HTMLDivElement, NavbarMegaPanelProps>(
  ({ className, panel_id, children, ...props }, ref) => {
    const { active_panel } = React.useContext(NavbarContext);

    const classes = [
      "aster_navbar_mega_panel",
      active_panel === panel_id && "aster_navbar_mega_panel_active",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={classes} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

NavbarMegaPanel.displayName = "NavbarMegaPanel";

type NavbarMegaColsProps = React.HTMLAttributes<HTMLDivElement>;

const NavbarMegaCols = React.forwardRef<HTMLDivElement, NavbarMegaColsProps>(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mega_cols", className].filter(Boolean).join(" ");

    return (
      <div className={classes} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

NavbarMegaCols.displayName = "NavbarMegaCols";

interface NavbarMegaColProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string;
}

const NavbarMegaCol = React.forwardRef<HTMLDivElement, NavbarMegaColProps>(
  ({ className, heading, children, ...props }, ref) => {
    return (
      <div className={className} ref={ref} {...props}>
        {heading && <p className="aster_navbar_mega_heading">{heading}</p>}
        {children}
      </div>
    );
  }
);

NavbarMegaCol.displayName = "NavbarMegaCol";

interface NavbarMegaItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
}

const NavbarMegaItem = React.forwardRef<HTMLAnchorElement, NavbarMegaItemProps>(
  ({ className, icon, title, description, ...props }, ref) => {
    const classes = ["aster_navbar_mega_item", className].filter(Boolean).join(" ");

    return (
      <a className={classes} ref={ref} {...props}>
        {icon && <span className="aster_navbar_mega_icon">{icon}</span>}
        <div>
          <span className="aster_navbar_mega_title">{title}</span>
          {description && <span className="aster_navbar_mega_desc">{description}</span>}
        </div>
      </a>
    );
  }
);

NavbarMegaItem.displayName = "NavbarMegaItem";

type NavbarMegaItemSimpleProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const NavbarMegaItemSimple = React.forwardRef<HTMLAnchorElement, NavbarMegaItemSimpleProps>(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mega_item_simple", className].filter(Boolean).join(" ");

    return (
      <a className={classes} ref={ref} {...props}>
        {children}
      </a>
    );
  }
);

NavbarMegaItemSimple.displayName = "NavbarMegaItemSimple";

type NavbarHamburgerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const NavbarHamburger = React.forwardRef<HTMLButtonElement, NavbarHamburgerProps>(
  ({ className, onClick, ...props }, ref) => {
    const classes = ["aster_navbar_hamburger", className].filter(Boolean).join(" ");

    const handle_click = (e: React.MouseEvent<HTMLButtonElement>) => {
      const nav = (e.currentTarget as HTMLElement).closest(".aster_navbar");
      if (nav) nav.classList.toggle("aster_navbar_mobile_open");
      onClick?.(e);
    };

    return (
      <button className={classes} ref={ref} onClick={handle_click} {...props}>
        <svg
          className="aster_navbar_hamburger_open"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          className="aster_navbar_hamburger_close"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    );
  }
);

NavbarHamburger.displayName = "NavbarHamburger";

type NavbarMobileMenuProps = React.HTMLAttributes<HTMLDivElement>;

const NavbarMobileMenu = React.forwardRef<HTMLDivElement, NavbarMobileMenuProps>(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mobile_menu", className].filter(Boolean).join(" ");

    return (
      <div className={classes} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

NavbarMobileMenu.displayName = "NavbarMobileMenu";

type NavbarMobileLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const NavbarMobileLink = React.forwardRef<HTMLAnchorElement, NavbarMobileLinkProps>(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_navbar_mobile_link", className].filter(Boolean).join(" ");

    return (
      <a className={classes} ref={ref} {...props}>
        {children}
      </a>
    );
  }
);

NavbarMobileLink.displayName = "NavbarMobileLink";

const NavbarMobileDivider = () => <div className="aster_navbar_mobile_divider" />;

NavbarMobileDivider.displayName = "NavbarMobileDivider";

export {
  Navbar,
  NavbarInner,
  NavbarLogo,
  NavbarLinks,
  NavbarLink,
  NavbarTrigger,
  NavbarActions,
  NavbarCta,
  NavbarSearch,
  NavbarMega,
  NavbarMegaPanel,
  NavbarMegaCols,
  NavbarMegaCol,
  NavbarMegaItem,
  NavbarMegaItemSimple,
  NavbarHamburger,
  NavbarMobileMenu,
  NavbarMobileLink,
  NavbarMobileDivider,
};

export type {
  NavbarProps,
  NavbarVariant,
  NavbarInnerProps,
  NavbarLogoProps,
  NavbarLinksProps,
  NavbarLinkProps,
  NavbarTriggerProps,
  NavbarActionsProps,
  NavbarCtaProps,
  NavbarSearchProps,
  NavbarMegaProps,
  NavbarMegaPanelProps,
  NavbarMegaColsProps,
  NavbarMegaColProps,
  NavbarMegaItemProps,
  NavbarMegaItemSimpleProps,
  NavbarHamburgerProps,
  NavbarMobileMenuProps,
  NavbarMobileLinkProps,
};

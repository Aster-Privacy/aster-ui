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
import { cva, type VariantProps } from "class-variance-authority";

const avatar_variants = cva("aster_avatar", {
  variants: {
    size: {
      xs: "aster_avatar_xs",
      sm: "aster_avatar_sm",
      md: "aster_avatar_md",
      lg: "aster_avatar_lg",
      xl: "aster_avatar_xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type AvatarVariantProps = VariantProps<typeof avatar_variants>;

interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children">,
    AvatarVariantProps {
  src?: string;
  alt?: string;
  initials?: string;
  bordered?: boolean;
}

const Avatar = React.forwardRef<HTMLElement, AvatarProps>(
  ({ className, size, src, alt, initials, bordered, ...props }, ref) => {
    const base_classes = avatar_variants({ size });
    const extra = [
      base_classes,
      initials && !src && "aster_avatar_initials",
      bordered && "aster_avatar_bordered",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if (src) {
      return (
        <img
          className={extra}
          src={src}
          alt={alt || ""}
          ref={ref as React.Ref<HTMLImageElement>}
          {...(props as React.ImgHTMLAttributes<HTMLImageElement>)}
        />
      );
    }

    return (
      <span
        className={extra}
        ref={ref as React.Ref<HTMLSpanElement>}
        {...(props as React.HTMLAttributes<HTMLSpanElement>)}
      >
        {initials}
      </span>
    );
  }
);

Avatar.displayName = "Avatar";

type StatusType = "online" | "away" | "busy" | "offline";

const status_class_map: Record<StatusType, string> = {
  online: "aster_avatar_status aster_avatar_status_online",
  away: "aster_avatar_status aster_avatar_status_away",
  busy: "aster_avatar_status aster_avatar_status_busy",
  offline: "aster_avatar_status aster_avatar_status_offline",
};

interface AvatarWithStatusProps extends AvatarProps {
  status: StatusType;
}

const AvatarWithStatus = React.forwardRef<HTMLDivElement, AvatarWithStatusProps>(
  ({ status, className, ...avatar_props }, ref) => {
    return (
      <div className="aster_avatar_wrap" ref={ref}>
        <Avatar {...avatar_props} />
        <span className={status_class_map[status]} />
      </div>
    );
  }
);

AvatarWithStatus.displayName = "AvatarWithStatus";

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, children, ...props }, ref) => {
    const classes = ["aster_avatar_group", className].filter(Boolean).join(" ");
    return (
      <div className={classes} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";

interface AvatarNamedProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  children: React.ReactNode;
}

const AvatarNamed = React.forwardRef<HTMLDivElement, AvatarNamedProps>(
  ({ className, name, children, ...props }, ref) => {
    const classes = ["aster_avatar_named", className].filter(Boolean).join(" ");
    return (
      <div className={classes} ref={ref} {...props}>
        {children}
        <span className="aster_avatar_named_text">{name}</span>
      </div>
    );
  }
);

AvatarNamed.displayName = "AvatarNamed";

export { Avatar, AvatarWithStatus, AvatarGroup, AvatarNamed, avatar_variants };
export type {
  AvatarProps,
  AvatarVariantProps,
  AvatarWithStatusProps,
  AvatarGroupProps,
  AvatarNamedProps,
  StatusType,
};

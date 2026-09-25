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
"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { cn } from "../lib/cn";

const RadixContextMenu = ContextMenuPrimitive.Root;

const RadixContextMenuTrigger = ContextMenuPrimitive.Trigger;

const RadixContextMenuGroup = ContextMenuPrimitive.Group;

const RadixContextMenuPortal = ContextMenuPrimitive.Portal;

const RadixContextMenuSub = ContextMenuPrimitive.Sub;

const RadixContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const RadixContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-[var(--dropdown-hover)] data-[state=open]:bg-[var(--dropdown-hover)] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "ps-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ms-auto h-4 w-4 rtl:-scale-x-100" />
  </ContextMenuPrimitive.SubTrigger>
));

RadixContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const RadixContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, style, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
        className,
      )}
      style={{
        backgroundColor: "var(--dropdown-bg)",
        borderColor: "var(--border-secondary)",
        color: "var(--text-primary)",
        ...style,
      }}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));

RadixContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const RadixContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, style, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
        className,
      )}
      style={{
        backgroundColor: "var(--dropdown-bg)",
        borderColor: "var(--border-secondary)",
        color: "var(--text-primary)",
        ...style,
      }}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));

RadixContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const RadixContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-[var(--dropdown-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "ps-8",
      className,
    )}
    {...props}
  />
));

RadixContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const RadixContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    checked={checked}
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 ps-8 pe-2 text-sm outline-none focus:bg-[var(--dropdown-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute start-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));

RadixContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName;

const RadixContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 ps-8 pe-2 text-sm outline-none focus:bg-[var(--dropdown-hover)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute start-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));

RadixContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const RadixContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "ps-8",
      className,
    )}
    {...props}
  />
));

RadixContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const RadixContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px", className)}
    style={{ backgroundColor: "var(--border-secondary)" }}
    {...props}
  />
));

RadixContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

export {
  RadixContextMenu,
  RadixContextMenuTrigger,
  RadixContextMenuContent,
  RadixContextMenuItem,
  RadixContextMenuCheckboxItem,
  RadixContextMenuRadioItem,
  RadixContextMenuLabel,
  RadixContextMenuSeparator,
  RadixContextMenuGroup,
  RadixContextMenuPortal,
  RadixContextMenuSub,
  RadixContextMenuSubContent,
  RadixContextMenuSubTrigger,
  RadixContextMenuRadioGroup,
};

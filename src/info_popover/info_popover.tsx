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

import { InformationCircleIcon } from "@heroicons/react/24/outline";

import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { use_ui_strings } from "../i18n/ui_strings";

export interface InfoPopoverProps {
  title: string;
  description: string;
  learn_more_url?: string;
  learn_more_label?: string;
  icon_class?: string;
}

export function InfoPopover({
  title,
  description,
  learn_more_url,
  learn_more_label,
  icon_class,
}: InfoPopoverProps) {
  const strings = use_ui_strings();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          aria-label={strings.more_info}
          className="-m-1 inline-flex items-center justify-center flex-shrink-0 p-1 text-txt-muted hover:text-txt-secondary transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          type="button"
        >
          <InformationCircleIcon className={icon_class ?? "w-4 h-4"} />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="aster_info_popover z-[200]"
        collisionPadding={12}
        sideOffset={6}
      >
        {title && (
          <p className="aster_info_popover_title">
            <InformationCircleIcon aria-hidden="true" />
            <span>{title}</span>
          </p>
        )}
        <p className="aster_info_popover_body">{description}</p>
        {learn_more_url && (
          <a
            className="aster_info_popover_link"
            href={learn_more_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {learn_more_label ?? strings.learn_more}
          </a>
        )}
      </PopoverContent>
    </Popover>
  );
}

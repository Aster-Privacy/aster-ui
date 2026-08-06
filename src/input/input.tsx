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

type InputSize = "sm" | "md" | "lg" | "xl";
type InputStatus = "default" | "success" | "error";

const SIZE_CLASSES: Record<InputSize, string> = {
  sm: "aster_input_sm",
  md: "aster_input_md",
  lg: "aster_input_lg",
  xl: "aster_input_xl",
};

const STATUS_CLASSES: Record<InputStatus, string> = {
  default: "",
  success: "aster_input_success",
  error: "aster_input_error",
};

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size"> {
  size?: InputSize;
  status?: InputStatus;
}

function join_classes(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size = "lg", status = "default", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={join_classes(
          "aster_input",
          SIZE_CLASSES[size],
          STATUS_CLASSES[status],
          className,
        )}
        type={type}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };

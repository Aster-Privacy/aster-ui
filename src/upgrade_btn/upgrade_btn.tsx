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
import { Button } from "../button/button";
import type { ButtonProps } from "../button/button";

type UpgradeBtnProps = Omit<ButtonProps, "variant"> & {
  label?: string;
};

const UpgradeBtn = React.forwardRef<HTMLButtonElement, UpgradeBtnProps>(
  ({ label, children, size = "md", ...props }, ref) => {
    return (
      <Button ref={ref} variant="depth" size={size} {...props}>
        {children ?? label ?? "Upgrade"}
      </Button>
    );
  }
);

UpgradeBtn.displayName = "UpgradeBtn";

export { UpgradeBtn };
export type { UpgradeBtnProps };

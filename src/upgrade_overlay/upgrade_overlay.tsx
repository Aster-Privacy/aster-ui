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
import { Badge } from "../badge/badge";
import { UpgradeBtn } from "../upgrade_btn/upgrade_btn";

interface UpgradeOverlayProps {
  badge_label?: string;
  message: string;
  cta_label?: string;
  on_upgrade: () => void;
  className?: string;
}

function UpgradeOverlay({
  badge_label = "Upgrade plan",
  message,
  cta_label = "Upgrade",
  on_upgrade,
  className,
}: UpgradeOverlayProps) {
  return (
    <div className={["aster_upgrade_overlay", className].filter(Boolean).join(" ")}>
      <Badge color="blue">{badge_label}</Badge>
      <p className="aster_upgrade_overlay_message">{message}</p>
      <UpgradeBtn size="sm" onClick={on_upgrade}>
        {cta_label}
      </UpgradeBtn>
    </div>
  );
}

export { UpgradeOverlay };
export type { UpgradeOverlayProps };

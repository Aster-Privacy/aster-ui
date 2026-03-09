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
import { Card, CardIcon, type CardProps } from "./card";

interface FeatureCardProps extends Omit<CardProps, "children"> {
  icon?: React.ReactNode;
  icon_color?: "blue" | "green" | "purple" | "amber" | "red" | "gray";
  title: string;
  description: string;
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon, icon_color = "blue", title, description, className, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={["aster_feature_card", className].filter(Boolean).join(" ")}
        {...props}
      >
        {icon && <CardIcon color={icon_color}>{icon}</CardIcon>}
        <p className="aster_feature_card_title">{title}</p>
        <p className="aster_feature_card_description">{description}</p>
      </Card>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

export { FeatureCard };
export type { FeatureCardProps };

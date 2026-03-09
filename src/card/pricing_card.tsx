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
import { Card, type CardProps } from "./card";

interface PricingCardProps extends Omit<CardProps, "children"> {
  plan: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  badge?: React.ReactNode;
  children?: React.ReactNode;
}

const CheckIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
);

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  (
    { plan, price, period, description, features, badge, children, className, ...props },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={["aster_pricing_card", className].filter(Boolean).join(" ")}
        {...props}
      >
        <div className="aster_pricing_card_header">
          <p className="aster_pricing_card_plan">{plan}</p>
          {badge}
        </div>
        <div className="aster_pricing_card_price_row">
          <span className="aster_pricing_card_price">{price}</span>
          {period && <span className="aster_pricing_card_period">{period}</span>}
        </div>
        {description && (
          <p className="aster_pricing_card_description">{description}</p>
        )}
        <hr className="aster_pricing_card_divider" />
        <ul className="aster_pricing_card_features">
          {features.map((feature) => (
            <li key={feature} className="aster_pricing_card_feature">
              <span className="aster_pricing_card_check">
                <CheckIcon />
              </span>
              {feature}
            </li>
          ))}
        </ul>
        {children && <div className="aster_pricing_card_cta">{children}</div>}
      </Card>
    );
  }
);

PricingCard.displayName = "PricingCard";

export { PricingCard };
export type { PricingCardProps };

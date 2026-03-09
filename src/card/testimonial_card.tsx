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

interface TestimonialCardProps extends Omit<CardProps, "children"> {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: React.ReactNode;
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ quote, author, role, company, avatar, className, ...props }, ref) => {
    const role_text = [role, company].filter(Boolean).join(" at ");

    return (
      <Card
        ref={ref}
        className={["aster_testimonial_card", className].filter(Boolean).join(" ")}
        {...props}
      >
        <p className="aster_testimonial_card_quote">{quote}</p>
        <div className="aster_testimonial_card_author">
          <div className="aster_testimonial_card_avatar">
            {avatar || author.charAt(0).toUpperCase()}
          </div>
          <div className="aster_testimonial_card_info">
            <p className="aster_testimonial_card_name">{author}</p>
            {role_text && (
              <p className="aster_testimonial_card_role">{role_text}</p>
            )}
          </div>
        </div>
      </Card>
    );
  }
);

TestimonialCard.displayName = "TestimonialCard";

export { TestimonialCard };
export type { TestimonialCardProps };

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

import type { Variants, Transition } from "framer-motion";

export const motion_ease_standard: [number, number, number, number] = [
  0.25, 0.46, 0.45, 0.94,
];

export const motion_duration_fast = 0.1;
export const motion_duration_base = 0.15;
export const motion_duration_slow = 0.25;

export const stagger_container: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0,
    },
  },
};

export const fade_up_item: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: motion_duration_base,
      ease: motion_ease_standard,
    },
  },
};

export const page_slide_transition: Transition = {
  duration: motion_duration_base,
  ease: motion_ease_standard,
};

export const button_tap = {
  scale: 0.98,
  transition: { duration: motion_duration_fast },
};

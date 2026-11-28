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
import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";

const COPIED_RESET_MS = 1600;

const code_block_variants = cva("aster_code_block", {
  variants: {
    size: {
      sm: "aster_code_block_sm",
      md: "aster_code_block_md",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type CodeBlockVariantProps = VariantProps<typeof code_block_variants>;

interface CodeBlockProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onCopy">,
    CodeBlockVariantProps {
  code: string;
  label?: React.ReactNode;
  prompt?: string;
  copy_label?: string;
  copied_label?: string;
  on_copy?: (text: string) => Promise<boolean | void> | boolean | void;
  wrap?: boolean;
  max_height?: number | string;
  header_actions?: React.ReactNode;
  code_label?: string;
}

async function write_clipboard(text: string): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.clipboard) return false;

  try {
    await navigator.clipboard.writeText(text);

    return true;
  } catch {
    return false;
  }
}

const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      className,
      size,
      code,
      label,
      prompt,
      copy_label,
      copied_label,
      on_copy,
      wrap = false,
      max_height,
      header_actions,
      code_label,
      ...props
    },
    ref,
  ) => {
    const [copied, set_copied] = React.useState(false);
    const reset_timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    const lines = React.useMemo(() => code.replace(/\n$/, "").split("\n"), [code]);
    const has_header = Boolean(label || header_actions);

    React.useEffect(
      () => () => {
        if (reset_timer.current) clearTimeout(reset_timer.current);
      },
      [],
    );

    const handle_copy = React.useCallback(async () => {
      const result = on_copy ? await on_copy(code) : await write_clipboard(code);

      if (result === false) return;
      set_copied(true);
      if (reset_timer.current) clearTimeout(reset_timer.current);
      reset_timer.current = setTimeout(() => set_copied(false), COPIED_RESET_MS);
    }, [code, on_copy]);

    const copy_text = copied && copied_label ? copied_label : copy_label;
    const copy_button = copy_label ? (
      <button
        aria-label={has_header ? undefined : copy_text}
        className={has_header ? "aster_code_block_copy" : "aster_code_block_copy aster_code_block_copy_icon"}
        data-copied={copied ? "true" : undefined}
        title={has_header ? undefined : copy_text}
        type="button"
        onClick={handle_copy}
      >
        {copied ? <CheckIcon aria-hidden="true" /> : <ClipboardDocumentIcon aria-hidden="true" />}
        {has_header && <span>{copy_text}</span>}
      </button>
    ) : null;

    const classes = [code_block_variants({ size }), className].filter(Boolean).join(" ");
    const pre_style =
      max_height === undefined
        ? undefined
        : { maxHeight: typeof max_height === "number" ? `${max_height}px` : max_height };

    return (
      <div
        className={classes}
        data-header={has_header ? "true" : undefined}
        data-wrap={wrap ? "true" : undefined}
        ref={ref}
        {...props}
      >
        {has_header && (
          <div className="aster_code_block_header">
            <span className="aster_code_block_label">{label}</span>
            <span className="aster_code_block_actions">
              {header_actions}
              {copy_button}
            </span>
          </div>
        )}
        <div className="aster_code_block_body">
          <pre
            aria-label={code_label}
            className="aster_code_block_pre"
            dir="ltr"
            role={code_label ? "region" : undefined}
            style={pre_style}
            tabIndex={0}
          >
            <code className="aster_code_block_code">
              {lines.map((line, index) => (
                <span className="aster_code_block_line" key={index}>
                  {prompt && (
                    <span aria-hidden="true" className="aster_code_block_prompt">
                      {prompt}
                    </span>
                  )}
                  <span className="aster_code_block_text">{line.length ? line : "​"}</span>
                </span>
              ))}
            </code>
          </pre>
          {!has_header && copy_button}
        </div>
      </div>
    );
  },
);

CodeBlock.displayName = "CodeBlock";

export { CodeBlock, code_block_variants };
export type { CodeBlockProps, CodeBlockVariantProps };

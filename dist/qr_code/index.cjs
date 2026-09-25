"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/qr_code/index.ts
var qr_code_exports = {};
__export(qr_code_exports, {
  RoundedQrCode: () => RoundedQrCode
});
module.exports = __toCommonJS(qr_code_exports);

// src/qr_code/rounded_qr_code.tsx
var import_react = require("react");
var import_qr_code_styling = __toESM(require("qr-code-styling"), 1);

// src/i18n/ui_strings.tsx
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var default_ui_strings = {
  close: "Close",
  cancel: "Cancel",
  confirm: "Confirm",
  loading: "Loading",
  more_info: "More info",
  copy: "Copy",
  copied: "Copied",
  retry: "Try again",
  show_password: "Show password",
  hide_password: "Hide password",
  previous_month: "Previous month",
  next_month: "Next month",
  verification_code_digit: "Digit {index} of {count}",
  qr_code: "QR code",
  learn_more: "Learn more",
  actions: "Actions",
  back: "Back",
  open_menu: "Open menu",
  search: "Search",
  download: "Download"
};
var UI_STRINGS_CONTEXT_KEY = /* @__PURE__ */ Symbol.for("aster_ui.ui_strings_context");
function resolve_ui_strings_context() {
  const registry = globalThis;
  const existing = registry[UI_STRINGS_CONTEXT_KEY];
  if (existing) return existing;
  const created = React.createContext(default_ui_strings);
  registry[UI_STRINGS_CONTEXT_KEY] = created;
  return created;
}
var UiStringsContext = resolve_ui_strings_context();
function use_ui_strings() {
  return React.useContext(UiStringsContext);
}

// src/qr_code/rounded_qr_code.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var QR_MODULE_COLOR = "#0f172a";
var QR_SURFACE_COLOR = "#ffffff";
var QR_QUIET_ZONE = 6;
var QR_LOGO_TIMEOUT_MS = 4e3;
var QR_FRAME_GAP_CAP_MS = 200;
function build_qr_options(value, size, quiet_zone, logo_src) {
  return {
    width: size,
    height: size,
    type: "svg",
    data: value,
    image: logo_src ?? "",
    margin: quiet_zone,
    qrOptions: {
      errorCorrectionLevel: "H"
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 1,
      imageSize: 0.52,
      hideBackgroundDots: true
    },
    dotsOptions: {
      type: "dots",
      color: QR_MODULE_COLOR
    },
    cornersSquareOptions: {
      type: "extra-rounded",
      color: QR_MODULE_COLOR
    },
    cornersDotOptions: {
      type: "dot",
      color: QR_MODULE_COLOR
    },
    backgroundOptions: {
      color: QR_SURFACE_COLOR
    }
  };
}
function has_drawn_content(container) {
  const svg = container?.querySelector("svg");
  if (!svg) return false;
  return Array.from(svg.children).some(
    (child) => child.tagName.toLowerCase() !== "defs"
  );
}
function round_logo_corners(container, clip_id) {
  const svg = container?.querySelector("svg");
  const image = svg?.querySelector("image");
  if (!svg || !image) return false;
  const x = image.getAttribute("x") ?? "0";
  const y = image.getAttribute("y") ?? "0";
  const width = parseFloat(image.getAttribute("width") ?? "0");
  const height = parseFloat(image.getAttribute("height") ?? "0");
  if (!(width > 0) || !(height > 0)) return false;
  const radius = Math.min(width, height) * 0.28;
  let defs = svg.querySelector("defs");
  if (!defs) {
    defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svg.insertBefore(defs, svg.firstChild);
  }
  let clip_path = defs.querySelector(`#${clip_id}`);
  if (!clip_path) {
    clip_path = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "clipPath"
    );
    clip_path.setAttribute("id", clip_id);
    defs.appendChild(clip_path);
  }
  clip_path.innerHTML = "";
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", String(width));
  rect.setAttribute("height", String(height));
  rect.setAttribute("rx", String(radius));
  rect.setAttribute("ry", String(radius));
  clip_path.appendChild(rect);
  image.setAttribute("clip-path", `url(#${clip_id})`);
  return true;
}
function RoundedQrCode({
  value,
  size = 240,
  logo_src,
  aria_label,
  quiet_zone = QR_QUIET_ZONE
}) {
  const strings = use_ui_strings();
  const container_ref = (0, import_react.useRef)(null);
  const qr_ref = (0, import_react.useRef)(null);
  const [is_ready, set_is_ready] = (0, import_react.useState)(false);
  const instance_id = (0, import_react.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
  const clip_id = `rounded_qr_logo_clip_${instance_id}`;
  (0, import_react.useEffect)(() => {
    const container = container_ref.current;
    if (!container) return;
    set_is_ready(false);
    if (!qr_ref.current) {
      qr_ref.current = new import_qr_code_styling.default(
        build_qr_options(value, size, quiet_zone, logo_src)
      );
      qr_ref.current.append(container);
    } else {
      qr_ref.current.update(
        build_qr_options(value, size, quiet_zone, logo_src)
      );
    }
    let observer = null;
    let frame = 0;
    let visible_ms = 0;
    let last_timestamp = 0;
    let is_stopped = false;
    let is_logo_dropped = false;
    const stop_watching = () => {
      is_stopped = true;
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    };
    const settle = () => {
      if (!has_drawn_content(container)) return false;
      set_is_ready(true);
      if (!logo_src || is_logo_dropped) return true;
      return round_logo_corners(container, clip_id);
    };
    if (settle()) return;
    observer = new MutationObserver(() => {
      if (is_stopped) return;
      if (settle()) stop_watching();
    });
    observer.observe(container, { childList: true, subtree: true });
    const poll = (timestamp) => {
      frame = 0;
      if (is_stopped) return;
      if (last_timestamp > 0) {
        visible_ms += Math.min(timestamp - last_timestamp, QR_FRAME_GAP_CAP_MS);
      }
      last_timestamp = timestamp;
      if (settle()) {
        stop_watching();
        return;
      }
      if (visible_ms >= QR_LOGO_TIMEOUT_MS) {
        if (!logo_src || is_logo_dropped) return;
        is_logo_dropped = true;
        visible_ms = 0;
        qr_ref.current?.update(build_qr_options(value, size, quiet_zone));
      }
      frame = requestAnimationFrame(poll);
    };
    frame = requestAnimationFrame(poll);
    return stop_watching;
  }, [value, logo_src, size, quiet_zone, clip_id]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      "aria-label": aria_label ?? strings.qr_code,
      className: "relative rounded-2xl overflow-hidden",
      role: "img",
      style: { width: size, height: size, backgroundColor: QR_SURFACE_COLOR },
      children: [
        !is_ready && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "absolute inset-0 rounded-2xl [background:var(--bg-tertiary)] animate-pulse" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            ref: container_ref,
            className: "[&>svg]:block",
            style: { width: size, height: size }
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RoundedQrCode
});

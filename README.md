<img width="200" alt="aster_horizontalv2" src="https://github.com/user-attachments/assets/a337e975-996d-4672-a92b-b809591f389a" />

# Aster UI

Aster UI is the React component library that [Aster Mail](https://github.com/Aster-Privacy/Aster-Mail) and the rest of the Aster apps are built from. It is the same code that runs in production rather than a reduced version of it, so every component you see in an Aster app is available to you here.

The library is free and open source under AGPL v3, and you can install it from npm and use it in any React project. For the complete documentation, including live examples of every component, see [astermail.org/ui/docs](https://astermail.org/ui/docs).

## What's included

The package exports around 170 components across 50 modules, covering buttons, badges, cards, banners, avatars, modals, tooltips, selects, toggles, accordions, navbars, sidebars, toasts, skeletons, dropdown menus, alert dialogs, mobile drawers, action sheets, and the settings and authentication shells that the apps share. Every component is fully typed, and the package ships both ESM and CommonJS builds with co-located type definitions.

Styling uses plain CSS classes, so the library doesn't require Tailwind or a runtime CSS-in-JS library. Components that depend on focus management and keyboard navigation are built on [Radix UI](https://www.radix-ui.com) primitives, and animation uses [Framer Motion](https://www.framer.com/motion/).

## Install

```bash
npm install @aster/ui
```

React 18 or later, React DOM, and Framer Motion 11 or later are peer dependencies, so install them alongside the package if your project doesn't already have them.

```tsx
import { Button, Card, CardTitle } from "@aster/ui";
import "@aster/ui/styles";

export function Example() {
  return (
    <Card>
      <CardTitle>Encrypted</CardTitle>
      <Button variant="primary">Continue</Button>
    </Card>
  );
}
```

The stylesheet is a separate import so that you can load it once at the root of your application.

A second entry point at `@aster/ui/crypto` contains the family vault and Shamir recovery primitives. That entry point depends on [OpenPGP.js](https://openpgpjs.org) 6 or later, which is an optional peer dependency that you only need to install if you import from it.

## Theming

Colors come from CSS custom properties, so you can restyle the entire library without modifying component code. Define them on `:root`, or on any container if you want to scope them to part of your application:

```css
:root {
  --accent-color: #3b82f6;
  --accent-color-hover: #2563eb;
  --accent-color-foreground: #fff;
}
```

To enable dark mode, add a `dark` class to a parent element, which is usually `<html>`. The stylesheet handles everything from there, so there is no theme prop to pass and no provider to wrap your application in.

```html
<html class="dark">
```

The [theming documentation](https://astermail.org/ui/docs/theming) covers the rest of the tokens you can override.

## Build from source

You need [Node.js](https://nodejs.org) 20 or later. The build doesn't require an account, an API key, or a `.env` file.

```bash
git clone https://github.com/Aster-Privacy/aster-ui.git
cd aster-ui
npm install
npm run build
```

The output is written to `dist/`. If you're working on the library itself, run `npm run dev` instead and tsup rebuilds the package whenever you save.

When you build Aster Mail or one of the other Aster apps from source, clone this repository next to it and build it first. Those apps link to the library from disk during development, so installing them fails if it isn't there.

## Community

Join our [Discord](https://discord.gg/R4XqRUfgWZ) to give honest feedback, ask any questions, and contribute to the privacy community. You can also find us on [Twitter/X](https://twitter.com/asterprivacy) and [Reddit](https://www.reddit.com/r/AsterPrivacy).

If you have questions or security disclosures, email us at [hello@astermail.org](mailto:hello@astermail.org) or [security@astermail.org](mailto:security@astermail.org). **Do not open a public issue for security vulnerabilities.**

## Contributing

We welcome contributions of all kinds. Read [CONTRIBUTING.md](https://github.com/Aster-Privacy/.github/blob/main/CONTRIBUTING.md) before opening a pull request.

By contributing to any Aster repository, you agree that your contributions are licensed under [AGPL v3](https://www.gnu.org/licenses/agpl-3.0.en.html).

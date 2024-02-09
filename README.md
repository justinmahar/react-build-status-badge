<h2 align="center">
  🚥 React Build Status Badge
</h2>
<h3 align="center">
  React build status badge component for any CI/CD service.<br/>Shows real-time status and supports Markdown for easy setup.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-build-status-badge" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-build-status-badge.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-build-status-badge/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>
</p>
<!-- [lock:donate-badges] 🚫--------------------------------------- -->
<p align="center">
  <a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>
<!-- [/lock:donate-badges] ---------------------------------------🚫 -->

## Documentation

Read the **[official documentation](https://justinmahar.github.io/react-build-status-badge/)**.

<a href="https://justinmahar.github.io/react-build-status-badge/?path=/story/components-buildstatusbadge--docs#using-markdown-image-link"><img src="https://justinmahar.github.io/react-build-status-badge/demo.gif" /></a>

👁️ **[Live Demo](https://justinmahar.github.io/react-build-status-badge/?path=/story/components-buildstatusbadge--docs#using-markdown-image-link)**

## Overview

[BuildStatusBadge](https://justinmahar.github.io/react-build-status-badge/?path=/story/components-buildstatusbadge--docs) is a React component that allows you to put a real-time build status badge on your site.

The badge automatically updates as the status changes—no clearing the cache or refreshing the page required.

Just paste in your status badge Markdown and you're ready to go. Additional options are available.

### Features include:

- **📜 Supports Markdown links. Just paste and go.**
  - Use the Markdown link from your CI/CD service for dead simple setup.
- **🔄 Automatic reloading for real-time status**
  - Badge reloads automatically so the status stays current. No page refresh required.
- **🐣 New badge every time using cache-busting**
  - Uses client-side cache-busting to prevent old, cached build status badges from being shown.

<!-- [lock:donate] 🚫--------------------------------------- -->

## Donate 

If this project helped you, please consider buying me a coffee or sponsoring me. Your support is much appreciated!

<a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>

<!-- [/lock:donate] ---------------------------------------🚫 -->

## Table of Contents 

- [Documentation](#documentation)
- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Installation

```
npm i react-build-status-badge
```

## Quick Start

```jsx
import { BuildStatusBadge } from "react-build-status-badge";
```

The easiest way is to simply paste in your badge Markdown image link, like so:

```jsx
<BuildStatusBadge>
  [![Deploy
  Status](https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg)](https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ADeploy)
</BuildStatusBadge>
```

See the [BuildStatusBadge docs](https://justinmahar.github.io/react-build-status-badge/?path=/story/components-buildstatusbadge--docs) for additional methods and options.

<!-- [lock:typescript] 🚫--------------------------------------- -->

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

<!-- [/lock:typescript] ---------------------------------------🚫 -->

<!-- [lock:icon] 🚫--------------------------------------- -->

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

<!-- [/lock:icon] ---------------------------------------🚫 -->

<!-- [lock:contributing] 🚫--------------------------------------- -->

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

<!-- [/lock:contributing] --------------------------------------🚫 -->

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-build-status-badge/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-build-status-badge/stargazers): [👉⭐](https://github.com/justinmahar/react-build-status-badge/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/react-build-status-badge/?path=/docs/license--docs).
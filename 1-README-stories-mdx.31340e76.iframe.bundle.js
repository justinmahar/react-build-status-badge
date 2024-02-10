/*! For license information please see 1-README-stories-mdx.31340e76.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_build_status_badge=self.webpackChunkreact_build_status_badge||[]).push([[836],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qb:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Qb});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/core/1.README.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>_1_README_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const READMEraw_namespaceObject='<h2 align="center">\n  🚥 React Build Status Badge\n</h2>\n<h3 align="center">\n  React build status badge component for any CI/CD service.<br/>Shows real-time status and supports Markdown for easy setup.\n</h3>\n<p align="center">\n  <a href="https://badge.fury.io/js/react-build-status-badge" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-build-status-badge.svg" alt="npm Version" /></a>&nbsp;\n  <a href="https://github.com/justinmahar/react-build-status-badge/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;\n  <a href="https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>\n</p>\n\x3c!-- [lock:donate-badges] 🚫--------------------------------------- --\x3e\r\n<p align="center">\r\n  <a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>\r\n</p>\r\n\x3c!-- [/lock:donate-badges] ---------------------------------------🚫 --\x3e\r\n\n## Documentation\n\nRead the **[official documentation](https://justinmahar.github.io/react-build-status-badge/)**.\n\n<a href="https://justinmahar.github.io/react-build-status-badge/?path=/story/components-buildstatusbadge--docs#using-markdown-image-link"><img src="https://justinmahar.github.io/react-build-status-badge/demo.gif" /></a>\n\n👁️ **[Live Demo](https://justinmahar.github.io/react-build-status-badge/?path=/story/components-buildstatusbadge--docs#using-markdown-image-link)**\n\n## Overview\n\n[BuildStatusBadge](https://justinmahar.github.io/react-build-status-badge/?path=/story/components-buildstatusbadge--docs) is a React component that allows you to put a real-time build status badge on your site.\n\nThe badge automatically updates as the status changes—no clearing the cache or refreshing the page required.\n\nJust paste in your status badge Markdown and you\'re ready to go. Additional options are available.\n\n### Features include:\n\n- **📜 Supports Markdown links. Just paste and go.**\n  - Use the Markdown link from your CI/CD service for dead simple setup.\n- **🔄 Automatic reloading for real-time status**\n  - Badge reloads automatically so the status stays current. No page refresh required.\n- **🐣 New badge every time using cache-busting**\n  - Uses client-side cache-busting to prevent old, cached build status badges from being shown.\n\n\x3c!-- [lock:donate] 🚫--------------------------------------- --\x3e\r\n\r\n## Donate \r\n\r\nIf this project helped you, please consider buying me a coffee or sponsoring me. Your support is much appreciated!\r\n\r\n<a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>\r\n\r\n\x3c!-- [/lock:donate] ---------------------------------------🚫 --\x3e\r\n\n## Table of Contents \n\n- [Documentation](#documentation)\n- [Overview](#overview)\n  - [Features include:](#features-include)\n- [Donate](#donate)\n- [Table of Contents](#table-of-contents)\n- [Installation](#installation)\n- [Quick Start](#quick-start)\n- [TypeScript](#typescript)\n- [Icon Attribution](#icon-attribution)\n- [Contributing](#contributing)\n- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)\n- [License](#license)\n\n## Installation\n\n```\nnpm i react-build-status-badge\n```\n\n## Quick Start\n\n```jsx\nimport { BuildStatusBadge } from "react-build-status-badge";\n```\n\nThe easiest way is to simply paste in your badge Markdown image link, like so:\n\n```jsx\n<BuildStatusBadge>\n  [![Deploy\n  Status](https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg)](https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ADeploy)\n</BuildStatusBadge>\n```\n\nSee the [BuildStatusBadge docs](https://justinmahar.github.io/react-build-status-badge/?path=/story/components-buildstatusbadge--docs) for additional methods and options.\n\n\x3c!-- [lock:typescript] 🚫--------------------------------------- --\x3e\r\n\r\n## TypeScript\r\n\r\nType definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.\r\n\r\n\x3c!-- [/lock:typescript] ---------------------------------------🚫 --\x3e\r\n\n\x3c!-- [lock:icon] 🚫--------------------------------------- --\x3e\r\n\r\n## Icon Attribution\r\n\r\nFavicon by [Twemoji](https://github.com/twitter/twemoji).\r\n\r\n\x3c!-- [/lock:icon] ---------------------------------------🚫 --\x3e\r\n\n\x3c!-- [lock:contributing] 🚫--------------------------------------- --\x3e\r\n\r\n## Contributing\r\n\r\nOpen source software is awesome and so are you. 😎\r\n\r\nFeel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.\r\n\r\nFor major changes, open an issue first to discuss what you\'d like to change.\r\n\r\n\x3c!-- [/lock:contributing] --------------------------------------🚫 --\x3e\n\n## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-build-status-badge/stargazers)\n\nIf you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-build-status-badge/stargazers): [👉⭐](https://github.com/justinmahar/react-build-status-badge/stargazers)\n\n## License\n\nSee [LICENSE.md](https://justinmahar.github.io/react-build-status-badge/?path=/docs/license--docs).';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{title:"Home"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.Ih,{children:READMEraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Home",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const _1_README_stories=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
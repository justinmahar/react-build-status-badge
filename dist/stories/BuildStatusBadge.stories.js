"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsingPropsStory = exports.MarkdownLinkStory = exports.MarkdownImageStory = void 0;
/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
const react_1 = __importDefault(require("react"));
const BuildStatusBadge_1 = require("../components/BuildStatusBadge");
exports.default = {
    title: 'Stories/BuildStatusBadge',
    component: BuildStatusBadge_1.BuildStatusBadge,
};
// The named exports define the stories
const MarkdownImageStory = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(BuildStatusBadge_1.BuildStatusBadge, null, "![Tests](https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg)"),
    react_1.default.createElement("p", null, "Updates every 5 seconds (default)."),
    react_1.default.createElement("pre", null, `<BuildStatusBadge>
  ![Tests](https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg)
</BuildStatusBadge>
`)));
exports.MarkdownImageStory = MarkdownImageStory;
exports.MarkdownImageStory.story = {
    name: 'Using Markdown Image (No Link)',
};
const MarkdownLinkStory = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(BuildStatusBadge_1.BuildStatusBadge, { interval: 3000 }, "[![Tests](https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg)](https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ATests)"),
    react_1.default.createElement("p", null, "Updates every 3 seconds."),
    react_1.default.createElement("pre", null, `<BuildStatusBadge interval={3000}>
  [![Tests](https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg)](https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ATests)
</BuildStatusBadge>
`)));
exports.MarkdownLinkStory = MarkdownLinkStory;
exports.MarkdownLinkStory.story = {
    name: 'Using Markdown Link',
};
const UsingPropsStory = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(BuildStatusBadge_1.BuildStatusBadge, { href: "https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ATests", src: "https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg", alt: "Deploy" }),
    react_1.default.createElement("p", null, "Updates every 5 seconds (default)."),
    react_1.default.createElement("pre", null, `<BuildStatusBadge
  href="https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ATests"
  src="https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg"
  alt="Deploy"
/>
`)));
exports.UsingPropsStory = UsingPropsStory;
exports.UsingPropsStory.story = {
    name: 'Using Props',
};

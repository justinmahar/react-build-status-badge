import React from "react";
import { BuildStatusBadge } from "../components/BuildStatusBadge";

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
export default {
  title: "BuildStatusBadge",
  component: BuildStatusBadge,
};

// The named exports define the stories
export const MarkdownImageStory = () => (
  <>
    <BuildStatusBadge>
      ![Tests](https://github.com/justinmahar/react-build-status-badge/workflows/Tests/badge.svg)
    </BuildStatusBadge>
    <p>Updates every 5 seconds (default).</p>
    <pre>{`<BuildStatusBadge>
  ![Tests](https://github.com/justinmahar/react-build-status-badge/workflows/Tests/badge.svg)
</BuildStatusBadge>
`}</pre>
  </>
);
MarkdownImageStory.story = {
  name: "Using Markdown Image (No Link)",
};

export const MarkdownLinkStory = () => (
  <>
    <BuildStatusBadge interval={3000}>
      [![Tests](https://github.com/justinmahar/react-build-status-badge/workflows/Tests/badge.svg)](https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ATests)
    </BuildStatusBadge>
    <p>Updates every 3 seconds.</p>
    <pre>{`<BuildStatusBadge interval={3000}>
  [![Tests](https://github.com/justinmahar/react-build-status-badge/workflows/Tests/badge.svg)](https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ATests)
</BuildStatusBadge>
`}</pre>
  </>
);
MarkdownLinkStory.story = {
  name: "Using Markdown Link",
};

export const UsingPropsStory = () => (
  <>
    <BuildStatusBadge
      href="https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ATests"
      src="https://github.com/justinmahar/react-build-status-badge/workflows/Tests/badge.svg"
      alt="Tests"
    />
    <p>Updates every 5 seconds (default).</p>
    <pre>{`<BuildStatusBadge
  href="https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ATests"
  src="https://github.com/justinmahar/react-build-status-badge/workflows/Tests/badge.svg"
  alt="Tests"
/>
`}</pre>
  </>
);
UsingPropsStory.story = {
  name: "Using Props",
};

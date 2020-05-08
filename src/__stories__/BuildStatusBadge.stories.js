import React from 'react';
import { BuildStatusBadge } from '../components/BuildStatusBadge';

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
export default {
  title: 'BuildStatusBadge',
  component: BuildStatusBadge,
};

// The named exports define the stories
export const MarkdownImageStory = () => (
  <>
    <BuildStatusBadge>
      ![Node.js CI](https://github.com/devboldly/react-build-status-badge/workflows/Tests/badge.svg)
    </BuildStatusBadge>
    <p>Updates every 5 seconds (default).</p>
    <pre>{`<BuildStatusBadge>
  ![Node.js CI](https://github.com/devboldly/react-build-status-badge/workflows/Tests/badge.svg)
</BuildStatusBadge>
`}</pre>
  </>
);
MarkdownImageStory.story = {
  name: 'Using Markdown Image (No Link)',
};

export const MarkdownLinkStory = () => (
  <>
    <BuildStatusBadge interval={3000}>
      [![Netlify
      Status](https://api.netlify.com/api/v1/badges/44e95c68-aa57-4b31-96f3-22877af7a73b/deploy-status)](https://app.netlify.com/sites/react-build-status-badge/deploys)
    </BuildStatusBadge>
    <p>Updates every 3 seconds.</p>
    <pre>{`<BuildStatusBadge interval={3000}>
  [![Netlify Status](https://api.netlify.com/api/v1/badges/44e95c68-aa57-4b31-96f3-22877af7a73b/deploy-status)](https://app.netlify.com/sites/react-build-status-badge/deploys)
</BuildStatusBadge>
`}</pre>
  </>
);
MarkdownLinkStory.story = {
  name: 'Using Markdown Link',
};

export const UsingPropsStory = () => (
  <>
    <BuildStatusBadge
      href="https://github.com/devboldly/react-build-status-badge/actions"
      src="https://github.com/devboldly/react-build-status-badge/workflows/Node.js%20CI/badge.svg"
      alt="Build Status"
    />
    <p>Updates every 5 seconds (default).</p>
    <pre>{`<BuildStatusBadge
  href="https://github.com/devboldly/react-build-status-badge/actions"
  src="https://github.com/devboldly/react-build-status-badge/workflows/Node.js%20CI/badge.svg"
  alt="Build Status"
/>
`}</pre>
  </>
);
UsingPropsStory.story = {
  name: 'Using Props',
};

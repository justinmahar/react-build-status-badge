/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BuildStatusBadge } from '../components/BuildStatusBadge';

export default {
  title: 'Stories/BuildStatusBadge',
  component: BuildStatusBadge,
} as ComponentMeta<typeof BuildStatusBadge>;

// The named exports define the stories
export const MarkdownImageStory = () => (
  <>
    <BuildStatusBadge>
      ![Tests](https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg)
    </BuildStatusBadge>
    <p>Updates every 5 seconds (default).</p>
    <pre>{`<BuildStatusBadge>
  ![Tests](https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg)
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
      [![Tests](https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg)](https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ATests)
    </BuildStatusBadge>
    <p>Updates every 3 seconds.</p>
    <pre>{`<BuildStatusBadge interval={3000}>
  [![Tests](https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg)](https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ATests)
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
      href="https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ATests"
      src="https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg"
      alt="Deploy"
    />
    <p>Updates every 5 seconds (default).</p>
    <pre>{`<BuildStatusBadge
  href="https://github.com/justinmahar/react-build-status-badge/actions?query=workflow%3ATests"
  src="https://github.com/justinmahar/react-build-status-badge/workflows/Deploy/badge.svg"
  alt="Deploy"
/>
`}</pre>
  </>
);
UsingPropsStory.story = {
  name: 'Using Props',
};

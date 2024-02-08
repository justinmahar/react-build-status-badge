import type { Meta, StoryObj } from '@storybook/react';
import { BuildStatusBadge } from '../components/BuildStatusBadge';
import React from 'react';

// === Setup ===
const StoryComponent = BuildStatusBadge; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/BuildStatusBadge', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const MarkdownImageStory: Story = {
  name: 'Using Markdown Image (No Link)',
  render: () => (
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
  ),
};

export const MarkdownLinkStory: Story = {
  name: 'Using Markdown Link',
  render: () => (
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
  ),
};

export const UsingPropsStory: Story = {
  name: 'Using Props',
  render: () => (
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
  ),
};

import * as React from 'react';
export interface BuildStatusBadgeProps {
    /** The link for the badge. Will be overridden if a Markdown link is provided in `children`. */
    href?: string;
    /** The source for the badge image. Will be overridden if a Markdown image is provided in `children`. */
    src?: string;
    /** Alt text for the badge image. Will be overridden if a Markdown alt is provided in `children`. */
    alt?: string;
    /** Provide a single Markdown string of either an image link, or just an image, to have the `href`, `src`, and `alt` props configured automatically. */
    children?: React.ReactNode;
    /** The number of milliseconds between reloads. Default is `5000`. */
    interval?: number;
    /** Set to true to disable automatic reloading and cache-busting. Default is `false`. */
    reloadDisabled?: boolean;
    /** Set to true to disable rendering a link. Default is `false`. */
    linkDisabled?: boolean;
    /** Set to true to open the link in a new window. The link will use the `target="_blank"` and `rel="noopener noreferrer"` attributes. Default is `false`. */
    openInNewWindow?: boolean;
}
/**
 * See the documentation: [BuildStatusBadge](https://justinmahar.github.io/react-build-status-badge/)
 *
 * A BuildStatusBadge is a React component that allows you to include a real-time build status badge on your site.
 *
 * Just paste in your status badge Markdown and you're ready to go.
 *
 * It features automatic reloading (every 5 seconds by default) and uses query param cache busting to prevent client-side caching. This means your badge automatically updates on the page in real-time as the status changes—no clearing the cache or refreshing the page required.
 *
 * See the props section for more options.
 */
export declare function BuildStatusBadge(props: BuildStatusBadgeProps): JSX.Element;
export declare namespace BuildStatusBadge {
    var defaultProps: {
        interval: number;
        reloadDisabled: boolean;
        linkDisabled: boolean;
        openInNewWindow: boolean;
    };
}

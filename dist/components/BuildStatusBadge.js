"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildStatusBadge = void 0;
const React = __importStar(require("react"));
const react_timed_image_1 = require("react-timed-image");
/**
 * See the documentation: [BuildStatusBadge](https://justinmahar.github.io/react-build-status-badge/)
 *
 * A BuildStatusBadge is a React component that allows you to include a real-time build status badge on your site.
 *
 * Just paste in your status badge Markdown and you're ready to go.
 *
 * It features automatic reloading (every 5 seconds by default) and uses query param cache busting to prevent client-side caching. This means your badge automatically updates on the page in real-time as the status changes—no clearing the cache or refreshing the page required.
 *
 * See the [props section](https://justinmahar.github.io/react-build-status-badge/?path=/story/components-buildstatusbadge--page#props) for more options.
 */
function BuildStatusBadge(props) {
    let href = props.href;
    let src = props.src;
    let alt = props.alt;
    if (typeof props.children === 'string') {
        // Regex matches on: [![alt](src)](href)
        // It looks more complicated that it is, because there's so much [] and () escaping needed.
        // Groups are named by putting ?<name> immediately after the opening paren.
        const imageLinkRegex = /\[!\[(?<alt>[^\]]*)\]\((?<src>[^)]+)\)\]\((?<href>[^)]+)\)/;
        const match = props.children.match(imageLinkRegex);
        if (match) {
            const groups = match.groups;
            if (groups) {
                href = groups.href;
                src = groups.src;
                alt = groups.alt;
            }
        }
        else {
            // Regex matches on: ![alt](src)
            // (Just an image with no link)
            const imageRegex = /!\[(?<alt>[^\]]*)\]\((?<src>[^)]+)\)/;
            const match = props.children.match(imageRegex);
            if (match) {
                const groups = match.groups;
                if (groups) {
                    src = groups.src;
                    alt = groups.alt;
                }
            }
        }
    }
    const useLink = !props.linkDisabled && typeof href !== 'undefined';
    const imageElement = !props.reloadDisabled ? (React.createElement(react_timed_image_1.TimedImage, { interval: typeof props.interval === 'number' && props.interval > 0 ? Math.abs(props.interval) : 5000, src: src, alt: alt })) : (React.createElement("img", { src: src, alt: alt }));
    if (useLink) {
        const newWindowProps = props.openInNewWindow ? { target: '_blank', rel: 'noopener noreferrer' } : {};
        return (React.createElement("a", Object.assign({ href: href }, newWindowProps), imageElement));
    }
    else {
        return imageElement;
    }
}
exports.BuildStatusBadge = BuildStatusBadge;
BuildStatusBadge.defaultProps = {
    interval: 5000,
    reloadDisabled: false,
    linkDisabled: false,
    openInNewWindow: false,
};

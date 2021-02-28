"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildStatusBadge = void 0;
var React = __importStar(require("react"));
var react_timed_image_1 = require("react-timed-image");
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
function BuildStatusBadge(props) {
    var href = props.href;
    var src = props.src;
    var alt = props.alt;
    if (typeof props.children === 'string') {
        // Regex matches on: [![alt](src)](href)
        // It looks more complicated that it is, because there's so much [] and () escaping needed.
        // Groups are named by putting ?<name> immediately after the opening paren.
        var imageLinkRegex = /\[!\[(?<alt>[^\]]*)\]\((?<src>[^)]+)\)\]\((?<href>[^)]+)\)/;
        var match = props.children.match(imageLinkRegex);
        if (match) {
            var groups = match.groups;
            if (groups) {
                href = groups.href;
                src = groups.src;
                alt = groups.alt;
            }
        }
        else {
            // Regex matches on: ![alt](src)
            // (Just an image with no link)
            var imageRegex = /!\[(?<alt>[^\]]*)\]\((?<src>[^)]+)\)/;
            var match_1 = props.children.match(imageRegex);
            if (match_1) {
                var groups = match_1.groups;
                if (groups) {
                    src = groups.src;
                    alt = groups.alt;
                }
            }
        }
    }
    var useLink = !props.linkDisabled && typeof href !== 'undefined';
    var imageElement = !props.reloadDisabled ? (React.createElement(react_timed_image_1.TimedImage, { interval: typeof props.interval === 'number' && props.interval > 0 ? Math.abs(props.interval) : 5000, src: src, alt: alt })) : (React.createElement("img", { src: src, alt: alt }));
    if (useLink) {
        var newWindowProps = props.openInNewWindow ? { target: '_blank', rel: 'noopener noreferrer' } : {};
        return (React.createElement("a", __assign({ href: href }, newWindowProps), imageElement));
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

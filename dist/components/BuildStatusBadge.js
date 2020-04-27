"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_timed_image_1 = require("@devboldly/react-timed-image");
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
    var useLink = (typeof props.useLink === 'undefined' || (typeof props.useLink !== 'undefined' && props.useLink)) &&
        typeof href !== 'undefined';
    console.log('useLink:', useLink);
    var imageElement = typeof props.timed === 'undefined' || props.timed ? (React.createElement(react_timed_image_1.TimedImage, { interval: props.interval, src: src, alt: alt })) : (React.createElement("img", { src: src, alt: alt }));
    if (useLink) {
        return React.createElement("a", { href: href }, imageElement);
    }
    else {
        return imageElement;
    }
}
exports.BuildStatusBadge = BuildStatusBadge;

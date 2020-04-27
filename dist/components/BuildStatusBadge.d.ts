import * as React from 'react';
export interface NetlifyDeployStatusBadgeProps {
    href?: string;
    src?: string;
    alt?: string;
    timed?: boolean;
    interval?: number;
    children?: React.ReactNode;
    useLink?: boolean;
}
export declare function BuildStatusBadge(props: NetlifyDeployStatusBadgeProps): JSX.Element;

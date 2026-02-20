import React from 'react';
import type { IconVariant, IconAppearance } from "./types";

export interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number;
    variant?: IconVariant;
    appearance?: IconAppearance;
    className?: string;
}

export const IconBase = ({
    size = 24,
    variant = "default",
    appearance = "outlined",
    className = '',
    children,
    ...props
}: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        {children}
    </svg>
);
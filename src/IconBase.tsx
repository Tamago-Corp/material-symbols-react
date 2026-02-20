import React from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number;
    variant?: 'default' | 'filled';
    appearance?: 'outlined' | 'rounded';
    className?: string;
}

export const IconBase = ({
    size = 24,
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
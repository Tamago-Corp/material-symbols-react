import * as React from "react";
import type { IconVariant } from "./types";

export type IconProps = React.SVGProps<SVGSVGElement> & {
    size?: number;
    variant?: IconVariant;
};

type IconBaseProps = IconProps & {
    paths: Record<IconVariant, React.ReactNode>;
    viewBox: string;
};

export const IconBase = ({
    size = 24,
    variant = "outlined",
    paths,
    viewBox,
    ...props
}: IconBaseProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox={viewBox}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {paths[variant]}
        </svg>
    );
};

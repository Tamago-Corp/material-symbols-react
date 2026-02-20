import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const GlassCup = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M279-80q-31 0-53.5-20T200-151l-80-729h720l-80 729q-3 31-25.5 51T681-80H279Zm-16-240h435l52-480H210l53 480Z" : "M279-80q-31 0-53.5-20T200-151l-80-729h720l-80 729q-3 31-25.5 51T681-80H279Zm-8-160 9 80h400l9-80H271Zm-8-80h435l52-480H210l53 480Zm8 160h418-418Z")
    : (variant === 'filled' ? "M279-80q-31 0-53.5-20T200-151l-69-630q-5-40 22-69.5t67-29.5h520q40 0 67 29.5t22 69.5l-69 630q-3 31-25.5 51T681-80H279Zm-16-240h435l52-480H210l53 480Z" : "M279-80q-31 0-53.5-20T200-151l-70-640q-4-35 19.5-62t59.5-27h542q36 0 59.5 27t19.5 62l-70 640q-3 31-25.5 51T681-80H279Zm-8-160 9 80h400l9-80H271Zm-8-80h435l52-480H210l53 480Zm8 160h418-418Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
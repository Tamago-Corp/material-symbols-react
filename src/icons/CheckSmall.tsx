import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const CheckSmall = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z" : "M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z")
    : (variant === 'filled' ? "m400-416 236-236q11-11 28-11t28 11q11 11 11 28t-11 28L428-332q-12 12-28 12t-28-12L268-436q-11-11-11-28t11-28q11-11 28-11t28 11l76 76Z" : "m400-416 236-236q11-11 28-11t28 11q11 11 11 28t-11 28L428-332q-12 12-28 12t-28-12L268-436q-11-11-11-28t11-28q11-11 28-11t28 11l76 76Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ExpandMore = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" : "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z")
    : (variant === 'filled' ? "M480-362q-8 0-15-2.5t-13-8.5L268-557q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-373q-6 6-13 8.5t-15 2.5Z" : "M480-362q-8 0-15-2.5t-13-8.5L268-557q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-373q-6 6-13 8.5t-15 2.5Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
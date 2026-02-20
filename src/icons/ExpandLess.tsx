import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ExpandLess = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" : "m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z")
    : (variant === 'filled' ? "M480-529 324-373q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-529Z" : "M480-529 324-373q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-529Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
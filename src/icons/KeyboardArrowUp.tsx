import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const KeyboardArrowUp = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" : "M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z")
    : (variant === 'filled' ? "M480-528 324-372q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q12-12 28-12t28 12l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-528Z" : "M480-528 324-372q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q12-12 28-12t28 12l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-528Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
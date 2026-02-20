import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ArrowUpwardAlt = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z" : "M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z")
    : (variant === 'filled' ? "M440-608 324-492q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q12-12 28-12t28 12l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L520-608v328q0 17-11.5 28.5T480-240q-17 0-28.5-11.5T440-280v-328Z" : "M440-608 324-492q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q12-12 28-12t28 12l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L520-608v328q0 17-11.5 28.5T480-240q-17 0-28.5-11.5T440-280v-328Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
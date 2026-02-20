import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const KeyboardArrowRight = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" : "M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z")
    : (variant === 'filled' ? "M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" : "M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
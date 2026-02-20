import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const TurnLeft = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M600-160v-360H272l64 64-56 56-160-160 160-160 56 56-64 64h328q33 0 56.5 23.5T680-520v360h-80Z" : "M600-160v-360H272l64 64-56 56-160-160 160-160 56 56-64 64h328q33 0 56.5 23.5T680-520v360h-80Z")
    : (variant === 'filled' ? "m272-520 36 36q11 11 11 28t-11 28q-11 11-28 11t-28-11L148-532q-12-12-12-28t12-28l104-104q11-11 28-11t28 11q11 11 11 28t-11 28l-36 36h328q33 0 56.5 23.5T680-520v320q0 17-11.5 28.5T640-160q-17 0-28.5-11.5T600-200v-320H272Z" : "m272-520 36 36q11 11 11 28t-11 28q-11 11-28 11t-28-11L148-532q-12-12-12-28t12-28l104-104q11-11 28-11t28 11q11 11 11 28t-11 28l-36 36h328q33 0 56.5 23.5T680-520v320q0 17-11.5 28.5T640-160q-17 0-28.5-11.5T600-200v-320H272Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
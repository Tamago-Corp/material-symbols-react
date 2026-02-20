import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const PlayPause = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M200-312v-336l240 168-240 168Zm320-8v-320h80v320h-80Zm160 0v-320h80v320h-80Z" : "M200-312v-336l240 168-240 168Zm320-8v-320h80v320h-80Zm160 0v-320h80v320h-80Z")
    : (variant === 'filled' ? "M200-312v-336l240 168-240 168Zm320-8v-320h80v320h-80Zm160 0v-320h80v320h-80Z" : "M200-312v-336l240 168-240 168Zm320-8v-320h80v320h-80Zm160 0v-320h80v320h-80Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
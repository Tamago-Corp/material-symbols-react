import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const AlignJustifyCenter = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M440-80v-800h80v800h-80Zm160-200v-400h120v400H600Zm-360 0v-400h120v400H240Z" : "M440-80v-800h80v800h-80Zm160-200v-400h120v400H600Zm-360 0v-400h120v400H240Z")
    : (variant === 'filled' ? "M480-80q-17 0-28.5-11.5T440-120v-720q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v720q0 17-11.5 28.5T480-80Zm160-200q-17 0-28.5-11.5T600-320v-320q0-17 11.5-28.5T640-680h40q17 0 28.5 11.5T720-640v320q0 17-11.5 28.5T680-280h-40Zm-360 0q-17 0-28.5-11.5T240-320v-320q0-17 11.5-28.5T280-680h40q17 0 28.5 11.5T360-640v320q0 17-11.5 28.5T320-280h-40Z" : "M480-80q-17 0-28.5-11.5T440-120v-720q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v720q0 17-11.5 28.5T480-80Zm160-200q-17 0-28.5-11.5T600-320v-320q0-17 11.5-28.5T640-680h40q17 0 28.5 11.5T720-640v320q0 17-11.5 28.5T680-280h-40Zm-360 0q-17 0-28.5-11.5T240-320v-320q0-17 11.5-28.5T280-680h40q17 0 28.5 11.5T360-640v320q0 17-11.5 28.5T320-280h-40Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
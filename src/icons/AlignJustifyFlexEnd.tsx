import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const AlignJustifyFlexEnd = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M800-80v-800h80v800h-80ZM560-280v-400h120v400H560Zm-240 0v-400h120v400H320Z" : "M800-80v-800h80v800h-80ZM560-280v-400h120v400H560Zm-240 0v-400h120v400H320Z")
    : (variant === 'filled' ? "M840-80q-17 0-28.5-11.5T800-120v-720q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80ZM600-280q-17 0-28.5-11.5T560-320v-320q0-17 11.5-28.5T600-680h40q17 0 28.5 11.5T680-640v320q0 17-11.5 28.5T640-280h-40Zm-240 0q-17 0-28.5-11.5T320-320v-320q0-17 11.5-28.5T360-680h40q17 0 28.5 11.5T440-640v320q0 17-11.5 28.5T400-280h-40Z" : "M840-80q-17 0-28.5-11.5T800-120v-720q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80ZM600-280q-17 0-28.5-11.5T560-320v-320q0-17 11.5-28.5T600-680h40q17 0 28.5 11.5T680-640v320q0 17-11.5 28.5T640-280h-40Zm-240 0q-17 0-28.5-11.5T320-320v-320q0-17 11.5-28.5T360-680h40q17 0 28.5 11.5T440-640v320q0 17-11.5 28.5T400-280h-40Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ArrowMenuClose = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M440-280v-400L240-480l200 200Zm80 160h80v-720h-80v720Z" : "M440-280v-400L240-480l200 200Zm80 160h80v-720h-80v720Z")
    : (variant === 'filled' ? "M406-314 268-452q-12-12-12-28t12-28l138-138q10-10 22-5t12 19v304q0 14-12 19t-22-5Zm114 154v-640q0-17 11.5-28.5T560-840q17 0 28.5 11.5T600-800v640q0 17-11.5 28.5T560-120q-17 0-28.5-11.5T520-160Z" : "M406-314 268-452q-12-12-12-28t12-28l138-138q10-10 22-5t12 19v304q0 14-12 19t-22-5Zm114 154v-640q0-17 11.5-28.5T560-840q17 0 28.5 11.5T600-800v640q0 17-11.5 28.5T560-120q-17 0-28.5-11.5T520-160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
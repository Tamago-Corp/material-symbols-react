import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const MoreDown = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M200-200v-440h80v360h360v80H200Zm200-200v-440h80v360h360v80H400Z" : "M200-200v-440h80v360h360v80H200Zm200-200v-440h80v360h360v80H400Z")
    : (variant === 'filled' ? "M280-280h320q17 0 28.5 11.5T640-240q0 17-11.5 28.5T600-200H240q-17 0-28.5-11.5T200-240v-360q0-17 11.5-28.5T240-640q17 0 28.5 11.5T280-600v320Zm200-200h320q17 0 28.5 11.5T840-440q0 17-11.5 28.5T800-400H440q-17 0-28.5-11.5T400-440v-360q0-17 11.5-28.5T440-840q17 0 28.5 11.5T480-800v320Z" : "M280-280h320q17 0 28.5 11.5T640-240q0 17-11.5 28.5T600-200H240q-17 0-28.5-11.5T200-240v-360q0-17 11.5-28.5T240-640q17 0 28.5 11.5T280-600v320Zm200-200h320q17 0 28.5 11.5T840-440q0 17-11.5 28.5T800-400H440q-17 0-28.5-11.5T400-440v-360q0-17 11.5-28.5T440-840q17 0 28.5 11.5T480-800v320Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
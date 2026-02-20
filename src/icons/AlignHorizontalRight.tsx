import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const AlignHorizontalRight = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M800-80v-800h80v800h-80ZM320-280v-120h400v120H320ZM80-560v-120h640v120H80Z" : "M800-80v-800h80v800h-80ZM320-280v-120h400v120H320ZM80-560v-120h640v120H80Z")
    : (variant === 'filled' ? "M840-80q-17 0-28.5-11.5T800-120v-720q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80ZM380-280q-25 0-42.5-17.5T320-340q0-25 17.5-42.5T380-400h280q25 0 42.5 17.5T720-340q0 25-17.5 42.5T660-280H380ZM140-560q-25 0-42.5-17.5T80-620q0-25 17.5-42.5T140-680h520q25 0 42.5 17.5T720-620q0 25-17.5 42.5T660-560H140Z" : "M840-80q-17 0-28.5-11.5T800-120v-720q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80ZM380-280q-25 0-42.5-17.5T320-340q0-25 17.5-42.5T380-400h280q25 0 42.5 17.5T720-340q0 25-17.5 42.5T660-280H380ZM140-560q-25 0-42.5-17.5T80-620q0-25 17.5-42.5T140-680h520q25 0 42.5 17.5T720-620q0 25-17.5 42.5T660-560H140Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
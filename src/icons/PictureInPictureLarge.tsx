import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const PictureInPictureLarge = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M80-160v-80h720v-560h80v560q0 33-23.5 56.5T800-160H80Zm160-160v-400h480v400H240Z" : "M80-160v-80h720v-560h80v560q0 33-23.5 56.5T800-160H80Zm160-160v-400h480v400H240Z")
    : (variant === 'filled' ? "M280-320q-17 0-28.5-11.5T240-360v-320q0-17 11.5-28.5T280-720h400q17 0 28.5 11.5T720-680v320q0 17-11.5 28.5T680-320H280ZM120-160q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240h680v-520q0-17 11.5-28.5T840-800q17 0 28.5 11.5T880-760v520q0 33-23.5 56.5T800-160H120Z" : "M280-320q-17 0-28.5-11.5T240-360v-320q0-17 11.5-28.5T280-720h400q17 0 28.5 11.5T720-680v320q0 17-11.5 28.5T680-320H280ZM120-160q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240h680v-520q0-17 11.5-28.5T840-800q17 0 28.5 11.5T880-760v520q0 33-23.5 56.5T800-160H120Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
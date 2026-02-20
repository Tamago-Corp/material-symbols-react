import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const AlignJustifySpaceBetween = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M800-80v-200H680v-400h120v-200h80v800h-80ZM80-80v-800h80v200h120v400H160v200H80Z" : "M800-80v-200H680v-400h120v-200h80v800h-80ZM80-80v-800h80v200h120v400H160v200H80Z")
    : (variant === 'filled' ? "M840-80q-17 0-28.5-11.5T800-120v-160h-80q-17 0-28.5-11.5T680-320v-320q0-17 11.5-28.5T720-680h80v-160q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80Zm-720 0q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v160h80q17 0 28.5 11.5T280-640v320q0 17-11.5 28.5T240-280h-80v160q0 17-11.5 28.5T120-80Z" : "M840-80q-17 0-28.5-11.5T800-120v-160h-80q-17 0-28.5-11.5T680-320v-320q0-17 11.5-28.5T720-680h80v-160q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80Zm-720 0q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v160h80q17 0 28.5 11.5T280-640v320q0 17-11.5 28.5T240-280h-80v160q0 17-11.5 28.5T120-80Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
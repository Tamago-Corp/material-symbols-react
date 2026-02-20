import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const HorizontalDistribute = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M80-80v-800h80v800H80Zm340-200v-400h120v400H420ZM800-80v-800h80v800h-80Z" : "M80-80v-800h80v800H80Zm340-200v-400h120v400H420ZM800-80v-800h80v800h-80Z")
    : (variant === 'filled' ? "M120-80q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v720q0 17-11.5 28.5T120-80Zm360-200q-25 0-42.5-17.5T420-340v-280q0-25 17.5-42.5T480-680q25 0 42.5 17.5T540-620v280q0 25-17.5 42.5T480-280ZM840-80q-17 0-28.5-11.5T800-120v-720q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80Z" : "M120-80q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v720q0 17-11.5 28.5T120-80Zm360-200q-25 0-42.5-17.5T420-340v-280q0-25 17.5-42.5T480-680q25 0 42.5 17.5T540-620v280q0 25-17.5 42.5T480-280ZM840-80q-17 0-28.5-11.5T800-120v-720q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
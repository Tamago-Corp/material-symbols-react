import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const AlignSelfStretch = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M80-800v-80h800v80H80Zm0 720v-80h800v80H80Zm340-180v-460h120v460H420Z" : "M80-800v-80h800v80H80Zm0 720v-80h800v80H80Zm340-180v-460h120v460H420Z")
    : (variant === 'filled' ? "M120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h720q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm340-180q-17 0-28.5-11.5T420-300v-380q0-17 11.5-28.5T460-720h40q17 0 28.5 11.5T540-680v380q0 17-11.5 28.5T500-260h-40ZM120-800q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H120Z" : "M120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h720q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm340-180q-17 0-28.5-11.5T420-300v-380q0-17 11.5-28.5T460-720h40q17 0 28.5 11.5T540-680v380q0 17-11.5 28.5T500-260h-40ZM120-800q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H120Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
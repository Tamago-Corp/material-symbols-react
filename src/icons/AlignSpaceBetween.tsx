import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const AlignSpaceBetween = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M280-680v-120H80v-80h800v80H680v120H280ZM80-80v-80h200v-120h400v120h200v80H80Z" : "M280-680v-120H80v-80h800v80H680v120H280ZM80-80v-80h200v-120h400v120h200v80H80Z")
    : (variant === 'filled' ? "M120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h160v-80q0-17 11.5-28.5T320-280h320q17 0 28.5 11.5T680-240v80h160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm200-600q-17 0-28.5-11.5T280-720v-80H120q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H680v80q0 17-11.5 28.5T640-680H320Z" : "M120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h160v-80q0-17 11.5-28.5T320-280h320q17 0 28.5 11.5T680-240v80h160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm200-600q-17 0-28.5-11.5T280-720v-80H120q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H680v80q0 17-11.5 28.5T640-680H320Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
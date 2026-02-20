import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const VerticalShadesClosed = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M80-120v-80h80v-640h640v640h80v80H80Zm160-80h60v-560h-60v560Zm140 0h60v-560h-60v560Zm140 0h60v-560h-60v560Zm140 0h60v-560h-60v560Z" : "M80-120v-80h80v-640h640v640h80v80H80Zm160-80h60v-560h-60v560Zm140 0h60v-560h-60v560Zm140 0h60v-560h-60v560Zm140 0h60v-560h-60v560Z")
    : (variant === 'filled' ? "M120-120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h40v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v560h40q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120Zm120-80h60v-560h-60v560Zm140 0h60v-560h-60v560Zm140 0h60v-560h-60v560Zm140 0h60v-560h-60v560Z" : "M120-120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h40v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v560h40q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120Zm120-80h60v-560h-60v560Zm140 0h60v-560h-60v560Zm140 0h60v-560h-60v560Zm140 0h60v-560h-60v560Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
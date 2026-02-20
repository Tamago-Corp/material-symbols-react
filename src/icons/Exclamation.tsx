import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Exclamation = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M440-400v-360h80v360h-80Zm0 200v-80h80v80h-80Z" : "M440-400v-360h80v360h-80Zm0 200v-80h80v80h-80Z")
    : (variant === 'filled' ? "M480-400q-17 0-28.5-11.5T440-440v-280q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v280q0 17-11.5 28.5T480-400Zm0 200q-17 0-28.5-11.5T440-240q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240q0 17-11.5 28.5T480-200Z" : "M480-400q-17 0-28.5-11.5T440-440v-280q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v280q0 17-11.5 28.5T480-400Zm0 200q-17 0-28.5-11.5T440-240q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240q0 17-11.5 28.5T480-200Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
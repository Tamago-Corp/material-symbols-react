import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ViewStream = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M120-200v-240h720v240H120Zm0-320v-240h720v240H120Z" : "M760-280v-160H200v160h560Zm0-240v-160H200v160h560ZM200-200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h560q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H200Z")
    : (variant === 'filled' ? "M200-200q-33 0-56.5-23.5T120-280v-80q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360v80q0 33-23.5 56.5T760-200H200Zm0-320q-33 0-56.5-23.5T120-600v-80q0-33 23.5-56.5T200-760h560q33 0 56.5 23.5T840-680v80q0 33-23.5 56.5T760-520H200Z" : "M760-280v-160H200v160h560Zm0-240v-160H200v160h560ZM200-200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h560q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H200Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const SignalCellular3Bar = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m80-80 800-800v800H80Zm520-80h200v-526L600-486v326Z" : "m80-80 800-800v800H80Zm520-80h200v-526L600-486v326Z")
    : (variant === 'filled' ? "M177-80q-18 0-29.5-12T136-120q0-8 3-15t9-13l664-664q6-6 13-9t15-3q16 0 28 11.5t12 29.5v643q0 25-17.5 42.5T820-80H177Zm423-80h200v-526L600-486v326Z" : "M177-80q-18 0-29.5-12T136-120q0-8 3-15t9-13l664-664q6-6 13-9t15-3q16 0 28 11.5t12 29.5v643q0 25-17.5 42.5T820-80H177Zm423-80h200v-526L600-486v326Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
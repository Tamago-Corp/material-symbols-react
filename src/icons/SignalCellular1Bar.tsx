import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const SignalCellular1Bar = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m80-80 800-800v800H80Zm320-80h400v-526L400-286v126Z" : "m80-80 800-800v800H80Zm320-80h400v-526L400-286v126Z")
    : (variant === 'filled' ? "M177-80q-18 0-29.5-12T136-120q0-8 3-15t9-13l664-664q6-6 13-9t15-3q16 0 28 11.5t12 29.5v643q0 25-17.5 42.5T820-80H177Zm223-80h400v-526L400-286v126Z" : "M177-80q-18 0-29.5-12T136-120q0-8 3-15t9-13l664-664q6-6 13-9t15-3q16 0 28 11.5t12 29.5v643q0 25-17.5 42.5T820-80H177Zm223-80h400v-526L400-286v126Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
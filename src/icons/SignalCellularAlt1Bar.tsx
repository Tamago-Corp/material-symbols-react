import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const SignalCellularAlt1Bar = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M200-160v-240h120v240H200Z" : "M200-160v-240h120v240H200Z")
    : (variant === 'filled' ? "M260-160q-25 0-42.5-17.5T200-220v-120q0-25 17.5-42.5T260-400q25 0 42.5 17.5T320-340v120q0 25-17.5 42.5T260-160Z" : "M260-160q-25 0-42.5-17.5T200-220v-120q0-25 17.5-42.5T260-400q25 0 42.5 17.5T320-340v120q0 25-17.5 42.5T260-160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
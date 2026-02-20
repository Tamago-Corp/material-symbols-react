import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const SignalCellularAlt = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M200-160v-240h120v240H200Zm240 0v-440h120v440H440Zm240 0v-640h120v640H680Z" : "M200-160v-240h120v240H200Zm240 0v-440h120v440H440Zm240 0v-640h120v640H680Z")
    : (variant === 'filled' ? "M260-160q-25 0-42.5-17.5T200-220v-120q0-25 17.5-42.5T260-400q25 0 42.5 17.5T320-340v120q0 25-17.5 42.5T260-160Zm240 0q-25 0-42.5-17.5T440-220v-320q0-25 17.5-42.5T500-600q25 0 42.5 17.5T560-540v320q0 25-17.5 42.5T500-160Zm240 0q-25 0-42.5-17.5T680-220v-520q0-25 17.5-42.5T740-800q25 0 42.5 17.5T800-740v520q0 25-17.5 42.5T740-160Z" : "M260-160q-25 0-42.5-17.5T200-220v-120q0-25 17.5-42.5T260-400q25 0 42.5 17.5T320-340v120q0 25-17.5 42.5T260-160Zm240 0q-25 0-42.5-17.5T440-220v-320q0-25 17.5-42.5T500-600q25 0 42.5 17.5T560-540v320q0 25-17.5 42.5T500-160Zm240 0q-25 0-42.5-17.5T680-220v-520q0-25 17.5-42.5T740-800q25 0 42.5 17.5T800-740v520q0 25-17.5 42.5T740-160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
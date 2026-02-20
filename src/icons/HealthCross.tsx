import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const HealthCross = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M320-120v-200H120v-320h200v-200h320v200h200v320H640v200H320Z" : "M320-120v-200H120v-320h200v-200h320v200h200v320H640v200H320Zm80-80h160v-200h200v-160H560v-200H400v200H200v160h200v200Zm80-280Z")
    : (variant === 'filled' ? "M360-120q-17 0-28.5-11.5T320-160v-160H160q-17 0-28.5-11.5T120-360v-240q0-17 11.5-28.5T160-640h160v-160q0-17 11.5-28.5T360-840h240q17 0 28.5 11.5T640-800v160h160q17 0 28.5 11.5T840-600v240q0 17-11.5 28.5T800-320H640v160q0 17-11.5 28.5T600-120H360Z" : "M360-120q-17 0-28.5-11.5T320-160v-160H160q-17 0-28.5-11.5T120-360v-240q0-17 11.5-28.5T160-640h160v-160q0-17 11.5-28.5T360-840h240q17 0 28.5 11.5T640-800v160h160q17 0 28.5 11.5T840-600v240q0 17-11.5 28.5T800-320H640v160q0 17-11.5 28.5T600-120H360Zm40-80h160v-200h200v-160H560v-200H400v200H200v160h200v200Zm80-280Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
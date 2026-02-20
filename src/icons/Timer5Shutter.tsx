import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Timer5Shutter = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M320-200v-120h240v-100H320v-340h360v120H440v100h160q33 0 56.5 23.5T680-460v140q0 50-35 85t-85 35H320Z" : "M320-200v-120h240v-100H320v-340h360v120H440v100h120q50 0 85 35t35 85v100q0 50-35 85t-85 35H320Z")
    : (variant === 'filled' ? "M560-200H380q-25 0-42.5-17.5T320-260q0-25 17.5-42.5T380-320h180v-100H380q-25 0-42.5-17.5T320-480v-220q0-25 17.5-42.5T380-760h240q25 0 42.5 17.5T680-700q0 25-17.5 42.5T620-640H440v100h160q33 0 56.5 23.5T680-460v140q0 50-35 85t-85 35Z" : "M560-200H380q-25 0-42.5-17.5T320-260q0-25 17.5-42.5T380-320h180v-100H380q-25 0-42.5-17.5T320-480v-220q0-25 17.5-42.5T380-760h240q25 0 42.5 17.5T680-700q0 25-17.5 42.5T620-640H440v100h120q50 0 85 35t35 85v100q0 50-35 85t-85 35Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
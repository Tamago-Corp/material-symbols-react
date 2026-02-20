import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const HMobiledata = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M280-280v-400h80v160h240v-160h80v400h-80v-160H360v160h-80Z" : "M280-280v-400h80v160h240v-160h80v400h-80v-160H360v160h-80Z")
    : (variant === 'filled' ? "M360-440v120q0 17-11.5 28.5T320-280q-17 0-28.5-11.5T280-320v-320q0-17 11.5-28.5T320-680q17 0 28.5 11.5T360-640v120h240v-120q0-17 11.5-28.5T640-680q17 0 28.5 11.5T680-640v320q0 17-11.5 28.5T640-280q-17 0-28.5-11.5T600-320v-120H360Z" : "M360-440v120q0 17-11.5 28.5T320-280q-17 0-28.5-11.5T280-320v-320q0-17 11.5-28.5T320-680q17 0 28.5 11.5T360-640v120h240v-120q0-17 11.5-28.5T640-680q17 0 28.5 11.5T680-640v320q0 17-11.5 28.5T640-280q-17 0-28.5-11.5T600-320v-120H360Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
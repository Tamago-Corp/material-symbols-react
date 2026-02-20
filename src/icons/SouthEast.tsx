import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const SouthEast = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M360-200v-80h264L160-744l56-56 464 464v-264h80v400H360Z" : "M360-200v-80h264L160-744l56-56 464 464v-264h80v400H360Z")
    : (variant === 'filled' ? "M624-280 188-716q-11-11-11-28t11-28q11-11 28-11t28 11l436 436v-224q0-17 11.5-28.5T720-600q17 0 28.5 11.5T760-560v320q0 17-11.5 28.5T720-200H400q-17 0-28.5-11.5T360-240q0-17 11.5-28.5T400-280h224Z" : "M624-280 188-716q-11-11-11-28t11-28q11-11 28-11t28 11l436 436v-224q0-17 11.5-28.5T720-600q17 0 28.5 11.5T760-560v320q0 17-11.5 28.5T720-200H400q-17 0-28.5-11.5T360-240q0-17 11.5-28.5T400-280h224Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
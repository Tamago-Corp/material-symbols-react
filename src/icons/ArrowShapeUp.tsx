import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ArrowShapeUp = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M320-120v-240H120l360-440 360 440H640v240H320Z" : "M320-120v-240H120l360-440 360 440H640v240H320Zm80-80h160v-240h111L480-674 289-440h111v240Zm80-240Z")
    : (variant === 'filled' ? "M320-160v-200H183q-19 0-27-17t4-32l289-353q12-15 31-15t31 15l289 353q12 15 4 32t-27 17H640v200q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160Z" : "M320-160v-200H183q-19 0-27-17t4-32l289-353q12-15 31-15t31 15l289 353q12 15 4 32t-27 17H640v200q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160Zm80-40h160v-200q0-17 11.5-28.5T600-440h71L480-674 289-440h71q17 0 28.5 11.5T400-400v200Zm80-240Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
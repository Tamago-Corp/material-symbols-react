import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Shift = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M320-120v-320H120l360-440 360 440H640v320H320Z" : "M320-120v-320H120l360-440 360 440H640v320H320Zm80-80h160v-320h111L480-754 289-520h111v320Zm80-320Z")
    : (variant === 'filled' ? "M320-160v-280H204q-26 0-36.5-22.5T173-505l276-337q12-15 31-15t31 15l276 337q16 20 5.5 42.5T756-440H640v280q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160Z" : "M320-160v-280H204q-26 0-36.5-22.5T173-505l276-337q12-15 31-15t31 15l276 337q16 20 5.5 42.5T756-440H640v280q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160Zm80-40h160v-320h111L480-754 289-520h111v320Zm80-320Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
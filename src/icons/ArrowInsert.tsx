import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ArrowInsert = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M704-240 320-624v344h-80v-480h480v80H376l384 384-56 56Z" : "M704-240 320-624v344h-80v-480h480v80H376l384 384-56 56Z")
    : (variant === 'filled' ? "M320-624v304q0 17-11.5 28.5T280-280q-17 0-28.5-11.5T240-320v-400q0-17 11.5-28.5T280-760h400q17 0 28.5 11.5T720-720q0 17-11.5 28.5T680-680H376l356 356q11 11 11 28t-11 28q-11 11-28 11t-28-11L320-624Z" : "M320-624v304q0 17-11.5 28.5T280-280q-17 0-28.5-11.5T240-320v-400q0-17 11.5-28.5T280-760h400q17 0 28.5 11.5T720-720q0 17-11.5 28.5T680-680H376l356 356q11 11 11 28t-11 28q-11 11-28 11t-28-11L320-624Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ArrowOutward = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" : "m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z")
    : (variant === 'filled' ? "M640-624 284-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l356-356H280q-17 0-28.5-11.5T240-720q0-17 11.5-28.5T280-760h400q17 0 28.5 11.5T720-720v400q0 17-11.5 28.5T680-280q-17 0-28.5-11.5T640-320v-304Z" : "M640-624 284-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l356-356H280q-17 0-28.5-11.5T240-720q0-17 11.5-28.5T280-760h400q17 0 28.5 11.5T720-720v400q0 17-11.5 28.5T680-280q-17 0-28.5-11.5T640-320v-304Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
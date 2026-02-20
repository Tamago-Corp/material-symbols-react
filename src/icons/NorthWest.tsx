import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const NorthWest = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M744-160 280-624v264h-80v-400h400v80H336l464 464-56 56Z" : "M744-160 280-624v264h-80v-400h400v80H336l464 464-56 56Z")
    : (variant === 'filled' ? "M280-624v224q0 17-11.5 28.5T240-360q-17 0-28.5-11.5T200-400v-320q0-17 11.5-28.5T240-760h320q17 0 28.5 11.5T600-720q0 17-11.5 28.5T560-680H336l436 436q11 11 11 28t-11 28q-11 11-28 11t-28-11L280-624Z" : "M280-624v224q0 17-11.5 28.5T240-360q-17 0-28.5-11.5T200-400v-320q0-17 11.5-28.5T240-760h320q17 0 28.5 11.5T600-720q0 17-11.5 28.5T560-680H336l436 436q11 11 11 28t-11 28q-11 11-28 11t-28-11L280-624Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
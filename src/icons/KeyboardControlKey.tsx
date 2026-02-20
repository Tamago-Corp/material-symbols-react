import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const KeyboardControlKey = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m256-424-56-56 280-280 280 280-56 56-224-223-224 223Z" : "m256-424-56-56 280-280 280 280-56 56-224-223-224 223Z")
    : (variant === 'filled' ? "M480-647 284-452q-11 11-27.5 11.5T228-452q-11-11-11-28t11-28l224-224q12-12 28-12t28 12l224 224q11 11 11.5 27.5T732-452q-11 11-28 11t-28-11L480-647Z" : "M480-647 284-452q-11 11-27.5 11.5T228-452q-11-11-11-28t11-28l224-224q12-12 28-12t28 12l224 224q11 11 11.5 27.5T732-452q-11 11-28 11t-28-11L480-647Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
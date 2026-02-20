import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const KeyboardOptionKey = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M591-200 314-680H120v-80h240l277 480h203v80H591Zm9-480v-80h240v80H600Z" : "M591-200 314-680H120v-80h240l277 480h203v80H591Zm9-480v-80h240v80H600Z")
    : (variant === 'filled' ? "M637-200q-22 0-40-10.5T568-240L314-680H160q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h154q22 0 40 10.5t29 29.5l254 440h163q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H637Zm3-480q-17 0-28.5-11.5T600-720q0-17 11.5-28.5T640-760h160q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H640Z" : "M637-200q-22 0-40-10.5T568-240L314-680H160q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h154q22 0 40 10.5t29 29.5l254 440h163q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H637Zm3-480q-17 0-28.5-11.5T600-720q0-17 11.5-28.5T640-760h160q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H640Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
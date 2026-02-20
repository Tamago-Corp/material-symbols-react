import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Sliders = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M200-360q-50 0-85-35t-35-85q0-50 35-85t85-35h560q50 0 85 35t35 85q0 50-35 85t-85 35H200Zm360-80h200q17 0 28.5-11.5T800-480q0-17-11.5-28.5T760-520H560v80Z" : "M200-360q-50 0-85-35t-35-85q0-50 35-85t85-35h560q50 0 85 35t35 85q0 50-35 85t-85 35H200Zm360-80h200q17 0 28.5-11.5T800-480q0-17-11.5-28.5T760-520H560v80Z")
    : (variant === 'filled' ? "M200-360q-50 0-85-35t-35-85q0-50 35-85t85-35h560q50 0 85 35t35 85q0 50-35 85t-85 35H200Zm360-80h200q17 0 28.5-11.5T800-480q0-17-11.5-28.5T760-520H560v80Z" : "M200-360q-50 0-85-35t-35-85q0-50 35-85t85-35h560q50 0 85 35t35 85q0 50-35 85t-85 35H200Zm360-80h200q17 0 28.5-11.5T800-480q0-17-11.5-28.5T760-520H560v80Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
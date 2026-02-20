import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const LineEndDiamond = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M600-200 360-440H80v-80h280l240-240 280 280-280 280Z" : "m600-313 167-167-167-167-167 167 167 167Zm0 113L360-440H80v-80h280l240-240 280 280-280 280Zm0-280Z")
    : (variant === 'filled' ? "M572-228 360-440H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h240l212-212q12-12 28-12t28 12l224 224q12 12 12 28t-12 28L628-228q-12 12-28 12t-28-12Z" : "m600-313 167-167-167-167-167 167 167 167Zm-28 85L360-440H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h240l212-212q12-12 28-12t28 12l224 224q12 12 12 28t-12 28L628-228q-12 12-28 12t-28-12Zm28-252Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const LineStartDiamond = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M360-200 80-480l280-280 240 240h280v80H600L360-200Z" : "m360-313 167-167-167-167-167 167 167 167Zm0 113L80-480l280-280 240 240h280v80H600L360-200Zm0-280Z")
    : (variant === 'filled' ? "M332-228 108-452q-12-12-12-28t12-28l224-224q12-12 28-12t28 12l212 212h240q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H600L388-228q-12 12-28 12t-28-12Z" : "m360-313 167-167-167-167-167 167 167 167Zm-28 85L108-452q-12-12-12-28t12-28l224-224q12-12 28-12t28 12l212 212h240q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H600L388-228q-12 12-28 12t-28-12Zm28-252Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
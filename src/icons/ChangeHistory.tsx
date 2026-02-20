import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ChangeHistory = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m80-160 400-640 400 640H80Z" : "m80-160 400-640 400 640H80Zm144-80h512L480-650 224-240Zm256-205Z")
    : (variant === 'filled' ? "M152-160q-23 0-35-20.5t1-40.5l328-525q12-19 34-19t34 19l328 525q13 20 1 40.5T808-160H152Z" : "M152-160q-23 0-35-20.5t1-40.5l328-525q12-19 34-19t34 19l328 525q13 20 1 40.5T808-160H152Zm72-80h512L480-650 224-240Zm256-205Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
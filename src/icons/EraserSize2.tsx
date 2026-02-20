import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const EraserSize2 = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M310-190q-50 0-85-35t-35-85q0-23 9-45.5t26-39.5l340-340q17-17 39.5-26t45.5-9q50 0 85 35t35 85q0 23-9 45.5T735-565L395-225q-17 17-39.5 26t-45.5 9Z" : "M310-190q-50 0-85-35t-35-85q0-23 9-45.5t26-39.5l340-340q17-17 39.5-26t45.5-9q50 0 85 35t35 85q0 23-9 45.5T735-565L395-225q-17 17-39.5 26t-45.5 9Z")
    : (variant === 'filled' ? "M310-190q-50 0-85-35t-35-85q0-23 9-45.5t26-39.5l340-340q17-17 39.5-26t45.5-9q50 0 85 35t35 85q0 23-9 45.5T735-565L395-225q-17 17-39.5 26t-45.5 9Z" : "M310-190q-50 0-85-35t-35-85q0-23 9-45.5t26-39.5l340-340q17-17 39.5-26t45.5-9q50 0 85 35t35 85q0 23-9 45.5T735-565L395-225q-17 17-39.5 26t-45.5 9Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
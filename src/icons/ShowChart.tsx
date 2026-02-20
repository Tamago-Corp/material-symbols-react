import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ShowChart = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m140-220-60-60 300-300 160 160 284-320 56 56-340 384-160-160-240 240Z" : "m140-220-60-60 300-300 160 160 284-320 56 56-340 384-160-160-240 240Z")
    : (variant === 'filled' ? "M110-250q-13-13-13-30t13-30l213-213q23-23 57-23t57 23l103 103 256-289q11-13 28.5-13t29.5 12q11 11 11.5 26.5T855-656L596-364q-23 26-57 27.5T480-360L380-460 170-250q-13 13-30 13t-30-13Z" : "M110-250q-13-13-13-30t13-30l213-213q23-23 57-23t57 23l103 103 256-289q11-13 28.5-13t29.5 12q11 11 11.5 26.5T855-656L596-364q-23 26-57 27.5T480-360L380-460 170-250q-13 13-30 13t-30-13Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
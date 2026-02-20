import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const TrendingFlat = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" : "m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z")
    : (variant === 'filled' ? "M727-440H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h567l-55-56q-12-12-11.5-28t12.5-28q12-11 28.5-11.5T729-632l123 124q12 12 12 28t-12 28L728-328q-11 11-27.5 11T672-328q-12-12-12-28.5t12-28.5l55-55Z" : "M727-440H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h567l-55-56q-12-12-11.5-28t12.5-28q12-11 28.5-11.5T729-632l123 124q12 12 12 28t-12 28L728-328q-11 11-27.5 11T672-328q-12-12-12-28.5t12-28.5l55-55Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
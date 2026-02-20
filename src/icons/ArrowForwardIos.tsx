import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ArrowForwardIos = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" : "m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z")
    : (variant === 'filled' ? "M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z" : "M579-480 285-774q-15-15-14.5-35.5T286-845q15-15 35.5-15t35.5 15l307 308q12 12 18 27t6 30q0 15-6 30t-18 27L356-115q-15 15-35 14.5T286-116q-15-15-15-35.5t15-35.5l293-293Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
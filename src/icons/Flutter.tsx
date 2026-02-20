import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Flutter = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M236-345 100-480l440-440h271L236-345ZM540-40 303-277l237-237h271L574-277 811-40H540Z" : "M236-345 100-480l440-440h271L236-345ZM540-40 303-277l237-237h271L574-277 811-40H540Z")
    : (variant === 'filled' ? "M236-345 100-480l440-440h271L236-345ZM540-40 303-277l237-237h271L574-277 811-40H540Z" : "M236-345 100-480l440-440h271L236-345ZM540-40 303-277l237-237h271L574-277 811-40H540Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Variables = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M120-280v-400h720v400H120Z" : "M120-280v-400h720v400H120Zm80-80h560v-240H200v240Zm0 0v-240 240Z")
    : (variant === 'filled' ? "M120-320v-320q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640v320q0 17-11.5 28.5T800-280H160q-17 0-28.5-11.5T120-320Z" : "M120-320v-320q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640v320q0 17-11.5 28.5T800-280H160q-17 0-28.5-11.5T120-320Zm80-40h560v-240H200v240Zm0 0v-240 240Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
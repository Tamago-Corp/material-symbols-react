import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const HorizontalSplit = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M120-200v-240h720v240H120Zm0-320v-80h720v80H120Zm0-160v-80h720v80H120Z" : "M120-200v-240h720v240H120Zm0-320v-80h720v80H120Zm0-160v-80h720v80H120Z")
    : (variant === 'filled' ? "M160-200q-17 0-28.5-11.5T120-240v-160q0-17 11.5-28.5T160-440h640q17 0 28.5 11.5T840-400v160q0 17-11.5 28.5T800-200H160Zm0-320q-17 0-28.5-11.5T120-560q0-17 11.5-28.5T160-600h640q17 0 28.5 11.5T840-560q0 17-11.5 28.5T800-520H160Zm0-160q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h640q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H160Z" : "M160-200q-17 0-28.5-11.5T120-240v-160q0-17 11.5-28.5T160-440h640q17 0 28.5 11.5T840-400v160q0 17-11.5 28.5T800-200H160Zm0-320q-17 0-28.5-11.5T120-560q0-17 11.5-28.5T160-600h640q17 0 28.5 11.5T840-560q0 17-11.5 28.5T800-520H160Zm0-160q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h640q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
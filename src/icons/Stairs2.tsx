import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Stairs2 = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M80-200v-80h240v-240h240v-240h320v80H640v240H400v240H80Z" : "M80-200v-80h240v-240h240v-240h320v80H640v240H400v240H80Z")
    : (variant === 'filled' ? "M120-200q-17 0-28.5-11.5T80-240q0-17 11.5-28.5T120-280h200v-200q0-17 11.5-28.5T360-520h200v-200q0-17 11.5-28.5T600-760h240q17 0 28.5 11.5T880-720q0 17-11.5 28.5T840-680H640v200q0 17-11.5 28.5T600-440H400v200q0 17-11.5 28.5T360-200H120Z" : "M120-200q-17 0-28.5-11.5T80-240q0-17 11.5-28.5T120-280h200v-200q0-17 11.5-28.5T360-520h200v-200q0-17 11.5-28.5T600-760h240q17 0 28.5 11.5T880-720q0 17-11.5 28.5T840-680H640v200q0 17-11.5 28.5T600-440H400v200q0 17-11.5 28.5T360-200H120Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
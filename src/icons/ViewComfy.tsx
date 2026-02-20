import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ViewComfy = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M80-520v-280h800v280H80Zm320 360v-280h480v280H400Zm-320 0v-280h240v280H80Z" : "M80-160v-640h800v640H80Zm720-360v-200H160v200h640ZM400-240h400v-200H400v200Zm-240 0h160v-200H160v200Z")
    : (variant === 'filled' ? "M120-520q-17 0-28.5-11.5T80-560v-200q0-17 11.5-28.5T120-800h720q17 0 28.5 11.5T880-760v200q0 17-11.5 28.5T840-520H120Zm320 360q-17 0-28.5-11.5T400-200v-200q0-17 11.5-28.5T440-440h400q17 0 28.5 11.5T880-400v200q0 17-11.5 28.5T840-160H440Zm-320 0q-17 0-28.5-11.5T80-200v-200q0-17 11.5-28.5T120-440h160q17 0 28.5 11.5T320-400v200q0 17-11.5 28.5T280-160H120Z" : "M80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240Zm720-280v-200H160v200h640ZM400-240h400v-200H400v200Zm-240 0h160v-200H160v200Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
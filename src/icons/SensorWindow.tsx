import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const SensorWindow = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm40-440h120v-40h160v40h120v-240H280v240Zm0 80v240h400v-240H280Zm-40-360v640h480v-640H240Z" : "M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-440h160v-40h160v40h160v-280H240v280Zm0 80v280h480v-280H240Zm0 280h480-480Z")
    : (variant === 'filled' ? "M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm40-440h120v-40h160v40h120v-240H280v240Zm0 80v240h400v-240H280Zm-40-360v640h480v-640H240Z" : "M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-440h160v-40h160v40h160v-280H240v280Zm0 80v280h480v-280H240Zm0 280h480-480Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
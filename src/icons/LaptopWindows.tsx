import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const LaptopWindows = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M0-160v-80h160v-40q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280v40h160v80H0Z" : "M0-160v-80h160v-40q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280v40h160v80H0Zm160-200h640v-400H160v400Zm0 0v-400 400Z")
    : (variant === 'filled' ? "M40-160q-17 0-28.5-11.5T0-200q0-17 11.5-28.5T40-240h120v-40q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280v40h120q17 0 28.5 11.5T960-200q0 17-11.5 28.5T920-160H40Z" : "M40-160q-17 0-28.5-11.5T0-200q0-17 11.5-28.5T40-240h120v-40q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280v40h120q17 0 28.5 11.5T960-200q0 17-11.5 28.5T920-160H40Zm120-200h640v-400H160v400Zm0 0v-400 400Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
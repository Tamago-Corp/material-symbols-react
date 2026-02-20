import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const GeneralDevice = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M320-240v-520q0-33 23.5-56.5T400-840h160q33 0 56.5 23.5T640-760v520H320Zm0 120v-80h320v80H320Z" : "M320-240v-520q0-33 23.5-56.5T400-840h160q33 0 56.5 23.5T640-760v520H320Zm80-80h160v-440H400v440Zm-80 200v-80h320v80H320Zm80-200h160-160Z")
    : (variant === 'filled' ? "M360-240q-17 0-28.5-11.5T320-280v-480q0-33 23.5-56.5T400-840h160q33 0 56.5 23.5T640-760v480q0 17-11.5 28.5T600-240H360Zm0 40h240q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200Z" : "M360-240q-17 0-28.5-11.5T320-280v-480q0-33 23.5-56.5T400-840h160q33 0 56.5 23.5T640-760v480q0 17-11.5 28.5T600-240H360Zm40-80h160v-440H400v440Zm-40 120h240q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200Zm40-120h160-160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
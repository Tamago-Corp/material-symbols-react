import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const CurrencyFranc = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M280-120v-120h-80v-80h80v-520h440v80H360v240h320v80H360v120h160v80H360v120h-80Z" : "M280-120v-120h-80v-80h80v-520h440v80H360v240h320v80H360v120h160v80H360v120h-80Z")
    : (variant === 'filled' ? "M280-160v-80h-40q-17 0-28.5-11.5T200-280q0-17 11.5-28.5T240-320h40v-480q0-17 11.5-28.5T320-840h360q17 0 28.5 11.5T720-800q0 17-11.5 28.5T680-760H360v240h280q17 0 28.5 11.5T680-480q0 17-11.5 28.5T640-440H360v120h120q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240H360v80q0 17-11.5 28.5T320-120q-17 0-28.5-11.5T280-160Z" : "M280-160v-80h-40q-17 0-28.5-11.5T200-280q0-17 11.5-28.5T240-320h40v-480q0-17 11.5-28.5T320-840h360q17 0 28.5 11.5T720-800q0 17-11.5 28.5T680-760H360v240h280q17 0 28.5 11.5T680-480q0 17-11.5 28.5T640-440H360v120h120q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240H360v80q0 17-11.5 28.5T320-120q-17 0-28.5-11.5T280-160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
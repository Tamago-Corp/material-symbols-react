import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const OnHubDevice = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M320-120v-80h320v80H320Zm0-120-40-514q-3-35 21-60.5t59-25.5h240q35 0 59 25.5t21 60.5l-40 514H320Z" : "M320-120v-80h320v80H320Zm0-120-40-514q-3-35 21-60.5t59-25.5h240q35 0 59 25.5t21 60.5l-40 514H320Zm74-80h172l34-440H360l34 440Zm0-440h-34 240-206Z")
    : (variant === 'filled' ? "M360-120q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200h240q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H360Zm-43-157-37-477q-3-35 21-60.5t59-25.5h240q35 0 59 25.5t21 60.5l-37 477q-2 16-13 26.5T603-240H357q-16 0-27-10.5T317-277Z" : "M360-120q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200h240q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H360Zm-43-157-37-477q-3-35 21-60.5t59-25.5h240q35 0 59 25.5t21 60.5l-37 477q-2 16-13 26.5T603-240H357q-16 0-27-10.5T317-277Zm77-43h172l34-440H360l34 440Zm0-440h-34 240-206Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
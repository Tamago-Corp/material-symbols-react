import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const PersonalPlaces = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M240-120v-680h390q14 0 26 6.5t20 17.5l124 176-124 176q-8 11-20 17.5t-26 6.5H320v280h-80Z" : "M240-120v-680h390q14 0 26 6.5t20 17.5l124 176-124 176q-8 11-20 17.5t-26 6.5H320v280h-80Zm80-360h300l80-120-80-120H320v240Zm0 0v-240 240Z")
    : (variant === 'filled' ? "M240-160v-560q0-33 23.5-56.5T320-800h298q20 0 37 9t28 25l85 120q14 21 14 46t-14 46l-85 120q-11 16-28 25t-37 9H320v240q0 17-11.5 28.5T280-120q-17 0-28.5-11.5T240-160Z" : "M240-160v-560q0-33 23.5-56.5T320-800h298q20 0 37 9t28 25l85 120q14 21 14 46t-14 46l-85 120q-11 16-28 25t-37 9H320v240q0 17-11.5 28.5T280-120q-17 0-28.5-11.5T240-160Zm80-320h300l80-120-80-120H320v240Zm0 0v-240 240Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
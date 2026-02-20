import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const VolumeMute = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M280-360v-240h160l200-200v640L440-360H280Z" : "M280-360v-240h160l200-200v640L440-360H280Zm80-80h114l86 86v-252l-86 86H360v80Zm100-40Z")
    : (variant === 'filled' ? "M440-360H320q-17 0-28.5-11.5T280-400v-160q0-17 11.5-28.5T320-600h120l132-132q19-19 43.5-8.5T640-703v446q0 27-24.5 37.5T572-228L440-360Z" : "M440-360H320q-17 0-28.5-11.5T280-400v-160q0-17 11.5-28.5T320-600h120l132-132q19-19 43.5-8.5T640-703v446q0 27-24.5 37.5T572-228L440-360Zm-80-80h114l86 86v-252l-86 86H360v80Zm100-40Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
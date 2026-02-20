import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const MoreUp = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M680-320v-360H320v-80h440v440h-80ZM480-120v-360H120v-80h440v440h-80Z" : "M680-320v-360H320v-80h440v440h-80ZM480-120v-360H120v-80h440v440h-80Z")
    : (variant === 'filled' ? "M680-680H360q-17 0-28.5-11.5T320-720q0-17 11.5-28.5T360-760h360q17 0 28.5 11.5T760-720v360q0 17-11.5 28.5T720-320q-17 0-28.5-11.5T680-360v-320ZM480-480H160q-17 0-28.5-11.5T120-520q0-17 11.5-28.5T160-560h360q17 0 28.5 11.5T560-520v360q0 17-11.5 28.5T520-120q-17 0-28.5-11.5T480-160v-320Z" : "M680-680H360q-17 0-28.5-11.5T320-720q0-17 11.5-28.5T360-760h360q17 0 28.5 11.5T760-720v360q0 17-11.5 28.5T720-320q-17 0-28.5-11.5T680-360v-320ZM480-480H160q-17 0-28.5-11.5T120-520q0-17 11.5-28.5T160-560h360q17 0 28.5 11.5T560-520v360q0 17-11.5 28.5T520-120q-17 0-28.5-11.5T480-160v-320Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
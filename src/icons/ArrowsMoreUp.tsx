import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ArrowsMoreUp = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M480-200v-360H120v-80h440v440h-80Zm200-200v-360H320v-80h440v440h-80Z" : "M480-200v-360H120v-80h440v440h-80Zm200-200v-360H320v-80h440v440h-80Z")
    : (variant === 'filled' ? "M520-200q-17 0-28.5-11.5T480-240v-320H160q-17 0-28.5-11.5T120-600q0-17 11.5-28.5T160-640h360q17 0 28.5 11.5T560-600v360q0 17-11.5 28.5T520-200Zm200-200q-17 0-28.5-11.5T680-440v-320H360q-17 0-28.5-11.5T320-800q0-17 11.5-28.5T360-840h360q17 0 28.5 11.5T760-800v360q0 17-11.5 28.5T720-400Z" : "M520-200q-17 0-28.5-11.5T480-240v-320H160q-17 0-28.5-11.5T120-600q0-17 11.5-28.5T160-640h360q17 0 28.5 11.5T560-600v360q0 17-11.5 28.5T520-200Zm200-200q-17 0-28.5-11.5T680-440v-320H360q-17 0-28.5-11.5T320-800q0-17 11.5-28.5T360-840h360q17 0 28.5 11.5T760-800v360q0 17-11.5 28.5T720-400Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
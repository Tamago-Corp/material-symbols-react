import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ArrowTopLeft = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M680-160v-400H313l144 144-56 57-241-241 240-240 57 57-144 143h447v480h-80Z" : "M680-160v-400H313l144 144-56 57-241-241 240-240 57 57-144 143h447v480h-80Z")
    : (variant === 'filled' ? "m313-560 116 116q12 12 11.5 28T429-388q-12 12-28 12.5T373-387L188-572q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l183-183q12-12 28.5-12t28.5 12q12 12 12 28t-12 28L313-640h367q33 0 56.5 23.5T760-560v360q0 17-11.5 28.5T720-160q-17 0-28.5-11.5T680-200v-360H313Z" : "m313-560 116 116q12 12 11.5 28T429-388q-12 12-28 12.5T373-387L188-572q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l183-183q12-12 28.5-12t28.5 12q12 12 12 28t-12 28L313-640h367q33 0 56.5 23.5T760-560v360q0 17-11.5 28.5T720-160q-17 0-28.5-11.5T680-200v-360H313Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
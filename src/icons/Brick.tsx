import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Brick = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M80-160v-480h120v-160h240v160h80v-160h240v160h120v480H80Z" : "M80-160v-480h120v-160h240v160h80v-160h240v160h120v480H80Zm80-80h640v-320H160v320Zm120-400h80v-80h-80v80Zm320 0h80v-80h-80v80ZM160-240h640-640Zm120-400h80-80Zm320 0h80-80Z")
    : (variant === 'filled' ? "M80-220v-360q0-25 17.5-42.5T140-640h60v-100q0-25 17.5-42.5T260-800h120q25 0 42.5 17.5T440-740v100h80v-100q0-25 17.5-42.5T580-800h120q25 0 42.5 17.5T760-740v100h60q25 0 42.5 17.5T880-580v360q0 25-17.5 42.5T820-160H140q-25 0-42.5-17.5T80-220Z" : "M80-220v-360q0-25 17.5-42.5T140-640h60v-100q0-25 17.5-42.5T260-800h120q25 0 42.5 17.5T440-740v100h80v-100q0-25 17.5-42.5T580-800h120q25 0 42.5 17.5T760-740v100h60q25 0 42.5 17.5T880-580v360q0 25-17.5 42.5T820-160H140q-25 0-42.5-17.5T80-220Zm80-20h640v-320H160v320Zm120-400h80v-80h-80v80Zm320 0h80v-80h-80v80ZM160-240h640-640Zm120-400h80-80Zm320 0h80-80Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
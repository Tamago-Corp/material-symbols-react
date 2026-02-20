import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Title = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M420-160v-520H200v-120h560v120H540v520H420Z" : "M420-160v-520H200v-120h560v120H540v520H420Z")
    : (variant === 'filled' ? "M420-680H260q-25 0-42.5-17.5T200-740q0-25 17.5-42.5T260-800h440q25 0 42.5 17.5T760-740q0 25-17.5 42.5T700-680H540v460q0 25-17.5 42.5T480-160q-25 0-42.5-17.5T420-220v-460Z" : "M420-680H260q-25 0-42.5-17.5T200-740q0-25 17.5-42.5T260-800h440q25 0 42.5 17.5T760-740q0 25-17.5 42.5T700-680H540v460q0 25-17.5 42.5T480-160q-25 0-42.5-17.5T420-220v-460Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
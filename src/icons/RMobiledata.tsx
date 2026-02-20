import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const RMobiledata = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M80-560v-320h200q33 0 56.5 23.5T360-800v54q0 24-14 43.5T312-672l48 112h-80l-46-106h-74v106H80Zm80-186h120v-54H160v54Z" : "M80-560v-320h200q33 0 56.5 23.5T360-800v54q0 24-14 43.5T312-672l48 112h-80l-46-106h-74v106H80Zm80-186h120v-54H160v54Z")
    : (variant === 'filled' ? "M160-666v66q0 17-11.5 28.5T120-560q-17 0-28.5-11.5T80-600v-240q0-17 11.5-28.5T120-880h160q33 0 56.5 23.5T360-800v54q0 24-14 43.5T312-672l26 61q8 18-3 34.5T304-560q-11 0-20-6t-14-16l-36-84h-74Zm0-80h120v-54H160v54Z" : "M160-666v66q0 17-11.5 28.5T120-560q-17 0-28.5-11.5T80-600v-240q0-17 11.5-28.5T120-880h160q33 0 56.5 23.5T360-800v54q0 24-14 43.5T312-672l26 61q8 18-3 34.5T304-560q-11 0-20-6t-14-16l-36-84h-74Zm0-80h120v-54H160v54Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const PrivacyScreen = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m80 560 304-304H160q-33 0-56.5 23.5T80 336v224Zm0 280 583-584H496L80 673v167Zm56 56h664q33 0 56.5-23.5T880 816V336q0-33-23.5-56.5T800 256h-24L136 896Z" : "m160 480 144-144H160v144Zm0 280 423-424H416L160 593v167Zm56 56h584V336H696L216 816Zm-56 80q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v480q0 33-23.5 56.5T800 896H160Z")
    : (variant === 'filled' ? "m80 560 304-304H160q-33 0-56.5 23.5T80 336v224Zm0 280 583-584H496L80 673v167Zm56 56h664q33 0 56.5-23.5T880 816V336q0-33-23.5-56.5T800 256h-24L136 896Z" : "m160 480 144-144H160v144Zm0 280 423-424H416L160 593v167Zm56 56h584V336H696L216 816Zm-56 80q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v480q0 33-23.5 56.5T800 896H160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
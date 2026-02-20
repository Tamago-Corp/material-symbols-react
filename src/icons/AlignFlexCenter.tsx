import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const AlignFlexCenter = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M440-80v-340H120v-120h320v-340h80v340h320v120H520v340h-80Z" : "M440-80v-340H120v-120h320v-340h80v340h320v120H520v340h-80Z")
    : (variant === 'filled' ? "M480-80q-17 0-28.5-11.5T440-120v-300H160q-17 0-28.5-11.5T120-460v-40q0-17 11.5-28.5T160-540h280v-300q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v300h280q17 0 28.5 11.5T840-500v40q0 17-11.5 28.5T800-420H520v300q0 17-11.5 28.5T480-80Z" : "M480-80q-17 0-28.5-11.5T440-120v-300H160q-17 0-28.5-11.5T120-460v-40q0-17 11.5-28.5T160-540h280v-300q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v300h280q17 0 28.5 11.5T840-500v40q0 17-11.5 28.5T800-420H520v300q0 17-11.5 28.5T480-80Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
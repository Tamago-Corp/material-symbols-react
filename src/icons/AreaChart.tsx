import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const AreaChart = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M840-320 464-614 305-395 120-540v-140l160 120 200-280 200 160h160v360ZM120-160v-280l200 160 160-220 360 281v59H120Z" : "M120-160v-520l160 120 200-280 200 160h160v520H120Zm200-120 160-220 280 218v-318H652L496-725 298-447l-98-73v144l120 96Z")
    : (variant === 'filled' ? "M840-320 529-563q-27-21-60.5-16.5T415-547l-86 118q-10 14-26.5 16.5T272-421L120-540v-60q0-25 22-36t42 4l96 72 151-211q20-28 54-33t61 17l134 107h80q33 0 56.5 23.5T840-600v280ZM120-160v-280l135 108q27 22 60.5 17t53.5-33l87-119q10-14 26.5-16.5T513-475l327 256v59H120Z" : "m546-787 134 107h80q33 0 56.5 23.5T840-600v440H120v-440q0-25 22-36t42 4l96 72 151-211q20-28 54-33t61 17ZM200-520v144l120 96 160-220 280 218v-318H652L496-725 298-447l-98-73Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
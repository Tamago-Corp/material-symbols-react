import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Tornado = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M40-840h880L804-640H156L40-840Zm162 280h556l-70 120H272l-70-120Zm116 200h324L480-80 318-360Z" : "M40-840h880L480-80 40-840Zm139 80 69 120h464l69-120H179Zm116 200 69 120h232l69-120H295Zm116 200 69 120 69-120H411Z")
    : (variant === 'filled' ? "m110-720 46 80h648l46-80q23-40 .5-80T781-840H179q-47 0-69.5 40t.5 80Zm92 160 70 120h416l70-120H202Zm116 200 93 160q23 40 69 40t69-40l93-160H318Z" : "M179-840h602q47 0 69.5 40t-.5 80L549-200q-23 40-69 40t-69-40L110-720q-23-40-.5-80t69.5-40Zm0 80 69 120h464l69-120H179Zm116 200 69 120h232l69-120H295Zm116 200 69 120 69-120H411Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
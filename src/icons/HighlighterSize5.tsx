import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const HighlighterSize5 = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M410-70 70-410q-11-11-11-28t11-28l424-424q11-11 27.5-11t28.5 12l340 339q11 11 11 28t-11 28L466-70q-11 11-28 11t-28-11Z" : "M410-70 70-410q-11-11-11-28t11-28l424-424q11-11 27.5-11t28.5 12l340 339q11 11 11 28t-11 28L466-70q-11 11-28 11t-28-11Z")
    : (variant === 'filled' ? "M410-70 70-410q-11-11-11-28t11-28l424-424q11-11 27.5-11t28.5 12l340 339q11 11 11 28t-11 28L466-70q-11 11-28 11t-28-11Z" : "M410-70 70-410q-11-11-11-28t11-28l424-424q11-11 27.5-11t28.5 12l340 339q11 11 11 28t-11 28L466-70q-11 11-28 11t-28-11Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const HighlighterSize2 = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m282-198-84-84q-12-12-12-28.5t12-28.5l423-423q12-12 28.5-12t28.5 12l84 85q11 11 11 28t-11 28L339-198q-12 12-28.5 12T282-198Z" : "m282-198-84-84q-12-12-12-28.5t12-28.5l423-423q12-12 28.5-12t28.5 12l84 85q11 11 11 28t-11 28L339-198q-12 12-28.5 12T282-198Z")
    : (variant === 'filled' ? "m282-198-84-84q-12-12-12-28.5t12-28.5l423-423q12-12 28.5-12t28.5 12l84 85q11 11 11 28t-11 28L339-198q-12 12-28.5 12T282-198Z" : "m282-198-84-84q-12-12-12-28.5t12-28.5l423-423q12-12 28.5-12t28.5 12l84 85q11 11 11 28t-11 28L339-198q-12 12-28.5 12T282-198Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
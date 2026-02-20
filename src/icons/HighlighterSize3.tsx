import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const HighlighterSize3 = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M310-170 169-311q-11-11-11-28t11-28l423-424q12-12 29-12t28 12l141 142q11 11 11 28t-11 28L367-170q-12 12-28.5 12T310-170Z" : "M310-170 169-311q-11-11-11-28t11-28l423-424q12-12 29-12t28 12l141 142q11 11 11 28t-11 28L367-170q-12 12-28.5 12T310-170Z")
    : (variant === 'filled' ? "M310-170 169-311q-11-11-11-28t11-28l423-424q12-12 29-12t28 12l141 142q11 11 11 28t-11 28L367-170q-12 12-28.5 12T310-170Z" : "M310-170 169-311q-11-11-11-28t11-28l423-424q12-12 29-12t28 12l141 142q11 11 11 28t-11 28L367-170q-12 12-28.5 12T310-170Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
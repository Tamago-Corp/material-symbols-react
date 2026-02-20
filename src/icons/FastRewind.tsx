import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const FastRewind = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M860-240 500-480l360-240v480Zm-400 0L100-480l360-240v480Z" : "M860-240 500-480l360-240v480Zm-400 0L100-480l360-240v480Zm-80-240Zm400 0Zm-400 90v-180l-136 90 136 90Zm400 0v-180l-136 90 136 90Z")
    : (variant === 'filled' ? "M798-281 550-447q-9-6-13.5-14.5T532-480q0-10 4.5-18.5T550-513l248-166q5-4 11-5t11-1q16 0 28 11t12 29v330q0 18-12 29t-28 11q-5 0-11-1t-11-5Zm-400 0L150-447q-9-6-13.5-14.5T132-480q0-10 4.5-18.5T150-513l248-166q5-4 11-5t11-1q16 0 28 11t12 29v330q0 18-12 29t-28 11q-5 0-11-1t-11-5Z" : "M798-281 550-447q-9-6-13.5-14.5T532-480q0-10 4.5-18.5T550-513l248-166q5-4 11-5t11-1q16 0 28 11t12 29v330q0 18-12 29t-28 11q-5 0-11-1t-11-5Zm-400 0L150-447q-9-6-13.5-14.5T132-480q0-10 4.5-18.5T150-513l248-166q5-4 11-5t11-1q16 0 28 11t12 29v330q0 18-12 29t-28 11q-5 0-11-1t-11-5Zm-18-199Zm400 0Zm-400 90v-180l-136 90 136 90Zm400 0v-180l-136 90 136 90Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
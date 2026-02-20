import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const FormatColorText = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M80 0v-160h800V0H80Zm140-280 210-560h100l210 560h-96l-50-144H368l-52 144h-96Zm176-224h168l-82-232h-4l-82 232Z" : "M80 0v-160h800V0H80Zm140-280 210-560h100l210 560h-96l-50-144H368l-52 144h-96Zm176-224h168l-82-232h-4l-82 232Z")
    : (variant === 'filled' ? "M120 0q-17 0-28.5-11.5T80-40v-80q0-17 11.5-28.5T120-160h720q17 0 28.5 11.5T880-120v80q0 17-11.5 28.5T840 0H120Zm165-280q-23 0-36.5-19.5T243-341l176-469q5-14 17-22t26-8h36q15 0 26.5 8t16.5 22l177 470q8 22-5.5 41T676-280q-14 0-26-8t-17-22l-39-114H368l-41 115q-5 14-16.5 21.5T285-280Zm111-224h168l-82-232h-4l-82 232Z" : "M120 0q-17 0-28.5-11.5T80-40v-80q0-17 11.5-28.5T120-160h720q17 0 28.5 11.5T880-120v80q0 17-11.5 28.5T840 0H120Zm165-280q-23 0-36.5-19.5T243-341l176-469q5-14 17-22t26-8h36q15 0 26.5 8t16.5 22l177 470q8 22-5.5 41T676-280q-14 0-26-8t-17-22l-39-114H368l-41 115q-5 14-16.5 21.5T285-280Zm111-224h168l-82-232h-4l-82 232Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
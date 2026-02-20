import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const LineStartArrowNotch = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M520-200 80-480l440-280-137 240h497v80H383l137 240Z" : "M520-200 80-480l440-280-137 240h497v80H383l137 240Z")
    : (variant === 'filled' ? "m383-440 97 170q8 14-3 24.5t-25 2.5L133-446q-19-12-19-34t19-34l319-203q14-8 25 2.5t3 24.5l-97 170h457q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H383Z" : "m383-440 97 170q8 14-3 24.5t-25 2.5L133-446q-19-12-19-34t19-34l319-203q14-8 25 2.5t3 24.5l-97 170h457q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H383Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
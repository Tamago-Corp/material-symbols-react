import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Eject = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M200-200v-80h560v80H200Zm14-160 266-400 266 400H214Z" : "M200-200v-80h560v80H200Zm14-160 266-400 266 400H214Zm266-80Zm-118 0h236L480-616 362-440Z")
    : (variant === 'filled' ? "M240-280h480q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200H240q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280Zm15-142 192-288q6-9 14.5-13.5T480-728q10 0 18.5 4.5T513-710l192 288q14 20 2 41t-36 21H289q-24 0-36-21t2-41Z" : "M240-280h480q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200H240q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280Zm15-142 192-288q6-9 14.5-13.5T480-728q10 0 18.5 4.5T513-710l192 288q14 20 2 41t-36 21H289q-24 0-36-21t2-41Zm225-18Zm-118 0h236L480-616 362-440Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ArrowRightAlt = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" : "m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z")
    : (variant === 'filled' ? "M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" : "M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Flag2 = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M200-80v-760h640l-80 200 80 200H280v360h-80Z" : "M200-80v-760h640l-80 200 80 200H280v360h-80Zm80-440h442l-48-120 48-120H280v240Zm0 0v-240 240Z")
    : (variant === 'filled' ? "M280-440v320q0 17-11.5 28.5T240-80q-17 0-28.5-11.5T200-120v-680q0-17 11.5-28.5T240-840h541q11 0 19.5 5t13.5 13q5 8 6.5 17.5T818-785l-58 145 58 145q4 10 2.5 19.5T814-458q-5 8-13.5 13t-19.5 5H280Z" : "M280-440v320q0 17-11.5 28.5T240-80q-17 0-28.5-11.5T200-120v-680q0-17 11.5-28.5T240-840h541q11 0 19.5 5t13.5 13q5 8 6.5 17.5T818-785l-58 145 58 145q4 10 2.5 19.5T814-458q-5 8-13.5 13t-19.5 5H280Zm0-80h442l-36-90q-6-14-6-30t6-30l36-90H280v240Zm0 0v-240 240Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
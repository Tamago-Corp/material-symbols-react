import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const LineEndArrowNotch = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m440-200 137-240H80v-80h497L440-760l440 280-440 280Z" : "m440-200 137-240H80v-80h497L440-760l440 280-440 280Z")
    : (variant === 'filled' ? "M508-243q-14 8-25-2.5t-3-24.5l97-170H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h457l-97-170q-8-14 3-24.5t25-2.5l319 203q19 12 19 34t-19 34L508-243Z" : "M508-243q-14 8-25-2.5t-3-24.5l97-170H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h457l-97-170q-8-14 3-24.5t25-2.5l319 203q19 12 19 34t-19 34L508-243Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
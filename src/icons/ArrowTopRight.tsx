import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const ArrowTopRight = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M200-160v-480h447L503-783l57-57 240 240-241 241-56-57 144-144H280v400h-80Z" : "M200-160v-480h447L503-783l57-57 240 240-241 241-56-57 144-144H280v400h-80Z")
    : (variant === 'filled' ? "M647-560H280v360q0 17-11.5 28.5T240-160q-17 0-28.5-11.5T200-200v-360q0-33 23.5-56.5T280-640h367L532-755q-12-12-12.5-28.5T531-812q12-12 28.5-12t28.5 12l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L587-387q-12 12-28 11.5T531-388q-11-12-11.5-28t11.5-28l116-116Z" : "M647-560H280v360q0 17-11.5 28.5T240-160q-17 0-28.5-11.5T200-200v-360q0-33 23.5-56.5T280-640h367L532-755q-12-12-12.5-28.5T531-812q12-12 28.5-12t28.5 12l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L587-387q-12 12-28 11.5T531-388q-11-12-11.5-28t11.5-28l116-116Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const SubdirectoryArrowRight = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" : "m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z")
    : (variant === 'filled' ? "M532-149q-12-12-12-28t12-28l115-115H280q-33 0-56.5-23.5T200-400v-360q0-17 11.5-28.5T240-800q17 0 28.5 11.5T280-760v360h367L531-516q-12-12-11.5-28t11.5-28q12-12 28-12.5t28 11.5l185 185q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-149q-12 12-28.5 12T532-149Z" : "M532-149q-12-12-12-28t12-28l115-115H280q-33 0-56.5-23.5T200-400v-360q0-17 11.5-28.5T240-800q17 0 28.5 11.5T280-760v360h367L531-516q-12-12-11.5-28t11.5-28q12-12 28-12.5t28 11.5l185 185q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-149q-12 12-28.5 12T532-149Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
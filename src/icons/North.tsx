import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const North = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M440-80v-647L256-544l-56-56 280-280 280 280-56 57-184-184v647h-80Z" : "M440-80v-647L256-544l-56-56 280-280 280 280-56 57-184-184v647h-80Z")
    : (variant === 'filled' ? "M480-80q-17 0-28.5-11.5T440-120v-607L284-572q-11 11-27.5 11.5T228-572q-11-11-11-28t11-28l224-224q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l224 224q11 11 11 27.5T732-572q-12 12-28.5 12T675-572L520-727v607q0 17-11.5 28.5T480-80Z" : "M480-80q-17 0-28.5-11.5T440-120v-607L284-572q-11 11-27.5 11.5T228-572q-11-11-11-28t11-28l224-224q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l224 224q11 11 11 27.5T732-572q-12 12-28.5 12T675-572L520-727v607q0 17-11.5 28.5T480-80Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
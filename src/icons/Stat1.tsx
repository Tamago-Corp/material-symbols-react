import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Stat1 = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z" : "m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z")
    : (variant === 'filled' ? "M480-528 324-373q-11 11-27.5 11.5T268-373q-11-11-11-28t11-28l184-184q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l184 184q11 11 11.5 27.5T692-373q-11 11-28 11t-28-11L480-528Z" : "M480-528 324-373q-11 11-27.5 11.5T268-373q-11-11-11-28t11-28l184-184q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l184 184q11 11 11.5 27.5T692-373q-11 11-28 11t-28-11L480-528Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
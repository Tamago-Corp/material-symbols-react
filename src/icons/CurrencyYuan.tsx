import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const CurrencyYuan = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M440-120v-280H240v-80h189L200-840h95l185 292 185-292h95L531-480h189v80H520v280h-80Z" : "M440-120v-280H240v-80h189L200-840h95l185 292 185-292h95L531-480h189v80H520v280h-80Z")
    : (variant === 'filled' ? "M440-160v-240H280q-17 0-28.5-11.5T240-440q0-17 11.5-28.5T280-480h149L239-778q-13-20-1.5-41t35.5-21q11 0 20 5t14 14l173 273 173-273q5-9 14-14t20-5q24 0 35.5 21t-1.5 41L531-480h149q17 0 28.5 11.5T720-440q0 17-11.5 28.5T680-400H520v240q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160Z" : "M440-160v-240H280q-17 0-28.5-11.5T240-440q0-17 11.5-28.5T280-480h149L239-778q-13-20-1.5-41t35.5-21q11 0 20 5t14 14l173 273 173-273q5-9 14-14t20-5q24 0 35.5 21t-1.5 41L531-480h149q17 0 28.5 11.5T720-440q0 17-11.5 28.5T680-400H520v240q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
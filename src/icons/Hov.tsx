import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Hov = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M480-80 240-480l240-400 240 400L480-80Z" : "M480-80 240-480l240-400 240 400L480-80Zm0-156 147-244-147-244-147 244 147 244Zm0-244Z")
    : (variant === 'filled' ? "M480-118q-10 0-19-4.5T446-137L265-439q-6-10-9-20t-3-21q0-11 3-21t9-20l181-302q6-10 15-14.5t19-4.5q10 0 19 4.5t15 14.5l181 302q6 10 9 20t3 21q0 11-3 21t-9 20L514-137q-6 10-15 14.5t-19 4.5Z" : "M480-118q-10 0-19-4.5T446-137L265-439q-6-10-9-20t-3-21q0-11 3-21t9-20l181-302q6-10 15-14.5t19-4.5q10 0 19 4.5t15 14.5l181 302q6 10 9 20t3 21q0 11-3 21t-9 20L514-137q-6 10-15 14.5t-19 4.5Zm0-118 147-244-147-244-147 244 147 244Zm0-244Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
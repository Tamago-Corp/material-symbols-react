import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const LastPage = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m280-240-56-56 184-184-184-184 56-56 240 240-240 240Zm360 0v-480h80v480h-80Z" : "m280-240-56-56 184-184-184-184 56-56 240 240-240 240Zm360 0v-480h80v480h-80Z")
    : (variant === 'filled' ? "M408-480 252-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L308-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Zm272-240q17 0 28.5 11.5T720-680v400q0 17-11.5 28.5T680-240q-17 0-28.5-11.5T640-280v-400q0-17 11.5-28.5T680-720Z" : "M408-480 252-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L308-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Zm272-240q17 0 28.5 11.5T720-680v400q0 17-11.5 28.5T680-240q-17 0-28.5-11.5T640-280v-400q0-17 11.5-28.5T680-720Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
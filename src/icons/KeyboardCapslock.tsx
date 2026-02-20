import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const KeyboardCapslock = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M240-240v-80h480v80H240Zm240-496 240 240-56 56-184-184-184 184-56-56 240-240Z" : "M240-240v-80h480v80H240Zm240-496 240 240-56 56-184-184-184 184-56-56 240-240Z")
    : (variant === 'filled' ? "M280-240q-17 0-28.5-11.5T240-280q0-17 11.5-28.5T280-320h400q17 0 28.5 11.5T720-280q0 17-11.5 28.5T680-240H280Zm200-384L324-468q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q12-12 28-12t28 12l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-624Z" : "M280-240q-17 0-28.5-11.5T240-280q0-17 11.5-28.5T280-320h400q17 0 28.5 11.5T720-280q0 17-11.5 28.5T680-240H280Zm200-384L324-468q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q12-12 28-12t28 12l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-624Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
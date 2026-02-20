import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const CallMade = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" : "m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z")
    : (variant === 'filled' ? "M680-624 244-188q-11 11-28 11t-28-11q-11-11-11-28t11-28l436-436H400q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760h320q17 0 28.5 11.5T760-720v320q0 17-11.5 28.5T720-360q-17 0-28.5-11.5T680-400v-224Z" : "M680-624 244-188q-11 11-28 11t-28-11q-11-11-11-28t11-28l436-436H400q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760h320q17 0 28.5 11.5T760-720v320q0 17-11.5 28.5T720-360q-17 0-28.5-11.5T680-400v-224Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
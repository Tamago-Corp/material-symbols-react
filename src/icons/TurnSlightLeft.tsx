import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const TurnSlightLeft = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M520-160v-304L320-664v90h-80v-226h226v80h-90l201 201q11 11 17 25.5t6 30.5v303h-80Z" : "M520-160v-304L320-664v90h-80v-226h226v80h-90l201 201q11 11 17 25.5t6 30.5v303h-80Z")
    : (variant === 'filled' ? "M560-160q-17 0-28.5-11.5T520-200v-264L320-664v50q0 17-11.5 28.5T280-574q-17 0-28.5-11.5T240-614v-146q0-17 11.5-28.5T280-800h146q17 0 28.5 11.5T466-760q0 17-11.5 28.5T426-720h-50l201 201q11 11 17 25.5t6 30.5v263q0 17-11.5 28.5T560-160Z" : "M560-160q-17 0-28.5-11.5T520-200v-264L320-664v50q0 17-11.5 28.5T280-574q-17 0-28.5-11.5T240-614v-146q0-17 11.5-28.5T280-800h146q17 0 28.5 11.5T466-760q0 17-11.5 28.5T426-720h-50l201 201q11 11 17 25.5t6 30.5v263q0 17-11.5 28.5T560-160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const TurnSlightRight = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M360-160v-303q0-16 6-30.5t17-25.5l201-201h-90v-80h226v226h-80v-90L440-464v304h-80Z" : "M360-160v-303q0-16 6-30.5t17-25.5l201-201h-90v-80h226v226h-80v-90L440-464v304h-80Z")
    : (variant === 'filled' ? "M400-160q-17 0-28.5-11.5T360-200v-263q0-16 6-30.5t17-25.5l201-201h-50q-17 0-28.5-11.5T494-760q0-17 11.5-28.5T534-800h146q17 0 28.5 11.5T720-760v146q0 17-11.5 28.5T680-574q-17 0-28.5-11.5T640-614v-50L440-464v264q0 17-11.5 28.5T400-160Z" : "M400-160q-17 0-28.5-11.5T360-200v-263q0-16 6-30.5t17-25.5l201-201h-50q-17 0-28.5-11.5T494-760q0-17 11.5-28.5T534-800h146q17 0 28.5 11.5T720-760v146q0 17-11.5 28.5T680-574q-17 0-28.5-11.5T640-614v-50L440-464v264q0 17-11.5 28.5T400-160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
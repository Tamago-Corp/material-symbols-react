import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const FormatParagraph = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M360-160v-240q-83 0-141.5-58.5T160-600q0-83 58.5-141.5T360-800h360v80h-80v560h-80v-560H440v560h-80Z" : "M360-160v-240q-83 0-141.5-58.5T160-600q0-83 58.5-141.5T360-800h360v80h-80v560h-80v-560H440v560h-80Z")
    : (variant === 'filled' ? "M400-160q-17 0-28.5-11.5T360-200v-200q-83 0-141.5-58.5T160-600q0-83 58.5-141.5T360-800h320q17 0 28.5 11.5T720-760q0 17-11.5 28.5T680-720h-40v520q0 17-11.5 28.5T600-160q-17 0-28.5-11.5T560-200v-520H440v520q0 17-11.5 28.5T400-160Z" : "M400-160q-17 0-28.5-11.5T360-200v-200q-83 0-141.5-58.5T160-600q0-83 58.5-141.5T360-800h320q17 0 28.5 11.5T720-760q0 17-11.5 28.5T680-720h-40v520q0 17-11.5 28.5T600-160q-17 0-28.5-11.5T560-200v-520H440v520q0 17-11.5 28.5T400-160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
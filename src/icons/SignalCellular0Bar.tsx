import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const SignalCellular0Bar = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m80-80 800-800v800H80Zm193-80h527v-526L273-160Z" : "m80-80 800-800v800H80Zm193-80h527v-526L273-160Z")
    : (variant === 'filled' ? "M177-80q-27 0-37.5-24.5T148-148l664-664q19-19 43.5-8.5T880-783v643q0 25-17.5 42.5T820-80H177Zm96-80h527v-526L273-160Z" : "M177-80q-27 0-37.5-24.5T148-148l664-664q19-19 43.5-8.5T880-783v643q0 25-17.5 42.5T820-80H177Zm96-80h527v-526L273-160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
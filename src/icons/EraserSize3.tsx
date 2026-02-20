import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const EraserSize3 = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M340-200q-58 0-99-41t-41-99q0-27 10.5-53t30.5-46l280-280q20-20 46-30.5t53-10.5q58 0 99 41t41 99q0 27-10.5 53T719-521L439-241q-20 20-46 30.5T340-200Z" : "M340-200q-58 0-99-41t-41-99q0-27 10.5-53t30.5-46l280-280q20-20 46-30.5t53-10.5q58 0 99 41t41 99q0 27-10.5 53T719-521L439-241q-20 20-46 30.5T340-200Z")
    : (variant === 'filled' ? "M340-200q-58 0-99-41t-41-99q0-27 10.5-53t30.5-46l280-280q20-20 46-30.5t53-10.5q58 0 99 41t41 99q0 27-10.5 53T719-521L439-241q-20 20-46 30.5T340-200Z" : "M340-200q-58 0-99-41t-41-99q0-27 10.5-53t30.5-46l280-280q20-20 46-30.5t53-10.5q58 0 99 41t41 99q0 27-10.5 53T719-521L439-241q-20 20-46 30.5T340-200Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
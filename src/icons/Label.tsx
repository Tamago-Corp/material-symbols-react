import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Label = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M840-480 666-234q-11 16-28.5 25t-37.5 9H200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h400q20 0 37.5 9t28.5 25l174 246Z" : "M840-480 666-234q-11 16-28.5 25t-37.5 9H200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h400q20 0 37.5 9t28.5 25l174 246Zm-98 0L600-680H200v400h400l142-200Zm-542 0v200-400 200Z")
    : (variant === 'filled' ? "M807-434 666-234q-11 16-28.5 25t-37.5 9H200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h400q20 0 37.5 9t28.5 25l141 200q15 21 15 46t-15 46Z" : "M807-434 666-234q-11 16-28.5 25t-37.5 9H200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h400q20 0 37.5 9t28.5 25l141 200q15 21 15 46t-15 46ZM600-280l142-200-142-200H200v400h400ZM200-680v400-400Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
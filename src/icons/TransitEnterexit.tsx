import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const TransitEnterexit = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M240-240v-400h120v190l272-272 88 88-274 274h194v120H240Z" : "M240-240v-400h120v190l272-272 88 88-274 274h194v120H240Z")
    : (variant === 'filled' ? "M446-360h134q25 0 42.5 17.5T640-300q0 25-17.5 42.5T580-240H280q-17 0-28.5-11.5T240-280v-300q0-25 17.5-42.5T300-640q25 0 42.5 17.5T360-580v130l228-228q18-18 44-18t44 18q18 18 18 44t-18 44L446-360Z" : "M446-360h134q25 0 42.5 17.5T640-300q0 25-17.5 42.5T580-240H280q-17 0-28.5-11.5T240-280v-300q0-25 17.5-42.5T300-640q25 0 42.5 17.5T360-580v130l228-228q18-18 44-18t44 18q18 18 18 44t-18 44L446-360Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
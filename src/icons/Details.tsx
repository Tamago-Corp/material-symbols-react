import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Details = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m80-120 400-720 400 720H80Zm136-80h224v-403L216-200Zm304 0h224L520-603v403Z" : "m80-120 400-720 400 720H80Zm136-80h224v-403L216-200Zm304 0h224L520-603v403Z")
    : (variant === 'filled' ? "M148-120q-23 0-34.5-19.5T113-179l332-598q11-20 35-20t35 20l332 598q11 20-.5 39.5T812-120H148Zm68-80h224v-403L216-200Zm304 0h224L520-603v403Z" : "M148-120q-23 0-34.5-19.5T113-179l332-598q11-20 35-20t35 20l332 598q11 20-.5 39.5T812-120H148Zm68-80h224v-403L216-200Zm304 0h224L520-603v403Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
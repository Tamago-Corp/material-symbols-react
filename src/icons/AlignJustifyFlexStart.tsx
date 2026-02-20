import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const AlignJustifyFlexStart = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M80-80v-800h80v800H80Zm440-200v-400h120v400H520Zm-240 0v-400h120v400H280Z" : "M80-80v-800h80v800H80Zm440-200v-400h120v400H520Zm-240 0v-400h120v400H280Z")
    : (variant === 'filled' ? "M120-80q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v720q0 17-11.5 28.5T120-80Zm440-200q-17 0-28.5-11.5T520-320v-320q0-17 11.5-28.5T560-680h40q17 0 28.5 11.5T640-640v320q0 17-11.5 28.5T600-280h-40Zm-240 0q-17 0-28.5-11.5T280-320v-320q0-17 11.5-28.5T320-680h40q17 0 28.5 11.5T400-640v320q0 17-11.5 28.5T360-280h-40Z" : "M120-80q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v720q0 17-11.5 28.5T120-80Zm440-200q-17 0-28.5-11.5T520-320v-320q0-17 11.5-28.5T560-680h40q17 0 28.5 11.5T640-640v320q0 17-11.5 28.5T600-280h-40Zm-240 0q-17 0-28.5-11.5T280-320v-320q0-17 11.5-28.5T320-680h40q17 0 28.5 11.5T400-640v320q0 17-11.5 28.5T360-280h-40Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
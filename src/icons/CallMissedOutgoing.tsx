import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const CallMissedOutgoing = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M480-263 120-623l56-57 304 304 224-224H520v-80h320v320h-80v-183L480-263Z" : "M480-263 120-623l56-57 304 304 224-224H520v-80h320v320h-80v-183L480-263Z")
    : (variant === 'filled' ? "M760-543 537-320q-12 12-27 18t-30 6q-15 0-30-6t-27-18L148-595q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l275 275 224-224H560q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h240q17 0 28.5 11.5T840-640v240q0 17-11.5 28.5T800-360q-17 0-28.5-11.5T760-400v-143Z" : "M760-543 537-320q-12 12-27 18t-30 6q-15 0-30-6t-27-18L148-595q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l275 275 224-224H560q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h240q17 0 28.5 11.5T840-640v240q0 17-11.5 28.5T800-360q-17 0-28.5-11.5T760-400v-143Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
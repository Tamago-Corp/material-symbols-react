import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const SkipNext = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Z" : "M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Zm80-240Zm0 90 136-90-136-90v180Z")
    : (variant === 'filled' ? "M660-280v-400q0-17 11.5-28.5T700-720q17 0 28.5 11.5T740-680v400q0 17-11.5 28.5T700-240q-17 0-28.5-11.5T660-280Zm-440-35v-330q0-18 12-29t28-11q5 0 11 1t11 5l248 166q9 6 13.5 14.5T548-480q0 10-4.5 18.5T530-447L282-281q-5 4-11 5t-11 1q-16 0-28-11t-12-29Z" : "M660-280v-400q0-17 11.5-28.5T700-720q17 0 28.5 11.5T740-680v400q0 17-11.5 28.5T700-240q-17 0-28.5-11.5T660-280Zm-440-35v-330q0-18 12-29t28-11q5 0 11 1t11 5l248 166q9 6 13.5 14.5T548-480q0 10-4.5 18.5T530-447L282-281q-5 4-11 5t-11 1q-16 0-28-11t-12-29Zm80-165Zm0 90 136-90-136-90v180Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
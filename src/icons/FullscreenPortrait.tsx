import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const FullscreenPortrait = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M320-240h320v-480H320v480Zm480 80q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Z" : "M320-240h320v-480H320v480Zm480 80q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Zm-80 0v-640H240v640h480Zm0-640H240h480Z")
    : (variant === 'filled' ? "M360-240h240q17 0 28.5-11.5T640-280v-400q0-17-11.5-28.5T600-720H360q-17 0-28.5 11.5T320-680v400q0 17 11.5 28.5T360-240Zm440 80q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Z" : "M360-240h240q17 0 28.5-11.5T640-280v-400q0-17-11.5-28.5T600-720H360q-17 0-28.5 11.5T320-680v400q0 17 11.5 28.5T360-240Zm440 80q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Zm-80 0v-640H240v640h480Zm0-640H240h480Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
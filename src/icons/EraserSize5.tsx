import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const EraserSize5 = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M402-120q-118 0-200-82t-82-200q0-54 20-105.5t62-93.5l157-157q42-42 93.5-62T558-840q118 0 200 82t82 200q0 54-20 105.5T758-359L601-202q-42 42-93.5 62T402-120Z" : "M402-120q-118 0-200-82t-82-200q0-54 20-105.5t62-93.5l157-157q42-42 93.5-62T558-840q118 0 200 82t82 200q0 54-20 105.5T758-359L601-202q-42 42-93.5 62T402-120Z")
    : (variant === 'filled' ? "M402-120q-118 0-200-82t-82-200q0-54 20-105.5t62-93.5l157-157q42-42 93.5-62T558-840q118 0 200 82t82 200q0 54-20 105.5T758-359L601-202q-42 42-93.5 62T402-120Z" : "M402-120q-118 0-200-82t-82-200q0-54 20-105.5t62-93.5l157-157q42-42 93.5-62T558-840q118 0 200 82t82 200q0 54-20 105.5T758-359L601-202q-42 42-93.5 62T402-120Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
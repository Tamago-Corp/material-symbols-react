import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const SpaceBar = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M160-360v-240h80v160h480v-160h80v240H160Z" : "M160-360v-240h80v160h480v-160h80v240H160Z")
    : (variant === 'filled' ? "M240-360q-33 0-56.5-23.5T160-440v-120q0-17 11.5-28.5T200-600q17 0 28.5 11.5T240-560v120h480v-120q0-17 11.5-28.5T760-600q17 0 28.5 11.5T800-560v120q0 33-23.5 56.5T720-360H240Z" : "M240-360q-33 0-56.5-23.5T160-440v-120q0-17 11.5-28.5T200-600q17 0 28.5 11.5T240-560v120h480v-120q0-17 11.5-28.5T760-600q17 0 28.5 11.5T800-560v120q0 33-23.5 56.5T720-360H240Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
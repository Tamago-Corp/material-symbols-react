import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const TeamDashboard = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M200-120q-33 0-56.5-23.5T120-200v-250h280v330H200Zm280 0v-330h360v250q0 33-23.5 56.5T760-120H480ZM120-530v-230q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v230H120Z" : "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm200-80v-240H200v240h200Zm80 0h280v-240H480v240ZM200-520h560v-240H200v240Z")
    : (variant === 'filled' ? "M200-120q-33 0-56.5-23.5T120-200v-250h280v330H200Zm280 0v-330h360v250q0 33-23.5 56.5T760-120H480ZM120-530v-230q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v230H120Z" : "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm200-80v-240H200v240h200Zm80 0h280v-240H480v240ZM200-520h560v-240H200v240Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
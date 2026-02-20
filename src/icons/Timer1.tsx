import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Timer1 = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M480-200v-440H320v-120h280v560H480Z" : "M480-200v-440H320v-120h280v560H480Z")
    : (variant === 'filled' ? "M540-200q-25 0-42.5-17.5T480-260v-380H380q-25 0-42.5-17.5T320-700q0-25 17.5-42.5T380-760h140q33 0 56.5 23.5T600-680v420q0 25-17.5 42.5T540-200Z" : "M540-200q-25 0-42.5-17.5T480-260v-380H380q-25 0-42.5-17.5T320-700q0-25 17.5-42.5T380-760h140q33 0 56.5 23.5T600-680v420q0 25-17.5 42.5T540-200Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
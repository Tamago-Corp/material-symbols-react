import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const LineEndSquare = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M440-260v-180H80v-80h360v-180h440v440H440Z" : "M520-340h280v-280H520v280Zm-80 80v-180H80v-80h360v-180h440v440H440Zm220-220Z")
    : (variant === 'filled' ? "M480-260q-17 0-28.5-11.5T440-300v-140H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h320v-140q0-17 11.5-28.5T480-700h360q17 0 28.5 11.5T880-660v360q0 17-11.5 28.5T840-260H480Z" : "M520-340h280v-280H520v280Zm-40 80q-17 0-28.5-11.5T440-300v-140H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h320v-140q0-17 11.5-28.5T480-700h360q17 0 28.5 11.5T880-660v360q0 17-11.5 28.5T840-260H480Zm180-220Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Equal = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M160-280v-120h640v120H160Zm0-280v-120h640v120H160Z" : "M160-280v-120h640v120H160Zm0-280v-120h640v120H160Z")
    : (variant === 'filled' ? "M220-280q-25 0-42.5-17.5T160-340q0-25 17.5-42.5T220-400h520q25 0 42.5 17.5T800-340q0 25-17.5 42.5T740-280H220Zm0-280q-25 0-42.5-17.5T160-620q0-25 17.5-42.5T220-680h520q25 0 42.5 17.5T800-620q0 25-17.5 42.5T740-560H220Z" : "M220-280q-25 0-42.5-17.5T160-340q0-25 17.5-42.5T220-400h520q25 0 42.5 17.5T800-340q0 25-17.5 42.5T740-280H220Zm0-280q-25 0-42.5-17.5T160-620q0-25 17.5-42.5T220-680h520q25 0 42.5 17.5T800-620q0 25-17.5 42.5T740-560H220Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const StylusPencil = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m160-120 22-65q8-25 29-40t47-15h444q26 0 47 15t29 40l22 65H160Zm80-200 200-520h80l200 520H240Z" : "m160-120 22-65q8-25 29-40t47-15h444q26 0 47 15t29 40l22 65H160Zm80-200 200-520h80l200 520H240Zm116-80h248L480-721 356-400Zm0 0h248-248Z")
    : (variant === 'filled' ? "M298-320q-21 0-33-17t-4-37l170-442q5-11 14.5-17.5T466-840h28q11 0 20.5 6.5T529-816l170 442q8 20-4 37t-33 17H298Zm-83 200q-20 0-32.5-16.5T177-173l5-12q8-25 29-40t47-15h444q26 0 47 15t29 40l5 12q7 20-5.5 36.5T745-120H215Z" : "M298-320q-21 0-33-17t-4-37l170-442q5-11 14.5-17.5T466-840h28q11 0 20.5 6.5T529-816l170 442q8 20-4 37t-33 17H298Zm58-80h248L480-721 356-400Zm0 0h248-248ZM215-120q-20 0-32.5-16.5T177-173l5-12q8-25 29-40t47-15h444q26 0 47 15t29 40l5 12q7 20-5.5 36.5T745-120H215Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
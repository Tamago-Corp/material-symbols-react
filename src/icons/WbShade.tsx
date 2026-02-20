import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const WbShade = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M780-160 560-380v-100l320 320H780Zm-220 0v-120l120 120H560Zm-400 0v-400H80l240-240 240 240h-80v400H160Zm120-240h80v-160h-80v160Z" : "M780-160 560-380v-100l320 320H780Zm-220 0v-120l120 120H560Zm-400 0v-400H80l240-240 240 240h-80v400H160Zm120-240h80v-160h-80v160Z")
    : (variant === 'filled' ? "M780-160 560-380v-52q0-14 12-19t22 5l252 252q10 10 5 22t-19 12h-52Zm-220-40v-80l120 120h-80q-17 0-28.5-11.5T560-200Zm-400 0v-360h-32q-14 0-19-12t5-22l178-178q12-12 28-12t28 12l178 178q10 10 5 22t-19 12h-32v360q0 17-11.5 28.5T440-160H200q-17 0-28.5-11.5T160-200Zm120-200h80v-160h-80v160Z" : "M780-160 560-380v-52q0-14 12-19t22 5l252 252q10 10 5 22t-19 12h-52Zm-220-40v-80l120 120h-80q-17 0-28.5-11.5T560-200Zm-400 0v-360h-32q-14 0-19-12t5-22l178-178q12-12 28-12t28 12l178 178q10 10 5 22t-19 12h-32v360q0 17-11.5 28.5T440-160H200q-17 0-28.5-11.5T160-200Zm120-200h80v-160h-80v160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
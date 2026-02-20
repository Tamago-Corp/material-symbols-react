import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const HomeImprovementAndTools = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M240-880h480L600-712v152H360v-152L240-880Zm120 400h240v80H360v-80Zm0 160h240v120L480-80 360-200v-120Z" : "M240-880h480L600-712v512L480-80 360-200v-512L240-880Zm200 320h80v-176l40-64H400l40 64v176Zm80 80h-80v80h80v-80Zm0 240v-80h-80v80l40 40 40-40Zm-40-320Zm0 160Zm0-160Zm0 80Zm0 160Z")
    : (variant === 'filled' ? "M318-880h324q25 0 36 21.5t-3 41.5l-75 105v152H360v-152l-75-105q-14-20-3-41.5t36-21.5Zm42 400h240v80H360v-80Zm0 160h240v87q0 16-6 30.5T577-177l-69 69q-6 6-13 8.5T480-97q-8 0-15-2.5t-13-8.5l-69-69q-11-11-17-25.5t-6-30.5v-87Z" : "M480-97q-8 0-15-2.5t-13-8.5l-69-69q-11-11-17-25.5t-6-30.5v-479l-75-105q-14-20-3-41.5t36-21.5h324q25 0 36 21.5t-3 41.5l-75 105v479q0 16-6 30.5T577-177l-69 69q-6 6-13 8.5T480-97Zm-40-463h80v-176l40-64H400l40 64v176Zm80 80h-80v80h80v-80Zm0 240v-80h-80v80l40 40 40-40Zm-40-320Zm0 160Zm0-160Zm0 80Zm0 160Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const Airlines = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "m80-160 440-640h360L760-160H80Zm500-240q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z" : "M232-240h462l90-480H562L232-240ZM80-160l440-640h360L760-160H80Zm500-240q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM232-240h462-462Z")
    : (variant === 'filled' ? "m102-191 394-574q11-17 28.5-26t37.5-9h222q38 0 61.5 29t16.5 66l-96 512q-3 14-14 23.5t-25 9.5H118q-12 0-17.5-10.5T102-191Zm478-209q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z" : "M232-240h462l90-480H562L232-240Zm-130 49 394-574q11-17 28.5-26t37.5-9h222q38 0 61.5 29t16.5 66l-96 512q-3 14-14 23.5t-25 9.5H118q-12 0-17.5-10.5T102-191Zm478-209q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM232-240h462-462Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
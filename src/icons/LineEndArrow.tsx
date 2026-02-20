import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const LineEndArrow = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M440-200v-240H80v-80h360v-240l440 280-440 280Z" : "M440-200v-240H80v-80h360v-240l440 280-440 280Zm80-146 211-134-211-134v268Zm0-134Z")
    : (variant === 'filled' ? "M501-239q-20 13-40.5 1.5T440-273v-167H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h320v-167q0-24 20.5-35.5T501-721l326 207q19 12 19 34t-19 34L501-239Z" : "M501-239q-20 13-40.5 1.5T440-273v-167H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h320v-167q0-24 20.5-35.5T501-721l326 207q19 12 19 34t-19 34L501-239Zm19-107 211-134-211-134v268Zm0-134Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
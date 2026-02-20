import React from 'react';
import { IconBase, IconProps } from '../IconBase';

export const CommentBank = ({ 
  variant = 'default', 
  appearance = 'outlined', 
  ...props 
}: IconProps) => {
  const d = appearance === 'outlined' 
    ? (variant === 'filled' ? "M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm420-440 100-60 100 60v-280H500v280Z" : "M500-520v-280H160v525l46-45h594v-480H700v280l-100-60-100 60ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm80-720v480-480Z")
    : (variant === 'filled' ? "m240-240-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm260-560v245q0 12 10 17.5t20-.5l55-33q8-5 15-5t15 5l55 33q10 6 20 .5t10-17.5v-245H500Z" : "m240-240-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm560-80v-480H700v245q0 12-10 17.5t-20-.5l-55-33q-8-5-15-5t-15 5l-55 33q-10 6-20 .5T500-555v-245H160v525l46-45h594Zm-640 0v-480 480Z");

  return (
    <IconBase {...props}>
      <path d={d} />
    </IconBase>
  );
};
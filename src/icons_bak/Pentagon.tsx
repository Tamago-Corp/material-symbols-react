import { IconBase, IconProps } from "../IconBase";

export const Pentagon = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M298-200h364l123-369-305-213-305 213 123 369Zm-58 80L80-600l400-280 400 280-160 480H240Zm240-371Z"/></>,
      filled: <><path d="M240-120 80-600l400-280 400 280-160 480H240Z"/></>,
    }}
  />
);
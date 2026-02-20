import { IconBase, IconProps } from "../IconBase";

export const Stop = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M320-640v320-320Zm-80 400v-480h480v480H240Zm80-80h320v-320H320v320Z"/></>,
      filled: <><path d="M240-240v-480h480v480H240Z"/></>,
    }}
  />
);
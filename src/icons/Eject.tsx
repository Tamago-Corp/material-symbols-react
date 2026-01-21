import { IconBase, IconProps } from "../IconBase";

export const Eject = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M200-200v-80h560v80H200Zm14-160 266-400 266 400H214Zm266-80Zm-118 0h236L480-616 362-440Z"/></>,
      filled: <><path d="M200-200v-80h560v80H200Zm14-160 266-400 266 400H214Z"/></>,
    }}
  />
);
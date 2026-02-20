import { IconBase, IconProps } from "../IconBase";

export const Variables = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M120-280v-400h720v400H120Zm80-80h560v-240H200v240Zm0 0v-240 240Z"/></>,
      filled: <><path d="M120-280v-400h720v400H120Z"/></>,
    }}
  />
);
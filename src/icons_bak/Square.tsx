import { IconBase, IconProps } from "../IconBase";

export const Square = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/></>,
      filled: <><path d="M120-120v-720h720v720H120Z"/></>,
    }}
  />
);
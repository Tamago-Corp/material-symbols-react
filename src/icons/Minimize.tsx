import { IconBase, IconProps } from "../IconBase";

export const Minimize = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M240-120v-80h480v80H240Z"/></>,
      filled: <><path d="M240-120v-80h480v80H240Z"/></>,
    }}
  />
);
import { IconBase, IconProps } from "../IconBase";

export const Add = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></>,
      filled: <><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></>,
    }}
  />
);
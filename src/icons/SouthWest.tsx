import { IconBase, IconProps } from "../IconBase";

export const SouthWest = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M200-200v-400h80v264l464-464 56 56-464 464h264v80H200Z"/></>,
      filled: <><path d="M200-200v-400h80v264l464-464 56 56-464 464h264v80H200Z"/></>,
    }}
  />
);
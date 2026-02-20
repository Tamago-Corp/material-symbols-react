import { IconBase, IconProps } from "../IconBase";

export const Exclamation = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M440-400v-360h80v360h-80Zm0 200v-80h80v80h-80Z"/></>,
      filled: <><path d="M440-400v-360h80v360h-80Zm0 200v-80h80v80h-80Z"/></>,
    }}
  />
);
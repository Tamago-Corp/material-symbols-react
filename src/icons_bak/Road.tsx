import { IconBase, IconProps } from "../IconBase";

export const Road = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M160-160v-640h80v640h-80Zm280 0v-160h80v160h-80Zm280 0v-640h80v640h-80ZM440-400v-160h80v160h-80Zm0-240v-160h80v160h-80Z"/></>,
      filled: <><path d="M160-160v-640h80v640h-80Zm280 0v-160h80v160h-80Zm280 0v-640h80v640h-80ZM440-400v-160h80v160h-80Zm0-240v-160h80v160h-80Z"/></>,
    }}
  />
);
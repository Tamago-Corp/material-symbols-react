import { IconBase, IconProps } from "../IconBase";

export const Rectangle = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/></>,
      filled: <><path d="M80-160v-640h800v640H80Z"/></>,
    }}
  />
);
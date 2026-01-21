import { IconBase, IconProps } from "../IconBase";

export const Brick = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M80-160v-480h120v-160h240v160h80v-160h240v160h120v480H80Zm80-80h640v-320H160v320Zm120-400h80v-80h-80v80Zm320 0h80v-80h-80v80ZM160-240h640-640Zm120-400h80-80Zm320 0h80-80Z"/></>,
      filled: <><path d="M80-160v-480h120v-160h240v160h80v-160h240v160h120v480H80Z"/></>,
    }}
  />
);
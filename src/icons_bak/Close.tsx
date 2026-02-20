import { IconBase, IconProps } from "../IconBase";

export const Close = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></>,
      filled: <><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></>,
    }}
  />
);
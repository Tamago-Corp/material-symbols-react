import { IconBase, IconProps } from "../IconBase";

export const Polymer = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M198-160 20-480l180-320h160L180-480l104 186 312-506h164l180 320-180 320H600l180-320-104-184-310 504H198Z"/></>,
      filled: <><path d="M198-160 20-480l180-320h160L180-480l104 186 312-506h164l180 320-180 320H600l180-320-104-184-310 504H198Z"/></>,
    }}
  />
);
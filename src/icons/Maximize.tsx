import { IconBase, IconProps } from "../IconBase";

export const Maximize = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M160-760v-80h640v80H160Z"/></>,
      filled: <><path d="M160-760v-80h640v80H160Z"/></>,
    }}
  />
);
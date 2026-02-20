import { IconBase, IconProps } from "../IconBase";

export const Desk = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M80-240v-480h800v480h-80v-80H640v80h-80v-400H160v400H80Zm560-320h160v-80H640v80Zm0 160h160v-80H640v80Z"/></>,
      filled: <><path d="M80-240v-480h800v480h-80v-80H640v80h-80v-400H160v400H80Zm560-320h160v-80H640v80Zm0 160h160v-80H640v80Z"/></>,
    }}
  />
);
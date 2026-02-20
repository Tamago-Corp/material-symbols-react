import { IconBase, IconProps } from "../IconBase";

export const Screencast = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 96 960 960"
    paths={{
      outlined: <><path d="M160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v480q0 33-23.5 56.5T800 896H160Zm400-160v-80h160v80H560Zm0-120v-80h160v80H560Zm-400-80v280h640V496H560v-80h240v-80H480v200H160Z"/></>,
      filled: <><path d="M160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v480q0 33-23.5 56.5T800 896H160Zm400-160v-80h160v80H560Zm0-120v-80h160v80H560Zm-400-80v280h640V496H560v-80h240v-80H480v200H160Z"/></>,
    }}
  />
);
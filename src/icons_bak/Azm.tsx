import { IconBase, IconProps } from "../IconBase";

export const Azm = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M400-40v-360H40l400-400h360v360L400-40Zm240-353 80-80v-247H473l-80 80h247v247ZM480-233l80-80v-247H313l-80 80h247v247Z"/></>,
      filled: <><path d="m640-280 160-160v-360H440L280-640h360v360ZM400-40l160-160v-360H200L40-400h360v360Z"/></>,
    }}
  />
);
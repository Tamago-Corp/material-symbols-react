import { IconBase, IconProps } from "../IconBase";

export const Quickreply = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v240h-80v-240H160v525l46-45h394v80H240L80-80Zm80-240v-480 480ZM760-40v-200h-80v-240h200l-68 160h88L760-40Z"/></>,
      filled: <><path d="M760-40v-200h-80v-240h200l-68 160h88L760-40ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v240H600v320H240L80-80Z"/></>,
    }}
  />
);
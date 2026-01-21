import { IconBase, IconProps } from "../IconBase";

export const Altitude = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M720-480v-168l-64 64-56-56 160-160 160 160-56 57-64-64v167h-80ZM40-80l240-320 180 240h300L560-426 460-294l-50-66 150-200L920-80H40Zm420-80Z"/></>,
      filled: <><path d="M720-480v-168l-64 64-56-56 160-160 160 160-56 57-64-64v167h-80ZM40-80l240-320 180 240 64-48-114-152 150-200L920-80H40Z"/></>,
    }}
  />
);
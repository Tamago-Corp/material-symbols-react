import { IconBase, IconProps } from "../IconBase";

export const Bolt = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></>,
      filled: <><path d="m320-80 40-280H160l360-520h80l-40 320h240L400-80h-80Z"/></>,
    }}
  />
);
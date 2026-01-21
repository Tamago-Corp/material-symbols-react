import { IconBase, IconProps } from "../IconBase";

export const Navigation = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="m200-120-40-40 320-720 320 720-40 40-280-120-280 120Zm84-124 196-84 196 84-196-440-196 440Zm196-84Z"/></>,
      filled: <><path d="m200-120-40-40 320-720 320 720-40 40-280-120-280 120Z"/></>,
    }}
  />
);
import { IconBase, IconProps } from "../IconBase";

export const Resume = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M240-240v-480h80v480h-80Zm160 0 400-240-400-240v480Zm80-141v-198l165 99-165 99Zm0-99Z"/></>,
      filled: <><path d="M240-240v-480h80v480h-80Zm160 0 400-240-400-240v480Z"/></>,
    }}
  />
);
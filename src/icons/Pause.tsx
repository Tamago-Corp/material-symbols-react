import { IconBase, IconProps } from "../IconBase";

export const Pause = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/></>,
      filled: <><path d="M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z"/></>,
    }}
  />
);
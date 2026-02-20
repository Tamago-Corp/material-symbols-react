import { IconBase, IconProps } from "../IconBase";

export const Segment = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M360-240v-80h480v80H360Zm0-200v-80h480v80H360ZM120-640v-80h720v80H120Z"/></>,
      filled: <><path d="M360-240v-80h480v80H360Zm0-200v-80h480v80H360ZM120-640v-80h720v80H120Z"/></>,
    }}
  />
);
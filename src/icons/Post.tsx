import { IconBase, IconProps } from "../IconBase";

export const Post = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M120-120v-720h720v720H120Zm600-160H240v60h480v-60Zm-480-60h480v-60H240v60Zm0-140h480v-240H240v240Zm0 200v60-60Zm0-60v-60 60Zm0-140v-240 240Zm0 80v-80 80Zm0 120v-60 60Z"/></>,
      filled: <><path d="M120-120v-720h720v720H120Zm120-280h480v-80H240v80Zm0 120h480v-60H240v60Z"/></>,
    }}
  />
);
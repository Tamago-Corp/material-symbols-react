import { IconBase, IconProps } from "../IconBase";

export const Title = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M420-160v-520H200v-120h560v120H540v520H420Z"/></>,
      filled: <><path d="M420-160v-520H200v-120h560v120H540v520H420Z"/></>,
    }}
  />
);
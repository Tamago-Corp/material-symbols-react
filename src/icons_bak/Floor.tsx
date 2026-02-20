import { IconBase, IconProps } from "../IconBase";

export const Floor = (props: IconProps) => (
  <IconBase
    {...props}
    viewBox="0 -960 960 960"
    paths={{
      outlined: <><path d="M120-80v-80h140v-180h180v-180h180v-180h180v-140h80v220H700v180H520v180H340v180H120Z"/></>,
      filled: <><path d="M120-80v-80h140v-180h180v-180h180v-180h180v-140h80v220H700v180H520v180H340v180H120Z"/></>,
    }}
  />
);
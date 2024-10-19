import { JSX } from "solid-js";

interface ContainerProps {
  children?: JSX.Element;
}

const Container = ({ children }: ContainerProps) => (
  <main class="mx-auto px-8 lg:container">{children}</main>
);

export default Container;

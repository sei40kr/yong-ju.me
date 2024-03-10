import { JSX } from "solid-js";
import { A } from "@solidjs/router";

export const Nav = ({ }: {}) => (
  <nav class="sticky inset-x-0 top-0 bg-black py-4">
    <ul class="flex justify-center">
      <NavItem to="/projects">
        Projects
      </NavItem>
      <NavItem to="/skills">Skills</NavItem>
    </ul>
  </nav>
)
  ;

export const NavItem = ({
  children,
  to,
}: {
  children?: JSX.Element;
  to: string;
}) => (
  <li>
    <A href={to}
      inactiveClass="mx-2 rounded-full px-6 py-1 text-xl font-bold text-gray-500 hover:bg-gray-900 hover:text-gray-400"
      activeClass="mx-2 rounded-full bg-gray-800 px-6 py-1 text-xl font-bold text-white"
      end
    >
      {children}
    </A>
  </li>
);


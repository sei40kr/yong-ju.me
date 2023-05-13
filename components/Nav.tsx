import Link from "next/link";

export const Nav = ({ children }: { children: React.ReactNode }) => (
  <nav className="sticky inset-x-0 top-0 bg-black py-4">
    <ul className="flex justify-center">{children}</ul>
  </nav>
);

export const NavItem = ({
  active,
  children,
  to,
}: {
  active?: boolean;
  children: React.ReactNode;
  to: string;
}) => (
  <li>
    {active ? (
      <div className="mx-2 rounded-full bg-gray-800 px-6 py-1 text-xl font-bold text-white">
        {children}
      </div>
    ) : (
      <Link href={to} className="block">
        <div className="mx-2 rounded-full px-6 py-1 text-xl font-bold text-gray-500 hover:bg-gray-900 hover:text-gray-400">
          {children}
        </div>
      </Link>
    )}
  </li>
);

import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => (
  <main className="mx-auto px-8 lg:container">{children}</main>
);

export default Container;

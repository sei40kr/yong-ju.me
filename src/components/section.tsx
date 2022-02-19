import React, { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = (props: SectionProps) => (
  <section>
    <header className="items-center bg-black py-4 text-center text-white">
      <h2 className="text-2xl font-bold">{props.title}</h2>
    </header>
    <div>
      <main className="mx-auto px-8 lg:container">{props.children}</main>
    </div>
  </section>
);

export default Section;

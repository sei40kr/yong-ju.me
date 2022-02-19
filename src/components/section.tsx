import React, { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = (props: SectionProps) => (
  <section>
    <header className="h-16 bg-black text-white">
      <h2 className="text-center text-2xl font-bold leading-[64px]">
        {props.title}
      </h2>
    </header>
    <div>
      <main className="mx-auto w-[calc(100vw-64px)] max-w-screen-lg">
        {props.children}
      </main>
    </div>
  </section>
);

export default Section;

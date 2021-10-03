import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = (props: SectionProps) => (
  <section>
    <header
      css={{
        background: '#000',
        color: '#fff',
        height: '64px',
      }}
    >
      <h2
        css={{
          fontFamily: "'Noto Sans', sans-serif",
          fontSize: '24px',
          fontWeight: 700,
          lineHeight: '64px',
          textAlign: 'center',
        }}
      >
        {props.title}
      </h2>
    </header>
    <div>
      <main
        css={{
          margin: '0 auto',
          maxWidth: '1024px',
          width: 'calc(100vw - 64px)',
        }}
      >
        {props.children}
      </main>
    </div>
  </section>
);

export default Section;

import { JSX } from "solid-js";

interface SnsLinkListProps {
  children?: JSX.Element;
}

const SnsLinkList = ({ children }: SnsLinkListProps) => (
  <ul class="flex">{children}</ul>
);

interface SnsLinkItemProps {
  href: string;
  title: string;
  children?: JSX.Element;
}

const SnsLinkItem = ({ href, title, children }: SnsLinkItemProps) => (
  <li class="border-r border-white/30 px-4 font-montserrat text-sm last:border-r-0">
    <a
      href={href}
      title={title}
      class="uppercase text-white/60 hover:text-white hover:underline"
    >
      {children}
    </a>
  </li>
);

const Jumbotron = () => (
  <header
    role="banner"
    class="flex h-[480px] flex-col items-center justify-center bg-[#114488] bg-fixed"
    style={{ "background-image": `url("img/jumbotron-bg.png")` }}
  >
    <div class="mb-4">
      <img src="/img/avatar.png" class="h-32 w-32 rounded-full" />
    </div>
    <h1 class="mb-0.5">
      <span class="inline-block bg-white px-2 font-roboto-slab text-4xl">
        Seong Yong-ju
      </span>
    </h1>
    <p class="mb-4">
      <span class="inline-block bg-white px-2 font-roboto-slab text-2xl">
        Software Engineer/Systems Architect
      </span>
    </p>
    <section class="mb-8 text-center font-roboto-slab text-xl font-light text-white">
      <p>
        I&apos;ve been interested in developing an application since my
        childhood
        <br />
        and have extensive experience in engineering.
      </p>
    </section>
    <section>
      <SnsLinkList>
        <SnsLinkItem
          href="https://www.linkedin.com/in/sei40kr/"
          title="LinkedIn"
        >
          LinkedIn
        </SnsLinkItem>
        <SnsLinkItem href="https://github.com/sei40kr" title="GitHub">
          GitHub
        </SnsLinkItem>
        <SnsLinkItem href="https://leetcode.com/sei40kr/" title="LeetCode">
          LeetCode
        </SnsLinkItem>
        <SnsLinkItem href="https://atcoder.jp/users/sei40kr" title="AtCoder">
          AtCoder
        </SnsLinkItem>
      </SnsLinkList>
    </section>
  </header>
);

export default Jumbotron;

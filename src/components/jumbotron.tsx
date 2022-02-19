import React, { ReactNode } from "react";
import avatarImg from "../assets/img/avatar.png";
import bg from "../assets/img/jumbotron-bg.png";

const SnsLinkList = ({ children }: { children: ReactNode }) => (
  <ul className="flex">{children}</ul>
);

const SnsLinkItem = ({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: ReactNode;
}) => (
  <li className="border-r border-white/30 px-4 font-montserrat text-sm last:border-r-0">
    <a
      href={href}
      title={title}
      className="uppercase text-white/60 hover:text-white hover:underline"
    >
      {children}
    </a>
  </li>
);

const Jumbotron = () => (
  <header
    role="banner"
    className={`flex h-[480px] flex-col items-center justify-center bg-[#114488] bg-fixed`}
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="mb-4">
      <img src={avatarImg} className="h-32 w-32 rounded-full" />
    </div>
    <h1 className="mb-0.5">
      <span className="inline-block bg-white px-2 font-roboto-slab text-4xl">
        Seong Yong-ju
      </span>
    </h1>
    <p className="mb-4">
      <span className="inline-block bg-white px-2 font-roboto-slab text-2xl">
        Software Engineer/Systems Architect
      </span>
    </p>
    <section className="mb-8 text-center font-roboto-slab text-xl font-light text-white">
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

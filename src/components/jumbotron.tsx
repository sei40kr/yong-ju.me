import bg from "../assets/img/jumbotron-bg.png";
import avatarImg from "../assets/img/avatar.png";

const Jumbotron = () => (
  <header
    role="banner"
    css={{
      alignItems: "center",
      background: `fixed #114488 url(${bg})`,
      display: "flex",
      flexDirection: "column",
      height: "480px",
      justifyContent: "center",
    }}
  >
    <div
      css={{
        margin: "0 0 16px 0",
      }}
    >
      <img
        src={avatarImg}
        width="128"
        height="128"
        css={{
          borderRadius: "100%",
        }}
      />
    </div>
    <h1
      css={{
        margin: "0 0 2px 0",
      }}
    >
      <span
        css={{
          background: "#fff",
          display: "inline-block",
          fontFamily: "'Roboto Slab', serif",
          fontSize: "40px",
          padding: "0 8px",
        }}
      >
        Seong Yong-ju
      </span>
    </h1>
    <p
      css={{
        margin: "0 0 16px 0",
      }}
    >
      <span
        css={{
          background: "#fff",
          display: "inline-block",
          fontFamily: "'Roboto Slab', serif",
          fontSize: "24px",
          padding: "0 8px",
        }}
      >
        Software Engineer/Systems Architect
      </span>
    </p>
    <section
      css={{
        color: "#fff",
        fontFamily: "'Roboto Slab', serif",
        fontSize: "20px",
        fontWeight: "300",
        margin: "0 0 32px 0",
        textAlign: "center",
      }}
    >
      <p>
        I&apos;ve been interested in developing an application since my
        childhood
        <br />
        and have extensive experience in engineering.
      </p>
    </section>
    <section>
      <ul css={{ display: "flex" }}>
        <li
          css={{
            borderRight: "1px solid rgba(255, 255, 255, 0.3)",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "14px",
            padding: "0 16px",
          }}
        >
          <a
            href="https://www.linkedin.com/in/sei40kr/"
            title="LinkedIn"
            css={{
              color: "rgba(255, 255, 255, 0.6)",
              textDecoration: "none",
              textTransform: "uppercase",
              "&:hover": {
                color: "#fff",
                textDecoration: "underline",
              },
            }}
          >
            LinkedIn
          </a>
        </li>
        <li
          css={{
            borderRight: "1px solid rgba(255, 255, 255, 0.3)",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "14px",
            padding: "0 16px",
          }}
        >
          <a
            href="https://github.com/sei40kr"
            title="GitHub"
            css={{
              color: "rgba(255, 255, 255, 0.6)",
              textDecoration: "none",
              textTransform: "uppercase",
              "&:hover": {
                color: "#fff",
                textDecoration: "underline",
              },
            }}
          >
            GitHub
          </a>
        </li>
        <li
          css={{
            borderRight: "1px solid rgba(255, 255, 255, 0.3)",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "14px",
            padding: "0 16px",
          }}
        >
          <a
            href="https://leetcode.com/sei40kr/"
            title="LeetCode"
            css={{
              "&:hover": {
                color: "#fff",
                textDecoration: "underline",
              },
              color: "rgba(255, 255, 255, 0.6)",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            LeetCode
          </a>
        </li>
        <li
          css={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "14px",
            padding: "0 16px",
          }}
        >
          <a
            href="https://atcoder.jp/users/sei40kr"
            title="AtCoder"
            css={{
              color: "rgba(255, 255, 255, 0.6)",
              textDecoration: "none",
              textTransform: "uppercase",
              "&:hover": {
                color: "#fff",
                textDecoration: "underline",
              },
            }}
          >
            AtCoder
          </a>
        </li>
      </ul>
    </section>
  </header>
);

export default Jumbotron;

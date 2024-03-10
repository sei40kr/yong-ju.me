import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import "./app.css";
import Jumbotron from "./components/jumbotron";
import { Nav } from "./components/nav";
import { Link, MetaProvider, Title } from "@solidjs/meta";

export default function App() {
  return (
    <>
      <MetaProvider>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans:wght@400;700&family=Roboto+Slab:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <Title>Seong Yong-ju | Software Engineer/Systems Architect</Title>
        <Jumbotron />
        <Router
          root={props => (
            <>
              <Nav />
              <Suspense>{props.children}</Suspense>
            </>
          )}
        >
          <FileRoutes />
        </Router>
      </MetaProvider>
    </>
  );
}

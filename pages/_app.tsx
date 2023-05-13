import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";
import Jumbotron from "@/components/Jumbotron";
import "@/styles/globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const App = ({ Component, pageProps }: AppProps) => (
  <div className={notoSans.className}>
    <Jumbotron />
    <Component {...pageProps} />
  </div>
);

export default App;

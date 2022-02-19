import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";

const DefaultLayout = ({
  siteName,
  children,
}: {
  siteName: string;
  children: ReactNode;
}) => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans:wght@400;700&family=Roboto+Slab:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <title>{siteName}</title>
    </Helmet>
    {children}
  </>
);

export default DefaultLayout;

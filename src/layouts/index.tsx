import * as React from 'react';
import { ReactNode } from 'react';
import Helmet from 'react-helmet';

import './index.scss';

export interface IProps {
  data: {
    site: {
      siteMetadata: {
        siteUrl: string;
        title: string;
        description: string;
        keywords: string[];
      };
    };
  };
  children: () => ReactNode;
}

const DefaultLayout = (props: IProps) => (
  <main role="main">
    <Helmet
      title={props.data.site.siteMetadata.title}
      meta={[
        {
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
          name: 'viewport',
        },
        {
          content: props.data.site.siteMetadata.keywords.join(','),
          name: 'keywords',
        },
        {
          content: props.data.site.siteMetadata.description,
          name: 'description',
        },
      ]}
    />
    {props.children()}
  </main>
);

export default DefaultLayout;

export const layoutQuery = graphql`
  query DefaultLayoutQuery {
    site {
      siteMetadata {
        siteUrl
        title
        keywords
        description
      }
    }
  }
`;

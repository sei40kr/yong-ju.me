import * as React from 'react';

import './index.scss';

export interface IProps {
  copyrightYears: string;
  copyrighter: string;
}

const Footer = (props: IProps) => (
  <footer className="p-3 text-center orig-footer">
    <p className="text-secondary orig-footer__copyright-text">
      &copy; {props.copyrightYears} {props.copyrighter}.
    </p>
  </footer>
);

export default Footer;

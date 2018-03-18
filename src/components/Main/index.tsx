import * as React from 'react';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
}

const Main = (props: IProps) => <main role="main">{props.children}</main>;

export default Main;

import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Jumbotron from '../src/components/jumbotron';

storiesOf('Jumbotron', module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo())
  .addParameters({
    info: { inline: true },
  })
  .add('default', () => <Jumbotron />);

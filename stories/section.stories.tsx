import { checkA11y } from '@storybook/addon-a11y';
import withBackgrounds from '@storybook/addon-backgrounds';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Section from '../src/components/section';

storiesOf('Section', module)
  .addDecorator(checkA11y)
  .addDecorator(withBackgrounds([{ name: 'gray', value: '#f5f5f5' }]))
  .addDecorator(withInfo())
  .addParameters({
    info: { inline: true },
  })
  .add('default', () => <Section title="Section Title">section content</Section>);

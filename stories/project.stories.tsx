import { checkA11y } from '@storybook/addon-a11y';
import withBackgrounds from '@storybook/addon-backgrounds';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Project from '../src/components/project';

const renderProjectWithContainer = (
  startYYYYMM: string,
  endYYYYMM: string | null,
  themeColor: string
) => (
  <div style={{ maxWidth: '1024px', padding: '0 32px', margin: '0 auto' }}>
    <Project
      startYYYYMM={startYYYYMM}
      endYYYYMM={endYYYYMM}
      name="Project"
      company="Company"
      workRole="Role"
      themeColor={themeColor}
      description="project description"
      accomplishments={['accomplishment 1', 'accomplishment 2', 'accomplishment 3']}
    />
  </div>
);

storiesOf('Project', module)
  .addDecorator(checkA11y)
  .addDecorator(withBackgrounds([{ name: 'gray', value: '#f5f5f5' }]))
  .addDecorator(withInfo())
  .addParameters({
    info: { inline: true },
  })
  .add('wap theme', () =>
    renderProjectWithContainer('201604', '201704', '#20334c')
  )
  .add('ts theme', () =>
    renderProjectWithContainer('201709', '201806', '#107cad')
  )
  .add('pega theme & working', () =>
    renderProjectWithContainer('201807', null, '#15183f')
  );

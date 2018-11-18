import { checkA11y } from '@storybook/addon-a11y';
import withBackgrounds from '@storybook/addon-backgrounds';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Skill from '../src/components/skill';

const renderSkillWithContainer = (
  progress: 'beginner' | 'intermediate' | 'advanced'
) => (
  <div style={{ maxWidth: '1024px', padding: '0 32px', margin: '0 auto' }}>
    <Skill
      name="Skill"
      progress={progress}
      abilities={['ability 1', 'ability 2', 'ability 3']}
      experiences={['experience 1', 'experience 2', 'experience 3']}
    />
  </div>
);

storiesOf('Skill', module)
  .addDecorator(checkA11y)
  .addDecorator(withBackgrounds([{ name: 'gray', value: '#f5f5f5' }]))
  .addDecorator(withInfo())
  .addParameters({
    info: { inline: true },
  })
  .add('beginner', () => renderSkillWithContainer('beginner'))
  .add('intermediate', () => renderSkillWithContainer('intermediate'))
  .add('advanced', () => renderSkillWithContainer('advanced'));

import React from 'react'
import { storiesOf } from '@storybook/react'

import IconButton from './'
import Icons from '../icons'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Actions/IconButton', module)
  .add('Default', () => (
    <Wrapper>
      <Separator>
        <IconButton>
          <Icons.plus />
        </IconButton>
      </Separator>
      <Separator>
        <IconButton variant={IconButton.variant.Destructive}>
          <Icons.minus />
        </IconButton>
      </Separator>
    </Wrapper>
  ))
  .add('Disabled', () => (
    <Wrapper>
      <Separator>
        <IconButton disabled>
          <Icons.plus />
        </IconButton>
      </Separator>
      <Separator>
        <IconButton disabled variant={IconButton.variant.Destructive}>
          <Icons.minus />
        </IconButton>
      </Separator>
    </Wrapper>
  ))

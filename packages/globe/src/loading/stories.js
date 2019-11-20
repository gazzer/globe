import React from 'react'
import { storiesOf } from '@storybook/react'

import Loading from './'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Indicators/Loading', module).add('Default', () => (
  <Wrapper>
    <Separator>
      <Loading />
    </Separator>
    <Separator>
      <Loading size={7} />
    </Separator>
    <Separator>
      <Loading size={9} />
    </Separator>
  </Wrapper>
))

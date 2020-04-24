import React from 'react'
import { storiesOf } from '@storybook/react'

import Box from './'

import Wrapper from '../../../stories/Wrapper'
import Separator from '../../../stories/Separator'

storiesOf('Layout/Box', module).add('Default', () => (
  <Wrapper>
    <Separator>
      <Box padding={2} space={2}>
        <Box padding={25} extend={{ backgroundColor: 'red' }} />
        <Box padding={25} extend={{ backgroundColor: 'red' }} />
      </Box>
    </Separator>
  </Wrapper>
))

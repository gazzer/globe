import React from 'react'
import { storiesOf } from '@storybook/react'

import ScrollView from './'
import Box from '../box'

import Wrapper from '../../../stories/Wrapper'
import Separator from '../../../stories/Separator'

storiesOf('Layout/ScrollView', module).add('Default', () => (
  <Wrapper>
    <Separator>
      <ScrollView extend={{ height: 300, border: '5px solid black' }}>
        <Box padding={2} space={2}>
          <Box padding={25} extend={{ backgroundColor: 'red' }} />
          <Box padding={25} extend={{ backgroundColor: 'blue' }} />
          <Box padding={25} extend={{ backgroundColor: 'green' }} />
          <Box padding={25} extend={{ backgroundColor: 'black' }} />
          <Box padding={25} extend={{ backgroundColor: 'orange' }} />
          <Box padding={25} extend={{ backgroundColor: 'purple' }} />
        </Box>
      </ScrollView>
    </Separator>
  </Wrapper>
))

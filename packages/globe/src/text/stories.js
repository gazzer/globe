import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Text from './'
import BaselineGrid from './BaselineGrid'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Core/Text', module).add('Default', () => (
  <Wrapper>
    <BaselineGrid />
    <Text intent="title">Title</Text>
    <Text intent="subtitle">Subtitle</Text>
    <Text intent="category">Category</Text>
    <Text intent="body">Body Text</Text>
    <Text>Default Text</Text>
    <Text intent="label">Label Text</Text>
    <Text intent="note">Note Text</Text>
    <Text intent="note" variant="info">
      Note Text
    </Text>
  </Wrapper>
))

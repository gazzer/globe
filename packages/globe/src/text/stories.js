import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Text from './'
import BaselineGrid from './BaselineGrid'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Core/Text', module).add('Default', () => (
  <Wrapper>
    <BaselineGrid />
    <Text variant="title">Title</Text>
    <Text variant="subtitle">Subtitle</Text>
    <Text variant="category">Category</Text>
    <Text variant="body">Body Text</Text>
    <Text>Default Text</Text>
    <Text variant="label">Label Text</Text>
    <Text variant="label" intent="info">
      Label Info
    </Text>
  </Wrapper>
))

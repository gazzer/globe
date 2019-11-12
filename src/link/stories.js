import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Link from './'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Actions/Link', module).add('Default', () => (
  <Wrapper>
    <Link href="/test">Clickable Link</Link>{' '}
    <Link disabled href="/test">
      Disabled Link
    </Link>
  </Wrapper>
))

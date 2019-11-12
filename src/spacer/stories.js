import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Spacer from './'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Layout/Spacer', module).add('Default', () => (
  <Wrapper>
    <div style={{ paddingLeft: 10 }}>
      <div
        style={{
          width: 80,
          height: 80,
          backgroundColor: 'rgb(180, 180, 180)',
        }}>
        0
      </div>
      <Spacer size={4} />
      <div
        style={{
          width: 80,
          height: 80,
          backgroundColor: 'rgb(180, 180, 180)',
        }}>
        4
      </div>
      <Spacer size={8} />
      <div
        style={{
          width: 80,
          height: 80,
          backgroundColor: 'rgb(180, 180, 180)',
        }}>
        8
      </div>
      <Spacer size={16} />
      <div
        style={{
          width: 80,
          height: 80,
          backgroundColor: 'rgb(180, 180, 180)',
        }}>
        16
      </div>
      <Spacer size={32} />
      <div
        style={{
          width: 80,
          height: 80,
          backgroundColor: 'rgb(180, 180, 180)',
        }}>
        32
      </div>
    </div>
  </Wrapper>
))

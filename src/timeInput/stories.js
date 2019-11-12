import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import TimeInput from './'
import Label from '../label'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Forms/TimeInput', module)
  .add('Default', () => {
    const TimeInputWithValue = () => {
      const [value, setValue] = useState(_ => ({}))

      return (
        <Wrapper>
          <Separator>
            <TimeInput name="startTime" value={value} onChange={setValue} />
          </Separator>
        </Wrapper>
      )
    }

    return <TimeInputWithValue />
  })

  .add('Labeled', () => {
    const TimeInputWithValue = () => {
      const [value, setValue] = useState(_ => ({}))
      return (
        <Wrapper>
          <Separator>
            <Label htmlFor="startTime">Start Time:</Label>
            <TimeInput name="startTime" value={value} onChange={setValue} />
          </Separator>
        </Wrapper>
      )
    }

    return <TimeInputWithValue />
  })

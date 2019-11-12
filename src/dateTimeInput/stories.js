import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import DateTimeInput from './'
import Label from '../label'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Forms/DateTimeInput', module)
  .add('Default', () => {
    const DateTimeInputWithValue = () => {
      const [value, setValue] = useState()

      return (
        <Wrapper>
          <Separator>
            <DateTimeInput
              name="startDateTime"
              value={value}
              onChange={setValue}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <DateTimeInputWithValue />
  })

  .add('Labeled', () => {
    const DateTimeInputWithValue = () => {
      const [value, setValue] = useState({})

      return (
        <Wrapper>
          <Separator>
            <Label htmlFor="startDateTime">Start Date Time:</Label>
            <DateTimeInput
              name="startDateTime"
              value={value}
              onChange={setValue}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <DateTimeInputWithValue />
  })

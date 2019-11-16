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
            <TimeInput
              label="Start Time"
              name="startTime"
              value={value}
              onChange={setValue}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <TimeInputWithValue />
  })

  .add('Disabled', () => (
    <Wrapper>
      <Separator>
        <TimeInput
          disabled
          label="Start Time"
          name="startTime"
          value={[20, 30]}
        />
      </Separator>
    </Wrapper>
  ))
  .add('Validation', () => {
    const TimeInputWithValue = () => {
      const [value, setValue] = useState({})
      const [isValid, setValid] = useState(false)

      return (
        <Wrapper>
          <Separator>
            <TimeInput
              label="Start Time"
              name="startTime"
              value={value}
              isValid={isValid}
              onChange={newVal => {
                setValue(newVal)
                setValid(newVal.filter(val => val !== undefined).length === 2)
              }}
              error={isValid ? null : 'Please enter a start time.'}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <TimeInputWithValue />
  })

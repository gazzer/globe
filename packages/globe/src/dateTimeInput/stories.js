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
            <DateTimeInput
              label="Start Date Time"
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

  .add('Disabled', () => (
    <Wrapper>
      <Separator>
        <DateTimeInput
          value={[2019, 10, 20, 10, 30]}
          disabled
          label="Start Date Time"
          name="startDateTime"
        />
      </Separator>
    </Wrapper>
  ))

  .add('Validation', () => {
    const DateTimeInputWithValue = () => {
      const [value, setValue] = useState({})
      const [isValid, setValid] = useState(false)

      return (
        <Wrapper>
          <Separator>
            <DateTimeInput
              label="Start Date Time"
              name="startDateTime"
              isValid={isValid}
              error={isValid ? null : 'Please enter a valid start date.'}
              value={value}
              onChange={newVal => {
                setValue(newVal)
                setValid(newVal.filter(val => val !== undefined).length === 5)
              }}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <DateTimeInputWithValue />
  })

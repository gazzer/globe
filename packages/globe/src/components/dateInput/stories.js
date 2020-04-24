import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import DateInput from './'
import Label from '../label'

import Wrapper from '../../../stories/Wrapper'
import Separator from '../../../stories/Separator'

storiesOf('Forms/DateInput', module)
  .add('Default', () => {
    const DateInputWithValue = () => {
      const [value, setValue] = useState({})

      return (
        <Wrapper>
          <Separator>
            <DateInput name="birthdate" value={value} onChange={setValue} />
          </Separator>
        </Wrapper>
      )
    }

    return <DateInputWithValue />
  })

  .add('Labeled', () => {
    const DateInputWithValue = () => {
      const [value, setValue] = useState({})

      return (
        <Wrapper>
          <Separator>
            <DateInput
              label="Birthday"
              name="birthdate"
              value={value}
              onChange={setValue}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <DateInputWithValue />
  })

  .add('Disabled', () => (
    <Wrapper>
      <Separator>
        <DateInput
          disabled
          label="Birthday"
          name="birthdate"
          value={[1993, 8, 24]}
        />
      </Separator>
    </Wrapper>
  ))

  .add('Validation', () => {
    const DateInputWithValue = () => {
      const [value, setValue] = useState({})
      const [isValid, setValid] = useState(false)

      return (
        <Wrapper>
          <Separator>
            <DateInput
              label="Birthday"
              name="birthdate"
              value={value}
              isValid={isValid}
              error={isValid ? null : 'Please enter a valid birthday.'}
              onChange={newVal => {
                setValue(newVal)
                setValid(newVal.filter(val => val !== undefined).length === 3)
              }}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <DateInputWithValue />
  })

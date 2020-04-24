import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import DatePicker from './'
import Label from '../label'

import Wrapper from '../../../stories/Wrapper'
import Separator from '../../../stories/Separator'

storiesOf('Forms/DatePicker', module)
  .add('Default', () => {
    const DatePickerWithValue = () => {
      const [value, setValue] = useState()

      return (
        <Wrapper>
          <Separator>
            <DatePicker name="startdate" value={value} onChange={setValue} />
          </Separator>
        </Wrapper>
      )
    }

    return <DatePickerWithValue />
  })

  .add('Labeled', () => {
    const DatePickerWithValue = () => {
      const [value, setValue] = useState()

      return (
        <Wrapper>
          <Separator>
            <DatePicker
              label="Start Date"
              name="startdate"
              value={value}
              onChange={setValue}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <DatePickerWithValue />
  })

  .add('Disabled', () => (
    <Wrapper>
      <Separator>
        <DatePicker
          label="Start Date"
          value={[2019, 10, 20]}
          name="startdate"
          disabled
        />
      </Separator>
    </Wrapper>
  ))

  .add('Validation', () => {
    const DatePickerWithValue = () => {
      const [value, setValue] = useState()
      const [isValid, setValid] = useState(false)

      return (
        <Wrapper>
          <Separator>
            <DatePicker
              label="Start Date"
              name="startdate"
              isValid={isValid}
              error={isValid ? null : 'Please enter a valid start date.'}
              value={value}
              onChange={newVal => {
                setValue(newVal)
                setValid(newVal.filter(val => val !== undefined).length === 3)
              }}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <DatePickerWithValue />
  })

  .add('Fullscreen', () => {
    const DatePickerWithValue = () => {
      const [value, setValue] = useState()

      return (
        <Wrapper>
          <Separator>
            <DatePicker
              label="Start Date"
              withFullScreenPortal
              name="startdate"
              value={value}
              onChange={setValue}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <DatePickerWithValue />
  })

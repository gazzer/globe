import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import DatePicker from './'
import Label from '../label'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

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

  .add('Disabled', () => {
    const DatePickerWithValue = () => {
      const [value, setValue] = useState()

      return (
        <Wrapper>
          <Separator>
            <DatePicker
              name="startdate"
              disabled
              value={value}
              onChange={setValue}
            />
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
            <Label htmlFor="startdate">Start Date</Label>
            <DatePicker name="startdate" value={value} onChange={setValue} />
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
            <Label htmlFor="startdate">Start Date</Label>
            <DatePicker
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

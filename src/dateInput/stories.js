import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import DateInput from './'
import Label from '../label'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

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
            <Label htmlFor="birthdate">Birthday:</Label>
            <DateInput name="birthdate" value={value} onChange={setValue} />
          </Separator>
        </Wrapper>
      )
    }

    return <DateInputWithValue />
  })

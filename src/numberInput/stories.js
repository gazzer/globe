import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import NumberInput from './'
import Label from '../label'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Forms/NumberInput', module)
  .add('Default', () => {
    const NumberInputWithValue = () => {
      const [value, setValue] = useState()

      return (
        <Wrapper>
          <Separator>
            <NumberInput name="count" value={value} onChange={setValue} />
          </Separator>
        </Wrapper>
      )
    }

    return <NumberInputWithValue />
  })

  .add('Labeled', () => {
    const NumberInputWithValue = () => {
      const [value, setValue] = useState()

      return (
        <Wrapper>
          <Separator>
            <Label htmlFor="count">Number</Label>
            <NumberInput name="count" value={value} onChange={setValue} />
          </Separator>
        </Wrapper>
      )
    }

    return <NumberInputWithValue />
  })

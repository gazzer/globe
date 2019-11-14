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
            <NumberInput
              label="Number"
              name="count"
              value={value}
              onChange={setValue}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <NumberInputWithValue />
  })
  .add('Disabled', () => (
    <Wrapper>
      <Separator>
        <NumberInput disabled label="Number" name="count" value="25" />
      </Separator>
    </Wrapper>
  ))
  .add('Validation', () => {
    const NumberInputWithValue = () => {
      const [value, setValue] = useState(1)
      const [isValid, setValid] = useState(false)

      return (
        <Wrapper>
          <Separator>
            <NumberInput
              label="Number"
              name="count"
              value={value}
              onChange={newVal => {
                setValue(newVal)
                setValid(parseInt(newVal) % 2 === 0)
              }}
              error={isValid ? null : 'Please enter an even number.'}
              isValid={isValid}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <NumberInputWithValue />
  })

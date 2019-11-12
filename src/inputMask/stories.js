import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import InputMask from './'
import TextInput from '../textInput'
import LocationInput from '../locationInput'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Forms/InputMask', module)
  .add('Before', () => {
    const TextInputWithValue = () => {
      const [value, setValue] = useState('')

      return (
        <TextInput
          value={value}
          onChange={setValue}
          placeholder="Type some text..."
        />
      )
    }

    return (
      <Wrapper>
        <Separator>
          <InputMask mask="https://example.com/">
            <TextInputWithValue />
          </InputMask>
        </Separator>
      </Wrapper>
    )
  })
  .add('After', () => {
    const TextInputWithValue = () => {
      const [value, setValue] = useState('')

      return (
        <TextInput
          value={value}
          onChange={setValue}
          style={{ textAlign: 'right' }}
          placeholder="Type some text..."
        />
      )
    }

    return (
      <Wrapper>
        <Separator>
          <InputMask mask=",00 €" position={InputMask.position.After}>
            <TextInputWithValue />
          </InputMask>
        </Separator>
      </Wrapper>
    )
  })

  .add('Location', () => {
    const TextInputWithValue = () => {
      const [value, setValue] = useState('')

      return (
        <LocationInput
          value={value}
          onChange={setValue}
          placeholder="Address..."
        />
      )
    }

    return (
      <Wrapper>
        <Separator>
          <InputMask mask="City">
            <TextInputWithValue />
          </InputMask>
        </Separator>
      </Wrapper>
    )
  })

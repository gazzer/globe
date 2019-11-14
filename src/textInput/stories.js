import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import TextInput from './'
import Label from '../label'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Forms/TextInput', module)
  .add('Default', () => {
    const TextInputWithValue = () => {
      const [value, setValue] = useState('')
      const [pw, setPw] = useState('')

      return (
        <Wrapper>
          <Separator>
            <TextInput
              value={value}
              onChange={setValue}
              placeholder="Type some text..."
            />
          </Separator>
          <Separator>
            <TextInput
              value={pw}
              onChange={setPw}
              type="password"
              placeholder="Type a password..."
            />
          </Separator>
        </Wrapper>
      )
    }

    return <TextInputWithValue />
  })

  .add('Min/max', () => {
    const TextInputWithValue = () => {
      const [value, setValue] = useState('')
      const [value2, setValue2] = useState('')

      return (
        <Wrapper>
          <Separator>
            <TextInput
              minLength={10}
              value={value}
              onChange={setValue}
              placeholder="Type some text..."
            />
          </Separator>
          <Separator>
            <TextInput
              maxLength={10}
              value={value2}
              onChange={setValue2}
              placeholder="Type some text..."
            />
          </Separator>
        </Wrapper>
      )
    }

    return <TextInputWithValue />
  })
  .add('Labeled', () => {
    const TextInputWithValue = () => {
      const [value, setValue] = useState('')
      const [pw, setPw] = useState('')

      return (
        <Wrapper>
          <Separator>
            <TextInput
              value={value}
              onChange={setValue}
              name="email"
              label="E-Mail"
              placeholder="e.g. max@mustermann.de"
            />
          </Separator>
          <Separator>
            <TextInput
              name="password"
              type="password"
              label="Password"
              value={pw}
              onChange={setPw}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <TextInputWithValue />
  })

  .add('Disabled', () => (
    <Wrapper>
      <Separator>
        <TextInput
          disabled
          value="foo@bar.de"
          name="email"
          label="E-Mail"
          placeholder="e.g. max@mustermann.de"
        />
      </Separator>
      <Separator>
        <TextInput disabled name="password" type="password" label="Password" />
      </Separator>
    </Wrapper>
  ))

  .add('Validation', () => {
    const TextInputWithValue = () => {
      const [value, setValue] = useState('')
      const [isValid, setValid] = useState(true)
      const [pw, setPw] = useState('')

      useEffect(() => {
        if (value.length > 0 && parseInt(value) != value) {
          setValid(false)
        } else {
          setValid(true)
        }
      }, [value])

      return (
        <Wrapper>
          <Separator>
            <TextInput
              type="text"
              isValid={isValid}
              value={value}
              onChange={setValue}
              placeholder="1256"
              label="Numbers"
              minLength={5}
              error={isValid ? null : 'Only numbers are allowed!'}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <TextInputWithValue />
  })

  .add('Masked', () => {
    const TextInputWithValue = () => {
      const [value, setValue] = useState('')
      const [value2, setValue2] = useState('')
      const [value3, setValue3] = useState('')

      return (
        <Wrapper>
          <Separator>
            <TextInput
              value={value}
              onChange={setValue}
              maskStart="+49"
              name="phone"
              label="Phone Number"
            />
          </Separator>
          <Separator>
            <TextInput
              name="price"
              label="Price"
              value={value2}
              onChange={setValue2}
              maskEnd=",00 €"
            />
          </Separator>

          <Separator>
            <TextInput
              name="url"
              label="Login URL"
              value={value3}
              onChange={setValue3}
              maskStart="https://"
              maskEnd="/login"
            />
          </Separator>
        </Wrapper>
      )
    }

    return <TextInputWithValue />
  })

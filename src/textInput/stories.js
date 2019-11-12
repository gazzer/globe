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
  .add('Disabled', () => {
    const TextInputWithValue = () => {
      const [value, setValue] = useState('')
      const [pw, setPw] = useState('1234')

      return (
        <Wrapper>
          <Separator>
            <TextInput
              disabled
              value={value}
              onChange={setValue}
              placeholder="Type some text..."
            />
          </Separator>
          <Separator>
            <TextInput
              disabled
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
            <Label htmlFor="email">E-Mail:</Label>
            <TextInput
              value={value}
              onChange={setValue}
              placeholder="e.g. max@mustermann.de"
            />
          </Separator>
          <Separator>
            <Label htmlFor="password">Password:</Label>
            <TextInput
              name="password"
              type="password"
              value={pw}
              onChange={setPw}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <TextInputWithValue />
  })

  .add('Validation', () => {
    const TextInputWithValue = () => {
      const [value, setValue] = useState('')
      const [valueValid, setValueValid] = useState(true)
      const [pw, setPw] = useState('')

      useEffect(() => {
        if (value.length > 0 && parseInt(value) != value) {
          setValueValid(false)
        } else {
          setValueValid(true)
        }
      }, [value])

      return (
        <Wrapper>
          <Separator>
            <Label htmlFor="email">Number:</Label>
            <TextInput
              type="text"
              isValid={valueValid}
              value={value}
              onChange={setValue}
              placeholder="1256"
            />
          </Separator>
        </Wrapper>
      )
    }

    return <TextInputWithValue />
  })

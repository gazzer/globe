import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import MarkdownInput from './'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Forms/MarkdownInput', module)
  .add('Default', () => {
    const MarkdownInputWithValue = () => {
      const [value, setValue] = useState('')

      return (
        <Wrapper>
          <Separator>
            <MarkdownInput
              name="description"
              value={value}
              onChange={setValue}
              placeholder="Type some text..."
            />
          </Separator>
        </Wrapper>
      )
    }

    return <MarkdownInputWithValue />
  })

  .add('Labeled', () => {
    const MarkdownInputWithValue = () => {
      const [value, setValue] = useState('')

      return (
        <Wrapper>
          <Separator>
            <MarkdownInput
              name="description"
              label="Description"
              value={value}
              onChange={setValue}
              placeholder="Type some text..."
            />
          </Separator>
        </Wrapper>
      )
    }

    return <MarkdownInputWithValue />
  })

  .add('Validation', () => {
    const MarkdownInputWithValue = () => {
      const [value, setValue] = useState('')
      const [isValid, setValid] = useState(false)

      return (
        <Wrapper>
          <Separator>
            <MarkdownInput
              name="description"
              minLength={50}
              isValid={isValid}
              value={value}
              onChange={newVal => {
                setValue(newVal)
                setValid(newVal.length >= 50)
              }}
              label="Description"
              error={isValid ? null : 'Type at least 50 chars.'}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <MarkdownInputWithValue />
  })

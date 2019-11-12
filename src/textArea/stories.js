import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import TextArea from './'
import Label from '../label'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Forms/TextArea', module)
  .add('Default', () => {
    const TextAreaWithValue = () => {
      const [value, setValue] = useState('')

      return (
        <Wrapper>
          <Separator>
            <TextArea
              name="description"
              value={value}
              onChange={setValue}
              placeholder="Type some text..."
            />
          </Separator>
        </Wrapper>
      )
    }

    return <TextAreaWithValue />
  })
  .add('Disabled', () => {
    const TextAreaWithValue = () => {
      const [value, setValue] = useState('')

      return (
        <Wrapper>
          <Separator>
            <TextArea
              disabled
              name="description"
              value={value}
              onChange={setValue}
              placeholder="Type some text..."
            />
          </Separator>
        </Wrapper>
      )
    }

    return <TextAreaWithValue />
  })
  .add('Min/max', () => {
    const TextInputWithValue = () => {
      const [value, setValue] = useState('')
      const [value2, setValue2] = useState('')

      return (
        <Wrapper>
          <Separator>
            <TextArea
              minLength={10}
              name="description"
              value={value}
              onChange={setValue}
              placeholder="Type some text..."
            />
          </Separator>
          <Separator>
            <TextArea
              maxLength={10}
              name="description2"
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
    const TextAreaWithValue = () => {
      const [value, setValue] = useState('')

      return (
        <Wrapper>
          <Separator>
            <Label htmlFor="description">Description:</Label>
            <TextArea name="description" value={value} onChange={setValue} />
          </Separator>
        </Wrapper>
      )
    }

    return <TextAreaWithValue />
  })

  .add('Validation', () => {
    const TextAreaWithValue = () => {
      const [value, setValue] = useState('')
      return (
        <Wrapper>
          <Separator>
            <Label htmlFor="description">Description</Label>
            <TextArea
              name="description"
              minLength={50}
              isValid={value.length >= 50}
              value={value}
              onChange={setValue}
              placeholder="Type at least 50 chars"
            />
          </Separator>
        </Wrapper>
      )
    }

    return <TextAreaWithValue />
  })

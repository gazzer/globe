import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Radio from './'
import Label from '../label'

import Wrapper from '../../../stories/Wrapper'
import Separator from '../../../stories/Separator'

storiesOf('Forms/Radio', module)
  .add('Default', () => {
    const InputWithValue = () => {
      const [value, setValue] = useState('')

      return (
        <Wrapper>
          <Separator>
            <Radio
              value="male"
              name="gender"
              checked={value === 'male'}
              onChange={setValue}
            />
          </Separator>
          <Separator>
            <Radio
              value="female"
              name="gender"
              checked={value === 'female'}
              onChange={setValue}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <InputWithValue />
  })
  .add('Labeled', () => {
    const InputWithValue = () => {
      const [value, setValue] = useState('one')

      return (
        <Wrapper>
          <Separator>
            <Radio
              value="one"
              name="choose"
              checked={value === 'one'}
              onChange={setValue}
              label="One"
            />
          </Separator>
          <Separator>
            <Radio
              value="two"
              name="choose"
              checked={value === 'two'}
              onChange={setValue}
              label="Two"
            />
          </Separator>
          <Separator>
            <Radio
              value="three"
              name="choose"
              checked={value === 'three'}
              onChange={setValue}
              label="Three"
            />
          </Separator>
        </Wrapper>
      )
    }

    return <InputWithValue />
  })
  .add('Disabled', () => (
    <Wrapper>
      <Separator>
        <Radio label="One" disabled checked={true} />
      </Separator>
      <Separator>
        <Radio label="Two" disabled checked={false} />
      </Separator>
    </Wrapper>
  ))

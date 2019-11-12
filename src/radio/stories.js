import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Radio from './'
import Label from '../label'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

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
  .add('Disabled', () => (
    <Wrapper>
      <Separator>
        <Radio disabled checked={true} />
      </Separator>
      <Separator>
        <Radio disabled checked={false} />
      </Separator>
    </Wrapper>
  ))
  .add('Labeled', () => {
    const InputWithValue = () => {
      const [value, setValue] = useState('male')

      return (
        <Wrapper>
          <Separator style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Radio
              value="male"
              name="gender"
              checked={value === 'male'}
              onChange={setValue}
            />
            <Label pointer htmlFor="gender-male">
              Male
            </Label>
          </Separator>
          <Separator style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Radio
              value="female"
              name="gender"
              checked={value === 'female'}
              onChange={setValue}
            />
            <Label pointer htmlFor="gender-female">
              Female
            </Label>
          </Separator>
          <Separator style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Radio
              value="other"
              name="gender"
              checked={value === 'other'}
              onChange={setValue}
            />
            <Label pointer htmlFor="gender-other">
              Other
            </Label>
          </Separator>
        </Wrapper>
      )
    }

    return <InputWithValue />
  })

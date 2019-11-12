import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Toggle from './'
import Label from '../label'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Forms/Toggle', module)
  .add('Default', () => {
    const InputWithValue = () => {
      const [value, setValue] = useState(false)

      return (
        <Wrapper>
          <Separator>
            <Toggle checked={value} onChange={setValue} />
          </Separator>
        </Wrapper>
      )
    }

    return <InputWithValue />
  })
  .add('Disabled', () => (
    <Wrapper>
      <Separator>
        <Toggle disabled checked={true} />
      </Separator>
      <Separator>
        <Toggle disabled checked={false} />
      </Separator>
    </Wrapper>
  ))
  .add('Labeled', () => {
    const InputWithValue = () => {
      const [value, setValue] = useState(true)
      const [value2, setValue2] = useState(false)

      return (
        <Wrapper>
          <Separator style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Toggle name="motion" checked={value} onChange={setValue} />
            <Label pointer htmlFor="motion">
              Reduce Motion
            </Label>
          </Separator>
          <Separator style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Toggle name="dark" checked={value2} onChange={setValue2} />
            <Label pointer htmlFor="dark">
              Dark Mode
            </Label>
          </Separator>
        </Wrapper>
      )
    }

    return <InputWithValue />
  })

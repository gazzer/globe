import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Toggle from './'
import Label from '../label'

import Wrapper from '../../../stories/Wrapper'
import Separator from '../../../stories/Separator'

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

  .add('Labeled', () => {
    const InputWithValue = () => {
      const [value, setValue] = useState(true)
      const [value2, setValue2] = useState(false)

      return (
        <Wrapper>
          <Separator>
            <Toggle
              name="motion"
              checked={value}
              onChange={setValue}
              label="Reduce Motion"
            />
          </Separator>
          <Separator>
            <Toggle
              name="dark"
              checked={value2}
              onChange={setValue2}
              label="Dark Mode"
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
        <Toggle label="Reduce Motion" disabled checked={true} />
      </Separator>
      <Separator>
        <Toggle label="Dark Mode" disabled checked={false} />
      </Separator>
    </Wrapper>
  ))

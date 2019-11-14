import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Checkbox from './'
import Label from '../label'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Forms/Checkbox', module)
  .add('Default', () => {
    const InputWithValue = () => {
      const [value, setValue] = useState(false)

      return (
        <Wrapper>
          <Separator>
            <Checkbox checked={value} onChange={() => setValue(!value)} />
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
            <Checkbox
              name="agb"
              checked={value}
              onChange={() => setValue(!value)}
              label="Accept AGB"
            />
          </Separator>
          <Separator>
            <Checkbox
              name="newsletter"
              checked={value2}
              onChange={() => setValue2(!value2)}
              label="Subscribe Newsletter"
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
        <Checkbox label="Accept AGB" disabled checked={true} />
      </Separator>
      <Separator>
        <Checkbox label="Subscribe Newsletter" disabled checked={false} />
      </Separator>
    </Wrapper>
  ))
  .add('Validation', () => {
    const InputWithValue = () => {
      const [value, setValue] = useState(false)

      return (
        <Wrapper>
          <Separator>
            <Checkbox
              name="agb"
              checked={value}
              onChange={() => setValue(!value)}
              label="Accept AGB"
              error={!value ? 'You need to accept the AGBs.' : null}
              isValid={value}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <InputWithValue />
  })

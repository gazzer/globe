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
  .add('Disabled', () => (
    <Wrapper>
      <Separator>
        <Checkbox disabled checked={true} />
      </Separator>
      <Separator>
        <Checkbox disabled checked={false} />
      </Separator>
    </Wrapper>
  ))
  .add('Labeled', () => {
    const InputWithValue = () => {
      const [value, setValue] = useState(true)
      const [value2, setValue2] = useState(false)
      const ref = React.useRef()

      return (
        <Wrapper>
          <Separator style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox
              ref={ref}
              name="agb"
              checked={value}
              onChange={() => setValue(!value)}
            />
            <Label pointer htmlFor="agb">
              Accept AGB
            </Label>
          </Separator>
          <Separator style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox
              name="newsletter"
              checked={value2}
              onChange={() => setValue2(!value2)}
            />
            <Label pointer htmlFor="newsletter">
              Subscribe Newsletter
            </Label>
          </Separator>
        </Wrapper>
      )
    }

    return <InputWithValue />
  })

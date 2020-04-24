import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import LocationInput from './'
import Label from '../label'

import Wrapper from '../../../stories/Wrapper'
import Separator from '../../../stories/Separator'

storiesOf('Forms/LocationInput', module)
  .add('Default', () => {
    const LocationInputWithValue = () => {
      const [value, setValue] = useState('')
      return (
        <Wrapper>
          <Separator>
            <LocationInput
              value={value}
              onChange={setValue}
              placeholder="Type some text..."
              googleApiKey={text('Google API Key')}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <LocationInputWithValue />
  })
  .add('Disabled', () => {
    const LocationInputWithValue = () => {
      const [value, setValue] = useState('')

      return (
        <Wrapper>
          <Separator>
            <LocationInput
              disabled
              value={value}
              onChange={setValue}
              placeholder="Type some text..."
              googleApiKey={text('Google API Key')}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <LocationInputWithValue />
  })
  .add('Labeled', () => {
    const LocationInputWithValue = () => {
      const [value, setValue] = useState('')

      return (
        <Wrapper>
          <Separator>
            <Label htmlFor="email">Address:</Label>
            <LocationInput
              value={value}
              onChange={setValue}
              placeholder="Type your address..."
              googleApiKey={text('Google API Key')}
            />
          </Separator>
        </Wrapper>
      )
    }

    return <LocationInputWithValue />
  })

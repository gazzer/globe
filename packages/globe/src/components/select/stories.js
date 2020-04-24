import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Select from './'
import Label from '../label'

import Wrapper from '../../../stories/Wrapper'
import Separator from '../../../stories/Separator'

storiesOf('Forms/Select', module)
  .add('Default', () => {
    const SelectWithValue = () => {
      const [value, setValue] = useState('Germany')

      return (
        <Wrapper>
          <Separator>
            <Select onChange={setValue} value={value}>
              <option value="Germany">Germany</option>
              <option value="Italy">Italy</option>
            </Select>
          </Separator>
        </Wrapper>
      )
    }

    return <SelectWithValue />
  })
  .add('Labeled', () => {
    const SelectWithValue = () => {
      const [value, setValue] = useState('Germany')

      return (
        <Wrapper>
          <Separator>
            <Select
              label="Country"
              name="country"
              required
              onChange={setValue}
              value={value}>
              <option value="Germany">Germany</option>
              <option value="Italy">Italy</option>
            </Select>
          </Separator>
        </Wrapper>
      )
    }

    return <SelectWithValue />
  })
  .add('Disabled', () => (
    <Wrapper>
      <Separator>
        <Select label="Country" disabled>
          <option value="Germany">Germany</option>
          <option value="Italy">Italy</option>
        </Select>
      </Separator>
    </Wrapper>
  ))

  .add('Validation', () => {
    const SelectWithValue = () => {
      const [value, setValue] = useState('')
      const [isValid, setValid] = useState(false)

      return (
        <Wrapper>
          <Separator>
            <Select
              label="Country"
              error={isValid ? null : 'Please set a country.'}
              name="country"
              required
              isValid={isValid}
              onChange={newVal => {
                setValue(newVal)
                setValid(newVal.length > 0)
              }}
              value={value}>
              <option value=""></option>
              <option value="Germany">Germany</option>
              <option value="Italy">Italy</option>
            </Select>
          </Separator>
        </Wrapper>
      )
    }

    return <SelectWithValue />
  })

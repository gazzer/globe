import React, { useState } from "react"
import { storiesOf } from "@storybook/react"

import Select from "./"
import Label from "../label"

import Wrapper from "../../stories/Wrapper"
import Separator from "../../stories/Separator"

storiesOf("Forms/Select", module)
  .add("Default", () => {
    const SelectWithValue = () => {
      const [value, setValue] = useState("Germany")

      return (
        <Wrapper>
          <Separator>
            <Select onChange={setValue} value={value}>
              <option value="Germany">
                Germany foo bar baz barum bazum asd
              </option>
              <option value="Italy">Italy</option>
            </Select>
          </Separator>
        </Wrapper>
      )
    }

    return <SelectWithValue />
  })
  .add("Disabled", () => (
    <Wrapper>
      <Separator>
        <Select disabled>
          <option value="Germany">Germany</option>
          <option value="Italy">Italy</option>
        </Select>
      </Separator>
    </Wrapper>
  ))
  .add("Labeled", () => {
    const SelectWithValue = () => {
      const [value, setValue] = useState("Germany")

      return (
        <Wrapper>
          <Separator>
            <Label required htmlFor="country">
              Country
            </Label>
            <Select name="country" required onChange={setValue} value={value}>
              <option value="Germany">Germany</option>
              <option value="Italy">Italy</option>
            </Select>
          </Separator>
        </Wrapper>
      )
    }

    return <SelectWithValue />
  })

import React, { useState } from "react"
import { storiesOf } from "@storybook/react"

import Text from "./"
import BaselineGrid from "./BaselineGrid"

import Wrapper from "../../stories/Wrapper"
import Separator from "../../stories/Separator"

storiesOf("Core/Text", module).add("Default", () => (
  <Wrapper>
    <BaselineGrid />
    <Text variant={Text.variant.Title}>Title</Text>
    <Text variant={Text.variant.Subtitle}>Subtitle</Text>
    <Text variant={Text.variant.Category}>Category</Text>

    <Text variant={Text.variant.Body}>Body Text</Text>
    <Text>Default Text</Text>
    <Text variant={Text.variant.Label}>Label Text</Text>
    <Text variant={Text.variant.Label} intent={Text.intent.Info}>
      Label Info
    </Text>
  </Wrapper>
))

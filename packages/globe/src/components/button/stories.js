import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './'

import Wrapper from '../../../stories/Wrapper'
import Separator from '../../../stories/Separator'

storiesOf('Actions/Button', module).add('Default', () => (
  <Wrapper>
    <Separator>
      <Button size={Button.size.Small}>Small Button</Button>
    </Separator>
    <Separator>
      <Button size={Button.size.Normal}>Normal Button</Button>
    </Separator>
    <Separator>
      <Button size={Button.size.Big}>Big Button</Button>
    </Separator>
    <Separator>
      <Button variant={Button.variant.Destructive} size={Button.size.Small}>
        Small Button
      </Button>
    </Separator>
    <Separator>
      <Button variant={Button.variant.Destructive} size={Button.size.Normal}>
        Normal Button
      </Button>
    </Separator>
    <Separator>
      <Button variant={Button.variant.Destructive} size={Button.size.Big}>
        Big Button
      </Button>
    </Separator>
  </Wrapper>
))

storiesOf('Actions/Button', module).add('Outline', () => (
  <Wrapper>
    <Separator>
      <Button intent={Button.intent.Outline} size={Button.size.Small}>
        Small Button
      </Button>
    </Separator>
    <Separator>
      <Button intent={Button.intent.Outline} size={Button.size.Normal}>
        Normal Button
      </Button>
    </Separator>
    <Separator>
      <Button intent={Button.intent.Outline} size={Button.size.Big}>
        Big Button
      </Button>
    </Separator>
    <Separator>
      <Button
        intent={Button.intent.Outline}
        variant={Button.variant.Destructive}
        size={Button.size.Small}>
        Small Button
      </Button>
    </Separator>
    <Separator>
      <Button
        intent={Button.intent.Outline}
        variant={Button.variant.Destructive}
        size={Button.size.Normal}>
        Normal Button
      </Button>
    </Separator>
    <Separator>
      <Button
        intent={Button.intent.Outline}
        variant={Button.variant.Destructive}
        size={Button.size.Big}>
        Big Button
      </Button>
    </Separator>
  </Wrapper>
))

storiesOf('Actions/Button', module).add('Text', () => (
  <Wrapper>
    <Separator>
      <Button intent={Button.intent.Text} size={Button.size.Small}>
        Small Button
      </Button>
    </Separator>
    <Separator>
      <Button intent={Button.intent.Text} size={Button.size.Normal}>
        Normal Button
      </Button>
    </Separator>
    <Separator>
      <Button intent={Button.intent.Text} size={Button.size.Big}>
        Big Button
      </Button>
    </Separator>
    <Separator>
      <Button
        intent={Button.intent.Text}
        variant={Button.variant.Destructive}
        size={Button.size.Small}>
        Small Button
      </Button>
    </Separator>
    <Separator>
      <Button
        intent={Button.intent.Text}
        variant={Button.variant.Destructive}
        size={Button.size.Normal}>
        Normal Button
      </Button>
    </Separator>
    <Separator>
      <Button
        intent={Button.intent.Text}
        variant={Button.variant.Destructive}
        size={Button.size.Big}>
        Big Button
      </Button>
    </Separator>
  </Wrapper>
))

storiesOf('Actions/Button', module).add('Loading', () => (
  <Wrapper>
    <Separator>
      <Button loading size={Button.size.Small}>
        Small Button
      </Button>
    </Separator>
    <Separator>
      <Button loading size={Button.size.Normal}>
        Normal Button
      </Button>
    </Separator>
    <Separator>
      <Button loading size={Button.size.Big}>
        Big Button
      </Button>
    </Separator>
    <Separator>
      <Button
        loading
        variant={Button.variant.Destructive}
        size={Button.size.Small}>
        Small Button
      </Button>
    </Separator>
    <Separator>
      <Button
        loading
        variant={Button.variant.Destructive}
        size={Button.size.Normal}>
        Normal Button
      </Button>
    </Separator>
    <Separator>
      <Button
        loading
        variant={Button.variant.Destructive}
        size={Button.size.Big}>
        Big Button
      </Button>
    </Separator>
  </Wrapper>
))

storiesOf('Actions/Button', module).add('Disabled', () => (
  <Wrapper>
    <Separator>
      <Button disabled>Normal Button</Button>
    </Separator>

    <Separator>
      <Button disabled loading>
        Normal Button
      </Button>
    </Separator>
  </Wrapper>
))

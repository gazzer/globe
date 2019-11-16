import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from './'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Layout/Card', module).add('Default', () => (
  <Wrapper>
    <Separator>
      <Card
        style={{
          margin: 5,
          padding: 20,
          fontSize: 20,
          backgroundColor: 'white',
          textAlign: 'center',
        }}
        elevation={Card.elevation.Minimal}>
        Minimal
      </Card>
    </Separator>
    <Separator>
      <Card
        style={{
          margin: 5,
          padding: 20,
          fontSize: 20,
          backgroundColor: 'white',
          textAlign: 'center',
        }}
        elevation={Card.elevation.Low}>
        Low
      </Card>
    </Separator>
    <Separator>
      <Card
        style={{
          margin: 5,
          padding: 20,
          fontSize: 20,
          backgroundColor: 'white',
          textAlign: 'center',
        }}
        elevation={Card.elevation.Medium}>
        Medium
      </Card>
    </Separator>
    <Separator>
      <Card
        style={{
          margin: 5,
          padding: 20,
          fontSize: 20,
          backgroundColor: 'white',
          textAlign: 'center',
        }}
        elevation={Card.elevation.High}>
        High
      </Card>
    </Separator>
    <Separator>
      <Card
        style={{
          margin: 5,
          padding: 20,
          fontSize: 20,
          backgroundColor: 'white',
          textAlign: 'center',
        }}
        elevation={Card.elevation.Minimal}>
        <Card
          style={{
            margin: 5,
            padding: 20,
            fontSize: 20,
            backgroundColor: 'white',
            textAlign: 'center',
          }}
          elevation={Card.elevation.Low}>
          <Card
            style={{
              padding: 20,
              fontSize: 20,
              backgroundColor: 'white',
              textAlign: 'center',
            }}
            elevation={Card.elevation.Medium}>
            <Card
              style={{
                padding: 20,
                fontSize: 20,
                backgroundColor: 'white',
                textAlign: 'center',
              }}
              elevation={Card.elevation.High}>
              Pyramid
            </Card>
          </Card>
        </Card>
      </Card>
    </Separator>
  </Wrapper>
))

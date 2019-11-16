import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Accordion from './'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Disclosure/Accordion', module).add('Default', () => {
  const AccordionWithValue = () => {
    const [expanded, setExpanded] = useState(false)

    return (
      <Wrapper>
        <Separator>
          <Accordion
            expanded={expanded}
            onChange={setExpanded}
            trigger={ex => <div>{ex ? 'Hide' : 'Show'}</div>}>
            <div style={{ padding: 10, backgroundColor: 'white' }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </div>
          </Accordion>
        </Separator>
      </Wrapper>
    )
  }

  return <AccordionWithValue />
})

import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Modal from './'
import Button from '../button'

import Wrapper from '../../../stories/Wrapper'
import Separator from '../../../stories/Separator'

storiesOf('Disclosure/Modal', module)
  .add('Default', () => (
    <Wrapper>
      <Modal style={{ backgroundColor: 'white' }}>
        <div
          style={{
            width: 300,
          }}>
          <p style={{ textAlign: 'center' }}>Modal</p>
        </div>
      </Modal>
    </Wrapper>
  ))
  .add('Titled', () => (
    <Wrapper>
      <Modal style={{ backgroundColor: 'white', padding: 0 }}>
        <div
          style={{
            width: 300,
          }}>
          <h2
            style={{
              textAlign: 'center',
              padding: 10,
              borderBottom: '1px solid rgb(220, 220, 220)',
            }}>
            Modal
          </h2>
          <p style={{ padding: 20 }}>Some text </p>
        </div>
      </Modal>
    </Wrapper>
  ))
  .add('Trigger', () => {
    const ModalWithTrigger = () => {
      const [visible, setVisible] = useState(false)

      const close = () => setVisible(false)
      return (
        <Wrapper>
          <div style={{ alignSelf: 'flex-start', padding: 10 }}>
            <Button onClick={() => setVisible(true)}>Show</Button>
          </div>
          {visible ? (
            <Modal onClose={close} style={{ backgroundColor: 'white' }}>
              <div style={{ width: 200 }}>
                <h2 style={{ textAlign: 'center' }}>Modal</h2>
                <br />
                <Button variant={Button.variant.Destructive} onClick={close}>
                  Close
                </Button>
              </div>
            </Modal>
          ) : null}
        </Wrapper>
      )
    }

    return <ModalWithTrigger />
  })

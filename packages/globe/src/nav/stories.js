import React from 'react'
import { storiesOf } from '@storybook/react'

import Nav from './'
import NavItem from '../navItem'
import Icons from '../icons'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

storiesOf('Navigation/Nav', module).add('Default', () => {
  return (
    <Separator>
      <Nav>
        <NavItem active icon={<Icons.calendar />}>
          Events
        </NavItem>
        <NavItem icon={<Icons.globe />}>Communities</NavItem>
        <NavItem icon={<Icons.user />}>Account</NavItem>
      </Nav>
    </Separator>
  )
})

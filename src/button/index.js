import React, { forwardRef } from 'react'
import {
  make as BaseButton,
  size,
  variant,
  intent,
  type_,
} from './Button.bs.js'

const Button = forwardRef(({ type, ...props }, ref) => (
  <BaseButton {...props} type_={type} ref={ref} />
))

Button.size = size
Button.variant = variant
Button.intent = intent
Button.type = type_

export default Button

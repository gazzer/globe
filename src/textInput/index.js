import React, { forwardRef } from 'react'

import { make as BaseTextInput } from './TextInput.bs.js'

export default forwardRef(({ type, ...props }, ref) => (
  <BaseTextInput {...props} type_={type} ref={ref} />
))

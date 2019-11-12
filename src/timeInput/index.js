import React, { forwardRef } from 'react'

import { make as BaseTimeInput } from './TimeInput.bs.js'

export default forwardRef((props, ref) => (
  <BaseTimeInput {...props} ref={ref} />
))

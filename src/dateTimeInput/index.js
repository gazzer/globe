import React, { forwardRef } from 'react'

import { make as BaseDateTimeInput } from './DateTimeInput.bs.js'

export default forwardRef((props, ref) => (
  <BaseDateTimeInput {...props} ref={ref} />
))

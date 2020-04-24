import React, { forwardRef } from 'react'

import { make as BaseDateInput } from './DateInput.bs.js'

export default forwardRef((props, ref) => (
  <BaseDateInput {...props} ref={ref} />
))

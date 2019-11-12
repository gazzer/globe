import React, { forwardRef } from 'react'

import { make as BaseDatePicker } from './DatePicker.bs.js'

export default forwardRef((props, ref) => (
  <BaseDatePicker {...props} ref={ref} />
))

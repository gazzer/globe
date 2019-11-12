import React, { forwardRef } from 'react'

import { make as BaseNumberInput } from './NumberInput.bs.js'

export default forwardRef((props, ref) => (
  <BaseNumberInput {...props} ref={ref} />
))

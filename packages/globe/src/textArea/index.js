import React, { forwardRef } from 'react'

import { make as BaseTextArea } from './TextArea.bs.js'

export default forwardRef((props, ref) => <BaseTextArea {...props} ref={ref} />)

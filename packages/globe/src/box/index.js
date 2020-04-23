import React, { forwardRef } from 'react'
import { Box as BaseBox } from 'kilvin'

const Box = forwardRef(({ domProps, size, ...props }, ref) => {
  return <BaseBox ref={ref} {...props} basis={size} {...domProps} />
})

export default Box

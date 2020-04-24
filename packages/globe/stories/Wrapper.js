import React from 'react'

import Box from '../src/components/box'

export default ({ children, style }) => (
  <Box width="100%" maxWidth={450} style={style}>
    {children}
  </Box>
)

import React from 'react'

import Box from '../src/components/box'

export default ({ children, style = {} }) => (
  <Box extend={{ padding: 5, ...style }}>{children}</Box>
)

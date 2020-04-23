import React from 'react'

import Box from '../src/box'

export default ({ children, style = {} }) => (
  <Box extend={{ padding: 5, ...style }}>{children}</Box>
)

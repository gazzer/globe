import React from 'react'

export default ({ children, style = {} }) => (
  <div style={{ padding: 5, ...style }}>{children}</div>
)

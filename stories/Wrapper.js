import React from 'react'

export default ({ children, style }) => (
  <div style={{ width: '100%', maxWidth: 360, ...style }}>{children}</div>
)

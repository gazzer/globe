import React from 'react'

export default function BaselineGrid({ full = false }) {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 1100,
        opacity: 0.3,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundSize: '100% ' + (full ? 8 : 4) + 'px',
        backgroundImage:
          'linear-gradient(to right, grey 1px, transparent 1px), linear-gradient(to bottom, grey 1px, transparent 1px)',
      }}
    />
  )
}

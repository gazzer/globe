import React from 'react'

import Grid from './'
import Col from '../col'
import Row from '../row'

const DebugCol = ({ children }) => (
  <Col
    size={1}
    style={{ height: '100vh', backgroundColor: 'rgba(235, 235, 235)' }}>
    <div
      style={{
        backgroundColor: 'rgb(210, 210, 210)',
        height: '100%',
        textAlign: 'center',
      }}>
      {children}
    </div>
  </Col>
)
export default function DebugGrid() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: -1,
        opacity: 0.4,
        pointerEvents: 'none',
      }}>
      <Grid>
        <Row>
          <DebugCol>1</DebugCol>
          <DebugCol>2</DebugCol>
          <DebugCol>3</DebugCol>
          <DebugCol>4</DebugCol>
          <DebugCol>5</DebugCol>
          <DebugCol>6</DebugCol>
          <DebugCol>7</DebugCol>
          <DebugCol>8</DebugCol>
          <DebugCol>9</DebugCol>
          <DebugCol>10</DebugCol>
          <DebugCol>11</DebugCol>
          <DebugCol>12</DebugCol>
        </Row>
      </Grid>
    </div>
  )
}

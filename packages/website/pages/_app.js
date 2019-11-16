import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import { StyleProvider } from '@gazzer/globe'

const staticStyle = [
  [
    'html',
    {
      WebkitTextSizeAdjust: '100%',
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      overflow: 'hidden',
    },
  ],
  ['body, #__next', { height: '100%', maxHeight: '100%', overflow: 'hidden' }],
]

export default class MyApp extends App {
  render() {
    const { Component, pageProps, renderer } = this.props

    return (
      <StyleProvider renderer={renderer} staticStyles={staticStyle}>
        <Component {...pageProps} />
      </StyleProvider>
    )
  }
}

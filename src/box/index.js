import React, { Children } from 'react'
import { useFela } from 'react-fela'

import Spacer from '../spacer'

const applySpacing = spacing => value => (value ? value * spacing : undefined)

export default function Box({
  as: Component = 'div',
  space,
  children,
  padding,
  paddingLeft,
  paddingRight,
  paddingBottom,
  paddingTop,
  margin,
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  grow,
  shrink = 0,
  size,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  alignSelf = 'stretch',
  alignItems,
  justifyContent,
  wrap,
  row = false,
  extend,
  ...otherProps
}) {
  const { css, theme } = useFela()

  const spacing = applySpacing(theme.baselineGrid)

  return (
    <Component
      {...otherProps}
      className={css(
        {
          padding: spacing(padding),
          paddingLeft: spacing(paddingLeft),
          paddingRight: spacing(paddingRight),
          paddingBottom: spacing(paddingBottom),
          paddingTop: spacing(paddingTop),
          margin: spacing(margin),
          marginLeft: spacing(marginLeft),
          marginRight: spacing(marginRight),
          marginBottom: spacing(marginBottom),
          marginTop: spacing(marginTop),
          flexGrow: grow,
          flexShrink: shrink,
          flexBasis: size,
          width,
          height,
          minWidth,
          maxWidth,
          minHeight,
          maxHeight,
          alignSelf,
          alignItems,
          justifyContent,
          flexWrap: wrap ? 'wrap' : 'nowrap',
          flexDirection: row ? 'row' : 'column',
          display: 'flex',
          maxWidth: '100%',
          boxSizing: 'border-box',
          WebkitOverflowScrolling: 'touch',
        },
        extend
      )}>
      {space
        ? Children.toArray(children).map((child, index, arr) => (
            <React.Fragment key={index}>
              {child}
              {index === arr.length - 1 ? null : <Spacer size={space} />}
            </React.Fragment>
          ))
        : children}
    </Component>
  )
}

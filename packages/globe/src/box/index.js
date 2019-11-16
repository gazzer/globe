import React, { Children, forwardRef } from 'react'
import { useFela } from 'react-fela'

const applyGrid = spacing => value => {
  if (!value) {
    return undefined
  }

  if (Array.isArray(value)) {
    return value.map(v => v * spacing)
  }

  return value * spacing
}

const Box = forwardRef(
  (
    {
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
      display,
      alignSelf = 'stretch',
      alignItems,
      alignContent,
      justifyContent,
      wrap,
      row = false,
      extend,
      domProps,
      ...otherProps
    },
    ref
  ) => {
    const { css, theme } = useFela()
    const spacing = applyGrid(theme.baselineGrid)

    return (
      <Component
        ref={ref}
        {...otherProps}
        {...domProps}
        className={css(
          {
            // We apply some sensible resets to the flexbox values
            // in order to mimic a react native like API
            display: display || 'flex',
            maxWidth: '100%',
            boxSizing: 'border-box',
            WebkitOverflowScrolling: 'touch',
            flexWrap: wrap ? 'wrap' : 'nowrap',
            flexDirection: row ? 'row' : 'column',
            flexGrow: grow,
            flexShrink: shrink,
            flexBasis: size,
            alignSelf,
            alignItems,
            alignContent,
            justifyContent,
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
            width,
            height,
            minWidth,
            maxWidth,
            minHeight,
            maxHeight,
          },
          extend
        )}>
        {space
          ? Children.toArray(children).map((child, index, arr) => (
              <React.Fragment key={index}>
                {child}
                {index === arr.length - 1 ? null : (
                  <Box width={spacing(space)} size={spacing(space)} />
                )}
              </React.Fragment>
            ))
          : children}
      </Component>
    )
  }
)

export default Box

import React, { Children, forwardRef } from 'react'
import { useFela } from 'react-fela'

import applySpacing from '../utils/applySpacing'

export default forwardRef(
  (
    {
      as,
      children,
      variant,
      intent = 'body',
      extend,
      align,
      weight,
      color,
      height,
      domProps,
      ...otherProps
    },
    ref
  ) => {
    const { css, theme } = useFela()
    const spacing = applySpacing(theme.baselineGrid)
    const {
      element,
      fontSize,
      lineHeight,
      fontWeight,
      variants,
      ...fontStyle
    } = theme.typography[intent]

    const Component = as || element

    return (
      <Component
        ref={ref}
        {...otherProps}
        {...domProps}
        className={css(
          {
            display: 'inline',
            color: color || theme.colors.text,
            textAlign: align,
            fontWeight: weight || fontWeight,
            lineHeight: height || lineHeight + 'px',
            fontSize,
            ...fontStyle,
            ...(variants && variants[variant] ? variants[variant] : {}),
          },
          extend
        )}>
        {children}
      </Component>
    )
  }
)

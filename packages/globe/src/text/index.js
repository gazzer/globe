import React, { Children, forwardRef } from 'react'
import { useFela } from 'react-fela'

const applySpacing = spacing => value => {
  if (!value) {
    return undefined
  }

  if (Array.isArray(value)) {
    return value.map(v => v * spacing)
  }

  return value * spacing
}

export default forwardRef(
  (
    {
      as,
      children,
      variant = 'body',
      intent,
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
      ...fontStyle
    } = theme.typography[variant]

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
          },
          extend
        )}>
        {children}
      </Component>
    )
  }
)

import React, { Children, forwardRef } from 'react'
import { useFela } from 'react-fela'

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

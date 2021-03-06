import React from 'react'
import "./ContentPad.scss"

const ContentPad = ({
  children,
  className,
  padding,
  borderRadius,
  style,
  ...rest
}) => {
  return (
    <div className={["ContentPad-container", className].join(' ')}
      style={{ padding: `${padding}rem`, borderRadius, ...style }}
      {...rest}>
      {children}
    </div>
  )
}

export default ContentPad


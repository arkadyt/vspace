import React from 'react'
import "./ContentPad.scss"

const ContentPad = ({
  children,
  className,
  padding,
  borderRadius,
  ...rest
}) => {
  return (
    <div className={["ContentPad-container", className].join(' ')}
      style={{ padding: `${padding}rem`, borderRadius }}
      {...rest}>
      {children}
    </div>
  )
}

export default ContentPad


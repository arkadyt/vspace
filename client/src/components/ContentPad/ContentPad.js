import React from 'react'
import "./ContentPad.scss"

const ContentPad = ({
  children,
  className,
  padding,
  borderRadius
}) => {
  return (
    <div className={["ContentPad-container", className].join(' ')}
      style={{ padding: `${padding}rem`, borderRadius }}>
      {children}
    </div>
  )
}

export default ContentPad


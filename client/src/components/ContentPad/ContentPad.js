import React from 'react'
import "./ContentPad.scss"

const ContentPad = ({
  children,
  className,
  padding
}) => {
  return (
    <div className={["ContentPad-container", className].join(' ')}
      style={{ padding: `${padding}rem` }}>
      {children}
    </div>
  )
}

export default ContentPad


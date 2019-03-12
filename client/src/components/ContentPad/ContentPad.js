import React from 'react'
import "./ContentPad.scss"

const ContentPad = ({
  children,
  padding
}) => {
  return (
    <div className="ContentPad-container"
      style={{ padding: `${padding}rem` }}>
      {children}
    </div>
  )
}

export default ContentPad


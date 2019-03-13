import React from 'react'
import ContentPad from '../ContentPad/ContentPad'
import './BrowserControls.scss'

const BrowserControls = ({
  labels,
  colors,
  callbacks,
  className
}) => {
  return (
    <ContentPad 
      className={["BrowserControls-container", className].join(' ')}>
      {labels.map((item, i) => {
        const callback = callbacks[i]

        if (callback) {
          return (
            <button
              key={`button-${i}`}
              className="BrowserControls-button"
              style={{ background: colors && colors[i] }}
              onClick={callback}>
              {labels[i]}
            </button>
          )
        } else {
          return (
            <span
              key={`span-${i}`}
              className="BrowserControls-item"
              onClick={callback}>
              {labels[i]}
            </span>
          )
        }
      })}
    </ContentPad>
  )
}

export default BrowserControls

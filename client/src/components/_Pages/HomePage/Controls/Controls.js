import React from 'react'
import {
  FaAngleRight as IconRight,
  FaAngleLeft as IconLeft
} from 'react-icons/fa'

import BrowserControls from '../../../BrowserControls/BrowserControls'
import './Controls.scss'

const Controls = ({
}) => {
  const labels = [
    'Sort by:',
    'Price',
    'Time',
    'Name'
  ]
  const callbacks = [
    undefined,
    () => {},
    () => {},
    () => {},
  ]

  const labelsPaginator = [
    <IconLeft />,
    '1/50',
    <IconRight />
  ]
  const callbacksPaginator = [
    () => {},
    undefined,
    () => {},
  ]

  return (
    <div className="Controls-container">
      <BrowserControls 
        className="Controls-sorter"
        labels={labels}
        callbacks={callbacks} />
      <BrowserControls 
        className="Controls-paginator"
        labels={labelsPaginator}
        callbacks={callbacksPaginator} />
    </div>
  )
}

export default Controls

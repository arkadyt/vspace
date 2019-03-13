import React from 'react'
import {
  FaAngleRight as IconRight,
  FaAngleLeft as IconLeft
} from 'react-icons/fa'

import BrowserControls from '../../../BrowserControls/BrowserControls'
import './Controls.scss'

const Controls = ({
  callbacksSorter,
  callbacksPaginator
}) => {
  const labels = [
    'Sort by:',
    'Price',
    'Time',
    'Name'
  ]
  const labelsPaginator = [
    <IconLeft />,
    '1/50',
    <IconRight />
  ]

  return (
    <div className="Controls-container">
      <BrowserControls 
        className="Controls-sorter"
        labels={labels}
        callbacks={callbacksSorter} />
      <BrowserControls 
        className="Controls-paginator"
        labels={labelsPaginator}
        callbacks={callbacksPaginator} />
    </div>
  )
}

export default Controls

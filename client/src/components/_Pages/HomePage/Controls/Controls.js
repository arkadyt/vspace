import React from 'react'
import {
  FaAngleRight as IconRight,
  FaAngleLeft as IconLeft
} from 'react-icons/fa'

import BrowserControls from '../../../BrowserControls/BrowserControls'
import './Controls.scss'

const Controls = ({
  callbacksSorter,
  backgroundsSorter,
  callbacksPaginator,
  countTextPaginator
}) => {
  const labels = [
    'Sort by:',
    'Price',
    'Time',
    'Name'
  ]
  const labelsPaginator = [
    <IconLeft />,
    countTextPaginator || 'Error',
    <IconRight />
  ]

  return (
    <div className="Controls-container">
      <BrowserControls 
        className="Controls-sorter"
        labels={labels}
        colors={backgroundsSorter}
        callbacks={callbacksSorter} />
      <BrowserControls 
        className="Controls-paginator"
        labels={labelsPaginator}
        callbacks={callbacksPaginator} />
    </div>
  )
}

export default Controls

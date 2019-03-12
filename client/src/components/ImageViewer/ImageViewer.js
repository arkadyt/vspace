import React, { Component } from 'react'
import ContentPad from '../ContentPad/ContentPad'
import BrowserControls from '../BrowserControls/BrowserControls'
import {
  FaAngleRight as IconRight,
  FaAngleLeft as IconLeft
} from 'react-icons/fa'
import './ImageViewer.scss'

class ImageViewer extends Component {
  state = {
    currentIdx: 0
  }

  handleIncrement(deltaIdx) {
    this.setState(prevState => { 
      const newIdx = prevState.currentIdx + deltaIdx 

      if (newIdx < 0 || newIdx >= this.props.media.length)
        return prevState

      return {
        currentIdx: newIdx
      }
    })
  }

  render() {
    const {
      className,
      media
    } = this.props

    const controlsCallbacks = [
      () => this.handleIncrement(-1),
      undefined,
      () => this.handleIncrement(+1)
    ]
    const labels = [
      <IconLeft />,
      `${this.state.currentIdx + 1}/${media.length}`,
      <IconRight /> 
    ]

    const {
      currentIdx
    } = this.state

    return (
      <div className={["ImageViewer-container", className].join(' ')}>
        <ContentPad padding={0} className="ImageViewer-viewport">
          <img 
            src={media[currentIdx].sizes[0].url} 
            alt="" 
            className="ImageViewer-imgbg" />
          <img 
            src={media[currentIdx].sizes[0].url} 
            alt="" 
            className="ImageViewer-img" />
        </ContentPad>
        <BrowserControls 
          className="ImageViewer-controls"
          labels={labels} 
          callbacks={controlsCallbacks} />
      </div>
    )
  }
}

export default ImageViewer

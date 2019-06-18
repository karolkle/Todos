import React from 'react'
import './Overlay.scss'

const Overlay = ({ left, right }) => {
    return (
      <div className="overlay">
        <div className="panel left">{left}</div>
        <div className="panel right">{right}</div>
      </div>
    )
  }

  export default Overlay
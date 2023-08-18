import React from 'react'
import './styles/navbarStyle.css'

function NarbarComponent() {

  const navStyle = {
    position: 'sticky',
    top: 0,
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    padding: '0.6em',
    margin: '0',
    backgroundColor: 'green',
    alignFtems: 'center',
    justifyFontent: 'space-between',
    fontFamily: 'Arial, sans-serif',
    userSelect: 'none',
  }
  return (
    <div style={navStyle} >NarbarComponent</div>
  )
}

export default NarbarComponent
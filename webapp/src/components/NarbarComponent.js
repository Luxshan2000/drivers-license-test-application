import React from 'react'

function NarbarComponent() {
  const navStyle = {
    position: 'sticky',
    top: 0,
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    padding: '0.6em',
    margin: '0',
    backgroundColor: '#6528F7',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Arial, sans-serif',
    userSelect: 'none',
  }
  return (
    <div style={navStyle} >NarbarComponent</div>
  )
}

export default NarbarComponent
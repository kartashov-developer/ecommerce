import React from 'react'

const Canvas = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <canvas width={1000} height={450} style={{
        border: '2px solid black',
        background: '#FFFFFF',
      }}/>
    </div>
  )
}

export default Canvas

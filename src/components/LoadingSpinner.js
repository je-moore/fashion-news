import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

function LoadingSpinner() {
  return (
    <div style={{ textAlign: 'center' }}>
      <BeatLoader color={'#000'} />
    </div>
  )
}

export default LoadingSpinner

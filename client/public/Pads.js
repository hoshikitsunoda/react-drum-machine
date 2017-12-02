import React from 'react'
import Pad from './Pad'

const Pads = () => {
  const row = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <div id="table">
      {row.map((id, index) => <Pad key={index} id={id} />)}
    </div>
  )
}

export default Pads

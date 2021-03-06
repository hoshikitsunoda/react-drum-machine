import React, { Component } from 'react'

const SequenceIndicator = ({ status, position, click }) => {
    const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    return (
      <div>
        {list.map((id, index) => {
          return <button
            key={index}
            className="sequence-indicator"
            id={index}
            onClick={() => click(`${id}`)}
            ></button>
        })}
      </div>
    )
  }

export default SequenceIndicator

import React from 'react';

function Out(props) {
  return (
    <div className='element'>
      <label>Decimal Output</label>
      <div className='element__output'>{props.initialStateNumber}</div>
    </div>
  )
}

export default Out;
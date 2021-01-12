import React from 'redux';

export default function Button(props) {
  return (
    <button
      className="element__button"
      onClick={() => {
        props.changeBinaryCompareDecimal(props.count)
      }}
    >Convert</button>
  )
}
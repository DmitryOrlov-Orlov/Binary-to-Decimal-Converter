import React from 'react';

export default function Input(props) {
  return (
    <div>
      <label>Binary Input</label>
      <div>
        <input
          className="element__input"
          placeholder='Enter 0 and 1'
          type="text"
          onChange={(event) => {
            props.onChange(event.target.value);
          }}
        />
      </div>
    </div>
  )
}
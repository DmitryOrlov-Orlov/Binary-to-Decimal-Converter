import React from 'react';
import { connect } from 'react-redux';

const refInput = React.createRef();
function Input(props) {
  const handler = () => {
    let input = refInput.current.value;
    if (input.length <= 8) {
      props.onBinary(input);
      input = '';
    }
  }

  return (
    <div className='element'>
      <label>Binary Input</label>
      <div >
        <input className="element__input" type="text" placeholder='Enter 0 and 1' ref={refInput} />
        <button className="element__button" onClick={handler}>Convert</button>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onBinary: (input) => {
      dispatch({ type: 'BIN', binary: input })
    }
  })
)(Input);
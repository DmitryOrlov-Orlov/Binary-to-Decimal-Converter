import React from 'react';
import { connect } from 'react-redux';
import { setBinaryValue } from '../../actions';

function Input({ binaryValue, setBinary, error }) {
  const onChange = ({ target }) => setBinary(target.value);

  return (
    <div>
      <label>Binary Input</label>
      <div>
        <input
          className="element__input"
          placeholder='Enter 0 and 1'
          type="text"
          value={binaryValue}
          onChange={onChange}
        />
        {error && (
          <div className='error'>
            введите числа 0 или 1
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  binaryValue: state.binaryValue,
  error: state.error
});
const mapDispatchToProps = (dispatch) => ({
  setBinary: (value) => dispatch(setBinaryValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Input);

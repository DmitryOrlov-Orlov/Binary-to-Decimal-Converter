import React from 'react';
import { connect } from 'react-redux';

function Out({ decimaVlalue }) {

  return (
    <div className='element'>
      <label>Decimal Output</label>
      <div className='element__output'>{decimaVlalue}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({ decimaVlalue: state.decimalValue });

export default connect(mapStateToProps)(Out);
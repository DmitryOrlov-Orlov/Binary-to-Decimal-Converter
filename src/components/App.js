import React from 'react';
import { connect } from 'react-redux';

import Output from './Output/Output';
import Input from './Input/Input';
import './App.css';

function App(props) {
  let decimal;
  let error = '';
  if (/^[01]+$/.test(props.testStore)) {
    decimal = parseInt(props.testStore, 2);
  } else {
    error = "Enter either 0 or 1";
  }

  return (
    <div className='container'>
      <h1>Binary to Decimal Converter</h1>
      <div className='activeField'>
        <span className='error'>{error}</span>
        <br />
        <Input />
        <Output output={decimal} />
      </div>
    </div>
  );
}

export default connect(
  state => ({
    testStore: state
  })
)(App);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeBinaryCompareDecimal } from '../store/actions';
import './App.css';
import Button from './button/Button';
import Input from './input/Input';
import Out from './out/Out';

function App(props) {
  const { initialStateNumber, changeBinaryCompareDecimal } = props;
  const [count, setCount] = useState(0);
  return (
    <div className='container'>
      <h1>Binary to Decimal Converter</h1>
      <div className='activeField'>
        <div className='element'>
          <Input onChange={(event) => {
            setCount(event)
          }} />
          <Out initialStateNumber={initialStateNumber} />
          <Button count={count} changeBinaryCompareDecimal={changeBinaryCompareDecimal} />
        </div>
      </div>
    </div >
  )
}

const putStateToProps = (state) => {
  console.log(state);
  return {
    initialStateNumber: state.initialStateNumber
  }
}
const putActionsToProps = (dispatch) => {
  return {
    changeBinaryCompareDecimal: bindActionCreators(changeBinaryCompareDecimal, dispatch)
  }
}

export default connect(putStateToProps, putActionsToProps)(App);
import React from 'react';
import Button from './button/Button';
import Input from './input/Input';
import Out from './out/Out';

import './App.css';

function App() {

  return (
    <div className='container'>
      <h1>Binary to Decimal Converter</h1>
      <div className='activeField'>
        <div className='element'>
          <Input />
          <Out />
          <Button />
        </div>
      </div>
    </div >
  )
}

export default App;

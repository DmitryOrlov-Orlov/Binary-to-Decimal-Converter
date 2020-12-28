
function Output(props) {
  return (
    <div className='element'>
      <label>Decimal Output</label>
      <div className='element__output'>
        {props.output}
      </div>
    </div>
  )
}

export default Output;
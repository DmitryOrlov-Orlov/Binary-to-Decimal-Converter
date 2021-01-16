import React from 'redux';
import { connect } from 'react-redux';
import { connvertBinToDec } from '../../actions';

function Button({ convert }) {

  return (
    <button
      className="element__button"
      onClick={convert}
    >Convert</button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  convert: () => dispatch(connvertBinToDec())
})

export default connect(null, mapDispatchToProps)(Button);

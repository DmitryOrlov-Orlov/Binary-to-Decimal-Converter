import { CHANGE_BINARY_TO_DECIMAL, SET_BINARY_VALUE, ERROR_CONVERT } from '../constants';
import state from '../store';

export const connvertBinToDec = () => {
  const binValue = state.getState().binaryValue;
  const decValue = parseInt(binValue, 2);
  if (!/^[01]+$/.test(binValue)) {
    return errorConvert();
  }

  return {
    type: CHANGE_BINARY_TO_DECIMAL,
    payload: decValue
  }
}

export const setBinaryValue = (binaryValue) => ({
  type: SET_BINARY_VALUE,
  payload: binaryValue,
});

export const errorConvert = () => ({
  type: ERROR_CONVERT
});
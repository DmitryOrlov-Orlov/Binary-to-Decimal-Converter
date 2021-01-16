import { CHANGE_BINARY_TO_DECIMAL, SET_BINARY_VALUE, ERROR_CONVERT } from '../constants';

const initialState = {
  decimalValue: null,
  binaryValue: '',
  error: false
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BINARY_TO_DECIMAL:
      return { ...state, decimalValue: action.payload, error: false }
    case SET_BINARY_VALUE: {
      return { ...state, binaryValue: action.payload }
    }
    case ERROR_CONVERT: {
      return { ...state, error: true }
    }
    default:
      return state
  }
}

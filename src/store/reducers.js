import { CHANGE_BINARY_TO_DECIMAL } from '../index';

const initialState = {
  initialStateNumber: 0
};

//2
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BINARY_TO_DECIMAL:
      return { ...state, initialStateNumber: action.payload }
  }
  return state;
}
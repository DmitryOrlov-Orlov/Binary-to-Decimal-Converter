import { CHANGE_BINARY_TO_DECIMAL } from '../../src/index';

//3
export const changeBinaryCompareDecimal = (newCount) => {
  if (/^[01]+$/.test(newCount)) {
    return { type: CHANGE_BINARY_TO_DECIMAL, payload: parseInt(newCount, 2) };
  } else {
    return { type: CHANGE_BINARY_TO_DECIMAL, payload: "Enter either 0 or 1" };
  }
}
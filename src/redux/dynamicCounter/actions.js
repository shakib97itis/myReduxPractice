import {DYNAMIC_DECREMENT, DYNAMIC_INCREMENT} from './actionTypes';

export function dynamicIncrement(value) {
  return {type: DYNAMIC_INCREMENT, payload: value};
}

export function dynamicDecrement(value) {
  return {type: DYNAMIC_DECREMENT, payload: value};
}

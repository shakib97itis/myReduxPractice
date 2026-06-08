import {DECREMENT, INCREMENT} from './actionTypes';

export function increment(value) {
  return {type: INCREMENT, payload: value};
}

export function decrement(value) {
  return {type: DECREMENT, payload: value};
}
import { INCREMENT, DECREMENT } from './types';

export const increment = val => dispatch => {
  dispatch({
    type: INCREMENT,
    payload: val
  });
};

export const decrement = val => dispatch => {
  dispatch({
    type: DECREMENT,
    payload: val
  });
};

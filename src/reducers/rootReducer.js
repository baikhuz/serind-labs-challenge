import { INCREMENT, DECREMENT } from '../actions/types';

const initialState = {
  counter: 0
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + payload
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter + payload
      };
    default:
      return state;
  }
}

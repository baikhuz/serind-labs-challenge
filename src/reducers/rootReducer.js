import {
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  MOVIE_FETCHED,
  MOVIE_FETCH_FAIL
} from '../actions/types';

const initialState = {
  counter: 0,
  searchResults: {},
  currentMovie: {}
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: payload
      };
    case SEARCH_FAIL:
      return {
        ...state,
        searchResults: payload
      };
    case MOVIE_FETCHED:
      return {
        ...state,
        currentMovie: payload
      };
    case MOVIE_FETCH_FAIL:
      return {
        ...state,
        currentMovie: payload
      };
    default:
      return state;
  }
}

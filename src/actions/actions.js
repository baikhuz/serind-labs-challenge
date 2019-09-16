import {
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  MOVIE_FETCHED,
  MOVIE_FETCH_FAIL
} from './types';

import axios from 'axios';

// normally, api keys should be kept on the server.
// i'm saving them here just for simplicity during
// this challenge
const apiUrl = 'http://www.omdbapi.com/?apikey=';
const apiKey = '52336e26';

export const searchDb = (search, type, year) => async dispatch => {
  type ? (type = '&type=' + type) : (type = '');
  year ? (year = '&y=' + year) : (year = '');

  try {
    const res = await axios.get(`${apiUrl}${apiKey}&s=${search}${type}${year}`);

    dispatch({
      type: SEARCH_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_FAIL,
      payload: err
    });
  }
};

export const searchMovie = params => async dispatch => {
  try {
    const res = await axios.get(`${apiUrl}${apiKey}&i=${params}`);

    dispatch({
      type: MOVIE_FETCHED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MOVIE_FETCH_FAIL,
      payload: err
    });
  }
};

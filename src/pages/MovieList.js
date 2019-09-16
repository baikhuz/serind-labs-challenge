import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchDb } from '../actions/actions';

import SearchResult from '../components/SearchResult';

const MovieList = props => {
  const [formData, setFormData] = useState({
    search: '',
    type: '',
    year: ''
  });

  const { search, type, year } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(searchDb(search, type, year));
  };

  const searchResults = useSelector(state => state.searchResults.Search);

  return (
    <Fragment>
      <div className="form-wrapper">
        <form onSubmit={e => onSubmit(e)}>
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={e => onChange(e)}
            placeholder="Enter movie name"
            required
          />
          <div className="select">
            <select
              id="type"
              name="type"
              value={type}
              onChange={e => onChange(e)}
            >
              <option value="">Select type (optional)</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="episode">Episode</option>
            </select>
          </div>
          <input
            type="text"
            id="year"
            name="year"
            value={year}
            onChange={e => onChange(e)}
            placeholder="Search by year (optional)"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {searchResults &&
        searchResults.map(result => (
          <SearchResult key={result.imdbID} result={result} />
        ))}
    </Fragment>
  );
};

export default MovieList;

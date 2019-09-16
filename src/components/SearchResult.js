import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchMovie } from '../actions/actions';

const SearchResult = result => {
  const { Title, Poster, Year, Type, imdbID } = result.result;
  const dispatch = useDispatch();

  return (
    <Fragment>
      <h2>{Title}</h2>
      <img
        src={
          Poster !== 'N/A'
            ? Poster
            : 'http://www.4motiondarlington.org/wp-content/uploads/2013/06/No-image-found.jpg'
        }
        alt={Title}
      />
      <p>Year: {Year}</p>
      <p>Type: {Type}</p>
      <Link to={`/movie-list/${imdbID}`}>
        <button
          onClick={() => {
            dispatch(searchMovie(imdbID));
          }}
        >
          Details
        </button>
      </Link>
    </Fragment>
  );
};

export default SearchResult;

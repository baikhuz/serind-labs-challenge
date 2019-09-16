import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MovieDetails = props => {
  const {
    Title,
    Poster,
    Year,
    Type,
    Released,
    Genre,
    Ratings,
    imdbID
  } = useSelector(state => state.currentMovie);

  return imdbID === props.match.params.id ? (
    <Fragment>
      <Link to="/movie-list">
        <button>Back</button>
      </Link>
      <h1>{Title}</h1>
      <img src={Poster} alt={Title} />
      <p>{Year}</p>
      <p>Type: {Type}</p>
      <p>Released: {Released}</p>
      <p>Genre: {Genre}</p>
      <h4>Ratings</h4>
      {Ratings &&
        Ratings.map((rating, index) => (
          <p key={index}>
            {rating.Source}: {rating.Value}
          </p>
        ))}
    </Fragment>
  ) : (
    ''
  );
};

export default MovieDetails;

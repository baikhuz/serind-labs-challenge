import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/movie-list" />} />
          <Route exact path="/movie-list" component={MovieList} />
          <Route exact path="/movie-list/:id" component={MovieDetails} />
        </Switch>
      </Router>
    </div>
  );
}

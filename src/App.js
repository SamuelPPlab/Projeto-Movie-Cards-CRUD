import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';

function App() {
  return (
      <BrowserRouter>
      <div>Movie Card Library CRUD</div>
        <Switch>
          {/* <Route path='/movies/:id' component={MovieDetails} /> */}
          <Route path='/movies/:id/edit' component={EditMovie} />
          <Route path='/movies/:id' component={MovieDetails} />
          <Route path='/' component={MovieList} />
          {/* <MovieList /> */}
        </Switch>
      </BrowserRouter>
  );
}

export default App;

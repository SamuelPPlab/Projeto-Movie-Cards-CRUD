import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {MovieList, MovieDetails, EditMovie, NewMovie, NotFound} from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MovieList} />
        <Route path='/movies/:id' component={MovieDetails} />
        <Route path='/movies/new' component={NewMovie} />
        <Route path='/movies/:id/edit' component={EditMovie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

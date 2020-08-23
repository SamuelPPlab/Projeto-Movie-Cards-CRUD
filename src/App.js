import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    // #1 criando as rotas solicitadas
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route path="/" />
      <Route path="/movies/:id" />
      <Route path="/movies/new" />
      <Route path="/movies/:id/edit" />
    </BrowserRouter>
  );
}

export default App;

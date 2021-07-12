import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import ListsUsers from './pages/ListUsers';
import EditUsers from './pages/EditUsers';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/lists" exact component={ListsUsers} />
      <Route path="/edit" exact component={EditUsers} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
};

export default App;
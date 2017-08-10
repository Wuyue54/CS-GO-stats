import React from 'react';
import { Route } from 'react-router';
import Home from './components/Home';
import Stats from './components/Stats';
import App from './components/App';

export default (
  <Route component={App} >
    <Route path="/" component={Home} />
    <Route path="/user/:userID" component={Stats} />
  </Route>
);

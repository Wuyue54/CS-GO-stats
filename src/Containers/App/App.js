import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import routes from 'routes';

import Search from 'Components/Search';
import Footer from 'Components/Footer';

const App = ({ getUserInfo }) => (
  <div className="container">
    <h1>CS: GO stats</h1>
    <Search
      getUserInfo={getUserInfo}
    />
    <Switch>
      {
        routes.map(({ path, component, exact }) => (
          <Route key={path} path={path} component={component} exact={exact} location={location}/>
        ))
      }
    </Switch>
    <Footer />
  </div>
);

App.propTypes = {
  getUserInfo: PropTypes.func.isRequired
};

export default App;

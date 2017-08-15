import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import DetailedView from './components/DetailedView';

var routes = (
  <Router history={hashHistory}>
      <Route path="/" component={App}></Route>
      <Route path="details" component={DetailedView} />
  </Router>
  
);

export default routes;
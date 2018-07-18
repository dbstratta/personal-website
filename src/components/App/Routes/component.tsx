import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../../../pages/About';
import Contact from '../../../pages/Contact';
import Home from '../../../pages/Home';
import NotFound from '../../../pages/NotFound';

export const Routes: React.SFC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;

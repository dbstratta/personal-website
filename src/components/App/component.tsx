import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import PageVisit from '../PageVisit';

export const App = () => (
  <>
    <PageVisit />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;

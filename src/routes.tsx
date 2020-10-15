import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap'
import CreateOphanage from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';
import NotFound from './pages/NotFound';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/Orphanages/create" component={CreateOphanage} />
        <Route path="/Orphanages/:id" component={Orphanage} />
        <Route path="/App" component={OrphanagesMap} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
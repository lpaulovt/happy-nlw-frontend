import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Landing from './pages/landing';
import OrphanagesMap from "./pages/OrphanagesMap";

export default function Router() {
return(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/app" exact component={OrphanagesMap} />
    </Switch>
  </BrowserRouter>
);
}
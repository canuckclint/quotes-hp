import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import FavoriteQuotes from "../components/FavoriteQuotes";
import SaveQuote from "../components/SaveQuote";

// Using just one route for now
// NOTE: browserHistory only works when run with a server
// build the webpack project, start the server, and navigate to localhost:3000
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="save-quote" component={SaveQuote} />
      <Route path="saved-quotes" component={FavoriteQuotes} />
      <IndexRoute component={SaveQuote} />
    </Route>
  </Router>
);

export default routes;

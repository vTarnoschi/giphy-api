import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import CircularProgress from '@material-ui/core/CircularProgress';

import routes from "./routes";
import pages from "./pages";

function LoadingComponents(LazyComponent, route) {
  return (props) => (
    <Suspense fallback={<CircularProgress color="inherit" />}>
      <LazyComponent {...props} route={route} />
    </Suspense>
  );
}

const renderRoutes = () => (
  <Switch>
    {routes.map((route, i) => (
      <Route
        key={route.key || i}
        path={route.path}
        exact={route.exact}
        render={LoadingComponents(pages[route.Component], route)}
      />
    ))}
  </Switch>
);

export default renderRoutes;

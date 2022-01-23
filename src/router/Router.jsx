import { Home } from "../Home";
import { Switch, Route } from "react-router-dom";
import { page1Routers } from "./Page1Routers";
import { page2Routers } from "./Page2Routers";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Switch>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1Routers.map((route) => (
              <Route
                key={route.path}
                excact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {page2Routers.map((route) => (
              <Route
                key={route.path}
                excact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};

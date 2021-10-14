import { Switch } from "react-router-dom";

import Route from "./Route";

// Pages
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/home" component={Home} isPrivate />
  </Switch>
);

export default Routes;

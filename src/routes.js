import React from "react";
import { Switch, Route } from "react-router-dom";
import Tees from "./Tees/Tees";
import Home from "./Home/Home";
export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Tees} path="/tee/:id" />
  </Switch>
);

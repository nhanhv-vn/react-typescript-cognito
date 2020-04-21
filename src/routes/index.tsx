import React, { FC, memo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Logic
import { PrivateRoute } from "./PrivateRoute";
// Components
import {
  Home,
  SignIn,
  SignUp,
  ForgotPassword,
  ResetPassword,
  Books,
} from "../pages";

const RoutesBase: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/reset" component={ResetPassword} />
        <PrivateRoute path="/books" Component={Books} />
        <PrivateRoute path="/" Component={Home} />
      </Switch>
    </Router>
  );
};

export const Routes = memo(RoutesBase);

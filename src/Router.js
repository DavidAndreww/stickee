import React from "react";
import { Switch, Route, Redirect } from "react-router";
import AuthFormContainer from "./components/AuthFormContainer";
import Onboarding from "./components/Onboarding";
import MainDisplayPage from "./components/MainDisplayPage";

const checkAuth = () => {
  //autorization logic here
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={props =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={AuthFormContainer} />
      <Route exact path="/signup" component={AuthFormContainer} />
      <Route path="/onboarding" component={Onboarding} />
      <Route path="/sticky" component={MainDisplayPage} />
    </Switch>
  );
};

export default Router;

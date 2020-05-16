import React from "react";
import { Switch, Route, Redirect } from "react-router";
import AuthFormContainer from "./containers/AuthFormContainer";
import Onboarding from "./components/Onboarding";
import StickeePathWrapperComponent from "./components/StickeePathWrapperComponent";
import cookie from "cookie";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  if (cookies.loggedIn === true) {
    return true;
  } else if (cookies.loggedIn === false) {
    window.alert("Unauthorized access");
    return false;
  }
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={(props) =>
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
      <Route path="/stickee" component={StickeePathWrapperComponent} />
    </Switch>
  );
};

export default Router;

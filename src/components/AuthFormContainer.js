import React from "react";
import { Button } from "@material-ui/core";
import AuthFormComponent from "./AuthFormComponent";
import { fetchData } from "../helperFunctions";

class LandingPage extends React.Component {
  state = {
    email: "",
    password: "",
    isNewUser: false,
  };

  handleInputChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  toggleNewUserView = () => {
    const isNewUser = !this.state.isNewUser;
    if (isNewUser) {
      this.setState({ isNewUser });
      this.props.history.push("/signup");
    } else {
      this.setState({ isNewUser });
      this.props.history.push("/");
    }
  };

  handleLoginButtonClick = (e) => {
    e.preventDefault();
    fetchData("/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    });
  };

  handleSignupButtonClick = (e) => {
    e.preventDefault();
    fetchData("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    });
  };

  render() {
    return (
      <AuthFormComponent
        handleLoginButtonClick={this.handleLoginButtonClick}
        handleSignupButtonClick={this.handleSignupButtonClick}
        handleInputChange={this.handleInputChange}
        email={this.state.email}
        password={this.state.password}
        isNewUser={this.state.isNewUser}
        toggleNewUserView={this.toggleNewUserView}
      />
    );
  }
}

export default LandingPage;

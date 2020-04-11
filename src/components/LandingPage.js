import React from "react";
import { Button } from "@material-ui/core";
import AuthenticationForm from "./AuthenticationForm";

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

  handleLoginButtonClick = (e) => {
    e.preventDefault();
    console.log("logging in");
    const userInfo = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    };
    fetch('/', userInfo)
    .then(res => res.json())
    .then(json => console.log(json))
   
  };

  handleSignupButtonClick = (e) => {
    e.preventDefault();
    const url = "/sticky";

    console.log("signing up: ", this.state.email);

    const newUser = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        pass: this.state.password,
      }),
    };


    // this.props.history.push("/sticky");
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

  render() {
    return (
      <div className="landing-page-component">
        <AuthenticationForm
          handleLoginButtonClick={this.handleLoginButtonClick}
          handleSignupButtonClick={this.handleSignupButtonClick}
          handleInputChange={this.handleInputChange}
          email={this.state.email}
          password={this.state.password}
          isNewUser={this.state.isNewUser}
        />
        {!this.state.isNewUser ? (
          <Button
            onClick={this.toggleNewUserView}
            color="secondary"
            variant="contained"
          >
            Sign Up
          </Button>
        ) : (
          <Button
            onClick={this.toggleNewUserView}
            color="secondary"
            variant="contained"
          >
            Login
          </Button>
        )}
      </div>
    );
  }
}

export default LandingPage;

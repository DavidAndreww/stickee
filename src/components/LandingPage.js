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

  fetchData = async function (path, payload){
    const response = await fetch(path, payload)
    const json = await response.json()
    console.log(json)
    // return that cookie?
  }

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
    this.fetchData('/', userInfo)
  };

  handleSignupButtonClick = (e) => {
    e.preventDefault();
    const newUser = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    };
    this.fetchData('/signup', newUser)
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

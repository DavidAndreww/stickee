import React from "react";
import { Button } from "@material-ui/core";
import AuthenticationForm from "./AuthenticationForm";

class LandingPage extends React.Component {
  state = {
    email: "",
    password: "",
    isNewUser: false
  };

  handleInputChange = e => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleLoginButtonClick = e => {
    e.preventDefault();
    console.log("logging in");
    this.props.history.push("/sticky");
    // logic to check credentials and set cookie
  };

  handleSignupButtonClick = e => {
    e.preventDefault();
    console.log("signing up: ", this.state.email);
    this.props.history.push("/sticky");
    // logic to add new user to db and set cookie
  };

  toggleNewUserView = () => {
    const isNewUser = !this.state.isNewUser
    this.setState({isNewUser})
  }

  render() {
    return (
      <div className="landing-page">
        <AuthenticationForm
          handleLoginButtonClick={this.handleLoginButtonClick}
          handleSignupButtonClick={this.handleSignupButtonClick}
          handleInputChange={this.handleInputChange}
          email={this.state.email}
          password={this.state.password}
          isNewUser={this.state.isNewUser}
        />
        {!this.state.isNewUser && (
          <Button 
          onClick={this.toggleNewUserView}
          color="secondary" variant="contained">
            Sign Up
          </Button>
        )}
      </div>
    );
  }
}

export default LandingPage;

import React from "react";
import AuthFormComponent from "./AuthFormComponent";
// import { fetchData } from '../helperFunctions'

class AuthFormContainer extends React.Component {
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

  loginFetchRequest = async function (path, payload){

  }

  handleLoginButtonClick = (e) => {
    e.preventDefault();
    // fetchData("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password,
    //   }),
    // });
  };

  // ***** Signup functionality works correctly *****
  signupFetchRequest = async function (path, payload) {
    const response = await fetch(path, payload);
    const json = await response.json();
    console.log(json.new_user);
    this.props.logUserId(json.new_user.id)
    // this.setState({ userId: json.new_user.id });
    // return that cookie?
  };
  handleSignupButtonClick = (e) => {
    e.preventDefault();
    this.signupFetchRequest("/signup", {
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

export default AuthFormContainer;

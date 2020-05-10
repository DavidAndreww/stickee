import React from "react";
import AuthFormComponent from "./AuthFormComponent";

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
    const response = await fetch(path, payload)
    const json = await response.json()
    console.log(json)
    // document.cookie = json.token
    if(json.token !== undefined){
      this.props.setUserId(json.user.id)
      this.props.history.push(`/stickee/${json.user.id}`)
    }
  }

  handleLoginButtonClick = (e) => {
    e.preventDefault();
    this.loginFetchRequest("/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    });
  };

  // ***** Signup functionality works correctly *****
  signupFetchRequest = async function (path, payload) {
    const response = await fetch(path, payload);
    const json = await response.json();
    this.props.setUserId(json.new_user.id)
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

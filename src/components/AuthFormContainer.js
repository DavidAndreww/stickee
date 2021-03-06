import React from "react";
import AuthFormComponent from "./AuthFormComponent";
import path from "../pathVar";

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
  // toggle login or signup functionality of login/create user buttons
  toggleNewUserView = () => {
    const isNewUser = !this.state.isNewUser;
    if (isNewUser) {
      this.setState({ email: "", password: "", isNewUser });
      this.props.history.push("/signup");
    } else {
      this.setState({ email: "", password: "", isNewUser });
      this.props.history.push("/");
    }
  };

  // sends user data to *userLogIn router
  handleLoginButtonClick = async (e) => {
    try {
      // prevents default form action
      e.preventDefault();
      // async fetch requeset with user email and password
      const response = await fetch(`${path}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });
      // server response: contains jwebtoken, user data object {id, email, _password}
      const json = await response.json()
      console.log('JWT on login: ',json.token)
      if(json.token === undefined){
        window.alert('Invalid Password')
      } 
      if (json.token !== undefined) {
        // stores cookie in Redux to allow for login to protected route
        this.props.setCookie(json.token)
        // used to toggle logOut button in header.js
        this.props.logIn();
        // user id passed into URL path and used in GET request to pull data when new componenet mounts
        this.props.setUserId(json.user.id);
        this.props.history.push(`/stickee/${json.user.id}`);
      }
    } catch (err) {
      window.alert(`Unexpected error: ${err}`);
    }
  };

  // sends data to *newUserSignup router
  handleSignupButtonClick = async (e) => {
    try {
      // prevents default form action
      e.preventDefault();
      // async fetch request with user email, password
      const response = await fetch(`${path}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });

      const json = await response.json();
      if (json.new_user.id) {
        this.props.setUserId(json.new_user.id);
        window.alert("Success! Please log in to continue");
        this.toggleNewUserView();
      }
    } catch (err) {
      window.alert(`Unexpected error: ${err}`);
    }
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

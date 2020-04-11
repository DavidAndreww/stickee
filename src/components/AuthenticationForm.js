import React from "react";
import { Button, TextField, Container } from "@material-ui/core";

const LoginButton = () => {
  return (
    <Button name="login" type="submit" variant="contained" color="primary">
      Log In
    </Button>
  );
};

const SignupButton = () => {
  return (
    <Button name="signup" type="submit" variant="contained" color="primary">
      Sign Up
    </Button>
  );
};

const AuthenticationForm = ({
  handleLoginButtonClick,
  handleSignupButtonClick,
  handleInputChange,
  toggleNewUserView,
  email,
  password,
  isNewUser
}) => {
  return (
    <Container className="landing-page-component" maxWidth="xs">
      <form
        onSubmit={isNewUser ? handleSignupButtonClick : handleLoginButtonClick}
        className="login-form"
      >
        <TextField
          required
          onChange={handleInputChange}
          value={email}
          name="email"
          label="email"
          type="text"
        />
        <TextField
          required
          onChange={handleInputChange}
          value={password}
          name="password"
          label="password"
          type="text"
        />
        {isNewUser ? <SignupButton /> : <LoginButton />}
      </form>
      {isNewUser ? <Button
            onClick={toggleNewUserView}
            color="secondary"
            variant="contained"
          >
            Back To Login
          </Button>
         : 
          <Button
            onClick={toggleNewUserView}
            color="secondary"
            variant="contained"
          >
             Create User
          </Button>}
    </Container>
  );
};

export default AuthenticationForm;

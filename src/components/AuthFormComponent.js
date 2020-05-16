import React from "react";
import { Button, TextField, Container } from "@material-ui/core";

const AuthFormComponent = ({
  handleLoginButtonClick,
  handleSignupButtonClick,
  handleInputChange,
  toggleNewUserView,
  email,
  password,
  isNewUser,
}) => {
  return (
    <Container className="landing-page-component" maxWidth="xs">
      <form
        onSubmit={isNewUser ? handleSignupButtonClick : handleLoginButtonClick}
        className="login-form"
      >
        <TextField
          style={{ backgroundColor: "white", borderRadius: "5px", marginBottom: "2px" }}
          required
          onChange={handleInputChange}
          value={email}
          name="email"
          label="email"
          type="text"
        />
        <TextField
          style={{ backgroundColor: "white", borderRadius: "5px", marginBottom: "15px" }}
          required
          onChange={handleInputChange}
          value={password}
          name="password"
          label="password"
          type="text"
        />
        <Button style={{ marginBottom: "2px" }} type="submit" variant="contained" color="primary">
          {isNewUser ? "Sign Up" : "Log In"}
        </Button>
      </form>
      <Button style={{ width: "100%" }} onClick={toggleNewUserView} color="secondary" variant="contained">
        {isNewUser ? "Back To Login" : "Create User"}
      </Button>
    </Container>
  );
};

export default AuthFormComponent;

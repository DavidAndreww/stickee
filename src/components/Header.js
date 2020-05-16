import React from "react";

class Header extends React.Component {
  handleLogout = () => {
    window.location.replace('/')
  };

  // componentDidUpdate() {
  //   console.log(this.props.user_Id);
  // }

  render() {
    let path = window.location.pathname
    return (
      <div className="header-display-component">
        <h1 className="heading">STICKEE</h1>
        {path !== "/" &&
        path !== "/login" && (
          <button className="logout" onClick={this.handleLogout}>
            Log Out
          </button>
        ) }
      </div>
    );
  }
}

export default Header;

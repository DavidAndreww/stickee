import { connect } from "react-redux";
import AuthFormComponent from "../components/AuthFormComponent";

const mapStateToProps = (state) => {
  return {
    isNewUser: state.isNewUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(null, mapDispatchToProps)(AuthFormComponent);

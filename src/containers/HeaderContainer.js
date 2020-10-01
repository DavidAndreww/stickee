import { connect } from 'react-redux'
import { logOut } from '../redux/actions'
import Header from '../components/Header'

const mapStateToProps = (state) => {
  return {
    // truthy/falsy value used to display/hide logout button in header.js
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // returns user to landing page, hides logout button in header.js
    logOut: () => dispatch(logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

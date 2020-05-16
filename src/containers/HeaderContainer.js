import { connect } from 'react-redux'
import { logOut } from '../redux/actions'
import Header from '../components/Header'

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
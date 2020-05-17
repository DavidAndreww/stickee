import { connect } from 'react-redux';
import { setUserId, logIn, setCookie } from '../redux/actions'
import AuthFormContainer from '../components/AuthFormContainer'

const mapDispatchToProps = (dispatch) => {
  return {
    setUserId: (user_id) => dispatch(setUserId(user_id)),
    logIn: () => dispatch(logIn()),
    setCookie: (cookie) => dispatch(setCookie(cookie))
  }
}

export default connect(null, mapDispatchToProps)(AuthFormContainer)
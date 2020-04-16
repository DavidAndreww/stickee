import { connect } from 'react-redux';
import { setUserId } from '../redux/actions'
import AuthFormContainer from '../components/AuthFormContainer'

const mapDispatchToProps = (dispatch) => {
  return {
    setUserId: (user_id) => dispatch(setUserId(user_id))
  }
}

export default connect(null, mapDispatchToProps)(AuthFormContainer)
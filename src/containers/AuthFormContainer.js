import { connect } from 'react-redux';
import { logUserId } from '../redux/actions'
import AuthFormContainer from '../components/AuthFormContainer'

const mapDispatchToProps = (dispatch) => {
  return {
    logUserId: (user_id) => dispatch(logUserId(user_id))
  }
}

export default connect(null, mapDispatchToProps)(AuthFormContainer)
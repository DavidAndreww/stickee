import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state) => {
  return {
    user_Id: state.user_id
  }
}

export default connect(mapStateToProps)(Header)
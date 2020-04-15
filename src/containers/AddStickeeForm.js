import { connect } from 'react-redux';
import AddStickeeFormContainer from '../components/AddStickeeFormContainer'
import { addStickee } from '../redux/actions'

const mapDispatchToProps= (dispatch) => {
  return {
    addStickee: (stickee) => dispatch(addStickee(stickee))
  }
}

export default connect(null, mapDispatchToProps)(AddStickeeFormContainer)
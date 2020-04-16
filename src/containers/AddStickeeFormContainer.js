import { connect } from 'react-redux';
import AddStickeeFormContainer from '../components/AddStickeeFormContainer';


const mapStateToProps = (state) => {
  return {
    note_id: state.note_id
  }
}

export default connect(mapStateToProps)(AddStickeeFormContainer)
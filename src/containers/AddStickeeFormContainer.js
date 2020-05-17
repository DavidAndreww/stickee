import { connect } from 'react-redux';
import { addNote, setNoteId } from '../redux/actions'
import AddStickeeFormContainer from '../components/AddStickeeFormContainer';


const mapStateToProps = (state) => {
  return {
    note_id: state.note_id,
    user_id: state.user_id,
    cookie: state.cookie
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addNote(note)),
    setNoteId: (note_id) => dispatch(setNoteId(note_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStickeeFormContainer)
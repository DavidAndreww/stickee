import { connect } from 'react-redux';
import { getNotes, deleteNote } from '../redux/actions'
import StickeeDisplayContainer from '../components/StickeeDisplayContainer'

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    user_id: state.user_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNotes: (notes) => dispatch(getNotes(notes)),
    deleteNote: (note_id) => dispatch(deleteNote(note_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StickeeDisplayContainer)
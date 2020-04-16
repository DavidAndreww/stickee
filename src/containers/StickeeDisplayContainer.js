import { connect } from 'react-redux';
import { getNotes } from '../redux/actions'
import StickeeDisplayContainer from '../components/StickeeDisplayContainer'

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNotes: (notes) => dispatch(getNotes(notes))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StickeeDisplayContainer)
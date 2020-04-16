import React from 'react'
import AddStickeeFormComponent from './AddStickeeFormComponent';



class AddStickeeFormContainer extends React.Component {
  state = {
    stickeeFormOpen: false,
    message: "",
    important: true,
    urgent: true,
    // can't get note id to work
    note_id: this.props.note_id,
    user_id: 1
  }

  toggleAddStickeeForm = (backbtn = null) => {
    let stickeeFormOpen = !this.state.stickeeFormOpen;
    if (backbtn) this.setState({message: '', important: true, urgent: true})
    this.setState({ stickeeFormOpen });
  };

  handleImportantSwitch = () => {
    let important = !this.state.important;
    this.setState({ important });
  };

  handleUrgentSwitch = () => {
    let urgent = !this.state.urgent;
    this.setState({ urgent });
  };

  handleInputChange = (e) => {
    this.setState({ message: e.target.value });
  };

  createNewStickeeObject = () => {
    const message = this.state.message;
    const urgent = this.state.urgent;
    const important = this.state.important;
    const id = this.props.note_id;
    let type;

    important && urgent && (type = "do");
    important && !urgent && (type = "plan");
    !important && urgent && (type = "delegate");
    !important && !urgent && (type = "delete");

    
    return {
      user_id: this.state.user_id,
      note_id: this.props.note_id,
      note_type: type,
      note_message: message,
    };
  };

  // need to use redux to pass in notes state and update locally to reflect in browser
  addStickeeFetchRequest = async function (path, payload) {
    const response = await fetch(path, payload);
    const json = await response.json()
    
    // need to pull new ID from backend response
    console.log(json.results)
    this.props.setNoteId(json.results)
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.addStickeeFetchRequest("/stickee/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        newNote: this.createNewStickeeObject(),
      }),
    });
    this.props.addNote(this.createNewStickeeObject())

    // resetting note_id here breaks SST. need to be able to create note, and pull the insert ID from backend, set note_id to insertId + 1
    this.setState({
      message: ""
    });
    
    this.toggleAddStickeeForm();
  }

  render() {
    return (
      <AddStickeeFormComponent
          stickeeFormOpen={this.state.stickeeFormOpen}
          toggleAddStickeeForm={this.toggleAddStickeeForm}
          handleInputChange={this.handleInputChange}
          handleUrgentSwitch={this.handleUrgentSwitch}
          handleImportantSwitch={this.handleImportantSwitch}
          handleSubmit={this.handleSubmit}
          urgent={this.state.urgent}
          important={this.state.important}
          message={this.state.message}
        />
    )
  }
}

export default AddStickeeFormContainer
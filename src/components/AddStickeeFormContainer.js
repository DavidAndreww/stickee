import React from 'react'
import AddStickeeFormComponent from './AddStickeeFormComponent';



class AddStickeeFormContainer extends React.Component {
  state = {
    stickeeFormOpen: false,
    message: "",
    important: true,
    urgent: true,
    note_id: this.props.note_id,
    user_id: this.props.user_id
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

  handleSubmit = async (e) => {
    e.preventDefault();
    // sends new note object to database
    const response = await fetch("http://localhost:8000/stickee/add", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        'Authorization': document.cookie
    },
      body: JSON.stringify({
        newNote: this.createNewStickeeObject(),
      }),
    });

    const json = await response.json()
    // saves note Id in redux state
    this.props.setNoteId(json.results)
    // updates redux state with new note, so page will re-render with new note
    this.props.addNote(this.createNewStickeeObject())

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
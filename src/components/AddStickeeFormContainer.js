import React from 'react'
import AddStickeeFormComponent from './AddStickeeFormComponent';

class AddStickeeFormContainer extends React.Component {
  state = {
    stickeeFormOpen: false,
    message: "",
    important: true,
    urgent: true,
    note_id: 1,
    //needs to be generated from user login
    user_id: 1
  }

  toggleAddStickeeForm = () => {
    let stickeeFormOpen = !this.state.stickeeFormOpen;
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
    const id = this.state.note_id;
    let type;

    important && urgent && (type = "do");
    important && !urgent && (type = "plan");
    !important && urgent && (type = "delegate");
    !important && !urgent && (type = "delete");

    const newNote = {
      user_id: this.state.user_id,
      note_id: id,
      note_type: type,
      note_message: message,
    };
    return newNote;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.createNewStickeeObject())

    // fetchData("/stickee/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     newNote: this.createNewStickeeObject(),
    //   }),
    // });

    // this.setState({
    //   notes: [...notes, newNote],
    //   message: "",
    //   id: id + 1,
    // });
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
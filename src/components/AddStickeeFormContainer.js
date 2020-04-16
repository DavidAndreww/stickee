import React from 'react'
import AddStickeeFormComponent from './AddStickeeFormComponent';



class AddStickeeFormContainer extends React.Component {
  state = {
    stickeeFormOpen: false,
    message: "",
    important: true,
    urgent: true,
    note_id: this.props.note_id,
    //needs to be generated from user login
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
    const id = this.state.note_id;
    let type;

    important && urgent && (type = "do");
    important && !urgent && (type = "plan");
    !important && urgent && (type = "delegate");
    !important && !urgent && (type = "delete");

    
    return {
      user_id: this.state.user_id,
      note_id: id,
      note_type: type,
      note_message: message,
    };
  };

  // need to use redux to pass in notes state and update locally to reflect in browser
  addStickeeFetchRequest = async function (path, payload) {
    const response = await fetch(path, payload);
    const json = response.json()
    console.log(json)
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

    this.setState({
      message: "",
      note_id: this.state.note_id + 1,
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
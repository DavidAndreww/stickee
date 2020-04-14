import React from "react";
import StickeeDisplayComponent from "./StickeeDisplayComponent";
import AddStickeeForm from "./AddStickeeForm";
// import { fetchData } from "../helperFunctions";

class StickeePathWrapperComponent extends React.Component {
  state = {
    notes: [],
    stickeeFormOpen: false,
    message: "",
    important: true,
    urgent: true,
    note_id: 1,
    //needs to be generated from user login
    user_id: 1
  };

  fetchNotesOnLogin = async function (path, payload) {
    const response = await fetch(path, payload);
    const json = await response.json();
    let data = [json][0].results;
    let id = json.note_id;
    this.setState({ notes: data, note_id: id });
  };
  componentDidMount() {
    this.fetchNotesOnLogin("/stickee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: this.state.user_id
      })
    });
  }

  // ***** Works but does not allow for notes to be updated and pulled back *****
  fetchToDeleteStickee = async function (path, payload) {
    const response = await fetch(path, payload);
    const json = await response.json();
    console.log(json)
  }
  removeStickee = (e) => {
    const id = parseInt(e.target.id);
    this.fetchToDeleteStickee("/stickee", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        note_id: id,
        user_id: this.state.user_id
      }),
    });
  };

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
      note_id: id,
      note_type: type,
      note_message: message,
    };
    return newNote;
  };

  handleSubmit = (e) => {
    e.preventDefault();

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
  };

  render() {
    return (
      <div className="main-display-component">
        <StickeeDisplayComponent
          notes={this.state.notes}
          removeStickee={this.removeStickee}
        />
        <AddStickeeForm
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
      </div>
    );
  }
}

export default StickeePathWrapperComponent;

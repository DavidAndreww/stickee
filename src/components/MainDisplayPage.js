import React from "react";
import StickeeDisplayComponent from "./StickeeDisplayComponent";
import AddStickyForm from "./AddStickyForm";

class MainDisplayPage extends React.Component {
  state = {
    notes: [],
    stickyFormOpen: false,
    message: "",
    important: true,
    urgent: true,
    id: 1,
  };

  removeSticky = (e) => {
    let id = parseInt(e.target.id);
    let array = this.state.notes;
    let newArray = array.filter((object) => object.id !== id);
    this.setState({ notes: newArray });
  };

  toggleAddStickyForm = () => {
    let stickyFormOpen = !this.state.stickyFormOpen;
    this.setState({ stickyFormOpen });
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

  handleSubmit = (e) => {
    e.preventDefault();
    const notes = this.state.notes;
    const urgent = this.state.urgent;
    const important = this.state.important;
    const id = this.state.id;
    let type;

    if (important) {
      if (urgent) {
        type = "do";
      } else {
        type = "plan";
      }
    }
    if (!important) {
      if (urgent) {
        type = "delegate";
      } else {
        type = "delete";
      }
    }

    const totalNotes = notes.filter((notes) => notes.type === type);

    if (totalNotes.length >= 6) {
      window.alert(`Finish some of your "${type}" tasks before adding more! `);
      this.toggleAddStickyForm();
      return false;
    }

    const newNote = {
      id: id,
      type: type,
      message: this.state.message,
    };
    this.setState({
      notes: [...notes, newNote],
      message: "",
      id: id + 1,
    });
    this.toggleAddStickyForm();
  };

  render() {
    return (
      <div className="main-display-component">
        <StickeeDisplayComponent
          notes={this.state.notes}
          removeSticky={this.removeSticky}
        />
        <AddStickyForm
          stickyFormOpen={this.state.stickyFormOpen}
          toggleAddStickyForm={this.toggleAddStickyForm}
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

export default MainDisplayPage;

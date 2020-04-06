import React from "react";
import StickeeDisplayComponent from "./StickeeDisplayComponent";
import AddStickyForm from "./AddStickyForm";
import { Dialog } from "@material-ui/core";

class MainDisplayPage extends React.Component {
  state = {
    notes: [],
    do: [],
    plan: [],
    delegate: [],
    delete: [],
    stickyFormOpen: false,
    message: "",
    important: true,
    urgent: true,
    id: 1,
  };

  addNewStickee = (x, message) => {
    switch (x) {
      case "do":
        this.setState({ do: [...this.state.do, message] });
        break;
      case "plan":
        this.setState({ plan: [...this.state.plan, message] });
        break;
      case "delegate":
        this.setState({ delegate: [...this.state.delegate, message] });
        break;
      case "delete":
        this.setState({ delete: [...this.state.delete, message] });
        break;
      default:
        console.log("oops");
    }
  };

  removeSticky = (e) => {
    let id = parseInt(e.target.id);
    let array = this.state[e.target.name];
    let newArray = array.filter((object) => object.id !== id);
    this.setState({ [e.target.name]: newArray });
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
    const important = this.state.important;
    const urgent = this.state.urgent;
    let id = this.state.id;
    const newMessage = {
      message: this.state.message,
      id: id,
    };
    important && urgent && this.addNewStickee("do", newMessage);
    important && !urgent && this.addNewStickee("plan", newMessage);
    !important && urgent && this.addNewStickee("delegate", newMessage);
    !important && !urgent && this.addNewStickee("delete", newMessage);
    this.toggleAddStickyForm();
    this.setState({ message: "", id: id + 1 });
  };

  // handleSubmit2 = (e) => {
  //   e.preventDefault();
  //   const notes = this.state.notes;
  //   console.log(notes)
  //   const urgent = this.state.urgent;
  //   const important = this.state.important;
  //   const id = this.state.id;
  //   let type;

  //   if (important) {
  //     if (urgent) {
  //       type = "do";
  //     } else {
  //       type = "plan";
  //     }
  //   }
  //   if (!important) {
  //     if (urgent) {
  //       type = "delegate";
  //     } else {
  //       type = "delete";
  //     }
  //   }
  //   const newNote = {
  //     id: id,
  //     type: type,
  //     message: this.state.message
  //   }
  //   this.setState({
  //     notes: [ ...notes, newNote ],
  //     message: '',
  //     id: id + 1
  //   })
  //   this.toggleAddStickyForm();
  // };

  render() {
    return (
      <div className="main-display">
        <StickeeDisplayComponent
          state={{ ...this.state }}
          notes={this.state.notes}
          removeSticky={this.removeSticky}
        />
        <Dialog open={this.state.stickyFormOpen}>
          <AddStickyForm
            toggleAddStickyForm={this.toggleAddStickyForm}
            handleInputChange={this.handleInputChange}
            handleUrgentSwitch={this.handleUrgentSwitch}
            handleImportantSwitch={this.handleImportantSwitch}
            handleSubmit={this.handleSubmit}
            urgent={this.state.urgent}
            important={this.state.important}
            message={this.state.message}
          />
        </Dialog>
        <button onClick={this.toggleAddStickyForm} className="add-sticky-btn">
          +
        </button>
      </div>
    );
  }
}

export default MainDisplayPage;

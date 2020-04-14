import React from "react";
import StickeeDisplayComponent from "./StickeeDisplayComponent";

class StickeeDisplayContainer extends React.Component {
  state = {
    notes: [],
    stickeeFormOpen: false,
    user_id: 1,
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
        user_id: this.state.user_id,
      }),
    });
  }

  // ***** Works but does not allow for notes to be updated and pulled back *****
  fetchToDeleteStickee = async function (path, payload) {
    const response = await fetch(path, payload);
    const json = await response.json();
    console.log(json);
  };
  removeStickee = (e) => {
    const id = parseInt(e.target.id);
    this.fetchToDeleteStickee("/stickee", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        note_id: id,
        user_id: this.state.user_id,
      }),
    });
  };

  toggleAddStickeeForm = () => {
    let stickeeFormOpen = !this.state.stickeeFormOpen;
    this.setState({ stickeeFormOpen });
  };

  render() {
    return (
      <StickeeDisplayComponent
        notes={this.state.notes}
        removeStickee={this.removeStickee}
      />
    );
  }
}

export default StickeeDisplayContainer
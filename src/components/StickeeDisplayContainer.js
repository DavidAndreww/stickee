import React from "react";
import StickeeDisplayComponent from "./StickeeDisplayComponent";

class StickeeDisplayContainer extends React.Component {
  state = {
    notes: [],
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

  // ***** Works *****
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
    let toBeDeleted = this.state.notes.filter(notes => notes.note_id !== id)
    this.setState({notes: toBeDeleted})
    
    // * Don't know if i should be making double fetch requests or updating local state to reflect changes in browser
    // this.fetchNotesOnLogin("/stickee", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     user_id: this.state.user_id,
    //   }),
    // });
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
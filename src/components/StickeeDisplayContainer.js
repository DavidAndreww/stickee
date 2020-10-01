import React from "react";
import StickeeDisplayComponent from "./StickeeDisplayComponent";
import path from "../pathVar";

class StickeeDisplayContainer extends React.Component {
  // fetch request, called in componentDidMount
  fetchNotesOnLogin = async function (path, payload) {
    try {
      const response = await fetch(path, payload);
      const json = await response.json();
      let data = [json][0].results;
      // updates notes state in Redux with data from DB
      this.props.getNotes(data);
      // updates note_id in Redux to increment next note ID appropriately
      this.props.setNoteId(json.next_note_id);
    } catch (err) {
      window.alert(`Unexpected error while fetching data: ${err}`);
    }
  };
  // on mount, runs GET request to pull notes data from DB
  componentDidMount() {
    this.fetchNotesOnLogin(`${path}/stickee/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.props.cookie,
      },
    });
  }

  removeStickee = async (e) => {
    try {
      const id = parseInt(e.target.id);
      const response = await fetch(`${path}/stickee/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.props.cookie,
        },
        body: JSON.stringify({
          note_id: id,
          user_id: this.props.user_id,
        }),
      });
      const json = await response.json();
      // updates Redux state after DB is updated
      this.props.deleteNote(id);
    } catch (err) {
      window.alert(`Unexpected error: ${err}`);
    }
  };

  render() {
    return (
      <StickeeDisplayComponent
        notes={this.props.notes}
        removeStickee={this.removeStickee}
      />
    );
  }
}

export default StickeeDisplayContainer;

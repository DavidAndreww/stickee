import React from "react";
import StickeeDisplayComponent from "./StickeeDisplayComponent";

class StickeeDisplayContainer extends React.Component {
  
  // ***** WORKS *****
  fetchNotesOnLogin = async function (path, payload) {
    const response = await fetch(path, payload);
    const json = await response.json();
    let data = [json][0].results;
    this.props.getNotes(data)
    this.props.setNoteId(json.next_note_id)
  };
  
  componentDidMount() {
    let path = window.location.pathname.split('/')
    let id = parseInt(path[path.length - 1])
    this.fetchNotesOnLogin(`/stickee/${id}`, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": document.cookie
    },
    });
  }

  removeStickee = async (e) => {
    try {
      const id = parseInt(e.target.id);
      const response = await fetch("/stickee/", {
        method: "DELETE",
        headers: { 
          "Content-Type": "application/json",
          'Authorization': document.cookie
      },
        body: JSON.stringify({
          note_id: id,
          user_id: this.props.user_id,
        }),
      });
      const json = await response.json()
      this.props.deleteNote(id)
    } catch (err){
      window.alert(`Unexpected error: ${err}`)
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

export default StickeeDisplayContainer
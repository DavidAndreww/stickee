import React from "react";
import StickeeDisplayComponent from "./StickeeDisplayComponent";
import AddStickyForm from "./AddStickyForm";
import { fetchData } from '../helperFunctions'

class MainDisplayPage extends React.Component {
  state = {
    notes: [],
    stickyFormOpen: false,
    message: "",
    important: true,
    urgent: true,
    // note ID needs to update based on last note id in DB
    note_id: 1,
  };
  

  fetchNotes = async function(path, payload){
    const response = await fetch(path, payload)
    const json = await response.json()
    let data = [json][0].notes
    let id = json.id
    this.setState({notes: data, note_id: id})
  }
  
  componentDidMount(){
    this.fetchNotes('/sticky', {
      method: 'GET',
      headers: { "Content-Type": 'application/json' }
    })
  }

  removeSticky = (e) => {
    let id = parseInt(e.target.id);
    let [toBeDeleted] = this.state.notes.filter((object) => object.id === id);
    
    fetchData('/sticky', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        note_id: toBeDeleted.id
      })
    })
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

  createNewStickee = () => {
    const message = this.state.message
    const urgent = this.state.urgent;
    const important = this.state.important;
    const id = this.state.note_id;
    let type;

    important && urgent && (type = 'do')
    important && !urgent && (type = 'plan')
    !important && urgent && (type = 'delegate')
    !important && !urgent && (type = 'delete')

    const newNote = {
      note_id: id,
      note_type: type,
      note_message: message,
    }
    return (newNote)
  }

  handleSubmit = (e) => {
    e.preventDefault();

    
    // this.setState({
    //   notes: [...notes, newNote],
    //   message: "",
    //   id: id + 1,
    // });
    console.log(this.createNewStickee())

    // fetchData('/sticky', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     newNote: this.createNewStickee()
    //   })
    // })
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

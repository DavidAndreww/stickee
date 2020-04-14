import React from "react";
import Switch from "@material-ui/core/Switch";
import Dialog from "@material-ui/core/Dialog";

const AddStickeeFormComponent = (props) => {
  return (
    <div>
      <button onClick={props.toggleAddStickeeForm} className="toggle-dialog-btn">
        +
      </button>
      <Dialog open={props.stickeeFormOpen} className="add-stickee-dialog-component">
        <form className="add-stickee-form-wrap" onSubmit={props.handleSubmit}>
          <div className="form-left-side">
            <label>I need to....</label>
            <textarea rows="5" value={props.message} onChange={props.handleInputChange} />
          </div>
          <div className="form-right-side">
            <div className="switch">
              <label>Is it important?</label>
              <br />
              no
              <Switch
                id="important"
                checked={props.important}
                onChange={props.handleImportantSwitch}
              />
              yes
            </div>
            <div className="switch">
              <label>Is it urgent?</label>
              <br />
              no
              <Switch
                id="urgent"
                checked={props.urgent}
                onChange={props.handleUrgentSwitch}
              />
              yes
            </div>
            <button type="submit">Stick It!</button>
          </div>
        </form>
        <button className="stickee-form-back-btn" onClick={props.toggleAddStickeeForm}>
          Back
        </button>
      </Dialog>
    </div>
  );
};

export default AddStickeeFormComponent;

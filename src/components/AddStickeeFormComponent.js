import React from "react";
import Switch from "@material-ui/core/Switch";
import Dialog from "@material-ui/core/Dialog";

const AddStickeeFormComponent = ({
  handleInputChange,
  handleSubmit,
  handleUrgentSwitch,
  handleImportantSwitch,
  urgent,
  message,
  important,
  toggleAddStickeeForm,
  stickeeFormOpen,
}) => {
  return (
    <div>
      <button onClick={toggleAddStickeeForm} className="toggle-dialog-btn">
        +
      </button>
      <Dialog open={stickeeFormOpen} className="add-stickee-dialog-component">
        <form className="add-stickee-form-wrap" onSubmit={handleSubmit}>
          <div className="form-left-side">
            <label>I need to....</label>
            <textarea rows="5" value={message} onChange={handleInputChange} />
          </div>
          <div className="form-right-side">
            <div className="switch">
              <label>Is it important?</label>
              <br />
              no
              <Switch
                id="important"
                checked={important}
                onChange={handleImportantSwitch}
              />
              yes
            </div>
            <div className="switch">
              <label>Is it urgent?</label>
              <br />
              no
              <Switch
                id="urgent"
                checked={urgent}
                onChange={handleUrgentSwitch}
              />
              yes
            </div>
            <button type="submit">Stick It!</button>
          </div>
        </form>
        <button className="stickee-form-back-btn" onClick={toggleAddStickeeForm}>
          Back
        </button>
      </Dialog>
    </div>
  );
};

export default AddStickeeFormComponent;

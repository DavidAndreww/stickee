import React from "react";
import Switch from "@material-ui/core/Switch";

const AddStickyForm = ({
  handleInputChange,
  handleSubmit,
  handleUrgentSwitch,
  handleImportantSwitch,
  urgent,
  message,
  important,
  toggleAddStickyForm
}) => {
  return (
    <div className="add-sticky-dialog-component">
      <form className="add-sticky-form-wrap" onSubmit={handleSubmit}>
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
      <button className="sticky-form-back-btn" onClick={toggleAddStickyForm}>Back</button>
    </div>
  );
};

export default AddStickyForm;

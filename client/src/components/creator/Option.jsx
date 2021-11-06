import React from "react";
import Emoji from "../Format/Emoji";

const Option = (props) => {
  const handleOptionChange = (e) => {
    props.onChange(props.id, e.target.value);
  };

  const handleOptionRemove = (e) => {
    props.onDelete(props.id);
  };

  return (
    <div className="col-sm-12">
      <div className="row">
        <div className="col-sm-12">
          <div className="row option-section">
            <div className="card">
              <label className="option-label">{props.id + 1}</label>
            </div>
            <div className="card">
              <input
                className="option-input"
                type="text"
                value={props.value}
                onChange={handleOptionChange}
              />
            </div>
            <div className="card">
              <button
                className="remove-option-button"
                onClick={handleOptionRemove}
              >
                Delete Option
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option;

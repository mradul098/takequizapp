import React from "react";
import ToolTip from "./ToolTip";
import Emoji from "../Layout/Emoji";

const Tool = (props) => {
  return (
    <div className="tooltip-wrapper">
      <button  className="tool-button">
        <Emoji emoji="💀" /> Build Quiz
      </button>
      <div className="right">
        <ToolTip
          emoji="🪓"
          title="Make them suffer!"
          description=""
        />
      </div>
    </div>
  );
};

export default Tool;

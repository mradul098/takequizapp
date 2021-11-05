import React from "react";
import Emoji from "../Layout/Emoji";
import ToolTip from "./ToolTip";
import { Link } from "react-router-dom";

const Tools = (props) => {
  return (
    <div className={props.classes}>
      <div className="profile-name">{props.title}</div>
      <div className="profile-email">{props.subtitle}</div>
      <div className="row mt-4">
        <div className="card">
          <div className="tooltip-wrapper">
            <Link to="/quiz-builder">
              {/* {props.role==="Admin" && }
              disabled={props.role==="Student"} */}
              <button  className="tool-button">
                Create Quiz
              </button>
            </Link>
           
          </div>
        </div>
        <div className="card">
          <div className="tooltip-wrapper">
            <Link to="/quiz-fetcher">
              <button className="tool-button">
                Enter Quiz Id
              </button>
            </Link>
            
          </div>
        </div>
        {/* <div className="card">
          <div className="tooltip-wrapper">
            <button disabled="disabled" className="tool-button grayed">
              <Emoji emoji="🔥" /> Survival (Pro)
            </button>
          </div>
        </div>
        <div className="card">
          <div className="tooltip-wrapper">
            <button disabled="disabled" className="tool-button grayed">
              <Emoji emoji="🩸" /> Slay 'em (Pro)
            </button>
          </div>
        </div> */}
      </div>
      <div className="row mt-4">
        <div className="card">
          <div className="tooltip-wrapper">
            <Link to="/quiz-builder">
              
              <button  className="tool-button">
                Create Quiz
              </button>
            </Link>
           
          </div>
        </div>
        <div className="card">
          <div className="tooltip-wrapper">
            <Link to="/quiz-fetcher">
              <button className="tool-button">
                Enter Quiz Id
              </button>
            </Link>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Tools;

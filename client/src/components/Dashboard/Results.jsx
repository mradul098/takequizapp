import React from "react";
import Emoji from "../Layout/Emoji";
import ToolTip from "./ToolTip";
import { Link } from "react-router-dom";
import CountBox from "./CountBox";

const Tools = (props) => {
  return (
    <div className={props.classes}>
        
      <div className="profile-name">Admin Panel</div>
     
        <div className="row mt-4">
          <div className="col-sm-4">
            <CountBox title="Quizzes Created" number={props.curated} />
          </div>
         
        </div>
        
      
      {/* <div className="profile-email">{props.subtitle}</div> */}
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
       
      
      </div>
      <div className="row mt-4">
        <div className="card">
          <div className="tooltip-wrapper">
            <Link to="/created">
              
              <button  className="tool-button">
                Created Quiz List
              </button>
            </Link>
           
          </div>
        </div>
        <div className="card">
          <div className="tooltip-wrapper">
            <Link to="/results">
              <button className="tool-button">
                Quiz Results
              </button>
            </Link>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Tools;

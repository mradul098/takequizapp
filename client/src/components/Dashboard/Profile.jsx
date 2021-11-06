import React from "react";
import CountBox from "./CountBox";
import { Link, Redirect } from "react-router-dom";

const Profile = (props) => {
  return (
    <React.Fragment>
      


      <div className={props.classes}>
      <div className={props.classes}>
        <div className="profile-name">{props.name}</div>
        <div className="profile-email">{props.email}</div>
        <div className="row mt-4">
         
          <div className="col-sm-4">
            <CountBox title="Quizzes Attended" number={props.attended} />
          </div>
          
        </div>
        
      </div>
      <div className="profile-name">{props.title}</div>
      <div className="profile-email">{props.subtitle}</div>
      <div className="row mt-4 ml-4">
        
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
      <div className="row mt-4 ml-4" >
        <div className="card">
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

    </React.Fragment>
  );
};

export default Profile;

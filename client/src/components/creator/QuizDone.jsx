import React from "react";
import NavBar from "../Format/NavBar";
import { Link } from "react-router-dom";

const QuizDone = (props) => {
  return (
    <React.Fragment>
      <NavBar
        isLoggedIn={props.isLoggedIn}
        checkLogin={props.checkLogin}
        onLogout={props.onLogout}
      />
      <div className="container fluid">
        <div className="row">
          <div
            className="col-sm-12"
            style={{
              fontFamily: `'Lexend Deca', sans-serif`,
              fontSize: "36px",
              color: "var(--patterq-light)",
              marginTop: "30vh",
              textAlign: "center",
            }}
          >
            Quiz is Created
           
            
          </div>
        </div>
        <div className="row">
          <div
            className="col-sm-12"
            style={{
              fontFamily: `'Roboto', sans-serif`,
              fontSize: "28px",
              color: "pink",
              textAlign: "center",
            }}
          >
            Your quiz id is {props.location.state.quiz_id}
          </div>
        </div>
        <div className="row mt-5">
          <div
            className="col-sm-12"
            style={{
              textAlign: "center",
            }}
          >
            
          </div>
        </div>
     
      </div>
    </React.Fragment>
  );
};

export default QuizDone;

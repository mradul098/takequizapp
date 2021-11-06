import React from "react";
import NavBar from "../Format/NavBar";
import { Link, Redirect } from "react-router-dom";

const QuizTaken = (props) => {
  const { quiz } = props.location.state;
  //   if (!props.quiz) {
  //     return <Redirect to={{ pathname: "/dashboard" }} />;
  //   }
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
            Your score is {quiz.solved} / {quiz.total_questions}
            {/* <span
              style={{
                color: "var(--patterq-dark-purple)",
              }}
            >
              Takequiz
            </span> */}
          </div>
        </div>
        <div className="row pt-3">
          <div
            className="col-sm-12"
            style={{
              fontFamily: `'Roboto', sans-serif`,
              fontSize: "18px",
              color: "var(--patterq-light-purple)",
              textAlign: "center",
            }}
          >
        
          </div>
        </div>
        
       
       
             
     
      </div>
    </React.Fragment>
  );
};

export default QuizTaken;

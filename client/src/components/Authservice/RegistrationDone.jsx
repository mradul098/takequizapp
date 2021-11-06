import React from "react";
import NavBar from "../Format/NavBar";
import { Link } from "react-router-dom";

const RegistrationDone = (props) => {
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
            Congratulations! You are now a{" "}
            <span
              style={{
                color: "var(--patterq-dark-purple)",
              }}
            >
              Takequiz
            </span>
            !
          </div>
        </div>
        <div className="row">
          <div
            className="col-sm-12 mt-5"
            style={{
              textAlign: "center",
            }}
          >
            <Link to="/login">
              <span className="back-to-home ">
                <span role="img" aria-label="man-walking">
                  🚶
                </span>{" "}
                Go to Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegistrationDone;

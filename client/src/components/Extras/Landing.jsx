import React from "react";
import DemoButton from "./DemoButton";
import Icon from "../Format/Icon";
import NavBar from "../Format/NavBar";
import { Link, Redirect } from "react-router-dom";

const Landing = (props) => {
  return (
    <React.Fragment>
      {/* <NavBar
        isLoggedIn={props.isLoggedIn}
        checkLogin={props.checkLogin}
        onLogout={props.onLogout}
      /> */}
      <div className="container-fluid bg">
        <div className="" style={{ textAlign: "center", marginTop: "10vh" }}>
          <Icon size="240px" />
        </div>
        <div className="jumbo">TakeQuiz</div>

        <div className="col-sm-2 offset-sm-4">
        <Link to="/login">
                  <button
                    type="submit"
                    className="button register-button"
                    style={{
                      width: "100%",
                      height: "42px",
                      marginLeft:"55%"
                    }}
                  >
                    Login
                  </button>
        </Link>
                  <br></br>
                  <br></br>
        <Link to="registration">
                  <button
                    type="submit"
                    className="button register-button"
                    style={{
                      width: "100%",
                      height: "42px",
                      marginLeft:"55%"
                    }}
                  >
                    Register
                  </button>
        </Link>
                </div>
                
        
        {/* <div className="mt-5" style={{ textAlign: "center" }}>
          <DemoButton />
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Landing;

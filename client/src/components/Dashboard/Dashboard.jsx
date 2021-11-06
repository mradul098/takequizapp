import React, { Component ,useEffect, useState }  from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../Layout/NavBar";
import Profile from "./Profile";
import Tools from "./Tools";
import CreatedQuizList from "./CreatedQuizList";
import CreatedResultList from "./CreatedResultList";
import QuizService from "../../service/QuizService";
import TakequizService from "../../service/TakequizService";
// import { Button, ButtonToolbar, Modal } from 'react-bootstrap';



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
    };
    this.getQuizzes();
  }

  componentDidMount() {
    const authToken = sessionStorage.getItem("patterq-authToken");
    const user_id = sessionStorage.getItem("patterq-user-id");

    // get Takequiz profile
    TakequizService.getTakequiz(user_id, authToken).then((response) => {
      if (response === false) {
      } else {
        this.setState({ user: response });
        this.props.onUserUpdate(response);
      }
    });
  }

  getQuizzes = () => {
    const user_id = sessionStorage.getItem("patterq-user-id");
    QuizService.findByUser(user_id).then((response) => {
      if (response === false) {
      } else {
        this.props.onQuizLoad(response);
      }
    });
  };

  render() {
    if (!this.props.checkLogin()) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    return (
      <React.Fragment>
        <NavBar
          isLoggedIn={this.props.isLoggedIn}
          checkLogin={this.props.checkLogin}
          onLogout={this.props.onLogout}
        />
        <div className="container-fluid">
          <div className="row mt-5">
            {console.log(this.state.user)}
            <Profile
              classes="col-sm-10 offset-sm-1 mr-4 section"
              name={this.state.user.name}
              email={this.state.user.email}
              curated={this.state.user.quizCurated}
              attended={this.state.user.quizAttended}
              flawless={this.state.user.quizFlawless}
            />

            
          </div>
          
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;

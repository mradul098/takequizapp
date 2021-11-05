import React, { Component ,useEffect, useState }  from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../Layout/NavBar";
import Profile from "./Profile";
import Admintools from "./Admintools";
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
    const authToken = sessionStorage.getItem("quizden-authToken");
    const user_id = sessionStorage.getItem("quizden-user-id");

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
    const user_id = sessionStorage.getItem("quizden-user-id");
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
          <div className="row mt-5 mb-5">
            {/* <Profile
              classes="col-sm-4 offset-sm-1 mr-4 section"
              name={this.state.user.name}
              email={this.state.user.email}
              curated={this.state.user.quizCurated}
              attended={this.state.user.quizAttended}
              flawless={this.state.user.quizFlawless}
            /> */}

            {/* Tools section  */}
            
            {/* Tools section  end*/}
          </div>
          <div
            className="row mt-5 mb-5"
            // very important code
            // to (roughly) algin this with upper sections
          >
              <Admintools
              classes="curated-quiz-section section2"
              title="Takequiz Tools"
              name={this.state.user.name}
              email={this.state.user.email}
              curated={this.state.user.quizCurated}
              attended={this.state.user.quizAttended}
              flawless={this.state.user.quizFlawless}
              // subtitle="Some tools may only be available in Pro License"
            />
            
            <CreatedQuizList
              // use this class only if you're desperate: curated-quiz-section
              classes="curated-quiz-section section"
              quizzes={this.props.quizzes}
            />
            <br/>
            <CreatedResultList
              // use this class only if you're desperate: curated-quiz-section
              classes="curated-quiz-section section"
              quizzes={this.props.quizzes}
              user={this.state.user}
            />
            {/* Tools section  end*/}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;

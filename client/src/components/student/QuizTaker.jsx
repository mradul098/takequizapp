import React, { Component } from "react";
import NavBar from "../Format/NavBar";
import { Redirect } from "react-router-dom";
import QuizQuestion from "./QuizQuestion";
import Emoji from "../Format/Emoji";
import QuizService from "../../service/QuizService";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import Quiz from "../model/Quiz";


class QuizTaker extends Component {
  constructor(props) {
    super(props);
    const { questions } = this.props.quiz;
    const answers = [];
    for (let i = 0; i < questions.length; i++) {
      answers.push({
        question_id: questions[i].id,
        answer: -1,
      });
    }

    this.state = {
      quiz: this.props.quiz,
      user: this.props.user,
      answers: answers,
    };
    sessionStorage.setItem("quiz-attending", this.state.quiz._id);
  }
  
  componentDidMount() {}

  handleSelectAnswer = (q_id, opt_id) => {
    const { answers } = this.state;
    const index = answers.findIndex((answer) => answer.question_id === q_id);
    answers[index].answer = opt_id;
    this.setState({ answers: [...answers] });
  };

  handleSubmit = () => {
    const user_id = this.state.user._id;
    const quiz_id = this.state.quiz._id;
    const request = {
      user_id: user_id,
      quiz_id: quiz_id,
      answers: [...this.state.answers],
    };
    QuizService.submitAnswer(request).then((response) => {
      if (response === false) {
        console.log("FAILED!");
      } else {
        this.props.history.push({
          pathname: "/quiz-taken",
          state: { quiz: response },
        });
      }
    });
  };

  render() {
    if (!this.props.checkLogin()) {
      return <Redirect to={{ pathname: "/login" }} />;
    }

    const { quiz } = this.state;
    const renderTime = ({ remainingTime }) => {
      if (remainingTime === 0) {
        return this.handleSubmit();
      }
    //onClick={this.handleSubmit}
      return (
        <div className="timer">
          <div className="text">Remaining</div>
          <div className="value">{remainingTime}</div>
          <div className="text">seconds</div>
        </div>
      );
    };
    return (
      <React.Fragment>
        <NavBar
          isLoggedIn={this.props.isLoggedIn}
          checkLogin={this.props.checkLogin}
          onLogout={this.props.onLogout}
        />
         <div className="timer-wrapper">
          <CountdownCircleTimer
          isPlaying
          duration={quiz.time *60}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
          >
          {renderTime}
        </CountdownCircleTimer>
        </div>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-sm-8 offset-sm-2 section">
              <div className="profile-name">{quiz.title}</div>
              <div className="profile-email">{quiz.description}</div>
              <div
                className="option-dropdown pt-4"
                style={{
                  width: "max-content",
                }}
              >
                <span style={{ color: "var(--patterq-bg-dark)" }}>
                  Quiz Type:{" "}
                </span>
                {quiz.type}
              </div>
            </div>
          </div>

         

          <div className="row mt-5">
            {quiz.questions.map((question) => (
              <QuizQuestion
                key={question.id}
                question={question}
                onSelectAnswer={this.handleSelectAnswer}
                //   onTitleChange={this.handleQuestionTitleChange}
                //   onRemove={this.handleRemoveQuestion}
                //   onAddOption={this.handleQuestionAddOption}
                //   onOptionChange={this.handleOptionChange}
                //   onOptionRemove={this.handleRemoveOption}
                //   onSelectAnswer={this.handleSelectAnswer}
              />
            ))}
          </div>
          <div className="row mt-4 mb-4">
            <div
              className="col-sm-12"
              style={{
                textAlign: "center",
              }}
            >
              <button className="tool-button" onClick={this.handleSubmit}>
                <Emoji emoji="????" /> Submit
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default QuizTaker;

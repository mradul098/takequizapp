import React, { Component } from "react";
import "./App.css";
import Landing from "./components/Extras/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./components/Authservice/Registration";
import Login from "./components/Authservice/Login";
import RegistrationDone from "./components/Authservice/RegistrationDone";
import Dashboard from "./components/Dashboard/Dashboard";
import QuizBuilder from "./components/creator/QuizBuilder";
import QuizDone from "./components/creator/QuizDone";
import QuizFetcher from "./components/student/QuizFetcher";
import QuizTaker from "./components/student/QuizTaker";
import QuizTaken from "./components/student/QuizTaken";
import AdminDash from "./components/Dashboard/AdminDash"
import Created from "./components/Dashboard/Created"
import Results from "./components/Dashboard/Results"

class App extends Component {
  constructor(props) {
    super(props);
    const loginStatus =
      sessionStorage.getItem("patterq-isLoggedIn") === "LOGGED_IN"
        ? "LOGGED_IN"
        : "NOT_LOGGED_IN";
    this.state = {
      isLoggedIn: loginStatus,
      user: {
        _id: "",
        name: "",
        email: "",
        quizCreated: 0,
        quizAttended: 0,
        quizFlawless: 0,
      },
      quizAttending: null,
      quizzes: [],
      authToken: "",
    };
  }

  checkLogin = () => {
    return sessionStorage.getItem("patterq-isLoggedIn") === "LOGGED_IN";
  };

  // updates the user data globally after Login is successful
  handleLogin = (response) => {
    this.setState({
      isLoggedIn: "LOGGED_IN",
      user: { ...response },
      authToken: sessionStorage.getItem("patterq-authToken"),
    });
    sessionStorage.setItem("patterq-isLoggedIn", "LOGGED_IN");
  };

  handleUserUpdate = (response) => {
    this.setState({
      user: { ...response },
    });
  };

  handleLogout = (event) => {
    this.setState({ isLoggedIn: "NOT_LOGGED_IN" });
    sessionStorage.setItem("patterq-isLoggedIn", "");
    sessionStorage.setItem("patterq-authToken", "");
  };

  handleQuizzesCreated = (quizzes) => {
    quizzes.reverse();
    this.setState({ quizzes: quizzes });
  };

  handleQuizFetch = (quiz) => {
    this.setState({ quizAttending: quiz });
  };

  render() {
    // if (this.checkLogin()) {
    //   return <Redirect to={{ pathname: "/dashboard" }} />;
    // }
    return (
      <Router>
        {/* <NavBar
          isLoggedIn={this.state.isLoggedIn}
          checkLogin={this.checkLogin}
          onLogout={this.handleLogout}
        /> */}
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Landing
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                checkLogin={this.checkLogin}
                onLogout={this.handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/registration"
            render={(props) => (
              <Registration
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                checkLogin={this.checkLogin}
                onLogout={this.handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login
                {...props}
                onLogin={this.handleLogin}
                isLoggedIn={this.state.isLoggedIn}
                checkLogin={this.checkLogin}
                onLogout={this.handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/done"
            render={(props) => (
              <RegistrationDone
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                checkLogin={this.checkLogin}
                onLogout={this.handleLogout}
              />
            )}
          />

          

          <Route
            exact
            path="/results"
            render={(props) => (
              
              <Results
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                checkLogin={this.checkLogin}
                onLogout={this.handleLogout}
                user={this.state.user}
                quizzes={this.state.quizzes}
                onQuizLoad={this.handleQuizzesCreated}
                onUserUpdate={this.handleUserUpdate}
              /> 
             
            )}
          />
          <Route
            exact
            path="/created"
            render={(props) => (
              
              <Created
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                checkLogin={this.checkLogin}
                onLogout={this.handleLogout}
                user={this.state.user}
                quizzes={this.state.quizzes}
                onQuizLoad={this.handleQuizzesCreated}
                onUserUpdate={this.handleUserUpdate}
              /> 
             
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={(props) => (
              this.state.user.email != "admin@gmail.com" ? 
              <Dashboard
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                checkLogin={this.checkLogin}
                onLogout={this.handleLogout}
                user={this.state.user}
                quizzes={this.state.quizzes}
                onQuizLoad={this.handleQuizzesCreated}
                onUserUpdate={this.handleUserUpdate}
              /> :
              <AdminDash
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                checkLogin={this.checkLogin}
                onLogout={this.handleLogout}
                user={this.state.user}
                quizzes={this.state.quizzes}
                onQuizLoad={this.handleQuizzesCreated}
                onUserUpdate={this.handleUserUpdate}
              />
            )}
          />
          <Route
            exact
            path="/quiz-builder"
            render={(props) => (
              <QuizBuilder
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                checkLogin={this.checkLogin}
                onLogout={this.handleLogout}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/quiz-done"
            render={(props) => (
              <QuizDone
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                checkLogin={this.checkLogin}
                onLogout={this.handleLogout}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/quiz-fetcher"
            render={(props) => (
              <QuizFetcher
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                checkLogin={this.checkLogin}
                onLogout={this.handleLogout}
                onQuizFetch={this.handleQuizFetch}
              />
            )}
          />
          <Route
            exact
            path="/quiz-taker"
            render={(props) => (
              <QuizTaker
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                checkLogin={this.checkLogin}
                onLogout={this.handleLogout}
                quiz={this.state.quizAttending}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/quiz-taken"
            render={(props) => (
              <QuizTaken
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                checkLogin={this.checkLogin}
                onLogout={this.handleLogout}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;

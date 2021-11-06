import axios from "axios";
require("dotenv").config();

const QuizService = {
  submit: async (request) => {
    const user_id = sessionStorage.getItem("patterq-user-id");
    const authToken = sessionStorage.getItem("patterq-authToken");
    return await axios
      .post("/api/v1/quizzes/create/" + user_id, request, {
        headers: {
          "auth-token": authToken,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return false;
      });
  },
  findByUser: async (user_id) => {
    const authToken = sessionStorage.getItem("patterq-authToken");
    return await axios
      .get("/api/v1/quizzes/quizzer/" + user_id, {
        headers: {
          "auth-token": authToken,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return false;
      });
  },
  findById: async (quiz_id) => {
    const authToken = sessionStorage.getItem("patterq-authToken");
    return await axios
      .get("/api/v1/quizzes/" + quiz_id, {
        headers: {
          "auth-token": authToken,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return false;
      });
  },
  submitAnswer: async (request) => {
    const user_id = sessionStorage.getItem("patterq-user-id");
    const authToken = sessionStorage.getItem("patterq-authToken");
    const uri = "/api/v1/quizzes/submit/" + user_id;
    return await axios
      .post(uri, request, {
        headers: {
          "auth-token": authToken,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return false;
      });
  },
};

export default QuizService;

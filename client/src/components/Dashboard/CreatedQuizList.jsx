import React from "react";
import QuizInfo from "./QuizInfo";

const CreatedQuizList = (props) => {
  return (
    <div className={props.classes}>
      <div className="profile-name">Created Quiz List</div>
     
      <table className="table mt-4">
        <thead className="count-title">
          <tr>
            <th scope="col">SNo.</th>
            <th scope="col">Name</th>
            <th scope="col">Created on</th>
            <th scope="col">Number of Participants</th>
            
            <th scope="col">Id</th>
            {/* //<th scope="col">Result</th> */}
          </tr>
        </thead>
        <tbody>
          {props.quizzes.map((quiz) => (
            <QuizInfo
              key={quiz._id}
              title={quiz.title}
              id={quiz._id}
              participated={quiz.participated}
              date={quiz.date}
            
            />
          ))}
          
        </tbody>
      </table>
      
    </div>
  );
};

export default CreatedQuizList;

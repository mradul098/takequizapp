import React from "react";
import ResultInfo from "./ResultInfo";

const CuratedResultList = (props) => {
  return (
    
    <div  className={props.classes}>
      <div className="profile-name">Quiz Results</div>
      <div className="profile-email">
        {/* View results */}
      </div>

      <table className="table mt-4">
        <thead className="count-title">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Quiz Code</th>
            <th scope="col">Quiz Title </th>
            <th scope="col">Student name</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
        
          {props.quizzes.map((quiz) => (           
             
            // console.log("++++++"),        

            // console.log(quiz.partInfo[0].partScore),
            // console.log("++++++"),    
            quiz.partInfo.map((s,i)=>(
              <ResultInfo
            // for (let i = 0; i < partInfo.length; i++) {
                id={quiz._id}
                title={quiz.title} 
                                
                name={quiz.partInfo[i].partId} 
                score={quiz.partInfo[i].partScore}  
                
                
              // }            
            />
            ))
            
            // i++
            
          ))}

        </tbody>
      </table>
      
    </div>
  );
};

export default CuratedResultList;

import React from "react";
import Emoji from "../Layout/Emoji";
import DateUtil from "../../Utils/DateUtil";
import { Link, Redirect } from "react-router-dom";

const ResultInfo = (props) => {
  return (
    <React.Fragment>
      <tr style={{}}>
        <th
          scope="row"
          className="counterCell"
          style={{
            fontFamily: `"Lexend Deca", sans-serif`,
            fontSize: "14px",
            fontWeight: "bold",
          }}
        ></th>
        <td
          className="option-name"
          style={{
            fontFamily: `"Lexend Deca", sans-serif`,
            color: "var(--quizden-bg-dark)",
          }}
        >
          {props.id}
        </td>
        <td
          className="option-name"
          style={{
            fontFamily: `"Lexend Deca", sans-serif`,
            color: "var(--quizden-bg-dark)",
          }}
        >
          {props.title}
        </td>
        
        
        <td
          className="option-dropdown"
          style={{ color: "var(--quizden-bg-dark" }}
        >
          {props.name}
          {/* {console.log(props)} */}
        </td>
        <td
          className="option-dropdown"
          style={{ color: "var(--quizden-bg-dark" }}
        >
          {props.score}
        </td>
        </tr>
        
    </React.Fragment>
  );
};

export default ResultInfo;

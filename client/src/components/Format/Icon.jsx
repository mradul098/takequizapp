import React from "react";
import patterqLogo from "../../assets/loogo.png";

const Icon = (props) => {
  return (
    <React.Fragment>
      <img
        src={patterqLogo}
        style={{
          width: props.size,
        }}
        alt="patterq Logo"
      />
    </React.Fragment>
  );
};

export default Icon;

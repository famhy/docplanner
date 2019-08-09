import React from "react";

import "./Service.css";
import "./bootstrap.min.css";
const figureStyle = {
  marginTop: "-40px"
};

function Service(props) {
  return (
    <div className="service " style={{ backgroundColor: props.color }}>
      <h2>{props.title}</h2>

      <h1>{props.description}</h1>

      <div>{props.selection}</div>
      <div />
      {props.selection !== "" ? (
        <figure style={figureStyle}>
          <img src={props.link} />
        </figure>
      ) : (
        <figure>
          <img src={props.link} />
        </figure>
      )}
    </div>
  );
}

Service.defaultProps = {
  link: "#",
  selection: "",
  color: "red"
};
export default Service;

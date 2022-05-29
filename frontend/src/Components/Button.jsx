import React, { useState } from "react";
import "./button.css";
import {Link } from "react-router-dom"

const Button = (props) => {
  const [state, setState] = useState(false);
  const btnHandler = () => {
    fetch("http://localhost:4000/api/v1/add/coin", {
      method: `POST`,
      body: JSON.stringify(props.props),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {});
    setState(true);
  };
  const viewHandler = () => {};
  return (
    <div className="butn">
      {state ? (
        <Link to="/view">
          
          <button className="btnStyle view" onClick={viewHandler}>
            View
          </button>
        </Link>
      ) : (
        <button className="btnStyle save" onClick={btnHandler}>
          Save Data
        </button>
      )}
    </div>
  );
};

export default Button;

import React from "react";

export default function Button(props) {
  return (
    <>
      <button
        type="button"
        className={`col col-sm col-md shadow-lg m-2 btn ${props.styleclass} rounded`}>
        <i className={`${props.icon} `}></i>&nbsp;
        {props.value}
      </button>
    </>
  );
}

Button.defaultProps = {
  styleclass: "btn-light",
};

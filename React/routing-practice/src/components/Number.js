import React from "react";

export default function Number(props) {
  let string = "";
  if (isNaN(props.id)) {
    string = "The Word is:";
  } else {
    string = "The Number is:";
  }
  return (
    <div>
      <h1
        className="text-center"
        style={{ color: props.text, backgroundColor: props.background }}
      >
        {string} {props.id}
      </h1>
    </div>
  );
}

import React from "react";

export default function Box(props) {
  const boxStyle = {
    backgroundColor: props.color,
    minHeight: "10rem",
    minWidth: "10rem",
  };

  return (
    <div className="form-row justify-content-center">
      <div className="col-xl-2">
        <div className="form-row">
          <div className="col m-3">
            <div className="card">
              <div className="card-body" style={boxStyle}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

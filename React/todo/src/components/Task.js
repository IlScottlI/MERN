import React from "react";

export default function Task(props) {
  return (
    <div>
      <li>
        <div className="input-group">
          <input className="form-control" type="text" />
          <div className="input-group-append">
            <span className="input-group-text">
              <input type="checkbox" />
            </span>
          </div>
        </div>
      </li>
    </div>
  );
}

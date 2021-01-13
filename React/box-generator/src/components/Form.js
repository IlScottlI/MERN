import react, { useState } from "react";
import Box from "./Box";

const MessageForm = (props) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleBoxes();
  };
  let boxes;
  try {
    boxes = JSON.parse(localStorage.getItem("boxes"));
  } catch (error) {}

  const handleBoxes = () => {
    if (!localStorage.getItem("boxes")) {
      localStorage.setItem("boxes", JSON.stringify([{ id: 1, color: color }]));
      boxes = [{ id: 1, color: color }];
    } else {
      boxes = JSON.parse(localStorage.getItem("boxes"));
      let boxObject = { id: boxes.length + 1, color: color };
      boxes.push(boxObject);
      localStorage.setItem("boxes", JSON.stringify(boxes));
    }
    // Reset Input Value and Input Field
    setColor(null);
    document.querySelector("#colorInput").value = "";
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-row justify-content-center">
          <div className="col-xl-4">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Color</span>
              </div>
              <input
                id="colorInput"
                type="text"
                className="form-control"
                onChange={handleColorChange}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="submit">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ul className="list-inline">
        {boxes.map((e) => {
          return (
            <li className="list-inline-item" key={e.id}>
              <Box color={e.color} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MessageForm;

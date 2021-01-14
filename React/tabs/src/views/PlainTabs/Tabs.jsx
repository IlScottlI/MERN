import React, { useState } from "react";

export default function Tabs(props) {
  const [tab, setTab] = useState(props.initalTab);
  const [content, setContent] = useState(
    props.tabsArray.filter((tab) => tab.label == props.initalTab)[0].content
  );
  const onClickHandler = (e, value) => {
    e.preventDefault();
    setTab(value.label);
    setContent(value.content);
  };
  return (
    <div className="container mt-5">
      <div>
        <ul className="nav nav-tabs" role="tablist">
          {props.tabsArray.map((item, index) => {
            let className = "nav-link";
            if (tab === item.label) {
              className += " active";
            }
            return (
              <li className="nav-item" role="presentation" key={item.label}>
                <a
                  className={className}
                  role="tab"
                  data-toggle="tab"
                  onClick={(e) => onClickHandler(e, item)}
                  href=""
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="tab-content">
          <div className="tab-pane active m-4" role="tabpanel">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

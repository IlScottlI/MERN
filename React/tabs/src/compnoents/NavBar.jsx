import React from "react";

export default function NavBar(props) {
  const nav = window.location.pathname;
  console.log(nav);
  return (
    <nav className="navbar navbar-light navbar-expand">
      <div className="container">
        <a className="navbar-brand" href="#">
          CodingDojo
        </a>
        <button
          data-toggle="collapse"
          data-target="#navcol-1"
          className="navbar-toggler"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav">
            {props.navItems.map((item) => {
              let className;
              if (item.link === nav) {
                className = "nav-link active";
              } else {
                className = "nav-link ";
              }
              return (
                <li className="nav-item" key={item.label}>
                  <a className={className} href={item.link}>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

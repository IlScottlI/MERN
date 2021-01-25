import React from "react";
import { Link } from "@reach/router";

export default function Nav(props) {
  const { link, linkTitle, codeText } = props;
  return (
    <ul className="list-inline text-left">
      <li className="list-inline-item h3">
        <a className="h4" href="#">
          Manage Players
        </a>
        <strong className="ml-2">|</strong>
      </li>
      <li className="list-inline-item">
        <a className="h4" href="#">
          Manage Player Status
        </a>
      </li>
    </ul>
  );
}

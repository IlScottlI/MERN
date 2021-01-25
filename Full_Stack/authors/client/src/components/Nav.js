import React from "react";
import { Link } from "@reach/router";

export default function Nav(props) {
  const { link, linkTitle, codeText } = props;
  return (
    <div className="mb-4">
      <Link className="d-block" to={link}>
        {linkTitle}
      </Link>
      <code>{codeText}</code>
    </div>
  );
}

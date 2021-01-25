import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
import { Link } from "@reach/router";

export default function Table(props) {
  const [authorList, setAuthorList] = useState([]);
  const { link, linkTitle, codeText, baseURL } = props;
  const removeFromDom = (id) => {
    setAuthorList(authorList.filter((author) => author._id != id));
  };
  const deleteAuthor = (id) => {
    axios.delete(baseURL + "/api/authors/delete/" + id).then((res) => {
      removeFromDom(id);
    });
  };
  useEffect(() => {
    axios.get(baseURL + "/api/authors").then((res) => {
      setAuthorList(res.data.result);
    });
  }, []);

  return (
    <>
      <Nav link={link} linkTitle={linkTitle} codeText={codeText} />
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions available </th>
            </tr>
          </thead>
          <tbody>
            {authorList.map((item) => {
              return (
                <tr key={item["_id"]}>
                  <td>
                    <code>{item.name}</code>
                  </td>
                  <td>
                    <div role="group" className="btn-group btn-group-sm">
                      <Link
                        className="btn btn-primary btn-sm"
                        type="button"
                        to={`/edit/${item["_id"]}`}
                      >
                        Edit
                      </Link>
                      <a
                        className="btn btn-danger btn-sm ml-3"
                        onClick={() => {
                          deleteAuthor(item["_id"]);
                        }}
                      >
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

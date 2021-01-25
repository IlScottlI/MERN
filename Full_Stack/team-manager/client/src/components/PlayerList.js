import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

export default function PlayerList(props) {
  const [playerList, setPlayerList] = useState([]);
  const { link, linkTitle, codeText, baseURL } = props;
  const removeFromDom = (id) => {
    setPlayerList(playerList.filter((player) => player._id != id));
  };
  const deletePlayer = (id) => {
    axios.delete(baseURL + "/api/players/delete/" + id).then((res) => {
      removeFromDom(id);
    });
  };
  useEffect(() => {
    axios.get(baseURL + "/api/players").then((res) => {
      setPlayerList(res.data.result);
    });
  }, []);
  return (
    <div className="row">
      <div className="col-sm-6 col-md-5 col-lg-4 col-xl-11 ">
        <div className="box">
          <ul className="list-inline text-left">
            <li className="list-inline-item h3">
              <a className="h4" href="#">
                List
              </a>
              <span className="ml-2">|</span>
            </li>
            <li className="list-inline-item">
              <a className="h4" href="#">
                Add Player
              </a>
            </li>
          </ul>
          <div className="table-responsive table-bordered">
            <table className="table table-striped table-bordered table-hover table-sm">
              <thead>
                <tr>
                  <th className="text-left">Team Name</th>
                  <th className="text-left">Preferred Position</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {playerList.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td className="text-left">
                        <a className="h6" href="#">
                          {item.name}
                          <br />
                        </a>
                      </td>
                      <td className="text-left">{item.position}</td>
                      <td className="text-center m-0 h5">
                        <button
                          className="btn btn-danger btn-sm d-inline-block pr-5 pl-5 m-0"
                          type="button"
                          onClick={() => {
                            deletePlayer(item["_id"]);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

import Table from "./components/Table";
import Form from "./components/Form";
import Nav from "./components/Nav";
import PlayerList from "./components/PlayerList";
import { Router } from "@reach/router";

function App(props) {
  const { baseURL } = props;
  return (
    <div className="features-boxed">
      <div className="container">
        <div className="row justify-content-center features">
          <div className="col-sm-6 col-md-12 col-lg-12 item">
            <Nav />
            <div className="text-left box">
              <Router>
                <PlayerList
                  baseURL={baseURL}
                  path="/players/list"
                  link="/new"
                  linkTitle="Add an author"
                  codeText="We have quotes by:"
                />
              </Router>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

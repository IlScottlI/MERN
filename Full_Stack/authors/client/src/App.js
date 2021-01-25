import Table from "./components/Table";
import Form from "./components/Form";
import { Router } from "@reach/router";

function App(props) {
  const { baseURL } = props;
  return (
    <div className="features-boxed">
      <div className="container">
        <div className="intro">
          <h2 className="text-center">Favorite Authors</h2>
        </div>
        <div className="row justify-content-center features">
          <div className="col-sm-6 col-md-5 col-lg-5 item">
            <div className="text-left box">
              <Router>
                <Table
                  baseURL={baseURL}
                  path="/"
                  link="/new"
                  linkTitle="Add an author"
                  codeText="We have quotes by:"
                />
                <Form
                  baseURL={baseURL}
                  path="/new"
                  link="/"
                  linkTitle="Home"
                  codeText="Add a new author:"
                />
                <Form
                  baseURL={baseURL}
                  path="/edit/:id"
                  link="/"
                  linkTitle="Home"
                  codeText="Edit this author:"
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

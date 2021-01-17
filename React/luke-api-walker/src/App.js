import NavBar from "./components/NavBar";
import Details from "./components/Details";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Router } from '@reach/router';

function App() {
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState("people");
  const [resourceId, setResourceId] = useState("1");
  const [getResult, setGetResult] = useState(true);
  const [res, setResult] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("https://swapi.dev/api/")
      .then((response) => response.json())
      .then((result) => {
        setResources([]);
        let newResources = [];
        Object.keys(result).forEach((item, key) => {
          newResources.push({ id: key, name: item, url: result[item] });
        });
        setResources(newResources);
      });
  }, []);
  useEffect(() => {
    fetch(`https://swapi.dev/api/${selectedResource}/${resourceId}/`)
      .then((response) =>  response.json())
      .then((result) => {
        setResult(result)
        if (result.detail === "Not found"){
          setError(true);
        } else {
          setError(false);
        }
      });
    return () => {
    };
  }, [getResult]);
  return (
    <div>
      <NavBar
        resources={resources}
        selectedResource={selectedResource}
        setSelectedResource={setSelectedResource}
        resourceId={resourceId}
        setResourceId={setResourceId}
        getResult={getResult}
        setGetResult={setGetResult}
      />
      <div className="container mt-5">

        <Router>
          <Details 
            getResult={getResult} 
            setGetResult={setGetResult} 
            result={res} 
            setResult={setResult} 
            path="/:selectedResource/:resourceId"
            setSelectedResource={setSelectedResource}
            setResourceId={setResourceId}
            error={error}
             />
        </Router>
      </div>
    </div>

  );
}

export default App;

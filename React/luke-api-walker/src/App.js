import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState("");
  const [resourceId, setResourceId] = useState("");
  const [result, setResult] = useState({});
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
    fetch("https://swapi.dev/api/people/1/")
      .then((response) => response.json())
      .then((result) => setResult(result));
    return () => {
      console.log("Cleanup After API Call!");
    };
  }, []);
  return (
    <div>
      <NavBar
        resources={resources}
        selectedResource={selectedResource}
        setSelectedResource={setSelectedResource}
        resourceId={resourceId}
        setResourceId={setResourceId}
      />
    </div>
  );
}

export default App;

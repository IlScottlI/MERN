import { useEffect } from "react";
import Error from "./Error";
import Film from "./Film";
export default function Details(props) {
  const {
    error,
    result,
    setResourceId,
    resourceId,
    selectedResource,
    setSelectedResource,
  } = props;
  useEffect(() => {
    setResourceId(resourceId);
    setSelectedResource(selectedResource);
  }, []);

  return (
    <div>
      {error ? (
        <Error />
      ) : (
        Object.keys(result).map((key, i) =>
          key === "films" ? (
            <>
              <p key={i}>
                <span className="mr-3">
                  <strong>{key}:</strong>
                </span>
              </p>
              <ul>
                {result[key].map((film) => {
                  return (
                    <li key={film}>
                      <Film
                        api={`/${film.split("/")[4]}/${film.split("/")[5]}`}
                        title={film}
                      ></Film>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <p key={i}>
              <span className="mr-3">
                <strong>{key}:</strong>
              </span>
              <span>{result[key]}</span>
            </p>
          )
        )
      )}
    </div>
  );
}

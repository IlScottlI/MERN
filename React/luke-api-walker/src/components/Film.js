import React, { useState, useEffect } from "react";

export default function Film(props) {
  const [film, setFilm] = useState(<></>);
  const { api, title } = props;
  useEffect(() => {
    fetch(title)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setFilm(<a href={api}>{result.title}</a>);
      });
  }, [setFilm]);

  return film;
}

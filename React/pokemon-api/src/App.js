import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const initialState = [];
  const [state, setstate] = useState({ isSubmitted: false });
  const [pokemons, setpokemons] = useState(initialState);
  const [time, setTime] = useState(initialState);
  const [people, setPeople] = useState(initialState);
  useEffect(() => {
    const int = setInterval(() => setTime(new Date().toLocaleString()), 1000);

    return function clearInt() {
      clearInterval(int);
    };
  }, []);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
      .then((response) => response.json())
      .then((response) => {
        setPeople(response.results);
        state.isSubmitted = false;
      });
  }, [state.isSubmitted]);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          className="App-logo"
          alt="logo"
        />
        <div className="mt-5">Current Time: {time} </div>
        <button
          className="App-link btn btn-light mt-4"
          onClick={() => {
            state.isSubmitted = true;
          }}
        >
          Fetch Pokemon
        </button>
        <div>
          {people.length > 0 &&
            people.map((person, index) => {
              return <div key={index}>{person.name}</div>;
            })}
        </div>
      </header>
    </div>
  );
}

export default App;

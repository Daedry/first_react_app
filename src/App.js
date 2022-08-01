import { useEffect } from "react";

import "./App.css";
import SeachIcon from "./search.svg";

import React from "react";

const API_URL = "http://www.omdbapi.com?apikey=93c628f";

const movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="App">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search For a Movie"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SeachIcon} alt="Search Icon" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>
          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
        {/* movie */}
      </div>
      {/* container */}
    </div>
  );
};

export default App;

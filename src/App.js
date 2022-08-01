import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

import "./App.css";
import SeachIcon from "./search.svg";

import React from "react";

const API_URL = "http://www.omdbapi.com?apikey=93c628f";

const App = () => {
  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SeachIcon}
            alt="Search Icon"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
    </div>
  );
};

export default App;

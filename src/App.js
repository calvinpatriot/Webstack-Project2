import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import MyWatchList from "./components/MyWatchList"; // Updated import

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]); // Define watchList state variable

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchList = (movieId) => {
    setWatchList((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header />

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">WatchList</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  watchList={watchList} // Pass watchList to MoviesGrid
                  movies={movies}
                  toggleWatchList={toggleWatchList}
                />
              }
            />
            <Route
              path="/watchlist"
              element={
                <MyWatchList
                  watchList={watchList} // Pass watchList to MyWatchList
                  movies={movies}
                  toggleWatchList={toggleWatchList}
                />
              }
            />
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;

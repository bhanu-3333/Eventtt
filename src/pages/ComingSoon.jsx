import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function ComingSoon({ setBookingData }) {
  const [movies, setMovies] = useState([]);
  const API_KEY = "273ace99747d2e6de9128068acf00f79";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Coming Soon</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            setBookingData={setBookingData}  // pass it here
          />
        ))}
      </div>
    </div>
  );
}

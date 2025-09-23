import React from "react";
import MovieCard from "../components/MovieCard";

const movies = [
  { id: 1, title: "Avengers: Endgame", poster: "/poster1.jpg", theatre: "IMAX Theatre", showtime: "7:30 PM", price: 150 },
  { id: 2, title: "Spider-Man: No Way Home", poster: "/poster2.jpg", theatre: "PVR Cinemas", showtime: "6:00 PM", price: 120 },
  { id: 3, title: "The Batman", poster: "/poster3.jpg", theatre: "Cinepolis", showtime: "8:00 PM", price: 130 },
];

export default function HomePage() {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

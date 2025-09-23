import React from "react";
import { Link } from "react-router-dom";
import "../styles/MovieCard.css";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.theatre} • {movie.showtime}</p>
      <p>₹{movie.price}</p>
      <Link to="/seats" state={{ movie }}>Book Now</Link>
    </div>
  );
}

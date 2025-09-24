import React from "react";
import { Link } from "react-router-dom";
import "../styles/MovieCard.css";

export default function MovieCard({ movie }) {
  // Use TMDb poster if available, otherwise placeholder
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  // Default values if theatre/showtime/price are not provided
  const theatre = movie.theatre || "Cinema Hall 1";
  const showtime = movie.showtime || "7:00 PM";
  const price = movie.price || 250;

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{theatre} • {showtime}</p>
      <p>₹{price}</p>
      <Link to="/seats" state={{ movie }} className="book-btn">
        Book Now
      </Link>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MovieCard.css";

export default function MovieCard({ movie, setBookingData }) {
  const navigate = useNavigate();

  const handleBookNow = () => {
    setBookingData({
      movie,
      seats: [],
      snacks: [],
      total: 0,
      theatre: "Default Theatre",
      showtime: "10:00 AM",
      id: Date.now() + Math.random(),
    });
    navigate("/seats");
  };
  return (
    <div className="movie-card">
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ""}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>Release: {movie.release_date}</p>
      <button onClick={handleBookNow}>Book Now</button>
    </div>
  );
}

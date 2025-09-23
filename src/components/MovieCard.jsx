import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieCard.css';
import { motion } from 'framer-motion';

export default function MovieCard({ movie }) {
  return (
    <motion.div className="movie-card" whileHover={{ scale: 1.03 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <img className="poster" src={movie.poster} alt={movie.title} />
      <div className="meta">
        <h3>{movie.title}</h3>
        <div className="sub">{movie.genre} • {movie.duration}m</div>
        <div className="rating">⭐ {movie.rating}</div>
        <Link to={`/movie/${movie.id}`} className="book-btn">Book Tickets</Link>
      </div>
    </motion.div>
  );
}

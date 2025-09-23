import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/MovieDetailPage.css';

const MOVIE_MAP = {
  m1: {
    id: 'm1',
    title: 'Nebula Nights',
    poster: 'https://images.unsplash.com/photo-1517604931442-69f3f8f2c1b7?w=1000&q=80&auto=format&fit=crop',
    description: 'A space odyssey about lost stars and second chances.',
    duration: 128,
    cast: 'A. Starling, N. Vega',
    showtimes: ['10:00 AM', '1:30 PM', '5:00 PM', '8:30 PM'],
    theatre: 'Galaxy Cinema, Hall 1',
    price: 120
  },
  m2: {
    id: 'm2',
    title: 'Midnight Melody',
    poster: 'https://images.unsplash.com/photo-1518972559570-3c1b9fdbd0b8?w=1000&q=80&auto=format&fit=crop',
    description: 'A moving tale of music, memory and the ties that bind.',
    duration: 102,
    cast: 'L. Rhys, M. Cole',
    showtimes: ['11:00 AM', '2:45 PM', '6:00 PM', '9:15 PM'],
    theatre: 'Galaxy Cinema, Hall 2',
    price: 100
  },
  m3: {
    id: 'm3',
    title: 'Spice Trail',
    poster: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=1000&q=80&auto=format&fit=crop',
    description: 'A food-driven road trip full of laughs and strange recipes.',
    duration: 95,
    cast: 'K. Patel, R. Gomez',
    showtimes: ['10:30 AM', '1:00 PM', '4:30 PM', '7:45 PM'],
    theatre: 'Galaxy Cinema, Open Hall',
    price: 90
  }
};

export default function MovieDetailPage(){
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = MOVIE_MAP[id];
  const [selectedShowtime, setSelectedShowtime] = useState(movie.showtimes[0]);

  const goSeatSelection = () => {
    navigate(`/seat-selection/${id}/${encodeURIComponent(selectedShowtime)}`);
  };

  return (
    <div className="container" style={{ paddingBottom: 30 }}>
      <div className="detail-card">
        <img className="detail-poster" src={movie.poster} alt={movie.title} />
        <div className="detail-meta">
          <h2>{movie.title}</h2>
          <p className="desc">{movie.description}</p>
          <p><strong>Duration:</strong> {movie.duration} min</p>
          <p><strong>Cast:</strong> {movie.cast}</p>
          <p><strong>Theatre:</strong> {movie.theatre}</p>

          <div className="showtimes">
            <h4>Select Showtime</h4>
            <div className="times">
              {movie.showtimes.map(t => (
                <button
                  key={t}
                  className={`time-btn ${t === selectedShowtime ? 'active' : ''}`}
                  onClick={() => setSelectedShowtime(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginTop:14 }}>
            <button className="primary" onClick={goSeatSelection}>Proceed to Seat Selection — ${movie.price}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

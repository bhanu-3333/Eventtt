import React from 'react';
import MovieCard from '../components/MovieCard';
import '../styles/HomePage.css';

const MOVIES = [
  {
    id: 'm1',
    title: 'Nebula Nights',
    genre: 'Sci-Fi',
    duration: 128,
    rating: 4.6,
    poster: 'https://images.unsplash.com/photo-1517604931442-69f3f8f2c1b7?w=1000&q=80&auto=format&fit=crop',
    description: 'A space odyssey about lost stars and second chances.'
  },
  {
    id: 'm2',
    title: 'Midnight Melody',
    genre: 'Drama',
    duration: 102,
    rating: 4.4,
    poster: 'https://images.unsplash.com/photo-1518972559570-3c1b9fdbd0b8?w=1000&q=80&auto=format&fit=crop',
    description: 'A moving tale of music, memory and the ties that bind.'
  },
  {
    id: 'm3',
    title: 'Spice Trail',
    genre: 'Comedy',
    duration: 95,
    rating: 4.2,
    poster: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=1000&q=80&auto=format&fit=crop',
    description: 'A food-driven road trip full of laughs and strange recipes.'
  }
];

export default function HomePage(){
  return (
    <div className="container">
      <header className="hero">
        <h1>Now Showing</h1>
        <p>Pick a movie, choose showtime & seats, get a ticket.</p>
      </header>

      <section className="movies-grid">
        {MOVIES.map(m => <MovieCard key={m.id} movie={m} />)}
      </section>
    </div>
  );
}

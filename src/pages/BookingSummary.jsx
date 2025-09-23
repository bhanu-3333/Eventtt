import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MOVIE_MAP = {
  m1: { title: 'Nebula Nights', price: 120, theatre: 'Galaxy Cinema, Hall 1' },
  m2: { title: 'Midnight Melody', price: 100, theatre: 'Galaxy Cinema, Hall 2' },
  m3: { title: 'Spice Trail', price: 90, theatre: 'Galaxy Cinema, Open Hall' }
};

export default function BookingSummary(){
  const navigate = useNavigate();
  const { id, showtime } = useParams();
  const temp = JSON.parse(localStorage.getItem('movieBookingTemp') || '{}');
  const movie = MOVIE_MAP[id];
  const seats = temp.seats || [];
  const total = seats.length * movie.price;

  const confirm = () => {
    const booking = {
      id: `BKG-${Date.now()}`,
      movie: movie.title,
      movieId: id,
      showtime: showtime,
      theatre: movie.theatre,
      seats,
      total
    };
    // save booking to localStorage (for demo)
    const all = JSON.parse(localStorage.getItem('movieBookings') || '[]');
    all.push(booking);
    localStorage.setItem('movieBookings', JSON.stringify(all));
    // clear temp
    localStorage.removeItem('movieBookingTemp');

    navigate(`/confirmation/${booking.id}`);
  };

  return (
    <div className="container" style={{ paddingBottom:40 }}>
      <div style={{ maxWidth:700, margin:'18px auto', padding:16, background:'#fff', borderRadius:12, boxShadow:'0 8px 30px rgba(2,12,31,0.06)' }}>
        <h2>Booking Summary</h2>
        <p><strong>Movie:</strong> {movie.title}</p>
        <p><strong>Theatre:</strong> {movie.theatre}</p>
        <p><strong>Showtime:</strong> {showtime}</p>
        <p><strong>Seats:</strong> {seats.join(', ') || '—'}</p>
        <p><strong>Price per seat:</strong> ${movie.price}</p>
        <h3>Total: ${total}</h3>

        <div style={{ marginTop:12 }}>
          <button onClick={confirm} className="primary">Confirm Booking</button>
        </div>
      </div>
    </div>
  );
}

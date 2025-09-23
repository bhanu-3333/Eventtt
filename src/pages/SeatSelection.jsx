import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/SeatGrid.css";

export default function SeatSelection({ bookingData, setBookingData }) {
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location.state?.movie;

  const rows = 5;
  const cols = 8;
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const initialSeats = [];
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        row.push({ id: `${r}-${c}`, booked: false });
      }
      initialSeats.push(row);
    }
    setSeats(initialSeats);
  }, []);

  const toggleSeat = (r, c) => {
    const newSeats = seats.map(row => row.map(seat => ({ ...seat })));
    if (!newSeats[r][c].booked) {
      newSeats[r][c].booked = !newSeats[r][c].booked;
      setSeats(newSeats);

      const selectedSeats = [];
      newSeats.forEach(row => row.forEach(seat => seat.booked && selectedSeats.push(seat.id)));
      setBookingData({ ...bookingData, seats: selectedSeats, movie: movie.title, theatre: movie.theatre, showtime: movie.showtime, total: selectedSeats.length * movie.price });
    }
  };

  return (
    <div className="seat-selection">
      <h2>Select Your Seats - {movie?.title}</h2>
      <div className="seat-grid">
        {seats.map((row, rIndex) =>
          <div key={rIndex} className="seat-row">
            {row.map((seat, cIndex) =>
              <div
                key={seat.id}
                className={`seat ${seat.booked ? 'selected' : ''}`}
                onClick={() => toggleSeat(rIndex, cIndex)}
              />
            )}
          </div>
        )}
      </div>
      <button className="next-btn" onClick={() => navigate("/snacks")}>Next: Snacks</button>
    </div>
  );
}

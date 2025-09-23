import React from 'react';
import '../styles/seat.css';

export default function SeatGrid({ seats, toggleSeat }) {

  // Render rows with labels like A, B, C ...
  return (
    <div className="seat-area">
      {seats.rows.map((row, rowIndex) => (
        <div key={rowIndex} className="seat-row">
          <div className="row-label">{String.fromCharCode(65 + rowIndex)}</div>
          {row.map(seat => (
            <div
              key={seat.id}
              className={`seat ${seat.status}`}
              onClick={() => seat.status !== 'booked' && toggleSeat(seat.id)}
              title={`Seat ${seat.label} — ${seat.status}`}
            >
              {seat.label}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

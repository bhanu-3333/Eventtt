import React from 'react';
import QRCode from "react-qr-code";
import '../styles/MovieCard.css';

export default function TicketCard({ booking }) {
  const payload = JSON.stringify({
    id: booking.id,
    movie: booking.movie,
    seats: booking.seats,
    time: booking.showtime,
  });

  return (
    <div style={{ maxWidth:420, margin:'12px auto', padding:18, borderRadius:12, background:'#fff', boxShadow:'0 10px 30px rgba(2,12,31,0.08)' }}>
      <h3 style={{ margin:'6px 0' }}>{booking.movie}</h3>
      <p style={{ margin:'6px 0 12px', color:'#444' }}>{booking.theatre} • {booking.showtime}</p>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div>
          <strong>Seats:</strong> {booking.seats.join(', ')}<br/>
          <strong>Total:</strong> ${booking.total}
        </div>
        <div>
          <QRCode value={payload} size={110} />
        </div>
      </div>
    </div>
  );
}

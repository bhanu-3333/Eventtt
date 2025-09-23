import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TicketCard from '../components/TicketCard';

export default function Confirmation(){
  const { bookingId } = useParams();
  const all = JSON.parse(localStorage.getItem('movieBookings') || '[]');
  const booking = all.find(b => b.id === bookingId);

  if (!booking) {
    return (
      <div className="container" style={{ padding:30 }}>
        <h2>Booking not found</h2>
        <p>Looks like the booking ID is invalid. <Link to="/">Back to home</Link></p>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding:20 }}>
      <h2 style={{ textAlign:'center' }}>Booking Confirmed 🎉</h2>
      <p style={{ textAlign:'center', color:'#475569' }}>Show your QR at the counter</p>
      <TicketCard booking={booking} />
      <div style={{ textAlign:'center', marginTop:10 }}>
        <Link to="/" className="book-btn" style={{ textDecoration:'none', padding:'10px 14px' }}>Back to Home</Link>
      </div>
    </div>
  );
}

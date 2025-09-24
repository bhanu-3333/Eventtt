import React from "react";
import { QRCodeCanvas } from "qrcode.react"; // Correct named import
import "../styles/TicketCard.css";

export default function TicketCard({ booking }) {
  return (
    <div className="ticket-card" style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px", maxWidth: "300px" }}>
      <h3>{booking.movie.title}</h3>
      <p>Theatre: {booking.theatre}</p>
      <p>Showtime: {booking.showtime}</p>
      <p>Seats: {booking.seats.join(", ")}</p>
      <p>Total: ₹{booking.total}</p>
      
      <div style={{ marginTop: "10px" }}>
        <QRCodeCanvas value={`TicketID:${booking.id}`} size={128} />
      </div>
    </div>
  );
}

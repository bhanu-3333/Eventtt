import React from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
export default function Confirmation({ bookingData }) {
  const navigate = useNavigate();
  if (!bookingData.movie) return <h2>No booking data available</h2>;
  return (
    <div style={{ padding: "20px" }}>
      <h2>Booking Confirmed!</h2>
      <p><b>Movie:</b> {bookingData.movie.title}</p>
      <p><b>Theatre:</b> {bookingData.theatre}</p>
      <p><b>Showtime:</b> {bookingData.showtime}</p>
      <p><b>Seats:</b> {bookingData.seats.join(", ")}</p>
      <p><b>Snacks:</b> {bookingData.snacks.map(s => s.name).join(", ") || "None"}</p>
      <p><b>Total Paid:</b> ₹{bookingData.total}</p>
      <div style={{ margin: "20px 0" }}>
        <QRCodeCanvas value={`TicketID:${bookingData.id}`} size={128} />
      </div>
      <button 
        onClick={() => navigate("/tickets")}
        style={{
          padding: "10px 15px",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Go to My Tickets
      </button>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function BookingSummary({ bookingData }) {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth:600, margin:'20px auto', padding:20, border:'1px solid #ccc', borderRadius:10 }}>
      <h2>Booking Summary</h2>
      <p><strong>Movie:</strong> {bookingData.movie}</p>
      <p><strong>Theatre:</strong> {bookingData.theatre}</p>
      <p><strong>Showtime:</strong> {bookingData.showtime}</p>
      <p><strong>Seats:</strong> {bookingData.seats.join(", ")}</p>
      <p><strong>Snacks:</strong> {bookingData.snacks.map(s => s.name).join(", ") || "None"}</p>
      <h3>Total: ₹{bookingData.total}</h3>
      <button onClick={() => navigate("/confirmation")}>Confirm Booking</button>
    </div>
  );
}
